import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function FileTextIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h4" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="m5 8 7 5 7-5" />
    </svg>
  );
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 19V5" />
      <path d="m5 12 7-7 7 7" />
    </svg>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.42 0-9.75 4.42-9.75 9.86 0 4.35 2.8 8.04 6.68 9.34.49.1.67-.21.67-.48 0-.23-.01-.84-.01-1.65-2.72.6-3.3-1.19-3.3-1.19-.44-1.15-1.08-1.45-1.08-1.45-.88-.61.07-.6.07-.6.98.07 1.5 1.02 1.5 1.02.87 1.5 2.27 1.07 2.82.82.09-.64.34-1.07.62-1.31-2.17-.25-4.45-1.1-4.45-4.88 0-1.08.38-1.96 1-2.65-.1-.25-.44-1.27.1-2.62 0 0 .82-.27 2.68 1.01a9.18 9.18 0 0 1 4.88 0c1.86-1.28 2.68-1.01 2.68-1.01.54 1.35.2 2.37.1 2.62.63.69 1 1.57 1 2.65 0 3.8-2.29 4.62-4.47 4.87.35.31.66.91.66 1.84 0 1.33-.01 2.4-.01 2.73 0 .27.18.59.68.49a9.83 9.83 0 0 0 6.67-9.34c0-5.44-4.33-9.86-9.75-9.86Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M5.37 7.66a2.14 2.14 0 1 1 0-4.28 2.14 2.14 0 0 1 0 4.28ZM3.68 20.62h3.38V9.25H3.68v11.37ZM9.28 9.25h3.24v1.55h.05c.45-.85 1.55-1.75 3.2-1.75 3.42 0 4.05 2.25 4.05 5.18v6.39h-3.38v-5.67c0-1.35-.02-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.99v5.76H9.28V9.25Z" />
    </svg>
  );
}
