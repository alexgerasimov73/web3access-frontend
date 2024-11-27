import { GreetingPage } from '../../components/GreetingPage'
import { Loader } from '../../components/Loader'
import { useCheckAuth } from '../../hooks/useCheckAuth'
import { Dashboard } from '../../pages/Dashboard/Dashboard'
import { useStore } from '../../store/useStore'

export const AuthenticatedGuard = () => {
	const { isLoading } = useCheckAuth()
	const user = useStore(state => state.user)

	if (isLoading) {
		return <Loader />
	}

	return user ? <Dashboard /> : <GreetingPage />
}
