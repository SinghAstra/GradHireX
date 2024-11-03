import Providers from "@/components/providers/provider";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/config/site";
import Header from "@/layouts/header";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Campus Placement",
    "Employability Insights",
    "University Recruitment",
    "Corporate Access",
    "Centralized Data",
    "Job Market Analysis",
    "Government Policy",
    "Tech Education",
  ],
  authors: [
    {
      name: "SinghAstra",
      url: "https://github.com/SinghAstra",
    },
  ],
  creator: "SinghAstra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/assets/images/og.jpg`],
    creator: "@singhastra",
  },
  icons: {
    icon: "/assets/images/favicon.ico",
  },
  // manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gradient-light dark:bg-gradient min-h-screen relative flex flex-col text-foreground antialiased !font-default overflow-x-hidden`}
      >
        <Providers>
          <NextTopLoader color="hsl(var(--primary))" showSpinner={false} />
          <Header />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
