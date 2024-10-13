"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ConfigurationStep({
  users,
  setUsers,
  storage,
  setStorage,
  budget,
  setBudget,
  compliance,
  setCompliance,
  onNext
}: {
  users: number;
  setUsers: (value: number) => void;
  storage: number;
  setStorage: (value: number) => void;
  budget: number;
  setBudget: (value: number) => void;
  compliance: string[];
  setCompliance: (value: string[]) => void;
  onNext: () => void;
}) {
  const complianceOptions = ["GDPR", "HIPAA", "SOC 2"];

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="users">Expected Number of Users</Label>
        <input
          type="range"
          id="users"
          min="1"
          max="1000000"
          step="1000"
          value={users}
          onChange={(e) => setUsers(Number(e.target.value))}
          className="w-full"
        />
        <span className="text-sm text-gray-500">{users.toLocaleString()} users</span>
      </div>
      <div>
        <Label htmlFor="storage">Data Storage Needs (GB)</Label>
        <input
          type="range"
          id="storage"
          min="1"
          max="1000"
          step="10"
          value={storage}
          onChange={(e) => setStorage(Number(e.target.value))}
          className="w-full"
        />
        <span className="text-sm text-gray-500">{storage} GB</span>
      </div>
      <div>
        <Label htmlFor="budget">Monthly Budget Cap ($)</Label>
        <Input
          id="budget"
          type="number"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
        />
      </div>
      <div>
        <Label>Compliance Requirements</Label>
        <div className="space-y-2">
          {complianceOptions.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={option}
                checked={compliance.includes(option)}
                onChange={(e) =>
                  setCompliance(
                    e.target.checked
                      ? [...compliance, option]
                      : compliance.filter((c) => c !== option)
                  )
                }
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      </div>
      <Button onClick={onNext} className="w-full">
        Next
      </Button>
    </div>
  );
}
