import { AuthShell } from "@/app/components/auth-shell";
import { Button } from "@/app/components/ui";

export default function LoginPage() {
  return (
    <AuthShell title="Login" subtitle="Sign in to manage APIs, billing, and deployments.">
      <form className="space-y-3">
        <label className="block text-sm text-muted">
          Email
          <input
            type="email"
            className="mt-1 w-full rounded-[var(--radius-sm)] border border-[var(--card-border)] bg-[var(--bg-elevated)] px-3 py-2 text-sm outline-none"
          />
        </label>
        <label className="block text-sm text-muted">
          Password
          <input
            type="password"
            className="mt-1 w-full rounded-[var(--radius-sm)] border border-[var(--card-border)] bg-[var(--bg-elevated)] px-3 py-2 text-sm outline-none"
          />
        </label>
        <a href="#" className="inline-block text-sm text-[var(--accent)] hover:brightness-110">
          Forgot password
        </a>
        <Button className="w-full">Login</Button>
      </form>
    </AuthShell>
  );
}
