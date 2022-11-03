import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import HomeTest from "./pages/HomeTest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<HomeTest />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
