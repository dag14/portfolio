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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex justify-center space-x-4"
          >
            
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