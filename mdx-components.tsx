import type { MDXComponents } from "mdx/types";
import { CodeBlockComponent } from "@/components/code-block";

const components = {
  pre: ({ children, ...props }) => (
    <CodeBlockComponent>
      <pre {...props}>{children}</pre>
    </CodeBlockComponent>
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
