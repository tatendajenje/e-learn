import {
  Flex,
  Box,
  VStack,
  Heading,
  Text,
  Button,
  HStack,
  Stack,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import HeaderFooterWrapper from "../../hoc/HeaderFooterWrapper";
import useCart from "../../hooks/useCart";

const Cart = () => {
  const { cart, total, emptyCart, subtractFromCart } = useCart();
  return (
    <HeaderFooterWrapper>
      <Box>
        <Flex alignItems={"flex-start"} justifyContent={"center"}>
          <VStack
            w="70%"
            alignItems={"flex-start"}
            justifyContent={"center"}
            pt={40}
          >
            <Heading>Shopping Cart</Heading>
            <Text>{cart.length} Courses in Cart.</Text>
            <VStack
              w="100%"
              mb={20}
              p={20}
              spacing={4}
              alignItems="center"
              justifyContent="center"
              border={" 1px solid #9AE6B4"}
            >
              {cart.length ? (
                <>
                  <HStack
                    w="100%"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                  >
                    <Stack
                      w="100%"
                      alignItems="flex-start"
                      justifyContent="space-between"
                      spacing={4}
                    >
                      {cart &&
                        cart.length &&
                        cart.map((item, key) => {
                          return (
                            <HStack
                              alignItems="flex-start"
                              justifyContent={"space-between"}
                              spacing={4}
                            >
                              {item?.image !== undefined ? (
                                <Image src={item.image} boxSize={160} />
                              ) : null}
                              <VStack>
                                <VStack alignItems="flex-start">
                                  <Text fontSize="20px" color="green.500">
                                    {item.name}
                                  </Text>
                                  <Heading> ${item.price}</Heading>
                                </VStack>
                              </VStack>

                              <VStack alignItems={'flex-end' } justifyContent={'flex-end'} w='100%'>
                                <Stack alignItems={'flex-end' } justifyContent={'flex-end'}>
                                  {" "}
                                  <Button bg="green.500" color="white" onClick={()=>subtractFromCart()}>
                                    Remove Item
                                  </Button>
                                </Stack>
                              </VStack>
                            </HStack>
                          );
                        })}
                      {/* <Image src={ cart?.image}  objectFit='cover' boxSize={200} /> */}
                      {/* <Text>{cart.name}</Text> */}
                      <Box>
                        <HStack>
                          <Heading>Total: </Heading>
                          <Text> ${total}</Text>
                        </HStack>
                      </Box>
                    </Stack>
                  </HStack>
                  {/* <Text>
                    Show Table of cart items {JSON.stringify(cart, null, 4)}
                  </Text>
                  <Text>Total: {total}</Text> */}
                </>
              ) : (
                <>
                  <Text>Your cart is empty. Find courses</Text>
                  <Link to="/courses">
                    <Button color="white" bg="green.500">
                      Find Courses
                    </Button>
                  </Link>
                </>
              )}
            </VStack>
          </VStack>
        </Flex>
      </Box>
    </HeaderFooterWrapper>
  );
};

export default Cart;
