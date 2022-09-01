import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Heading,
  Image,
  Button,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import { BsPerson, BsStar, BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });

  return (
    <>
      {loading ? (
        <CourseLazyLoad />
      ) : (
        <Box bg="white" _hover={{bg: 'green.50'}}>
          <Flex>
            <VStack alignItems={"flex-start"}>
              <Image src={course?.image} boxSize={"100%"} objectFit="cover" />

              <VStack alignItems={"flex-start"} p={4} justifyContent="center">
                <Heading h='56px' as="h4" fontSize={"md"}>
                  {course?.name ?? ''}
                </Heading>
                <HStack
                  spacing={4}
                  alignItems={"flex-start"}
                  justifyContent="center"
                >
                  <Flex alignItems={"center"}>
                  <Text color='green.600' pr={2}>  <BsPerson fontSize="sm" /></Text>
                    <Text fontSize="sm">{course?.users ?? 0 }</Text>
                  </Flex>
                  <Flex alignItems={"center"}>
                 <Text color='green.600' pr={2}>   <BsEye fontSize="sm" /></Text>
                    <Text fontSize="sm">{course?.views ?? 0}</Text>
                  </Flex>
                  <Flex alignItems={"center"}>
                    <Text color='green.600' pr={2}><BsStar fontSize="sm" /></Text>
                    <Text fontSize="sm">{course?.rating ?? 0} </Text>
                  </Flex>
                </HStack>
                <Text  h='32px' fontSize="sm" color={"green.500"} fontWeight="bold">
                  A Course by {course?.author ?? 'LearnTo'}
                </Text>
                <Text fontSize="sm">
                  Descption is the key to the uner you of the game in the mean
                  time...
                </Text>
                <Link to={`/courses/${course?.id}`} style={{width: '100%'}} >
                <Button
                  bg={`${course?.price === '0' ? "secondary.100" : "green.800"}`}
                  color="white"
                  w="100%"
                  borderRadius={0}
                  _hover={{ opacity: "0.7" }}
                  fontSize="sm"
                >
                
                    {course?.price === '0'
                      ? " Start Free Course"
                      : `Buy Course: $${course?.price}`}
                  
                </Button></Link>{" "}

              </VStack>
            </VStack>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Course;

const CourseLazyLoad = () => {
  return (
    <>
      <Stack w="240px">
        <Skeleton h={60} w={240} />
        <Skeleton h={2}/>
        <Skeleton h={4}/>
        <Skeleton h={8}/>
        <Skeleton h={6}/>
      </Stack>
    </>
  );
};
