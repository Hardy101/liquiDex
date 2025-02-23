import httpx

API_KEY = "CG-DHtKuqBw2f397KpTXKsDXFxf"
API_URL = "https://api.coingecko.com/api/v3/coins"

async def fetch_market_data(coin_id: str, days: str):
    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"{API_URL}/{coin_id}/market_chart",
            params={"vs_currency": "usd", "days": days},
            headers={"accept": "application/json", "x-cg-demo-api-key": API_KEY},
        )
        response.raise_for_status()
        return response.json()

def calculate_signal(data: dict):
    price = data["prices"][-1][1]
    volume = data["total_volumes"][-1][1]
    market_cap = data["market_caps"][-1][1]

    probability = round((volume / market_cap) * 100, 2)
    position = "Long" if probability > 50 else "Short"
    roi = round((price * 0.05), 2)
    risk = "Low" if probability > 70 else "High"
    take_profit = price * 1.10
    stop_loss = price * 0.90

    return {
        "position": position,
        "roi": roi,
        "risk": risk,
        "probability": probability,
        "take_profit": take_profit,
        "stop_loss": stop_loss,
    }
