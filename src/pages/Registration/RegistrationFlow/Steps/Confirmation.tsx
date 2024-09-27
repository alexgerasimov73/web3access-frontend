import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface Props {
  readonly fullName: string;
}

export const Confirmation = ({ fullName }: Props) => {
  return (
    <Flex
      className="RotationAnimation"
      direction="column"
      gap={10}
      w={480}
      p="48px 32px 56px"
      borderRadius={16}
      border="1px"
      borderColor="brand.800">
      <Heading as="h3" alignSelf="center" size="lg">
        Congratulations! 🎉
      </Heading>

      <Text>
        {fullName}, you’ve successfully completed the onboarding process and are all set to explore
        the platform.
      </Text>
      <Text>
        Welcome aboard, and thank you for joining <b>Web3Access</b>! Now, you're ready to dive into
        your personal dashboard, where you can manage your account and interact with our platform.
      </Text>
      <Text fontWeight="bold">Click the button below to get started!</Text>

      <Button size="lg" colorScheme="green">
        <Link to="/dashboard">To dashboard</Link>
      </Button>
    </Flex>
  );
};
