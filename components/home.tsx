import { StepComponent } from "@/components/step";
import { RecentSongComponent } from "./recent-song";

type StepType = {
  name: string;
  href: string;
  description: string;
};

export const HomeComponent = () => {
  const steps: StepType[] = [
    {
      name: "Notifier",
      href: "/projects#notifier",
      description:
        "Backend service for scheduling and delivering payments reminders.",
    },
    {
      name: "Prosenos",
      href: "/projects#prosenos",
      description:
        "Live football and NBA match tracker with real-time updates.",
    },
  ];

  return (
    <main className="w-full justify-center">
      {/* myself section */}
      <section
        id="intro_page"
        className="flex w-full justify-center gap-6 px-4 py-6 sm:px-6"
      >
        <div className="mx-auto w-full max-w-2xl">
          <h3 className="poppins text-lg sm:text-xl">
            Third-year Argentine Systems Engineering student focused on{" "}
            <span className="font-semibold text-[#1e40af]">
              backend engineering
            </span>
            . Interested in{" "}
            <span className="font-semibold text-[#1e40af]">
              distributed systems.
            </span>
          </h3>
          <p className="poppins pt-1 text-sm sm:text-base">
            I primarily build with Go and Python. You can also find me on{" "}
            <a
              href="https://x.com/roberpili"
              className="poppins font-semibold hover:text-[#1e40af]"
              target="_blank"
            >
              x dot com.
            </a>
          </p>
          <h2 className="garamond mt-16 text-center text-2xl text-stone-500">
            &quot;Overthinking, overanalyzing, separates the body from the
            mind.&quot; - TOOL
          </h2>
        </div>
      </section>

      <div className="mx-auto mt-16 h-px w-32 bg-stone-300" />
      {/* now strip */}
      <section className="mx-auto w-full max-w-5xl py-14 text-center">
        <p className="poppins text-sm text-stone-500 select-none sm:text-base">
          <span className="font-medium text-[#1e40af]">now</span>
          {" · "}
          learning aws and typescript
          {" — "}
          building my own personal CLI assistant
        </p>
      </section>
      <div className="mx-auto h-px w-32 bg-stone-300" />

      {/* recent song */}
      <RecentSongComponent />

      {/* projects section */}
      <section id="projects" className="mx-auto w-full max-w-5xl lg:py-24">
        <h3 className="mb-8 text-xl font-normal select-none sm:text-2xl">
          featured projects
        </h3>

        <div className="flex flex-col gap-5">
          {steps.map((step) => (
            <StepComponent key={step.name} step={step}>
              <p>{step.description}</p>
            </StepComponent>
          ))}
        </div>
      </section>
    </main>
  );
};
