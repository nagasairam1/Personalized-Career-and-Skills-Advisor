import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Career Advisor</h1>
        <ul className="flex gap-6">
          <li><a href="#resume">Resume</a></li>
          <li><a href="#career">Careers</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#roadmap">Roadmap</a></li>
          <li><a href="#jobs">Jobs</a></li>
          <li><a href="#tailor">Tailor</a></li>
        </ul>
      </div>
    </nav>
  );
}
