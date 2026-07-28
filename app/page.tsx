import { HeroBanner } from "@/components/homepage/hero-banner";
import { FeaturedCollections } from "@/components/homepage/featured-collections";
import { BestSellers } from "@/components/homepage/best-sellers";
import { BrandStory } from "@/components/homepage/brand-story";
import { ShopByLifestyle } from "@/components/homepage/shop-by-lifestyle";
import { TrendingProducts } from "@/components/homepage/trending-products";
import { CustomerReviews } from "@/components/homepage/customer-reviews";
import { Newsletter } from "@/components/homepage/newsletter";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <FeaturedCollections />
      <BestSellers />
      <BrandStory />
      <ShopByLifestyle />
      <TrendingProducts />
      <CustomerReviews />
      <Newsletter />
    </>
  );
}
