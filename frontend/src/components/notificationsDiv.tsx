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
            className="bg-dark-2 border border-grey-3 rounded-xl p-3 text-light-1 grid gap-1"
          >
            <p className="notification flex gap-4 justify-between">
              <span className="flex grow gap-2">
                <img src={Logo} alt="logo" className="w-4 my-auto" />
                <span className="font-bold text-sm my-auto">System Alert</span>
              </span>

              <span className="text-grey-4 text-xs font-bold my-auto">
                {new Date(created_at).toLocaleString()}
              </span>
            </p>
            <span className="mt-1 ">{title}</span>
            <p className="text-xs text-grey-2">{message}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default NotificationDiv;
