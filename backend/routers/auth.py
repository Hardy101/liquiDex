from multiprocessing import Value
from fastapi import APIRouter, Depends, HTTPException
from google.oauth2 import id_token
from google.auth.transport import requests
from sqlmodel import Session, select
from datetime import datetime

from db import get_session
from models.schemas import User, GoogleAuthRequest


GOOGLE_CLIENT_ID = '395545616135-40rsc8utnt3lg8al8la5vsg2mqva2ubh.apps.googleusercontent.com'
STAFF_EMAILS = {'eghordia130@gmail.com', 'eseoseordia@gmail.com'}

router = APIRouter()

@router.post("/")
def google_login(payload: GoogleAuthRequest, db: Session = Depends(get_session)):
    try:
        idinfo = id_token.verify_oauth2_token(payload.token, requests.Request(), GOOGLE_CLIENT_ID)

        google_id = idinfo['sub']
        email = idinfo['email']
        name = idinfo.get('name')
        user = db.exec(select(User).where(User.google_id == google_id)).first()
        

        if user:
            user.last_login = datetime.now()
        else:
            user = User(
                google_id=google_id,
                email=email,
                name=name,
                created_at=datetime.now(),
                last_login=datetime.now(),
                is_staff= email in STAFF_EMAILS
            )
            db.add(user)

        db.commit()
        db.refresh(user)

        return {
            "id": user.id,
            "email": user.email,
            "name": user.name,
            "created_at": user.created_at,
            "last_login": user.last_login,
            "is_staff": user.is_staff
        }

    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid token")