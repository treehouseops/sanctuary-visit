import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Come find your people. | Visit Sanctuary",
  description:
    "A day, a weekend, a week. Let us plan a personal introduction to Sanctuary, Austin, and the life you could build here.",
  openGraph: {
    title: "You’re invited to Sanctuary",
    description:
      "Experience the place. Meet the people. Imagine your everyday.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
