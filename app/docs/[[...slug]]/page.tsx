import { source } from '@/app/source';
import type { Metadata } from 'next';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import { Banner } from 'fumadocs-ui/components/banner';
import Link from 'next/link'


export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage 
      toc={page.data.toc} 
      tableOfContent={{
        style: 'clerk',
      }}
      full={page.data.full}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents, Tab, Tabs, Step, Steps, Accordion, Accordions, TypeTable }} />
      </DocsBody>
      <Banner variant='normal'>
        <span style={{ fontWeight: 'normal' }}>
        🚧 These docs are still under construction. 🚧 <br />
        Please email <Link href="mailto:archie@generaltranslation.com" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">archie@generaltranslation.com</Link> or <Link href="https://github.com/General-Translation/gt-docs/issues/new" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">report an issue on our GitHub</Link> if you have any questions.
        </span>
      </Banner>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
