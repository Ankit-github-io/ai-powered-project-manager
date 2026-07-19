
import { FaGoogle, FaGithub } from 'react-icons/fa6';
import { HiSparkles } from 'react-icons/hi2';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#020617] px-4">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size-4rem_4rem] [mask-image-radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-2xl shadow-primary/5">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30">
            <HiSparkles className="h-6 w-6 text-primary-foreground animate-pulse" />
          </div>
          <h1 className="mt-6 text-2xl font-bold tracking-tight text-foreground">Welcome to Plan AI</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Enterprise orchestration powered by predictive model analytics.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:bg-muted active:scale-[0.98] cursor-pointer">
            <FaGoogle className="h-4 w-4 text-rose-500" />
            <span>Continue with Google Workspace</span>
          </button>

          <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:bg-muted active:scale-[0.98] cursor-pointer">
            <FaGithub className="h-4 w-4 text-foreground" />
            <span>Continue with GitHub Developer Account</span>
          </button>
        </div>
      </div>
    </div>
  );
}
