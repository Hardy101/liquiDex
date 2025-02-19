import { useState } from "react";

interface FormData {
  ticker: string;
}

const BotAnalytics: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ ticker: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <div className="text-light-1 text-xs flex justify-between gap-16">
        <form
          action="#"
          className="w-1/2 flex flex-col gap-2 text-xs bg-dark-2 border border-grey-3 rounded-xl p-3"
        >
          <h2 className="text-xl font-bold">Asset Analysis</h2>
          <div className="form-control flex justify-between pb-2">
            <label htmlFor="asset" className="text-grey-2 my-auto">
              Ticker
            </label>
            <input
              type="text"
              name="ticker"
              id="ticker"
              value={formData.ticker.toUpperCase()}
              onChange={handleChange}
              placeholder="Enter asset ID / ticker"
              className="w-3/5 bg-dark-1 rounded-md border border-grey-3 p-2 outline-none my-auto"
            />
          </div>
          <div className="form-control flex justify-between pb-2">
            <select
              name=""
              id=""
              className="w-full bg-dark-1 rounded-md border border-grey-3 p-2 outline-none my-auto"
            >
              <option value="">Time frame</option>
              <option value="">4H</option>
              <option value="">D</option>
            </select>
          </div>
          <div className="form-control flex justify-between pb-2">
            <select
              name=""
              id=""
              className="w-full bg-dark-1 rounded-md border border-grey-3 p-2 outline-none my-auto"
            >
              <option value="">Bot</option>
              <option value="">ZenTrader</option>
            </select>
          </div>
          <div className="form-control flex justify-between pb-2">
            <select
              name=""
              id=""
              className="w-full bg-dark-1 rounded-md border border-grey-3 p-2 outline-none my-auto"
            >
              <option value="">Market</option>
              <option value="">Spot</option>
              <option value="">Perpetual</option>
            </select>
          </div>
          <div className="form-control pb-2">
            <select
              name=""
              id=""
              className="w-full bg-dark-1 rounded-md border border-grey-3 p-2 outline-none my-auto"
            >
              <option value="">Trade Type</option>
              <option value="">Scalping</option>
              <option value="">Swing</option>
            </select>
          </div>
          <div className="form-control flex justify-between pb-2">
            <button
              type="button"
              className="w-full gradient-1 p-2 rounded-md text-black"
            >
              Analyse Ticker
            </button>
          </div>
        </form>
        <div className="w-1/2 bg-dark-2 border border-grey-3 rounded-xl p-3">
          <h2 className="text-xl mb-2">TON/USDT</h2>
          <p className="flex gap-4">
            <button className="flex gap-2">
              <span className="bg-dark-1 py-1 px-2 border border-grey-3 rounded-md text-green-500 my-auto">
                <i className="fa-solid fa-arrow-up"></i>
              </span>
              <span className="my-auto">Long</span>
            </button>
            <button className="flex gap-2">
              <span className="bg-dark-1 py-1 px-2 border border-grey-3 rounded-md">
                <i className="fa-solid fa-bullseye"></i>
              </span>
              <span className="my-auto">30-50%</span>
            </button>
          </p>
          <div className="mt-4 relative flex gap-4">
            <span className="bg-dark-1 py-1 px-2 border border-grey-3 rounded-md text-red-400">
              <i className="fa-solid fa-triangle-exclamation my-auto"></i>
            </span>
            <div className="w-full h-2 bg-blue-300 rounded-md my-auto"></div>
            <span className="my-auto font-bold">70%</span>
          </div>
          <div className="mt-4 relative flex gap-4">
            <button className="bg-dark-1 py-1 px-2 border border-grey-3 rounded-md text-blue-400">
              <i className="fa-solid fa-dice-two my-auto"></i>
            </button>
            <div className="w-1/2 h-2 bg-blue-300 rounded-md my-auto"></div>
            <span className="my-auto font-bold">50%</span>
          </div>
          <div className="mt-6 text-md flex gap-4">
            <p className="flex gap-2">
              <span className="my-auto">Take Profit</span>
              <span className="my-auto bg-dark-1 py-1 px-2 border border-grey-3 rounded-md">
                $5.9
              </span>
            </p>
            <p className="flex gap-2">
              <span className="my-auto">Stop Loss</span>
              <span className="my-auto bg-dark-1 py-1 px-2 border border-grey-3 rounded-md">
                $2.9
              </span>
            </p>
          </div>
          <p className="mt-2 text-grey-2 italic">
            New to Analytics? Click <span className="underline text-blue-500">here</span> to explore the icons and see what’s
            going on.
          </p>
        </div>
      </div>
    </>
  );
};

export default BotAnalytics;
