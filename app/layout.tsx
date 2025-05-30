import type React from "react";
import type { Metadata } from "next/types";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeff Mitini | BI Specialist & Author",
  description:
    "Business Intelligence Specialist, Data Analyst Team Lead, Author, and Principal of a Leadership & IT Institute. Portfolio, books, projects, and consulting services.",
  generator: "Next.js",
  metadataBase: new URL("https://jeffmitini.com"), // Change to your domain
  applicationName: "Jeff Mitini Nkhoma Portfolio",
  authors: [{ name: "Jeff Mitini Nkhoma", url: "https://jeffmitini.com" }],
  keywords: [
    "Business Intelligence",
    "Data Analytics",
    "Portfolio",
    "Jeff Mitini Nkhoma",
    "Leadership",
    "Author",
    "Power BI",
    "Tableau",
    "Python",
    "Consulting",
    "Data Visualization",
    "Dashboard",
  ],
  openGraph: {
    type: "website",
    url: "https://jeffmitini.com",
    title: "Jeff Mitini | BI Specialist & Author",
    description:
      "Business Intelligence Specialist, Data Analyst Team Lead, Author, and Principal of a Leadership & IT Institute. Portfolio, books, projects, and consulting services.",
    siteName: "Jeff Mitini Nkhoma Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jeff Mitini Nkhoma - BI Specialist & Author",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@jeffmitini",
    creator: "@jeffmitini",
    title: "Jeff Mitini | BI Specialist & Author",
    description:
      "Business Intelligence Specialist, Data Analyst Team Lead, Author, and Principal of a Leadership & IT Institute. Portfolio, books, projects, and consulting services.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://jeffmitini.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#02000f" />
        {/* Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jeff Mitini Nkhoma",
              url: "https://jeffmitini.com",
              jobTitle: [
                "Business Intelligence Specialist",
                "Data Analyst Team Lead",
                "Author",
              ],
              sameAs: [
                "https://www.linkedin.com/in/jeffmitini",
                "https://twitter.com/jeffmitini",
                "https://github.com/jeffmitini",
              ],
              image: "https://jeffmitini.com/og-image.png",
              description:
                "Business Intelligence Specialist, Data Analyst Team Lead, Author, and Principal of a Leadership & IT Institute.",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
