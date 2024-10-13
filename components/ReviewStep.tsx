"use client";

import { Button } from "@/components/ui/button";

export default function ReviewStep({
  budget,
  onNext
}: {
  budget: number;
  onNext: () => void;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Configuration Review</h2>
      <div>
        <h3 className="font-semibold">Suggested AWS Services:</h3>
        <ul className="list-disc list-inside">
          <li>Compute: EC2, Auto Scaling</li>
          <li>Storage: S3, EBS</li>
          <li>Database: RDS</li>
          <li>Networking: VPC, ELB</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold">Estimated Monthly Cost:</h3>
        <p>${(budget * 0.8).toFixed(2)}</p>
      </div>
      <Button onClick={onNext} className="w-full">
        Deploy Now
      </Button>
    </div>
  );
}
