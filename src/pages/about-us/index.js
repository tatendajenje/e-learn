import React from "react";
import HeaderFooterWrapper from "../../hoc/HeaderFooterWrapper";
import {
  Box,
  Image,
  Stack,
  Flex,
  HStack,
  Heading,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react";
import img from "./../../assets/images/hero2.jpg";
import img1 from "./../../assets/images/hero.jpg";

const AboutUs = () => {
  return (
    <HeaderFooterWrapper>
      <Box w="100%" h="600px">
        <Stack h="100%">
          <Image src={img} objectFit="cover" boxSize="100%" />
        </Stack>
      </Box>
      <Box>
        <Flex alignItems="center" justifyContent={"center"} pt={60} pb={40}>
          <HStack
            w="78.8%"
            alignItems={"flex-start"}
            justifyContent={"space-between"}
          >
            <Heading w="250%">We build bridges between</Heading>
            <Text>
              {" "}
              “Ignorance is Bliss, but Knowledge is Power” At “learntu.org” , we
              provide an inclusive and equitable digital platform for quality
              educational material, so as to promote continuous learning
              opportunities for all. We deliver this material utilizing our
              curated online courses and sourced publications from subject
              matter experts to provide a personalised quality educative
              experience to our subscribers By creating quality on-demand
              educational content, targetting curious minds on a global scale,
              we are doing our small part to contribute to the efforts to reach
              the United Nations Sunstainable Development Goal #3 of Quality
              Education for all
            </Text>
          </HStack>
        </Flex>
      </Box>

      <Box bg="blue.900">
        <Flex alignItems={"center"} justifyContent={"center"} pt={20} pb={20}>
          <HStack
            w="78.8%"
            alignItems={"flex-start"}
            justifyContent={"space-between"}
          >
            <VStack alignItems={"flex-start"}>
              <Heading w="480px" fontSize={"6xl"} color={"white"}>
                Have a questions? Our Team is happy to assist you.
              </Heading>
              <Text pb={10} color={"white"}>
                Ask About Learntu education
              </Text>
              <HStack borderTop="1px solid white" pt={10}>
                <Button>Contact Us</Button>
                <Text color={"white"}>Call us +123 456 7890</Text>
              </HStack>
            </VStack>
            <Stack>
              <Image
                src={img1}
                boxSize={"600px"}
                objectFit="cover"
                borderRadius={20}
              />
            </Stack>
          </HStack>
        </Flex>
      </Box>

     
    </HeaderFooterWrapper>
  );
};

export default AboutUs;
