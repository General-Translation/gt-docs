'use client';

import { useTheme } from 'next-themes';

export function GitHubIcon() {
  const { resolvedTheme } = useTheme();

  return (
    <img
      src="/github-mark.svg"
      width={20}
      height={20}
      alt="GitHub"
      className={resolvedTheme === 'dark' ? 'invert' : ''}
    />
  );
}
