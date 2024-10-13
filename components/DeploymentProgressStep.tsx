"use client";

export default function DeploymentProgressStep({
  deploymentProgress
}: {
  deploymentProgress: number;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Deployment in Progress</h2>
      <div className="w-full bg-gray-200 rounded h-4">
        <div
          className="bg-blue-500 h-4 rounded"
          style={{ width: `${deploymentProgress}%` }}
        ></div>
      </div>
      <div className="h-40 bg-gray-100 p-2 overflow-y-auto">
        <pre className="text-xs">
          {`Initializing Terraform...
Provisioning VPC...
Creating EC2 instances...
Configuring Auto Scaling...
Setting up RDS database...
Configuring S3 buckets...
Finalizing deployment...`}
        </pre>
      </div>
    </div>
  );
}
