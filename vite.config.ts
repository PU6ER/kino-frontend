import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	define: {
		'process.env.VITE_KINOPOISK_API_KEY': JSON.stringify(
			process.env.VITE_KINOPOISK_API_KEY
		),
	},
})
