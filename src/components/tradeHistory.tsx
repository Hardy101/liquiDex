import React from "react";

const TradeHistory: React.FC = () => {
  const trade_types = [
    { type: "all_trades", txt: "All Trades", amnt: "57" },
    { type: "buy", txt: "Buy Side", amnt: "29" },
    { type: "sell", txt: "Sell Side", amnt: "28" },
  ];
  const table_data = [
    {
      time: "2024/07/20/ - 16:40:20",
      coin: "BTC/USDT",
      side: "sell",
      price: "$4.50",
      quantity: "35",
      fee: "5.001 USDT",
      pnl: "+ 3.50 USDT",
    },
    {
      time: "2024/07/20/ - 16:40:20",
      coin: "BTC/USDT",
      side: "sell",
      price: "$4.50",
      quantity: "3.5",
      fee: "5.001",
      pnl: "+ 3.50 USDT",
    },
    {
      time: "2024/07/20/ - 16:40:20",
      coin: "BTC/USDT",
      side: "sell",
      price: "$4.50",
      quantity: "3.5",
      fee: "5.001",
      pnl: "+ 3.50 USDT",
    },
    {
      time: "2024/07/20/ - 16:40:20",
      coin: "BTC/USDT",
      side: "sell",
      price: "$4.50",
      quantity: "3.5",
      fee: "5.001",
      pnl: "+ 3.50 USDT",
    },
    {
      time: "2024/07/20/ - 16:40:20",
      coin: "BTC/USDT",
      side: "sell",
      price: "$4.50",
      quantity: "3.5",
      fee: "5.001",
      pnl: "+ 3.50 USDT",
    },
    {
      time: "2024/07/20/ - 16:40:20",
      coin: "BTC/USDT",
      side: "sell",
      price: "$4.50",
      quantity: "3.5",
      fee: "5.001",
      pnl: "+ 3.50 USDT",
    },
  ];
  return (
    <div className=" text-light-1 text-xs">
      <div className="bg-dark-2 border border-grey-3 rounded-xl p-3 grid gap-4">
        <div className="flex justify-between gap-4">
          <h2 className="text-xl font-bold flex gap-4 grow">
            <span className="my-auto">Trade History</span>
            <span className="bg-dark-3 border border-light-1 rounded-md px-2 text-xs font-medium my-auto">
              57 transactions
            </span>
          </h2>

          <form
            action="#"
            className="flex border border-grey-3 rounded-md pl-2 py-2 my-auto text-xs bg-dark-1 w-2/5"
          >
            <i className="lni lni-search-1 my-auto"></i>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search"
              className="grow my-auto px-2 outline-none"
            />
          </form>
        </div>
        {/* Filter Trades */}
        <div>
          <form action="#" className="grid grid-cols-4 gap-4">
            <div className="">
              <input
                type="date"
                name=""
                id=""
                className="analytics-dashboard-select"
                placeholder="Select Date"
              />
            </div>
            <div>
              <select name="" id="" className="analytics-dashboard-select">
                <option value="#">Filter By Coin</option>
              </select>
            </div>
            <div>
              <select name="" id="" className="analytics-dashboard-select">
                <option value="#">Filter By Price</option>
              </select>
            </div>
            <div>
              <select name="" id="" className="analytics-dashboard-select">
                <option value="#">Filter By Quantity</option>
              </select>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-8">
        {/* Trades */}
        <ul className="flex gap-4 text-xs text-grey-2 border-b border-grey-4">
          {trade_types.map(({ type, txt, amnt }, index) => (
            <li
              className={`flex gap-2 pb-2 ${
                type == "all_trades" ? "border-b border-light-1" : ""
              }`}
              key={index}
            >
              <span>{txt}</span>
              <span className="gradient-1 rounded-md px-2 text-dark-1 text-xs my-auto">
                {amnt}
              </span>
            </li>
          ))}
        </ul>
        {/* History */}
        <table className="w-full text-xs border border-grey-3 rounded-t-xl border-separate border-spacing-0 overflow-hidden mt-4">
          <thead>
            <tr className="text-left font-poppins-thin text-grey-4 bg-dark-2">
              <th className="p-2">Time</th>
              <th>Coin</th>
              <th>Side</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Fee</th>
              <th>Realised PNL</th>
            </tr>
          </thead>
          <tbody>
            {table_data.map(({ ...props }, index) => (
              <tr
                key={index}
                className={`${index % 2 !== 0 ? "bg-dark-2" : ""}`}
              >
                <td className="p-2">{props.time}</td>
                <td>{props.coin}</td>
                <td>{props.side}</td>
                <td>{props.price}</td>
                <td>{props.quantity}</td>
                <td>{props.fee}</td>
                <td>{props.pnl}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between w-full text-xs bg-dark-2 rounded-b-xl text-grey-4 py-1">
          <button className="flex gap-2 p-2">
            <i className="lni lni-arrow-left my-auto"></i>
            <span className="my-auto">Previous</span>
          </button>
          <button className="grow justify-center flex gap-2">
            <span className="bg-dark-1 rounded-sm px-2 py-1 my-auto">1</span>
            <span className="my-auto">2</span>
          </button>
          <button className="flex gap-2 p-2">
            <span className="my-auto">Next</span>
            <i className="lni lni-arrow-right my-auto"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TradeHistory;
