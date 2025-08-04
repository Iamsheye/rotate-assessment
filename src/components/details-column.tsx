import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { Check } from "lucide-react";
import { token } from "../../styled-system/tokens";

import StacksIcon from "@/assets/stacks-icon";
import {
  Accordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
} from "./ui/accordion";

const DetailsColumn = () => {
  const List = [
    { value: "10/19/2017" },
    { value: "Ut" },
    { value: "Eros" },
    { value: "Eros" },
    { value: "Yes", hasCheck: true },
    { value: "Sit" },
    { value: "Lorem ipsum dolor" },
    { value: "Lorem ipsum dolor" },
  ];

  const AccordionList = [
    { title: "Lorem P" },
    { title: "Lorem S" },
    { title: "Lorem T" },
  ];

  return (
    <Box
      as="aside"
      order={{ base: 2, lg: 1 }}
      h={{ base: "full", lg: "calc(100dvh - 3.5rem)" }}
      flexGrow={0}
      flexBasis={{ lg: "31%" }}
      overflowY="scroll"
      borderRadius="2xl"
      bg={token("colors.background.primary")}
      px={token("spacing.6")}
      py={token("spacing.5")}
      boxShadow={token("shadows.xs")}>
      <VStack align="stretch">
        <VStack gap={token("spacing.8")} mb={token("spacing.6")}>
          <VStack
            gap={token("spacing.3")}
            alignItems="flex-start"
            lineHeight={token("lineHeights.relaxed")}>
            <Heading
              as="h2"
              fontSize={token("fontSizes.2xl")}
              fontWeight={token("fontWeights.bold")}
              color={token("colors.primary.500")}>
              Description
            </Heading>
            <Text
              fontSize={token("fontSizes.sm")}
              fontWeight={token("fontWeights.normal")}
              lineHeight={token("lineHeights.extraSpacious")}
              letterSpacing="1%"
              color={token("colors.gray.900")}>
              Lorem ipsum dolor sit amet consectetur. Aenean sodales
              pellentesque gravida nibh et magna faucibus. Dui commodo ut metus
              amet egestas habitant viverra. Quisque fusce senectus facilisis
              non diam leo nulla sem pellentesque. Sit in vel sed cursus metus
              sit fringilla vestibulum.
            </Text>
          </VStack>

          <VStack
            gap={token("spacing.3")}
            alignItems="flex-start"
            lineHeight={token("lineHeights.relaxed")}>
            <Heading
              as="h2"
              fontSize={token("fontSizes.2xl")}
              fontWeight={token("fontWeights.bold")}
              color={token("colors.primary.500")}>
              Extra
            </Heading>
            <Text
              fontSize={token("fontSizes.sm")}
              fontWeight={token("fontWeights.normal")}
              lineHeight={token("lineHeights.extraSpacious")}
              letterSpacing="1%"
              color={token("colors.gray.900")}>
              Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing
              fames egestas tellus dis pretium tempus. Justo nisl nisl lorem
              lectus id ornare. Rhoncus in egestas in amet porttitor
              pellentesque sit. Amet gravida integer velit felis. Eu consectetur
              interdum auctor sed aliquam. Eu pulvinar accumsan sed id. Duis a
              aliquam eu quisque commodo lectus. Lectus ipsum velit purus
              viverra vulputate viverra in nunc nulla. Euismod rhoncus mauris
              urna orci gravida sagittis netus. Amet mus in vel etiam. Interdum
              habitant congue massa in etiam sit. Commodo nibh viverra lobortis
              augue lorem quam lorem suspendisse.
            </Text>
          </VStack>
        </VStack>

        <Box
          height="0"
          borderBottom={`${token("borders.base")} ${token("colors.gray.400")}`}
        />

        {List.map((item, index) => (
          <Flex
            key={index}
            alignItems="center"
            gap={token("spacing.5")}
            fontSize={token("fontSizes.base")}>
            <Text
              fontWeight={token("fontWeights.bold")}
              textTransform="capitalize"
              color={token("colors.text.secondary")}
              flexShrink={0}>
              Lorem ipsum dolor
            </Text>
            <Flex align="center" gap={token("spacing.1")}>
              {item.hasCheck && (
                <Check size={16} color={token("colors.success.600")} />
              )}

              <Text color={token("colors.gray.900")}>{item.value}</Text>
            </Flex>
          </Flex>
        ))}

        <Box
          height="0"
          borderBottom={`${token("borders.base")} ${token("colors.gray.400")}`}
        />

        <VStack gap={token("spacing.3")} align="stretch">
          <Text
            fontWeight={token("fontWeights.bold")}
            textTransform="capitalize"
            color={token("colors.text.secondary")}>
            Lorem ipsum dolor sit
          </Text>

          <Accordion multiple variant="plain">
            <VStack gap={token("spacing.5")} align="stretch">
              {AccordionList.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={item.title}
                  borderRadius={token("radii.2xl")}
                  border={`${token("borders.base")} ${token("colors.gray.300")}`}
                  bg={token("colors.background.primary")}
                  px={token("spacing.4")}
                  py={token("spacing.3")}>
                  <AccordionItemTrigger indicatorPlacement="none">
                    <VStack
                      cursor="pointer"
                      gap={token("spacing.3")}
                      align="stretch"
                      w="full">
                      <Text
                        fontSize={token("fontSizes.base")}
                        fontWeight={token("fontWeights.bold")}
                        color={token("colors.text.primary")}>
                        {item.title}
                      </Text>

                      <Flex
                        flexWrap={{
                          base: "wrap",
                          xl: "nowrap",
                        }}
                        align="center"
                        gap={token("spacing.4")}
                        borderRadius="lg"
                        bg={token("colors.background.secondary")}
                        px={token("spacing.4")}
                        py={token("spacing.1.5")}>
                        <Flex
                          align="center"
                          gap={token("spacing.2")}
                          pr={{ xl: token("spacing.4") }}
                          borderRight={{
                            xl: `${token("borders.base")} ${token("colors.gray.700")}`,
                          }}>
                          <StacksIcon />

                          <VStack gap="2px" align="flex-start">
                            <Text
                              fontSize={token("fontSizes.sm")}
                              fontWeight={token("fontWeights.semibold")}
                              lineHeight={token("lineHeights.snug")}
                              color={token("colors.gray.900")}>
                              Server
                            </Text>
                            <Text
                              fontSize={token("fontSizes.xs")}
                              fontWeight={token("fontWeights.medium")}
                              color={token("colors.gray.500")}>
                              Server
                            </Text>
                          </VStack>
                        </Flex>

                        <Text
                          fontSize={token("fontSizes.md")}
                          color={token("colors.text.muted")}>
                          Lorem ipsum dolor sit amet consectetur.
                        </Text>
                      </Flex>
                    </VStack>
                  </AccordionItemTrigger>
                  <AccordionItemContent padding={0}>
                    <Text
                      pt={token("spacing.4")}
                      fontSize={token("fontSizes.base")}
                      color={token("colors.gray.900")}>
                      Lorem ipsum dolor sit amet consectetur. Nunc Vitae Tortor
                      Convallis Vitae Arcu Magna
                    </Text>
                  </AccordionItemContent>
                </AccordionItem>
              ))}
            </VStack>
          </Accordion>
        </VStack>
      </VStack>
    </Box>
  );
};

export default DetailsColumn;
