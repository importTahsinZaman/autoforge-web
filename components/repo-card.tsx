import React from "react";
import { Star, GitFork, Eye } from "lucide-react";

interface RepoCardProps {
  repo: {
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    watchers_count: number;
  };
}

const repoCard: React.FC<RepoCardProps> = ({ repo }) => {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-md p-4">
      <h3 className="font-semibold text-lg mb-2">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {repo.name}
        </a>
      </h3>
      <p className="text-sm mb-4 text-muted-foreground">
        {repo.description || "No description"}
      </p>
      <div className="flex justify-between text-sm">
        <span className="flex items-center">
          <Star size={16} className="mr-1" /> {repo.stargazers_count}
        </span>
        <span className="flex items-center">
          <GitFork size={16} className="mr-1" /> {repo.forks_count}
        </span>
        <span className="flex items-center">
          <Eye size={16} className="mr-1" /> {repo.watchers_count}
        </span>
      </div>
    </div>
  );
};

export default RepoCard;
