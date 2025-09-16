import React from "react";

export default function ResumeTailor() {
  const tailoredBullets = [
    "Automated 200+ test cases using Selenium + Python.",
    "Improved CI/CD pipelines reducing deployment time by 30%.",
    "Collaborated with DevOps team to ensure zero-downtime releases.",
  ];

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">📝 Resume Tailoring</h2>
      <ul className="list-disc pl-5 space-y-2">
        {tailoredBullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow">
        Copy to Clipboard
      </button>
    </div>
  );
}
