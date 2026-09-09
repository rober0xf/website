"use client";

import { useRef, useState, type ReactNode } from "react";
import { CheckIconComponent } from "./svg/check-icon";
import { CopyIconComponent } from "./svg/copy-icon";
import "@/app/styles/markdown.css";

interface Props {
  children: ReactNode;
}

export const CodeBlockComponent = ({ children }: Props) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const code = wrapperRef.current?.querySelector("pre")?.innerText;
    if (!code) return;

    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div ref={wrapperRef} className="code-wrapper">
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy code"
        className={`copy-button ${copied ? "success" : ""}`}
      >
        {copied ? (
          <CheckIconComponent className="icon" />
        ) : (
          <CopyIconComponent className="icon" />
        )}
      </button>
      {children}
    </div>
  );
};
