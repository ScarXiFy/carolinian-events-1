import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#2563eb", // Blue-600
          colorTextOnPrimaryBackground: "#ffffff", // White
        },
        elements: {
          formButtonPrimary: "bg-blue-600 hover:bg-blue-700",
          footerActionLink: "text-blue-600 hover:text-blue-700",
        },
      }}
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      afterSignInUrl={process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL}
      afterSignUpUrl={process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL}
    >
      <html lang="en">
        <body className={`${inter.className} flex flex-col min-h-screen`}>
          <Header />
          <main className="flex-1 container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}