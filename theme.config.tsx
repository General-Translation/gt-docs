import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: `Docs — %s`
    }
  },
  logo: <Image src='/gt-logo.svg' height={40} width={40} alt='GT, Inc.'/>,
  project: {
    link: 'https://github.com/General-Translation/gt-react',
  },
  docsRepositoryBase: 'https://github.com/General-Translation/gt-docs',
  footer: {
    component: <></>
  }
}

export default config
