import { Text, Box, Flex, Grid, VStack } from "@chakra-ui/react";
import React from "react";
import { Inter } from "next/font/google";
import { token } from "../../styled-system/tokens";

const inter = Inter({
  subsets: ["latin"],
});

const ContextualRisk = () => {
  const CONTEXTUAL_RISK = [
    { text: "Critical", value: 2, color: token("colors.error.700") },
    { text: "High", value: 0, color: token("colors.error.500") },
    { text: "Medium", value: 0, color: token("colors.warning.500") },
    { text: "Low", value: 0, color: token("colors.success.600") },
  ];

  return (
    <VStack align="stretch" gap="4">
      <Text
        fontSize={token("fontSizes.xl")}
        fontWeight={token("fontWeights.medium")}
        lineHeight={token("lineHeights.spacious")}
        color={token("colors.gray.800")}>
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
              fontSize={token("fontSizes.lg")}
              lineHeight={token("lineHeights.normal")}
              color={token("colors.text.tertiary")}>
              <Box
                h={token("spacing.2")}
                w={token("spacing.2")}
                borderRadius="full"
                bg={risk.color}
              />
              <Text>{risk.value}</Text>
              <Text>{risk.text}</Text>
            </Flex>
          ))}
        </VStack>

        <Grid
          h={token("spacing.36")}
          w={token("spacing.36")}
          placeItems="center"
          borderRadius="full"
          border={`${token("borders.thick")} ${token("colors.error.700")}`}>
          <Text
            fontSize={token("fontSizes.3xl")}
            fontWeight="600"
            lineHeight={token("lineHeights.spacious")}
            color={token("colors.text.subtle")}>
            2
          </Text>
        </Grid>
      </Flex>
    </VStack>
  );
};

export default ContextualRisk;
