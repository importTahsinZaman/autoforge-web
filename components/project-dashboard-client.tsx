"use client";

import Link from "next/link";

interface Project {
  id: string;
  name: string;
  description: string;
  awsResources?: AwsResource[];
}

interface AwsResource {
  type: string;
  count: number;
  details: string;
}

export default function ProjectDashboardClient({
  project,
}: {
  project: Project;
}) {
  return (
    <div className="p-4 relative">
      <Link
        href="/home"
        className="absolute top-4 left-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-4 mt-16">
        {project.name} Dashboard
      </h1>
      <p className="text-gray-600 mb-6">{project.description}</p>
    </div>
  );
}
