import {
  Box,
  Flex,
  VStack,
  Heading,
  Grid,
  HStack,
  Button,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import Breadcrumbs from "../../components/Breadcrumb";
import HeaderFooterWrapper from "../../hoc/HeaderFooterWrapper";
import Sidebar from "../../components/courses/Sidebar";
import Course from "./../../components/Course";
import { courses } from "./../../assets/data/courseData";

const Courses = () => {
  return (
    <HeaderFooterWrapper>
      <Breadcrumbs title={"Courses"} />
      <Box pt={20} pb={20}>
        <Flex alignItems={"flex-start"} justifyContent={"center"}>
          <HStack w="70%" alignItems={"flex-start"} justifyContent={"center"}>
            <Sidebar />
            <Stack w="90%">
              <Flex alignItems={"flex-start"} justifyContent={"center"}>
                <VStack
                  w="100%"
                  alignItems={"flex-start"}
                  justifyContent={"space-between"}
                >
                  <HStack
                    alignItems={"center"}
                    justifyContent={"center"}
                    pb={8}
                  >
                    <Heading>Popular Courses</Heading>
                    <Button variant={"ghost"} color={"red.500"}>
                      See more
                    </Button>
                  </HStack>
                  <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                    {courses.map((course, index) => {
                      return <Course key={index} course={course} />;
                    })}
                  </Grid>
                </VStack>
              </Flex>
            </Stack>
          </HStack>
        </Flex>
      </Box>
    </HeaderFooterWrapper>
  );
};

export default Courses;
