import DashboardSidebar from "@/components/dashboard-sidebar";
import "./globals.css";
import { type Metadata } from "next";
import { Public_Sans } from "next/font/google";
import { Provider } from "@/components/ui/provider";
import { css } from "styled-system/css";
import { Flex } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Rotate Assessment",
  description: "Rotate Assessment",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const publicSans = Public_Sans({
  variable: "--font-publicSans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${publicSans.className}`}>
      <body
        className={css({
          bg: "#fafafa",
        })}>
        <Provider>
          <Flex grow={1}>
            <DashboardSidebar />
            <div
              className={css({
                flexGrow: 1,
              })}>
              {children}
            </div>
          </Flex>
        </Provider>
      </body>
    </html>
  );
}
