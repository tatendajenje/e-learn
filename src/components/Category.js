import React, {useState, useEffect} from "react";
import {
  Box,
  Flex,
  VStack,
  Heading,
  Image,
  Skeleton,
  Stack,
} from "@chakra-ui/react";


const Category = ({ image, name}) => {
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false);
      },3000)
    })

  return (
   <>
   {
    loading ? <CourseLazyLoad/> :  <Box>
    <Flex>
      <VStack alignItems={"flex-start"}>
        <Image src={image} boxSize={"100%"} objectFit="cover" />

        <VStack alignItems={"flex-start"} justifyContent="center">
          <Heading lineHeight={"40px"} as="h4" fontSize={"md"}>
            {name}
          </Heading>
          
          
        </VStack>
      </VStack>
    </Flex>
  </Box>
   }
   </>
  );
};

export default Category;

 const CourseLazyLoad = () => {
  return(
    <>
    <Stack w="240px">
    
      <Skeleton h={40} w={240} />
      <Skeleton h={10} />
      
      
    </Stack>
    </>
  )
};


