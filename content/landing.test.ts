import { readdirSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { landingContent } from "@/content/landing";

const koaGalleryAssets = [
  "/projects/reto-koa/cap1.png",
  "/projects/reto-koa/cap2.png",
  "/projects/reto-koa/cap3.png",
  "/projects/reto-koa/cap4.png",
  "/projects/reto-koa/cap5.png",
];

describe("KOA Verify portfolio content", () => {
  it("exposes the complete public project asset set", () => {
    const publicAssets = readdirSync(
      join(process.cwd(), "public", "projects", "reto-koa"),
      { withFileTypes: true },
    )
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .sort();
    const expectedAssets = koaGalleryAssets
      .map((asset) => asset.slice(asset.lastIndexOf("/") + 1))
      .sort();

    expect(publicAssets).toEqual(expectedAssets);
  });

  it.each(["es", "en"] as const)(
    "keeps the %s project first with the approved public assets and demo",
    (language) => {
      const project = landingContent[language].projects[0];

      expect(project).toMatchObject({
        title: "KOA Verify",
        image: koaGalleryAssets[0],
        gallery: koaGalleryAssets,
        tags: [
          "Angular",
          "TypeScript",
          "FastAPI",
          "OpenCV",
          "CompreFace",
          "Docker",
        ],
        primaryAction: "Demo",
        demoHref: "https://retokoaverify.online/",
      });
    },
  );
});
