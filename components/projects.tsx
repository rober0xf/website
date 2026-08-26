import { AsciiComponent } from "@/components/ascii";
import { ProjectCardComponent } from "@/components/project-card";
import { PROJECTS } from "@/lib/projects";

export const ProjectsComponent = () => {
  if (PROJECTS.length === 0) {
    return (
      <>
        <div className="empty text-center font-medium text-red-800">
          No projects yet
        </div>
        <AsciiComponent />
      </>
    );
  }

  return (
    <div className="post-wrapper">
      <div className="post-container">
        {PROJECTS.map((project, index) => (
          <div key={project.name}>
            <article
              id={project.name.toLowerCase()}
              className="project-card scroll-mt-24"
            >
              <h2 className="post-title font-sans">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1e40af]"
                >
                  {project.name}
                </a>
              </h2>

              <ProjectCardComponent project={project} />

              <p className="post-description">{project.description}</p>
            </article>

            {index < PROJECTS.length - 1 && (
              <div className="mx-auto h-px my-10 w-40 bg-stone-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
