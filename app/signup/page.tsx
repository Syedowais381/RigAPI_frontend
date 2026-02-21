import { AuthShell } from "@/app/components/auth-shell";
import { Button } from "@/app/components/ui";

export default function SignupPage() {
  return (
    <AuthShell title="Sign Up" subtitle="Create your RigAPI account to start building and selling APIs.">
      <form className="space-y-3">
        <label className="block text-sm text-muted">
          Name
          <input className="mt-1 w-full rounded-[var(--radius-sm)] border border-[var(--card-border)] bg-[var(--bg-elevated)] px-3 py-2 text-sm outline-none" />
        </label>
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
        <label className="block text-sm text-muted">
          Confirm password
          <input
            type="password"
            className="mt-1 w-full rounded-[var(--radius-sm)] border border-[var(--card-border)] bg-[var(--bg-elevated)] px-3 py-2 text-sm outline-none"
          />
        </label>
        <Button className="w-full">Sign Up</Button>
      </form>
    </AuthShell>
  );
}
