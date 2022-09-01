import {
  Box,
  Flex,
  VStack,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Textarea,
  Button,
  Stack
} from "@chakra-ui/react";
import React from "react";

const ContactForm = () => {
    let [value, setValue] = React.useState('')

  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }
  return (
    
    <Box bg='white' p={20} borderRadius={16}>
      <Flex>
        <VStack>
          <FormControl isRequired>
            <VStack alignItems={"flex-start"}>
              <HStack alignItems={"flex-start"}>
                <VStack alignItems={"flex-start"}>
                  {" "}
                  <FormLabel>First name</FormLabel>
                  <Input placeholder="First name" />
                </VStack>
                <VStack alignItems={"flex-start"}>
                  {" "}
                  <FormLabel>Last Name</FormLabel>
                  <Input placeholder="Last name" />
                </VStack>
              </HStack>
              <VStack alignItems={"flex-start"}>
                {" "}
                <FormLabel>Email</FormLabel>
                <Input w='510px' placeholder="Email " />
              </VStack>
              <VStack alignItems={"flex-start"}>
                {" "}
                <FormLabel>Message</FormLabel>
                <Textarea
                w='510px'
                h='300px'
                  value={value}
                  onChange={handleInputChange}
                  placeholder="Here is a sample placeholder"
                  size="lg"
                />
              </VStack>
              <Stack pt={8}>
              <Button w='510px' bg="blue.900" color={'white'} >Send Message</Button>
              </Stack>
            </VStack>
          </FormControl>
        </VStack>
      </Flex>
    </Box>
  );
};

export default ContactForm;
