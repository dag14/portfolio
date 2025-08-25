import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

export function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="py-20 lg:py-32 section-padding bg-surface/30">
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
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional journey building innovative solutions and leading development projects
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent-hover"></div>
            
            <div className="space-y-12">
              {/* Current Position */}
              <div className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow"></div>
                
                <Card className="ml-16 glass-morphism hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gradient mb-2">Software Developer</h3>
                        <div className="flex items-center space-x-4 text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Building className="h-4 w-4" />
                            <span className="font-medium">Brothers IT PLC</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>Addis Ababa</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mt-4 lg:mt-0">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <Badge variant="secondary" className="text-primary">
                          Apr 2023 - Present
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        As a Software Developer, I design and implement software systems, develop frontend 
                        and backend solutions, and seamlessly integrate APIs. Additionally, I ensure efficient 
                        deployment by containerizing projects with Docker, enhancing scalability and consistency 
                        across environments.
                      </p>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Key Responsibilities:</h4>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                          <li>Manage Azure cloud infrastructure and oversee database integration</li>
                          <li>Configure CI/CD pipelines for automated deployment workflows</li>
                          <li>Implement self-hosted Apache Superset dashboards for data visualization</li>
                          <li>Contribute to planning and scheduling using Microsoft Project</li>
                          <li>Work with hardware integration like RS232-enabled weighing machines</li>
                        </ul>
                      </div>

                      <div className="pt-4">
                        <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {[
                            'React.js', 'Django', 'Flutter', 'Azure', 'Docker', 
                            'PostgreSQL', 'Apache Superset', 'CI/CD', 'Python', 
                            'JavaScript', 'Git/GitHub'
                          ].map((tech) => (
                            <Badge key={tech} variant="outline" className="bg-primary/5 border-primary/20">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>

          {/* Skills Highlights */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            <Card className="glass-morphism text-center group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-gradient mb-2">2+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism text-center group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-gradient mb-2">15+</div>
                <p className="text-muted-foreground">Projects Completed</p>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism text-center group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-gradient mb-2">10+</div>
                <p className="text-muted-foreground">Technologies Mastered</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}