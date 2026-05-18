import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Quality from "./pages/Quality";
import Footer from "./components/Footer";

function App() {

return (

<BrowserRouter>

<Navbar />

<Routes>

<Route path="/" element={<Home />} />

<Route path="/about" element={<About />} />

<Route path="/products" element={<Products />} />

<Route path="/quality" element={<Quality />} />

<Route path="/contact" element={<Contact />} />

</Routes>

<WhatsAppButton />

<Footer />

</BrowserRouter>

);

}

export default App;