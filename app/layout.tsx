import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Togetha Foreva | Spontaneous Date Randomizer for Couples",
  description: "Can't decide what to do? Stop being indecisive! Get instant random date ideas for couples who are bored and need help choosing activities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
