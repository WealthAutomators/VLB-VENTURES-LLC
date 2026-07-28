import {
  Feature,
  HeroSlide,
  PromoBanner,
} from "@/types";

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    image: "/hero/hero-1.jpg",
    headline: "Designed For Modern Living.",
    description:
      "Discover thoughtfully selected products that combine innovation, quality and timeless style.",
    ctaText: "Explore Collection",
    ctaLink: "/shop",
    secondaryCtaText: "Shop Best Sellers",
    secondaryCtaLink: "/best-sellers",
  },
];

export const features: Feature[] = [
  {
    id: "1",
    icon: "truck",
    title: "Fast Delivery",
    description: "Free shipping on orders over $75. Most orders arrive in 3–5 business days.",
  },
  {
    id: "2",
    icon: "star",
    title: "Premium Products",
    description: "Every product is carefully selected for design, performance, and lasting value.",
  },
  {
    id: "3",
    icon: "shield",
    title: "Secure Checkout",
    description: "Your payment details are protected with industry-standard encryption.",
  },
  {
    id: "4",
    icon: "rotate",
    title: "Easy Returns",
    description: "Hassle-free 30-day returns on most items. We make it simple.",
  },
];

export const featuredCollections = [
  {
    id: "1",
    title: "Modern Home",
    subtitle: "Refined pieces for elevated interiors",
    href: "/categories/home-kitchen",
    image: "/categories/home-kitchen.jpg",
  },
  {
    id: "2",
    title: "Workspace Essentials",
    subtitle: "Tools that sharpen focus and flow",
    href: "/categories/office-supplies",
    image: "/categories/office-supplies.jpg",
  },
  {
    id: "3",
    title: "Tech Favorites",
    subtitle: "Smart devices with lasting design",
    href: "/categories/electronics",
    image: "/categories/electronics.jpg",
  },
  {
    id: "4",
    title: "Outdoor Living",
    subtitle: "Gear for weekends beyond the walls",
    href: "/categories/sports-outdoors",
    image: "/categories/sports-outdoors.jpg",
  },
];

export const lifestyleCards = [
  {
    id: "1",
    title: "Work From Home",
    href: "/categories/office-supplies",
    image: "/banners/lifestyle-wfh.jpg",
  },
  {
    id: "2",
    title: "Smart Living",
    href: "/categories/electronics",
    image: "/banners/lifestyle-smart.jpg",
  },
  {
    id: "3",
    title: "Healthy Living",
    href: "/categories/health-wellness",
    image: "/banners/lifestyle-health.jpg",
  },
  {
    id: "4",
    title: "Travel Essentials",
    href: "/categories/fashion-accessories",
    image: "/banners/lifestyle-travel.jpg",
  },
  {
    id: "5",
    title: "Outdoor Escape",
    href: "/categories/sports-outdoors",
    image: "/banners/lifestyle-outdoor.jpg",
  },
];

export const floatingPromos = [
  {
    id: "1",
    title: "Weekend Deals",
    subtitle: "Limited-time savings on bestsellers and new drops.",
    href: "/shop?sort=sale",
    image: "/banners/promo-weekend.jpg",
    cta: "Shop Deals",
  },
  {
    id: "2",
    title: "Editor's Picks",
    subtitle: "Curated favorites chosen for quality and design.",
    href: "/shop?sort=featured",
    image: "/banners/promo-editors.jpg",
    cta: "View Picks",
  },
  {
    id: "3",
    title: "Trending Now",
    subtitle: "What shoppers are loving this season.",
    href: "/best-sellers",
    image: "/banners/promo-trending.jpg",
    cta: "See Trends",
  },
];

export const editorialBanner = {
  title: "Where Style Meets Function.",
  description:
    "VLB Ventures curates products that balance quality, thoughtful design, and everyday practicality — so modern living feels effortless.",
  ctaText: "Learn More",
  ctaLink: "/about",
  image: "/banners/lifestyle.jpg",
};

export const dealsEndTime = new Date(Date.now() + 1000 * 60 * 60 * 18).toISOString();

export const homepageDealsSlugs = [
  "wireless-earbuds",
  "gooseneck-pour-over-kettle",
  "robot-vacuum-mini",
  "air-fryer",
  "gaming-headset",
  "cashmere-throw-blanket",
] as const;

export const homepageTrendingSlugs = [
  "sculptural-table-lamp",
  "wireless-charging-desk-pad",
  "brass-architect-desk-lamp",
  "ceramic-dinnerware-set",
  "leather-crossbody-bag",
  "insulated-travel-tumbler",
  "outdoor-picnic-hamper",
  "soft-shell-performance-jacket",
] as const;

export const homepageBestsellerSlugs = [
  "wireless-earbuds",
  "electric-kettle",
  "yoga-mat",
  "aluminum-laptop-stand",
  "gaming-headset",
  "bath-towel-set",
  "dog-bed",
  "bluetooth-speaker",
] as const;

export const homepageFeaturedSlugs = [
  "sculptural-table-lamp",
  "walnut-serving-board",
  "marble-soap-dispenser-set",
  "wireless-charging-desk-pad",
  "ceramic-dinnerware-set",
  "leather-crossbody-bag",
  "brass-architect-desk-lamp",
  "cashmere-throw-blanket",
  "outdoor-picnic-hamper",
  "insulated-travel-tumbler",
] as const;

export const homepageNewArrivalSlugs = [
  "sculptural-table-lamp",
  "cashmere-throw-blanket",
  "wireless-charging-desk-pad",
  "marble-soap-dispenser-set",
  "gooseneck-pour-over-kettle",
  "walnut-serving-board",
  "ceramic-dinnerware-set",
  "leather-crossbody-bag",
] as const;

export const promotionalBanner: PromoBanner = {
  id: "1",
  title: "Premium Without Friction",
  description:
    "Thoughtful design. Premium materials. Products chosen to elevate everyday living.",
  buttonText: "Browse Products",
  buttonLink: "/shop",
  image: "/banners/featured.jpg",
};

export const featuredCollection = {
  title: "Featured Products",
  description:
    "Hand-selected pieces across electronics, home, beauty, and more — curated for modern living.",
  bannerImage: "/banners/featured.jpg",
  categorySlug: "electronics",
};

export const bestSellerTabs = [
  { label: "All", slug: "all" },
  { label: "Electronics", slug: "electronics" },
  { label: "Home", slug: "home-kitchen" },
  { label: "Beauty", slug: "beauty" },
  { label: "Sports", slug: "sports-outdoors" },
];

export const newsletter = {
  title: "Stay Inspired.",
  description:
    "Subscribe to receive new collections, exclusive offers and curated recommendations.",
  placeholder: "Enter your email address",
  buttonText: "Subscribe",
};

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

export const aboutSection = {
  title: "Where Style Meets Function.",
  description:
    "VLB Ventures is a marketplace focused on quality, thoughtful curation, and everyday practicality. We bring together refined products that elevate how you live, work, and unwind — without compromising on design or durability.",
  checklist: [
    "Curated for quality over quantity",
    "Design that earns its place in daily life",
    "Practical performance with lasting style",
    "A shopping experience built for modern living",
  ],
  buttonText: "Learn More",
  buttonLink: "/about",
  image: "/banners/about.jpg",
};
