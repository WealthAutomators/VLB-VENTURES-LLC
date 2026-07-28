"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StarRating } from "@/components/ui/star-rating";
import { Badge } from "@/components/ui/badge";

export function CustomerReviews() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          title="Customer Reviews"
          subtitle="Verified shoppers on quality, curation, and everyday confidence."
          centered
        />
        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (index % 4) * 0.05 }}
              className={`mb-5 break-inside-avoid border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-md ${
                index % 3 === 1 ? "sm:mt-8" : index % 5 === 0 ? "lg:mt-4" : ""
              }`}
            >
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src={`/reviews/review-${((Number(t.id) - 1) % 8) + 1}.jpg`}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium tracking-wide">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <StarRating rating={t.rating} showCount={false} size="sm" />
                <Badge variant="outline" className="border-accent/30 text-[10px] text-accent">
                  Verified Purchase
                </Badge>
              </div>
              <p className="text-[15px] leading-relaxed text-muted-foreground">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
