import type { Metadata } from "next";
import { ProjectsComponent } from "@/components/projects";

export const metadata: Metadata = {
  title: "rober | projects",
};

export default function Page() {
  return <ProjectsComponent />;
}
