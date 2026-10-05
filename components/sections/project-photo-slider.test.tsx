import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { ProjectPhotoSlider } from "@/components/sections/project-photo-slider";

const SLIDE_INTERVAL_MS = 4000;
const gallery = ["/one.png", "/two.png", "/three.png"] as const;
let reducedMotion = false;
let visibilityState: DocumentVisibilityState = "visible";

vi.mock("@/components/language/language-provider", () => ({
  useLanguage: () => ({
    content: {
      projectActions: {
        previousProjectImage: "Previous image of {project}",
        nextProjectImage: "Next image of {project}",
        viewProjectImage: "View image {index} of {project}",
        imageSetLabel: "Image {index} of {total} of {project}",
      },
    },
  }),
}));

vi.mock("next/image", () => ({
  default: ({ alt, src, className }: { alt: string; src: string; className?: string }) =>
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} src={src} className={className} />,
}));

class MockIntersectionObserver implements IntersectionObserver {
  static instances: MockIntersectionObserver[] = [];
  readonly root = null;
  readonly rootMargin = "0px";
  readonly scrollMargin = "0px";
  readonly thresholds = [0.1];
  readonly disconnect = vi.fn();
  readonly observe = vi.fn();
  readonly takeRecords = vi.fn(() => []);
  readonly unobserve = vi.fn();

  constructor(private readonly callback: IntersectionObserverCallback) {
    MockIntersectionObserver.instances.push(this);
  }

  setIntersecting(isIntersecting: boolean) {
    this.callback([{ isIntersecting } as IntersectionObserverEntry], this);
  }
}

function renderSlider() {
  return render(
    <ProjectPhotoSlider gallery={gallery} alt="Project preview" title="Example" />,
  );
}

function currentImageSource() {
  return screen.getByRole("img", { name: "Project preview" }).getAttribute("src");
}

describe("ProjectPhotoSlider", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    reducedMotion = false;
    visibilityState = "visible";
    MockIntersectionObserver.instances = [];
    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
    vi.stubGlobal("matchMedia", vi.fn(() => ({
      matches: reducedMotion,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
    })));
    Object.defineProperty(document, "visibilityState", {
      configurable: true,
      get: () => visibilityState,
    });
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it("preserves screenshot colors and confines dark contrast to navigation controls", () => {
    renderSlider();
    const slider = screen.getByTestId("project-photo-slider");
    expect(screen.getByRole("img", { name: "Project preview" })).not.toHaveClass("opacity-90");
    expect(slider.querySelector(".bg-gradient-to-t")).toBeNull();
    expect(screen.getByLabelText("Image 1 of 3 of Example")).toHaveClass("bg-background/70", "rounded-full");
  });

  it("autoplays only while intersecting, visible, and not interacting", () => {
    renderSlider();
    const slider = screen.getByTestId("project-photo-slider");
    const observer = MockIntersectionObserver.instances[0];

    act(() => vi.advanceTimersByTime(SLIDE_INTERVAL_MS));
    expect(currentImageSource()).toBe("/one.png");

    act(() => observer.setIntersecting(true));
    act(() => vi.advanceTimersByTime(SLIDE_INTERVAL_MS));
    expect(currentImageSource()).toBe("/two.png");

    fireEvent.mouseEnter(slider);
    act(() => vi.advanceTimersByTime(SLIDE_INTERVAL_MS));
    expect(currentImageSource()).toBe("/two.png");

    fireEvent.mouseLeave(slider);
    act(() => vi.advanceTimersByTime(SLIDE_INTERVAL_MS));
    expect(currentImageSource()).toBe("/three.png");

    visibilityState = "hidden";
    act(() => document.dispatchEvent(new Event("visibilitychange")));
    act(() => vi.advanceTimersByTime(SLIDE_INTERVAL_MS));
    expect(currentImageSource()).toBe("/three.png");
  });

  it("does not autoplay when reduced motion is requested", () => {
    reducedMotion = true;
    renderSlider();

    act(() => MockIntersectionObserver.instances[0].setIntersecting(true));
    act(() => vi.advanceTimersByTime(SLIDE_INTERVAL_MS * 2));

    expect(currentImageSource()).toBe("/one.png");
  });

  it("preserves manual controls and pauses while focus remains inside", () => {
    renderSlider();

    fireEvent.click(screen.getByRole("button", { name: "Next image of Example" }));
    expect(currentImageSource()).toBe("/two.png");

    fireEvent.click(screen.getByRole("button", { name: "Previous image of Example" }));
    expect(currentImageSource()).toBe("/one.png");

    fireEvent.click(screen.getByRole("button", { name: "View image 3 of Example" }));
    expect(currentImageSource()).toBe("/three.png");

    act(() => MockIntersectionObserver.instances[0].setIntersecting(true));
    fireEvent.focus(screen.getByRole("button", { name: "Next image of Example" }));
    act(() => vi.advanceTimersByTime(SLIDE_INTERVAL_MS));
    expect(currentImageSource()).toBe("/three.png");
  });
});
