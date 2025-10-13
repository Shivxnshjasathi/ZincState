"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function Faq() {
  const accordionItems = [
    {
      title: "What kind of software does Zinc State build?",
      content: (
        <div className="text-muted-foreground">
          We specialize in building foundational software solutions tailored to
          your unique business needs. This includes custom web applications,
          mobile apps (iOS & Android), and complex enterprise software systems.
          We partner with you from initial concept to final deployment.
        </div>
      ),
    },
    {
      title: "How does the development process work?",
      content: (
        <div className="text-muted-foreground">
          Our process is transparent and collaborative. It begins with a
          deep-dive discovery session to understand your goals, followed by
          strategy, design, agile development sprints, rigorous testing, and
          finally, deployment. We ensure you are involved and informed at every
          stage.
        </div>
      ),
    },
    {
      title: "How much will my project cost?",
      content: (
        <div className="text-muted-foreground">
          Since every project is unique, the cost depends on the scope,
          complexity, and required features. After our initial consultation, we
          provide a detailed, transparent proposal with a full cost breakdown,
          ensuring there are no surprises.
        </div>
      ),
    },
    {
      title: "What technologies do you specialize in?",
      content: (
        <div className="text-muted-foreground">
          We use a modern, robust tech stack to build scalable and secure
          applications. Our expertise includes React, React Native, Flutter,
          Swift, Kotlin, and more. We select the ideal technology to meet your
          project's specific needs.
        </div>
      ),
    },
    {
      title: "How long will it take to build our application?",
      content: (
        <div className="text-muted-foreground">
          Project timelines vary. A simple prototype might take a few weeks,
          while a complex enterprise platform could take several months. We
          establish a clear and realistic timeline during the proposal phase and
          provide consistent updates to ensure we meet our deadlines.
        </div>
      ),
    },
  ];

  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5, type: "spring", bounce: 0 }}
      className="relative w-full max-w-(--breakpoint-xl) mx-auto px-4 py-28 gap-5 md:px-8 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col gap-3 justify-center items-center">
        <h4 className="text-2xl font-bold sm:text-3xl bg-linear-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          Frequently Asked Questions
        </h4>
        <p className="max-w-xl text-muted-foreground text-center">
          Have questions? We have answers. Here are some of the most common
          inquiries we receive.
        </p>
      </div>
      <div className="flex w-full max-w-lg">
        <Accordion type="multiple" className="w-full">
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="text-muted-foreground"
            >
              <AccordionTrigger className="text-left">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
}
