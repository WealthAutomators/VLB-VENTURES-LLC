import { Category } from "@/types";
import { products } from "@/data/products";

function countFor(slug: string) {
  return products.filter((p) => p.categorySlug === slug).length;
}

export const categories: Category[] = [
  {
    id: "1",
    slug: "electronics",
    name: "Electronics",
    image: "/categories/electronics.jpg",
    description: "Smart gadgets, audio gear, and everyday tech essentials.",
    productCount: countFor("electronics"),
  },
  {
    id: "2",
    slug: "home-kitchen",
    name: "Home & Kitchen",
    image: "/categories/home-kitchen.jpg",
    description: "Appliances, décor, and tools for modern kitchens and living spaces.",
    productCount: countFor("home-kitchen"),
  },
  {
    id: "3",
    slug: "bathroom",
    name: "Bathroom",
    image: "/categories/bathroom.jpg",
    description: "Towels, mats, and bathroom essentials.",
    productCount: countFor("bathroom"),
  },
  {
    id: "4",
    slug: "educational-toys",
    name: "Educational Toys",
    image: "/categories/educational-toys.jpg",
    description: "Learning tools that make education fun.",
    productCount: countFor("educational-toys"),
  },
  {
    id: "5",
    slug: "pet-supplies",
    name: "Pet",
    image: "/categories/pet-supplies.jpg",
    description: "Comfort and care products for your pets.",
    productCount: countFor("pet-supplies"),
  },
  {
    id: "6",
    slug: "beauty",
    name: "Beauty",
    image: "/categories/beauty.jpg",
    description: "Skincare, hair care, and personal care favorites.",
    productCount: countFor("beauty"),
  },
  {
    id: "7",
    slug: "sports-outdoors",
    name: "Sports",
    image: "/categories/sports-outdoors.jpg",
    description: "Gear for fitness, yoga, and outdoor activities.",
    productCount: countFor("sports-outdoors"),
  },
  {
    id: "8",
    slug: "office-supplies",
    name: "Office",
    image: "/categories/office-supplies.jpg",
    description: "Desk accessories and workspace essentials.",
    productCount: countFor("office-supplies"),
  },
  {
    id: "9",
    slug: "fashion-accessories",
    name: "Fashion",
    image: "/categories/fashion-accessories.jpg",
    description: "Accessories to complete your everyday look.",
    productCount: countFor("fashion-accessories"),
  },
  {
    id: "10",
    slug: "baby-products",
    name: "Baby",
    image: "/categories/baby-products.jpg",
    description: "Safe, thoughtful products for little ones.",
    productCount: countFor("baby-products"),
  },
  {
    id: "11",
    slug: "toys-games",
    name: "Toys & Games",
    image: "/categories/toys-games.jpg",
    description: "Fun for kids and families of all ages.",
    productCount: countFor("toys-games"),
  },
  {
    id: "12",
    slug: "health-wellness",
    name: "Health",
    image: "/categories/health-wellness.jpg",
    description: "Products to support your wellness routine.",
    productCount: countFor("health-wellness"),
  },
  {
    id: "13",
    slug: "gaming",
    name: "Gaming",
    image: "/categories/gaming.jpg",
    description: "Headsets, peripherals, and accessories for every gamer.",
    productCount: countFor("gaming"),
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
