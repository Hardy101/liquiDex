import React from "react";

const AnalyticsNavbar: React.FC = () => {
  const secnavbtn = [
    {
      txt: "Statistics Dashboard",
      icon: "lni lni-trend-up-1 my-auto",
      status: "not-active",
    },
    {
      txt: "Trade History",
      icon: "lni lni-clipboard my-auto",
      status: "not-active",
    },
    {
      txt: "Custom Reports",
      icon: "lni lni-file-multiple my-auto",
      status: "not-active",
    },
  ];
  return (
    <>
      <div className="sec-nav bg-dark-2 border border-grey-3 rounded-xl p-3">
        <ul className="navlinks rounded-md text-grey-2 font-bold text-xs text-center grid grid-cols-3 bg-dark-1 p-1">
          {secnavbtn.map(({ txt, icon }, index) => (
            <li key={index}>
              <button
                className={`sec-nav-btn cursor-pointer ${
                  txt == "Statistics Dashboard" ? "bg-light-1 text-black" : ""
                }`}
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
