import { HelmetProvider } from '@dr.pogodin/react-helmet'

import { Component } from '@/pages/home/home.page'

export const App = () => {
	return (
		<>
			<HelmetProvider>
				<Component />
			</HelmetProvider>
		</>
	)
}
