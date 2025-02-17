import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Bots from "./pages/bots";
import Dashboard from "./pages/dashboard";
import Analytics from "./pages/analytics";
import Settings from "./pages/settings";

function App() {
  return (
    <>
      <Router>
        //{" "}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bots" element={<Bots />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
