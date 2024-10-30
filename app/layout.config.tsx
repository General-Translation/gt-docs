import Logo from '@/components/Logo';
import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';
import { BookCheck, Book, Earth, MessageSquareText } from 'lucide-react';

export const baseOptions: HomeLayoutProps = {
  nav: {
    title: <div style={{"display": "flex", "alignItems": "center"}}><Logo/>&nbsp;&nbsp;General Translation&nbsp;&nbsp;</div>,
    url: '/'
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
      active: 'nested-url',
      icon: <Book />,
    },
    {
      text: 'Plans',
      url: 'https://www.generaltranslation.com/plans',
      active: 'nested-url',
      icon: <BookCheck />
    },
    {
      text: 'Blog',
      url: '/blog',
      active: 'nested-url',
      icon: <MessageSquareText />,
    },
  ],
  githubUrl: 'https://github.com/General-Translation',
};
