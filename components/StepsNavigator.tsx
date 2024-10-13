import React from "react"

interface StepsNavigatorProps {
  steps: string[]
  currentStep: number
}

export const StepsNavigator: React.FC<StepsNavigatorProps> = ({ steps, currentStep }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        {steps.map((s, i) => (
        <div
            key={i}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              i <= currentStep ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </div>
        ))}
      </div>
      <div className="text-center font-semibold">{steps[currentStep]}</div>
    </div>
  )
}
