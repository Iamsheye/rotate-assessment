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
// import MenuBtn from "./menu-btn";
import { token } from "../../styled-system/tokens";

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
      strokeWidth={token("borderWidths.1.8")}
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
        bg={token("colors.background.primary")}
        borderRadius="xl"
        boxShadow={token("shadows.lg")}
        p={
          isCollapsed
            ? `${token("spacing.7")} ${token("spacing.5")}`
            : token("spacing.7")
        }
        position="relative"
        width={isCollapsed ? "80px" : "250px"}
        transition="width 0.3s ease"
        height={token("sizes.100vh")}>
        <IconButton
          aria-label="Toggle Sidebar"
          onClick={toggleSidebar}
          size="sm"
          position="absolute"
          top={token("spacing.6")}
          right="-16px"
          bg={token("colors.primary.600")}
          color={token("colors.background.primary")}
          borderRadius="full"
          border={`3px solid ${token("colors.background.primary")}`}
          boxShadow={token("shadows.button")}
          _hover={{ bg: token("colors.primary.700") }}
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
                  bg={item.active ? token("colors.primary.50") : "transparent"}
                  color={
                    item.active
                      ? token("colors.primary.800")
                      : token("colors.gray.700")
                  }
                  _hover={{
                    bg: item.active
                      ? token("colors.primary.50")
                      : token("colors.gray.50"),
                  }}
                  borderRadius="8px"
                  px={isCollapsed ? "2" : "3"}
                  py="2.5"
                  h="auto"
                  minH="10"
                  fontSize={token("fontSizes.base")}
                  fontWeight={token("fontWeights.normal")}>
                  <Box
                    color={
                      item.active
                        ? token("colors.primary.800")
                        : token("colors.gray.600")
                    }
                    flexShrink={0}>
                    <item.icon />
                  </Box>
                  {!isCollapsed && (
                    <Text
                      ml="2"
                      fontSize={token("fontSizes.base")}
                      fontWeight={token("fontWeights.normal")}
                      color={
                        item.active
                          ? token("colors.primary.800")
                          : token("colors.gray.700")
                      }
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
                  color={token("colors.gray.700")}
                  _hover={{ bg: token("colors.gray.50") }}
                  borderRadius="8px"
                  px={isCollapsed ? "2" : "3"}
                  py="2.5"
                  h="auto"
                  minH="10"
                  fontSize={token("fontSizes.base")}
                  fontWeight={token("fontWeights.normal")}>
                  <Box color={token("colors.gray.600")} flexShrink={0}>
                    <item.icon />
                  </Box>
                  {!isCollapsed && (
                    <Text
                      ml="2"
                      fontSize={token("fontSizes.base")}
                      fontWeight={token("fontWeights.normal")}
                      color={token("colors.gray.700")}
                      textTransform="capitalize">
                      {item.label}
                    </Text>
                  )}
                </Button>
              </Tooltip>
            ))}
          </VStack>

          <Separator borderColor={token("colors.gray.900")} />

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
                      fontSize={token("fontSizes.base")}
                      fontWeight={token("fontWeights.normal")}
                      color={token("colors.gray.700")}
                      lineHeight={token("lineHeights.loose")}>
                      Lorem
                    </Text>
                    <Text
                      fontSize={token("fontSizes.base")}
                      fontWeight={token("fontWeights.normal")}
                      color={token("colors.gray.700")}
                      lineHeight={token("lineHeights.loose")}>
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
