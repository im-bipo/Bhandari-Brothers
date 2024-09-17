import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/custom/NavBar";
import Footer from "@/components/custom/Footer";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/toaster";
import TopBar from "@/components/custom/TopBar";

const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bbjob.thelaawala.com/"),
  title: " Bhandari Brothers Group: Your Partner in Finding Top Talent",
  description:
    "Bhandari Brothers Group is a leading recruitment agency in EU. We specialize in finding the best talent for your company. Post a job today and let us find the perfect candidate for you",
  openGraph: {
    images: {
      url: "/ogImage.png",
      width: 1200,
      height: 630,
      alt: "Bhandari Brothers Group",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <NextTopLoader showSpinner={false} color="red" />
        <nav className="bg-background/60 backdrop-blur-xl shadow-sm fixed z-[1000] w-full top-0">
          <TopBar />
          <NavBar />
        </nav>
        <main className="overflow-hidden pt-[72px] md:pt-[105px]">{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
