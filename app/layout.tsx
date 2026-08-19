import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { BackToTop } from "@/components/layout/back-to-top";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { SiteBackground } from "@/components/layout/site-background";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { JsonLd } from "@/components/seo/json-ld";
import { personJsonLd, websiteJsonLd } from "@/lib/json-ld";
import { defaultMetadata } from "@/lib/seo";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jakarta.variable} ${jetbrains.variable} dark h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <JsonLd data={personJsonLd()} />
          <JsonLd data={websiteJsonLd()} />
          <SiteBackground />
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
