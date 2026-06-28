import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { TimelineScroller } from "@/components/sections/timeline-scroller";

const timelineItems = [
  {
    period: "2020 — 2021",
    role: "Frontend Developer — First Company",
    description: [
      "First point",
      "First second point",
      "First third point",
      "First hidden point",
    ],
  },
  {
    period: "2022 — Present",
    role: "Senior Frontend Developer — Final Company",
    description: ["Final point", "Final second point", "Final third point"],
  },
] as const;

const labels = {
  eyebrow: "Experience",
  titlePrefix: "Professional",
  titleHighlight: "Timeline",
  description: "A chronological summary of professional experience.",
  morePoints: "+{count} more points",
  showMore: "Show more",
  showLess: "Show less",
  showMoreAbout: "Show more about {company}",
  showLessAbout: "Show less about {company}",
  summaryLabel: "Role summary",
} as const;

function renderTimeline() {
  return render(<TimelineScroller items={timelineItems} labels={labels} />);
}

describe("TimelineScroller", () => {
  it("renders all timeline items in normal document flow", () => {
    const { container } = renderTimeline();

    expect(
      screen.getByRole("heading", { name: "Professional Timeline" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Frontend Developer")).toBeInTheDocument();
    expect(screen.getByText("First Company")).toBeInTheDocument();
    expect(screen.getByText("Senior Frontend Developer")).toBeInTheDocument();
    expect(screen.getByText("Final Company")).toBeInTheDocument();
    expect(container.querySelectorAll("article")).toHaveLength(2);
  });

  it("renders a visible vertical axis and a milestone marker for each item", () => {
    const { container } = renderTimeline();

    expect(screen.getByTestId("timeline-axis")).toBeInTheDocument();
    expect(screen.getAllByTestId("timeline-marker")).toHaveLength(timelineItems.length);
    expect(screen.getAllByText("01")).toHaveLength(1);
    expect(screen.getAllByText("02")).toHaveLength(1);

    const cards = container.querySelectorAll("article");

    cards.forEach((card, index) => {
      expect(card).toHaveAttribute("aria-describedby", `timeline-marker-${index}`);
      expect(card).toHaveClass("scroll-mt-28");
    });
  });

  it("expands and collapses long timeline details without scroll state", async () => {
    const user = userEvent.setup();

    renderTimeline();

    expect(screen.queryByText("First hidden point")).not.toBeInTheDocument();
    expect(screen.getByText("+1 more points")).toBeInTheDocument();

    const toggle = screen.getByRole("button", {
      name: "Show more about First Company",
    });

    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await user.click(toggle);

    expect(screen.getByText("First hidden point")).toBeInTheDocument();
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(toggle).toHaveAccessibleName("Show less about First Company");

    await user.click(toggle);

    expect(screen.queryByText("First hidden point")).not.toBeInTheDocument();
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("applies localized labels and accessible controls", () => {
    renderTimeline();

    expect(screen.getByText(labels.eyebrow)).toBeInTheDocument();
    expect(screen.getAllByText(labels.summaryLabel)).toHaveLength(2);
    expect(screen.getByText("2020 — 2021")).toBeInTheDocument();
    expect(screen.getByText("2022 — Present")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Show more about First Company" }),
    ).toHaveAttribute("aria-controls", "timeline-details-0");
  });

  it("does not render the removed timeline wrapper or metadata mini-cards", () => {
    const { container } = renderTimeline();
    const renderedMarkup = container.innerHTML;

    expect(renderedMarkup).not.toContain("backdrop-blur-2xl");
    expect(renderedMarkup).not.toContain("rounded-[2rem]");
    expect(screen.queryByText("Start")).not.toBeInTheDocument();
    expect(screen.queryByText("End")).not.toBeInTheDocument();
    expect(screen.queryByText("Present")).not.toBeInTheDocument();
  });

  it("does not reintroduce sticky or artificial scroll timeline behavior", () => {
    const { container } = renderTimeline();
    const renderedMarkup = container.innerHTML;

    expect(container.querySelector(".sticky")).not.toBeInTheDocument();
    expect(container.querySelector('[style*="--timeline-steps"]')).not.toBeInTheDocument();
    expect(renderedMarkup).not.toContain("min-h-screen");
    expect(renderedMarkup).not.toContain("h-screen");
    expect(renderedMarkup).not.toContain("requestAnimationFrame");
  });
});
