import { cn } from '@/lib/utils';

/**
 * Renders the small HTML snippets (p, strong, em, ul, li, a) stored in
 * content/products — trusted content copied from the Shopify product pages.
 */
export function RichText({
  html,
  className,
  as: Tag = 'div',
}: {
  html: string;
  className?: string;
  as?: 'div' | 'span';
}) {
  if (!html) return null;

  return (
    <Tag
      className={cn(
        '[&_a]:text-primary hover:[&_a]:text-primary-hover [&_a]:underline [&_a]:underline-offset-3 [&_li]:mt-1 [&_mark]:rounded-xs [&_mark]:px-1 [&_ol]:list-decimal [&_ol]:pl-5 [&_p+p]:mt-3 [&_strong]:font-bold [&_ul]:list-disc [&_ul]:pl-5',
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
