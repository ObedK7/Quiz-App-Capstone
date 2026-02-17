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
      {/* h-screen + flex-col ensures the page always fills the window.
        The Navbar stays at the top, Footer at the bottom, 
        and the middle section handles the scroll.
      */}
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />

        {/* max-w-7xl and mx-auto centers your content on large desktops 
           so it doesn't stretch to the very edges of the screen.
        */}
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
