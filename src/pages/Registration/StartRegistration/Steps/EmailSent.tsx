import { Flex, Heading, Text } from '@chakra-ui/react';

export const EmailSent = () => (
  <Flex
    className="RotationAnimation"
    direction="column"
    gap={10}
    w={360}
    p="48px 32px 56px"
    borderRadius={16}
    border="1px"
    borderColor="brand.800">
    <Heading as="h3" alignSelf="center" size="lg" color="orange">
      Please check your inbox!
    </Heading>
    <Text>
      We sent you an email containing instructions on how to continue with your application. If you
      don't see the email, please check your spam folder.
    </Text>
    <Text>
      Please keep this email safe in your inbox, as it is the only way for you to get back to your
      application later on.
    </Text>
  </Flex>
);
