import React from "react";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Highlight,
  Image,
  Text,
  Button,
  Stack,
  Grid,
  VStack,
} from "@chakra-ui/react";
import HeaderFooterWrapper from "../../hoc/HeaderFooterWrapper";
import img from "./../../assets/images/hero.jpg";
import Course from "../../components/Course";
import Category from "../../components/Category";
import { courses, coursesCategory } from "../../assets/data/courseData";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <HeaderFooterWrapper>
        <Box pt={0}>
          <Flex alignItems={"center"} justifyContent={"center"}>
            <HStack
              bgGradient="linear(to-r, #68D391, #38A169)"
              p={20}
              w="70%"
              alignItems={"flex-start"}
              justifyContent={"space-between"}
            >
              <Flex flexDirection={"column"}>
                <Heading fontSize={"40px"} w={"528px"} color="white">
                  <Highlight
                    query={["education", "learning."]}
                    styles={{ px: "1", py: "1", bg: "white" }}
                  >
                    Wisdom…. comes not from age, but from education and
                    learning.
                  </Highlight>
                </Heading>
                <Text pt={8} color="white">
                  Tell me and I forget. Teach me and I remember. Involve me and
                  I learn.
                </Text>
                <Stack pt={4}>
                  <Link to="/courses">
                    <Button
                      color={"white"}
                      size={"sm"}
                      bg={"primary.100"}
                      variant="solid"
                      borderRadius={"4px"}
                      w={"120px"}
                    >
                      Discover now
                    </Button>
                  </Link>
                </Stack>
              </Flex>

              <Image
                boxSize="320px"
                objectFit="cover"
                src={img}
                borderRadius={"8px"}
              />
            </HStack>
          </Flex>
        </Box>
        {/*<Box mt={20} pt={20} pb={20} bg={"blue.900"}>
          <Flex alignItems={"center"} justifyContent={"center"}>
            <HStack
              w="78.8%"
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              {offer.map((item, index) => {
                return <Text color={"white"}>{item}</Text>;
              })}
            </HStack>
          </Flex>
            </Box>*/}
        <Box pt={20}>
          <Flex alignItems={"center"} justifyContent={"center"}>
            <VStack
              w="70%"
              alignItems={"flex-start"}
              justifyContent={"space-between"}
            >
              <Heading mb={8}>Popular Courses</Heading>
              <Grid templateColumns="repeat(5, 1fr)" gap={8}>
                {courses.map((course, index) => {
                  return <Course key={index} course={course} />;
                })}
              </Grid>
            </VStack>
          </Flex>
        </Box>
        <Box pt={20}>
          <Flex alignItems={"center"} justifyContent={"center"}>
            <VStack
              w="70%"
              alignItems={"flex-start"}
              justifyContent={"space-between"}
            >
              <Heading mb={8}>Categories</Heading>
              <Grid templateColumns="repeat(5, 1fr)" gap={8}>
                {coursesCategory.map((item, index) => {
                  return (
                    <Category key={index} image={item.image} name={item.name} />
                  );
                })}
              </Grid>
            </VStack>
          </Flex>
        </Box>
        <Box bg={"secondary.100"} mt={20} pt={20} pb={20}>
          <Flex alignItems={"center"} justifyContent={"center"}>
            <VStack w="78.8%" alignItems={"center"} justifyContent={"center"}>
              <Heading color={"white"} pb={4}>
                Leadership and learning are indispensable to each other.
              </Heading>
              <Button
                size={"sm"}
                color="primary.100"
                bg={"white"}
                variant={"solid"}
              >
                Get Started
              </Button>
            </VStack>
          </Flex>
        </Box>
      </HeaderFooterWrapper>
    </>
  );
};

export default Home;
