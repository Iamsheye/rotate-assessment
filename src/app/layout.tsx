import DashboardSidebar from "@/components/dashboard-sidebar";
import MenuBtn from "@/components/menu-btn";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

import "@/styles/globals.css";
import { type Metadata } from "next";
import { Public_Sans } from "next/font/google";

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
    <html lang="en" className={`${publicSans.className}`}>
      <body className="">
        <TooltipProvider delayDuration={100}>
          <SidebarProvider>
            <div className="flex grow">
              <MenuBtn />
              <DashboardSidebar />
              <div className="grow">{children}</div>
            </div>
          </SidebarProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
