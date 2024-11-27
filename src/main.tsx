import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App.tsx'
import { ChakraProvider } from './providers/ChakraProvider/ChakraProvider.tsx'
import './styles/main.scss'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ChakraProvider>
			<App />
		</ChakraProvider>
	</StrictMode>
)
