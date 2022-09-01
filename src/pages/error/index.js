import React from 'react'
import HeaderFooterWrapper from '../../hoc/HeaderFooterWrapper'
import {Box , Flex, VStack, Heading, Text} from '@chakra-ui/react'

const Error = () => {
  return (
    <HeaderFooterWrapper>
        <Box>
          <Flex alignItems={'center'} justifyContent={'center'}>
            <VStack w='70%' alignItems={"center" } justifyContent={"center"} p={120}>
                <Heading fontSize={96}>404 error</Heading>
                <Text>No page you are looking for</Text>
            </VStack>
          </Flex>
        </Box>
    </HeaderFooterWrapper>
  )
}

export default Error
