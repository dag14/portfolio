import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface/50 border-t border-border/20">
      <div className="container-max section-padding py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <div className="font-display font-bold text-xl">
              <span className="text-gradient">Dagim Asrat</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Software Developer & Systems Engineer
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex justify-center space-x-4"
          >
            <Button
              size="icon"
              variant="ghost"
              className="btn-ghost"
              asChild
            >
              <a href="mailto:dagimasrat3@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="btn-ghost"
              asChild
            >
              <a href="https://www.linkedin.com/in/dagimasrat" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="btn-ghost"
              asChild
            >
              <a href="https://github.com/Bit-dagim" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end"> 
              © {currentYear} Dagim Asrat
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Built with React, Three.js & Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}