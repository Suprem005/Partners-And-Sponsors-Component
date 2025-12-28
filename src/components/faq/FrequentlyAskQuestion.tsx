import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FrequentlyAskQuestion() {
  return (
    <section className="@container">
      <div className="px-4 pb-4 mt-4">
        <h3 className="text-2xl @3xl:text-3xl text-start font-semibold pb-4">
          Frequently Asked Question
        </h3>
        <h3 className="text-md text-muted-foreground italic">
          Please read our FAQ before sending us a message.
        </h3>
      </div>

      <div className="px-4 border-b-2 border-dotted pb-4 ">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-md">
              How do i host and event?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Our flagship product combines cutting-edge technology with sleek
                design. Built with premium materials, it offers unparalleled
                performance and reliability.
              </p>
              <p>
                Key features include advanced processing capabilities, and an
                intuitive user interface designed for both beginners and
                experts.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-md">
              Shipping Details
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                We offer worldwide shipping through trusted courier partners.
                Standard delivery takes 3-5 business days, while express
                shipping ensures delivery within 1-2 business days.
              </p>
              <p>
                All orders are carefully packaged and fully insured. Track your
                shipment in real-time through our dedicated tracking portal.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-md">
              Return Policy
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                We stand behind our products with a comprehensive 30-day return
                policy. If you&apos;re not completely satisfied, simply return
                the item in its original condition.
              </p>
              <p>
                Our hassle-free return process includes free return shipping and
                full refunds processed within 48 hours of receiving the returned
                item.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
