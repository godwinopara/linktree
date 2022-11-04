import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
