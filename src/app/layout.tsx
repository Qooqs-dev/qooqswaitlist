import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";


// Metadata for the entire app
export const metadata: Metadata = {
  title: "QOOQS",
  description:
    "Your affordable and fresh Asian, African & Caribbean groceries with free delivery.",
  keywords: [
    "African shop",
    "Asian shop",
    "Corner shop",
    "African shop near me",
    "Wholesale African shop",
    "Bulk African shop",
    "Asian supermarket",
    "Local African shop",
    "Grocery free delivery",
    "Nigerian food",
    "Indian food",
    "Pakistani food", 
    "Ethnic food store",
    "Online African grocery",
    "Wholesale groceries online",
    "Bulk buying shop",
     "Caribbean shop",
     "Bulk grocery store",

  ],
  openGraph: {
    title: "QOOQS",
    description:
      "Your affordable and fresh Asian, African & Caribbean groceries with free delivery.",
    url: "https://qooqs.co.uk/",
    siteName: "QOOQS",
    images: [
      {
        url: "https://qooqs.co.uk/icons/qooqs-logo2.png",
        alt: "Qooqs Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QOOQS",
    description:
      "Your affordable and fresh Asian, African & Caribbean groceries with free delivery.",
    images: ["https://qooqs.co.uk/icons/qooqs-logo2.png"],
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
         <Toaster position="top-center" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
