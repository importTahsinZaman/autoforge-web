import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface LoginStepProps {
  onNext: () => void
}

export const LoginStep: React.FC<LoginStepProps> = ({ onNext }) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="Enter your password" />
      </div>
      <Button onClick={onNext} className="w-full">Login</Button>
    </div>
  )
}
