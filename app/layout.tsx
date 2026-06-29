import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: {
    default: "VisionVibe",
    template: "%s | VisionVibe",
  },
  description: "VisionVibe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az">
      <body>
        <NextTopLoader
          color="#ff0000"
          height={3}
          showSpinner={false}
        />

        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}