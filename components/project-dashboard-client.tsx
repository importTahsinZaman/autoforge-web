"use client";

import { useState } from "react";
import Link from "next/link";
import DashboardTab from "@/app/(protected-pages)/projects/[id]/tabs/dashboard-tab";
import AIAssistantTab from "@/app/(protected-pages)/projects/[id]/tabs/ai-assistant-tab";

interface Project {
  id: string;
  name: string;
  description: string;
  // ... rest of your interfaces
}

export default function ProjectDashboardClient({
  project,
}: {
  project: Project;
}) {
  const [activeTab, setActiveTab] = useState<"dashboard" | "assistant">(
    "dashboard"
  );

  const tabs = [
    { id: "dashboard", label: "Dashboard" },
    { id: "assistant", label: "AI Assistant" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <Link
                href="/home"
                className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
              >
                ← Back to Projects
              </Link>
              <h1 className="text-2xl font-bold text-gray-900 mt-2">
                {project.name}
              </h1>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-4">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() =>
                    setActiveTab(tab.id as "dashboard" | "assistant")
                  }
                  className={`
                    py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap
                    ${
                      activeTab === tab.id
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1">
        {activeTab === "dashboard" && <DashboardTab project={project} />}
        {activeTab === "assistant" && <AIAssistantTab project={project} />}
      </div>
    </div>
  );
}
