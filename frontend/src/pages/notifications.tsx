import { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";

import NavBar from "../components/navbar";
import AsidesSection from "../components/aside";
import NotificationDiv from "../components/notificationsDiv";
import Sidebar from "../components/sidebar";
import PageHeading from "../components/pageHeading";

import gsap from "gsap";

interface AppNotification {
  id: number;
  title: string;
  message: string;
  created_at: string;
  is_read: boolean;
}

const socket = io("http://127.0.0.1:8000", {
  path: "/api/socket",
  transports: ["websocket"],
});

const Notifications = () => {
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const sidebarRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    // Request notifications when component mounts
    socket.emit("fetch_notifications");

    // Listen for notifications from the server
    socket.on("notifications", (data) => {
      console.log("📩 Notifications received:", data);
      setNotifications(data); // Set the state with fetched notifications
    });

    // Cleanup on unmount
    return () => {
      socket.off("notifications");
    };
  }, []);

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
