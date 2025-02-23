/*
import { useState, useEffect, useMemo } from "react";
import axios from "axios";

interface CoinHistoryData {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
}

const API_KEY = "CG-DHtKuqBw2f397KpTXKsDXFxf";
const API_URL = "https://api.coingecko.com/api/v3/coins";

const calculateRiskWidth = (risk: number) => {
  if (risk < 25) return 'w-1/4'
  if (risk > 25) return 'w-1/4'
};

const useCryptoData = (coinId: string, days: string) => {
  const [data, setData] = useState<CoinHistoryData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const calculatePosition = (data: CoinHistoryData) => {
    if (!data) return [0, 0, 0, 0];
    const { prices, total_volumes, market_caps } = data;

    const avg_price =
      prices.reduce((sum, [, price]) => sum + price, 0) / prices.length;
    const avg_volume =
      total_volumes.reduce((sum, [, vol]) => sum + vol, 0) /
      total_volumes.length;
    const avg_market_cap =
      market_caps.reduce((sum, [, cap]) => sum + cap, 0) / market_caps.length;

    const vol_cap_ratio = avg_volume / avg_market_cap;
    const risk = vol_cap_ratio * 100;
    const chance = risk * 25;
    const TP = avg_price + avg_price * 0.05;
    const SL = avg_price - avg_price * 0.05;
    return [vol_cap_ratio, risk, chance, TP, SL];
  };

  useEffect(() => {
    const fetchCoinHistory = async () => {
      try {
        setLoading(true);
        const response = await axios.get<CoinHistoryData>(
          `${API_URL}/${coinId}/market_chart?vs_currency=usd&days=${days}`,
          {
            headers: {
              accept: "application/json",
              "x-cg-demo-api-key": API_KEY, // Replace with your actual API key
            },
          }
        );
        setData(response.data);
        // calculatePosition(data);
        setError(null);
      } catch (err: any) {
        setError(`${err}`);
      } finally {
        setLoading(false);
      }
    };

    if (coinId && days) fetchCoinHistory();
  }, [coinId, days]);

  const coindata = useMemo(
    () => (data ? calculatePosition(data) : [0, 0, 0, 0, 0]),
    [data]
  );
  return { coindata, loading, error };
};

export default useCryptoData;
*/
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

const useCryptoData = (coinId: string, days: string) => {
  const [data, setData] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<AnalysisResult>(API_URL, {
          params: { coin_id: coinId, days },
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
