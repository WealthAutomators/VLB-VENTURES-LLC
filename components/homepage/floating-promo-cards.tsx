"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { floatingPromos } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function FloatingPromoCards() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-highlight/10 blur-3xl" />

      <Container className="relative">
        <SectionHeading
          title="Moments Worth Shopping"
          subtitle="Floating promos for weekend deals, editor's picks, and what's trending now."
          centered
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {floatingPromos.map((promo, index) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className={
                index === 0
                  ? "md:mt-0"
                  : index === 1
                    ? "md:mt-12"
                    : "md:mt-6"
              }
            >
              <Link
                href={promo.href}
                className="group block overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={promo.image}
                    alt={promo.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                    {promo.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {promo.subtitle}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3">
                    {promo.cta}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
