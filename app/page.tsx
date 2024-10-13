'use client'

import { use, useState } from "react"
import { StepsNavigator } from "@/components/StepsNavigator"
import { LoginStep } from "@/components/LoginStep"
import DashboardStep from "@/components/DashboardStep"
import ProjectCreationStep from "@/components/ProjectCreationStep"
import  ConfigurationStep from "@/components/ConfigurationStep"
import  ReviewStep  from "@/components/ReviewStep"
import  DeploymentProgressStep  from "@/components/DeploymentProgressStep"
import CompletionStep from "@/components/CompletionStep"
import { Button } from "@/components/ui/button"

const steps = [
  "Login",
  "Dashboard",
  "Project Creation",
  "Configuration",
  "Review",
  "Deployment",
  "Monitoring"
]

export default function Index() {
  const [step, setStep] = useState(0)
  const [deploymentProgress, setDeploymentProgress] = useState(0)

  const [projectName, setProjectName] = useState("")
  const [appType, setAppType] = useState('')
  const [language, setLanguage] = useState('')

  const [users, setUsers] = useState(0)
  const [storage, setStorage] = useState(0)
  const [budget, setBudget] = useState(0)
  const [compliance, setCompliance] = useState<string[]>([])

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 0) setStep(step - 1)
  }

  return (
    <>
      {/* <Hero /> */}
      <main className="flex-1 flex flex-col gap-6 px-4">
        
      <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">AWS Deployment Platform Demo</h1>
      <StepsNavigator steps={steps} currentStep={step} />

      {step === 0 && <LoginStep onNext={handleNext} />}
      {step === 1 && <DashboardStep onNext={handleNext} />}
      {step === 2 && <ProjectCreationStep onNext={handleNext} setProjectName={setProjectName} setAppType={setAppType} setLanguage={setLanguage} projectName={""} appType={""} language={""} />}
      {step === 3 && <ConfigurationStep onNext={handleNext} setUsers={setUsers} setStorage={setStorage} setBudget={setBudget} setCompliance={setCompliance} users={0} storage={0} budget={0} compliance={[]}/>}
      {step === 4 && <ReviewStep onNext={handleNext} budget={0} />}
      {step === 5 && (
        <DeploymentProgressStep deploymentProgress={0}
        />
      )}
      {step === 6 && <CompletionStep onMonitor={()=>{}}/>}

      <div className="mt-4 flex justify-between">
        {step > 0 && <Button onClick={handleBack}>Back</Button>}
        {step < steps.length - 1 && step !== 5 && <Button onClick={handleNext}>Next</Button>}
      </div>
    </div>

      </main>
    </>
  );
}
