import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Twilight",
  description:
    "Drive growth by collecting customer feedback and building better products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dracula">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
