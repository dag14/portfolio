import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Khat Taxation System',
    description: 'A comprehensive system that calculates taxes based on the weight of khat at checkpoints, integrated with weighing machine prototypes via RS232 and Python. Features administrative management, detailed reporting, and resource management.',
    technologies: ['React', 'Django', 'PostgreSQL', 'Python', 'RS232'],
    category: 'Government System',
    featured: true
  },
  {
    title: 'Tankua Car Rental Management',
    description: 'A functionality-rich car rental management web application for a tour and travel company based in Bahir Dar. Comprehensive booking system with customer management.',
    technologies: ['HTML', 'Bootstrap', 'JavaScript', 'PHP', 'MySQL'],
    category: 'Web Application',
    featured: true
  },
  {
    title: 'Bidding Process Management',
    description: 'Developed a system to manage the end-to-end bidding process including submission, evaluation, approvals, and reporting. Improved transparency and workflow efficiency.',
    technologies: ['React', 'Django', 'PostgreSQL', 'Azure'],
    category: 'Business System',
    featured: true
  },
  {
    title: 'Revenue Planning & Reporting',
    description: 'Built a planning and reporting system to manage tax revenue collection plans across regional hierarchies (Region > Zone > City > Woreda), with approval workflows and detailed reports.',
    technologies: ['React', 'Django', 'Apache Superset', 'PostgreSQL'],
    category: 'Government System',
    featured: true
  },
  {
    title: 'Income Tax Calculator Mobile App',
    description: 'A Flutter-based mobile application that calculates income taxes based on Ethiopian tax laws. Provides users with breakdowns, summaries, and compliance-friendly reporting.',
    technologies: ['Flutter', 'Dart', 'SQLite'],
    category: 'Mobile Application',
    featured: false
  }
];

export function ProjectsSection() {
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

  return (
    <section id="projects" className="py-20 lg:py-32 section-padding bg-surface/30">
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
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of innovative solutions I've built, from government systems 
              to mobile applications, each designed to solve real-world problems
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-8"
          >
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="glass-morphism h-full hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary">
                          {project.category}
                        </Badge>
                        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                      </div>
                      <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="icon" variant="ghost" className="h-8 w-8">
                          <Github className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-accent/5 border-accent/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Other Projects */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-center text-gradient">Other Notable Projects</h3>
            <div className="space-y-4">
              {projects.filter(project => !project.featured).map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="group"
                >
                  <Card className="glass-morphism hover:bg-surface/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3">
                            <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                              {project.title}
                            </h4>
                            <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary text-xs">
                              {project.category}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground text-sm max-w-2xl">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="text-xs bg-accent/5 border-accent/20"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex space-x-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                          <Button size="icon" variant="ghost" className="h-8 w-8">
                            <Github className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="ghost" className="h-8 w-8">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-hero rounded-2xl p-8 glass-morphism"
          >
            <h3 className="text-2xl font-bold mb-4 text-gradient">Interested in Working Together?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new opportunities and innovative projects
            </p>
            <Button asChild className="btn-primary">
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
