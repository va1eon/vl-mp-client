import { createBrowserRouter, redirect } from 'react-router-dom'

import { App } from '@/app/app'
import { getRoute } from '@/config'

import { ProtectedRoute } from './protected.route'

export const router = createBrowserRouter([
	{
		element: <App />,
		// TODO: Create <Loader />
		HydrateFallback: () => <p>Загрузка...</p>,
		children: [
			{
				path: getRoute('HOME'),
				lazy: () => import('@/pages/home/home.page'),
			},
			{
				path: getRoute('AUTH.LOGIN'),
				lazy: () => import('@/pages/auth/auth.page'),
			},
			{
				path: getRoute('AUTH.REGISTER'),
				lazy: () => import('@/pages/auth/auth.page'),
			},
			{
				path: getRoute('PRODUCTS.LIST'),
				lazy: () => import('@/pages/products/products.page'),
			},
			{
				path: getRoute('PRODUCTS.DETAILS'),
				lazy: () => import('@/pages/products/product-details.page'),
			},
			{
				element: <ProtectedRoute />,
				children: [
					{
						path: getRoute('USER.PROFILE'),
						lazy: () => import('@/pages/user/profile.page'),
					},
					{
						path: getRoute('USER.ACCOUNT_SETTINGS'),
						lazy: () => import('@/pages/user/account-setting.page'),
					},
				],
			},
			{
				path: '*',
				loader: () => redirect(getRoute('HOME')),
			},
		],
	},
])
