import './App.css';
import "./bootstrap.min.css"
import Home from "./screens/home"
import About from "./screens/about"
import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
