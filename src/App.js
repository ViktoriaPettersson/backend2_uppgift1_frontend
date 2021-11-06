import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./views/Create";
import Products from "./views/Products";
import ProductDetail from "./views/ProductDetail";

// Funktionskomponent i JSX
function App() {
  // Funktionalitet

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/create" element={<Create />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
