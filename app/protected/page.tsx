import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import RepoCard from "@/components/RepoCard";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const accessToken = await supabase.auth.getSession();

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
      <div className="flex flex-col gap-2 items-start">
        <h2 className="font-bold text-2xl mb-4">Your user details</h2>
        <pre className="text-xs font-mono p-3 rounded border max-h-32 overflow-auto">
          {JSON.stringify(user, null, 2)}
          {/* {JSON.stringify(accessToken, null, 2)} */}
        </pre>
      </div>

      <div>
        <h2 className="font-bold text-2xl mb-4">Your Personal Repositories</h2>
        {personal_repos && personal_repos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {personal_repos.map((repo: any) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        ) : (
          <p>No personal repositories found.</p>
        )}
      </div>

      {/* <div>
        <h2 className="font-bold text-2xl mb-4">Next steps</h2>
        <FetchDataSteps />
      </div> */}
    </div>
  );
}
