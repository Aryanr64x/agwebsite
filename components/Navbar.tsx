"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-md bg-fuchsia-100">
      <div className="flex justify-between items-center mx-6 md:mx-16 h-16">
        
        {/* Logo */}
        <div>
          <Image src="/logo.jpg" alt="logo" width={40} height={40} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mr-8 hover:text-amber-600 transition-all duration-100"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 border-b hover:bg-amber-50"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const navItems = [
  { label: "Home", href: "/#" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Book a Session", href: "/#book" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "/#contact" },
];

export default Navbar;
