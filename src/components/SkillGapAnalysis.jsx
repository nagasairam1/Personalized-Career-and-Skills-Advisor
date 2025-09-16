import React from "react";

export default function SkillGapAnalysis({ skills, targetRole }) {
  const targetSkills = ["Python", "Machine Learning", "SQL", "Data Visualization"];
  const missingSkills = targetSkills.filter((s) => !skills.includes(s));

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">📊 Skill Gap Analysis</h2>
      <p>Target Role: <strong>{targetRole}</strong></p>
      <p className="mt-2"><strong>Existing Skills:</strong> {skills.join(", ")}</p>
      <p className="mt-2"><strong>Missing Skills:</strong></p>
      <ul className="list-disc pl-5 text-red-600">
        {missingSkills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
