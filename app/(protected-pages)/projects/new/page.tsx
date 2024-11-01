import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import NewProjectForm from "./new-project-form";

export default async function NewProjectPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-6 max-w-3xl mx-auto p-4">
      <div>
        <h1 className="font-bold text-2xl mb-2">Create New Project</h1>
        <p className="text-gray-600">Set up a new project</p>
      </div>
      <NewProjectForm userId={user.id} />
    </div>
  );
}
