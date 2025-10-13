"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckIcon } from "@radix-ui/react-icons";

export default function Pricing() {
  const plans = [
    {
      name: "Launchpad Package",
      desc: "Perfect for turning your vision into a market-ready MVP quickly and efficiently.",
      price: "Let's Talk",
      priceType: "contact",
      isMostPop: false,
      features: [
        "Strategic Discovery & Planning",
        "Bespoke UI/UX Design",
        "Agile Development of Core Features",
        "Fully Responsive Web or Native Mobile App",
        "Standard QA & Testing",
        "Deployment & Go-Live Support",
      ],
    },
    {
      name: "Growth Engine",
      desc: "The complete solution for scaling your app, adding powerful features, and capturing your market.",
      price: "Get a Quote",
      priceType: "quote",
      isMostPop: true,
      features: [
        "Everything in Launchpad Package",
        "Advanced Feature Implementation",
        "Seamless Third-Party API Integrations",
        "Scalable Cloud Architecture",
        "Dedicated Project Manager",
        "Performance Optimization",
      ],
    },
    {
      name: "Enterprise Solution",
      desc: "A strategic partnership for organizations requiring mission-critical performance and security.",
      price: "Contact Us",
      priceType: "contact",
      isMostPop: false,
      features: [
        "Everything in Growth Engine Package",
        "Dedicated Full-Stack Development Team",
        "Enterprise-Grade Security & Compliance",
        "Custom Service Level Agreement (SLA)",
        "Ongoing Proactive Maintenance & Support",
        "Quarterly Strategic Reviews",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="w-full max-w-7xl mx-auto px-4 py-24 md:px-6"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-16 flex flex-col gap-3"
      >
        <h2 className="text-xl font-semibold sm:text-2xl bg-linear-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          Pricing That Scales With You
        </h2>
        <p className="mx-auto max-w-xl text-muted-foreground text-center">
          Transparent packages designed to deliver value at every stage of your
          business growth. Let&apos;s build something great together.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative ${plan.isMostPop ? "scale-105" : ""}`}
          >
            <Card
              className={`relative h-full flex flex-col ${
                plan.isMostPop ? "border-2 border-primary shadow-xl" : ""
              }`}
            >
              {plan.isMostPop && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-card border-2 border-primary px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <CardContent className="p-6 pt-8 flex-grow">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 h-12">
                    {plan.desc}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold">{plan.price}</span>
                  </div>
                </div>

                <Separator className="my-6" />

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm"
                    >
                      <CheckIcon className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="p-6 pt-0 mt-auto">
                <Button
                  className="w-full"
                  variant={plan.isMostPop ? "default" : "outline"}
                  size="lg"
                >
                  {plan.priceType === "quote" ? "Get a Quote" : "Contact Us"}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
