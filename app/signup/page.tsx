"use client";

import { useMemo, useState } from "react";
import { AuthShell } from "@/app/components/auth-shell";
import { Badge, Button } from "@/app/components/ui";

type Role = "user" | "seller";

const baseInputClass =
  "mt-1 w-full rounded-[var(--radius-sm)] border bg-[var(--bg-elevated)] px-3 py-2 text-sm outline-none";

function fieldClass(hasError: boolean) {
  return `${baseInputClass} ${hasError ? "border-red-500/80" : "border-[var(--card-border)]"}`;
}

export default function SignupPage() {
  const [role, setRole] = useState<Role>("user");
  const [attempted, setAttempted] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [taxId, setTaxId] = useState("");

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptSellerAgreement, setAcceptSellerAgreement] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    const next: Record<string, string> = {};

    if (!fullName.trim()) next.fullName = "Full name is required.";
    if (!email.trim()) next.email = "Email is required.";
    if (!password) next.password = "Password is required.";
    if (!confirmPassword) next.confirmPassword = "Confirm password is required.";
    if (password && confirmPassword && password !== confirmPassword) {
      next.confirmPassword = "Passwords do not match.";
    }

    if (role === "user") {
      if (!acceptTerms) next.acceptTerms = "You must accept Terms & Privacy.";
    } else {
      if (!country.trim()) next.country = "Country is required.";
      if (!phoneNumber.trim()) next.phoneNumber = "Phone number is required.";
      if (!acceptSellerAgreement) {
        next.acceptSellerAgreement = "You must accept the Seller Agreement.";
      }
    }

    return next;
  }, [
    acceptSellerAgreement,
    acceptTerms,
    confirmPassword,
    country,
    email,
    fullName,
    password,
    phoneNumber,
    role,
  ]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAttempted(true);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setSubmitted(true);
  }

  return (
    <AuthShell
      title="Sign Up"
      subtitle="Create a RigAPI account for marketplace subscriptions or API publishing."
    >
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">Choose account role</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setRole("user")}
            className={`rounded-[var(--radius-sm)] border p-3 text-left ${role === "user" ? "border-[var(--accent)] bg-[var(--accent-soft)]" : "border-[var(--card-border)] bg-[var(--bg-elevated)]"}`}
          >
            <p className="text-sm font-semibold">Continue as User</p>
            <p className="mt-1 text-xs text-muted">Marketplace consumer</p>
          </button>
          <button
            type="button"
            onClick={() => setRole("seller")}
            className={`rounded-[var(--radius-sm)] border p-3 text-left ${role === "seller" ? "border-[var(--accent)] bg-[var(--accent-soft)]" : "border-[var(--card-border)] bg-[var(--bg-elevated)]"}`}
          >
            <p className="text-sm font-semibold">Continue as Seller</p>
            <p className="mt-1 text-xs text-muted">API publisher and AI generator</p>
          </button>
        </div>
      </div>

      <form className="mt-6 space-y-3" onSubmit={handleSubmit} noValidate>
        <label className="block text-sm text-muted">
          Full Name
          <input
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            className={fieldClass(attempted && !!errors.fullName)}
          />
          {attempted && errors.fullName ? (
            <span className="mt-1 block text-xs text-red-400">{errors.fullName}</span>
          ) : null}
        </label>

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

        <div className="grid gap-3 sm:grid-cols-2">
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
          <label className="block text-sm text-muted">
            Confirm Password
            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              className={fieldClass(attempted && !!errors.confirmPassword)}
            />
            {attempted && errors.confirmPassword ? (
              <span className="mt-1 block text-xs text-red-400">{errors.confirmPassword}</span>
            ) : null}
          </label>
        </div>

        {role === "seller" ? (
          <>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="block text-sm text-muted">
                Country
                <input
                  value={country}
                  onChange={(event) => setCountry(event.target.value)}
                  className={fieldClass(attempted && !!errors.country)}
                />
                {attempted && errors.country ? (
                  <span className="mt-1 block text-xs text-red-400">{errors.country}</span>
                ) : null}
              </label>
              <label className="block text-sm text-muted">
                Phone Number
                <input
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                  className={fieldClass(attempted && !!errors.phoneNumber)}
                />
                {attempted && errors.phoneNumber ? (
                  <span className="mt-1 block text-xs text-red-400">{errors.phoneNumber}</span>
                ) : null}
              </label>
            </div>
            <label className="block text-sm text-muted">
              Organization Name <span className="text-xs text-muted">(optional)</span>
              <input
                value={organizationName}
                onChange={(event) => setOrganizationName(event.target.value)}
                className={fieldClass(false)}
              />
            </label>
            <label className="block text-sm text-muted">
              Tax ID / GST <span className="text-xs text-muted">(optional)</span>
              <input
                value={taxId}
                onChange={(event) => setTaxId(event.target.value)}
                className={fieldClass(false)}
              />
            </label>
          </>
        ) : null}

        <label className="flex items-start gap-2 rounded-[var(--radius-sm)] border border-[var(--card-border)] bg-[var(--bg-elevated)] px-3 py-2 text-sm text-muted">
          <input
            type="checkbox"
            checked={role === "seller" ? acceptSellerAgreement : acceptTerms}
            onChange={(event) =>
              role === "seller"
                ? setAcceptSellerAgreement(event.target.checked)
                : setAcceptTerms(event.target.checked)
            }
            className="mt-0.5 h-4 w-4 accent-[var(--accent)]"
          />
          <span>
            {role === "seller" ? "I accept the Seller Agreement." : "I accept Terms & Privacy."}
          </span>
        </label>
        {attempted && role === "seller" && errors.acceptSellerAgreement ? (
          <p className="text-xs text-red-400">{errors.acceptSellerAgreement}</p>
        ) : null}
        {attempted && role === "user" && errors.acceptTerms ? (
          <p className="text-xs text-red-400">{errors.acceptTerms}</p>
        ) : null}

        <Button type="submit" className="w-full">
          {role === "seller" ? "Create Seller Account" : "Create Account"}
        </Button>
      </form>

      <div className="mt-5 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">Or continue with</p>
        <div className="grid gap-2 sm:grid-cols-2">
          <Button variant="secondary" className="w-full">
            Google OAuth
          </Button>
          <Button variant="secondary" className="w-full">
            GitHub OAuth
          </Button>
        </div>
      </div>

      {role === "seller" ? (
        <div className="mt-5 rounded-[var(--radius-sm)] border border-[var(--card-border)] bg-[var(--bg-elevated)] p-4">
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-semibold">Required Seller OAuth Connections</p>
            <Badge variant="warning">Post-signup</Badge>
          </div>
          <ul className="mt-2 space-y-1 text-sm text-muted">
            <li>GitHub (mandatory for deployment)</li>
            <li>Cloud Provider: Render, Railway, or AWS</li>
            <li>Payment Payout: Stripe Connect or Razorpay onboarding</li>
          </ul>
        </div>
      ) : null}

      {submitted ? (
        <p className="mt-4 rounded-[var(--radius-sm)] border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300">
          {role === "seller"
            ? "Seller account created. Complete required OAuth connections to activate publishing."
            : "Account created. You can now browse Marketplace and subscribe to APIs."}
        </p>
      ) : null}
    </AuthShell>
  );
}
