import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import './app.css'
import Location from "./pages/location";
import About from "./components/about";
import Gallery from "./pages/gallery";
import Plans from "./pages/planPage";
import Price from "./pages/price";
import Amenities from "./pages/amenities";
import Footer from "./components/footer";
import Home from "./components/testing2";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/location" element={<Location />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/Plans" element={<Plans />} />
        <Route path="/price" element={<Price />} />
        <Route path="/Amenities" element={<Amenities />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;