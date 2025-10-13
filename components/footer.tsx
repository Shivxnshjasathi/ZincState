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
      icon: TwitterLogoIcon,
    },
    {
      name: "GitHub",
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
          <div className="text-xl font-medium">
            Zinc State
          </div>
          <div className="flex space-x-3">
            {socialLinks.map((social) => (
              <Button
                key={social.name}
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full hover:bg-muted/50 cursor-default"
              >
                <div aria-label={social.name}>
                  <social.icon className="h-4 w-4" />
                </div>
              </Button>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MobileIcon />
              <span>+91 62666 56036</span>
            </div>
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

