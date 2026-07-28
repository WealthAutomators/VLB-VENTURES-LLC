"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { aboutSection } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function BrandStory() {
  return (
    <section className="section-muted py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative aspect-[4/5] overflow-hidden bg-muted sm:aspect-[5/6]"
          >
            <Image
              src={aboutSection.image}
              alt={aboutSection.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="max-w-lg"
          >
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              {aboutSection.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              {aboutSection.description}
            </p>
            <Button asChild size="lg" className="mt-10">
              <Link href={aboutSection.buttonLink}>{aboutSection.buttonText}</Link>
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
