import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Roadmap from "./pages/Roadmap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatWithVideo from "./pages/ChatWithVideo";
import VideoChat from "./pages/VideoChat";
import Whatsapp from "./pages/Whatsapp";
import DocsChat from "./pages/DocsChat";
import FileUpload from "./pages/Fileupload";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/chatwithvideo" element={<ChatWithVideo />} />
        <Route path="/whatsapp" element={<Whatsapp />} />
        <Route path="/videochat" element={<VideoChat />} />
        <Route path="/docschat" element={<DocsChat />} />
        <Route path="/pdf" element={<FileUpload />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
