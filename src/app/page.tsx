"use client";
import ContextualRisk from "@/components/contextual-risk";
import DetailsColumn from "@/components/details-column";
import FlowChart from "@/components/flow-chart";
import RiskTable from "@/components/risk-table";
import StatusLegend from "@/components/status-legend";
import { Box, Flex, Heading, VStack, Separator } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Flex
      as="main"
      direction={{ base: "column", lg: "row" }}
      minH="100vh"
      gap="5"
      px={{ base: "5", lg: "9" }}
      py={{ base: "3", lg: "7" }}
      pb={{ base: "24", lg: "7" }}
      style={{
        letterSpacing: "0.01em",
      }}>
      <DetailsColumn />

      <Box
        order={{ base: 1, lg: 2 }}
        flexGrow="1"
        h={{ lg: "calc(100dvh - 3.5rem)" }}
        overflowY="scroll"
        borderRadius="2xl"
        bg="white"
        px="6"
        py="5"
        boxShadow="0px 1px 3px 0px #0000000D">
        <VStack gap="4" align="stretch" mb="4">
          <Heading as="h2" fontWeight="700" fontSize="20px" color="#02983E">
            Lorem Lorem Lorem
          </Heading>
          <VStack
            gap="2.5"
            borderRadius="lg"
            bg="#FAFAFA"
            px="2"
            py="4"
            align="stretch">
            <FlowChart />
            <Separator borderColor="#E0E2E7" />
            <Flex wrap="wrap">
              <StatusLegend status="error" />
              <StatusLegend status="warning" />
              <StatusLegend status="success" />
            </Flex>
          </VStack>
        </VStack>

        <VStack gap="4" align="stretch">
          <Heading as="h2" fontWeight="700" fontSize="20px" color="#02983E">
            Lorem ipsum dolor sit
          </Heading>

          <Flex direction={{ base: "column", lg: "row" }} wrap="wrap" gap="4">
            <Box flex="1" flexBasis="48%">
              <RiskTable />
            </Box>
            <Flex
              grow="1"
              flexBasis="48%"
              direction="column"
              justify="space-between"
              gap="2"
              borderRadius="20px"
              borderWidth="1px"
              borderColor="#F2F3F7"
              bg="white"
              px="6"
              py="2"
              boxShadow="0px 2.9px 4px 0px #0000000D">
              <ContextualRisk />
            </Flex>
          </Flex>
        </VStack>
      </Box>
    </Flex>
  );
}
