import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Calendar } from 'lucide-react';

export function AboutSection() {
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
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 lg:py-32 section-padding">
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
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate software developer with a strong foundation in systems engineering 
              and modern web technologies
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Split Screen Layout */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* My Journey */}
              <motion.div variants={itemVariants}>
                <Card className="glass-morphism h-full">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-gradient">My Journey</h3>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        I am an intermediate-level professional with a strong systems engineering and 
                        software development background. My earlier experience with systems equipped me 
                        with expertise in Active Directory, Microsoft Exchange Services, Network Security, 
                        and Networking Devices configuration.
                      </p>
                      <p>
                        Transitioning to software development, I gained proficiency in frontend development 
                        with React.js, mobile app development with Flutter, backend development with Django, 
                        and cloud services with Azure. I also work with version control using Git/GitHub, 
                        project management tools like Jira and ClickUp, and containerization with Docker.
                      </p>
                      <p>
                        My experience further includes deploying and managing applications on Azure, 
                        configuring CI/CD pipelines, integrating hardware data via RS232 in Python, 
                        and building self-hosted visualization dashboards with Apache Superset. 
                        I am committed to continuous learning, collaboration, and adapting to new challenges.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Education */}
              <motion.div variants={itemVariants}>
                <Card className="glass-morphism h-full">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-gradient">Education</h3>
                    <div className="space-y-4">
                      <div className="border-l-2 border-primary pl-6 space-y-2">
                        <h4 className="text-xl font-semibold">Bachelor of Science in Computer Engineering</h4>
                        <p className="text-primary font-medium">Bahir Dar Institute of Technology</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>Bahir Dar, Ethiopia</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>Oct 2017 - Apr 2023</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          Developed strong skills in C++, Java, Python, data structures and algorithms, 
                          software engineering, and computer networks. Enhanced abilities in software 
                          documentation preparation, project collaboration, and soft skills.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}