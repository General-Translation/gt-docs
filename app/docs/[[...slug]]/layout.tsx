import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { baseOptions } from '../../layout.config';
import { source } from '@/app/source';
import { GitHubIcon } from '@/components/GithubIcon';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      sidebar={{
        banner: (
          <>
            <a
              href="https://github.com/General-Translation/gt-next"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="px-4 py-2 mb-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-100/20">
                <h3 className="font-semibold text-sm flex items-center gap-2">
                  <GitHubIcon />
                  Star us on GitHub!
                </h3>
              </div>
            </a>
          </>
        ),
      }}
      tree={source.pageTree}
      {...baseOptions}
    >
      {children}
    </DocsLayout>
  );
}
