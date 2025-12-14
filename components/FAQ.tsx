import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
  return (
    <section className="w-full py-20 flex justify-center px-4" id="faq">
      <div className="w-full max-w-5xl">
        {/* FAQ Card */}
        <div className="border border-border rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Frequently Asked Questions
          </h2>

          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="cursor-pointer text-left text-lg font-medium">
                What can I expect in the first session?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                The first session focuses on getting to know you — your concerns,
                goals, and what brings you to therapy. It’s a safe space for you to
                share at your comfort level while we plan your way forward together.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="cursor-pointer text-left text-lg font-medium">
                How long is each session?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Each session typically lasts 45–60 minutes and is conducted online
                for your convenience and comfort.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="cursor-pointer text-left text-lg font-medium">
                How many sessions will I need?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                The number of sessions varies depending on your needs and goals.
                Some clients benefit from short-term work, while others prefer
                ongoing support for deeper growth and consistency.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="cursor-pointer text-left text-lg font-medium">
                Is everything I share confidential?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Yes. Everything discussed in therapy remains confidential. Information
                is shared only under legal or ethical obligations, such as risk of harm
                to self or others.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="cursor-pointer text-left text-lg font-medium">
                Do I need a mental health diagnosis to start therapy?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Not at all. You don’t need a diagnosis to seek help. Therapy is for
                anyone who wishes to understand themselves better, manage emotions,
                or improve overall well-being.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="cursor-pointer text-left text-lg font-medium">
                What issues can I seek help for?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                I work with concerns such as anxiety, depression, stress, low
                self-esteem, body image issues, self-acceptance, and goal setting,
                among others.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="cursor-pointer text-left text-lg font-medium">
                How do I know if therapy is working?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Progress may look different for everyone — feeling lighter, gaining
                clarity, or responding differently to stress are often early signs.
                We’ll regularly review your goals to track growth together.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="cursor-pointer text-left text-lg font-medium">
                What if I feel nervous before starting therapy?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                It’s completely natural. Many people feel unsure in the beginning.
                My aim is to make you feel comfortable and supported as we move at
                your pace.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="cursor-pointer text-left text-lg font-medium">
                Can I stop therapy anytime?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Yes. You have full control over your therapeutic journey. We can
                also discuss a proper closure process to ensure you feel ready and
                supported before ending sessions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="cursor-pointer text-left text-lg font-medium">
                How can I book a session?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                You can explore the available plans on the website, choose what
                suits you best, book a convenient slot, and confirm your session
                through payment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11">
              <AccordionTrigger className="cursor-pointer text-left text-lg font-medium">
                Do you offer therapy for children, adolescents, or adults?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                I currently provide therapy for adolescents and adults. Sessions
                are customized to meet the emotional and developmental needs of
                each age group.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default FAQ
