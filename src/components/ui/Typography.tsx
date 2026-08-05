import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Eyebrow({ children, className = "" }: Props) {
  return (
    <p
      className={`text-sm font-semibold uppercase tracking-[0.25em] text-[#C8102E] ${className}`}
    >
      {children}
    </p>
  );
}

export function H1({ children, className = "" }: Props) {
  return (
    <h1
      className={`text-5xl font-bold tracking-tight text-gray-900 lg:text-7xl ${className}`}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className = "" }: Props) {
  return (
    <h2
      className={`text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}

export function Lead({ children, className = "" }: Props) {
  return (
    <p
      className={`text-xl leading-9 text-gray-600 ${className}`}
    >
      {children}
    </p>
  );
}

export function Body({ children, className = "" }: Props) {
  return (
    <p
      className={`text-lg leading-8 text-gray-600 ${className}`}
    >
      {children}
    </p>
  );
}