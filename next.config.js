/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['pt-BR'],
    defaultLocale: 'pt-BR'
  },
  images: {
    domains: ['cdn.jsdelivr.net'],
  },
}

module.exports = nextConfig
