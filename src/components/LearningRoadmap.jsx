import React from "react";

export default function LearningRoadmap() {
  const roadmap = [
    { week: "Week 1", task: "Python Basics (YouTube)" },
    { week: "Week 2", task: "Data Analysis with Pandas (Coursera)" },
    { week: "Week 3", task: "SQL for Data Science (edX)" },
    { week: "Week 4", task: "Mini Project: Data Dashboard" },
  ];

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">📚 Learning Roadmap</h2>
      <ul className="space-y-2">
        {roadmap.map((step, i) => (
          <li key={i} className="p-3 border rounded-lg bg-gray-50">
            <strong>{step.week}:</strong> {step.task}
          </li>
        ))}
      </ul>
    </div>
  );
}
