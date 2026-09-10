import Link from "next/link";
import "@/app/styles/step.css";

interface Props {
  step: {
    name: string;
    href: string;
  };
  children: React.ReactNode;
}

export const StepComponent = ({ step, children }: Props) => {
  return (
    <Link href={step.href} className="step-link">
      <h3 className="step-title">{step.name}</h3>

      <div className="step-description">{children}</div>
    </Link>
  );
};
