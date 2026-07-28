import { NavLink } from "@/types";

export const leftNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/categories" },
  { label: "New Arrivals", href: "/new-arrivals" },
];

export const rightNavLinks: NavLink[] = [
  { label: "Brands", href: "/shop?sort=featured" },
  { label: "Journal", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Combined links for mobile menu and any legacy consumers */
export const navigationLinks: NavLink[] = [...leftNavLinks, ...rightNavLinks];

export const announcementText = "";

export const utilityBarLinks: { label: string; href: string }[] = [];

export const footerLinks = {
  products: [
    { label: "Shop All", href: "/shop" },
    { label: "Collections", href: "/categories" },
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Best Sellers", href: "/best-sellers" },
    { label: "Electronics", href: "/categories/electronics" },
    { label: "Home & Kitchen", href: "/categories/home-kitchen" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
  support: [
    { label: "FAQs", href: "/faq" },
    { label: "Shipping", href: "/shipping" },
    { label: "Returns", href: "/returns" },
    { label: "Refund Policy", href: "/refund" },
    { label: "Track Order", href: "/track-order" },
  ],
  contact: [
    { label: "Contact Us", href: "/contact" },
    { label: "About Us", href: "/about" },
  ],
  /** Kept for backwards compatibility */
  shop: [
    { label: "Shop All", href: "/shop" },
    { label: "Collections", href: "/categories" },
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Best Sellers", href: "/best-sellers" },
    { label: "Electronics", href: "/categories/electronics" },
    { label: "Home & Kitchen", href: "/categories/home-kitchen" },
  ],
  marketplace: [
    { label: "Shop All", href: "/shop" },
    { label: "Collections", href: "/categories" },
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Best Sellers", href: "/best-sellers" },
  ],
  customerService: [
    { label: "FAQs", href: "/faq" },
    { label: "Shipping", href: "/shipping" },
    { label: "Returns", href: "/returns" },
    { label: "Track Order", href: "/track-order" },
  ],
  policies: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
    { label: "About Us", href: "/about" },
  ],
};

export const paymentMethods = [
  { name: "Visa", icon: "/payments/visa.svg" },
  { name: "Mastercard", icon: "/payments/mastercard.svg" },
  { name: "Amex", icon: "/payments/amex.svg" },
  { name: "PayPal", icon: "/payments/paypal.svg" },
  { name: "Apple Pay", icon: "/payments/apple-pay.svg" },
];
