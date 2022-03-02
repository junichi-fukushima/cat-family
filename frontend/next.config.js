/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  // 画像を参照する外部ドメインの設定
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
