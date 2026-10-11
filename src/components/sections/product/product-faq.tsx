'use client';

import { RichText } from '@/components/elements/rich-text';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProductPageData } from '@/lib/types';
import { shopUrl } from '@/lib/utils';

export default function ProductFaq({ faq }: { faq: ProductPageData['faq'] }) {
  return (
    <section id="faq" className="bg-card py-14 md:py-16">
      <div className="container grid items-start gap-8 md:grid-cols-[1fr_1.7fr] md:gap-x-16">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl">{faq.heading}</h2>
          <p className="text-lg">
            Got a question?{' '}
            <a
              href={shopUrl('/pages/contact')}
              className="text-primary hover:text-primary-hover font-bold underline underline-offset-3"
            >
              Ask now
            </a>
          </p>
          <div className="grid">
            <Button asChild>
              <a href="#buy">Shop now</a>
            </Button>
          </div>
        </div>

        <Tabs defaultValue={faq.tabs[0]?.label}>
          <TabsList variant="line" className="mb-3 h-auto flex-wrap gap-2 p-0">
            {faq.tabs.map((tab) => (
              <TabsTrigger
                key={tab.label}
                value={tab.label}
                className="border-primary text-primary group-data-[variant=line]/tabs-list:data-active:bg-primary data-active:text-primary-foreground hover:data-active:text-primary-foreground hover:text-primary h-auto flex-none rounded-full border px-5 py-2 font-bold after:hidden"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {faq.tabs.map((tab) => (
            <TabsContent key={tab.label} value={tab.label}>
              <Accordion type="single" collapsible className="border-t">
                {tab.questions.map((item) => (
                  <AccordionItem
                    key={item.question}
                    value={item.question}
                    className="border-b"
                  >
                    <AccordionTrigger className="py-4 text-base font-extrabold md:text-lg">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-base">
                      <RichText html={item.answer} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
