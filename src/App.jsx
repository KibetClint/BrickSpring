import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Solutions from "./pages/Solutions";
import Consultation from "./pages/Consultation";
import AboutUs from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Quote from "./pages/Quote.jsx";
import FAQs from "./pages/Faqs.jsx";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/faqs" element={<FAQs/>}/>
          {/* Redirect any unknown route back to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
