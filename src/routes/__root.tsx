import { createRootRoute } from '@tanstack/react-router'
import { Suspense, lazy } from 'react'

import { ConnectedWalletGuard } from '../providers/guard/ConnectedWalletGuard'

const TanStackRouterDevtools =
	process.env.NODE_ENV === 'production'
		? () => null
		: lazy(() =>
				import('@tanstack/router-devtools').then(res => ({
					default: res.TanStackRouterDevtools
				}))
			)

export const Route = createRootRoute({
	component: () => (
		<>
			<ConnectedWalletGuard />
			<Suspense>
				<TanStackRouterDevtools />
			</Suspense>
		</>
	)
})
