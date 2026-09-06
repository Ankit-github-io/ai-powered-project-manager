"use client";

import React, { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@base-ui/react";
import { ArrowLeft, KeyRound, MailCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { AuthSecurityShowcase } from "@/components/sign-in/AuthSecurityShowcase";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [shakeKey, setShakeKey] = useState(0);

  // Timer States
  const [countdown, setCountdown] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isSubmitted) {
      timerRef.current = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current as NodeJS.Timeout);
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isSubmitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address.");
      setShakeKey((prev) => prev + 1);
      return;
    }
    setError("");
    setCountdown(30);
    setCanResend(false);
    setIsSubmitted(true);
  };

  const handleResend = () => {
    if (!canResend) return;
    setCountdown(30);
    setCanResend(false);
    setIsSubmitted(false);
    setTimeout(() => setIsSubmitted(true), 10);
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#0a0a0a] text-white selection:bg-emerald-500 selection:text-white">
      <div className="flex flex-1 w-full overflow-y-hidden">
        <div className="grow h-full overflow-y-auto">
          <div className="relative flex flex-col bg-[#0a0a0a] min-h-screen">
            
            {/* Top Navigation */}
            <div className="absolute top-0 w-full px-8 mx-auto sm:px-6 lg:px-8 mt-6 z-20">
              <nav className="relative flex items-center justify-between sm:h-10">
                <Link
                  href={"/"}
                  className="text-lg font-bold tracking-tight text-white"
                >
                  Sprint AI
                </Link>
                <div className="items-center hidden space-x-3 md:flex md:pr-4">
                  <button
                    onClick={() => router.push("/sign-in")}
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-xs rounded-md bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 transition text-neutral-200 cursor-pointer"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    <span>Back to sign in</span>
                  </button>
                </div>
              </nav>
            </div>

            {/* Split Screen Container */}
            <div className="flex flex-1 h-full">
              <main className="flex flex-col items-center justify-center shrink-0 px-5 pt-16 pb-8 border-r shadow-lg bg-[#0a0a0a] border-neutral-800 w-full lg:w-120">
                <div className="w-full max-w-sm flex flex-col gap-6">
                  
                  {/* Mobile Back Button */}
                  <button
                    onClick={() => router.push("/sign-in")}
                    className="flex md:hidden items-center gap-2 text-xs text-neutral-400 hover:text-white transition w-fit cursor-pointer"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" /> Back to sign in
                  </button>

                  <div className="space-y-1">
                    <div className="h-10 w-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4">
                      <KeyRound className="h-5 w-5 text-emerald-500" />
                    </div>
                    <h1 className="text-2xl font-semibold tracking-tight text-white">
                      Reset password
                    </h1>
                    <p className="text-sm text-neutral-400">
                      Enter your account email and we&apos;ll send you instructions to
                      reset your password.
                    </p>
                  </div>

                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-neutral-300 uppercase tracking-wider">
                          Email
                        </label>
                        <Card theme="emerald" className="rounded-xl overflow-hidden">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="flex w-full bg-transparent px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none"
                          />
                        </Card>
                      </div>

                      <div className="mt-2">
                        <Card
                          theme="emerald"
                          className="rounded-xl overflow-hidden active:scale-[0.97] transition-all duration-150"
                        >
                          <Button
                            type="submit"
                            className="w-full bg-emerald-600/50 py-3 text-md font-medium text-white shadow-lg hover:bg-emerald-400/50 transition cursor-pointer"
                          >
                            Send Reset Instructions
                          </Button>
                        </Card>
                      </div>
                    </form>
                  ) : (
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex flex-col items-center text-center gap-3">
                      <MailCheck className="h-8 w-8 text-emerald-400" />
                      <div className="space-y-1">
                        <h3 className="text-sm font-medium text-white">
                          Check your email
                        </h3>
                        <p className="text-xs text-neutral-400">
                          We have sent password recovery instructions to{" "}
                          <span className="text-white font-medium">{email}</span>.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={handleResend}
                        disabled={!canResend}
                        className={`mt-2 text-xs transition ${
                          canResend
                            ? "text-emerald-400 hover:underline cursor-pointer"
                            : "text-neutral-500 cursor-not-allowed"
                        }`}
                      >
                        {canResend
                          ? "Didn't receive email? Click to resend"
                          : `Resend email in ${countdown}s`}
                      </button>
                    </div>
                  )}
                </div>
              </main>

              <aside className="hidden xl:flex flex-1 h-full min-h-screen">
                <AuthSecurityShowcase />
              </aside>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}