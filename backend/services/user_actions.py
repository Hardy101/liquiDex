from typing import Optional
from sqlmodel import Session, select
from models.schemas import User, UserCreate

def get_user_by_id(db: Session, google_id: str) -> Optional[User]:
    user = select(User).where(User.google_id==google_id)
    result = db.exec(user)
    return result.first()


def create_or_update_user(db: Session, user_data: UserCreate) -> User:
    user = get_user_by_id(db, user_data.google_id)

    if user:
        user.update_last_login()
        db.add(user)
        db.commit()
        db.refresh(user)
        return user

    new_user = User(google_id=user_data.google_id, email= user_data.email, name=user_data.name, is_staff=user_data.is_staff)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user