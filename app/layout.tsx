import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";
import { Noto_Sans } from "next/font/google";
// import { StyledEngineProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import PageBottomButtons from "@/components/2md/PageBottomButtons";
import PageUpper from "@/components/2md/PageUpper";

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
    <html lang="en">
      <AppRouterCacheProvider
        options={
          {
            // enableCssLayer: true,
            // prepend: true,
          }
        }
      >
        <ThemeProvider>
          <body
            className={`${inter.className} flex section section flex-col justify-between bg-secondary text-secondary w-screen `}
          >
            <PageUpper />
            <div className="h-lvh">{children}</div>
            <PageBottomButtons />
          </body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
