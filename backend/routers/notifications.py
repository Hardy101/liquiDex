from fastapi import APIRouter, Depends, WebSocket, WebSocketDisconnect
from sqlmodel import Session
from websockets import broadcast
from services import notifications
from db import get_session
from services.notifications import get_notifications, create_notification
from models.schemas import Notification
from services.websockets import broadcast_notifications

router = APIRouter()

@router.post('/add')
async def add_notification(payload: Notification, session: Session = Depends(get_session)):
    create_notification(session, payload.title, payload.message, payload.inapp_type, payload.email_type, payload.is_read, payload.type)

    notifications = get_notifications(session)
    await broadcast_notifications(notifications)

    return {'message': 'Notification added'}

@router.get('/')
def read_notifications(session: Session = Depends(get_session)):
    return get_notifications(session)