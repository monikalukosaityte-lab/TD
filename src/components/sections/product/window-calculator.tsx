'use client';

import { useState } from 'react';

import { RichText } from '@/components/elements/rich-text';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ProductPageData } from '@/lib/types';

type Windows = NonNullable<ProductPageData['windows']>;

// Same logic as the testdiscreet.co.uk calculator: the answer is always "test now",
// plus a retest date if the window hasn't passed. The date never leaves the browser.
const pad = (n: number) => String(n).padStart(2, '0');
const iso = (d: Date) =>
  `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const today = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};
const addDays = (d: Date, n: number) =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const format = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
const fill = (text: string, values: Record<string, string | number>) =>
  Object.entries(values).reduce(
    (out, [key, value]) =>
      out.split(`__${key.toUpperCase()}__`).join(String(value)),
    text,
  );

// Within 72 hours of exposure PEP comes first (pages with a "pep_title" string).
const PEP_DAYS = 3;

export default function WindowCalculator({ windows }: { windows: Windows }) {
  const strings = windows.strings;
  const hasCalculator = windows.days > 0 && strings !== null;
  const [date, setDate] = useState('');
  const [summary, setSummary] = useState({
    title: windows.initialTitle ?? '',
    body: '',
  });
  const [since, setSince] = useState('');

  function onChange(value: string) {
    setDate(value);
    if (!value || !strings) return;
    const exposure = new Date(`${value}T00:00:00`);
    const days = Math.round(
      (today().getTime() - exposure.getTime()) / 86400000,
    );
    if (Number.isNaN(days) || days < 0) return;

    setSince(
      days === 0
        ? strings.today
        : fill(days === 1 ? strings.days_ago_one : strings.days_ago_other, {
            count: days,
          }),
    );
    const grace = Math.min(7, Math.floor(windows.days / 4));
    const retestDate = format(addDays(exposure, windows.days));
    if (strings.pep_title && days < PEP_DAYS) {
      setSummary({
        title: strings.pep_title,
        body: fill(strings.pep_body ?? '', { date: retestDate }),
      });
    } else if (windows.days - days > grace) {
      setSummary({
        title: fill(strings.retest_title, { date: retestDate }),
        body: fill(strings.retest_body, { exposure: format(exposure) }),
      });
    } else {
      setSummary({ title: strings.now_title, body: strings.now_body });
    }
  }

  function onUnsure() {
    if (!strings) return;
    setDate('');
    setSince('');
    setSummary({
      title: fill(strings.unsure_title, {
        interval: strings.interval,
        weeks: Math.round(windows.days / 7),
      }),
      body: strings.unsure_body,
    });
  }

  return (
    <section id="when-to-test" className="pt-6 pb-14">
      <div className="container">
        <div className="bg-card mx-auto max-w-3xl rounded-lg px-4 py-10 md:px-12">
          <h2 className="mb-2 text-3xl">
            <RichText as="span" html={windows.heading} />
          </h2>
          <RichText
            html={windows.subheading}
            className="text-muted-foreground mb-6"
          />

          {windows.notes && (
            <RichText
              html={windows.notes}
              className="bg-muted mb-6 rounded-md px-5 py-4 text-sm"
            />
          )}

          {windows.scope && <p className="mb-3 font-bold">{windows.scope}</p>}

          {hasCalculator && (
            <>
              <label htmlFor="exposure-date" className="mb-1.5 block font-bold">
                Date of possible exposure
              </label>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <Input
                  id="exposure-date"
                  type="date"
                  value={date}
                  max={iso(today())}
                  onChange={(e) => onChange(e.target.value)}
                  className="bg-card h-11 w-auto"
                />
                <span className="text-muted-foreground text-sm">{since}</span>
              </div>

              {summary.title && (
                <div
                  role="status"
                  aria-live="polite"
                  className="bg-muted mt-6 grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-1 rounded-md px-5 py-4"
                >
                  <span
                    aria-hidden
                    className="bg-primary size-2.5 rounded-full"
                  />
                  <strong className="text-primary">{summary.title}</strong>
                  {summary.body && (
                    <p className="col-start-2">{summary.body}</p>
                  )}
                </div>
              )}

              <p className="text-muted-foreground mt-5 mb-2 text-xs">
                {strings?.privacy ??
                  'This runs on your device. The date never leaves it: we don’t see it, store it or send it anywhere.'}
              </p>
              <Button type="button" variant="link" size="xs" onClick={onUnsure}>
                I&apos;m not sure of the date
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
