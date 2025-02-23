import React from "react";

// Media
import Logo from "../assets/logo.png";

const NotificationDiv: React.FC = () => {
  return (
    <>
      <div className="grid gap-4">
        <div className="bg-dark-2 border border-grey-3 rounded-xl p-3 text-light-1">
          <p className="notification flex justify-between">
            <span className="flex gap-2">
              <img src={Logo} alt="logo" className="w-4 my-auto" />
              <span className="font-bold text-sm my-auto">Analysis Alert</span>
            </span>
            <span className="text-grey-4 text-xs font-bold">5:09 PM</span>
          </p>

          <p className="border border-grey-3 bg-dark-1 rounded-md pl-2 py-1 my-auto text-xs mt-2">
            User
            <span className="text-green-500 font-bold cursor-pointer italic hover:underline">
              {" "}
              Eghordia{" "}
            </span>
            perfomed an analysis on BTC/USDT pair
          </p>
        </div>
        <div className="bg-dark-2 border border-grey-3 rounded-xl p-3 text-light-1">
          <p className="notification flex justify-between">
            <span className="flex gap-2">
              <img src={Logo} alt="logo" className="w-4 my-auto" />
              <span className="font-bold text-sm my-auto">System Alert</span>
            </span>
            <span className="text-grey-4 text-xs font-bold">5:20 PM</span>
          </p>

          <p className="border border-grey-3 bg-dark-1 rounded-md pl-2 py-1 my-auto text-xs mt-2">
            The system will undergo regular maintenance and will be offline
            starting 18:15. Please plan accordingly.
          </p>
        </div>
      </div>
    </>
  );
};

export default NotificationDiv;
