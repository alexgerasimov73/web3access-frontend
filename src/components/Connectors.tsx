import {
	Box,
	Button,
	Divider,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Image,
	Input,
	Text,
	VStack
} from '@chakra-ui/react'
import { OpenloginLoginParams } from '@web3auth/openlogin-adapter'
import { useForm } from 'react-hook-form'
import { useConnect } from 'wagmi'

import { GoogleColor, LinkedInColor, MetaMask } from '../assets'
import { ConnectorNames } from '../helpers/types'
import { config } from '../providers/ChainProvider/ChainProvider'
import { Web3AuthConnectorInstance } from '../providers/ChainProvider/Web3AuthConnectorInstance'

import { Card } from './Card'

interface FormData {
	readonly emailAddress: string
}

export const Connectors = () => {
	const { connect, connectors } = useConnect()
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting }
	} = useForm<FormData>()

	const connectWithWeb3Auth = (options?: OpenloginLoginParams) =>
		connect({ connector: Web3AuthConnectorInstance(config.chains, options) })

	const loginWithGoogle = () => connectWithWeb3Auth()

	const loginWithLinkedIn = () =>
		connectWithWeb3Auth({ loginProvider: 'linkedin' })

	const loginWithEmail = ({ emailAddress }: FormData) =>
		connectWithWeb3Auth({
			loginProvider: 'email_passwordless',
			login_hint: emailAddress
		})

	const loginWithMetaMask = () => {
		connectors.forEach(connector => {
			if (connector.name === ConnectorNames.MetaMask) {
				connect({ connector })
			}
		})
	}

	return (
		<Card>
			<VStack>
				<Heading as='h2'>Sign in</Heading>
				<Text>Connect your wallet with one click</Text>
				<Divider borderColor='brand.800' />
			</VStack>

			<Flex flexFlow='wrap' justify='space-between'>
				<Text w='full' mb='2' align='center'>
					Continue with
				</Text>
				<Button gap={2} w='47%' colorScheme='gray' onClick={loginWithGoogle}>
					<Image boxSize='18px' src={GoogleColor} />
					Google
				</Button>
				<Button gap={2} w='47%' onClick={loginWithLinkedIn}>
					<Image boxSize='18px' src={LinkedInColor} />
					LinkedIn
				</Button>
			</Flex>

			<form onSubmit={handleSubmit(loginWithEmail)}>
				<FormControl mb='4' isInvalid={!!errors.emailAddress}>
					<FormLabel htmlFor='emailAddress'>Email</FormLabel>
					<Input
						id='emailAddress'
						placeholder='E.g. hello@example.com'
						{...register('emailAddress', {
							required: 'This is required',
							pattern: {
								message: 'It should be valid email',
								value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
							}
						})}
					/>
					<FormErrorMessage>
						{errors.emailAddress && errors.emailAddress.message}
					</FormErrorMessage>
				</FormControl>
				<Button
					w='full'
					colorScheme='orange'
					isLoading={isSubmitting}
					type='submit'
				>
					Continue with Email
				</Button>
			</form>

			<Box>
				<Text mb='2' align='center'>
					External wallet
				</Text>
				<Button gap={2} w='full' onClick={loginWithMetaMask}>
					<Image boxSize='18px' src={MetaMask} />
					Connect with MetaMask
				</Button>
			</Box>
		</Card>
	)
}
