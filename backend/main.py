from fastapi import FastAPI, WebSocket, Depends
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from routers import analysis, notifications, auth
from db import create_db_and_tables, engine
from contextlib import asynccontextmanager
from services.websockets import handle_websocket
from sqlmodel import Session

@asynccontextmanager
async def lifespan(app: FastAPI):
    create_db_and_tables()
    yield
    print("Shutting down...")

def get_db():
    with Session(engine) as session:
        yield session

app = FastAPI(lifespan=lifespan)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
active_connections: set[WebSocket] = set()

app.include_router(auth.router, prefix="/api/auth", tags=['authentication'])
app.include_router(analysis.router, prefix="/api/analysis", tags=["Analysis"])
app.include_router(notifications.router, prefix='/api/notifications', tags=['Notifications'])

app.get('/')
async def root():
    return {'message': 'Server running smoothly!'}

@app.websocket('/api/socket')
async def websocket_endpoint(websocket: WebSocket):
    await handle_websocket(websocket)
    

if __name__ == "__main__":
    uvicorn.run("main:app", host='127.0.0.1', port=8000, reload=True)