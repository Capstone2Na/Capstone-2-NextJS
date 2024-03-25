import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";
import { Noto_Sans } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import { ClerkProvider } from "@clerk/nextjs";

const inter = Noto_Sans({
  subsets: ["cyrillic"],
  weight: "300",
});

export const metadata = {
  title: "Capstone 2",
  description: "Capstone 2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <AppRouterCacheProvider>
          <ThemeProvider>
            <body className={inter.className}>{children}</body>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </html>
    </ClerkProvider>
  );
}
