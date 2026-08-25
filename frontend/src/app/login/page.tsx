
// import { FaGoogle, FaGithub } from 'react-icons/fa6';
// import { HiSparkles } from 'react-icons/hi2';

// export default function LoginPage() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-[#020617] px-4">
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size-4rem_4rem] [mask-image-radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

//       <div className="relative z-10 w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-2xl shadow-primary/5">
//         <div className="flex flex-col items-center text-center">
//           <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30">
//             <HiSparkles className="h-6 w-6 text-primary-foreground animate-pulse" />
//           </div>
//           <h1 className="mt-6 text-2xl font-bold tracking-tight text-foreground">Welcome to Plan AI</h1>
//           <p className="mt-2 text-sm text-muted-foreground">
//             Enterprise orchestration powered by predictive model analytics.
//           </p>
//         </div>

//         <div className="mt-8 space-y-3">
//           <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:bg-muted active:scale-[0.98] cursor-pointer">
//             <FaGoogle className="h-4 w-4 text-rose-500" />
//             <span>Continue with Google Workspace</span>
//           </button>

//           <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:bg-muted active:scale-[0.98] cursor-pointer">
//             <FaGithub className="h-4 w-4 text-foreground" />
//             <span>Continue with GitHub Developer Account</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';

// Strict type definition for the status payload
interface SystemStatus {
  core?: { status: string; service: string; timestamp: string };
  ai?: { status: string; service: string; version: string };
}

// 🛡️ Data Lifecycle Gateway: Fetch from NestJS Core
async function getSystemStatus(): Promise<SystemStatus | null> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
    const res = await fetch(`${apiUrl}/api/status`, {
      cache: 'no-store', // Always fetch fresh connection status
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    return null;
  }
}

export default async function LoginPage() {
  const status = await getSystemStatus();
  
  const isCoreUp = status?.core?.status === 'ok';
  const isAiUp = status?.ai?.status === 'ok';

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#09090b] p-4 font-sans">
      <div className="w-full max-w-[420px] rounded-2xl border border-white/10 bg-[#18181b] p-8 shadow-2xl">
        
        {/* Header Section */}
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500 text-white shadow-lg shadow-indigo-500/20">
            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.6H22l-6.2 4.5 2.3 7.5-6.1-4.6-6.1 4.6 2.3-7.5L2 9.6h7.6z" />
            </svg>
          </div>
          <h1 className="text-[22px] font-bold tracking-tight text-white">Welcome to Plan AI</h1>
          <p className="mt-2.5 text-[14px] leading-relaxed text-zinc-400">
            Enterprise orchestration powered by predictive model analytics.
          </p>
        </div>

        {/* Auth Buttons */}
        <div className="flex flex-col space-y-3">
          <button className="flex w-full items-center justify-center space-x-3 rounded-xl border border-white/5 bg-white/5 px-4 py-3.5 text-[14px] font-medium text-white transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#18181b]">
            <span className="font-bold text-red-500">G</span>
            <span>Continue with Google Workspace</span>
          </button>
          
          <button className="flex w-full items-center justify-center space-x-3 rounded-xl border border-white/5 bg-white/5 px-4 py-3.5 text-[14px] font-medium text-white transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#18181b]">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>Continue with GitHub Developer Account</span>
          </button>
        </div>

        {/* System Diagnostics Waterfall */}
        <div className="mt-8 flex justify-center space-x-6 border-t border-white/10 pt-6">
           <div className="flex items-center space-x-2.5">
              <span className="relative flex h-2.5 w-2.5">
                {isCoreUp && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>}
                <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${isCoreUp ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
              </span>
              <span className="text-[12px] font-medium text-zinc-400">Core Node</span>
           </div>
           
           <div className="flex items-center space-x-2.5">
              <span className="relative flex h-2.5 w-2.5">
                {isAiUp && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" style={{ animationDelay: '0.5s' }}></span>}
                <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${isAiUp ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
              </span>
              <span className="text-[12px] font-medium text-zinc-400">AI Node</span>
           </div>
        </div>

      </div>
    </div>
  );
}