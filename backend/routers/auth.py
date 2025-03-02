from fastapi import APIRouter, Depends, HTTPException, Response, Request
from google.oauth2 import id_token
from google.auth.transport import requests
from sqlmodel import Session, select
from datetime import datetime, timedelta
import jwt

from db import get_session
from models.schemas import User, GoogleAuthRequest


GOOGLE_CLIENT_ID = '395545616135-40rsc8utnt3lg8al8la5vsg2mqva2ubh.apps.googleusercontent.com'
STAFF_EMAILS = {'eghordia130@gmail.com', 'eseoseordia@gmail.com'}
SECRET_KEY = 'Meganetenshi'
COOKIE_NAME = 'liquidex_tk'

router = APIRouter()

def create_token(user_id: int):
    payload = {
        'sub': user_id,
        'exp': datetime.now() + timedelta(days=7)
    }
    return jwt.encode(payload, SECRET_KEY, algorithm='HS256')


@router.post("/")
def google_login(payload: GoogleAuthRequest,  response: Response, db: Session = Depends(get_session)):
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

        if user and user.id is not None:
            token = create_token(user_id=user.id)
            response.set_cookie(
                key=COOKIE_NAME,
                value=token,
                httponly=True,
                secure=False,
                samesite='lax',
                max_age=7*24*60*60
            )
        else:
            raise HTTPException(status_code=500, detail="User ID is missing")

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

@router.get('/me')
def get_current_user(request: Request, db: Session = Depends(get_session)):
    token = request.cookies.get(COOKIE_NAME)

    if not token:
        raise HTTPException(status_code=401, detail='Not Authenticated')

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
        user_id = payload.get('sub')
    except jwt.ExpiredSignatureError:
         raise HTTPException(status_code=401, detail="Session expired")
    except jwt.PyJWTError:
        raise HTTPException(status_code=401, detail="Invalid token")

    user = db.exec(select(User).where(User.id == user_id)).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    return {"email": user.email, "name": user.name, "is_staff": user.is_staff}

@router.post("/logout")
def logout(response: Response):
    response.delete_cookie(COOKIE_NAME)
    return {"message": "Logged out"}
