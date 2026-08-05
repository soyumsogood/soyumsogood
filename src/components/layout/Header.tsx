import Link from "next/link";
import Button from "../ui/Button";
import Logo from "../branding/Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
          <Link href="/about">About</Link>
          <Link href="/brands">Brands</Link>
          <Link href="/technology">Technology</Link>
          <Link href="/opportunities">Opportunities</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* CTA */}
        <Button href="/brands">
          Explore Brands
        </Button>
      </div>
    </header>
  );
}