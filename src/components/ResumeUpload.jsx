import React from "react";

export default function ResumeUpload({ onParsed }) {
  const mockParsedResume = {
    name: "Naga Sairam",
    education: "B.E Mechanical Engineering, 2018",
    experience: ["Software Test Engineer (3 yrs)", "DevOps Engineer (2 yrs)"],
    skills: ["Java", "Selenium", "Python", "DevOps", "Docker", "React"],
  };

  const handleUpload = () => {
    setTimeout(() => {
      onParsed(mockParsedResume);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Upload Your Resume</h2>
      <input type="file" className="mb-4" />
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
      >
        Parse Resume
      </button>
    </div>
  );
}
