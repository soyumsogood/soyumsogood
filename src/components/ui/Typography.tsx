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

export function H3({ children, className = "" }: Props) {
  return (
    <h3
      className={`text-2xl font-bold tracking-tight text-gray-900 ${className}`}
    >
      {children}
    </h3>
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