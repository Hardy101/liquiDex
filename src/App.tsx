import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Bots from "./pages/bots";
import Dashboard from "./pages/dashboard";
import Analytics from "./pages/analytics";

function App() {
  return (
    <>
      <Router>
        //{" "}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bots" element={<Bots />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
