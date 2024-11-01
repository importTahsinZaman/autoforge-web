import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import ProjectCard from "@/components/project-card";
import Link from "next/link";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const { data: af_projects, error } = await supabase
    .from("projects")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching projects:", error);
    return <div>Error loading projects. Please try again later.</div>;
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-2xl">Your Projects</h2>
          <Link
            href="/projects/new"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            New Project
          </Link>
        </div>
        {af_projects && af_projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {af_projects.map((project: any) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p>No Autoforge projects found.</p>
        )}
      </div>
    </div>
  );
}
