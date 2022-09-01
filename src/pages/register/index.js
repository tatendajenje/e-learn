import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import React from "react";
import RegisterForm from './registerForm'
import img from "./../../assets/images/hero2.jpg";

const Regiseter = () => {
  return (
    <Box >
      <Flex alignItems={"flex-start"} justifyContent={"flex-start"}>
        <HStack h="100%" alignItems={"flex-start"} justifyContent="flex-start">
          <HStack h="100vh" w="40%" >
            <Image boxSize={'100%'} src={img} objectFit="cover" />
          </HStack>
          <HStack w='60%' >
            <RegisterForm/>
          </HStack>
        </HStack>

      </Flex>
    </Box>
  );
};

export default Regiseter;
