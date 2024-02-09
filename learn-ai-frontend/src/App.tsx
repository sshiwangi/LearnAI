import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Roadmap from "./pages/Roadmap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
