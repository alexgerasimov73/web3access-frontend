import { useQuery } from '@tanstack/react-query'
import { getBalance } from '@wagmi/core'
import { formatUnits } from 'viem'
import { useAccount } from 'wagmi'
import { mainnet } from 'wagmi/chains'

import { TokenNames } from '../helpers/types'
import { config } from '../providers/ChainProvider/ChainProvider'

interface TokenData {
	readonly formatted: string
	readonly name: string
	readonly symbol: string
}

export const useGetBalances = () => {
	const { address } = useAccount()

	const { data: balances, isLoading } = useQuery<ReadonlyArray<TokenData>>({
		queryKey: ['balances', address],
		queryFn: async () => {
			if (!address) return []

			const res = await Promise.all([
				getBalance(config, {
					address
				}),
				getBalance(config, {
					address,
					chainId: mainnet.id
				})
			])

			const tokens = res.map((token, index) => ({
				name: index === 0 ? TokenNames.Sepolia : TokenNames.Mainnet,
				formatted: formatUnits(token.value, token.decimals),
				symbol: token.symbol
			}))

			return tokens
		},
		enabled: !!address
	})

	return { balances, isLoading }
}
