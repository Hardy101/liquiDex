from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import analysis, notifications
from typing import Annotated
from fastapi import Depends
from db import create_db_and_tables, get_session
from sqlmodel import Session
from contextlib import asynccontextmanager

SessionDep = Annotated[Session, Depends(get_session)]

@asynccontextmanager
async def lifespan(app: FastAPI):
    create_db_and_tables()
    yield
    print("Shutting down...")

app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(analysis.router, prefix="/api/analysis", tags=["Analysis"])
app.include_router(notifications.router, prefix='/api/notifications', tags=['Notifications'])

@app.get("/")
async def root():
    return {"message": "Crypto Analysis API is running 🚀"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
    # uvicorn main:app --reload        
