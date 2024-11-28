import { HStack } from '@chakra-ui/react'
import { Outlet } from '@tanstack/react-router'

import { useGetSettings } from '../hooks/useGetSettings'

import { Loader } from './Loader'
import { Logo } from './Logo'
import { WalletBadge } from './WalletBadge'

export const MainLayout = () => {
	const { isLoading } = useGetSettings()

	if (isLoading) return <Loader label='Loading settings...' />

	return (
		<>
			<HStack
				as='header'
				pos='absolute'
				justify='space-between'
				w='full'
				h={16}
				p={4}
				zIndex={1}
			>
				<Logo />
				<WalletBadge />
			</HStack>

			<Outlet />
		</>
	)
}
