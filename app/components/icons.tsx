import type { ReactNode } from "react";

type IconProps = {
  className?: string;
};

function BaseIcon({ className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? "h-5 w-5"}
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function BoltIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="m13 2-8 12h6l-1 8 9-13h-6z" />
    </BaseIcon>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M12 3 4 7v5c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V7z" />
      <path d="m9.5 12 1.8 1.8L14.8 10" />
    </BaseIcon>
  );
}

export function CoinIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <ellipse cx="12" cy="6.5" rx="6.5" ry="3.5" />
      <path d="M5.5 6.5v5c0 1.9 2.9 3.5 6.5 3.5s6.5-1.6 6.5-3.5v-5" />
      <path d="M5.5 11.5v5c0 1.9 2.9 3.5 6.5 3.5s6.5-1.6 6.5-3.5v-5" />
    </BaseIcon>
  );
}

export function CloudIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M7 18h9a4 4 0 0 0 .5-8A6 6 0 0 0 6 10a4 4 0 0 0 1 8z" />
    </BaseIcon>
  );
}

export function GaugeIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M4 14a8 8 0 1 1 16 0" />
      <path d="m12 14 4-4" />
      <path d="M12 14h.01" />
    </BaseIcon>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.2-4.2" />
    </BaseIcon>
  );
}

export function CopyIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <rect x="4" y="4" width="11" height="11" rx="2" />
    </BaseIcon>
  );
}
