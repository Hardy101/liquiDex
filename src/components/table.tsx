import React from "react";

const Table: React.FC = () => {
  return (
    <div className="px-8 text-light-1">
      <table className="w-full text-xs border border-grey-3 rounded-xl border-separate">
        <thead>
          <tr className="text-left font-poppins-thin text-grey-4">
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
                  <span className="inline-block pl-2 text-grey-4">FO:</span> 0.000012 |
                  <span className="inline-block pl-2 text-grey-4">SEO:</span> 3%
                </span>
              </p>
            </td>
            <td>BTC/USDT</td>
            <td>Full Access</td>
            <td>.</td>
            <td>On</td>
            <td>Del/info/copy</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
