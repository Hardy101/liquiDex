import { useState, useEffect } from "react";
import axios from "axios";

interface CoinHistoryData {
  id: string;
  symbol: string;
  name: string;
  market_data?: {
    current_price: { usd: number };
    market_cap: { usd: number };
    total_volume: { usd: number };
  };
}

const API_KEY = "CG-DHtKuqBw2f397KpTXKsDXFxf";
const API_URL = "https://api.coingecko.com/api/v3/coins";

const cryptoDataHandler = (coinId: string, days: string) => {
  const [data, setData] = useState<CoinHistoryData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
        // Data.prices, total_volumes, market_caps
        setData(response.data);
        setError(null);
      } catch (err: any) {
        setError(`${err}`);
      } finally {
        setLoading(false);
      }
    };

    if (coinId && days) fetchCoinHistory();
  }, [coinId, days]);

  return { data, loading, error };
};

export default cryptoDataHandler;

//
{
  /*
  {
  "prices": [
    [
      1711843200000,
      69702.3087473573
    ],
    [
      1711929600000,
      71246.9514406015
    ],
    [
      1711983682000,
      68887.7495158568
    ]
  ],
  "market_caps": [
    [
      1711843200000,
      1370247487960.09
    ],
    [
      1711929600000,
      1401370211582.37
    ],
    [
      1711983682000,
      1355701979725.16
    ]
  ],
  "total_volumes": [
    [
      1711843200000,
      16408802301.8374
    ],
    [
      1711929600000,
      19723005998.215
    ],
    [
      1711983682000,
      30137418199.6431
    ]
  ]
}
   */
}
