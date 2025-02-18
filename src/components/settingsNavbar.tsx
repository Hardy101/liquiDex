import React, { useState } from "react";

const SettingsNavbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState("subscription");

  const secnavbtn = [
    {
      tab_id: "account",
      btn: "Your account",
      icon: "fa-solid fa-user my-auto",
    },
    {
      tab_id: "security",
      btn: "Security",
      icon: "fa-solid fa-lock my-auto",
    },
    {
      tab_id: "platform",
      btn: "Platform",
      icon: "fa-solid fa-screwdriver-wrench my-auto",
    },
    {
      tab_id: "subscription",
      btn: "Subscription",
      icon: "fa-solid fa-shield-halved my-auto",
    },
  ];
  return (
    <div className="sec-nav bg-dark-2 border border-grey-3 rounded-xl p-3">
      <ul className="navlinks rounded-md text-grey-2 font-bold text-xs text-center grid grid-cols-4 bg-dark-1 p-1">
        {secnavbtn.map(({ tab_id, btn, icon }, index) => (
          <li key={index}>
            <button
              className={`sec-nav-btn ${
                activeTab == tab_id ? "gradient-1 text-black" : ""
              }`}
              onClick={() => setActiveTab(tab_id)}
            >
              <i className={icon}></i>
              <span className="my-auto">{btn}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SettingsNavbar;
