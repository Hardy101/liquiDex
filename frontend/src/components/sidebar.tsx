import { forwardRef, useState } from "react";

import ActionToggleBtn from "./minicomponents/actionToggleBtn";
import axios from "axios";

interface Props {
  isSidebarActive: boolean;
  setIsSidebarActive: (tab: boolean) => void;
}

interface FormData {
  title: string;
  message: string;
  inapp_type: boolean;
  email_type: boolean;
  is_read: boolean;
}

type ToggleField = keyof Pick<FormData, "inapp_type" | "email_type">;

const Sidebar = forwardRef<HTMLDivElement, Props>(
  ({ setIsSidebarActive }, ref) => {
    const [formData, setFormData] = useState<FormData>({
      title: "",
      message: "",
      inapp_type: false,
      email_type: false,
      is_read: true,
    });

    const handleToggle = (field: ToggleField) => {
      setFormData((prev) => ({
        ...prev,
        [field]: !prev[field],
      }));
    };

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "http://localhost:8000/api/notifications/add/",
          formData
        );
        resetForm();
        setIsSidebarActive(false);
      } catch (error) {
        alert(String(error));
      }
    };
    const resetForm = () => {
      setFormData({
        title: "",
        message: "",
        inapp_type: false,
        email_type: false,
        is_read: false,
      });
    };
    return (
      <div
        ref={ref}
        className="createboxsidebar fixed top-16 w-2/5 h-full top-0 right-0 bg-dark-2 rounded-l-md border border-grey-3 z-10 text-light-1"
        style={{
          transform: "translateX(100%)",
          opacity: 0,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between border-b-2 border-grey-3 p-4">
          <h2 className="text-sm my-auto">Create Notification</h2>
          <button
            className="gradient-1 px-2 py-1 rounded-md flex text-black cursor-pointer my-auto"
            onClick={() => setIsSidebarActive(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="p-4">
          <h1 className="mb-2 text-xl font-bold">
            {formData.title || "<Notification Title>"}
          </h1>
          <form
            action="#"
            method="post"
            className="flex flex-col gap-2 text-xs"
            onSubmit={handleSubmit}
          >
            <div className="form-control flex justify-between pb-2 border-b-2 border-grey-3">
              <label htmlFor="botname" className="text-grey-2 my-auto">
                Name
              </label>
              <input
                type="title"
                name="title"
                id="title"
                onChange={handleChange}
                value={formData.title}
                placeholder="Enter Notification Title"
                className="w-3/5 bg-dark-1 rounded-md border border-grey-3 p-2 outline-none my-auto"
              />
            </div>
            <div className="form-control flex flex-col gap-4 bg-dark-1 pb-2 border border-grey-3 rounded-md p-2">
              <label className="text-grey-2 flex gap-2">
                <i className="fa-solid fa-bell my-auto"></i>
                <span className="my-auto">Notifications</span>
              </label>
              <div className="flex flex-col gap-4">
                <div className="inapp flex gap-2">
                  <ActionToggleBtn
                    isButtonActive={formData.inapp_type}
                    onClick={() => handleToggle("inapp_type")}
                  />

                  <p className="flex flex-col gap-1">
                    <span className="my-auto">In app</span>
                    <span className="text-grey-4">
                      Keep tabs of all notifications in the notification page
                    </span>
                  </p>
                </div>
                <div className="email flex gap-2">
                  <ActionToggleBtn
                    isButtonActive={formData.email_type}
                    onClick={() => handleToggle("email_type")}
                  />
                  <p className="flex flex-col gap-1">
                    <span className="my-auto">Email Notifications</span>
                    <span className="text-grey-4">
                      Recieve email notfifications.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="form-control flex flex-col gap-4 bg-dark-1 pb-2 border border-grey-3 rounded-md p-2">
              <div className="form-control grid gap-2">
                <label htmlFor="message" className="text-grey-2 flex gap-2">
                  <i className="fa-solid fa-message my-auto"></i>
                  <span className="my-auto">Message</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-dark-2 w-full rounded-md outline-none p-2"
                  placeholder="Write something..."
                ></textarea>
              </div>
            </div>
            <input
              type="hidden"
              name="inapp_type"
              value={String(formData.inapp_type)}
            />
            <input
              type="hidden"
              name="email_type"
              value={String(formData.email_type)}
            />
            {/* <input type="hidden" name="is_read" value={String(formData.read)} /> */}
            <div className="form-control mt-4 flex gap-2">
              <button
                type="button"
                onClick={resetForm}
                className="bg-dark-1 py-2 px-4 rounded-md border border-grey-3 text-red-500"
              >
                <i className="fa-solid fa-brush rotate-45"></i>
              </button>
              <button
                type="submit"
                className="w-full gradient-1 p-2 rounded-md text-black"
              >
                Add Notification
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
);

export default Sidebar;
