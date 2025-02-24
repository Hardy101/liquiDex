from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session
from db import get_session
from services.notifications import get_notifications

router = APIRouter()

@router.get('/')
def read_notifications(session: Session = Depends(get_session)):
    return get_notifications(session)

@router.post("/")
def add_notification(title: str, message: str, session: Session = Depends(get_session)):
    return create_notification(session, title, message)