import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserContext, User } from "./context/userContext";

const GOOGLE_CLIENT_ID =
  "395545616135-40rsc8utnt3lg8al8la5vsg2mqva2ubh.apps.googleusercontent.com";

function AppWrapper() {
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setUser(JSON.parse(user));
  }, []);

  const [user, setUser] = useState<User | null>(null);

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <UserContext.Provider value={{ user, setUser }}>
        <App />
      </UserContext.Provider>
    </GoogleOAuthProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);
