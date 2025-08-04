"use client";
import {
  Popover as ChakraPopover,
  Portal,
  PopoverAnchor,
  PopoverArrow,
  PopoverBody,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverPositioner,
  PopoverTrigger,
} from "@chakra-ui/react";
import * as React from "react";

export const Popover = (props: ChakraPopover.RootProps) => (
  <ChakraPopover.Root {...props} />
);

export {
  PopoverAnchor,
  PopoverArrow,
  PopoverBody,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverPositioner,
  PopoverTrigger,
  Portal,
};
