import type { Metadata } from "next";
import { Lilita_One } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";

const lilitaOne = Lilita_One({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nextjs-blog-tags.vercel.app"),
  title: "Rene J. Portfolio Website",
  description:
    " I'm a full-stack developer passionate about building modern dynamic and responsive web applications from front to back that users love.",
  icons: [
    {
      url: "/code-logo.svg",
      href: "/code-logo.svg",
    },
  ],
  openGraph: {
    title: "Rene J. Porfolio Website",
    description:
      "I'm a full-stack developer passionate about building modern dynamic and responsive web applications from front to back that users love.",
    url: "https://nextjs-blog-tags.vercel.app",
    siteName: "Rene",
    images: "/portfolioweb.png",
    type: "website",
  },
  keywords: ["portfolio", "Rene", "Rene Jasper Gilo", "Rene J."],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={lilitaOne.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
