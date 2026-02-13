import { Navigate, Outlet } from 'react-router-dom'

import { getRoute } from '@/config'

export const ProtectedRoute = () => {
	// TODO: Create useAuth()
	const isAuth = false

	if (!isAuth) {
		return <Navigate to={getRoute('AUTH.LOGIN')} />
	}

	return (
		<>
			<Outlet />
		</>
	)
}
