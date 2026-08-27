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
      description: "Scheduling and delivering payments reminders.",
    },
    {
      name: "Prosenos",
      href: "/projects#prosenos",
      description:
        "Live football and NBA match tracker with real-time updates.",
    },
  ];

  return (
    <main className="w-full">
      {/* myself section */}
      <section
        id="intro_page"
        className="mx-auto flex w-full max-w-4xl justify-center px-4 py-12 sm:px-6"
      >
        <div className="w-full text-center">
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
          <p className="poppins pt-2 text-sm sm:text-base">
            I primarily build with Go and Python. You can also find me on{" "}
            <a
              href="https://x.com/roberpili"
              className="poppins font-semibold hover:text-[#1e40af]"
              target="_blank"
              rel="noreferrer"
            >
              x dot com.
            </a>
          </p>
          <h2 className="garamond mt-12 text-2xl text-stone-500">
            &quot;Overthinking, overanalyzing, separates the body from the
            mind.&quot; - TOOL
          </h2>
        </div>
      </section>

      <div className="mx-auto h-px w-32 bg-stone-300" />

      {/* now strip */}
      <section className="mx-auto w-full max-w-4xl py-12 text-center px-4 sm:px-6">
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

      <div className="mx-auto h-px w-32 bg-stone-300" />

      {/* projects section */}
      <section
        id="projects"
        className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6"
      >
        <h3 className="mb-8 text-center text-xl font-normal text-stone-500 select-none sm:text-2xl">
          featured projects
        </h3>

        <div className="flex w-full flex-col gap-5 sm:flex-row">
          {steps.map((step) => (
            <div
              key={step.name}
              className="flex flex-1 flex-col items-center border border-stone-300 p-8 text-center transition-colors duration-200 hover:border-[#1e40af]"
            >
              <StepComponent step={step}>
                <p>{step.description}</p>
              </StepComponent>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
