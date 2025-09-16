import React from "react";

export default function CareerRecommendations({ skills }) {
  const mockRoles = [
    { role: "Data Scientist", match: 80 },
    { role: "QA Automation Engineer", match: 75 },
    { role: "DevOps Engineer", match: 70 },
  ];

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">🎯 Career Recommendations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {mockRoles.map((r, i) => (
          <div key={i} className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-bold">{r.role}</h3>
            <p>Match: {r.match}%</p>
            <button className="mt-2 px-3 py-1 bg-green-600 text-white text-sm rounded-lg">
              Explore
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
