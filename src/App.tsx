import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import NavBar from "./components/NavBar.tsx";
import "./index.css";
import Footer from "./components/Footer.tsx";
import RegisterFruits from "./pages/RegisterFruits.tsx";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.appContainer}>
      <NavBar />

      <div className={style.mainContent}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<RegisterFruits />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
