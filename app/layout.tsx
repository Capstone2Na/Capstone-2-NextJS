import "./globals.css";
import { Noto_Sans } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ClerkProvider } from "@clerk/nextjs";
import { appLabels } from "./appLabels";
import Providers from "./providers";
import { Metadata, Viewport } from "next";

const inter = Noto_Sans({
  subsets: ["cyrillic"],
  weight: "300",
});

const APP_NAME = appLabels.title;
const APP_DEFAULT_TITLE = appLabels.title;
const APP_TITLE_TEMPLATE = `%s - ${appLabels.title}`;
const APP_DESCRIPTION = appLabels.tagLine;

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
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
