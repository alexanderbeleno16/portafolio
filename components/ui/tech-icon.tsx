import type { SVGProps } from "react";

import { cn } from "@/lib/cn";

type TechIconProps = SVGProps<SVGSVGElement> & {
  name: string;
};

type IconProps = SVGProps<SVGSVGElement> & {
  techName: string;
};

const normalizeTechName = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]/g, "");

function IconShell({ techName, className, children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      data-tech-icon={techName}
      className={cn("shrink-0", className)}
      {...props}
    >
      {children}
    </svg>
  );
}

export function TechIcon({ name, ...props }: TechIconProps) {
  const key = normalizeTechName(name);

  if (key.includes("next")) return <NextIcon techName={name} {...props} />;
  if (key === "react" || key.includes("reactnative")) {
    return <ReactIcon techName={name} {...props} />;
  }
  if (key.includes("angular")) return <AngularIcon techName={name} {...props} />;
  if (key.includes("primeng")) return <PrimeNgIcon techName={name} {...props} />;
  if (key.includes("heroui")) return <UiKitIcon techName={name} {...props} />;
  if (key.includes("node")) return <NodeIcon techName={name} {...props} />;
  if (key.includes("supabase")) return <SupabaseIcon techName={name} {...props} />;
  if (key.includes("sqlalchemy")) return <DatabaseIcon techName={name} {...props} />;
  if (key.includes("pydantic")) return <DocumentIcon techName={name} {...props} />;
  if (key.includes("postgres")) return <DatabaseIcon techName={name} {...props} />;
  if (key.includes("mongo")) return <MongoIcon techName={name} {...props} />;
  if (key.includes("oracle")) return <OracleIcon techName={name} {...props} />;
  if (key.includes("mysql")) return <MySqlIcon techName={name} {...props} />;
  if (key.includes("sqlite")) return <SqliteIcon techName={name} {...props} />;
  if (key.includes("docker")) return <DockerIcon techName={name} {...props} />;
  if (key.includes("tailwind")) return <TailwindIcon techName={name} {...props} />;
  if (key.includes("typescript")) return <TypeScriptIcon techName={name} {...props} />;
  if (key.includes("scss") || key.includes("sass")) return <SassIcon techName={name} {...props} />;
  if (key.includes("html5") || key === "html") return <HtmlIcon techName={name} {...props} />;
  if (key.includes("bootstrap")) return <BootstrapIcon techName={name} {...props} />;
  if (key.includes("python")) return <PythonIcon techName={name} {...props} />;
  if (key.includes("fastapi")) return <FastApiIcon techName={name} {...props} />;
  if (key.includes("laravel")) return <LaravelIcon techName={name} {...props} />;
  if (key === "java") return <JavaIcon techName={name} {...props} />;
  if (key === "php") return <PhpIcon techName={name} {...props} />;
  if (key.includes("flask")) return <FlaskIcon techName={name} {...props} />;
  if (key === "jsp") return <JspIcon techName={name} {...props} />;
  if (key.includes("aws")) return <AwsIcon techName={name} {...props} />;
  if (key.includes("vercel")) return <VercelIcon techName={name} {...props} />;
  if (key.includes("githubactions")) return <ActionsIcon techName={name} {...props} />;
  if (key.includes("portainer")) return <PortainerIcon techName={name} {...props} />;
  if (key.includes("astro")) return <AstroIcon techName={name} {...props} />;
  if (key.includes("framer")) return <FramerIcon techName={name} {...props} />;
  if (key.includes("vite")) return <ViteIcon techName={name} {...props} />;
  if (key.includes("redis")) return <RedisIcon techName={name} {...props} />;
  if (key.includes("leaflet")) return <MapIcon techName={name} {...props} />;
  if (key.includes("openai") || key.includes("gpt")) return <OpenAiIcon techName={name} {...props} />;
  if (key.includes("engram") || key.includes("emgram")) return <DatabaseIcon techName={name} {...props} />;
  if (key.includes("gentleai") || key.includes("gentle")) return <OrchestratorIcon techName={name} {...props} />;
  if (key.includes("langchain")) return <ChainIcon techName={name} {...props} />;
  if (key.includes("pytorch")) return <TorchIcon techName={name} {...props} />;
  if (key.includes("pandas")) return <PandasIcon techName={name} {...props} />;
  if (key === "gbm") return <GbmIcon techName={name} {...props} />;
  if (key.includes("codex")) return <TerminalIcon techName={name} {...props} />;
  if (key.includes("claude") || key.includes("opus")) return <ClaudeIcon techName={name} {...props} />;
  if (key.includes("opencode")) return <CodeBracesIcon techName={name} {...props} />;
  if (key.includes("gemini")) return <GeminiIcon techName={name} {...props} />;
  if (key.includes("qwen")) return <QwenIcon techName={name} {...props} />;
  if (key === "prd") return <DocumentIcon techName={name} {...props} />;
  if (key === "sdd") return <ArchitectureIcon techName={name} {...props} />;
  if (key === "tdd") return <TestIcon techName={name} {...props} />;
  if (key.includes("prlisto") || key.includes("codereview") || key === "ci") {
    return <ActionsIcon techName={name} {...props} />;
  }
  if (key.includes("orquest") || key.includes("agent")) {
    return <OrchestratorIcon techName={name} {...props} />;
  }

  return <CodeBracesIcon techName={name} {...props} />;
}

function NextIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8.8 16V8l6.4 8V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </IconShell>
  );
}

function ReactIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="8.6" ry="3.4" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="8.6" ry="3.4" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="8.6" ry="3.4" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
    </IconShell>
  );
}

function AngularIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M12 2.8 20 6l-1.3 10.7L12 21.2l-6.7-4.5L4 6l8-3.2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m8.3 16 3.7-8 3.7 8M9.7 13.2h4.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </IconShell>
  );
}

function PrimeNgIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M12 3.2 19 7v8.2l-7 5.6-7-5.6V7l7-3.8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 16V8.8h4.1c2 0 3.2 1.1 3.2 2.8s-1.2 2.8-3.2 2.8H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </IconShell>
  );
}

function UiKitIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <rect x="4" y="5" width="16" height="14" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 9h10M7 13h4M13.5 13H17M7 16.5h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </IconShell>
  );
}

function NodeIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M12 2.8 19.6 7v10L12 21.2 4.4 17V7L12 2.8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8.3 15.5V8.8l7.4 6.7V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </IconShell>
  );
}

function DatabaseIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <ellipse cx="12" cy="6.2" rx="6.8" ry="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5.2 6.2v7.7c0 1.7 3 3 6.8 3s6.8-1.3 6.8-3V6.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5.2 10.1c0 1.7 3 3 6.8 3s6.8-1.3 6.8-3" stroke="currentColor" strokeWidth="1.4" opacity=".75" />
    </IconShell>
  );
}

function MongoIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M12 3.2c3.4 3.1 5 6 4.8 8.7-.2 3.3-2 5.6-4.8 7.1-2.8-1.5-4.6-3.8-4.8-7.1C7 9.2 8.6 6.3 12 3.2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M12 7.2v12.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </IconShell>
  );
}

function OracleIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <ellipse cx="12" cy="12" rx="8.2" ry="4.6" stroke="currentColor" strokeWidth="1.7" />
      <ellipse cx="12" cy="12" rx="4.8" ry="2.4" stroke="currentColor" strokeWidth="1.4" opacity=".75" />
    </IconShell>
  );
}

function MySqlIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M5 16.5c1.7-3.7 4.5-6.4 8.4-8.2 2.5-1.1 4.5-1 5.9.4-2 .2-3.5 1.1-4.5 2.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 15.5c1.3.8 2.9 1 4.8.6 2.6-.5 4.6-2 6.2-4.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6.5 10.2h3.8M6.5 13h2.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </IconShell>
  );
}

function SqliteIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <ellipse cx="11" cy="6.2" rx="5.8" ry="2.7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5.2 6.2v7.5c0 1.5 2.6 2.7 5.8 2.7 1.6 0 3-.3 4-.8M16.8 6.2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="m14.5 19.8 4.4-8.6-3.4 1.1-.2-4.1-4.4 8.7 3.5-1.2.1 4.1Z" fill="currentColor" />
    </IconShell>
  );
}

function DockerIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M4.2 13.2h13.6c-.4 3.1-2.8 5.3-6.6 5.3H8.4c-2.5 0-4.2-1.9-4.2-5.3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6.4 10h2.4v2.4H6.4zM9.6 10H12v2.4H9.6zM12.8 10h2.4v2.4h-2.4zM9.6 6.8H12v2.4H9.6zM12.8 6.8h2.4v2.4h-2.4z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M18 11.4c1.2-.1 2-.7 2.6-1.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </IconShell>
  );
}

function TailwindIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M4 12.6c1.6-3.2 3.6-4.8 6-4.8 3.6 0 4.1 2.7 5.9 2.7 1.2 0 2-.6 2.7-1.9-1.6 3.2-3.6 4.8-6 4.8-3.6 0-4.1-2.7-5.9-2.7-1.2 0-2 .6-2.7 1.9Z" fill="currentColor" opacity=".9" />
      <path d="M6 17c1.4-2.7 3-4 5-4 3 0 3.5 2.3 5 2.3 1 0 1.7-.5 2.3-1.6-1.4 2.7-3 4-5 4-3 0-3.5-2.3-5-2.3-1 0-1.7.5-2.3 1.6Z" fill="currentColor" opacity=".6" />
    </IconShell>
  );
}

function TypeScriptIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.5 9h7M11 9v7M15.2 15.5c.6.5 1.4.7 2.1.4.9-.4.8-1.5-.2-1.8l-.9-.3c-1-.4-1.1-1.5-.1-2 .7-.4 1.5-.2 2.1.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </IconShell>
  );
}

function SassIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M18.5 7.2c-2.2-2.1-7.3-.5-10.7 2.6-2.3 2-2.9 4.2-1.4 5.1 1.4.9 3.7-.1 5.8-1.8 1.9-1.5 3.5-2 4.3-1.1.8.9 0 2.5-1.8 3.6-2.2 1.4-4.9 1.1-5.8-.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.6 16.7c-.2 1.2-.9 2.2-2 2.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </IconShell>
  );
}

function HtmlIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="m5 3.8 1.3 14.4L12 20.8l5.7-2.6L19 3.8H5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8.7 8h6.6l-.3 3.1H9.1l.3 3.2 2.6 1.1 2.6-1.1.2-1.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </IconShell>
  );
}

function BootstrapIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <rect x="4" y="5" width="16" height="14" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 8.3h4.2c1.6 0 2.5.8 2.5 2 0 1-.6 1.7-1.6 1.9 1.2.2 1.9 1 1.9 2.1 0 1.5-1.1 2.4-2.9 2.4H9V8.3Zm0 3.6h3.7M9 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </IconShell>
  );
}

function PythonIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M12 3.5H8.8A3.3 3.3 0 0 0 5.5 6.8V11H12a2 2 0 0 1 2 2v1.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 20.5h3.2a3.3 3.3 0 0 0 3.3-3.3V13H12a2 2 0 0 1-2-2V9.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="7" r=".8" fill="currentColor" />
      <circle cx="15" cy="17" r=".8" fill="currentColor" />
    </IconShell>
  );
}

function FastApiIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="m12.7 5.8-5 7.1h4.2l-.6 5.3 5.2-7.4h-4.1l.3-5Z" fill="currentColor" />
    </IconShell>
  );
}

function LaravelIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M4.5 6.8 10 3.8l5.5 3v6L10 16l-5.5-3.2v-6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m15.5 6.8 4 2.2v6l-5.5 3.2-4-2.2M10 3.8v6l5.5 3.2M4.5 6.8 10 10" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </IconShell>
  );
}

function JavaIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M12.7 3.5c-2.2 1.7-2.6 3.1-1.1 4.4 1.3 1.1 1 2.2-.9 3.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7.3 14.2c2.9 1.2 6.4 1.2 9.3 0M8.2 17.4c2.3.9 5.3.9 7.6 0M9 20.2c1.8.5 4.2.5 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17.5 12.2c1.4.5 2.1 1.1 2.1 1.9 0 1.3-1.8 2.5-4.6 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </IconShell>
  );
}

function PhpIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <ellipse cx="12" cy="12" rx="9" ry="5.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.8 14.8 8 9.2h2.1c1.3 0 2 .8 1.7 1.9-.2 1.1-1.1 1.8-2.4 1.8H7.2M12.2 14.8l1.2-5.6M13 12h3.2M16.4 14.8l.7-3.1c.2-.9-.2-1.5-1.1-1.5h-2.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </IconShell>
  );
}

function FlaskIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M9 4h6M10 4v5.2l-4.5 7.7A2.8 2.8 0 0 0 7.9 21h8.2a2.8 2.8 0 0 0 2.4-4.1L14 9.2V4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.2 16.2h7.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="11" cy="14" r=".8" fill="currentColor" />
      <circle cx="14" cy="17.3" r=".7" fill="currentColor" />
    </IconShell>
  );
}

function JspIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 8.5v5.8c0 1.1-.6 1.8-1.7 1.8M10.6 15.2c.7.6 1.7.9 2.6.6 1.1-.4 1.1-1.7 0-2.1l-1.2-.4c-1.2-.4-1.3-1.8-.1-2.3.8-.4 1.7-.2 2.4.4M16.6 16V8.5h2.1c1.3 0 2.1.8 2.1 2s-.8 2-2.1 2h-2.1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </IconShell>
  );
}

function AwsIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M5.2 15.5c3.2 2.4 9.4 2.5 13.6-.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="m17.4 17.8 1.8-3-3.4-.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 10.5 6.7 6h1.8l1.7 4.5M5.7 8.9h3.8M12 6l.9 4.5L14.4 6l1.5 4.5.9-4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </IconShell>
  );
}

function VercelIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="m12 4 9 15H3L12 4Z" fill="currentColor" />
    </IconShell>
  );
}

function ActionsIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M6 7.5h6M6 12h4M6 16.5h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16.5 7.5 19 10l-2.5 2.5M15 16.5l1.4 1.4L20 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" stroke="currentColor" strokeWidth="1.4" />
    </IconShell>
  );
}

function PortainerIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M5.2 16.8h13.6c-.6 2-2.4 3.2-5.1 3.2h-3.4c-2.7 0-4.5-1.2-5.1-3.2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6.3 12.2h3v3h-3zM10.5 12.2h3v3h-3zM14.7 12.2h3v3h-3zM8.4 8.1h3v3h-3zM12.6 8.1h3v3h-3zM10.5 4h3v3h-3z" stroke="currentColor" strokeWidth="1.25" />
    </IconShell>
  );
}

function AstroIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M12 3.5 17.8 18c-2-1.2-3.9-1.9-5.8-1.9S8.2 16.8 6.2 18L12 3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8.5 18.2c.7 1.4 1.9 2.1 3.5 2.1s2.8-.7 3.5-2.1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </IconShell>
  );
}

function FramerIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M7 4h10v5H7V4Zm0 5h10l-5 5H7V9Zm0 5h5v6l-5-6Z" fill="currentColor" />
    </IconShell>
  );
}

function ViteIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M4.2 5.3 12 20l7.8-14.7L12 8.1 4.2 5.3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m13.2 7.5-4.1 6h3l-1 4 4-6h-3l1.1-4Z" fill="currentColor" />
    </IconShell>
  );
}

function RedisIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="m12 4 7 3.6-7 3.6-7-3.6L12 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m5 11.1 7 3.6 7-3.6M5 14.8l7 3.6 7-3.6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </IconShell>
  );
}

function MapIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="m4.5 6.5 5-2 5 2 5-2v13l-5 2-5-2-5 2v-13Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9.5 4.5v13M14.5 6.5v13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M12 8.2a3 3 0 0 1 3 3c0 2-3 4.6-3 4.6s-3-2.6-3-4.6a3 3 0 0 1 3-3Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <circle cx="12" cy="11.2" r=".8" fill="currentColor" />
    </IconShell>
  );
}

function SupabaseIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path
        d="M13.5 3.5 5.8 14.1c-.6.8 0 1.9 1 1.9h4.6l-.9 4.5 7.7-10.6c.6-.8 0-1.9-1-1.9h-4.6l.9-4.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M10.3 7.9h6.9M6.8 16h7"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity=".65"
      />
    </IconShell>
  );
}

function OpenAiIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <circle cx="12" cy="6.1" r="2.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17.1" cy="9.3" r="2.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17" cy="15.2" r="2.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="6.9" cy="15.2" r="2.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="6.9" cy="9.3" r="2.5" stroke="currentColor" strokeWidth="1.4" />
    </IconShell>
  );
}

function ChainIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M9.9 8.2 8.4 6.7a3.4 3.4 0 0 0-4.8 4.8l2.5 2.5a3.4 3.4 0 0 0 4.8 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="m14.1 15.8 1.5 1.5a3.4 3.4 0 0 0 4.8-4.8l-2.5-2.5a3.4 3.4 0 0 0-4.8 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="m9 15 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </IconShell>
  );
}

function TorchIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M13.8 3.7c-.3 3.1 4.2 4.8 4.2 9.3a6 6 0 1 1-12 0c0-3.1 2-5.4 4.2-7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.8 6.3 17 4.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="14" r="2.3" fill="currentColor" />
    </IconShell>
  );
}

function PandasIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M7 4v16M12 7v10M17 4v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M7 8h.01M7 14h.01M12 4h.01M12 20h.01M17 9h.01M17 15h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </IconShell>
  );
}

function GbmIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M4.5 18.5h15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 16V9M12 16V5M17 16v-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="m6.2 8.2 2.5-2.5 2.5 2.5M11.2 4.2l2.5-2.5 2.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </IconShell>
  );
}

function TerminalIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <rect x="3.5" y="5" width="17" height="14" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="m7.2 10 2.2 2-2.2 2M11.6 14h4.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </IconShell>
  );
}

function ClaudeIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M12 3.2c.8 3.9 2.9 6 6.8 6.8-3.9.8-6 2.9-6.8 6.8-.8-3.9-2.9-6-6.8-6.8 3.9-.8 6-2.9 6.8-6.8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M17.6 16.2c.3 1.4 1.1 2.2 2.4 2.5-1.3.3-2.1 1.1-2.4 2.5-.3-1.4-1.1-2.2-2.4-2.5 1.3-.3 2.1-1.1 2.4-2.5Z" fill="currentColor" opacity=".8" />
    </IconShell>
  );
}

function CodeBracesIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="m9 7-4 5 4 5M15 7l4 5-4 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m13 5-2 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity=".8" />
    </IconShell>
  );
}

function GeminiIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M12 3.5c.8 4.4 3.1 6.7 7.5 7.5-4.4.8-6.7 3.1-7.5 7.5-.8-4.4-3.1-6.7-7.5-7.5 4.4-.8 6.7-3.1 7.5-7.5Z" fill="currentColor" />
    </IconShell>
  );
}

function QwenIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <circle cx="12" cy="11.5" r="7.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="m15.8 16 3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9.8 12.2c.2 1.5 1.1 2.5 2.5 2.5 1.6 0 2.7-1.2 2.7-3.1s-1.1-3.1-2.7-3.1-2.7 1.2-2.7 3.1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </IconShell>
  );
}

function DocumentIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M7 3.5h7l3 3V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M14 3.5v4h4M9 11h6M9 14h6M9 17h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </IconShell>
  );
}

function ArchitectureIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M12 4 19 8l-7 4-7-4 7-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m5 12 7 4 7-4M5 16l7 4 7-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </IconShell>
  );
}

function TestIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M9 4h6M10 4v5.2l-4.6 8A2.5 2.5 0 0 0 7.6 21h8.8a2.5 2.5 0 0 0 2.2-3.8l-4.6-8V4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m9.4 16 1.8 1.8 3.8-4.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </IconShell>
  );
}

function OrchestratorIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <circle cx="12" cy="12" r="2.4" fill="currentColor" />
      <circle cx="6.5" cy="6.5" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="6.5" cy="17.5" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="17.5" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 8 10.4 10.4M16 8l-2.4 2.4M8 16l2.4-2.4M16 16l-2.4-2.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </IconShell>
  );
}
