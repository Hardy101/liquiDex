import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserContext, User } from "./context/userContext";
import { useCurrentUser } from "./customHooks/useCurrentUser.tsx";

const GOOGLE_CLIENT_ID =
  "395545616135-40rsc8utnt3lg8al8la5vsg2mqva2ubh.apps.googleusercontent.com";

function AppWrapper() {
  const { user, loading } = useCurrentUser();

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <UserContext.Provider value={{ user, setUser: () => {} }}>
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
