import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";
import { differenceInYears } from "date-fns";

interface Experience {
  position: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    position: "CORE Banking and Auxiliary Systems Officer",
    organization: "Ahadu Bank",
    location: "Addis Ababa",
    period: "July 2025 – Present",
    description:
      "As a CORE Banking and Auxiliary Systems Officer, I design, develop, and maintain core banking and auxiliary software systems, lead mobile banking application development and Play Store management, and deliver robust API integrations.",
    responsibilities: [
      "Software System Development",
      "Mobile Application Development",
      "Google Play Store Account and Application Management",
      "Mobile Banking Application Development",
      "Software Maintenance and Customization",
    ],
    technologies: [
      "React.js",
      "Flutter",
      "PostgreSQL",
      "Apache Superset",
      "NestJS",
      "Git/GitLab",
      "WSO2",
      "Integration",
      "Core Banking System",
      "API Management",
    ],
  },
  {
    position: "Software Developer",
    organization: "Brothers IT PLC",
    location: "Addis Ababa",
    period: "Apr 2023 - July 2025",
    description:
      "As a Software Developer, I design and implement software systems, develop frontend and backend solutions, and seamlessly integrate APIs. Additionally, I ensure efficient deployment by containerizing projects with Docker, enhancing scalability and consistency across environments.",
    responsibilities: [
      "Design and implement scalable software solutions",
      "Manage Azure cloud infrastructure and ensure seamless system deployments",
      "Configure and manage CI pipelines for automated integration workflows",
      "Host data visualization tools and implement dashboards across different systems",
      "Plan, schedule, and manage projects to ensure timely and efficient project execution.",
      "Work with hardware integration like RS232-enabled weighing machines",
    ],
    technologies: [
      "React.js",
      "Django",
      "Flutter",
      "Azure",
      "Docker",
      "PostgreSQL",
      "Apache Superset",
      "CI/CD",
      "Python",
      "JavaScript",
      "Git/GitHub",
    ],
  },
];

const START_DATE = new Date(2023, 3, 1); // April 2023

export function ExperienceSection() {
  const yearsOfExperience = differenceInYears(new Date(), START_DATE);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="experience"
      className="py-20 lg:py-16 section-padding bg-surface/30"
    >
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
              Professional journey building innovative solutions and leading
              development projects
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent-hover"></div>

            <div className="space-y-12">
              {experiences.map((exp) => (
                <div key={exp.organization} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow"></div>

                  <Card className="ml-16 glass-morphism hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gradient mb-2">
                            {exp.position}
                          </h3>
                          <div className="flex items-center space-x-4 text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Building className="h-4 w-4" />
                              <span className="font-medium">{exp.organization}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 mt-4 lg:mt-0">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <Badge variant="secondary" className="text-primary">
                            {exp.period}
                          </Badge>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="space-y-3">
                          <h4 className="font-semibold text-foreground">
                            Key Responsibilities:
                          </h4>
                          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            {exp.responsibilities.map((resp) => (
                              <li key={resp}>{resp}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4">
                          <h4 className="font-semibold text-foreground mb-3">
                            Technologies Used:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="bg-primary/5 border-primary/20"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills Highlights */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            <Card className="glass-morphism text-center group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-gradient mb-2">
                  {yearsOfExperience}+
                </div>
                <p className="text-muted-foreground">
                  Years of Professional Experience
                </p>
              </CardContent>
            </Card>

            <Card className="glass-morphism text-center group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-gradient mb-2">7</div>
                <p className="text-muted-foreground">
                  Real World Projects Completed
                </p>
              </CardContent>
            </Card>

            <Card className="glass-morphism text-center group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-gradient mb-2">20+</div>
                <p className="text-muted-foreground">Technologies and Tools</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
