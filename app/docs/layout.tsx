import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { GitHubIcon } from '@/components/GithubIcon';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      sidebar={{
        tabs: {
          transform(option, node) {
            const meta = source.getNodeMeta(node);
            if (!meta) return option;
            const color = `var(--${meta.file.dirname}-color, var(--color-fd-foreground))`;
            return {
              ...option,
              icon: (
                <div
                  className="rounded-md p-1 shadow-lg ring-2 [&_svg]:size-5"
                  style={
                    {
                      color,
                      border: `1px solid color-mix(in oklab, ${color} 50%, transparent)`,
                      '--tw-ring-color': `color-mix(in oklab, ${color} 20%, transparent)`,
                    } as object
                  }
                >
                  {node.icon}
                </div>
              ),
            };
          },
        },
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
