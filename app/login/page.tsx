"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthShell } from "@/app/components/auth-shell";
import { Button } from "@/app/components/ui";

type Role = "user" | "seller";

const baseInputClass =
  "mt-1 w-full rounded-[var(--radius-sm)] border bg-[var(--bg-elevated)] px-3 py-2 text-sm outline-none";

function fieldClass(hasError: boolean) {
  return `${baseInputClass} ${hasError ? "border-red-500/80" : "border-[var(--card-border)]"}`;
}

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<Role>("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [attempted, setAttempted] = useState(false);

  const errors = useMemo(() => {
    const next: Record<string, string> = {};
    if (!email.trim()) next.email = "Email is required.";
    if (!password) next.password = "Password is required.";
    return next;
  }, [email, password]);

  function redirectByRole(nextRole: Role) {
    router.push(nextRole === "seller" ? "/seller" : "/dashboard");
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAttempted(true);
    if (Object.keys(errors).length > 0) {
      return;
    }
    redirectByRole(role);
  }

  return (
    <AuthShell
      title="Login"
      subtitle="Sign in as a marketplace user or seller to continue."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => setRole("user")}
          className={`rounded-[var(--radius-sm)] border p-3 text-left ${role === "user" ? "border-[var(--accent)] bg-[var(--accent-soft)]" : "border-[var(--card-border)] bg-[var(--bg-elevated)]"}`}
        >
          <p className="text-sm font-semibold">User Login</p>
          <p className="mt-1 text-xs text-muted">Marketplace consumer</p>
        </button>
        <button
          type="button"
          onClick={() => setRole("seller")}
          className={`rounded-[var(--radius-sm)] border p-3 text-left ${role === "seller" ? "border-[var(--accent)] bg-[var(--accent-soft)]" : "border-[var(--card-border)] bg-[var(--bg-elevated)]"}`}
        >
          <p className="text-sm font-semibold">Seller Login</p>
          <p className="mt-1 text-xs text-muted">API publisher and AI generator</p>
        </button>
      </div>

      <form className="mt-6 space-y-3" onSubmit={handleSubmit} noValidate>
        <label className="block text-sm text-muted">
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={fieldClass(attempted && !!errors.email)}
          />
          {attempted && errors.email ? (
            <span className="mt-1 block text-xs text-red-400">{errors.email}</span>
          ) : null}
        </label>
        <label className="block text-sm text-muted">
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className={fieldClass(attempted && !!errors.password)}
          />
          {attempted && errors.password ? (
            <span className="mt-1 block text-xs text-red-400">{errors.password}</span>
          ) : null}
        </label>
        <a href="#" className="inline-block text-sm text-[var(--accent)] hover:brightness-110">
          Forgot password
        </a>
        <Button type="submit" className="w-full">
          {role === "seller" ? "Login as Seller" : "Login as User"}
        </Button>
      </form>

      <div className="mt-5 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">OAuth sign in</p>
        <div className="grid gap-2 sm:grid-cols-2">
          <Button
            variant="secondary"
            className="w-full"
            onClick={() => redirectByRole(role)}
          >
            Google OAuth
          </Button>
          <Button
            variant="secondary"
            className="w-full"
            onClick={() => redirectByRole(role)}
          >
            GitHub OAuth
          </Button>
        </div>
      </div>
    </AuthShell>
  );
}
