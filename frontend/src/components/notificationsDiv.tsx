import React from "react";

// Media
import Logo from "../assets/logo.png";

interface AppNotification {
  id: number;
  title: string;
  message: string;
  created_at: string;
  is_read: boolean;
}

interface Props {
  notifications: AppNotification[];
}
const NotificationDiv: React.FC<Props> = ({ notifications }) => {
  return (
    <>
      <div className="grid gap-4">
        {notifications.map(({ title, message, created_at }, index) => (
          <div
            key={index}
            className="bg-dark-2 border border-grey-3 rounded-xl p-3 text-light-1"
          >
            <p className="notification flex justify-between">
              <span className="flex gap-2">
                <img src={Logo} alt="logo" className="w-4 my-auto" />
                <span className="font-bold text-sm my-auto">{title}</span>
              </span>
              <span className="text-grey-4 text-xs font-bold">
                {" "}
                {created_at}
              </span>
            </p>

            <p className="border border-grey-3 bg-dark-1 rounded-md pl-2 py-1 my-auto text-xs mt-2">
              {message}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default NotificationDiv;
