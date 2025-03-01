import React from "react";

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

interface NavBtn {
  tab_id: string;
  btn: string;
  icon: string;
}

interface Props {
  secnavbtn: NavBtn[];
}

const BotsNavBar: React.FC<Props> = ({
  activeTab,
  setActiveTab,
  secnavbtn,
}) => {
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
              <span className="my-auto hidden md:block">{btn}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BotsNavBar;
