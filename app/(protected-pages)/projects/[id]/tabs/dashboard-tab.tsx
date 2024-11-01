"use client";

import {
  CloudIcon,
  CurrencyDollarIcon,
  ServerIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export default function DashboardTab({ project }: { project: any }) {
  // Dummy data - replace with real data
  const resources = {
    ec2Instances: 3,
    lambdaFunctions: 12,
    s3Buckets: 4,
    totalCost: 156.78,
    recentDeployments: [
      {
        id: "1",
        service: "Lambda Function",
        status: "success",
        timestamp: "2024-03-10T14:30:00Z",
      },
      {
        id: "2",
        service: "EC2 Instance",
        status: "in_progress",
        timestamp: "2024-03-10T13:15:00Z",
      },
      {
        id: "3",
        service: "S3 Bucket",
        status: "failed",
        timestamp: "2024-03-10T12:00:00Z",
      },
    ],
    metrics: {
      cpuUtilization: 67,
      memoryUsage: 82,
      requestCount: 1234,
    },
  };

  return (
    <div className="bg-gray-50 min-h-full py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Resource Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <ServerIcon className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  EC2 Instances
                </p>
                <p className="text-2xl font-semibold text-gray-900">
                  {resources.ec2Instances}
                </p>
              </div>
            </div>
          </div>
          {/* Add similar cards for other metrics */}
        </div>

        {/* Recent Deployments */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900">
              Recent Deployments
            </h2>
            <div className="mt-4">
              {resources.recentDeployments.map((deployment) => (
                <div
                  key={deployment.id}
                  className="flex items-center justify-between py-3 border-b last:border-0"
                >
                  <div>
                    <p className="font-medium text-gray-900">
                      {deployment.service}
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(deployment.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <span
                    className={`
                    px-3 py-1 rounded-full text-sm font-medium
                    ${deployment.status === "success" ? "bg-green-100 text-green-800" : ""}
                    ${deployment.status === "failed" ? "bg-red-100 text-red-800" : ""}
                    ${deployment.status === "in_progress" ? "bg-yellow-100 text-yellow-800" : ""}
                  `}
                  >
                    {deployment.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Performance Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Add metric visualizations here */}
          </div>
        </div>
      </div>
    </div>
  );
}
