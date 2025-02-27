from fastapi import FastAPI, Depends
import httpx
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import Session
from contextlib import asynccontextmanager
from typing import Annotated
import socketio
from routers import analysis, notifications
from db import create_db_and_tables, get_session
from services.notifications import get_notifications, Notification

sio = socketio.AsyncServer(
    async_mode='asgi', 
    cors_allowed_origins=['http://localhost:5173'],
    logger=True, 
    engineio_logger=True
)

SessionDep = Annotated[Session, Depends(get_session)]

@asynccontextmanager
async def lifespan(app: FastAPI):
    create_db_and_tables()
    yield
    print("Shutting down...")

app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

socket_app = socketio.ASGIApp(sio, other_asgi_app=app, socketio_path='/api/socket')

app.include_router(analysis.router, prefix="/api/analysis", tags=["Analysis"])
app.include_router(notifications.router, prefix='/api/notifications', tags=['Notifications'])

@sio.event
async def connect(sid, environ, auth):
    print(f'{sid}: connected')

@sio.event
async def disconnect(sid):
    print(f"Client {sid} disconnected")

@sio.event
async def fetch_notifications(sid, session: Session = Depends(get_session)):
    try:
        print(f"⚡ Fetching notifications for {sid}")
        notifications = get_notifications(session)
        # notifications_data = [{"id": n.id, "message": n.message} for n in notifications]
        await sio.emit("notifications", notifications, room=sid)
        print(f"✅ Notifications sent: {notifications}")
    except Exception as e:
        print(f"❌ Error fetching notifications: {str(e)}")
        await sio.emit("notifications", {"error": "Failed to fetch notifications"}, room=sid)

@app.get("/")
async def root():
    return {"message": "Crypto Analysis API is running 🚀"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:socket_app", host="127.0.0.1", port=8000, reload=True)