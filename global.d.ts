import type { ComponentType } from "react";

declare module "*.mdx" {
  export const metadata: Record<string, unknown>;
  const MDXContent: ComponentType;
  export default MDXContent;
}
