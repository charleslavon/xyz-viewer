/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { styledComponents: true },
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/onlyFriends',
        destination:
          '/charleslavon.near/widget/OnlyFriends?videoId=ef4e5876df3d1eef1b83d8e2dd69e221&cdnAccount=puoqzyr3sphcaxhx',
        permanent: false,
      },
    ]
  }
};

module.exports = nextConfig;
