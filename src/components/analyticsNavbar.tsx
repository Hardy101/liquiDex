import React from "react";

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const secnavbtn = [
  {
    id: "dashboard",
    txt: "Statistics Dashboard",
    icon: "lni lni-trend-up-1 my-auto",
  },
  {
    id: "history",
    txt: "Trade History",
    icon: "lni lni-clipboard my-auto",
  },
  {
    id: "report",
    txt: "Custom Reports",
    icon: "lni lni-file-multiple my-auto",
  },
];

const AnalyticsNavbar: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <div className="sec-nav bg-dark-2 border border-grey-3 rounded-xl p-3">
        <ul className="navlinks rounded-md text-grey-2 font-bold text-xs text-center grid grid-cols-3 bg-dark-1 p-1">
          {secnavbtn.map(({ id, txt, icon }, index) => (
            <li key={index}>
              <button
                className={`sec-nav-btn cursor-pointer ${
                  activeTab == id ? "bg-light-1 text-black" : ""
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
