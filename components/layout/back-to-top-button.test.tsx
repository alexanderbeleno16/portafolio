import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { LanguageProvider } from "@/components/language/language-provider";
import { BackToTopButton } from "@/components/layout/back-to-top-button";

describe("BackToTopButton", () => {
  it("declares vertical placement and reduced-motion safeguards", () => {
    const { container } = render(
      <LanguageProvider>
        <BackToTopButton />
      </LanguageProvider>,
    );

    const link = container.querySelector('a[href="#inicio"]');

    expect(link).toHaveClass("right-4", "sm:right-6");
    expect(link).toHaveClass(
      "bottom-[calc(max(1rem,env(safe-area-inset-bottom))+4.25rem)]",
      "sm:bottom-[5.75rem]",
    );
    expect(link).toHaveClass(
      "motion-reduce:transform-none",
      "motion-reduce:transition-none",
      "motion-reduce:hover:translate-y-0",
    );
    expect(link).not.toHaveClass("right-[5.5rem]", "sm:right-24");
  });
});
