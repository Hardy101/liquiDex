import React from "react";

// Media
import Logo from "../assets/logo.png";

interface AppNotification {
  id: number;
  title: string;
  message: string;
  created_at: string;
  is_read: boolean;
  type: string;
}

interface Props {
  notifications: AppNotification[];
}

const NotificationDiv: React.FC<Props> = ({ notifications }) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        {notifications.map(
          ({ id, title, message, created_at, is_read, type }) => (
            <div
              key={id}
              className={`${
                is_read ? "" : "bg-dark-2 border border-grey-3"
              }  rounded-xl p-3 text-light-1 grid gap-1`}
            >
              <p className="notification flex gap-4 justify-between">
                <span className="flex gap-2 bg-dark-3 px-2 py-1 rounded-xl">
                  <img src={Logo} alt="logo" className="w-4 my-auto" />
                  <span className="text-xs my-auto capitalize">
                    {type} Alert
                  </span>
                </span>

                <span className="text-grey-4 text-xs my-auto">
                  {new Date(created_at).toLocaleString()}
                </span>
              </p>
              <span className="mt-1 text-sm">{title}</span>
              <p className="text-xs text-grey-2">{message}</p>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default NotificationDiv;
