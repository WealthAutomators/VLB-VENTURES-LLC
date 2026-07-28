"use client";

import { useState } from "react";
import { bestSellerTabs, homepageBestsellerSlugs } from "@/data/homepage";
import { getBestsellerProducts, getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/product/product-card";
import { cn } from "@/lib/utils";

export function BestSellers() {
  const [activeTab, setActiveTab] = useState("all");
  const curatedBestsellers = getProductsBySlugs(homepageBestsellerSlugs);
  const bestsellers = getBestsellerProducts();

  const filtered =
    activeTab === "all"
      ? curatedBestsellers
      : bestsellers.filter((p) => p.categorySlug === activeTab).slice(0, 4);

  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading title="Best Sellers" viewMoreLink="/best-sellers" />

        <div className="mb-10 flex flex-wrap gap-2">
          {bestSellerTabs.map((tab) => (
            <button
              key={tab.slug}
              onClick={() => setActiveTab(tab.slug)}
              className={cn(
                "rounded-lg px-5 py-2 text-sm font-medium transition-colors",
                activeTab === tab.slug
                  ? "bg-primary text-white"
                  : "border border-border bg-white text-foreground hover:bg-primary hover:text-white"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
