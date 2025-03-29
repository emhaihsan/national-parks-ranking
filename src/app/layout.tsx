import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Indonesian National Parks Ranking",
  description: "Vote for your favorite Indonesian National Parks and see how they rank based on the ELO rating system. Discover the beauty of Indonesia's natural treasures.",
  keywords: ["Indonesia", "National Parks", "ELO Rating", "Voting", "Nature", "Conservation", "Tourism", "Biodiversity"],
  authors: [{ name: "National Parks Ranking Team" }],
  creator: "National Parks Ranking Team",
  publisher: "National Parks Ranking",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: [
      { url: "/globe.svg", type: "image/svg+xml" }
    ]
  },
  openGraph: {
    title: "Indonesian National Parks Ranking",
    description: "Vote for your favorite Indonesian National Parks and see how they rank based on the ELO rating system.",
    url: "https://national-parks-ranking.vercel.app",
    siteName: "Indonesian National Parks Ranking",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pulau_Padar_adalah_pulau_ketiga_terbesar_di_kawasan_Taman_Nasional_Komodo%2C_setelah_Pulau_Komodo_dan_Pulau_Rinca.jpg/330px-Pulau_Padar_adalah_pulau_ketiga_terbesar_di_kawasan_Taman_Nasional_Komodo%2C_setelah_Pulau_Komodo_dan_Pulau_Rinca.jpg",
        width: 330,
        height: 220,
        alt: "Indonesian National Parks - Komodo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indonesian National Parks Ranking",
    description: "Vote for your favorite Indonesian National Parks and see how they rank based on the ELO rating system.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pulau_Padar_adalah_pulau_ketiga_terbesar_di_kawasan_Taman_Nasional_Komodo%2C_setelah_Pulau_Komodo_dan_Pulau_Rinca.jpg/330px-Pulau_Padar_adalah_pulau_ketiga_terbesar_di_kawasan_Taman_Nasional_Komodo%2C_setelah_Pulau_Komodo_dan_Pulau_Rinca.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://national-parks-ranking.vercel.app",
  },
  metadataBase: new URL("https://national-parks-ranking.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
