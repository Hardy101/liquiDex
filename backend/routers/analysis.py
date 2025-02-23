from fastapi import APIRouter, HTTPException
from models.schemas import AnalysisRequest, AnalysisResult
from services.crypto_service import fetch_market_data, calculate_signal

router = APIRouter()

@router.post("/", response_model=AnalysisResult)
async def analyze_crypto(data: AnalysisRequest):
    try:
        market_data = await fetch_market_data(data.coin_id, data.days)
        result = calculate_signal(market_data)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))