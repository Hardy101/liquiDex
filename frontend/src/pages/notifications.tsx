import { useState, useRef, useEffect } from "react";

import NavBar from "../components/navbar";
import AsidesSection from "../components/aside";
import NotificationDiv from "../components/notificationsDiv";
import Sidebar from "../components/sidebar";
import PageHeading from "../components/pageHeading";
import { fetchNotifications, sendNotification } from "../services/notificationService";

import gsap from "gsap";

interface Notification {
  id: number;
  title: string;
  message: string;
  created_at: string;
  is_read: boolean;
}

const Notifications = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const sidebarRef = useRef<HTMLDivElement>(null);

  const loadNotifications = async () => {
    const data = await fetchNotifications();
    setNotifications(data);
  };

  const handleSend = async () => {
    if (title && message) {
      await sendNotification(title, message);
      setTitle("");
      setMessage("");
      loadNotifications();
    }
  };

  useEffect(() => {
    loadNotifications();
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
          <NotificationDiv />
        </div>
      </main>
    </>
  );
};

export default Notifications;
