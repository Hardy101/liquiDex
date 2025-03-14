import React from "react";

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const secnavbtn = [
  {
    id: "dashboard",
    txt: "Statistics Dashboard",
    icon: "fa-solid fa-chart-simple my-auto",
  },
  {
    id: "history",
    txt: "Trade History",
    icon: "fa-solid fa-clock-rotate-left my-auto",
  },
];

const AnalyticsNavbar: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <div className="sec-nav bg-dark-2 border border-grey-3 rounded-xl p-3">
        <ul className="navlinks rounded-md text-grey-2 font-bold text-xs text-center grid grid-cols-2 bg-dark-1 p-1">
          {secnavbtn.map(({ id, txt, icon }, index) => (
            <li key={index}>
              <button
                className={`sec-nav-btn ${
                  activeTab == id ? "gradient-1 text-black" : ""
                }`}
                onClick={() => setActiveTab(id)}
              >
                <i className={icon}></i>
                <span className="my-auto">{txt}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AnalyticsNavbar;
