import type { Metadata } from "next";
import {Saira} from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const saira = Saira({
  subsets: ['latin'], // Specify the necessary subsets (e.g., 'latin')
  weight: ['400', '700'], // Specify desired weights (e.g., '400', '700')
  // You can also add 'display', 'variable', 'fallback', etc. as needed
});

export const metadata: Metadata = {
  title: "VGO Racing",
  description: "Experience speed in every direction!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${saira.className} ${saira.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
