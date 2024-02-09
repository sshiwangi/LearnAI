import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Roadmap from "./pages/Roadmap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DocsChat from "./pages/DocsChat";
import Fileupload from "./pages/Fileupload";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/roadmap" element={<Roadmap />} />
         <Route path="/docschat" element={<DocsChat />} />
          <Route path="/pdf" element={<Fileupload />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
