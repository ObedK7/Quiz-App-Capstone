// src/pages/Home.jsx
import React from "react";
import Button from "../components/ui/Button"; // Assuming you'll create this

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <header className="space-y-4">
        <h1 className="text-5xl font-bold text-blue-600 tracking-tight">
          Welcome to Knowledge Engine
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A place to test your understanding
        </p>
      </header>

      <main className="mt-10">
        {/* This is where your Category Search/Selection will go later */}
        <Button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Start Your Assessment
        </Button>
      </main>
    </div>
  );
};

export default Home;
