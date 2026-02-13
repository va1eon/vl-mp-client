/** @type {import("prettier").Config} */

const config = {
	tabWidth: 2,
	printWidth: 80,
	useTabs: true,
	semi: false,
	singleQuote: true,
	bracketSpacing: true,
	trailingComma: 'es5',
	arrowParens: 'avoid',

	plugins: [
		'@ianvs/prettier-plugin-sort-imports',
		'prettier-plugin-tailwindcss',
	],

	overrides: [
		{
			files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
			options: {
				parser: 'typescript',
				importOrder: [
					'<THIRD_PARTY_MODULES>',
					'',
					'^@/(.*)$',
					'^@/app/(.*)$',
					'^@/pages/(.*)$',
					'^@/features/(.*)$',
					'^@/widgets/(.*)$',
					'^@/entities/(.*)$',
					'^@/shared/(.*)$',
					'',
					'^\\.\\./(.*)',
					'^\\.\\.(.*)$',
					'^\\./(.*)$',
				],
				importOrderSeparation: true,
				importOrderSortSpecifiers: true,
				importOrderCaseInsensitive: true,
			},
		},
	],
}

export default config
