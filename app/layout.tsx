import "./globals.css";
import { Noto_Sans } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ClerkProvider } from "@clerk/nextjs";
import { appLabels } from "./appLabels";
import Providers from "./providers";

const inter = Noto_Sans({
  subsets: ["cyrillic"],
  weight: "300",
});

export const metadata = {
  title: appLabels.title,
  description: "Capstone Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <AppRouterCacheProvider>
          <body className={inter.className}>
            <Providers>{children}</Providers>
          </body>
        </AppRouterCacheProvider>
      </html>
    </ClerkProvider>
  );
}
