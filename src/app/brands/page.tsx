import BrandsHero from "@/components/brands/BrandsHero";
import BrandGrid from "@/components/brands/BrandGrid";
import FutureBrands from "@/components/brands/FutureBrands";

export const metadata = {
  title: "Brands | So Yum! So Good!",
  description:
    "Discover the food brands built by So Yum! So Good!, including DCD™ and Yum! Express™, and explore our future food concepts.",
};

export default function BrandsPage() {
  return (
    <main>
      <BrandsHero />
      <BrandGrid />
      <FutureBrands />
    </main>
  );
}