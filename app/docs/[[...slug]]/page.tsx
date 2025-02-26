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
import { Card, Cards } from 'fumadocs-ui/components/card';
import { File, Folder, Files } from 'fumadocs-ui/components/files';
import {
  Card as ShadCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  LogoCard,
  LogoCardContainer,
  LogoCardImage,
  LogoCardContent,
  AllLogoCards,
} from '@/components/ui/logocard';

const customMdxComponents = {
  a: (props: React.ComponentProps<'a'>) => (
    <a
      {...props}
      className={'link' + (props.className ? ' ' + props.className : '')}
    />
  ),
  LogoCardContainer,
  LogoCard,
  LogoCardImage,
  LogoCardContent,
  AllLogoCards,
};

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
        <MDX
          components={{
            ...defaultMdxComponents,
            Tab,
            Tabs,
            Step,
            Steps,
            Accordion,
            Accordions,
            TypeTable,
            Card,
            Cards,
            File,
            Folder,
            Files,
            ShadCard,
            CardContent,
            CardDescription,
            CardFooter,
            CardHeader,
            CardTitle,
            ...customMdxComponents,
          }}
        />
      </DocsBody>
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
function useTheme(): { resolvedTheme: any } {
  throw new Error('Function not implemented.');
}
