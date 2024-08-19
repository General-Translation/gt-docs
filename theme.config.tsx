import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: `Docs — %s`
    }
  },
  logo: <b>GT</b>,
  project: {
    link: 'https://github.com/General-Translation/gt-react',
  },
  docsRepositoryBase: 'https://github.com/General-Translation/gt-docs',
  footer: {
    component: <></>
  }
}

export default config
