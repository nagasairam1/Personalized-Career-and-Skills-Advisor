import React from "react";

export default function JobMatchList() {
  const jobs = [
    { title: "Data Scientist @ Google", match: 75 },
    { title: "QA Automation @ Infosys", match: 80 },
    { title: "DevOps Engineer @ AWS", match: 70 },
  ];

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">💼 Job Matches</h2>
      {jobs.map((j, i) => (
        <div key={i} className="p-3 mb-2 border rounded-lg bg-gray-50">
          <h3 className="font-bold">{j.title}</h3>
          <p>Match Score: {j.match}%</p>
        </div>
      ))}
    </div>
  );
}
