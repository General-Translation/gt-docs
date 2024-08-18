import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import { Logo } from "nextra-logo";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: `Docs — %s`
    }
  },
  logo: <Logo light={'/gt-logo-light.svg'} dark={'/gt-logo-dark.svg'} size="40"/>,
  project: {
    link: 'https://github.com/General-Translation/gt-react',
  },
  docsRepositoryBase: 'https://github.com/General-Translation/gt-docs',
  footer: {
    component: <></>
  }
}

export default config
