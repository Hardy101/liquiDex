import AsidesSection from "../components/aside";
import NavBar from "../components/navbar";
import { Link } from "react-router-dom";

function onSignIn(googleUser) {
  let profile = googleUser.getBasicProfile();
  const profile_id = profile.getId();
  const name = profile.getName();
  const image_url = profile.getImageUrl();
  const email = profile.getEmail();
}

const Authentication: React.FC = () => {
  return (
    <>
      <AsidesSection />
      <main className="min-h-dvh ml-12 w-full bg-dark-1 overflow-hidden">
        <NavBar />
        <div className="body p-8 grid gap-8 p-8">
          <div className="h-full text-light-1 bg-dark-2 border border-grey-3 rounded-xl p-3 text-light-1 text-xs grid gap-2">
            <h1 className="text-2xl font-bold">Hello there!</h1>
            <p className="text-grey-2">Get ready to experience greatness!</p>
            <div className="g-signin2" data-onsuccess="onSignIn"></div>
            <p className="text-grey-4 mt-4">
              Do you not have an account? then{" "}
              <Link to="#" className="underline hover:font-bold">
                sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
      <script src="https://apis.google.com/js/platform.js" async defer></script>
    </>
  );
};

export default Authentication;
