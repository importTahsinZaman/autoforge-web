import { Checkbox } from "@/components/ui/checkbox"

interface ComplianceChecklistProps {
  compliance: string[]
  setCompliance: (compliance: string[]) => void
}

export const ComplianceChecklist: React.FC<ComplianceChecklistProps> = ({ compliance, setCompliance }) => {
  const handleCheckboxChange = (item: string, checked: boolean) => {
    setCompliance(checked ? [...compliance, item] : compliance.filter((i) => i !== item))
  }

  return (
    <div className="space-y-2">
      {["GDPR", "HIPAA", "SOC 2"].map((item) => (
        <div key={item} className="flex items-center space-x-2">
          <Checkbox
            id={item}
            checked={compliance.includes(item)}
            onCheckedChange={(checked) => handleCheckboxChange(item, checked)}
          />
          <label htmlFor={item}>{item}</label>
        </div>
      ))}
    </div>
  )
}
