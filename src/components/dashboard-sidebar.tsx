"use client";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar";
import Link from "next/link";
import DashboardIcon from "@/assets/dashboard-icon";
import TriangleAlert from "@/assets/triangle-alert";
import CuboidIcon from "@/assets/cuboid-icon";
import ShrinkIcon from "@/assets/shrink-icon";
import UnplugIcon from "@/assets/unplug-icon";
import DocIcon from "@/assets/doc-icon ";
import BarsIcon from "@/assets/bars-icon";
import SettingsIcon from "@/assets/settings-icon ";
import NotificationIcon from "@/assets/notification-icon";
import LogoutIcon from "@/assets/logout-icon";
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";

const DashboardSidebar = () => {
  const { state, toggleSidebar, openMobile } = useSidebar();

  const MENU = [
    {
      icon: DashboardIcon,
      label: "Lorem",
    },
    {
      icon: TriangleAlert,
      label: "Lorem",
    },
    {
      icon: CuboidIcon,
      label: "Lorem",
    },
    {
      icon: ShrinkIcon,
      label: "Lorem",
      active: true,
    },
    {
      icon: UnplugIcon,
      label: "Lorem",
    },
    {
      icon: DocIcon,
      label: "Lorem",
    },
    {
      icon: BarsIcon,
      label: "Lorem",
    },
  ];

  const BOTTOM_MENU = [
    {
      icon: SettingsIcon,
      label: "Lorem",
    },
    {
      icon: NotificationIcon,
      label: "Lorem",
    },
  ];

  const isCollapsed = state === "collapsed";

  return (
    <Sidebar
      className="flex items-center gap-2 rounded-xl border-none px-4 py-7 font-[0.9375rem] leading-[1.375rem] shadow-bg_md"
      collapsible="icon"
    >
      <button
        onClick={toggleSidebar}
        className={`absolute -right-4 top-6 grid h-8 w-8 place-content-center rounded-full border-[3px] border-gray-50 bg-[#00732E] ${isCollapsed ? "hidden group-hover:grid" : "md:grid"} hidden duration-300`}
      >
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${isCollapsed ? "rotate-180 transform" : ""} duration-300`}
        >
          <path
            d="M6.4 12.4L1 6.99998L6.4 1.59998"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className={openMobile ? "px-4 pt-7" : ""}>
        <SidebarHeader
          className={`${isCollapsed ? "justify-center px-0" : "px-3"} mb-7 flex flex-row items-center gap-2 py-0`}
        >
          {/* TODO: Put logo here, use isCollapsed for collapsed check */}
        </SidebarHeader>
      </div>

      <SidebarContent className={openMobile ? "px-4" : ""}>
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="gap-1.5">
              {MENU.map((item, index) =>
                isCollapsed ? (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <Link
                        href={""}
                        className={`${item.active ? "bg-[#E9FAF0]" : ""} rounded-lg p-2 hover:bg-sidebar-accent`}
                      >
                        <item.icon className="!h-5 !w-5" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent
                      side="right"
                      className="rounded-lg bg-[#E9FAF0] px-2 py-0.5"
                    >
                      <p className="text-black">{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                ) : (
                  <SidebarMenuItem
                    key={index}
                    className={`${item.active ? "bg-[#E9FAF0]" : ""} rounded-lg hover:bg-sidebar-accent`}
                  >
                    <SidebarMenuButton asChild>
                      <Link href={""} className={`h-auto px-3 py-2.5`}>
                        <item.icon className="!h-5 !w-5" />
                        <span className="text-gray-soft-700">{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ),
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <div className={openMobile ? "px-4 pb-7" : ""}>
        <SidebarFooter className="flex flex-col items-center gap-5 p-0">
          <SidebarMenu className="gap-2">
            {BOTTOM_MENU.map((item, index) =>
              isCollapsed ? (
                <Link
                  key={index}
                  href={""}
                  className="rounded-lg p-2 hover:bg-sidebar-accent"
                >
                  <item.icon className="!h-5 !w-5" />
                </Link>
              ) : (
                <SidebarMenuItem
                  key={index}
                  className="rounded-lg hover:bg-sidebar-accent"
                >
                  <SidebarMenuButton asChild>
                    <Link href={""} className={`h-auto px-3 py-2.5`}>
                      <item.icon className="!h-5 !w-5" />
                      <span className="text-gray-soft-700">{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ),
            )}
          </SidebarMenu>

          <hr className="h-[1px] w-full bg-[#F9F9F9]" />

          {isCollapsed ? (
            <>
              <Image
                width={36}
                height={36}
                src={"/user-img.png"}
                alt="User Img"
              />
            </>
          ) : (
            <div className="flex w-full items-center justify-between gap-2">
              <div className="flex gap-3">
                <Image
                  width={48}
                  height={48}
                  src={"/user-img.png"}
                  alt="User Img"
                />
                <div className="flex flex-col">
                  <p className="">Lorem</p>
                  <p className="">Lorem</p>
                </div>
                <div className=""></div>
              </div>

              <LogoutIcon className="!h-[18px] !w-[18px]" />
            </div>
          )}
        </SidebarFooter>
      </div>
    </Sidebar>
  );
};

export default DashboardSidebar;
