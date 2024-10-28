import { Box, Flex, Heading } from '@chakra-ui/react';
import type { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  readonly title?: string;
  readonly width?: number;
}

export const Card = ({ children, title, width = 480 }: Props) => (
  <Box className="RotationAnimation" w={width}>
    <Flex className="Card" w="full" direction="column" gap={10}>
      {title && (
        <Heading as="h3" alignSelf="center" size="lg">
          {title}
        </Heading>
      )}

      {children}
    </Flex>
  </Box>
);
