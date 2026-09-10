import type { Metadata } from "next";
import { basePath } from "./base-path";
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
      <head>
        <style
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
@font-face {
  font-family: Suisse;
  src: url("${basePath}/fonts/suisse-regular.woff2") format("woff2");
  font-display: swap;
  font-weight: 400 700;
}
@font-face {
  font-family: Suisse;
  src: url("${basePath}/fonts/suisse-light.woff2") format("woff2");
  font-display: swap;
  font-weight: 300;
}
`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
