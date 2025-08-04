"use client";
import { IconButton } from "@chakra-ui/react";
import { Menu } from "lucide-react";
import React from "react";
import { css } from "../../styled-system/css";

const MenuBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <IconButton
      onClick={onClick}
      aria-label="Toggle sidebar"
      className={css({
        position: "fixed",
        left: "3",
        top: "6",
        display: { base: "flex", md: "none" },
        height: "12",
        width: "12",
        borderRadius: "full",
        bg: "white",
        boxShadow: "xs",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
      })}>
      <Menu
        className={css({
          height: "8",
          width: "8",
          color: "gray.700",
        })}
      />
    </IconButton>
  );
};

export default MenuBtn;
