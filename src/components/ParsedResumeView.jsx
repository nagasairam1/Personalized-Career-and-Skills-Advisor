import React from "react";

export default function ParsedResumeView({ data }) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-2">📄 Parsed Resume</h2>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Education:</strong> {data.education}</p>
      <p><strong>Experience:</strong> {data.experience.join(", ")}</p>
      <p><strong>Skills:</strong></p>
      <div className="flex flex-wrap gap-2 mt-2">
        {data.skills.map((skill, i) => (
          <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
