import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: ['./**/*.{ts,vue}', '!**/node_modules'],
}
