import { createMDX } from 'fumadocs-mdx/next';
import { withGTConfig } from 'gt-next/config';


const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  devIndicators: false,
  assetPrefix: '/docs-static',

  async rewrites() {
    return [
      {
        source: '/',
        destination: `/docs`,
      },
    ];
  },
};

export default withGTConfig(withMDX(config), {
  dictionary: "content/ui.en.json"
});
