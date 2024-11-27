import { Address } from 'viem'

import { Ethereum, EthereumColored, MetaMask, Web3AuthLogo } from '../assets'

import { ConnectorNames, TokenNames } from './types'

export const assertUnreachable = (x: never): never => {
	throw new Error(
		`Value should be 'never' but found ${JSON.stringify(x)} instead.`
	)
}

export const logoFor = (attribute: string) => {
	switch (attribute) {
		case ConnectorNames.MetaMask:
			return MetaMask
		case ConnectorNames.Web3Auth:
			return Web3AuthLogo
		case TokenNames.Mainnet:
			return Ethereum
		case TokenNames.Sepolia:
			return EthereumColored
		default:
			return undefined
	}
}

// Returns a signed-plaintext-compatible string representation of the passed date.
export const formatDateForSignature = (d: Date) =>
	d.toISOString().split('.')[0] + 'Z'

// Type guard on EthAddress.
export const isEthAddress = (address: string): address is Address =>
	address.startsWith('0x') && address.length === 42

export const shortenAddress = (address: Address) =>
	`${address.substring(0, 8)}...`
