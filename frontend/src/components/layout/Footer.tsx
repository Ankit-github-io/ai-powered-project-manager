import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full bg-neutral-950 border-t border-neutral-900 text-neutral-400 pt-16 pb-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        
        {/* Brand & Info */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight text-white">Sprint Ai</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-300 font-medium">
              Beta
            </span>
          </div>
          <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
            The high-performance AI project management platform built to replace the friction of legacy tools with speed and clarity.
          </p>
          <div className="flex items-center space-x-4 text-neutral-400 pt-2">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <FaDiscord size={20} />
            </a>
          </div>
        </div>

        {/* Product Links */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white tracking-wider uppercase">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/#features" className="hover:text-white transition-colors">Features</Link></li>
            <li><Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            <li><Link href="/roadmap" className="hover:text-white transition-colors">AI Roadmap</Link></li>
            <li><Link href="/changelog" className="hover:text-white transition-colors">Changelog</Link></li>
          </ul>
        </div>

        {/* Resources Links */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white tracking-wider uppercase">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
            <li><Link href="/api" className="hover:text-white transition-colors">API Reference</Link></li>
            <li><Link href="/guides" className="hover:text-white transition-colors">Integration Guides</Link></li>
            <li><Link href="/support" className="hover:text-white transition-colors">Support Center</Link></li>
          </ul>
        </div>

        {/* Legal & Company */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="/security" className="hover:text-white transition-colors">Security (SOC 2)</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400">
        <p>&copy; {new Date().getFullYear()} Sprint AI Inc. All rights reserved.</p>
        <p className="mt-4 sm:mt-0">Powered by GPT-4o & NestJS Enterprise Core.</p>
      </div>
    </footer>
  );
}