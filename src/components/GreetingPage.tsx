import { Box, Button, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Login } from './Login';
import { useState } from 'react';
// import '../styles/components/greeting-page.scss';

export const GreetingPage = () => {
  const [hoveredBlock, setHoveredBlock] = useState<string | null>(null);

  return (
    /* <Box className="container">
      <Box
        className={`blockBackground loginBackground ${
          hoveredBlock === 'login' ? 'loginHovered' : ''
        }`}
      />
      <Box
        className={`blockBackground registerBackground ${
          hoveredBlock === 'register' ? 'registerHovered' : ''
        }`}
      />
      <Box
        className={`block loginBlock`}
        onMouseEnter={() => setHoveredBlock('login')}
        onMouseLeave={() => setHoveredBlock(null)}>
        <VStack align="flex-start" spacing={4} p={6}>
          <Heading size="lg" color="white">
            Welcome Back!
          </Heading>
          <Text color="white">Already have an account? Great! Let's get you logged in.</Text>
          <Button colorScheme="whiteAlpha" size="lg" borderRadius="full">
            Login
          </Button>
        </VStack>
      </Box>
      <Box
        className={`block registerBlock`}
        onMouseEnter={() => setHoveredBlock('register')}
        onMouseLeave={() => setHoveredBlock(null)}>
        <VStack align="flex-end" spacing={4} p={6}>
          <Heading size="lg" color="white">
            Join Us Today!
          </Heading>
          <Text color="white">
            New to our platform? No worries! Let's get you set up with an account.
          </Text>
          <Button colorScheme="whiteAlpha" size="lg" borderRadius="full">
            Register
          </Button>
        </VStack>
      </Box>
    </Box> */
    <Flex justify="center" align="center" h="100vh">
      <HStack w="960px" h="70vh">
        <VStack
          alignSelf="flex-start"
          align="flex-start"
          gap={0}
          w="50%"
          h="80%"
          p="5rem 1.25rem 1.25rem"
          border="1px"
          borderColor="brand.800">
          <Heading as="h2" mb={6} size="2xl" color="brand.700">
            Welcome back!
          </Heading>
          <Heading as="h3" size="lg">
            Already have an account?
          </Heading>
          <Heading as="h3" mb={10} size="lg">
            Great! Let's get you logged in.
          </Heading>
          <Login />
        </VStack>

        <VStack
          alignSelf="flex-end"
          justify="flex-end"
          align="flex-end"
          gap={0}
          w="50%"
          h="80%"
          p="1.25rem 1.25rem 5rem"
          border="1px"
          borderColor="brand.800">
          <Heading as="h2" mb={6} size="2xl" color="brand.700">
            Join Us Today!
          </Heading>
          <Heading as="h3" size="lg">
            New to our platform? No worries!
          </Heading>
          <Heading as="h3" mb={10} size="lg">
            Let's get you set up with an account.
          </Heading>
          <Button size="lg" colorScheme="orange">
            <Link to="/registration">To registration</Link>
          </Button>
        </VStack>
      </HStack>
    </Flex>
  );
};
