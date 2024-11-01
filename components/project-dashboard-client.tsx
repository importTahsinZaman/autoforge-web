"use client";

import { useState } from "react";
import Link from "next/link";
import DashboardTab from "@/app/(protected-pages)/projects/[id]/tabs/dashboard-tab";
import AIAssistantTab from "@/app/(protected-pages)/projects/[id]/tabs/ai-assistant-tab";
import { ArrowLeftIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

interface Project {
  id: string;
  name: string;
  description: string;
  created_at: string;
  // ... other fields
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
    {
      id: "dashboard",
      label: "Dashboard",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      ),
    },
    {
      id: "assistant",
      label: "AI Assistant",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Top Navigation */}
          <div className="flex justify-between items-center px-4 py-4">
            <div className="flex items-center space-x-4">
              <Link
                href="/home"
                className="text-gray-600 hover:text-gray-900 flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              >
                <ArrowLeftIcon className="h-5 w-5" />
                <span className="text-sm font-medium">Back to Projects</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-100 transition-colors duration-200">
                <Cog6ToothIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Project Info */}
          <div className="px-4 pb-4">
            <h1 className="text-2xl font-bold text-gray-900">{project.name}</h1>
            <p className="text-sm text-gray-600 mt-1">{project.description}</p>
            <div className="text-xs text-gray-500 mt-2">
              Created on {new Date(project.created_at).toLocaleDateString()}
            </div>
          </div>

          {/* Tabs */}
          <div className="px-4">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() =>
                    setActiveTab(tab.id as "dashboard" | "assistant")
                  }
                  className={`
                    flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200
                    ${
                      activeTab === tab.id
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }
                  `}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1 relative">
        <div className="absolute inset-0 overflow-auto">
          {activeTab === "dashboard" && <DashboardTab project={project} />}
          {activeTab === "assistant" && <AIAssistantTab project={project} />}
        </div>
      </div>
    </div>
  );
}
