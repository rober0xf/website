import Link from "next/link";

interface Props {
  step: {
    name: string;
    href: string;
  };
  children: React.ReactNode;
}

export const StepComponent = ({ step, children }: Props) => {
  return (
    <Link
      href={step.href}
      className="group flex h-full w-full flex-col items-center justify-between"
    >
      <h3 className="poppins text-lg font-medium text-[#1e40af] sm:text-xl">
        {step.name}
      </h3>

      <div className="mt-auto pt-2 text-sm text-stone-500">{children}</div>
    </Link>
  );
};
