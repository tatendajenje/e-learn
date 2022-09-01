import React from "react";
import { Box, Flex, Spinner, VStack, Text } from "@chakra-ui/react";
const Loader = () => {
  return (
    <Box>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <VStack w="70%" alignItems={"center"} justifyContent={"center"} p={400}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="green.500"
            size="xl"
          />
          <Text>Loading...</Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Loader;
