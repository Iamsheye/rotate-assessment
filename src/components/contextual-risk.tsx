import { Text, Box, Flex, Grid, VStack } from "@chakra-ui/react";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const ContextualRisk = () => {
  const CONTEXTUAL_RISK = [
    { text: "Critical", value: 2, color: "#C6190D" },
    { text: "High", value: 0, color: "#E5372B" },
    { text: "Medium", value: 0, color: "#EBA622" },
    { text: "Low", value: 0, color: "#08B94E" },
  ];

  return (
    <VStack align="stretch" gap="4">
      <Text
        fontSize="1.125rem"
        fontWeight="500"
        lineHeight="1.75"
        color="#667085">
        Contextual Risk
      </Text>
      <Flex
        align="center"
        justify="space-between"
        wrap="wrap"
        gap="2"
        fontFamily={inter.style.fontFamily}>
        <VStack align="stretch" gap="4">
          {CONTEXTUAL_RISK.map((risk) => (
            <Flex
              key={risk.text}
              align="center"
              gap="1"
              fontSize="1rem"
              lineHeight="1.25"
              color="#383874">
              <Box h="0.5rem" w="0.5rem" borderRadius="full" bg={risk.color} />
              <Text>{risk.value}</Text>
              <Text>{risk.text}</Text>
            </Flex>
          ))}
        </VStack>

        <Grid
          h="9rem"
          w="9rem"
          placeItems="center"
          borderRadius="full"
          border="8px solid #C6190D">
          <Text
            fontSize="2.25rem"
            fontWeight="semibold"
            lineHeight="1.75rem"
            color="#656575">
            2
          </Text>
        </Grid>
      </Flex>
    </VStack>
  );
};

export default ContextualRisk;
