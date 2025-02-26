import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import MultipleSelector, { Option } from '@/components/ui/multiple-selector';
import { useId } from 'react';

const countries = [
  {
    continent: 'America',
    items: [
      { value: '1', label: 'United States', flag: '🇺🇸' },
      { value: '2', label: 'Canada', flag: '🇨🇦' },
      { value: '3', label: 'Mexico', flag: '🇲🇽' },
    ],
  },
  {
    continent: 'Africa',
    items: [
      { value: '4', label: 'South Africa', flag: '🇿🇦' },
      { value: '5', label: 'Nigeria', flag: '🇳🇬' },
      { value: '6', label: 'Morocco', flag: '🇲🇦' },
    ],
  },
  {
    continent: 'Asia',
    items: [
      { value: '7', label: 'China', flag: '🇨🇳' },
      { value: '8', label: 'Japan', flag: '🇯🇵' },
      { value: '9', label: 'India', flag: '🇮🇳' },
    ],
  },
  {
    continent: 'Europe',
    items: [
      { value: '10', label: 'United Kingdom', flag: '🇬🇧' },
      { value: '11', label: 'France', flag: '🇫🇷' },
      { value: '12', label: 'Germany', flag: '🇩🇪' },
    ],
  },
  {
    continent: 'Oceania',
    items: [
      { value: '13', label: 'Australia', flag: '🇦🇺' },
      { value: '14', label: 'New Zealand', flag: '🇳🇿' },
    ],
  },
];

const frameworks: Option[] = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
    disable: true,
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'angular',
    label: 'Angular',
  },
  {
    value: 'vue',
    label: 'Vue.js',
  },
  {
    value: 'react',
    label: 'React',
  },
  {
    value: 'ember',
    label: 'Ember.js',
  },
  {
    value: 'gatsby',
    label: 'Gatsby',
  },
  {
    value: 'eleventy',
    label: 'Eleventy',
    disable: true,
  },
  {
    value: 'solid',
    label: 'SolidJS',
  },
  {
    value: 'preact',
    label: 'Preact',
  },
  {
    value: 'qwik',
    label: 'Qwik',
  },
  {
    value: 'alpine',
    label: 'Alpine.js',
  },
  {
    value: 'lit',
    label: 'Lit',
  },
];

export default function Dashboard() {
  const id = useId();
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Dashboard</PageHeaderHeading>
      </PageHeader>
      <Card>
        <CardHeader>
          <CardTitle>React Shadcn Starter</CardTitle>
          <CardDescription>React + Vite + TypeScript template for building apps with shadcn/ui.</CardDescription>
        </CardHeader>
      </Card>
      <div className="*:not-first:mt-2">
        <Label>Multiselect</Label>
        <MultipleSelector
          commandProps={{
            label: 'Select frameworks',
          }}
          value={frameworks.slice(0, 2)}
          defaultOptions={frameworks}
          placeholder="Select frameworks"
          hideClearAllButton
          hidePlaceholderWhenSelected
          emptyIndicator={<p className="text-center text-sm">No results found</p>}
        />
        <p className="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
          Inspired by{' '}
          <a
            className="hover:text-foreground underline"
            href="https://shadcnui-expansions.typeart.cc/docs/multiple-selector"
            target="_blank"
            rel="noopener nofollow"
          >
            shadcn/ui expansions
          </a>
        </p>
      </div>
    </>
  );
}
