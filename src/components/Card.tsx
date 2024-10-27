import { Flex, Heading } from '@chakra-ui/react';
import type { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  readonly title: string;
}

export const Card = ({ children, title }: Props) => (
  <Flex
    className="RotationAnimation"
    direction="column"
    gap={10}
    w={480}
    p="48px 32px 56px"
    borderRadius={16}
    border="2px"
    borderColor="brand.800">
    <Heading as="h3" alignSelf="center" size="lg">
      {title}
    </Heading>

    {children}
  </Flex>
);
