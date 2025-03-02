import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Bots from "./pages/bots";
import Dashboard from "./pages/dashboard";
import Analytics from "./pages/analytics";
import Settings from "./pages/settings";
import Notifications from "./pages/notifications";
import ComingSoonPage from "./pages/comingSoon";
import Authentication from "./pages/authentication";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bots" element={<Bots />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/wallet" element={<ComingSoonPage />} />
          <Route path="/database" element={<ComingSoonPage />} />
          <Route path="/auth" element={<Authentication />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
