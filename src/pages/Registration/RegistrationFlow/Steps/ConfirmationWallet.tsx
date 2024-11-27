import { Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useAccount, useWalletClient } from 'wagmi'

import { Card } from '../../../../components/Card'
import { formatDateForSignature } from '../../../../helpers/utils'
import { useStore } from '../../../../store/useStore'
import { useConfirmWallet } from '../../hooks/useConfirmWallet'
import type { StepProps } from '../../types'

export const ConfirmationWallet = ({ data, refreshData }: StepProps) => {
	const { address } = useAccount()
	const { data: walletClient } = useWalletClient()
	const { confirmWallet } = useConfirmWallet(refreshData)
	const settings = useStore(state => state.settings)
	const [isSigning, setIsSigning] = useState(false)

	const handleSubmit = () => {
		if (!settings || !walletClient || !address) return

		setIsSigning(true)

		const transmittedAt = formatDateForSignature(new Date(Date.now()))
		const digest = settings?.confirmEthAddressTemplate
			.replace('{{full_name}}', `${data.firstName} ${data.lastName}`)
			.replace('{{iso8601_timestamp}}', transmittedAt)
			.replace('{{eth_address}}', `${address}`)

		walletClient
			.signMessage({ message: digest })
			.then(ethSignature => {
				const { id, verificationToken } = data
				confirmWallet({
					id,
					ethAddress: address,
					ethSignature,
					transmittedAt,
					verificationToken
				})
			})
			.catch(err => console.error(err))
			.finally(() => setIsSigning(false))
	}

	return (
		<Card title='Wallet address'>
			<Text>
				You will need a digital wallet address to gain access to the platform.
			</Text>

			<FormControl mb='4'>
				<FormLabel htmlFor='ethAddress'>Address</FormLabel>
				<Input id='ethAddress' isDisabled value={address} />
			</FormControl>

			<Button w='full' isLoading={isSigning} onClick={handleSubmit}>
				Confirm Address
			</Button>
		</Card>
	)
}
