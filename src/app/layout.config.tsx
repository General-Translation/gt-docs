import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Logo from '@/components/Logo';

import { Earth, MessageSquareText } from 'lucide-react';

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
      text: 'Blog',
      url: '/blog',
      active: 'nested-url',
      icon: <MessageSquareText />,
    },
  ],
  githubUrl: 'https://github.com/General-Translation/gt-libraries',
};
