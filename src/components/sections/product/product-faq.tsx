'use client';

import { RichText } from '@/components/elements/rich-text';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ProductPageData } from '@/lib/types';
import { shopUrl } from '@/lib/utils';

export default function ProductFaq({ faq }: { faq: ProductPageData['faq'] }) {
  const questions = faq.tabs.flatMap((tab) => tab.questions);

  return (
    <section id="faq" className="bg-card py-14 md:py-16">
      <div className="container grid items-start gap-8 md:grid-cols-[1fr_1.7fr] md:gap-x-16">
        <div className="space-y-4 md:sticky md:top-28">
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
        </div>

        <Accordion type="single" collapsible className="border-t">
          {questions.map((item) => (
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
      </div>
    </section>
  );
}
