import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { LanguageProvider } from "@/components/language/language-provider";
import { SkillsSection } from "@/components/sections/skills-section";
import { aiStack, landingContent } from "@/content/landing";

const cvTechnologies = [
  "Python", "JavaScript", "TypeScript", "PHP", "Java", "SQL", "Node.js",
  "Angular", "React", "React Native", "Next.js", "Vue.js", "Astro", "HTML5", "CSS3", "jQuery",
  "FastAPI", "Flask", "Laravel", "JSP", "JSF", "PrimeFaces", "Thymeleaf", "Spring Boot",
  "JDBC Template", "JPA", "Kafka", "PostgreSQL", "Oracle", "MySQL", "MariaDB", "MongoDB",
  "Redis", "Supabase", "Docker", "Nginx", "Git", "Linux", "Portainer", "Jenkins Pipelines",
  "VPS", "Azure AI", "Azure Foundry", "AWS", "Google Cloud Platform (GCP)", "Vercel",
];
const cvAiTools = ["ChatGPT", "OpenAI API", "Claude", "Gemini", "OpenRouter", "DeepSeek", "Ollama", "Qwen", "GitHub Copilot", "GBM"];
afterEach(() => { cleanup(); localStorage.clear(); });

describe("linked CV skills", () => {
  it.each(["es", "en"] as const)("covers CV technologies and keeps existing extras in %s", (language) => {
    const names = landingContent[language].skillGroups.flatMap((group) => [...group.tags]);
    for (const name of cvTechnologies) expect(names).toContain(name);
    for (const name of ["PrimeNG", "TailwindCSS", "SCSS", "Bootstrap", "Django", "SQLite", "GitHub Actions"]) expect(names).toContain(name);
    expect(new Set(names).size).toBe(names.length);
  });
  it("includes named AI platforms without losing existing data tooling", () => {
    for (const name of [...cvAiTools, "Pandas"]) expect(aiStack).toContain(name);
  });
  it.each(["es", "en"] as const)("includes CV architectures and workflows in %s", (language) => {
    const tags = landingContent[language].skillGroups.flatMap((group) => [...group.tags]);
    for (const name of ["SDD", "PRD", "TDD", "SOLID", "Clean Code"]) expect(tags).toContain(name);
    const expected = language === "es"
      ? ["Arquitectura en capas", "Arquitectura hexagonal", "Monolitos", "Microservicios", "POO", "Web scraping", "Georreferenciación", "Optimización de consultas", "Testing E2E", "Orquestación multi-modelo", "Agentes de IA", "Prompting avanzado"]
      : ["Layered architecture", "Hexagonal architecture", "Monoliths", "Microservices", "OOP", "Web scraping", "Georeferencing", "Query optimization", "E2E testing", "Multi-model orchestration", "AI agents", "Advanced prompting"];
    for (const name of expected) expect(tags).toContain(name);
  });
  it("renders categorized badges and cloud platforms without changing existing section semantics", () => {
    render(<LanguageProvider><SkillsSection /></LanguageProvider>);
    const section = screen.getByRole("region", { name: /Stack técnico/i });
    expect(within(section).getAllByRole("article")).toHaveLength(8);
    for (const name of ["AWS", "Google Cloud Platform (GCP)", "Azure Foundry", "React Native", "Kafka", "SDD", "Ollama"]) expect(within(section).getByText(name)).toBeInTheDocument();
  });
});
