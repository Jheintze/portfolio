"use client";

import { useState } from "react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClassName =
  "block rounded-md px-2 py-1 text-base font-medium transition-opacity hover:opacity-70";

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-3 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="text-base font-semibold sm:text-lg"
            onClick={closeMenu}
          >
            Jakob Heintze
          </a>

          <button
            type="button"
            className="rounded-md p-2 sm:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <ul
          className={`mt-2 flex-col gap-1 sm:mt-0 sm:flex sm:flex-row sm:items-center sm:gap-6 ${
            isOpen ? "flex" : "hidden sm:flex"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={linkClassName}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
