import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Roadmap from "./pages/Roadmap";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
    </Router>
  );
}

export default App;
