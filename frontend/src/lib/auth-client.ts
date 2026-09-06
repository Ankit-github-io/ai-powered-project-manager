"use client";

import { signIn } from "next-auth/react";

export type OAuthProvider = "google" | "github" | "oidc";

export interface SocialAuthOptions {
  callbackUrl?: string;
}

/**
 * Orchestrates social OAuth sign-in flows safely with loading feedback support.
 */
export async function handleSocialSignIn(
  provider: OAuthProvider,
  options: SocialAuthOptions = { callbackUrl: "/dashboard" }
): Promise<void> {
  try {
    await signIn(provider, {
      callbackUrl: options.callbackUrl,
    });
  } catch (error) {
    console.error(`Authentication failure for provider [${provider}]:`, error);
    throw error;
  }
}