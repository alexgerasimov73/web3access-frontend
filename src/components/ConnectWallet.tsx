import { Flex } from '@chakra-ui/react'
import { useAccount, useChainId } from 'wagmi'
import { sepolia } from 'wagmi/chains'

import { Connectors } from './Connectors'
import { GradientBackground } from './GradientBackground'
import { Loader } from './Loader'
import { SwitchNetwork } from './SwitchNetwork'

export const ConnectWallet = () => {
	const chainId = useChainId()
	const { isConnected, isConnecting, isReconnecting } = useAccount()

	const getContent = () => {
		if (isConnecting || isReconnecting) return <Loader />

		if (chainId !== sepolia.id) return <SwitchNetwork />

		if (!isConnected)
			return (
				<>
					<GradientBackground />
					<Connectors />
				</>
			)
	}

	return (
		<Flex justify='center' align='center' h='100vh'>
			{getContent()}
		</Flex>
	)
}
