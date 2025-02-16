import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Bots from "./pages/bots";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <>
      <Router>
        //{" "}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bots" element={<Bots />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
