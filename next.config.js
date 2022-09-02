/** @type {import('next').NextConfig} */
const path = require("node:path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

const withTM = require('next-transpile-modules')(['gsap']);module.exports = withTM

module.exports = [nextConfig]
