from pydantic import BaseModel, EmailStr
from sqlalchemy import Boolean
from sqlmodel import SQLModel, Field
from typing import Optional
from datetime import datetime

class AnalysisRequest(BaseModel):
    coin_id: str
    days: str

class AnalysisResult(BaseModel):
    position: str
    roi: float 
    risk: str
    probability: float
    take_profit: float
    stop_loss: float

class Notification(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str = Field(nullable=False)
    message: str = Field(nullable=False)
    inapp_type: bool
    email_type: bool
    created_at: datetime = Field(default_factory=datetime.now)
    is_read: bool
    type: str

class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    google_id: str = Field(unique=True, nullable=False)
    email: EmailStr = Field(unique=True, index=True, nullable=False)
    name: Optional[str]
    created_at: datetime = Field(default_factory=datetime.now)
    last_login: datetime = Field(default_factory=datetime.now)

    def update_last_login(self):
        self.last_login = datetime.now()

class UserBase(BaseModel):
    email: EmailStr
    name: Optional[str]

class UserCreate(UserBase):
    google_id: str

class UserResponse(UserBase):
    id: int
    created_at: datetime
    last_login: datetime
    