import {
  Box,
  Flex,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  Stack,
  Heading,
  RadioGroup,
  Radio,
  Checkbox,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const registerForm = () => {
  return (
    <Box alignItems={"flex-start"} w="100%">
      <Box p={8} alignItems={"flex-start"}>
        <Link to="/">
          {" "}
          <HStack alignItems={"center"} justifyContent={"flex-end"}>
            <Text textAlign={"end"}>Home </Text>
            <FaChevronCircleRight />
          </HStack>
        </Link>
      </Box>

      <Box p={12} borderRadius={16}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <VStack>
            <FormControl isRequired>
              <VStack alignItems={"flex-start"}>
                <VStack alignItems={"flex-start"}>
                  {" "}
                  <Heading>Register</Heading>
                  <Text color={"secondary.100"}>
                    Please enter below content to continue
                  </Text>
                </VStack>
                <VStack alignItems={"flex-start"}>
                  {" "}
                  <FormLabel>First Name</FormLabel>
                  <Input w="400px" placeholder="Tonde " />
                </VStack>

                <VStack alignItems={"flex-start"}>
                  {" "}
                  <FormLabel>Last Name</FormLabel>
                  <Input w="400px" placeholder="Kanh " />
                </VStack>
                <VStack alignItems={"flex-start"}>
                  {" "}
                  <FormLabel>Email</FormLabel>
                  <Input w="400px" placeholder="Email " />
                </VStack>
                <VStack alignItems={"flex-start"}>
                  {" "}
                  <FormLabel>Date of Birth</FormLabel>
                  <Input
                  w='400px'
                    placeholder="Select Date and Time"
                    size="md"
                    type="datetime-local"
                  />
                </VStack>
                <VStack alignItems={"flex-start"}>
                  {" "}
                  <FormLabel>Gender</FormLabel>
                  <RadioGroup>
                    <Stack direction="row">
                      <Radio value="1">Male</Radio>
                      <Radio value="2">Female</Radio>
                      <Radio value="3">Other</Radio>
                    </Stack>
                  </RadioGroup>
                </VStack>
                <VStack alignItems={"flex-start"}>
                  {" "}
                  <FormLabel>Country</FormLabel>
                  <Input w="400px" placeholder="Zimabwe " />
                </VStack>
                <VStack alignItems={"flex-start"} justifyContent={"flex-start"}>
                  {" "}
                  <Checkbox
                    alignItems={"flex-start"}
                    justifyContent={"flex-start"}
                    w="400px"
                    defaultChecked
                  >
                    By clicking you will be agree to our Terms and Privacy
                    Policy
                  </Checkbox>
                </VStack>

                <Stack pt={4}>
                  <Button w="400px" bg="blue.900" color={"white"}>
                    Register
                  </Button>
                </Stack>

                <VStack alignItems={"flex-start"} justifyContent={"flex-start"}>
                  {" "}
                  <HStack pt={4}>
                    <Text> If you have already have an account. </Text>
                    <Link to="/login">
                      <Text color={"secondary.100"}>Login</Text>
                    </Link>
                  </HStack>
                </VStack>
              </VStack>
            </FormControl>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default registerForm;
