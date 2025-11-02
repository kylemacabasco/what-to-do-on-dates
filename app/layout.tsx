import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import "./globals.css";

export const metadata: Metadata = {
  title: "Togetha Foreva | Spontaneous Date Randomizer for Couples",
  description: "Can't decide what to do? Stop being indecisive! Get instant random date ideas for couples who are bored and need help choosing activities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="font-sans antialiased">
          <header 
            className="flex justify-end items-center px-6 py-4"
            style={{ background: 'var(--bg)', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}
          >
            <div className="flex items-center gap-3">
              <SignedOut>
                <SignInButton mode="modal">
                  <button 
                    className="text-sm font-medium px-5 py-2 rounded-full transition-all"
                    style={{ 
                      background: 'var(--primary)',
                      color: 'white'
                    }}
                  >
                    Sign in
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-9 h-9"
                    }
                  }}
                />
              </SignedIn>
            </div>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}