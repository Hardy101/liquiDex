import AsidesSection from "../components/aside";
import NavBar from "../components/navbar";

const Authentication: React.FC = () => {
  return (
    <>
      <AsidesSection />
      <main className="min-h-dvh ml-12 w-full bg-dark-1 overflow-hidden">
        <NavBar />
        <div className="body p-8 grid gap-8">
          <div className="h-full text-light-1"></div>
        </div>
      </main>
    </>
  );
};

export default Authentication;