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
      className="mb-5 flex cursor-pointer flex-col gap-3 rounded-xl border-2 border-solid border-stone-300 bg-white p-4 duration-200 hover:border-[#1e40af] sm:p-5"
    >
      <h3 className="poppins mb-4 text-[#1e40af] sm:text-xl md:text-2xl">
        {step.name}
      </h3>
      {children}
    </Link>
  );
};
