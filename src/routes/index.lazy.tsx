import { createLazyFileRoute } from '@tanstack/react-router'

import { AuthenticatedGuard } from '../providers/guard/AuthenticatedGuard'

export const Route = createLazyFileRoute('/')({
	component: () => <AuthenticatedGuard />
})
