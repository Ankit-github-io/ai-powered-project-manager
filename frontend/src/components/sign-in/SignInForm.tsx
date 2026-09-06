"use client";

import React, { useState } from "react";
import { Card } from "../ui/Card";
import Link from "next/link";
import { EyeClosed, EyeIcon } from "lucide-react";
import { Button } from "@base-ui/react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";

type SignInFormProps = React.ComponentPropsWithoutRef<"div">;

export const SignInForm = React.forwardRef<HTMLDivElement, SignInFormProps>(
  () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [shakeKey, setShakeKey] = useState(0);

    const ValidateEmail = (email: string) => {
      if (!email || typeof email !== "string") return false;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email.trim());
    };

    const validatePassword = (pass: string) => {
      if (pass.length === 0) return "";
      if (pass.length < 8)
        return "Password must be at least 8 characters long.";
      if (!/(?=.*[A-Z])/.test(pass))
        return "Include at least one uppercase letter.";
      if (!/(?=.*\d)/.test(pass)) return "Include at least one number.";
      if (!/(?=.*[!@#$%^&*])/.test(pass))
        return "Include at least one special character (!@#$%^&*).";
      return "";
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setEmail(val);
      if (val.length > 0 && !ValidateEmail(val)) {
        setEmailError("Please enter a valid email address.");
      } else {
        setEmailError(null);
      }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setPassword(val);
      setPasswordError(validatePassword(val));
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);

      if (!email || !password) {
        setError("Please enter both email and password.");
        setShakeKey((prev) => prev + 1);
        return;
      }

      const passError = validatePassword(password);
      const isEmailValid = ValidateEmail(email);

      if (!isEmailValid) {
        setEmailError("Please enter a valid email address.");
        setShakeKey((prev) => prev + 1);
        return;
      }
      if (passError) {
        setPasswordError(passError);
        setShakeKey((prev) => prev + 1);
        return;
      }

      try {
        const result = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });

        if (result?.error) {
          setError("Invalid email or password.");
          setShakeKey((prev) => prev + 1);
        } else {
          document.cookie = `last_auth_provider=credentials; path=/; max-age=2592000; SameSite=Lax`;
          router.replace("/dashboard");
        }
      } catch (err) {
        setError("An unexpected error occurred.");
        setShakeKey((prev) => prev + 1);
      }
    };

    return (
      <form
        id="sign-in-form"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-xs font-medium text-neutral-300 uppercase tracking-wider"
          >
            Email
          </label>
          <Card theme="emerald" className="rounded-xl overflow-hidden">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              id="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="flex w-full bg-transparent px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none"
            />
          </Card>
          {emailError && (
            <span className="text-[11px] text-rose-500 mt-1">{emailError}</span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex flex-row gap-2 justify-between items-center">
            <label
              htmlFor="password"
              className="text-xs font-medium text-neutral-300 uppercase tracking-wider"
            >
              Password
            </label>
            <Link
              href={"/sign-in/forgot-password"}
              className="text-xs text-neutral-400 hover:text-white transition underline"
            >
              Forgot password?
            </Link>
          </div>
          <Card theme="emerald" className="rounded-xl overflow-hidden">
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                autoComplete="current-password"
                placeholder="••••••••"
                className="flex w-full bg-transparent px-3.5 py-2.5 pr-10 text-sm text-white placeholder-neutral-600 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                title={showPassword ? "Hide password" : "Show password"}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 inline-flex items-center justify-center p-1 rounded text-neutral-400 hover:text-white transition cursor-pointer"
              >
                <div
                  aria-hidden
                  className="inline-flex items-center justify-center shrink-0 [&_svg]:h-4 [&_svg]:w-4"
                >
                  {showPassword ? <EyeIcon /> : <EyeClosed />}
                </div>
              </button>
            </div>
          </Card>
          {passwordError && (
            <span className="text-[11px] text-rose-500 mt-1">
              {passwordError}
            </span>
          )}
        </div>

        {/* Error box with shake animation  */}

        {error && (
          <motion.div
            key={shakeKey}
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              x: [0, -8, 8, -8, 8, 0],
            }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-xs text-rose-400 text-center"
          >
            {error}
          </motion.div>
        )}

        <div className="mt-2">
          <Card theme="emerald" className="rounded-xl overflow-hidden active:scale-[0.97] transition-all duration-150 cursor-pointer">
            <Button
              type="submit"
              tabIndex={0}
              className="w-full bg-emerald-600/50 py-3 px-3 text-md font-medium text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-400/50 transition cursor-pointer"
            >
              Sign in
            </Button>
          </Card>
        </div>
      </form>
    );
  },
);

SignInForm.displayName = "SignInForm";
