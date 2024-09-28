import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sakhi_store-auth",
  description: "Next.js 14 Sakhi e-commerce store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
          </SignedIn>
      {children}</body>
    </html>
    </ClerkProvider>
   
  );
}
