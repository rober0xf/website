import type { Project, ProjectStatus } from "@/lib/types";
import "@/app/styles/projects.css";

interface Props {
  project: Project;
}

function getStatusColor(status: ProjectStatus): string {
  switch (status) {
    case "Done":
      return "status-done";
    case "In Dev":
      return "status-in-dev";
    case "Online":
      return "status-online";
    default:
      return "status-abandoned";
  }
}

export const ProjectCardComponent = ({ project }: Props) => {
  const statusColor = getStatusColor(project.status);

  return (
    <div className="project-item">
      <p className="project-language">{project.language}</p>
      <div className="project-status">
        <span
          className={`status-indicator ${statusColor}`}
          aria-hidden="true"
        />
        <span className={`status-label ${statusColor}-text`}>
          {project.status.replace("_", " ")}
        </span>
      </div>
    </div>
  );
};
