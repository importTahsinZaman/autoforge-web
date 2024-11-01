"use client";

import { redirect, useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

interface AwsResource {
  type: string;
  count: number;
  details: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  awsResources: AwsResource[];
}

const ResourceCard: React.FC<AwsResource> = ({ type, count, details }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ease-in-out cursor-pointer  text-gray-900 dark:text-gray-100">
    <h3 className="font-semibold text-lg mb-2">{type}</h3>
    <p className="text-3xl font-bold mb-2">{count}</p>
    <p className="text-sm text-gray-600">{details}</p>
  </div>
);

export default async function ProjectDashboard({
  params,
}: {
  params: { id: string };
}) {
  const supabase = createClient();

  // Check if user is authenticated
  const {
    data: { session },
    error: authError,
  } = await supabase.auth.getSession();
  if (!session) {
    redirect("/login");
  }

  // Get the project data and check user permissions in a single query
  const { data: project, error } = await supabase
    .from("projects")
    .select(
      `
      *,
      project_members!inner (
        user_id
      )
    `
    )
    .eq("id", params.id)
    .eq("project_members.user_id", session.user.id)
    .single();

  if (error) {
    // If error is 404, user doesn't have access
    return <div>You don't have permission to view this project</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

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

      {project.awsResources && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.awsResources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      )}
    </div>
  );
}
