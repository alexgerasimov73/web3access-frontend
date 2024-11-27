import {
	ChakraProvider as ChakraProviderWrapper,
	ColorModeScript,
	ToastProviderProps
} from '@chakra-ui/react'
import type { PropsWithChildren } from 'react'

import { theme } from '../../theme'

const toastOptions: ToastProviderProps = {
	defaultOptions: { duration: 5000, isClosable: true, position: 'top-right' }
}

export const ChakraProvider = ({ children }: PropsWithChildren) => (
	<ChakraProviderWrapper theme={theme} toastOptions={toastOptions}>
		<ColorModeScript initialColorMode={theme.config.initialColorMode} />
		{children}
	</ChakraProviderWrapper>
)
