import { createLazyFileRoute } from '@tanstack/react-router'

import { Registration } from '../pages/Registration/Registration'

export const Route = createLazyFileRoute('/registration')({
	component: () => <Registration />
})
