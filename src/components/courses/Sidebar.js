import { Box, Flex, Heading, VStack, Text } from "@chakra-ui/react";
import React from "react";

const courses = ["Learntu Basics", "New courses", "Popular courses", "Free"];

const catergories = ["Security", "Technolgy", "Management", "Business"];

const Sidebar = () => {
  return (
    <Box w='10%'>
      <Flex>
        <VStack>
          <VStack alignItems={"flex-start"}>
            <Heading size={"md"}>Courses</Heading>
            {courses.map((item, index) => {
              return <Text fontSize={"sm"} key={index}>{item}</Text>;
            })}
          </VStack>

          <VStack alignItems={"flex-start"}>
            <Heading size={"md"} pt={12}>Catergories</Heading>
            {catergories.map((item, index) => {
              return <Text fontSize={"sm"} key={index}>{item}</Text>;
            })}
          </VStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Sidebar;
