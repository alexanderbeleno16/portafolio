import Link from "next/link";

import { FileTextIcon, GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { footerLinks } from "@/content/landing";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-surface py-16">
      <div className="page-container flex flex-col items-center justify-between gap-10 md:flex-row">
        <div className="text-center md:text-left">
          <p className="max-w-xs text-sm leading-6 text-on-surface-variant">
            Ingeniería de precisión para ecosistemas digitales modernos.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 md:items-end">
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => {
              const Icon =
                link.label === "GitHub"
                  ? GitHubIcon
                  : link.label === "LinkedIn"
                    ? LinkedInIcon
                    : FileTextIcon;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-caps inline-flex items-center gap-2 text-on-surface-variant transition hover:text-tertiary"
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              );
            })}
          </div>
          <p className="text-center text-sm text-on-surface-variant/60 md:whitespace-nowrap md:text-right">
            Hecho con ❤️ por Ing. Alexander J. Beleño M., Ingeniero de sistemas
            y computación.
          </p>
        </div>
      </div>
    </footer>
  );
}
