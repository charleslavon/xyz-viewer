/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { styledComponents: true },
  reactStrictMode: true,
  headers: async () => [
    {
        source: '/:path*',
        headers: [{
          key: 'Access-Control-Allow-Origin',
          value: '<origin>'
        }]
      }
  ]
};

module.exports = nextConfig;
