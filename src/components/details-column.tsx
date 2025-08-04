import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { Check } from "lucide-react";

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
      bg="white"
      px="6"
      py="5"
      boxShadow="0px 1px 3px 0px #0000000D">
      <VStack align="stretch">
        <VStack gap="8" mb="6">
          <VStack gap="3" alignItems="flex-start" lineHeight="1.375rem">
            <Heading as="h2" fontSize="20px" fontWeight="700" color="#02983E">
              Description
            </Heading>
            <Text
              fontSize="12px"
              fontWeight="400"
              lineHeight="1.75em"
              letterSpacing="1%"
              color="#525D73">
              Lorem ipsum dolor sit amet consectetur. Aenean sodales
              pellentesque gravida nibh et magna faucibus. Dui commodo ut metus
              amet egestas habitant viverra. Quisque fusce senectus facilisis
              non diam leo nulla sem pellentesque. Sit in vel sed cursus metus
              sit fringilla vestibulum.
            </Text>
          </VStack>

          <VStack gap="3" alignItems="flex-start" lineHeight="1.375rem">
            <Heading as="h2" fontSize="20px" fontWeight="700" color="#02983E">
              Extra
            </Heading>
            <Text
              fontSize="12px"
              fontWeight="400"
              lineHeight="1.75em"
              letterSpacing="1%"
              color="#525D73">
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

        <Box height="0" borderBottom="1px solid #E0E2E7" />

        {List.map((item, index) => (
          <Flex key={index} alignItems="center" gap="5" fontSize="0.9375rem">
            <Text
              fontWeight="700"
              textTransform="capitalize"
              color="#334155"
              flexShrink={0}>
              Lorem ipsum dolor
            </Text>
            <Flex align="center" gap="1">
              {item.hasCheck && <Check size={16} color="#08B94E" />}

              <Text color="#525D73">{item.value}</Text>
            </Flex>
          </Flex>
        ))}

        <Box height="0" borderBottom="1px solid #E0E2E7" />

        <VStack gap="3" align="stretch">
          <Text fontWeight="700" textTransform="capitalize" color="#334155">
            Lorem ipsum dolor sit
          </Text>

          <Accordion multiple variant="plain">
            <VStack gap="5" align="stretch">
              {AccordionList.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={item.title}
                  borderRadius="16px"
                  border="1px solid #F0F1F3"
                  bg="white"
                  px="4"
                  py="3">
                  <AccordionItemTrigger indicatorPlacement="none">
                    <VStack
                      cursor="pointer"
                      gap="12px"
                      align="stretch"
                      w="full">
                      <Text fontSize="15px" fontWeight="700" color="#030229">
                        {item.title}
                      </Text>

                      <Flex
                        flexWrap={{
                          base: "wrap",
                          xl: "nowrap",
                        }}
                        align="center"
                        gap="4"
                        borderRadius="lg"
                        bg="#FAFAFA"
                        px="16px"
                        py="6px">
                        <Flex
                          align="center"
                          gap="2"
                          pr={{ xl: "4" }}
                          borderRight={{ xl: "1px solid #858D9D" }}>
                          <StacksIcon />

                          <VStack gap="2px" align="flex-start">
                            <Text
                              fontSize="12px"
                              fontWeight="600"
                              lineHeight="0.875em"
                              color="#404A60">
                              Server
                            </Text>
                            <Text
                              fontSize="10px"
                              fontWeight="500"
                              color="#667085">
                              Server
                            </Text>
                          </VStack>
                        </Flex>

                        <Text fontSize="14px" color="#404A60">
                          Lorem ipsum dolor sit amet consectetur.
                        </Text>
                      </Flex>
                    </VStack>
                  </AccordionItemTrigger>
                  <AccordionItemContent padding={0}>
                    <Text pt="4" fontSize="15px" color="#525D73">
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
