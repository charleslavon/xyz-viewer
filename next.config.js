/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { styledComponents: true },
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/onlyFriends',
        destination:
          '/charleslavon.near/widget/OnlyFriends?tokenId=v0.8bityonce.near',
        permanent: false,
      },
      {
        source: '/onlyFriends/:slug',
        destination:
          '/charleslavon.near/widget/OnlyFriends?tokenId=:slug',
        permanent: false,
      },
    ]
  }
};

module.exports = nextConfig;
