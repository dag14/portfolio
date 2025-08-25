import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TechParticles } from '../three/TechParticles';
import { FloatingGeometry } from '../three/FloatingGeometry';
import { useTheme } from '../ThemeProvider';

export function HeroSection() {
  const { effectiveTheme } = useTheme();
  const isDark = effectiveTheme === 'dark';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <TechParticles isDark={isDark} />
            <FloatingGeometry />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
            <Environment preset="sunset" />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen pt-20">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground font-medium tracking-wide uppercase"
              >
                Hello, I'm
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-none"
              >
                <span className="text-gradient">DAGIM</span>
                <br />
                <span className="text-foreground">ASRAT</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl lg:text-2xl text-muted-foreground font-medium"
              >
                Software Developer
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              Passionate about creating working solutions to real problems with React.js, 
              Flutter, and cloud technologies. Experienced in building scalable applications 
              that make a difference.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex items-center space-x-4"
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
              <Button
                size="icon"
                variant="ghost"
                className="btn-ghost"
                asChild
              >
                <a href="https://discord.com/users/773498692888035339" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex items-center space-x-6"
            >
              <Button asChild className="btn-primary">
                <a href="#projects">View My Work</a>
              </Button>
              <Button asChild variant="ghost" className="btn-ghost">
                <a href="#contact">Let's Talk</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - World Map Inspiration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-96 h-96 rounded-full bg-gradient-hero backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold text-gradient">+3</div>
                  <div className="text-lg text-muted-foreground">Years of Experience</div>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">10+</div>
                      <div className="text-sm text-muted-foreground">Technologies</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-muted-foreground"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}