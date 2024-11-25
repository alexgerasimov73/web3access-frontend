import { Button, Flex, Heading, HStack, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Login } from './Login';
import { LoginOrRegistration } from '../helpers/types';

export const GreetingPage = () => {
  const [isPending, setIsPending] = useState(false);
  const [hoveredBlock, setHoveredBlock] = useState<LoginOrRegistration | null>(null);

  const handleMouseEnter = (block: LoginOrRegistration) => () => setHoveredBlock(block);
  const handleMouseleave = () => setHoveredBlock(null);

  const getBlockClass = (block: LoginOrRegistration) =>
    `GreetingPage-${block} ${hoveredBlock === block ? 'hovered' : ''} ${
      hoveredBlock && hoveredBlock !== block ? 'other-hovered' : ''
    }`;

  return (
    <Flex justify="center" align="center" h="100vh">
      <HStack w="1024px" h="70vh" gap="1rem">
        <VStack
          className={getBlockClass('login')}
          align="flex-start"
          onMouseEnter={handleMouseEnter('login')}
          onMouseLeave={handleMouseleave}>
          <Heading as="h2" mb={6} size="2xl" color="brand.700">
            Welcome back!
          </Heading>
          <Heading as="h3" size="lg" lineHeight="0.5">
            Already have an account?
          </Heading>
          <Heading as="h3" mb={10} size="lg">
            Great! Let's get you logged in.
          </Heading>
          <Login isPending={isPending} setIsPending={setIsPending} />
        </VStack>

        <VStack
          className={getBlockClass('registration')}
          align="flex-end"
          onMouseEnter={handleMouseEnter('registration')}
          onMouseLeave={handleMouseleave}>
          <Heading as="h2" mb={6} size="2xl" color="brand.700">
            Join Us Today!
          </Heading>
          <Heading as="h3" size="lg" lineHeight="0.5">
            New to our platform? No worries!
          </Heading>
          <Heading as="h3" mb={10} size="lg">
            Let's get you set up with an account.
          </Heading>
          <Button disabled={isPending} size="lg" colorScheme="orange">
            <Link to="/registration">To registration</Link>
          </Button>
        </VStack>
      </HStack>
    </Flex>
  );
};
