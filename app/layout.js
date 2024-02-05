import { DM_Sans } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import { Space_Mono } from "next/font/google";
import "./globals.css";

export const dmSans = DM_Sans({ subsets: ["latin"] });
const space = Space_Grotesk({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>BrandIn Solutions</title>
        <meta name='description' content='Description' />
      </head>
      <body className={space.className}>{children}</body>
    </html>
  );
}
