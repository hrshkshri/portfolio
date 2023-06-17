import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harsh",
  description: "Harsh Keshari's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <div>{children}</div>
      </body>
    </html>
  );
}
