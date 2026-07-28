import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";
import { footerLinks, paymentMethods } from "@/data/navigation";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <Container className="py-16 md:py-20">
        <div className="mb-12">
          <Image
            src="/logo/logo.svg"
            alt={company.name}
            width={240}
            height={40}
            className="h-9 w-auto"
          />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            {company.tagline}
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                {company.address.street}
                <br />
                {company.address.city}, {company.address.state} {company.address.zip}
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-primary"
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <Separator className="bg-border" />

      <Container className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">{company.copyright}</p>
        <div className="flex items-center gap-2">
          {paymentMethods.map((method) => (
            <Image
              key={method.name}
              src={method.icon}
              alt={method.name}
              width={40}
              height={28}
            />
          ))}
        </div>
      </Container>
    </footer>
  );
}
