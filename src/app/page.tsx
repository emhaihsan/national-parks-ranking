"use client";

import { useState, useEffect } from "react";
import { ParkProvider } from "@/context/ParkContext";
import Header from "@/components/Header";
import Matchup from "@/components/Matchup";
import Rankings from "@/components/Rankings";
import RecentVotes from "@/components/RecentVotes";
import EloExplanation from "@/components/EloExplanation";
import Footer from "@/components/Footer";
import Script from "next/script";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"vote" | "rankings">("vote");
  
  // JSON-LD structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Indonesian National Parks Ranking",
    "description": "Vote for your favorite Indonesian National Parks and see how they rank based on the ELO rating system.",
    "applicationCategory": "LifestyleApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "National Parks Ranking Team"
    },
    "about": {
      "@type": "Thing",
      "name": "Indonesian National Parks",
      "description": "Indonesia's national parks are protected areas of forest with high conservation value that protect the country's biodiversity."
    }
  };

  return (
    <ParkProvider>
      <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
        {/* Add structured data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        <Header />
        
        <main className="flex-1 container mx-auto p-4 md:p-6">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
            <button
              className={`py-2 px-4 text-sm font-medium ${
                activeTab === "vote"
                  ? "text-green-600 border-b-2 border-green-600 dark:text-green-400 dark:border-green-400"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("vote")}
              aria-label="Vote on Parks"
            >
              Vote on Parks
            </button>
            <button
              className={`py-2 px-4 text-sm font-medium ${
                activeTab === "rankings"
                  ? "text-green-600 border-b-2 border-green-600 dark:text-green-400 dark:border-green-400"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("rankings")}
              aria-label="View Rankings"
            >
              View Rankings
            </button>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Matchup or Rankings */}
            <div className="lg:col-span-2">
              {activeTab === "vote" ? (
                <Matchup />
              ) : (
                <Rankings />
              )}
            </div>

            {/* Right Column - Recent Votes and ELO Explanation */}
            <div className="space-y-6">
              <RecentVotes />
              <EloExplanation />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </ParkProvider>
  );
}
