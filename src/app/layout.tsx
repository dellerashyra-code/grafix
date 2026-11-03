import type { Metadata } from "next";
import "./globals.css";
import { SiteNav, Footer } from "@/components/SiteChrome";
export const metadata: Metadata = {
  title: "GraFix | Explore Graph Transformations",
  description: "An interactive Pre-Calculus learning platform for graph transformations."
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteNav />{children}<Footer /></body></html>;
}
