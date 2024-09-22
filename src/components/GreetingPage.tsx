import { Button, Flex, Heading, HStack, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Login } from './Login';

export const GreetingPage = () => (
  <Flex justify="center" align="center" h="100vh">
    <HStack w="960px" h="70vh">
      <VStack alignSelf="flex-start" w="50%" h="80%" p={4} border="1px" borderColor="brand.800">
        <Heading>Already have an account?</Heading>
        <Heading>Brilliant!</Heading>
        <Heading>Login, please</Heading>
        <Login />
      </VStack>
      <VStack
        alignSelf="flex-end"
        justify="flex-end"
        w="50%"
        h="80%"
        p={4}
        border="1px"
        borderColor="brand.800">
        <Heading>A new member on our platform?</Heading>
        <Heading>No problem!</Heading>
        <Heading>Go through the registration process, please</Heading>
        <Button colorScheme="green">
          <Link to="/registration">To registration</Link>
        </Button>
      </VStack>
    </HStack>
  </Flex>
);
