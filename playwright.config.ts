import { PlaywrightTestConfig } from '@playwright/test'
const config: PlaywrightTestConfig = {
    use: {
        baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:3000'
    },
    testDir: "e2e"
}
export default config