import React from "react";

const About = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 prose lg:prose-xl">
      <h1 className="text-4xl font-bold mb-6 text-black">About Knowledge Engine</h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        Knowledge Engine is a capstone project developed for the ALX Software
        Engineering program. It aims to provide a seamless, interactive platform
        for learners to test their knowledge across various domains using
        real-time data from the Open Trivia Database.
      </p>
      <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 text-blue-800">
        <strong>Tech Stack:</strong> React, Vite, Tailwind CSS, and React
        Router.
      </div>
    </div>
  );
};

export default About;
