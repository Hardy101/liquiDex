import AsidesSection from "../components/aside";
import NavBar from "../components/navbar";
import { Link } from "react-router-dom";

const Authentication: React.FC = () => {
  return (
    <>
      <AsidesSection />
      <main className="min-h-dvh ml-12 w-full bg-dark-1 overflow-hidden">
        <NavBar />
        <div className="body p-8 grid gap-8 p-8">
          <div className="h-full text-light-1 bg-dark-2 border border-grey-3 rounded-xl p-3 text-light-1 text-xs">
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-grey-4">
              Do you not have an account? then <Link to="#">sign up</Link>
            </p>
            <p>
              <button>
                <span>Email Address</span>
                <span>Use personal email address</span>
              </button>
            </p>
            <p className="mt-4">
              <button className="flex gap-4 bg-dark-1 rounded-md p-2">
                <i className="fa-brands fa-google my-auto"></i>
                <span className="my-auto">Authenticate with Google</span>
              </button>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Authentication;
