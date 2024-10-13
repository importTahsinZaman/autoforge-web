import { Button } from "@/components/ui/button"

interface CompletionStepProps {
  onMonitor: () => void;
}

const CompletionStep: React.FC<CompletionStepProps> = ({ onMonitor }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Deployment Complete</h2>
      <div>
        <h3 className="font-semibold">Deployed Resources:</h3>
        <ul className="list-disc list-inside">
          <li>2 EC2 instances (t3.medium)</li>
          <li>1 RDS instance (db.t3.medium)</li>
          <li>1 S3 bucket</li>
          <li>1 VPC with 2 public and 2 private subnets</li>
          <li>1 Application Load Balancer</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold">Endpoints:</h3>
        <p>Load Balancer: http://my-app-lb-123456.elb.amazonaws.com</p>
        <p>API: http://my-app-api-123456.elb.amazonaws.com</p>
      </div>
      <Button onClick={onMonitor} className="w-full">Monitor Deployment</Button>
    </div>
  );
}

export default CompletionStep;
