import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/context/them-provider";

const jakarta = Plus_Jakarta_Sans({subsets:['latin']})
export const metadata: Metadata = {
  title: "Corinna AI",
  description: "Precision meets speed, powered intelligently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <ClerkProvider>
    <html lang="en">
      <body
        className={jakarta.className}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
          >
        {children}
        <Toaster />
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
