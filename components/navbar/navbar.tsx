"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Menu, ShoppingBag, User, X } from "lucide-react";
import { company } from "@/data/company";
import { navigationLinks } from "@/data/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { HeaderSearchBar } from "@/components/navbar/header-search-bar";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount } = useCart();
  const { wishlist } = useWishlist();

  return (
    <header className="bg-white">
      <Container>
        <div className="flex h-16 items-center gap-4 lg:h-[72px] lg:gap-6">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/logo/logo.svg"
              alt={company.name}
              width={240}
              height={44}
              priority
              className="h-9 w-auto sm:h-10 lg:h-11"
            />
          </Link>

          <div className="relative hidden flex-1 lg:block">
            <HeaderSearchBar />
          </div>

          <div className="ml-auto flex items-center gap-0.5 sm:gap-1">
            <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex relative h-9 w-9">
              <Link href="/wishlist" aria-label="Wishlist">
                <Heart className="h-[18px] w-[18px]" />
                {wishlist.length > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
                    {wishlist.length}
                  </span>
                )}
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex h-9 w-9">
              <Link href="/profile" aria-label="Account">
                <User className="h-[18px] w-[18px]" />
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild className="relative h-9 w-9">
              <Link href="/cart" aria-label="Cart">
                <ShoppingBag className="h-[18px] w-[18px]" />
                {itemCount > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                    {itemCount}
                  </span>
                )}
              </Link>
            </Button>

            <Button variant="ghost" size="icon" className="h-9 w-9 lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
            </Button>
          </div>
        </div>

        <div className="relative pb-3 lg:hidden">
          <HeaderSearchBar />
        </div>
      </Container>

      {mobileOpen && (
        <div className="border-t border-border bg-white lg:hidden">
          <Container className="py-3">
            <ul className="space-y-0.5">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li data-mobile-extra className="mt-2 flex gap-2 border-t border-border pt-3 sm:hidden">
                <Link href="/wishlist" onClick={() => setMobileOpen(false)} className="flex-1 rounded-md border border-border px-3 py-2 text-center text-sm font-medium hover:bg-muted">Wishlist</Link>
                <Link href="/profile" onClick={() => setMobileOpen(false)} className="flex-1 rounded-md border border-border px-3 py-2 text-center text-sm font-medium hover:bg-muted">Account</Link>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
