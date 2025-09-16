import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ResumeUpload from "./components/ResumeUpload";

export default function App() {
  const [resumeData, setResumeData] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6">
        {!resumeData ? (
          <ResumeUpload onParsed={setResumeData} />
        ) : (
          <Dashboard resumeData={resumeData} />
        )}
      </div>
    </div>
  );
}
