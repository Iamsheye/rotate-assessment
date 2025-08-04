"use client";
import Image from "next/image";
import {
  Box,
  VStack,
  HStack,
  Button,
  IconButton,
  Separator,
  Text,
} from "@chakra-ui/react";
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
import React from "react";
import { Tooltip } from "./ui/tooltip";
import MenuBtn from "./menu-btn";

const Chevron = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="8"
    height="14"
    viewBox="0 0 8 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M6.4 12.4L1 6.99998L6.4 1.59998"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DashboardSidebar = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const MENU_ITEMS = [
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

  const BOTTOM_MENU_ITEMS = [
    {
      icon: SettingsIcon,
      label: "Lorem",
    },
    {
      icon: NotificationIcon,
      label: "Lorem",
    },
  ];

  return (
    <>
      {/* <MenuBtn onClick={toggleSidebar} /> */}
      <Box
        as="aside"
        role="navigation"
        aria-label="Main navigation"
        bg="white"
        borderRadius="xl"
        boxShadow="0px 16px 18px 0px rgba(0, 0, 0, 0.06)"
        p={isCollapsed ? "28px 20px" : "7"}
        position="relative"
        width={isCollapsed ? "80px" : "250px"}
        transition="width 0.3s ease"
        height="100vh">
        <IconButton
          aria-label="Toggle Sidebar"
          onClick={toggleSidebar}
          size="sm"
          position="absolute"
          top="24px"
          right="-16px"
          bg="#00732E"
          color="white"
          borderRadius="full"
          border="3px solid white"
          boxShadow="0px 1px 4px 0px rgba(12, 12, 13, 0.05)"
          _hover={{ bg: "#005c24" }}
          // display={{ base: "none", md: "none" }}
          // _groupHover={{ display: { base: "none", md: "flex" } }}
          zIndex={10}>
          <Chevron
            style={{
              transform: isCollapsed ? "rotate(180deg)" : "none",
              transition: "transform 0.3s",
              width: "8px",
              height: "14px",
            }}
          />
        </IconButton>

        <VStack gap="6" h="full" align="stretch">
          <VStack as="nav" gap="1.5" align="stretch" flex="1">
            {MENU_ITEMS.map((item, index) => (
              <Tooltip
                key={index}
                content={item.label}
                disabled={!isCollapsed}
                positioning={{ placement: "right" }}>
                <Button
                  variant={item.active ? "solid" : "ghost"}
                  colorPalette={item.active ? "green" : "gray"}
                  justifyContent={isCollapsed ? "center" : "flex-start"}
                  w="full"
                  bg={item.active ? "#E9FAF0" : "transparent"}
                  color={item.active ? "#00481D" : "#525D73"}
                  _hover={{
                    bg: item.active ? "#E9FAF0" : "#F0F1F3",
                  }}
                  borderRadius="8px"
                  px={isCollapsed ? "2" : "3"}
                  py="2.5"
                  h="auto"
                  minH="10"
                  fontSize="15px"
                  fontWeight="400">
                  <Box
                    color={item.active ? "#00481D" : "#A3A9B6"}
                    flexShrink={0}>
                    <item.icon />
                  </Box>
                  {!isCollapsed && (
                    <Text
                      ml="2"
                      fontSize="15px"
                      fontWeight="400"
                      color={item.active ? "#00481D" : "#525D73"}
                      textTransform="capitalize">
                      {item.label}
                    </Text>
                  )}
                </Button>
              </Tooltip>
            ))}
          </VStack>

          <VStack gap="2" align="stretch">
            {BOTTOM_MENU_ITEMS.map((item, index) => (
              <Tooltip
                key={index}
                content={item.label}
                disabled={!isCollapsed}
                positioning={{ placement: "right" }}>
                <Button
                  variant="ghost"
                  justifyContent={isCollapsed ? "center" : "flex-start"}
                  w="full"
                  color="#525D73"
                  _hover={{ bg: "#F0F1F3" }}
                  borderRadius="8px"
                  px={isCollapsed ? "2" : "3"}
                  py="2.5"
                  h="auto"
                  minH="10"
                  fontSize="15px"
                  fontWeight="400">
                  <Box color="#A3A9B6" flexShrink={0}>
                    <item.icon />
                  </Box>
                  {!isCollapsed && (
                    <Text
                      ml="2"
                      fontSize="15px"
                      fontWeight="400"
                      color="#525D73"
                      textTransform="capitalize">
                      {item.label}
                    </Text>
                  )}
                </Button>
              </Tooltip>
            ))}
          </VStack>

          <Separator borderColor="#F9F9F9" />

          <HStack
            gap="3"
            p={isCollapsed ? "0" : "3"}
            justify={isCollapsed ? "center" : "space-between"}
            align="center">
            {!isCollapsed ? (
              <>
                <HStack gap="3" flex="1">
                  <Box
                    w="12"
                    h="12"
                    borderRadius="full"
                    overflow="hidden"
                    flexShrink={0}>
                    <Image
                      src="/user-img.png"
                      alt="Profile"
                      width={48}
                      height={48}
                      style={{ borderRadius: "50%" }}
                    />
                  </Box>
                  <VStack gap="0" align="start" flex="1">
                    <Text
                      fontSize="15px"
                      fontWeight="400"
                      color="#525D73"
                      lineHeight="1.4">
                      Lorem
                    </Text>
                    <Text
                      fontSize="15px"
                      fontWeight="400"
                      color="#525D73"
                      lineHeight="1.4">
                      Lorem
                    </Text>
                  </VStack>
                </HStack>

                <button
                  aria-label="Logout"
                  style={{
                    cursor: "pointer",
                  }}>
                  <LogoutIcon />
                </button>
              </>
            ) : (
              <Tooltip content="Logout" positioning={{ placement: "right" }}>
                <button
                  aria-label="Logout"
                  style={{
                    cursor: "pointer",
                  }}>
                  <LogoutIcon />
                </button>
              </Tooltip>
            )}
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default DashboardSidebar;
