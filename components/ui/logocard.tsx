'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { useLayoutEffect, useState } from 'react';

const LOGOS: Record<
  string,
  {
    lightLogo: string;
    darkLogo: string;
    lightWordmark: string;
    darkWordmark: string;
    name: string;
    href: string;
    alt: string;
  }
> = {
  react: {
    lightLogo: '/logos/react-logo-light.svg',
    darkLogo: '/logos/react-logo-dark.svg',
    lightWordmark: '/logos/react-wordmark-light.svg',
    darkWordmark: '/logos/react-wordmark-dark.svg',
    name: 'React',
    href: '/docs/react/tutorials/quickstart',
    alt: 'React Logo',
  },
  nextjs: {
    lightLogo: '/logos/nextjs-logo.svg',
    darkLogo: '/logos/nextjs-logo.svg',
    lightWordmark: '/logos/nextjs-wordmark.svg',
    darkWordmark: '/logos/nextjs-wordmark.svg',
    name: 'Next.js',
    href: '/docs/next/tutorials/quickstart',
    alt: 'Next.js Logo',
  },
  viteLogo: {
    lightLogo: '/logos/vite-logo.svg',
    darkLogo: '/logos/vite-logo.svg',
    lightWordmark: '/logos/vite-logo.svg',
    darkWordmark: '/logos/vite-logo.svg',
    name: 'Vite',
    href: '/docs/react/tutorials/quickstart',
    alt: 'Vite Logo',
  },
  gatsby: {
    lightLogo: '/logos/gatsby-logo.svg',
    darkLogo: '/logos/gatsby-logo.svg',
    lightWordmark: '/logos/gatsby-wordmark.svg',
    darkWordmark: '/logos/gatsby-wordmark.svg',
    name: 'Gatsby',
    href: '/docs/react/tutorials/quickstart',
    alt: 'Gatsby Logo',
  },
  createreactapp: {
    lightLogo: '/logos/react-logo-light.svg',
    darkLogo: '/logos/react-logo-dark.svg',
    lightWordmark: '/logos/react-wordmark-light.svg',
    darkWordmark: '/logos/react-wordmark-dark.svg',
    name: 'create-react-app',
    href: '/docs/react/tutorials/quickstart',
    alt: 'React Logo',
  },
  other: {
    lightLogo: '/gt-logo-light.svg',
    darkLogo: '/gt-logo-dark.svg',
    lightWordmark: '/gt-logo-light.svg',
    darkWordmark: '/gt-logo-dark.svg',
    name: 'And more!',
    href: '/docs/react/tutorials/quickstart',
    alt: 'General Translation Inc. Logo',
  },
};

const LogoCardContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex flex-wrap gap-4 justify-center items-center',
      className
    )}
    {...props}
  />
));
LogoCardContainer.displayName = 'LogoCardContainer';

const LogoCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { src: string }
>(({ className, src, ...props }, ref) => {
  const router = useRouter();

  const handleClick = () => {
    console.log(`click: ${src} ${LOGOS[src]?.href}`);
    if (src && LOGOS[src]?.href) {
      router.push(LOGOS[src].href);
    }
  };

  return (
    <div
      ref={ref}
      className={cn('logo-card', className)}
      onClick={handleClick}
      {...props}
    />
  );
});
LogoCard.displayName = 'LogoCard';

const LogoCardImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { src: string }
>(({ className, src, ...props }, ref) => {
  const { resolvedTheme } = useTheme();
  const [logoSrc, setLogoSrc] = useState('');

  useLayoutEffect(() => {
    setLogoSrc(
      resolvedTheme === 'dark' ? LOGOS[src]?.darkLogo : LOGOS[src]?.lightLogo
    );
  }, [resolvedTheme]);

  if (!logoSrc) return;

  return (
    <div ref={ref} className={className} {...props}>
      <img
        src={logoSrc}
        alt={LOGOS[src]?.alt || 'Logo'}
        className="logo-card-image"
      />
    </div>
  );
});
LogoCardImage.displayName = 'LogoCardImage';

const LogoCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('logo-card-content', className)} {...props} />
));
LogoCardContent.displayName = 'LogoCardContent';

const AllLogoCards = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <LogoCardContainer ref={ref} className={className} {...props}>
    {Object.keys(LOGOS).map((key) => (
      <LogoCard key={key} src={key}>
        <LogoCardImage src={key} />
        <LogoCardContent>{LOGOS[key].name}</LogoCardContent>
      </LogoCard>
    ))}
  </LogoCardContainer>
));
AllLogoCards.displayName = 'AllLogoCards';

export {
  LogoCardContainer,
  LogoCard,
  LogoCardImage,
  LogoCardContent,
  AllLogoCards,
};
