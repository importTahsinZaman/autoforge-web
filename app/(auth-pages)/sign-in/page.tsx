"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";

export default function Index() {
  const supabase = createClient();

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 text-center">
      <Button
        onClick={() =>
          supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
              redirectTo: `${window.location.origin}/auth/callback`,
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
