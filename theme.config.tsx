import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: `Docs — %s`
    }
  },
  logo: <Image src={'/light-logo.png'} width={45} height={45} alt='GT, Inc.'/>,
  project: {
    link: 'https://github.com/General-Translation/gt-react',
  },
  docsRepositoryBase: 'https://github.com/General-Translation/gt-docs',
  footer: {
    component: <></>
  }
}

export default config
