import uvicorn
import socketio
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    'http://127.0.0.1:5500',
    'http://localhost:5500'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

sio = socketio.AsyncServer(async_mode='asgi', cors_allowed_origins=origins)
app.mount('/socket.io', socketio.ASGIApp(sio))

@sio.on('connect') # type: ignore
async def connect(sid, env):
    print(f"New client connect to ID: {sid}")

@sio.on('disconnect') # type: ignore
async def disconnect(sid):
    print(f"Client disconnected {sid}")

@app.get('/')
def root():
    return {'message': '🚀 Server running successfully'}

if __name__ == '__main__':
    uvicorn.run('main:app', host='127.0.0.1', port=8000, reload=True)