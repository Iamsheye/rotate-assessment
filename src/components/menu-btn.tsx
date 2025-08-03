"use client";
import { Menu } from "lucide-react";
import React from "react";
import { useSidebar } from "./ui/sidebar";

const MenuBtn = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className="shadow-xsm fixed left-3 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white md:hidden"
    >
      <Menu className="h-8 w-8 text-gray-soft-700" />
    </button>
  );
};

export default MenuBtn;
