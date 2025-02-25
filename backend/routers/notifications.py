from fastapi import APIRouter, Depends, WebSocket
from sqlmodel import Session
from db import get_session
from services.notifications import get_notifications, create_notification
from models.schemas import Notification

router = APIRouter()

@router.post("/add")
def add_notification(payload: Notification, session: Session = Depends(get_session)):
    return create_notification(session, payload.title, payload.message, payload.inapp_type, payload.email_type, payload.is_read)

@router.get('/')
def read_notifications(session: Session = Depends(get_session)):
    return get_notifications(session)
