import uvicorn
import socketio
from fastapi import FastAPI

app = FastAPI()

sio = socketio.AsyncServer(async_mode='asgi', cors_allowed_origins='*')
socket_app = socketio.ASGIApp(sio)
app.mount('/', socket_app)

@app.get('/')
def root():
    return {'message': '🚀 Server running successfully'}