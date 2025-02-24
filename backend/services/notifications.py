from xmlrpc.client import boolean
from sqlmodel import Session, select
from models.schemas import Notification
from datetime import datetime

def create_notification(session: Session, title: str, msg: str, inapp:bool):
    notification = Notification(title=title, message=msg, inapp_type=inapp)
    session.add(notification)
    session.commit()
    session.refresh(notification)
    return notification

def get_notifications(session: Session):
    return session.exec(select(Notification)).all()

def delete_notification(session: Session, notification_id: int):
    notification = session.get(Notification, notification_id)
    if notification:
        session.delete(notification)
        session.commit()
        return {"message": "Notification deleted"}
    return {"error": "Notification not found"}
