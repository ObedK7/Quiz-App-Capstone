import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6 py-10">
      <header className="space-y-4">
        {/* text-3xl on mobile, text-5xl on desktop */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-green-600 tracking-tight">
          Welcome to Knowledge Engine!
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          A place to test your understanding.
        </p>
      </header>

      <main className="mt-10 w-full max-w-xs md:max-w-none">
        <Link to="/assessment">
          <Button className="w-full md:w-auto px-10 py-4 text-lg">
            Start Quiz.
          </Button>
        </Link>
      </main>
    </div>
  );
};

export default Home;
