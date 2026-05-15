import type { Metadata } from "next";
import "./globals.css";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// System fonts for reliability
const inter = { variable: "--font-sans" };
const jetbrains = { variable: "--font-mono" };

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const metadata: Metadata = {
  title: {
    default:
      "Vikas Poute | Software Engineer | Real-Time Systems & Flutter Architect",
    template: "%s | Vikas Poute",
  },
  description:
    "Senior-level expertise in high-concurrency real-time systems, scalable Flutter architectures, and low-latency digital ecosystems.",
  keywords: [
    "Vikas Poute",
    "Software Engineer",
    "Flutter Architect",
    "Real-Time Systems",
    "WebRTC Engineer",
    "Full Stack Developer",
    "Java Spring Boot",
    "System Design",
  ],
  authors: [{ name: "Vikas Poute", url: "https://vikaspoute.dev" }],
  creator: "Vikas Poute",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vikaspoute.dev",
    title: "Vikas Poute | Real-Time Systems & Flutter Architect",
    description:
      "Architecting high-performance real-time communication systems and scalable cross-platform ecosystems.",
    siteName: "Vikas Poute Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikas Poute | Real-Time Systems & Flutter Architect",
    description:
      "Building production-grade real-time systems and scalable Flutter architectures.",
    creator: "@vikaspoute",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vikas Poute",
    jobTitle: "Software Engineer",
    url: "https://vikaspoute.dev",
    sameAs: [
      "https://github.com/vikaspoute",
      "https://linkedin.com/in/vikaspoute",
    ],
    description:
      "Senior Software Engineer specializing in Real-Time Systems, Flutter, and Scalable Backend Architecture.",
    knowsAbout: [
      "Flutter",
      "Java",
      "Spring Boot",
      "WebRTC",
      "Real-Time Systems",
      "Distributed Systems",
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          inter.variable,
          jetbrains.variable,
          "font-sans antialiased",
        )}
      >
        {children}
      </body>
    </html>
  );
}
