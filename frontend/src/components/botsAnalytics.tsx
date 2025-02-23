import { useState } from "react";
import useCryptoData from "../services/useCryptoData";

interface FormData {
  ticker: string;
}

const BotAnalytics: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ ticker: "" });
  const [coinId, setCoinId] = useState("");
  const [days, setDays] = useState("1");
  const [submittedCoin, setSubmittedCoin] = useState<string>(coinId);
  const [submittedDays, setSubmittedDays] = useState<string>(days);

  const { data, loading, error } = useCryptoData(submittedCoin, submittedDays);

  // const [submittedData, setSubmittedData] = useState<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setCoinId(value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedCoin(coinId);
    setSubmittedDays(days);
  };
  return (
    <>
      <div className="text-light-1 text-xs flex justify-between gap-16">
        <form
          method="get"
          action="#"
          className="w-1/2 flex flex-col gap-2 text-xs bg-dark-2 border border-grey-3 rounded-xl p-3"
          onSubmit={handleSubmit}
        >
          <h2 className="text-xl font-bold">Asset Analysis</h2>
          <div className="relative form-control flex justify-between pb-2">
            <label htmlFor="asset" className="text-grey-2 my-auto">
              Crypto Name / Ticker
            </label>
            <input
              type="text"
              name="ticker"
              id="ticker"
              value={formData.ticker}
              onChange={handleChange}
              placeholder="Enter asset Name / ticker"
              className="w-3/5 bg-dark-1 rounded-md border border-grey-3 p-2 outline-none my-auto"
            />
          </div>
          <div className="form-control flex justify-between pb-2">
            <select
              name="timeframe"
              id="timeframe"
              className="w-full bg-dark-1 rounded-md border border-grey-3 p-2 outline-none my-auto"
            >
              <option value="">Time frame</option>
              <option value="">4H</option>
              <option value="">D</option>
            </select>
          </div>
          <div className="form-control flex justify-between pb-2">
            <select
              name="botname"
              id="botname"
              className="w-full bg-dark-1 rounded-md border border-grey-3 p-2 outline-none my-auto"
            >
              <option value="">Bot</option>
              <option value="">ZenTrader</option>
            </select>
          </div>
          <div className="form-control flex justify-between pb-2">
            <select
              name="markettype"
              id="markettype"
              className="w-full bg-dark-1 rounded-md border border-grey-3 p-2 outline-none my-auto"
            >
              <option value="">Market</option>
              <option value="">Spot</option>
              <option value="">Perpetual</option>
            </select>
          </div>
          <div className="form-control pb-2">
            <select
              name="tradetype"
              id="tradetype"
              className="w-full bg-dark-1 rounded-md border border-grey-3 p-2 outline-none my-auto"
            >
              <option value="">Trade Type</option>
              <option value="">Scalping</option>
              <option value="">Swing</option>
            </select>
          </div>
          <div className="form-control flex justify-between pb-2">
            <button
              type="submit"
              className="w-full gradient-1 p-2 rounded-md text-black hover:scale-105 transition duration-300 ease-in-out"
            >
              Analyse Ticker
            </button>
          </div>
        </form>
        <div className="w-1/2 bg-dark-2 border border-grey-3 rounded-xl p-3">
          {loading && (
            <p className="text-grey-4 text-xl p-4">
              Enter ticker to analyse...
            </p>
          )}
          {error && <p className="text-red-500">{error}</p>}
          {data && !loading && !error && (
            <div>
              <h2 className="text-xl mb-2">{coinId}</h2>
              <p className="flex gap-4">
                <span className="flex gap-2">
                  <span
                    className={`bg-dark-1 py-1 px-2 border border-grey-3 rounded-md text-${
                      data.position.toLocaleLowerCase() == 'short' ? "red-500" : "green-500"
                    } my-auto`}
                  >
                    <i
                      className={`fa-solid fa-arrow-${
                        data.position.toLocaleLowerCase() == "short" ? "down" : "up"
                      }`}
                    ></i>
                  </span>
                  <span className="my-auto">{data.position}</span>
                </span>
                <span className="flex gap-2">
                  <span className="bg-dark-1 py-1 px-2 border border-grey-3 rounded-md">
                    <i className="fa-solid fa-bullseye"></i>
                  </span>
                  <span className="my-auto">{data.roi}%</span>
                </span>
              </p>
              <div className="mt-6 text-md flex gap-4">
                <p className="flex gap-2">
                  <span className="my-auto">Risk </span>
                  <span className="my-auto bg-dark-1 py-1 px-2 border border-grey-3 rounded-md">
                    {data.risk}
                  </span>
                </p>
                <p className="flex gap-2">
                  <span className="my-auto">Take Profit</span>
                  <span className="my-auto bg-dark-1 py-1 px-2 border border-grey-3 rounded-md">
                    ${data.take_profit.toFixed(4)}
                  </span>
                </p>
                <p className="flex gap-2">
                  <span className="my-auto">Stop Loss</span>
                  <span className="my-auto bg-dark-1 py-1 px-2 border border-grey-3 rounded-md">
                    ${data.stop_loss.toFixed(4)}
                  </span>
                </p>
              </div>
              <p className="mt-2 text-grey-2 italic">
                New to Analytics? Click{" "}
                <span className="underline text-blue-500">here</span> to explore
                the icons and see what's going on.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BotAnalytics;
