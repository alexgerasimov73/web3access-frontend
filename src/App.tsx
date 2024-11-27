import { RouterProvider, createRouter } from '@tanstack/react-router'

import { ChainProvider } from './providers/ChainProvider/ChainProvider'
import { routeTree } from './routeTree.gen'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

export const App = () => (
	<ChainProvider>
		<RouterProvider router={router} />
	</ChainProvider>
)
