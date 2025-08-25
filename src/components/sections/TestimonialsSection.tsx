import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Project Manager",
    company: "TechFlow Solutions",
    content: "Dagim's technical expertise and problem-solving abilities are exceptional. He delivered our complex web application ahead of schedule with outstanding quality.",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Michael Chen", 
    role: "Senior Developer",
    company: "Digital Innovations",
    content: "Working with Dagim was a pleasure. His knowledge of React and Django helped us modernize our entire tech stack efficiently.",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Aisha Hassan",
    role: "CTO",
    company: "StartupHub",
    content: "Dagim's ability to integrate complex systems and his attention to detail made him an invaluable asset to our development team.",
    rating: 5,
    avatar: "AH"
  },
  {
    name: "David Rodriguez",
    role: "Lead Architect", 
    company: "CloudTech Inc",
    content: "His expertise in Azure and Docker helped us achieve seamless deployment and scaling. Highly recommend his services.",
    rating: 5,
    avatar: "DR"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

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
    <section id="testimonials" className="py-20 lg:py-32 section-padding">
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
              Client <span className="text-gradient">Testimonials</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What clients and colleagues say about working with me
            </p>
          </motion.div>

          {/* Testimonials Slider */}
          <motion.div variants={itemVariants} className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="glass-morphism max-w-4xl mx-auto">
                      <CardContent className="p-8 md:p-12">
                        <div className="text-center space-y-6">
                          {/* Quote Icon */}
                          <div className="flex justify-center">
                            <Quote className="h-12 w-12 text-primary/30" />
                          </div>
                          
                          {/* Testimonial Content */}
                          <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground font-medium">
                            "{testimonial.content}"
                          </blockquote>
                          
                          {/* Rating */}
                          <div className="flex justify-center space-x-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                            ))}
                          </div>
                          
                          {/* Author Info */}
                          <div className="flex items-center justify-center space-x-4">
                            <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                              <span className="text-lg font-bold text-primary">
                                {testimonial.avatar}
                              </span>
                            </div>
                            <div className="text-left">
                              <h4 className="text-lg font-semibold text-foreground">
                                {testimonial.name}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {testimonial.role} at {testimonial.company}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary' : 'bg-primary/30'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}