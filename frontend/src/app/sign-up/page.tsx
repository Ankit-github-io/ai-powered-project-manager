"use client";

import { Card } from "@/components/ui/Card";

import { Icons } from "@/svg/icons";
import { Button } from "@base-ui/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SignUpForm } from "@/components/sign-up/SignUpForm";
import { AuthSecurityShowcase } from "@/components/sign-in/AuthSecurityShowcase";



export default function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // Successful signup ke baad sign-in page par redirect karein
      router.push("/signin");
    } catch (err) {
      setError("message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen w-full flex flex-col bg-[#0a0a0a] text-white selection:bg-purple-500 selection:text-white">
        <div className="flex flex-col">
          <div className="shrink-0"></div>
        </div>
        <div className="flex flex-1 w-full overflow-y-hidden">
          <div className="grow h-full overflow-y-auto">
            <div className="relative flex flex-col bg-[#0a0a0a] min-h-screen">
              <div className="absolute top-0 w-full px-8 mx-auto sm:px-6 lg:px-8 mt-6">
                <nav className="relative flex items-center justify-between sm:h-10">
                  <div className="flex items-center grow shrink-0 lg:grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <Link
                        href={"/"}
                        className="text-lg font-bold tracking-tight text-white"
                      >
                        Sprint AI
                      </Link>
                    </div>
                  </div>
                  <div className="items-center hidden space-x-3 md:ml-10 md:flex md:pr-4">
                    <Button className="px-3 py-1.5 text-xs rounded-md bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 transition text-white">
                      Documentation
                    </Button>
                  </div>
                </nav>
              </div>
              <div className="flex flex-1 h-full">
                <main className="flex flex-col items-center flex-1 shrink-0 px-5 pt-16 pb-8 border-r shadow-lg bg-[#0a0a0a] border-neutral-800">
                  <div className="flex flex-1 flex-col justify-center w-82.5 sm:w-96">
                    <div className="mb-8">
                      <h1 className="mt-8 mb-1 text-2xl font-semibold tracking-tight text-white">
                        
                        Welcome to Sprint AI
                      </h1>
                      <h2 className="text-sm text-neutral-400">
                        Create a new account
                      </h2>
                    </div>

                    <div className="flex flex-col gap-4">
                      {/* Google Button */}
                      <div className="relative">
                        <Card
                          theme="emerald"
                          className="flex items-center relative overflow-hidden rounded-xl active:scale-[0.97] transition-all duration-150 cursor-pointer"
                        >
                          <Button
                            // onClick={}
                            className="w-full flex items-center justify-center gap-3 bg-transparent px-4 py-3 text-sm font-medium text-neutral-200 hover:text-white transition cursor-pointer"
                          >
                            <span className="h-4 w-4">
                              <Icons.google />
                            </span>
                            <span className="truncate">
                              Continue with Google
                            </span>
                          </Button>
                        </Card>
                      </div>

                      {/* Github Button */}
                      <div className="relative">
                        <Card
                          theme="emerald"
                          className="flex items-center relative overflow-hidden rounded-xl active:scale-[0.97] transition-all duration-150 cursor-pointer"
                        >
                          <Button
                            // onClick={() => handleSignUp("github")}
                            className="w-full flex items-center justify-center gap-3 bg-transparent px-4 py-3 text-sm font-medium text-neutral-200 hover:text-white transition cursor-pointer"
                          >
                            <span className="h-4 w-4">
                              <BsGithub />
                            </span>
                            <span className="truncate">
                              Continue with Github
                            </span>
                          </Button>
                        </Card>
                      </div>

                      {/* SSO Button */}
                      <div className="relative">
                        <Card
                          theme="emerald"
                          className="flex items-center relative overflow-hidden rounded-xl active:scale-[0.97] transition-all duration-150 cursor-pointer"
                        >
                          <Button
                            onClick={()=>router.push("/sign-up/sso")}
                            className="w-full flex items-center justify-center gap-3 bg-transparent px-4 py-3 text-sm font-medium text-neutral-200 hover:text-white transition cursor-pointer"
                          >
                            <span className="truncate">Continue with SSO</span>
                          </Button>
                        </Card>
                      </div>

                      {/* Divider */}
                      <div className="relative my-2">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-neutral-800"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="px-3 text-neutral-500 bg-[#0a0a0a] font-medium">
                            or
                          </span>
                        </div>
                      </div>

                      {/* Sign up Form */}
                      <SignUpForm />
                    </div>
                    <div className="self-center my-4 text-sm">
                      <div className="mt-4 text-center">
                        <p className="text-xs text-neutral-400">
                          Have an account?{" "}
                          <Link
                            href="/sign-in"
                            className="text-white hover:underline font-medium transition"
                          >
                            Sign In
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center text-balance mt-4">
                    <p className="text-xs text-neutral-500 leading-relaxed sm:mx-auto sm:max-w-sm">
                      By Continuing, you agree to Sprint AI&apos;s{" "}
                      <Link
                        href={"/terms"}
                        className="underline hover:text-neutral-400"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href={"/privacy"}
                        className="underline hover:text-neutral-400"
                      >
                        Privacy Policy
                      </Link>
                      , and to receive periodic emails with updates.
                    </p>
                  </div>
                </main>
                <aside className="flex-col items-center justify-center flex-1 shrink hidden basis-1/4 xl:flex">
                <AuthSecurityShowcase/>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



