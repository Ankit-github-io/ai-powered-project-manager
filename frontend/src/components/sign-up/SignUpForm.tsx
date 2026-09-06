"use client";

import React, { useState } from "react";
import { Card } from "../ui/Card";
import Link from "next/link";
import { EyeClosed, EyeIcon, MailCheck, CheckCircle2, Circle } from "lucide-react"; // XCircle ki jagah Circle use kiya
import { Button } from "@base-ui/react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

type SignUpFormProps = React.ComponentPropsWithoutRef<"div">;

export const SignUpForm = React.forwardRef<HTMLDivElement, SignUpFormProps>(
  () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [emailError, setEmailError] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [shakeKey, setShakeKey] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Password validation rules state helpers
    const hasMinLength = password.length >= 8;
    const hasUpperCase = /(?=.*[A-Z])/.test(password);
    const hasNumber = /(?=.*\d)/.test(password);
    const hasSpecialChar = /(?=.*[!@#$%^&*])/.test(password);

    const ValidateEmail = (email: string) => {
      if (!email || typeof email !== "string") return false;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email.trim());
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
      setPassword(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);

      if (!email || !password) {
        setError("Please enter both email and password.");
        setShakeKey((prev) => prev + 1);
        return;
      }

      if (!ValidateEmail(email)) {
        setEmailError("Please enter a valid email address.");
        setShakeKey((prev) => prev + 1);
        return;
      }

      if (!(hasMinLength && hasUpperCase && hasNumber && hasSpecialChar)) {
        setError("Please meet all password requirements below.");
        setShakeKey((prev) => prev + 1);
        return;
      }

      // Yahan par aapka sign-up API call hoga.
      // Abhi ke liye hum success screen trigger kar rahe hain:
      setIsSubmitted(true);
    };

    return (
      <div className="flex flex-col gap-4">
        {!isSubmitted ? (
          <form
            id="sign-up-form"
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
              </div>
              <Card theme="emerald" className="rounded-xl overflow-hidden">
                <div className="relative flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    autoComplete="new-password"
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

              {/* Live Password Rules Checklist: No examples, unified neutral color, only circle icons */}
              {password.length > 0 && (
                <div className="grid grid-cols-2 gap-2 mt-3 p-3 bg-neutral-900/80 border border-neutral-800/80 rounded-xl text-[11px]">
                  
                  {/* Rule 1: Min Length */}
                  <div className={`flex items-center gap-2 ${hasMinLength ? "text-emerald-400" : "text-neutral-400"}`}>
                    {hasMinLength ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                    ) : (
                      <Circle className="h-4 w-4 shrink-0 text-neutral-600" />
                    )}
                    <span>8+ characters</span>
                  </div>

                  {/* Rule 2: Upper Case */}
                  <div className={`flex items-center gap-2 ${hasUpperCase ? "text-emerald-400" : "text-neutral-400"}`}>
                    {hasUpperCase ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                    ) : (
                      <Circle className="h-4 w-4 shrink-0 text-neutral-600" />
                    )}
                    <span>Uppercase(A-Z)</span>
                  </div>

                  {/* Rule 3: Number */}
                  <div className={`flex items-center gap-2 ${hasNumber ? "text-emerald-400" : "text-neutral-400"}`}>
                    {hasNumber ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                    ) : (
                      <Circle className="h-4 w-4 shrink-0 text-neutral-600" />
                    )}
                    <span>Number(0-9)</span>
                  </div>

                  {/* Rule 4: Special Char */}
                  <div className={`flex items-center gap-2 ${hasSpecialChar ? "text-emerald-400" : "text-neutral-400"}`}>
                    {hasSpecialChar ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                    ) : (
                      <Circle className="h-4 w-4 shrink-0 text-neutral-600" />
                    )}
                    <span>Special character(!@#$%^)</span>
                  </div>

                </div>
              )}
            </div>

            {/* Error box with shake animation */}
            <AnimatePresence>
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
            </AnimatePresence>

            <div className="mt-3">
              <Card
                theme="emerald"
                className="rounded-xl overflow-hidden active:scale-[0.97] transition-all duration-150 cursor-pointer"
              >
                <Button
                  type="submit"
                  tabIndex={0}
                  className="w-full bg-emerald-600/50 py-3 px-3 text-md font-medium text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-400/50 transition cursor-pointer"
                >
                  Sign Up
                </Button>
              </Card>
            </div>
          </form>
        ) : (
          /* Success Screen */
          <div className="p-5 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex flex-col items-center text-center gap-3">
            <MailCheck className="h-8 w-8 text-emerald-400 mb-1" />
            <div className="space-y-1">
              <h3 className="text-sm font-medium text-white">Verify your email address</h3>
              <p className="text-xs text-neutral-400">
                We have sent a magic verification link to <span className="text-white font-medium">{email}</span>. Click the link inside to activate your account.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="mt-2 text-xs text-emerald-400 hover:underline cursor-pointer"
            >
              Wrong email? Go back
            </button>
          </div>
        )}
      </div>
    );
  },
);

SignUpForm.displayName = "SignUpForm";