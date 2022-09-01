import React, { useCallback, useEffect, useState } from "react";
import {useParams } from "react-router-dom";

import {
  Box,
  HStack,
  Flex,
  Image,
  VStack,
  Button,
  Heading,
  Stack,
  Text,
  Avatar,
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionItem,
  
} from "@chakra-ui/react";
import HeaderFooterWrapper from "../../hoc/HeaderFooterWrapper";
import Loader from "../../components/Loader";
import {courses} from '../../assets/data/courseData';

import {
  BiStar,
  BiBookReader,
  BiNotepad,
  BiTime,
  BiCheckCircle,
  BiMicrophone,
  BiCertification,
  BiCloudLightning,
  BiBookBookmark,
  BiPlus,
  BiMinus,
} from "react-icons/bi";
import useCart from "../../hooks/useCart";

const courseInfo = [
  {
    name: "English",
    icon: <BiMicrophone />,
  },
  {
    name: "Beginners",
    icon: <BiBookBookmark />,
  },
  {
    name: "Full Access",
    icon: <BiCloudLightning />,
  },
  {
    name: "Cerificate on completion",
    icon: <BiCertification />,
  },
];

const courseOverview = [
  {
    title: "4.6",
    icon: <BiStar />,
  },
  {
    title: "16 Lessons",
    icon: <BiBookReader />,
  },
  {
    title: "Assignments",
    icon: <BiNotepad />,
  },
  {
    title: "2h 10min",
    icon: <BiTime />,
  },
];

const CourseDetails = ({id}) => {
  let params = useParams();
  let [course, updateCourse] = useState({});
  let [loading, setLoading] = useState(true);
  const {  addToCart } = useCart()

  const duration = 1000;

  const findCourse = useCallback(() => {
    if (params?.id) {
      let course = courses.find((c) => c.id === +params?.id, {});
      console.log(course);
      updateCourse(course);
    }
    setLoading(false);
  }, [params]);

  useEffect(() => {
    // update on param change, in this case the course id.
    setTimeout(findCourse, duration);
  }, [params, findCourse, duration]);

  return (

    <>
      {loading ? (
        <>
          {" "}
          <Loader />
        </>
      ) : (
        <HeaderFooterWrapper>
          <Box pb={20}>
            <Flex alignItems={"center"} justifyContent={"center"}>
              <HStack
                w="70%"
                alignItems={"flex-start"}
                justifyContent={"space-between"}
              >
                <VStack pt={8} alignItems={"flex-start"} w="60%" spacing={4}>
                  <HStack>
                    <Text> My Courses : {course.name}</Text>
                  </HStack>
                  <Heading>{course.name}</Heading>
                  <HStack>
                    <Avatar name={`${course.author}`} />

                    <Text color={"secondary.100"}>{course.author}</Text>
                  </HStack>
                  <HStack spacing={8}>
                    {courseOverview.map((overview, index) => {
                      return (
                        <HStack key={index}>
                          <Text fontSize={24} color={"green.500"}>
                            {overview.icon}
                          </Text>
                          <Text>{overview.title}</Text>
                        </HStack>
                      );
                    })}
                  </HStack>
                  <Stack w="100%" h="320px">
                    <Image
                      src={course.image}
                      boxSize="100%"
                      objectFit={"cover"}
                    />
                  </Stack>
                  <Heading pt={12} fontSize={24}>
                    About This Course
                  </Heading>
                  <Text>{course.about}</Text>
                  <Heading fontSize={24}>
                    After Completing Course You Will Be Able To
                  </Heading>
                  {course.skillsLearned.map((skill, index) => {
                    return (
                      <HStack>
                        <Text fontSize="24px" color="green.500">
                          <BiCheckCircle />
                        </Text>
                        <Text color="green.500">{skill}</Text>
                      </HStack>
                    );
                  })}
                  <Heading fontSize={24}>Requirement</Heading>
                  {course.requirement.map((require, index) => {
                    return (
                      <HStack>
                        <Text fontSize="24px" color="green.500">
                          {" "}
                          <BiCheckCircle />
                        </Text>
                        <Text color="green.500">{require}</Text>
                      </HStack>
                    );
                  })}
                  <Heading fontSize={24}>Course Overview</Heading>
                  <VStack w="100%">
                    <Accordion w="100%" defaultIndex={[0]} allowMultiple>
                      {course.sections.map((section, index) => {
                        return (
                          <>
                            <AccordionItem>
                              {({ isExpanded }) => {
                                return (
                                  <>
                                    <AccordionButton>
                                      <Box flex="1" textAlign="left">
                                        <Heading
                                          color={"secondary.100"}
                                          fontSize={24}
                                        >
                                          {" "}
                                          {section.sectionName}
                                        </Heading>
                                      </Box>
                                      {isExpanded ? (
                                        <BiMinus fontSize="24px" />
                                      ) : (
                                        <BiPlus fontSize="24px" />
                                      )}
                                    </AccordionButton>

                                    <AccordionPanel pb={4}>
                                      {section.sectionContent.map(
                                        (content, index) => {
                                          const length = 115;
                                          return (
                                            <>
                                              <VStack alignItems={"flex-start"}>
                                                <Text fontWeight="500">
                                                  {content.topicName}
                                                </Text>
                                                <Text fontSize="sm">
                                                  {content.topicContent.length
                                                    ? content.topicContent.substring(
                                                        0,
                                                        length - 3
                                                      ) + "..."
                                                    : content.topicContent}{" "}
                                                </Text>
                                                <HStack
                                                  alignItems={"flex-end"}
                                                  justifyContent={"flex-end"}
                                                  w="100%"
                                                >
                                                  <HStack
                                                    bg={'white'}
                                                    borderRadius={20}
                                                    p={1}
                                                  >
                                                    <Text color={"green.400"}>
                                                      <BiTime />
                                                    </Text>
                                                    <Text
                                                      color={"green.400"}
                                                      fontSize="12px"
                                                    >
                                                      {content.duration}
                                                    </Text>
                                                  </HStack>
                                                </HStack>
                                              </VStack>
                                            </>
                                          );
                                        }
                                      )}
                                    </AccordionPanel>
                                  </>
                                );
                              }}
                            </AccordionItem>
                          </>
                        );
                      })}
                    </Accordion>
                  </VStack>
                </VStack>
                <VStack
                  w="30%"
                  pt={20}
                  alignItems={"flex-start"}
                  pl={16}
                  spacing={4}
                >
                  <VStack
                    spacing={8}
                    alignItems={"flex-start"}
                    borderLeft="1px solid gray"
                    pl={8}
                  >
                    {courseInfo.map((info, index) => {
                      return (
                        <HStack key={index}>
                          <Text fontSize={24} color={"green.500"}>
                            {" "}
                            {info.icon}
                          </Text>
                          <Text>{info.name}</Text>
                        </HStack>
                      );
                    })}
                    <Heading color={"secondary.100"}>
                      {course.price === '0' ? "Free course" : <p>${course.price}</p>}
                    </Heading>
                    <Button onClick={() => addToCart(course)}  w="300px" color={"white"} bg={"primary.100"}>
                      Enroll Today
                    </Button>
                  </VStack>
                </VStack>
              </HStack>
            </Flex>
          </Box>)
        </HeaderFooterWrapper>
      )}
    </>
  );
};

export default CourseDetails;
