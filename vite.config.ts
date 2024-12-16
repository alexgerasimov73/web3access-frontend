/// <reference types="vitest/config" />
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [TanStackRouterVite(), react()],
	define: {
		global: 'globalThis'
	}
	// test: {
	// 	globals: true,
	// 	environment: 'jsdom',
	// 	setupFiles: './src/test/setup.ts',
	// 	coverage: {
	// 		provider: 'c8',
	// 		reporter: ['text', 'json', 'html']
	// 	}
	// }
})
