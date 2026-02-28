// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Assessment from "./pages/Assessment";
import Results from "./pages/Results";
import History from "./pages/History";
import About from "./pages/About";

function App() {
  return (
    <Router>
      
      <div className="flex flex-col min-h-screen min-w-screen bg-blue-50">
        <Navbar />

      
        <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/results" element={<Results />} />
            <Route path="/history" element={<History />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
