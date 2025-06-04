import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./App.css";
import FlappyRick from "./pages/game-pages/FlappyRick/FlappyRick";
import Games from "./pages/game-pages/Games";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import NavDrawer from "./components/NavDrawer";
import About from "./pages/About";

function App() {
  return (
    <main className="min-h-[100dvh]">
      <Router>
        <Navbar />
        <NavDrawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
