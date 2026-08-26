import type { Project, ProjectStatus } from "@/lib/types";

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
    <div className="project-item flex items-center space-x-2">
      <p className="language">{project.language}</p>
      <div className="inline-flex items-center space-x-1">
        <div className={`h-2 w-2 rounded-full ${statusColor}`}></div>
        <span className={`font-medium ${statusColor}-text`}>
          {project.status.replace("_", " ")}
        </span>
      </div>
    </div>
  );
};
