/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true
}
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd
})
module.exports = withPWA({
  nextConfig
})
