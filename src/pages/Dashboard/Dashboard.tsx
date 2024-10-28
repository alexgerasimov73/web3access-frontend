import { Divider, Flex, Heading, HStack, Image } from '@chakra-ui/react';
import { Balances } from './Balances';
import { InfoBlock } from './InfoBlock';
import { useStore } from '../../store/useStore';

export const Dashboard = () => {
  const user = useStore((state) => state.user);

  return (
    <Flex justify="center" align="center" h="100vh">
      <Flex
        className="RotationAnimation"
        direction="column"
        gap={10}
        w={800}
        p="24px 32px 56px"
        borderRadius={16}
        border="2px"
        borderColor="brand.800">
        <HStack justify="space-between">
          <Heading as="h2">
            Hi, {user?.firstName} {user?.lastName}
          </Heading>

          <Image
            boxSize="60px"
            borderRadius="full"
            border="2px"
            borderColor="brand.800"
            src={`https://robohash.org/${user?.firstName}${user?.lastName}.png?size=60x60`}
          />
        </HStack>
        <Divider borderColor="brand.800" />

        <InfoBlock />
        <Divider borderColor="brand.800" />

        <Balances />
      </Flex>
    </Flex>
  );
};
