"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { lifestyleCards } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ShopByLifestyle() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          title="Shop By Lifestyle"
          subtitle="Find products shaped around how you live."
          centered
        />
        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {lifestyleCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <Link href={card.href} className="group relative block overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                  <h3 className="font-display text-base font-semibold tracking-tight text-white md:text-lg">
                    {card.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
