import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata = {
  title: "Megan Godfrey",
  description: "The experience and portfolio of Megan Godfrey, front-end web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`text-mg-text font-light ${lexend.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
