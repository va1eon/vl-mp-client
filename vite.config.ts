import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	server: {
		port: 4040,
	},
	resolve: {
		alias: {
			'@/': resolve(__dirname, 'src'),
			'@/app': resolve(__dirname, 'src/app'),
			'@/pages': resolve(__dirname, 'src/pages'),
			'@/widgets': resolve(__dirname, 'src/widgets'),
			'@/features': resolve(__dirname, 'src/features'),
			'@/entities': resolve(__dirname, 'src/entities'),
			'@/shared': resolve(__dirname, 'src/shared'),
		},
	},
})
