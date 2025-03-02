import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";

import { useUser } from "../context/userContext";
import Logo from "../assets/logo.png";
import AsidesSection from "../components/aside";
import NavBar from "../components/navbar";
import { User } from "../context/userContext";

const Authentication: React.FC = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const handleLogin = (credentialResponse: CredentialResponse) => {
    const token = credentialResponse.credential;
    console.log(token);
    fetch("https://liquidex.onrender.com/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const loggedInUser: User = {
          name: data.name,
          email: data.email,
          is_staff: data.is_staff,
        };
        setUser(loggedInUser);
        localStorage.setItem("user", JSON.stringify(loggedInUser));
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <AsidesSection />
      <main className="min-h-dvh ml-12 w-full bg-dark-1 overflow-hidden">
        <NavBar />
        <div className="body p-8 grid gap-8 p-8">
          <div className="h-full text-light-1 bg-dark-2 border border-grey-3 rounded-xl p-3 text-light-1 text-xs grid gap-2">
            <p className="flex gap-2 border border-grey-3 mr-auto px-2 py-1 rounded-md bg-dark-1">
              <img src={Logo} alt="logo" className="w-6 my-auto" />
            </p>
            <h2 className="text-2xl font-bold mt-4">
              Authenticate your account!
            </h2>
            <p className="text-grey-2">Sign in to continue your journey</p>
            <GoogleLogin
              onSuccess={handleLogin}
              onError={() => {
                console.log("Login Failed");
              }}
            />
            <p className="text-grey-4 mt-4">
              Having some trouble?{" "}
              <span className="underline hover:text-light-1 cursor-pointer">
                Reach out
              </span>{" "}
              we can help
            </p>
          </div>
        </div>
      </main>
      <script src="https://apis.google.com/js/platform.js" async defer></script>
    </>
  );
};

export default Authentication;
