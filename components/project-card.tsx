"use client";
import React from "react";
import { Star, GitFork, Eye } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

interface ProjectCardProps {
  project: {
    id: string;
    name: string;
    description: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link href={`/projects/${project.id}`}>
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4
                   hover:bg-gray-100 dark:hover:bg-gray-700
                   transition-colors duration-200 ease-in-out cursor-pointer
                   text-gray-900 dark:text-gray-100"
      >
        <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
        <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">
          {project.description || "No description"}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
