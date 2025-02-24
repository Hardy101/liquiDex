from fastapi import APIRouter, Depends
from sqlmodel import Session
from db import get_session
from services.notifications import get_notifications, create_notification

router = APIRouter()

@router.post("/add")
def add_notification(title: str, message: str, inapp, email_type, session: Session = Depends(get_session)):
    return create_notification(session, title, message, inapp, email_type)

@router.get('/')
def read_notifications(session: Session = Depends(get_session)):
    return get_notifications(session)
