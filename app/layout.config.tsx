import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Logo from '@/components/Logo';

import { Book, BookCheck, Earth, MessageSquareText } from 'lucide-react';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Logo />
        &nbsp;&nbsp;General Translation&nbsp;&nbsp;
      </div>
    ),
    url: 'https://www.generaltranslation.com',
  },
  links: [
    {
      text: 'Dashboard',
      url: '/dashboard',
      active: 'nested-url',
      icon: <Earth />,
    },
    {
      text: 'Docs',
      url: '/docs',
      icon: <Book />,
      active: 'none',
    },
    {
      text: 'Pricing',
      url: 'https://generaltranslation.com/pricing',
      active: 'nested-url',
      icon: <BookCheck />,
    },
    {
      text: 'Blog',
      url: '/blog',
      active: 'nested-url',
      icon: <MessageSquareText />,
    },
  ],
  githubUrl: 'https://github.com/General-Translation/gt-libraries',
};
