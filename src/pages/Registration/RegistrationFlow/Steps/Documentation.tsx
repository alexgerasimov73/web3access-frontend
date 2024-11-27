import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Button, Checkbox, Link, Text, VStack } from '@chakra-ui/react'
import { ChangeEvent, useState } from 'react'
import { Address } from 'viem'
import { useWalletClient } from 'wagmi'

import { Card } from '../../../../components/Card'
import {
	formatDateForSignature,
	shortenAddress
} from '../../../../helpers/utils'
import { useStore } from '../../../../store/useStore'
import { useSignDocument } from '../../hooks/useSignDocument'
import type { StepProps } from '../../types'

interface Props extends StepProps {
	readonly address: Address
}

export const Documentation = ({ address, data, refreshData }: Props) => {
	const { data: walletClient } = useWalletClient()
	const { signDocument } = useSignDocument(refreshData)
	const settings = useStore(state => state.settings)
	const [isChecked, setIschecked] = useState(false)
	const [isSigning, setIsSigning] = useState(false)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
		setIschecked(e.target.checked)

	const handleSubmit = () => {
		if (!settings || !walletClient) return

		setIsSigning(true)

		const transmittedAt = formatDateForSignature(new Date(Date.now()))
		const digest = settings.licenseSigningTemplate
			.replace('{{full_name}}', `${data.firstName} ${data.lastName}`)
			.replace('{{iso8601_timestamp}}', transmittedAt)

		walletClient
			.signMessage({ message: digest })
			.then(ethSignature => {
				if (!settings?.licenceAgreement.id) return

				const { id, verificationToken } = data

				signDocument({
					id,
					documentId: settings.licenceAgreement.id,
					ethSignature,
					transmittedAt,
					verificationToken
				})
			})
			.catch(err => console.error(err))
			.finally(() => setIsSigning(false))
	}

	return (
		<Card title='Licence Agreement'>
			<Text>
				Please read and sign the licence agreement for using the platform:
			</Text>

			<VStack align='flex-start'>
				<Link href={settings?.licenceAgreement.downloadUrl} isExternal>
					Open licence agreement <ExternalLinkIcon mx='2px' />
				</Link>

				<Checkbox isChecked={isChecked} size='lg' onChange={handleChange}>
					Accept
				</Checkbox>
			</VStack>

			<Text>{`I, ${data.firstName} ${data.lastName}, have read and agree to the terms and conditions set out in the licence agreement`}</Text>

			<Button
				w='full'
				isDisabled={!isChecked}
				isLoading={isSigning}
				onClick={handleSubmit}
			>
				Sign with {shortenAddress(address)}
			</Button>
		</Card>
	)
}
