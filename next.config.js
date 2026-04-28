/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    '192.168.1.14',
  ],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hosting.photobucket.com',
      },
      {
        protocol: 'https',
        hostname: 'pleso.me',
      },
      {
        protocol: 'https',
        hostname: 'smjelonki.waw.pl',
      },
      {
        protocol: 'https',
        hostname: 'smjelonki.imieszkaniec.pl',
      },
      {
        protocol: 'https',
        hostname: 'www.uniqa.pl',
      },
      {
        protocol: 'https',
        hostname: 'warszawa19115.pl',
      },
      {
        protocol: 'https',
        hostname: 'smjelonki.waw.pl',
      },
      {
        protocol: 'https',
        hostname: 'smjelonki.imieszkaniec.pl',
      },
    ],
  },
};

module.exports = nextConfig;