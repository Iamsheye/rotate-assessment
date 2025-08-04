"use client";
import { Accordion as ChakraAccordion, HStack } from "@chakra-ui/react";
import * as React from "react";
import { LuChevronDown } from "react-icons/lu";

interface AccordionItemTriggerProps extends ChakraAccordion.ItemTriggerProps {
  indicatorPlacement?: "start" | "end" | "none";
}

export const AccordionItemTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionItemTriggerProps
>(function AccordionItemTrigger(props, ref) {
  const { children, indicatorPlacement, ...rest } = props;
  return (
    <ChakraAccordion.ItemTrigger {...rest} ref={ref}>
      {indicatorPlacement === "start" && (
        <ChakraAccordion.ItemIndicator
          rotate={{ base: "-90deg", _open: "0deg" }}>
          <LuChevronDown />
        </ChakraAccordion.ItemIndicator>
      )}
      <HStack gap="4" flex="1" textAlign="start" width="full">
        {children}
      </HStack>
      {indicatorPlacement === "end" && (
        <ChakraAccordion.ItemIndicator>
          <LuChevronDown />
        </ChakraAccordion.ItemIndicator>
      )}
    </ChakraAccordion.ItemTrigger>
  );
});

type AccordionItemContentProps = ChakraAccordion.ItemContentProps;

export const AccordionItemContent = React.forwardRef<
  HTMLDivElement,
  AccordionItemContentProps
>(function AccordionItemContent(props, ref) {
  return (
    <ChakraAccordion.ItemContent>
      <ChakraAccordion.ItemBody {...props} ref={ref} />
    </ChakraAccordion.ItemContent>
  );
});

export const Accordion = ChakraAccordion.Root;
export const AccordionItem = ChakraAccordion.Item;
