import { ReactNode } from "react";
import Container from "./Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export default function Section({
  children,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section className={`py-24 lg:py-32 ${className}`}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}