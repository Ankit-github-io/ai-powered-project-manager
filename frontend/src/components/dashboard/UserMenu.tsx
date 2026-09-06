"use client";

import { useState, useRef, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { FaArrowRightArrowLeft, FaGear, FaArrowRightFromBracket } from "react-icons/fa6";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function UserMenu() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Safe fallback values with proper string types
  const userName: string = session?.user?.name ?? "User";
  const userEmail: string = session?.user?.email ?? "";
  const userImage: string | undefined = session?.user?.image ?? undefined;

  // Fully typed Initials generator function
  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .filter(Boolean) // To handle extra spaces 
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* Clickable Avatar Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer transition"
      >
        <Avatar size="default">
          <AvatarImage src={userImage} alt={userName} />
          <AvatarFallback>{getInitials(userName)}</AvatarFallback>
        </Avatar>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-xl py-1.5 z-50 text-xs">
          <div className="px-3 py-2.5 border-b border-border">
            <p className="font-semibold text-foreground truncate">{userName}</p>
            <p className="text-[10px] text-muted-foreground truncate">{userEmail}</p>
          </div>

          <div className="py-1">
            <button
              onClick={() => {
                setIsOpen(false);
                // Switch account logic
              }}
              className="w-full text-left px-3 py-2 flex items-center gap-2.5 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition cursor-pointer"
            >
              <FaArrowRightArrowLeft className="w-3.5 h-3.5" />
              <span>Switch Account</span>
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                // Settings route logic
              }}
              className="w-full text-left px-3 py-2 flex items-center gap-2.5 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition cursor-pointer"
            >
              <FaGear className="w-3.5 h-3.5" />
              <span>Settings</span>
            </button>
          </div>

          <div className="border-t border-border pt-1">
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="w-full text-left px-3 py-2 flex items-center gap-2.5 text-red-500 hover:bg-red-500/10 transition cursor-pointer"
            >
              <FaArrowRightFromBracket className="w-3.5 h-3.5" />
              <span>Log out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}