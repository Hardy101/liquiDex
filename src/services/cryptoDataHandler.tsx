import { useState, useEffect } from "react";
import axios from "axios";

interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  market_data: {
    current_price: { usd: number };
    market_cap: { usd: number };
    total_volume: { usd: number };
  };
}

const API_BASE_URL = "https://api.coingecko.com/api/v3/coins/";

const CryptoDataHandler = (coinId: string) => {
  const [data, setData] = useState<CryptoData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<CryptoData>(
          `${API_BASE_URL}${coinId}`
        );
        setData(response.data);
        setError(null);
      } catch (err: any) {
        setError("Failed to fetch crypto data.");
      } finally {
        setLoading(false);
      }
    };

    if (coinId) fetchData();
  }, [coinId]);

  return { data, loading, error };
};

export default CryptoDataHandler;
