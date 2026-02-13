const PUBLIC_ROUTES = {
	HOME: '/',
	AUTH: {
		LOGIN: '/auth/login',
		REGISTER: '/auth/register',
	},
	PRODUCTS: {
		LIST: '/products',
		DETAILS: '/products/:idOrSlug',
	},
} as const

const PROTECTED_ROUTES = {
	USER: {
		ACCOUNT_SETTINGS: '/user/account-settings',
		PROFILE: '/user',
	},
} as const

const ROUTES = { ...PUBLIC_ROUTES, ...PROTECTED_ROUTES } as const

type NestedPaths<T> = T extends string
	? T
	: T extends object
		? { [K in keyof T]: NestedPaths<T[K]> }[keyof T]
		: never

type DotNotationKeys<T, Prefix extends string = ''> = {
	[K in keyof T]: T[K] extends string
		? `${Prefix}${K & string}`
		: DotNotationKeys<T[K], `${Prefix}${K & string}.`>
}[keyof T]

export type PathKey = DotNotationKeys<typeof ROUTES>
export type PathValue = NestedPaths<typeof ROUTES>

type GetRouteValue<
	T,
	K extends string,
> = K extends `${infer First}.${infer Rest}`
	? First extends keyof T
		? GetRouteValue<T[First], Rest>
		: never
	: K extends keyof T
		? T[K]
		: never

export function getRoute<K extends PathKey>(
	key: K
): GetRouteValue<typeof ROUTES, K> {
	const keys = key.split('.') as readonly string[]
	let result: unknown = ROUTES

	for (const k of keys) {
		if (result && typeof result === 'object' && k in result) {
			result = (result as Record<string, unknown>)[k]
		} else {
			throw new Error(`Invalid route key: ${key}`)
		}
	}

	return result as GetRouteValue<typeof ROUTES, K>
}
