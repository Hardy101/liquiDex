import React from "react";

const TradeHistory: React.FC = () => {
  return (
    <div className="bg-dark-2 border border-grey-3 rounded-xl p-3 text-light-1 text-xs grid gap-4">
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
        <form action="#" className="grid grid-cols-5 gap-4">
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
  );
};

export default TradeHistory;
