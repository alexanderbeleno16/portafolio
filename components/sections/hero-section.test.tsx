import { render, screen } from "@testing-library/react";
import { act } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { LanguageProvider } from "@/components/language/language-provider";
import { HeroEyebrowLoop } from "@/components/sections/hero-eyebrow-loop";
import { HeroSection } from "@/components/sections/hero-section";

const HERO_EYEBROW_INTERVAL_MS = 5900;
const eyebrowTexts = ["Build", "Measure", "Optimize"] as const;

vi.mock("next/image", () => ({
  default: ({ alt, className, src }: { alt: string; className?: string; src: string }) =>
    // Keep the mock small: these tests validate Hero visibility state, not Next image rendering.
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} className={className} src={src} />,
}));

type ObserverCallback = IntersectionObserverCallback;

class MockIntersectionObserver implements IntersectionObserver {
  static instances: MockIntersectionObserver[] = [];

  readonly root = null;
  readonly rootMargin = "0px";
  readonly scrollMargin = "0px";
  readonly thresholds = [0.01];
  readonly callback: ObserverCallback;
  readonly disconnect = vi.fn();
  readonly observe = vi.fn();
  readonly takeRecords = vi.fn(() => []);
  readonly unobserve = vi.fn();

  constructor(callback: ObserverCallback) {
    this.callback = callback;
    MockIntersectionObserver.instances.push(this);
  }

  setIntersecting(isIntersecting: boolean) {
    this.callback(
      [
        {
          isIntersecting,
        } as IntersectionObserverEntry,
      ],
      this,
    );
  }
}

function renderHero() {
  return render(
    <LanguageProvider>
      <HeroSection />
    </LanguageProvider>,
  );
}

describe("HeroSection", () => {
  beforeEach(() => {
    MockIntersectionObserver.instances = [];
    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
    window.localStorage.clear();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("renders active on the initial client render to match server markup", () => {
    renderHero();

    expect(screen.getByRole("region", { name: /Hola, soy/i })).toHaveAttribute(
      "data-hero-active",
      "true",
    );
  });

  it("toggles the Hero active state when IntersectionObserver visibility changes", () => {
    renderHero();

    const hero = screen.getByRole("region", { name: /Hola, soy/i });
    const observer = MockIntersectionObserver.instances[0];

    expect(observer?.observe).toHaveBeenCalledWith(hero);

    act(() => {
      observer?.setIntersecting(false);
    });

    expect(hero).toHaveAttribute("data-hero-active", "false");

    act(() => {
      observer?.setIntersecting(true);
    });

    expect(hero).toHaveAttribute("data-hero-active", "true");
  });

  it("disconnects the Hero visibility observer on unmount", () => {
    const { unmount } = renderHero();
    const observer = MockIntersectionObserver.instances[0];

    unmount();

    expect(observer?.disconnect).toHaveBeenCalledTimes(1);
  });
});

describe("HeroEyebrowLoop", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("advances text while active after the configured interval", () => {
    render(<HeroEyebrowLoop texts={eyebrowTexts} isActive />);

    expect(screen.getByText("Build")).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(HERO_EYEBROW_INTERVAL_MS - 1);
    });

    expect(screen.getByText("Build")).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(1);
    });

    expect(screen.getByText("Measure")).toBeInTheDocument();
  });

  it("stops advancing while inactive and resumes when active again", () => {
    const { rerender } = render(<HeroEyebrowLoop texts={eyebrowTexts} isActive />);

    act(() => {
      vi.advanceTimersByTime(HERO_EYEBROW_INTERVAL_MS);
    });

    expect(screen.getByText("Measure")).toBeInTheDocument();

    rerender(<HeroEyebrowLoop texts={eyebrowTexts} isActive={false} />);

    act(() => {
      vi.advanceTimersByTime(HERO_EYEBROW_INTERVAL_MS * 2);
    });

    expect(screen.getByText("Measure")).toBeInTheDocument();

    rerender(<HeroEyebrowLoop texts={eyebrowTexts} isActive />);

    act(() => {
      vi.advanceTimersByTime(HERO_EYEBROW_INTERVAL_MS);
    });

    expect(screen.getByText("Optimize")).toBeInTheDocument();
  });
});
