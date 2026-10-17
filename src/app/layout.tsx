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
  title: "PPMK Community Hub",
  description: "Self-hosted web app for Malaysian student community at Hanyang University ERICA",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-xl font-bold text-gray-800 dark:text-gray-100">PPMK Community Hub</span>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a href="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300">Home</a>
                    <a href="/students" className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300">Students</a>
                    <a href="/events" className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300">Events</a>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-baseline md:ml-6">
                  <a href="/register" className="px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">Register</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
