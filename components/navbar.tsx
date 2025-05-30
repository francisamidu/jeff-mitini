"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { Menu, X, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = React.useRef<HTMLDivElement>(null);
  const firstLinkRef = React.useRef<HTMLAnchorElement>(null);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isArticlesPage = pathname === "/articles" || pathname === "/articles/*";

  // Focus trap, scroll lock, and Escape key for mobile menu
  useEffect(() => {
    if (!isOpen) return;

    // Lock scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus the first link
    firstLinkRef.current?.focus();

    // Keydown handler for focus trap and Escape
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
      // Focus trap
      if (e.key === "Tab" && menuRef.current) {
        const focusableEls = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        const first = focusableEls[0];
        const last = focusableEls[focusableEls.length - 1];
        if (e.shiftKey) {
          // Shift+Tab
          if (document.activeElement === first) {
            e.preventDefault();
            (last as HTMLElement).focus();
          }
        } else {
          // Tab
          if (document.activeElement === last) {
            e.preventDefault();
            (first as HTMLElement).focus();
          }
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Resume", href: "/resume" },
    { name: "Articles", href: "/articles" },
    { name: "Books", href: "/books" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 px-2 md:px-0 w-full transition-all duration-200",
        isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-background",
        isArticlesPage && isScrolled ? "shadow" : ""
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/jeff.jpg"
              className="rounded-full"
              alt="Jeff"
              width={40}
              height={40}
            />
            <div className="flex flex-col">
              <span className="font-bold">Jeff Mitini</span>
              <span className="text-xs text-muted-foreground">
                Data Analyst | BI Developer
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}

          <Button asChild>
            <Link
              className="flex items-center gap-2 dark:bg-white dark:text-black dark:hover:bg-white/80 dark:hover:text-black"
              href="#contact"
            >
              <span className="-mt-0.5">Contact Me</span>
              <Mail />
            </Link>
          </Button>

          <ModeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ModeToggle />
          <Button
            className="hover:!bg-gray-50"
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 -top-3" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu (Overlay) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
              aria-hidden="true"
              onClick={() => setIsOpen(false)}
            />
            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed -top-16 left-0 right-0 z-50 md:hidden border-b bg-background shadow-lg"
              style={{ marginTop: 64 }} // 64px = h-16 navbar height
              ref={menuRef}
              role="dialog"
              aria-modal="true"
            >
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary z-10"
                tabIndex={0}
              >
                <X className="h-6 w-6" />
              </button>
              <div className="container p-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary py-2",
                      pathname === item.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}

                <Button asChild className="mt-2 ">
                  <Link
                    href="#contact"
                    className="dark:bg-white dark:text-black dark:hover:bg-white/80 dark:hover:text-black"
                  >
                    Contact Me
                  </Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
