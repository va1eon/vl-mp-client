import { Helmet } from '@dr.pogodin/react-helmet'
import { Suspense, type PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
	title: string
	description?: string
}

export const PageLayout = ({ title, description, children }: Props) => {
	return (
		<>
			<Helmet
				titleTemplate="%s | VL-Marketplace"
				meta={[
					{
						name: 'description',
						content: description ?? `${title} страница`,
					},
				]}
			>
				<title>{title}</title>
			</Helmet>
			<div className="flex min-h-screen flex-col">
				<header>Header</header>

				<main className="container mx-auto flex-1 p-4">
					<Suspense>{children}</Suspense>
				</main>

				<footer>Footer</footer>
			</div>
		</>
	)
}
