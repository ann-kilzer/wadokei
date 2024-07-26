import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/wadokei/',
    test: {
        environment: 'jsdom',
        setupFiles: 'src/setupTests.ts',
        coverage: {
            enabled: true,
            provider: 'istanbul',
            all: true
        }
    }
})
