"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ProjectCreationStep({
  projectName,
  setProjectName,
  appType,
  setAppType,
  language,
  setLanguage,
  onNext
}: {
  projectName: string;
  setProjectName: (name: string) => void;
  appType: string;
  setAppType: (type: string) => void;
  language: string;
  setLanguage: (lang: string) => void;
  onNext: () => void;
}) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="projectName">Project Name</Label>
        <Input
          id="projectName"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="My Web App Deployment"
        />
      </div>
      <div>
        <Label htmlFor="appType">Application Type</Label>
        <select
          id="appType"
          value={appType}
          onChange={(e) => setAppType(e.target.value)}
          className="w-full border rounded-md p-2"
        >
          <option value="web">Web Application</option>
          <option value="api">API Service</option>
          <option value="batch">Batch Processing</option>
          <option value="data">Data Pipeline</option>
        </select>
      </div>
      <div>
        <Label htmlFor="language">Programming Language/Framework</Label>
        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full border rounded-md p-2"
        >
          <option value="nodejs">Node.js</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="dotnet">.NET</option>
        </select>
      </div>
      <Button onClick={onNext} className="w-full">
        Next
      </Button>
    </div>
  );
}
