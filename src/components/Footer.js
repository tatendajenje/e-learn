import React from "react";
import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Heading,
  FormControl,
  Input,
  Button,
  Stack,
  Divider,
} from "@chakra-ui/react";
import FollowUsLinks from "./FollowUsLinks";

const navLinks = [
  {
    title: "Leantu",
    catergories: [
      "About",
      "What we offer",
      "Leadership",
      "Become a Partner",
      "Careers",
    ],
  },
  {
    title: "Resources",
    catergories: ["Guides", "Blog", "Developers", "Translators"],
  },
  {
    title: "Categories",
    catergories: ["Security", "Technolgy", "Management", "Business"],
  },
  {
    title: "More",
    catergories: [
      "Privacy",
      "Terms and Conditions",
      "Contact",
      "Articles",
      "Help",
      "Accessibility",
      "Press",
    ],
  },
];

const Footer = () => {
  return (
    <Box pt={20} pb={10} bg={"white"}>
      <Flex alignItems={"center"} justifyContent="center">
        <VStack
          w="70%"
          alignItems={"flex-start"}
          justifyContent={"space-between"}
        >
          <HStack alignItems={"flex-start"} justifyContent={"flex-start"}>
            <VStack>
              <Flex
                alignItems={"flex-start"}
                justifyContent={"flex-start"}
                flexDirection="column"
                spacing={4}
              >
                <Heading color={"primary.100"}  bgGradient='linear(to-l, #48BB78, #48BB78)'   bgClip='text'>Learntu</Heading>
                <Text color={"primary.100"}  fontSize="sm">
                  Education is the key to success, start e-learning now.
                </Text>
                <HStack pt={8}>
                  <FormControl>
                    <VStack alignItems={"flex-start"}>
                      <Input
                        w={"360px"}
                        type="email"
                        placeholder="Enter email address"
                        fontSize="sm"
                      />
                      <Button
                        color={"white"}
                        bg={"green.500"}
                        size={"sm"}
                        _hover={{ opacity:'0.7' }}
                        
                      >
                        Subscribe
                      </Button>
                    </VStack>
                  </FormControl>
                </HStack>
                <Stack pt={8}>
                  <FollowUsLinks />
                </Stack>
              </Flex>
            </VStack>
            <HStack pl={20} alignItems={"flex-start"}>
              {navLinks.map((item, index) => {
                return (
                  <VStack key={index} alignItems={"flex-start"} pl={20}>
                    <Text
                      fontSize={"20px"}
                      fontWeight={"600"}
                      pb={4}
                      color={"primary.100"}
                    >
                      {item.title}
                    </Text>
                    {item.catergories.map((category, index) => {
                      return <Text key={index} color={"primary.100"}  fontSize="sm">{category}</Text>;
                    })}
                  </VStack>
                );
              })}
            </HStack>
          </HStack>
        </VStack>
      </Flex>
      <Divider pt={8} />
      <HStack alignItems={"center"} justifyContent={"center"} mt={8}>
        <HStack
          w="70%"
          alignItems={"flex-start"}
          justifyContent={"space-between"}
        >
          <Text pt={8}  fontSize="sm">
            Learntu 2022 . All terms and Conditions. Privacy Policy
          </Text>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Footer;
