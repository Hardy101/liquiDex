const BotAnalytics: React.FC = () => {
  return (
    <>
      <div className="text-light-1 text-xs flex justify-between gap-16">
        <form
          action="#"
          className="w-1/2 flex flex-col gap-2 text-xs bg-dark-2 border border-grey-3 rounded-xl p-3"
        >
          <h2 className="text-xl font-bold">Asset Analysis</h2>
          <div className="form-control flex justify-between pb-2">
            <label htmlFor="botname" className="text-grey-2 my-auto">
              Asset Name / Ticker
            </label>
            <input
              type="text"
              name="botname"
              id="botname"
              placeholder="Enter asset name / ticker"
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
          <h2 className="text-xl mb-2">XRP/USDT</h2>
          <p className="flex gap-2">
            <button className="bg-dark-1 py-1 px-2 border border-grey-3 rounded-md text-green-500">
              <i className="fa-solid fa-arrow-up"></i>
            </button>
            <span className="my-auto">Long</span>
          </p>
          <div className="mt-4 relative flex gap-4">
            <button className="bg-dark-1 py-1 px-2 border border-grey-3 rounded-md text-xl text-red-400">
              <i className="fa-solid fa-triangle-exclamation my-auto"></i>
            </button>
            <div className="w-full h-2 bg-blue-300 rounded-md my-auto"></div>
          </div>
          <div className="mt-4 relative flex gap-4">
            <button className="bg-dark-1 py-1 px-2 border border-grey-3 rounded-md text-xl text-blue-400">
              <i className="fa-solid fa-dice-two my-auto"></i>
            </button>
            <div className="w-full h-2 bg-blue-300 rounded-md my-auto"></div>
          </div>
          <div className="mt-10 text-lg flex gap-4">
            <p className="flex gap-2">
              <button className="bg-dark-1 py-1 px-2 border border-grey-3 rounded-md flex gap-2">
                <i className="fa-solid fa-bullseye my-auto"></i>
              </button>
              <span className="my-auto">$5.9</span>
            </p>
            <p className="flex gap-2">
              <button className="bg-dark-1 py-1 px-2 border border-grey-3 rounded-md flex gap-2">
                <i className="fa-solid fa-circle"></i>
              </button>
              <span className="my-auto">$3.9</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BotAnalytics;
