import { useState } from "react";

import NavBar from "../components/navbar";
import AsidesSection from "../components/aside";
import NotificationDiv from "../components/notificationsDiv";
import Sidebar from "../components/sidebar";
import PageHeading from "../components/pageHeading";

const Notifications = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  return (
    <>
      <AsidesSection />
      <main className="relative min-h-dvh ml-12 w-full bg-dark-1 overflow-hidden">
        <NavBar />
        <Sidebar
          isSidebarActive={isSidebarActive}
          setIsSidebarActive={setIsSidebarActive}
        />
        <div className="body p-8 grid gap-4">
          <PageHeading
            isSidebarActive={isSidebarActive}
            setIsSidebarActive={setIsSidebarActive}
          />
          <NotificationDiv />
        </div>
      </main>
    </>
  );
};

export default Notifications;
