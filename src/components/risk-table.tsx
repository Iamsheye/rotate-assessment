import StacksIcon from "@/assets/stacks-icon";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Table, Flex, Box, Text, VStack } from "@chakra-ui/react";

const RiskTable = () => {
  const RISKS = [
    { name: "Loremipsumdolorsit", ip: "192.168.1.1", risk: "critical" },
    { name: "Loremipsumdolorsit", ip: "192.168.1.1", risk: "critical" },
  ];

  return (
    <Table.ScrollArea
      w="full"
      borderRadius="lg"
      border="1px solid"
      borderColor="#E0E2E7">
      <Table.Root>
        <Table.Header>
          <Table.Row>
            {["Asset", "Contextual Risk"].map((header) => (
              <Table.ColumnHeader
                key={header}
                borderBottom="1px solid"
                borderColor="#E0E2E7"
                px="6"
                py="2.5"
                fontSize="0.875rem"
                lineHeight="1.25rem"
                color="#858D9D"
                bg="white">
                {header}
              </Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body bg="white">
          {RISKS.map((risk, index) => (
            <Table.Row key={risk.ip + index} bg="white">
              <Table.Cell
                borderBottom="1px solid"
                borderColor="#E0E2E7"
                p="2.5">
                <Flex align="center" gap="2">
                  <Box
                    as={StacksIcon}
                    h={{ base: 7, md: 9, lg: 11 }}
                    w={{ base: 8, md: 9, lg: 11 }}
                    flexShrink={0}
                  />
                  <VStack align="start" gap={0}>
                    <Text
                      mb="1"
                      fontSize="0.75rem"
                      fontWeight="600"
                      lineHeight="0.875rem"
                      color="#525D73">
                      {risk.name}
                    </Text>
                    <Text
                      as="span"
                      fontSize="0.625rem"
                      fontWeight="500"
                      lineHeight="0.625rem"
                      color="#667085">
                      {risk.ip}
                    </Text>
                  </VStack>
                </Flex>
              </Table.Cell>
              <Table.Cell
                borderBottom="1px solid"
                borderColor="#E0E2E7"
                px="6"
                py="0">
                <Text
                  as="span"
                  borderRadius="38px"
                  bg="#FFE2E0"
                  px="4"
                  py="1"
                  fontSize="0.9375rem"
                  fontWeight="600"
                  color="#C6190D">
                  {risk.ip}
                </Text>
              </Table.Cell>
            </Table.Row>
          ))}
          <Table.Row bg="white">
            <Table.Cell colSpan={2} py="3" borderColor="white">
              <Flex w="full" align="center" justify="center">
                <button aria-label="Previous page">
                  <ChevronLeft size={20} color="#C2C6CE" />
                </button>
                <Text fontSize="0.875rem" color="#667085">
                  Showing 1-2 of 2
                </Text>
                <button aria-label="Next page">
                  <ChevronRight size={20} color="#858D9D" />
                </button>
              </Flex>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
};

export default RiskTable;
