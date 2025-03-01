import React, { useState } from "react";
import ActionToggleBtn from "./minicomponents/actionToggleBtn";

interface FormData {
  theme: string;
  entry_sound: string;
  exit_sound: string;
  bot_notifications: boolean;
  system_notifications: boolean;
}

type ToggleField = keyof Pick<
  FormData,
  "bot_notifications" | "system_notifications"
>;

const SettingsPlatform: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState("dark");
  const [formData, setFormData] = useState<FormData>({
    theme: activeTheme,
    entry_sound: "",
    exit_sound: "",
    bot_notifications: false,
    system_notifications: false,
  });

  const themebuttons = [
    { id: "dark", txt: "Dark Theme", icon: "fa-solid fa-moon" },
    { id: "light", txt: "Light Theme", icon: "fa-solid fa-sun" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleToggle = (field: ToggleField) => {
    setFormData((prev) => ({ ...prev, [field]: !prev[field] }));
  };
  return (
    <div className="bg-dark-2 border border-grey-3 rounded-xl text-light-1 text-xs">
      <div className="header p-3 border-b border-grey-3">
        <h2 className="text-xl font-bold mb-2 flex gap-4 grow">
          Platform Settings
        </h2>
        <p>Update your system preferences and settings here</p>
      </div>
      <form
        action="#"
        className="grid gap-3 px-3 py-4"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form-control flex justify-between border-b-2 border-dark-3 pb-4">
          <span className="text-grey-2">Platform Theme</span>
          <div className="w-3/4">
            <p className="grid grid-cols-2 bg-dark-1 p-1 rounded-md mb-2">
              {themebuttons.map(({ id, txt, icon }, index) => (
                <button
                  type="button"
                  key={index}
                  className={`flex gap-1 justify-center rounded-md py-2 ${
                    activeTheme == id ? "gradient-1 text-black" : ""
                  }`}
                  onClick={() => {
                    setActiveTheme(id);
                  }}
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
          <select
            name="entry_sound"
            id="entry_sound"
            value={formData.entry_sound}
            onChange={handleChange}
            className="w-3/4 bg-dark-1 p-2 rounded-md"
          >
            <option>Select Sound</option>
            <option value="openchime">Open Chime</option>
          </select>
        </div>
        <div className="form-control flex justify-between border-b-2 border-dark-3 pb-4">
          <label className="text-grey-2">Exit Sound</label>
          <select
            name="exit_sound"
            id="exit_sound"
            value={formData.exit_sound}
            onChange={handleChange}
            className="w-3/4 bg-dark-1 p-2 rounded-md"
          >
            <option>Select Sound</option>
            <option value="openchime">Close Chime</option>
          </select>
        </div>
        <div className="form-control flex justify-between border-b-2 border-dark-3 pb-4">
          <label className="text-grey-2">Bot Notifications</label>
          <div className="w-3/4 bg-dark-1 p-2 rounded-md">
            <ActionToggleBtn
              isButtonActive={formData.bot_notifications}
              onClick={() => handleToggle("bot_notifications")}
            />
          </div>
        </div>
        <div className="form-control flex justify-between pb-4">
          <label className="text-grey-2">System Notifications</label>
          <div className="w-3/4 bg-dark-1 p-2 rounded-md">
            <ActionToggleBtn
              isButtonActive={formData.system_notifications}
              onClick={() => handleToggle("system_notifications")}
            />
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
