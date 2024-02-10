import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Roadmap from "./pages/Roadmap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DocsChat from "./pages/DocsChat";
import Fileupload from "./pages/Fileupload";
import VideoChat from "./pages/VideoChat";
import Whatsapp from "./pages/Whatsapp";
// import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/roadmap" element={<Roadmap />} />
         <Route path="/docschat" element={<DocsChat />} />
          <Route path="/pdf" element={<Fileupload />} />
          <Route path="/videochat" element={<VideoChat />} />
          <Route path="/whatsapp" element={<Whatsapp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
