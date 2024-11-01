import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import ProjectDashboardClient from "../../../../components/project-dashboard-client";

export default async function ProjectPage({
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
    return <div>You don't have permission to view this project</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectDashboardClient project={project} />;
}
