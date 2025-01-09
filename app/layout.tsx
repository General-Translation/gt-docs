import type { Metadata } from "next";
import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export function generateMetadata(): Metadata {
  return {
    title: 'Docs — General Translation',
    description: "Documentation for the General Translation i18n stack.",
    icons: {
      icon: [
        {
          media: '(prefers-color-scheme: light)',
          url: '/light-favicon.ico',
          href: '/light-favicon.ico',
        },
        {
          media: '(prefers-color-scheme: dark)',
          url: '/dark-favicon.ico',
          href: '/dark-favicon.ico',
        },
      ],
    }
  }
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body suppressHydrationWarning >
        <RootProvider>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
