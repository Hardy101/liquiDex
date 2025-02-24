import { useState, useEffect } from "react";
import axios from "axios";

interface AnalysisResult {
  position: string;
  roi: number;
  risk: number;
  probability_of_success: number;
  take_profit: number;
  stop_loss: number;
}

const API_URL = "http://127.0.0.1:8000/api/analysis/";
const NOTIFICATION_URL = "http://127.0.0.1:8000/api/notifications/";

const useCryptoData = (coinId: string, days: string) => {
  const [data, setData] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.post<AnalysisResult>(API_URL, {
          coin_id: coinId,
          days: days,
        });
        setData(response.data);
        setError(null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (coinId && days) fetchData();
  }, [coinId, days]);

  return { data, loading, error };
};

export default useCryptoData;
