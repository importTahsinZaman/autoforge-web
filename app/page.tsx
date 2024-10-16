"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";

export default function Index() {
  const supabase = createClient();

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Autoforge</h1>
      <p className="text-lg text-gray-700 mb-6 max-w-2xl">
        Deploy your AWS infrastructure with AI.
      </p>
      <Button
        onClick={() =>
          supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
              redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
              scopes: "repo",
            },
          })
        }
      >
        Login with GitHub
      </Button>
    </div>
  );
}
