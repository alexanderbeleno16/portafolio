"use client";

import Link from "next/link";

import { useLanguage } from "@/components/language/language-provider";
import { FileTextIcon, GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { externalLinks } from "@/content/landing";

export function SiteFooter() {
  const { content } = useLanguage();
  const footerLinks = [
    { icon: GitHubIcon, label: "GitHub", href: externalLinks.github },
    { icon: LinkedInIcon, label: "LinkedIn", href: externalLinks.linkedin },
    { icon: FileTextIcon, label: content.footer.cvLabel, href: externalLinks.cv },
  ];

  return (
    <footer className="border-t border-white/[0.06] bg-surface py-16">
      <div className="page-container flex flex-col items-center justify-between gap-10 md:flex-row">
        <div className="text-center md:text-left">
          <p className="max-w-xs text-sm leading-6 text-on-surface-variant">
            {content.footer.description}
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 md:items-end">
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => {
              const Icon = link.icon;

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
            {content.footer.madeBy}
          </p>
        </div>
      </div>
    </footer>
  );
}
