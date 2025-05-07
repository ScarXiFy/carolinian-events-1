// edit UI here !!!

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50"
      >
        {isOpen ? <X /> : <Menu />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm">
          <div className="absolute left-0 top-0 h-full w-3/4 border-r bg-background p-6 pt-20">
            <nav className="flex flex-col gap-6">
              <Link
                href="/events"
                className="text-lg"
                onClick={() => setIsOpen(false)}
              >
                Browse Events
              </Link>
              <Link
                href="/create"
                className="text-lg"
                onClick={() => setIsOpen(false)}
              >
                Create Event
              </Link>
              <Link
                href="/about"
                className="text-lg"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}