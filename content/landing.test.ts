import { existsSync, readdirSync } from "node:fs";
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
    "keeps the %s project with the approved public assets and demo",
    (language) => {
      const project = landingContent[language].projects.find(
        (candidate) => candidate.title === "KOA Verify",
      );

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

const paymentGalleryAssets = [
  "/projects/product-payment/catalog.jpg",
  "/projects/product-payment/product-detail.jpg",
  "/projects/product-payment/checkout.jpg",
  "/projects/product-payment/payment-pending.png",
  "/projects/product-payment/payment-approved.png",
];

describe("Product Payment portfolio content", () => {
  it.each(["es", "en"] as const)(
    "shows the %s project with its authentic gallery, demo and verified stack",
    (language) => {
      const projects = landingContent[language].projects;
      const project = projects.find(
        (candidate) => candidate.title === "Product Payment - ShopiFast",
      );

      expect(project).toMatchObject({
        title: "Product Payment - ShopiFast",
        image: paymentGalleryAssets[0],
        gallery: paymentGalleryAssets,
        demoHref: "https://d12hv8vhtndguc.cloudfront.net/",
        primaryAction: "Demo",
        tags: [
          "React", "TypeScript", "Vite", "Redux Toolkit", "NestJS",
          "TypeORM", "PostgreSQL", "Docker", "Jest", "AWS S3",
          "AWS CloudFront", "AWS ECS Fargate", "AWS RDS", "GitHub Actions",
        ],
      });
      expect(project?.description).toMatch(/checkout/i);
      expect(project?.description).toMatch(/JWE/);
      expect(project?.description).toMatch(/AWS/);
      expect(projects.map((candidate) => candidate.title)).toEqual([
        "Colombia Monitor", "EduNotas", "KOA Verify", "DuoLuxe Essence",
        "Optic-AI", "Product Payment - ShopiFast", "MyKondo",
      ]);
    },
  );

  it("ships every referenced screenshot as a local public asset", () => {
    for (const asset of paymentGalleryAssets) {
      expect(existsSync(join(process.cwd(), "public", asset))).toBe(true);
    }
  });
});
