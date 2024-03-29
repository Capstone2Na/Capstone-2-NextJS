import "./globals.css";
import { Noto_Sans } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ClerkProvider } from "@clerk/nextjs";
import { appLabels } from "./appLabels";
import Providers from "./providers";
import { Metadata, Viewport } from "next";
import { dark, neobrutalism, shadesOfPurple } from '@clerk/themes';

const appFont = Noto_Sans({
  subsets: ["cyrillic"],
});

const APP_NAME = appLabels.title;
const APP_DEFAULT_TITLE = appLabels.title;
const APP_TITLE_TEMPLATE = `%s - ${appLabels.title}`;
const APP_DESCRIPTION = appLabels.description;

export const metadata: Metadata = {
  manifest: "/manifest.json",
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
    startupImage: ["/HydroSync/black.png"],
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
    <ClerkProvider 
    appearance={{
      baseTheme:neobrutalism
    }}
    >
      <html lang="en">
        <AppRouterCacheProvider>
          <body
            className={`${appFont.className} mx-auto flex flex-col justify-between bg-secondary text-secondary font-normal w-screen h-lvh min-h-lvh`}
          >
            <Providers>{children}</Providers>
          </body>
        </AppRouterCacheProvider>
      </html>
    </ClerkProvider>
  );
}
