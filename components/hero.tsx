"use client";
/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative justify-center items-center">
      <section className="max-w-(--breakpoint-xl) mx-auto px-4 py-28 gap-12 md:px-8 flex flex-col justify-center items-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.6, type: "spring", bounce: 0 }}
          className="flex flex-col justify-center items-center space-y-5 max-w-4xl mx-auto text-center"
        >
          <span className="w-fit h-full text-sm bg-card px-3 py-1 border border-border rounded-full">
            Your Idea, Built Right.
          </span>
          <h1 className="text-4xl font-medium tracking-tighter mx-auto md:text-6xl text-pretty bg-linear-to-b from-sky-800 dark:from-sky-100 to-foreground dark:to-foreground bg-clip-text text-transparent">
            From Idea to Flawless App, Faster Than You Think.
          </h1>
          <p className="max-w-2xl text-lg mx-auto text-muted-foreground text-balance">
            We transform your vision into secure, scalable, and powerful
            software. Stop worrying about the tech—focus on your growth.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0"
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button className="shadow-lg">Start Your Project</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Let&apos;s Build Your Vision</DialogTitle>
                  <DialogDescription>
                    Have an idea? Tell us about it. We&apos;ll provide a clear plan
                    and a no-obligation quote to bring it to life.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button asChild size="sm">
                    {/* Make sure to replace this with your actual contact email or scheduling link */}
                    <a
                      href="mailto:contact@zincstate.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book a Free Consultation
                    </a>
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </motion.div>
        </motion.div>
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, type: "spring", bounce: 0 }}
        className="w-full h-full absolute -top-32 flex justify-end items-center pointer-events-none "
      >
        <div className="w-3/4 flex justify-center items-center">
          <div className="w-12 h-[600px] bg-light blur-[70px] rounded-3xl max-sm:rotate-15 sm:rotate-35 will-change-transform"></div>
        </div>
      </motion.div>
    </div>
  );
}

