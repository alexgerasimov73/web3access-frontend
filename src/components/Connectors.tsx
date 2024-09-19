import { OpenloginLoginParams } from '@web3auth/openlogin-adapter';
import { sepolia } from 'viem/chains';
import { useConnect } from 'wagmi';
import { Web3AuthConnectorInstance } from '../providers/ChainProvider/Web3AuthConnectorInstance';
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { GoogleColor, LinkedInColor, MetaMask } from '../assets';

export const enum ConnectorNames {
  MetaMask = 'MetaMask',
  Web3Auth = 'Web3Auth',
}

interface SingleValueFormType {
  readonly emailAddress: string;
}

export const Connectors = () => {
  const { connect, connectors } = useConnect();

  const connectWithWeb3Auth = (options?: OpenloginLoginParams) =>
    connect({ connector: Web3AuthConnectorInstance(sepolia, options) });

  const loginWithGoogle = () => connectWithWeb3Auth();

  const loginWithLinkedIn = () => connectWithWeb3Auth({ loginProvider: 'linkedin' });

  const loginWithEmail = ({ emailAddress }: SingleValueFormType) =>
    connectWithWeb3Auth({ loginProvider: 'email_passwordless', login_hint: emailAddress });

  const loginWithMetaMask = () => {
    connectors.map((connector) => {
      if (connector.name === ConnectorNames.MetaMask) {
        connect({ connector });
      }
    });
  };

  return (
    <Flex
      className="RotationAnimation"
      direction="column"
      gap={10}
      w={360}
      p="24px 32px 56px"
      borderRadius={16}
      border="1px"
      borderColor="brand.800">
      <VStack>
        <Heading as="h2">Sign in</Heading>
        <Text>Connect your wallet with one click</Text>
        <Divider borderColor="brand.800" />
      </VStack>

      <Flex flexFlow="wrap" justify="space-between">
        <Text w="full" mb="2" align="center">
          Continue with
        </Text>
        <Button gap={2} w="47%" colorScheme="gray" onClick={loginWithGoogle}>
          <Image boxSize="18px" src={GoogleColor} />
          Google
        </Button>
        <Button gap={2} w="47%" colorScheme="green" onClick={loginWithLinkedIn}>
          <Image boxSize="18px" src={LinkedInColor} />
          LinkedIn
        </Button>
      </Flex>

      <form>
        <FormControl mb="4">
          <FormLabel>Email</FormLabel>
          <Input name="emailAddress" placeholder="E.g. hello@example.com" />
        </FormControl>
        <Button w="full" colorScheme="green" type="submit">
          Continue with Email
        </Button>
      </form>

      <Box>
        <Text mb="2" align="center">
          External wallet
        </Text>
        <Button gap={2} w="full" colorScheme="green" onClick={loginWithMetaMask}>
          <Image boxSize="18px" src={MetaMask} />
          Connect with MetaMask
        </Button>
      </Box>
    </Flex>
  );
};
