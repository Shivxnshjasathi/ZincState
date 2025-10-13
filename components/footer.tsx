"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  MobileIcon,
  DrawingPinIcon,
} from "@radix-ui/react-icons";

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Twitter",
      href: "#", // Placeholder for your Twitter link
      icon: TwitterLogoIcon,
    },
    {
      name: "GitHub",
      href: "#", // Placeholder for your GitHub link
      icon: GitHubLogoIcon,
    },
  ];

  return (
    <footer className="w-full bg-card border-t border-border">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-6"
        >
          <a
            href="/"
            className="text-xl font-medium hover:opacity-80 transition-opacity"
          >
            Zinc State
          </a>
          <div className="flex space-x-3">
            {socialLinks.map((social) => (
              <Button
                key={social.name}
                asChild
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full hover:bg-muted/50"
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <a
              href="tel:6266656036"
              className="flex items-center gap-1 hover:text-foreground transition-colors"
            >
              <MobileIcon />
              <span>+91 62666 56036</span>
            </a>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-1">
              <DrawingPinIcon />
              <span>Bangalore, India</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground">
            <span>© {year} Zinc State</span>
            <span className="hidden sm:inline">•</span>
            <span className="font-medium">Foundational Software Solutions</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

