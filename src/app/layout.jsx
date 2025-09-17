import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 30, // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export const metadata = {
  title: "FixifyHub - Professional Web Solutions & Brand Growth",
  description:
    "FixifyHub fixes website bugs, improves user experiences, and helps brands grow online. Professional web development services with 24h response time.",
  keywords:
    "website fixes, web development, UI/UX design, brand growth, bug fixes, performance optimization, web design",
  authors: [{ name: "FixifyHub" }],
  creator: "FixifyHub",
  publisher: "FixifyHub",
  openGraph: {
    title: "FixifyHub - We Fix, Improve & Help Brands Grow",
    description:
      "Professional web solutions that make digital journeys seamless. From website bugs to smooth user experiences, we help brands shine online.",
    siteName: "FixifyHub",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FixifyHub - Professional Web Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FixifyHub - Professional Web Solutions & Brand Growth",
    description:
      "We fix website bugs, improve user experiences, and help brands grow online. Professional service with quick response time.",
    images: ["/og-image.jpg"],
    creator: "@FixifyHub",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1E3A8A" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "FixifyHub",
              description:
                "Professional web solutions that fix website bugs, improve user experiences, and help brands grow online.",
              url: "https://fixifyhub.com",
              logo: "https://fixifyhub.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "fixifyahubb@gmail.com",
              },
              sameAs: ["https://instagram.com/FixifyHub"],
              serviceType: [
                "Web Development",
                "Website Fixes",
                "UI/UX Design",
                "Brand Growth",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
