import { StepComponent } from "@/components/step";
import { RecentSongComponent } from "./recent-song";
import "@/app/styles/home.css";

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
    <main>
      {/* myself section */}
      <section className="home-container">
        <div className="now-section">
          <h1 className="intro-text">
            I am a systems engineering student focused on{" "}
            <span className="blue-text">backend engineering</span>. Interested
            in <span className="blue-text">distributed systems</span> and{" "}
            <span className="blue-text">system design.</span>
          </h1>
          <p className="subintro-text">
            I primarily build with Python and Go. You can also find me on{" "}
            <a
              href="https://x.com/roberpili"
              className="tw-text"
              target="_blank"
              rel="noreferrer"
            >
              x dot com.
            </a>
          </p>
          <blockquote className="quote">
            &quot;Overthinking, overanalyzing, separates the body from the
            mind.&quot; - TOOL
          </blockquote>
        </div>
      </section>

      <hr className="section-separator" />

      {/* now section */}
      <section className="now-section">
        <p>
          <span className="blue-text">now</span>
          {" · "}
          learning aws and typescript
          {" — "}
          doing the odin project
        </p>
      </section>
      {/* end now section */}

      <hr className="section-separator" />

      {/* recent song */}
      <RecentSongComponent />

      <hr className="section-separator" />

      {/* projects section */}
      <section className="featured-section">
        <h2>featured projects</h2>

        <div className="featured-list">
          {steps.map((step) => (
            <div key={step.name} className="featured-project">
              <StepComponent step={step}>
                <p>{step.description}</p>
              </StepComponent>
            </div>
          ))}
        </div>
      </section>
      {/* end projects section */}
    </main>
  );
};
