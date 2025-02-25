from pydantic import BaseModel
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
    title: str
    message: str
    inapp_type: bool
    email_type: bool
    created_at: datetime = Field(default_factory=datetime.now)
    is_read: bool