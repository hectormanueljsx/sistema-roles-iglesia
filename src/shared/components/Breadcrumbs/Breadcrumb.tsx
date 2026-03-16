'use client';

import { BreadcrumbItem, Breadcrumbs } from '@heroui/react';
import { usePathname } from 'next/navigation';

const isUUID = (value: string) => /^[0-9a-f-]{36}$/.test(value);
const formatLabel = (segment: string) => segment.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());

export const Breadcrumb = () => {
  const pathname = usePathname();

  const segments = pathname
    .split('/')
    .filter(Boolean)
    .filter(segment => !isUUID(segment));

  return (
    <Breadcrumbs
      itemClasses={{
        item: 'font-medium text-xl text-(--color-text-secondary) data-[current=true]:text-(--color-primary)',
        separator: 'font-medium text-xl text-(--color-text-secondary) px-1.25',
      }}
      separator='|'
    >
      {segments.map((segment, index) => {
        const href = `/${segments.slice(0, index + 1).join('/')}`;
        const isLast = index === segments.length - 1;

        return (
          <BreadcrumbItem
            key={href}
            href={!isLast ? href : undefined}
          >
            {formatLabel(segment)}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumbs>
  );
};
