import React from "react";

// Media
import Logo from "../assets/logo.png";

const BotsNotifications: React.FC = () => {
  return (
    <>
      <div className="bg-dark-2 border border-grey-3 rounded-xl p-3 text-light-1">
        <div className="notification flex justify-between">
          <h2 className="flex gap-2">
            <img src={Logo} alt="logo" className="w-4 my-auto" />
            <span className="font-bold text-sm my-auto">Moonscalper</span>
          </h2>
          <span className="text-grey-4 text-xs">Today | 5:09 PM</span>
        </div>

        <div className="border border-grey-3 bg-dark-1 rounded-md pl-2 py-1 my-auto text-xs mt-4">
          <p>
            Order Executed: "Your buy order for 100 shares of AAPL at{" "}
            <span className="text-green-400">$150.00</span> has been executed."
          </p>
        </div>
      </div>
    </>
  );
};

export default BotsNotifications;
