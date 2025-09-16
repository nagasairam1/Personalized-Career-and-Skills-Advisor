import React from "react";
import ParsedResumeView from "./ParsedResumeView";
import CareerRecommendations from "./CareerRecommendations";
import SkillGapAnalysis from "./SkillGapAnalysis";
import LearningRoadmap from "./LearningRoadmap";
import JobMatchList from "./JobMatchList";
import ResumeTailor from "./ResumeTailor";

export default function Dashboard({ resumeData }) {
  return (
    <div className="space-y-8">
      <section id="resume">
        <ParsedResumeView data={resumeData} />
      </section>
      <section id="career">
        <CareerRecommendations skills={resumeData.skills} />
      </section>
      <section id="skills">
        <SkillGapAnalysis skills={resumeData.skills} targetRole="Data Scientist" />
      </section>
      <section id="roadmap">
        <LearningRoadmap />
      </section>
      <section id="jobs">
        <JobMatchList />
      </section>
      <section id="tailor">
        <ResumeTailor />
      </section>
    </div>
  );
}
