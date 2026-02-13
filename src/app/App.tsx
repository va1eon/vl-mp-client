import { HelmetProvider } from '@dr.pogodin/react-helmet'
import { Outlet } from 'react-router-dom'

export const App = () => {
	return (
		<>
			<HelmetProvider>
				<Outlet />
			</HelmetProvider>
		</>
	)
}
