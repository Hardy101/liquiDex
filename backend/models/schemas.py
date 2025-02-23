from pydantic import BaseModel

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
