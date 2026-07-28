"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { categories } from "@/data/categories";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const homepageCategorySlugs = [
  "electronics",
  "home-kitchen",
  "bathroom",
  "beauty",
  "gaming",
  "sports-outdoors",
  "office-supplies",
  "fashion-accessories",
  "baby-products",
  "pet-supplies",
  "health-wellness",
  "toys-games",
];

export function CategoryCarousel() {
  const homepageCategories = categories.filter((c) =>
    homepageCategorySlugs.includes(c.slug)
  );

  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          title="Shop By Category"
          subtitle="Browse floating glass collections across tech, home, wellness, and lifestyle."
          centered
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homepageCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
            >
              <Link
                href={`/categories/${category.slug}`}
                className="group relative block aspect-[4/3] overflow-hidden rounded-3xl"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/10 to-transparent" />
                <div className="absolute inset-x-3 bottom-3">
                  <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-3">
                    <div className="min-w-0">
                      <h3 className="font-display truncate text-base font-semibold tracking-tight text-foreground">
                        {category.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {category.productCount} products
                      </p>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:bg-secondary">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
