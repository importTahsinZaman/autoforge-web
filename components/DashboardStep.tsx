"use client";

import { Button } from "@/components/ui/button";

export default function DashboardStep({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Welcome to your Dashboard</h2>
      <p>You have no existing projects. Let's create a new one!</p>
      <Button onClick={onNext} className="w-full">
        Create New Project
      </Button>
    </div>
  );
}
