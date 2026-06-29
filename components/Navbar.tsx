"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Ana Səhifə", href: "/" },
  { name: "Haqqımızda", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          VisionVibe
        </Link>

        <nav>
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition ${
                    pathname === link.href
                      ? "font-semibold text-indigo-600"
                      : "text-gray-700 hover:text-indigo-600"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}