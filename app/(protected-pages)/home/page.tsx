import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import RepoCard from "@/components/repo-card";
import ProjectCard from "@/components/project-card";
import Link from 'next/link';

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const checkTokenAndFetchRepos = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (session?.provider_token) {
      const response = await fetch("https://api.github.com/user/repos", {
        headers: {
          Authorization: `Bearer ${session.provider_token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`GitHub API request failed: ${response.statusText}`);
      }
      return response.json();
    }
    return null;
  };

  let repos = null;
  let personal_repos = null;
  let af_projects = null; 

  af_projects = [{"name": "CoolProject", "id":"abcdef", "description": "An AI-driven blockchain project."}]; // TODO: fetch autoforge projects

  try {
    repos = await checkTokenAndFetchRepos();
    if (repos) {
      personal_repos = repos.filter(
        (repo: any) => repo.owner.login === user.user_metadata.user_name
      );
    }
  } catch (error) {
    console.error("Error fetching repositories:", error);
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <div className="w-full">
        <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
          <InfoIcon size="16" strokeWidth={2} />
          This is a protected page that you can only see as an authenticated
          user
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-2xl">Your Autoforge Projects</h2>
          <Link href="/projects/new" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
