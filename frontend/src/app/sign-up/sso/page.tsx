"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@base-ui/react";
import { ArrowLeft, Building2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function SsoLoginPage() {
  const router = useRouter();
  const [enterpriseEmail, setEnterpriseEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email.trim());
  };

  const handleSsoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(enterpriseEmail)) {
      setStatusMessage("Please enter a valid work email address.");
      return;
    }

    const domain = enterpriseEmail.split("@")[1];

    const supportedDomains = ["acme.com", "enterprise.com"];

    if (supportedDomains.includes(domain)) {
      setStatusMessage("Redirecting to your organization identity provider...");
      document.cookie = `last_auth_provider=sso; path=/; max-age=2592000; SameSite=Lax`;
      signIn("sso", { callbackUrl: "/dashboard" });
    } else {
      setStatusMessage("No enterprise SSO configuration found for this domain.");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#0a0a0a] text-white px-5">
      <div className="w-full max-w-sm flex flex-col gap-6">

        {/* Back to regular Sign In */}
        <button 
          onClick={() => router.push("/sign-in")}
          className="flex items-center gap-2 text-xs text-neutral-400 hover:text-white active:scale-[0.97]  duration-150 transition w-fit cursor-pointer"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to sign in
        </button>

        <div className="space-y-1">
          <div className="h-10 w-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4">
            <Building2 className="h-5 w-5 text-emerald-500" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            Enterprise SSO
          </h1>
          <p className="text-sm text-neutral-400">
            Enter your company email to sign in via your organization provider.
          </p>
        </div>

        <form onSubmit={handleSsoSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-neutral-300 uppercase tracking-wider">Work Email</label>
            <Card theme="emerald" className="rounded-xl overflow-hidden ">
              <input 
                type="email" 
                value={enterpriseEmail} 
                onChange={(e) => setEnterpriseEmail(e.target.value)}
                placeholder="name@company.com" 
                className="flex w-full bg-transparent px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none" 
                required
              />
            </Card>
          </div>

          {statusMessage && (
            <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg text-xs space-y-2">
              <p className={statusMessage.includes("Redirecting") ? "text-emerald-400" : "text-amber-400"}>
                {statusMessage}
              </p>
              {statusMessage.includes("No enterprise SSO") && (
                <button 
                  type="button"
                  onClick={() => alert("Sales team notified! We will reach out to configure SSO for your domain.")}
                  className="w-full mt-1 bg-neutral-800 hover:bg-neutral-700 text-white py-2 rounded-md font-medium transition cursor-pointer"
                >
                  Let us know (Request Access)
                </button>
              )}
            </div>
          )}

          <div className="mt-2">
            <Card theme="emerald" className="rounded-xl overflow-hidden active:scale-[0.97] transition-all duration-150 cursor-pointer">
              <Button type="submit" className="w-full bg-emerald-600/50 py-3 text-md font-medium text-white shadow-lg hover:bg-emerald-400/50 transition cursor-pointer">
                Continue
              </Button>
            </Card>
          </div>
        </form>

      </div>
    </div>
  );
}