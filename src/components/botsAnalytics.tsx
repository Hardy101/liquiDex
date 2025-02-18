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
              className="w-2/5 bg-dark-1 rounded-md border border-grey-3 p-2 outline-none my-auto"
            />
          </div>
          <div className="form-control flex justify-between pb-2">
            <label htmlFor="botname" className="text-grey-2 my-auto">
              Select Timeframe
            </label>
            <select
              name=""
              id=""
              className="w-2/5 bg-dark-1 rounded-md border border-grey-3 p-2 outline-none my-auto"
            >
              <option value="">4H</option>
              <option value="">D</option>
            </select>
          </div>
          <div className="form-control flex justify-between pb-2">
            <label htmlFor="botname" className="text-grey-2 my-auto">
              Select Bot
            </label>
            <select
              name=""
              id=""
              className="w-2/5 bg-dark-1 rounded-md border border-grey-3 p-2 outline-none my-auto"
            >
              <option value="">ZenTrader</option>
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
        <div className="w-1/2 bg-dark-2 border border-grey-3 rounded-xl p-3"></div>
      </div>
    </>
  );
};

export default BotAnalytics;
