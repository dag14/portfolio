import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Download,
  Send,
  Clock,
  MessageCircle,
  Twitter,
  Instagram
} from 'lucide-react';

export function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const handleDownloadCV = () => {
    // Create a CV download link
    const link = document.createElement('a');
    link.href = '/cv-dagim-asrat.pdf';
    link.download = 'Dagim_Asrat_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 section-padding">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-display font-bold">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss your next project or explore collaboration opportunities? 
              I'd love to hear from you and learn about your ideas.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gradient">Get In Touch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always excited to work on new projects and collaborate with 
                  passionate individuals and teams. Whether you have a project in mind, 
                  need consultation, or just want to chat about technology, feel free to reach out.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 rounded-lg glass-morphism group cursor-pointer"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a 
                      href="mailto:dagimasrat3@gmail.com"
                      className="font-medium text-foreground hover:text-primary transition-colors"
                    >
                      dagimasrat3@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 rounded-lg glass-morphism group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground">091 310 1699</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 rounded-lg glass-morphism group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">Abera Gizwa St., Addis Ababa, Ethiopia</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 rounded-lg glass-morphism group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Response Time</p>
                    <p className="font-medium text-foreground">Usually within 24 hours</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Connect on Social Media</h4>
                <div className="flex space-x-4">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="btn-ghost"
                    asChild
                  >
                    <a 
                      href="https://www.linkedin.com/in/dagimasrat" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="btn-ghost"
                    asChild
                  >
                    <a 
                      href="https://github.com/Bit-dagim" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="btn-ghost"
                    asChild
                  >
                    <a 
                      href="https://github.com/dag14" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="btn-ghost"
                    asChild
                  >
                    <a 
                      href="https://discord.com/users/773498692888035339" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="btn-ghost"
                    asChild
                  >
                    <a 
                      href="https://twitter.com/Dagim_AFC" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="btn-ghost"
                    asChild
                  >
                    <a 
                      href="https://www.instagram.com/dagim_afc/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div variants={itemVariants} className="space-y-8">
              <Card className="glass-morphism">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gradient">Ready to Start a Project?</h3>
                    <p className="text-muted-foreground">
                      I'm available for freelance work, consulting, and full-time opportunities. 
                      Let's discuss how we can bring your ideas to life.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button 
                      asChild 
                      className="btn-primary w-full"
                      size="lg"
                    >
                      <a href="mailto:dagimasrat3@gmail.com">
                        <Send className="h-5 w-5 mr-2" />
                        Send a Message
                      </a>
                    </Button>
                    
                    <Button 
                      onClick={handleDownloadCV}
                      variant="ghost" 
                      className="btn-ghost w-full"
                      size="lg"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Download My CV
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Availability Status */}
              <Card className="glass-morphism">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                    <div>
                      <p className="font-medium text-foreground">Available for new projects</p>
                      <p className="text-sm text-muted-foreground">
                        Currently accepting new client work and collaboration opportunities
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info & Languages */}
              <div className="space-y-6">
                {/* Languages */}
                <Card className="glass-morphism">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-4">Languages</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Amharic</span>
                        <span className="text-sm text-muted-foreground">Native</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">English</span>
                        <span className="text-sm text-muted-foreground">Fluent</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">German</span>
                        <span className="text-sm text-muted-foreground">B1 Certified</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                {/* <div className="grid grid-cols-2 gap-4">
                  <Card className="glass-morphism text-center">
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-gradient">24h</div>
                      <p className="text-sm text-muted-foreground">Response Time</p>
                    </CardContent>
                  </Card>
                  <Card className="glass-morphism text-center">
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-gradient">100%</div>
                      <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                    </CardContent>
                  </Card>
                </div> */}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}