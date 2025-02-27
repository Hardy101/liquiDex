from sqlmodel import Session, select
from models.schemas import Notification

def create_notification(session: Session, title: str, msg: str, inapp:bool, email: bool, is_read: bool, type: str):
    notification = Notification(title=title, message=msg, inapp_type=inapp, email_type=email, is_read=is_read, type= type)
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
