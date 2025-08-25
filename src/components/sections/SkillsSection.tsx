import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Palette, 
  Cloud, 
  Database, 
  GitBranch, 
  Settings, 
  Zap,
  Heart
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['C++', 'JavaScript', 'Java', 'Python', 'Dart', 'SQL'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Frameworks & Libraries',
    icon: Palette,
    skills: ['React.js', 'Three.js', 'Flutter', 'Tailwind CSS', 'Django', 'Django REST Framework'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    skills: ['Docker', 'Azure (VMs, Container Apps)', 'CI/CD (GitHub Actions)', 'Virtualization'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Data & Visualization',
    icon: Database,
    skills: ['Apache Superset', 'PostgreSQL', 'Data Analysis', 'Report Generation'],
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Version Control & PM',
    icon: GitBranch,
    skills: ['Git', 'Jira', 'ClickUp', 'Scrum/Agile', 'Microsoft Project'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Systems & Networking',
    icon: Settings,
    skills: ['PowerShell', 'Cisco IOS', 'Active Directory', 'Network Security'],
    color: 'from-gray-500 to-slate-500'
  },
  {
    title: 'Hardware Integration',
    icon: Zap,
    skills: ['RS232 Serial Communication', 'Python Hardware Integration', 'IoT Devices'],
    color: 'from-yellow-500 to-amber-500'
  },
  {
    title: 'Personal Skills',
    icon: Heart,
    skills: ['Adaptability', 'Communication', 'Problem Solving', 'Stress Management', 'Teamwork'],
    color: 'from-rose-500 to-pink-500'
  }
];

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-32 section-padding">
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
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and methodologies for building 
              scalable, efficient, and innovative solutions
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="glass-morphism h-full hover:shadow-elegant transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <category.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg font-bold">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs bg-primary/5 border-primary/20 hover:bg-primary/10 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Proficiency Levels */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-hero rounded-2xl p-8 glass-morphism"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-gradient">Core Competencies</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">Frontend</div>
                <div className="text-sm text-muted-foreground">React.js, Flutter, Responsive Design</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">Backend</div>
                <div className="text-sm text-muted-foreground">Django, REST APIs, Database Design</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">Cloud</div>
                <div className="text-sm text-muted-foreground">Azure, Docker, CI/CD Pipelines</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">Systems</div>
                <div className="text-sm text-muted-foreground">Networking, Security, Hardware Integration</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}