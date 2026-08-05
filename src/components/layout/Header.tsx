import Link from "next/link";
import Logo from "../branding/Logo";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { navigation } from "@/config/navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <Container className="flex items-center justify-between py-5">
        <Logo />

        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
          {navigation.map((item) => (
            <Link key={item.title} href={item.href}>
              {item.title}
            </Link>
          ))}
        </nav>

        <Button href="/brands">
          Explore Brands
        </Button>
      </Container>
    </header>
  );
}