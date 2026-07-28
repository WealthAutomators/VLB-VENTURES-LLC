"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { featuredCollections } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function FeaturedCollections() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          title="Featured Collections"
          subtitle="Editorial edits for home, work, tech, and the outdoors."
          centered
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {featuredCollections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <Link
                href={collection.href}
                className="group relative block overflow-hidden"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
                    {collection.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-white/75">
                    {collection.subtitle}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
