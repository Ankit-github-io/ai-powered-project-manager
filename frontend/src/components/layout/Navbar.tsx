import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


export function Navbar() {
  const router = useRouter();
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-white/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-bold text-xl tracking-tighter">Sprint AI</Link>
          <div className="hidden md:flex gap-6 text-sm text-gray-400">
            <Link href="#features" className="hover:text-white transition">Features</Link>
            <Link href="#pricing" className="hover:text-white transition">Pricing</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/sign-in" className="text-sm text-gray-400 hover:text-white">Sign in</Link>
          <Button variant="secondary" onClick={()=>router.push("/sign-up")} className="bg-white text-black hover:bg-gray-200 h-9">
            Get started free
          </Button>
        </div>
      </div>
    </nav>
  );
}