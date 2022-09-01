import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Text,
  Flex,
  HStack,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Divider,
  Heading,
  MenuList,
  MenuButton,
  MenuItem,
  Menu,
  Portal,
  Badge,
} from "@chakra-ui/react";
import { BsSearch, BsBag, BsChevronDown } from "react-icons/bs";
import useCart from "../hooks/useCart";
const catergories = ["Development", "Business", "Technology", "Security"];

const Header = () => {
  const { cart } = useCart();
  return (
    <Box bg="white">
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        pt={4}
        pb={4}
        borderColor={"border.100"}
      >
        <HStack w="70%" alignItems={"center"} justifyContent={"space-between"}>
          <Stack alignItems={"center"} direction="row">
            <Link to="/">
              <Heading
                bgGradient="linear(to-l, #48BB78, #48BB78)"
                bgClip="text"
              >
                Learntu
              </Heading>
            </Link>
            <Text pl={8}>
              <Flex alignItems={"center"}>
                <Menu>
                  <MenuButton
                    color="primary.100"
                    colorScheme="white"
                    as={Button}
                    rightIcon={<BsChevronDown />}
                  >
                    Categories
                  </MenuButton>
                  <Portal>
                    <MenuList>
                      <MenuItem>Business</MenuItem>
                      <MenuItem>Technlogy</MenuItem>
                      <MenuItem>Security</MenuItem>
                      <MenuItem>Development</MenuItem>
                      <MenuItem>Music</MenuItem>
                    </MenuList>
                  </Portal>
                </Menu>
              </Flex>
            </Text>
          </Stack>

          <Stack>
            <InputGroup borderRadius={0}>
              <InputLeftElement
                pointerEvents="none"
                children={<BsSearch color="gray.300" />}
              />
              <Input
                type="text"
                placeholder="Search any anything"
                w="lg"
                fontSize="sm"
              />
            </InputGroup>
          </Stack>
          <Stack direction="row" spacing={4} align="center">
            <Link to="/cart">
              <HStack>
                <Text fontSize="24px">
                  <BsBag />
                </Text>
                <Badge bg='green.500' color='white' position={'relative'} left={-4} top={-2}>{cart.length}</Badge>
              </HStack>
            </Link>
            <Link to="/login">
              <Button
                borderRadius={"0px"}
                size={"sm"}
                variant="ghost"
                _hover={{ bg: "", color: "secondary.100" }}
              >
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button
                color={"white"}
                size={"sm"}
                bg={"secondary.100"}
                variant="solid"
                borderRadius={"4px"}
                _hover={{ opacity: "0.7" }}
              >
                Registration
              </Button>
            </Link>
          </Stack>
        </HStack>
      </Flex>
      <Box>
        <Divider />
        <HStack
          alignItems={"center"}
          justifyContent={"center"}
          p={4}
          spacing={8}
        >
          {catergories.map((item, index) => {
            return (
              <Text key={index} fontSize="sm">
                {item}
              </Text>
            );
          })}
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
