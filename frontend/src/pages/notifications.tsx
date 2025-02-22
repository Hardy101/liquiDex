import NavBar from "../components/navbar";
import AsidesSection from "../components/aside";
import NotificationDiv from "../components/notificationsDiv";

const Notifications = () => {
  return (
    <>
      <AsidesSection />
      <main className="min-h-dvh ml-12 w-full bg-dark-1 overflow-hidden">
        <NavBar />
        <div className="body p-8">
          <NotificationDiv />
        </div>
      </main>
    </>
  );
};

export default Notifications;
