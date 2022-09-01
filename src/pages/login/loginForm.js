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
  HStack,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
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

      <Box p={20} borderRadius={16}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <VStack>
            <FormControl isRequired>
              <VStack alignItems={"flex-start"}>
                <VStack alignItems={"flex-start"}>
                  {" "}
                  <Heading>Login</Heading>
                  <Text color={"secondary.100"}>
                    Please enter below content to continue
                  </Text>
                </VStack>

                <VStack alignItems={"flex-start"}>
                  {" "}
                  <FormLabel>Email</FormLabel>
                  <Input w="400px" placeholder="Email " />
                </VStack>
             

                <VStack alignItems={"flex-start"}>
                  {" "}
                  <FormLabel>Password</FormLabel>
                  <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                      w='400px'
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </VStack>

                <VStack alignItems={"flex-start"} justifyContent={"flex-start"}>
                  <HStack>
                    <Text> Forgot password. </Text>
                  </HStack>
                </VStack>

                <Stack pt={4}>
                  <Button w="400px" bg="blue.900" color={"white"}>
                    Login
                  </Button>
                </Stack>

                <VStack alignItems={"flex-start"} justifyContent={"flex-start"}>
                  {" "}
                  <HStack pt={4}>
                    <Text> If you have do not have an account. </Text>
                    <Link to="/register">
                      {" "}
                      <Text color={"secondary.100"}>Register</Text>
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

export default LoginForm;
