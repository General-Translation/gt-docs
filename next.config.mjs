import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  assetPrefix: '/docs-static',
  async rewrites() {
    return {
      beforeFiles: [
        // This rewrite is necessary to support assetPrefix only in Next 14 and below.
        // It is not necessary in Next 15.
        {
          source: '/docs-static/_next/:path*',
          destination: '/_next/:path*',
        },
      ],
    }
  },
};

export default withMDX(config);
