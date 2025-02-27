from typing import Set
from fastapi import WebSocket
from sqlmodel import Session
from db import engine
from services.notifications import get_notifications

active_connections: Set[WebSocket] = set()

async def handle_websocket(websocket: WebSocket):
    await websocket.accept()
    active_connections.add(websocket)
    try:
        with Session(engine) as session:
            notifications = get_notifications(session)
            await websocket.send_json({
                'notifications': [serialize_notification(n) for n in notifications]
            })
            
        while True:
            await websocket.receive_text()
            # This can be extended if needed (like receiving a ping or heartbeat)
    except Exception as e:
        print(f"WebSocket error: {e}")
    finally:
        active_connections.remove(websocket)

def serialize_notification(notification):
    return {
        'id': notification.id,
        'title': notification.title,
        'message': notification.message,
        'inapp_type': notification.inapp_type,
        'email_type': notification.email_type,
        'is_read': notification.is_read,
        'created_at': notification.created_at.isoformat()  # Datetime to string
    }

async def broadcast_notifications(notifications):
    serialized_notifications = [serialize_notification(n) for n in notifications]
    for connection in list(active_connections):
        try:
            await connection.send_json({"notifications": serialized_notifications})
        except Exception as e:
            print(f"Failed to send notification to a client: {e}")
            active_connections.remove(connection)
