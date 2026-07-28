import { RotateCcw, Shield, Star, Truck } from "lucide-react";
import { features } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const iconMap = {
  truck: Truck,
  shield: Shield,
  rotate: RotateCcw,
  star: Star,
};

export function FeaturesRow() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          title="Why Shop VLB"
          subtitle="A marketplace built for speed, security, and premium everyday products."
          centered
        />
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] || Truck;
            return (
              <div
                key={feature.id}
                className="rounded-xl border border-border bg-card p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-base font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
