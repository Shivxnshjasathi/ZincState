"use client";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ananya Sharma",
      role: "CEO at MedConnect India",
      avatarInitials: "AS",
      content:
        "Zinc State didn't just build us an app; they built the backbone of our patient management system. Their team delivered a solution that is secure, scalable, and has fundamentally improved our patient care.",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      role: "CTO at FinSecure",
      avatarInitials: "VS",
      content:
        "The technical expertise at Zinc State is top-notch. They delivered clean, maintainable code and integrated seamlessly with our legacy systems. Their proactive approach saved us from major headaches.",
      rating: 5,
    },
    {
      name: "Priya Desai",
      role: "Founder of FreshCart",
      avatarInitials: "PD",
      content:
        "We had a tight deadline to launch our e-commerce platform. Zinc State moved incredibly fast without sacrificing quality. They are true partners who are as invested in your success as you are.",
      rating: 5,
    },
    {
      name: "Rohan Mehta",
      role: "Head of Product at LearnSphere",
      avatarInitials: "RM",
      content:
        "The user experience of our new e-learning platform is phenomenal. The Zinc State team translated our vision into an intuitive interface that our students love. Engagement has skyrocketed.",
      rating: 5,
    },
    {
      name: "Aisha Khan",
      role: "Operations Head at LogiChain",
      avatarInitials: "AK",
      content:
        "The custom logistics software they developed has automated 80% of our manual tasks. The efficiency gains are incredible, a testament to their ability to understand complex operational workflows.",
      rating: 5,
    },
    {
      name: "Arjun Reddy",
      role: "Founder, SmartBuild AI",
      avatarInitials: "AR",
      content:
        "As a startup, we needed a technical partner who could be flexible and adapt with us. Zinc State's agile process was a perfect fit, helping us iterate quickly and build a product that resonates with our market.",
      rating: 5,
    },
    {
      name: "Kavita Joshi",
      role: "CEO at UrbanNest Realty",
      avatarInitials: "KJ",
      content:
        "Zinc State developed a custom CRM for us that has become our biggest competitive advantage. Their attention to detail and commitment to our business goals was evident in every interaction.",
      rating: 5,
    },
    {
      name: "Raj Patel",
      role: "CTO at Healthify Now",
      avatarInitials: "RP",
      content:
        "We needed a HIPAA-compliant mobile app with complex features. Zinc State's deep understanding of security and compliance in the healthcare space gave us complete confidence. They are experts.",
      rating: 5,
    },
    {
      name: "Sameer Gupta",
      role: "Engineering Manager at FleetFlow",
      avatarInitials: "SG",
      content:
        "The communication throughout the project was exceptional. We always knew the project's status, and their team felt like an extension of our own. The final product exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Neha Agarwal",
      role: "Product Director at TravelWise",
      avatarInitials: "NA",
      content:
        "From wireframes to deployment, the entire process was a masterclass in product development. They provided invaluable insights that improved our initial concept and delivered a world-class application.",
      rating: 5,
    },
  ];

  const StarIcon = () => (
    <svg
      className="w-4 h-4 text-yellow-500"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <section id="testimonials" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20 flex flex-col gap-3"
        >
          <h2 className="text-xl font-semibold sm:text-2xl bg-linear-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
            Building Success Stories, Together
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-center">
            We&apos;re proud to be the foundational technology partner for
            ambitious businesses.
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              className="break-inside-avoid mb-8"
            >
              <div className="p-6 rounded-xl bg-card border border-border transition-colors duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-linear-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center text-sm font-medium border border-primary/20">
                    {testimonial.avatarInitials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
