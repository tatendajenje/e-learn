import React from "react";
import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Breadcrumbs from "../../components/Breadcrumb";
import HeaderFooterWrapper from "../../hoc/HeaderFooterWrapper";
import { FaPhone, FaMailBulk } from "react-icons/fa";
import FollowUsLinks from "./../../components/FollowUsLinks";
import ContactForm from "./../../components/contact/ContactForm";
const contactInformation = [
  {
    title: "+123 456 7890",
    icon: <FaPhone />,
  },
  {
    title: "info@learntu.org",
    icon: <FaMailBulk />,
  },
];

const Contact = () => {
  return (
    <HeaderFooterWrapper>
      <Breadcrumbs title={"Contact"} />
      <Box>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <HStack
            w="78.8%"
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            pt={20}
            pb={20}
          >
            <VStack alignItems={"flex-start"}>
              <Heading> Contact Information</Heading>
              <Text pb={20} width="600px">
                If you have any questions or just want to say hello, the best
                way to contact us is through our form. We do our best to respond
                in less than 48 hours, but if it takes a little longer, please
                forgive us! We read each message and distribute it internally to
                ensure that you end up speaking to the right person. You can
                also check out our Help section, where you'll find answers to
                the most frequent questions about Learntu.
              </Text>
              {contactInformation.map((item, index) => {
                return (
                  <HStack key={index}>
                    {item.icon}
                    <Text pl={4}>{item.title}</Text>
                  </HStack>
                );
              })}

              <Text pt={8} fontSize={24}>
                Follow us on
              </Text>
              <FollowUsLinks />
            </VStack>
            <ContactForm />
          </HStack>
        </Flex>
      </Box>
    </HeaderFooterWrapper>
  );
};

export default Contact;
