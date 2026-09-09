import { AsciiComponent } from "@/components/ascii";
import { ProjectCardComponent } from "@/components/project-card";
import { PROJECTS } from "@/lib/projects";
import "@/app/styles/projects.css";

export const ProjectsComponent = () => {
  if (PROJECTS.length === 0) {
    return (
      <>
        <div>No projects yet</div>
        <AsciiComponent />
      </>
    );
  }

  return (
    <section className="projects-section" aria-labelledby="projects-heading">
      <div className="projects-container">
        <h1 id="projects-heading" className="visually-hidden">
          Projects
        </h1>

        <div className="projects-list">
          {PROJECTS.map((project, index) => (
            <div key={project.name} className="projects-item">
              <article
                id={project.name.toLowerCase()}
                className="projects-card"
              >
                <h2 className="projects-title">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects-link"
                  >
                    {project.name}
                  </a>
                </h2>

                <ProjectCardComponent project={project} />

                <p className="projects-description">{project.description}</p>
              </article>

              {index < PROJECTS.length - 1 && (
                <hr className="projects-divider" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
