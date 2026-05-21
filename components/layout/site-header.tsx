import { ActiveNavLinks } from "@/components/layout/active-nav-links";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { ButtonLink } from "@/components/ui/button-link";
import { FileTextIcon } from "@/components/ui/icons";
import { externalLinks } from "@/content/landing";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-surface/35 backdrop-blur-2xl">
      <nav
        aria-label="Navegación principal"
        className="page-container grid h-20 grid-cols-1 items-center justify-items-center lg:grid-cols-[1fr_auto_1fr] lg:gap-6"
      >
        <div className="hidden lg:block" aria-hidden="true" />

        <ActiveNavLinks />

        <div className="justify-self-center lg:justify-self-end">
          <ButtonLink
            href={externalLinks.cv}
            target="_blank"
            ariaLabel="Abrir CV de Alexander Beleño en una nueva pestaña"
            className="attention-cta gap-2 rounded-full px-5"
          >
            <FileTextIcon className="h-4 w-4" />
            CV
          </ButtonLink>
        </div>
      </nav>
      <ScrollProgress />
    </header>
  );
}
