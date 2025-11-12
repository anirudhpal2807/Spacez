import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spacez - Offers",
  description: "Book directly and unlock exclusive additional rewards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}


