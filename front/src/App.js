import './App.css';
import "./bootstrap.min.css"
import Home from "./screens/home"
import About from "./screens/about"
import Services from './screens/services';
import AccountingFinance from './screens/accountingfinance';
import News from './screens/news';
import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer/Footer"



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/accountingfinance" element={<AccountingFinance />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
