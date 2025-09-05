import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Auto base: in GitHub Actions we know the repo via GITHUB_REPOSITORY (owner/repo)
const repo = (process.env.GITHUB_REPOSITORY || '').split('/')[1] || ''
const isCI = !!process.env.GITHUB_ACTIONS
export default defineConfig({
  plugins: [react()],
  base: isCI && repo ? `/${repo}/` : '/'
})
