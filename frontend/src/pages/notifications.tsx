import { useState, useRef, useEffect } from "react";
import NavBar from "../components/navbar";
import AsidesSection from "../components/aside";
import NotificationDiv from "../components/notificationsDiv";
import Sidebar from "../components/sidebar";
import PageHeading from "../components/pageHeading";
import useAuthRedirect from "../customHooks/useAuthRedirect";

import gsap from "gsap";

interface AppNotification {
  id: number;
  title: string;
  message: string;
  created_at: string;
  is_read: boolean;
  type: string;
}

const Notifications = () => {
  // useAuthRedirect();
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const socket = new WebSocket("wss://liquidex.onrender.com/api/socket");

    socket.onopen = () => {
      console.log("🔌 Connected to WebSocket Server");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.notifications) {
        setNotifications(data.notifications);
      }
    };

    socket.onclose = () => {
      console.log("❌ WebSocket disconnected");
    };

    return () => {
      socket.close();
    };
  }, []);

  useEffect(() => {
    if (isSidebarActive && sidebarRef.current) {
      gsap.to(sidebarRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    } else if (!isSidebarActive && sidebarRef.current) {
      gsap.to(sidebarRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isSidebarActive]);

  return (
    <>
      <AsidesSection />
      <main className="relative min-h-dvh ml-12 w-full bg-dark-1 overflow-hidden">
        <NavBar />
        <Sidebar
          ref={sidebarRef}
          isSidebarActive={isSidebarActive}
          setIsSidebarActive={setIsSidebarActive}
        />
        <div className="body p-8 grid gap-4">
          <PageHeading
            isSidebarActive={isSidebarActive}
            setIsSidebarActive={setIsSidebarActive}
          />
          <NotificationDiv notifications={notifications} />
        </div>
      </main>
    </>
  );
};

export default Notifications;
