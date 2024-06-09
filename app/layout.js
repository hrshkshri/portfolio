import Container from "@/components/layout/Container";
import "./globals.css";


export const metadata = {
  title: "Harsh",
  description: "Harsh Keshari's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-black`}>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
