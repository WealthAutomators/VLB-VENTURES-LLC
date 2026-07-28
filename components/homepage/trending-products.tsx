"use client";

import { homepageTrendingSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Carousel } from "@/components/ui/carousel";
import { ProductCard } from "@/components/product/product-card";

export function TrendingProducts() {
  const products = getProductsBySlugs(homepageTrendingSlugs);

  return (
    <section className="section-muted py-24 md:py-32">
      <Container>
        <SectionHeading
          title="Trending Products"
          subtitle="Fresh favorites our customers are discovering now."
          viewMoreLink="/shop"
        />
        <Carousel slidesToShow={4} className="px-8">
          {products.map((product) => (
            <div key={product.id} className="px-2">
              <ProductCard product={product} />
            </div>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
