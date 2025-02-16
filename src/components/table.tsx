import React from "react";

const Table: React.FC = () => {
  return (
    <div className="px-8 text-light-1">
      <table className="w-full text-xs border border-grey-3 rounded-t-xl border-separate border-spacing-0 overflow-hidden">
        <thead>
          <tr className="text-left font-poppins-thin text-grey-4 bg-dark-2">
            <th className="flex gap-1 p-2">
              <input
                type="checkbox"
                name=""
                id=""
                className="bg-transparent my-auto"
              />
              <span className="my-auto">Bot Name</span>
            </th>
            <th>Base/Quote Pair</th>
            <th>Access</th>
            <th>Deal</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 flex gap-2">
              <span className="text-xl my-auto bg-black rounded-md p-2 my-auto">
                <i className="lni lni-android m-auto"></i>
              </span>

              <p className="my-auto grid gap-1">
                <span>ZenTrader</span>
                <span>
                  <span className="text-grey-4">TP:</span> 0.5% |
                  <span className="inline-block pl-2 text-grey-4">FO:</span>{" "}
                  0.000012 |
                  <span className="inline-block pl-2 text-grey-4">SEO:</span> 3%
                </span>
              </p>
            </td>
            <td>BTC/USDT</td>
            <td>Full Access</td>
            <td>.</td>
            <td>
              <button className="flex gap-2 bg-dark-2 border-grey-3 py-1 px-3 rounded-md">
                <span className="my-auto">On</span>
                <span className="inline-block bg-green-300 rounded-2xl relative w-5 h-3 my-auto">
                  <span className="absolute right-0 top-0 w-3 h-full bg-white rounded-2xl"></span>
                </span>
              </button>
            </td>
            <td className="text-lg flex gap-1">
              <button className="my-auto">
                <i className="lni lni-gear-1"></i>
              </button>
              <button className="my-auto">
                <i className="lni lni-clipboard"></i>
              </button>
              <button className="my-auto">
                <i className="lni lni-trash-3"></i>
              </button>
            </td>
          </tr>
          <tr className="bg-dark-2">
            <td className="p-2 flex gap-2">
              <span className="text-xl my-auto bg-black rounded-md p-2 my-auto">
                <i className="lni lni-android m-auto"></i>
              </span>

              <p className="my-auto grid gap-1">
                <span>CoinTracker</span>
                <span>
                  <span className="text-grey-4">TP:</span> 0.5% |
                  <span className="inline-block pl-2 text-grey-4">FO:</span>{" "}
                  0.000012 |
                  <span className="inline-block pl-2 text-grey-4">SEO:</span> 3%
                </span>
              </p>
            </td>
            <td>OKB/USDT</td>
            <td>Limited Access</td>
            <td>.</td>
            <td>
              <button className="flex gap-2 bg-dark-2 border-grey-3 py-1 px-3 rounded-md">
                <span className="my-auto">Off</span>
                <span className="inline-block bg-grey-2 rounded-2xl relative w-5 h-3 my-auto">
                  <span className="absolute left-0 top-0 w-3 h-full bg-white rounded-2xl"></span>
                </span>
              </button>
            </td>
            <td className="text-lg flex gap-1">
              <button className="my-auto">
                <i className="lni lni-gear-1"></i>
              </button>
              <button className="my-auto">
                <i className="lni lni-clipboard"></i>
              </button>
              <button className="my-auto">
                <i className="lni lni-trash-3"></i>
              </button>
            </td>
          </tr>
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
  );
};

export default Table;
