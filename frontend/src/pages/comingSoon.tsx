import NavBar from "../components/navbar";
import AsidesSection from "../components/aside";
import Legendary from '../assets/legendary.gif'

const ComingSoonPage = () => {
  // useAuthRedirect();
  return (
    <>
      <AsidesSection />
      <main className="min-h-dvh ml-12 w-full bg-dark-1 overflow-hidden">
        <NavBar />
        <div className="body p-8 grid gap-8">
          <div className="h-full text-light-1">
            <h1 className="text-2xl font-bold">Greatness Loading...</h1>
            <p className="text-grey-4">
              This page isnt available yet, we're still working on it but stay
              tuned..
            </p>
            <p className="mt-4">
                <img src={Legendary} alt="legendary" className="w-1/2"/>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default ComingSoonPage;
