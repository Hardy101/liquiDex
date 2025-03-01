import { Link } from "react-router-dom";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

import AsidesSection from "../components/aside";
import NavBar from "../components/navbar";

const Authentication: React.FC = () => {
  const navigate = useNavigate();
  const handleLogin = (credentialResponse: CredentialResponse) => {
    const token = credentialResponse.credential;
    console.log(token);
    fetch("http://localhost:8000/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("user", JSON.stringify(data));

        navigate("/dashboard");
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <AsidesSection />
      <main className="min-h-dvh ml-12 w-full bg-dark-1 overflow-hidden">
        <NavBar />
        <div className="body p-8 grid gap-8 p-8">
          <div className="h-full text-light-1 bg-dark-2 border border-grey-3 rounded-xl p-3 text-light-1 text-xs grid gap-2">
            <h1 className="text-2xl font-bold">Hello there!</h1>
            <p className="text-grey-2">Get ready to experience greatness!</p>
            <GoogleLogin
              onSuccess={handleLogin}
              onError={() => {
                console.log("Login Failed");
              }}
            />
            <p className="text-grey-4 mt-4">
              Do you not have an account? then
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
