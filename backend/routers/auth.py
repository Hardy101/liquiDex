from fastapi import APIRouter, Depends
from google.oauth2 import id_token
from google.auth.transport import requests
from sqlmodel import Session
from datetime import datetime

from models.schemas import User


GOOGLE_CLIENT_ID = '395545616135-40rsc8utnt3lg8al8la5vsg2mqva2ubh.apps.googleusercontent.com'

router = APIRouter()