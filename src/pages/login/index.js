import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import React from "react";
import img from "./../../assets/images/hero.jpg";
import LoginForm from './loginForm'

const Login = () => {
  return (
    <Box>
    <Flex alignItems={"flex-start"} justifyContent={"flex-start"}>
      <HStack h="100%" alignItems={"flex-start"} justifyContent="flex-start">
        <HStack h="100vh" w="40%" >
          <Image boxSize={'100%'} src={img} objectFit="cover" />
        </HStack>
        <HStack w='60%' >
          <LoginForm/>
        </HStack>
      </HStack>

    </Flex>
  </Box>
  )
}

export default Login
