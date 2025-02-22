import ActionToggleBtn from "./actionToggleBtn";

const SettingsPlatform: React.FC = () => {
  const themebuttons = [
    { id: "dark", txt: "Dark Theme", icon: "fa-solid fa-moon" },
    { id: "light", txt: "Light Theme", icon: "fa-solid fa-sun" },
  ];
  return (
    <div className="bg-dark-2 border border-grey-3 rounded-xl text-light-1 text-xs">
      <div className="header p-3 border-b border-grey-3">
        <h2 className="text-xl font-bold mb-2 flex gap-4 grow">
          Platform Settings
        </h2>
        <p>Update your personal details and settings here</p>
      </div>
      <form action="#" className="grid gap-3 px-3 py-4">
        <div className="form-control flex justify-between border-b-2 border-dark-3 pb-4">
          <span className="text-grey-2">Platform Theme</span>
          <div className="w-3/4">
            <p className="grid grid-cols-2 bg-dark-1 p-1 rounded-md mb-2">
              {themebuttons.map(({ id, txt, icon }, index) => (
                <button
                  type="button"
                  key={index}
                  className={`flex gap-1 justify-center rounded-md py-2 ${
                    id == "dark" ? "gradient-1 text-black" : ""
                  }`}
                >
                  <i className={`${icon} my-auto`}></i>
                  <span className="my-auto">{txt}</span>
                </button>
              ))}
            </p>
            <span className="text-grey-4">Placeholder description text.</span>
          </div>
        </div>
        <div className="form-control flex justify-between border-b-2 border-dark-3 pb-4">
          <label className="text-grey-2">Entry Sound</label>
          <select name="" id="" className="w-3/4 bg-dark-1 p-2 rounded-md">
            <option value="openchime">Open Chime</option>
          </select>
        </div>
        <div className="form-control flex justify-between border-b-2 border-dark-3 pb-4">
          <label className="text-grey-2">Exit Sound</label>
          <select name="" id="" className="w-3/4 bg-dark-1 p-2 rounded-md">
            <option value="openchime">Close Chime</option>
          </select>
        </div>
        <div className="form-control flex justify-between border-b-2 border-dark-3 pb-4">
          <label className="text-grey-2">Bot Notifications</label>
          <div className="w-3/4 bg-dark-1 p-2 rounded-md">
            <ActionToggleBtn />
          </div>
        </div>
        <div className="form-control flex justify-between pb-4">
          <label className="text-grey-2">System Notifications</label>
          <div className="w-3/4 bg-dark-1 p-2 rounded-md">
            <ActionToggleBtn defaultState={true} />
          </div>
        </div>
        <div className="form-control grid grid-cols-2 gap-3">
          <button className="p-3 my-auto rounded-md bg-[#0C0C0C] border-1 border-grey-3">
            Cancel
          </button>
          <button className="p-3 my-auto rounded-md gradient-1 text-dark-1">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingsPlatform;
