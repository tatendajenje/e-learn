import React from "react";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ title, link }) => {
  return (
    <Box bg={"secondary.100"}>
      <Flex alignItems={"center"} justifyContent={"center"} pt={10} pb={10}>
        <HStack
          w="70%"
          alignItems={"flex-start"}
          justifyContent={"space-between"}
        >
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Heading color="white">
                  <Link to="/">Home</Link>
                </Heading>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink>{title}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Breadcrumbs;
