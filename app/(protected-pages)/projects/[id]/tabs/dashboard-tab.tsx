"use client";

import {
  CloudIcon,
  CurrencyDollarIcon,
  ServerIcon,
  ChartBarIcon,
  ExclamationCircleIcon,
  CheckCircleIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";

interface ResourceMetric {
  name: string;
  value: number;
  change: number;
  status: "up" | "down";
}

export default function DashboardTab({ project }: { project: any }) {
  const stats = {
    resources: {
      total: 19,
      active: 15,
      warning: 2,
      error: 2,
    },
    costs: {
      current: 156.78,
      previous: 142.32,
      trend: "up" as const,
    },
    performance: {
      cpu: 67,
      memory: 82,
      network: 45,
    },
    metrics: [
      {
        name: "API Requests",
        value: 2345,
        change: 12.5,
        status: "up" as const,
      },
      { name: "Error Rate", value: 0.8, change: -2.3, status: "down" as const },
      { name: "Response Time", value: 245, change: 5.7, status: "up" as const },
    ],
  };

  const recentActivity = [
    {
      id: 1,
      type: "success",
      message: "Successfully deployed new Lambda function",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      type: "warning",
      message: "High CPU usage detected in EC2 instance",
      timestamp: "3 hours ago",
    },
    {
      id: 3,
      type: "success",
      message: "S3 bucket backup completed",
      timestamp: "5 hours ago",
    },
  ];

  return (
    <div className="h-full overflow-auto px-4 py-4">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Resources Card */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Resources</h3>
              <ServerIcon className="h-6 w-6 text-gray-400" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-2xl font-semibold text-gray-900">
                  {stats.resources.total}
                </p>
                <p className="text-sm text-gray-500">Total Resources</p>
              </div>
              <div className="flex space-x-2 items-center">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-green-600">
                      {stats.resources.active} Active
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-yellow-600">
                      {stats.resources.warning} Warning
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-red-600">
                      {stats.resources.error} Error
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cost Card */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Cost</h3>
              <CurrencyDollarIcon className="h-6 w-6 text-gray-400" />
            </div>
            <div className="mt-4">
              <p className="text-2xl font-semibold text-gray-900">
                ${stats.costs.current}
              </p>
              <div className="flex items-center mt-2">
                <span
                  className={`text-sm ${stats.costs.trend === "up" ? "text-red-600" : "text-green-600"}`}
                >
                  {stats.costs.trend === "up" ? "↑" : "↓"}
                  {(
                    ((stats.costs.current - stats.costs.previous) /
                      stats.costs.previous) *
                    100
                  ).toFixed(1)}
                  %
                </span>
                <span className="text-sm text-gray-500 ml-2">
                  vs last month
                </span>
              </div>
            </div>
          </div>

          {/* Performance Card */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Performance</h3>
              <ChartBarIcon className="h-6 w-6 text-gray-400" />
            </div>
            <div className="mt-4 space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">CPU Usage</span>
                  <span className="text-gray-900">
                    {stats.performance.cpu}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 rounded-full h-2 transition-all duration-500"
                    style={{ width: `${stats.performance.cpu}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Memory</span>
                  <span className="text-gray-900">
                    {stats.performance.memory}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 rounded-full h-2 transition-all duration-500"
                    style={{ width: `${stats.performance.memory}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Network</span>
                  <span className="text-gray-900">
                    {stats.performance.network}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 rounded-full h-2 transition-all duration-500"
                    style={{ width: `${stats.performance.network}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="text-sm font-medium text-gray-500">
                {metric.name}
              </h3>
              <div className="mt-2 flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">
                  {metric.value}
                </p>
                <p
                  className={`ml-2 flex items-center text-sm ${
                    metric.status === "up" ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {metric.status === "up" ? (
                    <ArrowUpIcon className="h-4 w-4" />
                  ) : (
                    <ArrowDownIcon className="h-4 w-4" />
                  )}
                  {Math.abs(metric.change)}%
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                {activity.type === "success" ? (
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-0.5" />
                ) : (
                  <ExclamationCircleIcon className="h-6 w-6 text-yellow-500 mt-0.5" />
                )}
                <div>
                  <p className="text-sm text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {activity.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
