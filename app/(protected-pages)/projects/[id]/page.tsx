"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

interface AwsResource {
  type: string;
  count: number;
  details: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  awsResources: AwsResource[];
}

const ResourceCard: React.FC<AwsResource> = ({ type, count, details }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ease-in-out cursor-pointer  text-gray-900 dark:text-gray-100">
    <h3 className="font-semibold text-lg mb-2">{type}</h3>
    <p className="text-3xl font-bold mb-2">{count}</p>
    <p className="text-sm text-gray-600">{details}</p>
  </div>
);

export default function ProjectDashboard() {
  const params = useParams();
  const id = params.id as string;
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (id) {
      // TODO: Replace with actual data fetching logic
      const fetchProject = async () => {
        // Simulating API call
        setProject({
          id: id,
          name: `Project ${id}`,
          description: "This is a project description",
          awsResources: [
            {
              type: "EC2 Instances",
              count: 5,
              details: "Running in us-west-2",
            },
            { type: "S3 Buckets", count: 3, details: "Total storage: 500GB" },
            {
              type: "RDS Databases",
              count: 2,
              details: "MySQL and PostgreSQL",
            },
            {
              type: "Lambda Functions",
              count: 10,
              details: "Various microservices",
            },
            { type: "ECS Clusters", count: 1, details: "3 services running" },
            {
              type: "CloudFront Distributions",
              count: 2,
              details: "For web and API",
            },
          ],
        });
      };

      fetchProject();
    }
  }, [id]);

  if (!project) return <div>Loading...</div>;

  return (
    <div className="p-4 relative">
      <Link
        href="/home"
        className="absolute top-4 left-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-4 mt-16">
        {project.name} Dashboard
      </h1>
      <p className="text-gray-600 mb-6">{project.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {project.awsResources.map((resource, index) => (
          <ResourceCard key={index} {...resource} />
        ))}
      </div>
    </div>
  );
}
