import { Spinner, Text, VStack } from '@chakra-ui/react';

interface Props {
  readonly label?: string;
}

export const Loader = ({ label = 'Please wait...' }: Props) => (
  <VStack h="100vh" justify="center" spacing={2}>
    <Spinner thickness="4px" emptyColor="brand.500" color="brand.800" size="xl" speed="1s" />
    <Text>{label}</Text>
  </VStack>
);
