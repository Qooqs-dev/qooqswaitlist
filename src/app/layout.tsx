import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


// Metadata for the entire app
export const metadata: Metadata = {
  title: "Qooqs",
  description:
    "Discover the future of advertising! Seamlessly create and manage ad campaigns, maximize reach, and engage your audience with our innovative platform.",
  keywords: [
    "You earn while at it",
    "advertising",
    "ad campaigns",
    "business advertising",
    "dynamic ads",
    "audience engagement",
    "innovative platform",
    "user-friendly ads",
    "maximize reach",
    "future of advertising",
    "seamless advertising",
  ],
  openGraph: {
    title: "Hivenify",
    description:
      "Discover the future of advertising! Seamlessly create and manage ad campaigns, maximize reach, and engage your audience with our innovative platform.",
    url: "https://www.hivenify.com",
    siteName: "Hivenify",
    images: [
      {
        url: "https://www.hivenify.com/icons/hivenify-logo.svg",
        alt: "Hivenify Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hivenify",
    description:
      "Discover the future of advertising! Seamlessly create and manage ad campaigns, maximize reach, and engage your audience with our innovative platform.",
    images: ["https://www.hivenify.com/icons/hivenify-logo.svg"],
  },
  icons: {
    icon: "/icons/qooqs-favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/frutiger-lt-pro"
          rel="stylesheet"
        />
      </head>
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
