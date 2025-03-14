import React from "react";

interface ActiveTabProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const SettingsNavbar: React.FC<ActiveTabProps> = ({
  activeTab,
  setActiveTab,
}) => {
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
  ];
  return (
    <div className="bg-dark-2 border border-grey-3 rounded-xl p-3">
      <ul
        className={`navlinks rounded-md text-grey-2 font-bold text-xs text-center grid grid-cols-3 bg-dark-1 p-1`}
      >
        {secnavbtn.map(({ tab_id, btn, icon }, index) => (
          <li key={index}>
            <button
              className={`sec-nav-btn ${
                activeTab == tab_id ? "gradient-1 text-black" : ""
              }`}
              onClick={() => setActiveTab(tab_id)}
            >
              <i className={icon}></i>
              <span className="my-auto hidden md:block">{btn}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SettingsNavbar;
