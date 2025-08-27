import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Molla Atanaw",
    role: "Department Chair, Computer Engineering,",
    company: "Bahir Dar Institute of Technology",
    content:
      "Dagim is one of the brightest and most active students I have taught. He is sharp, analytical, and highly determined. His final year project was one of the best in our faculty, and he consistently proved himself as one of the top students in computer engineering at BiT-BDU.",
    rating: 5,
    avatar: "MA",
  },
  {
    name: "Tegegn Kebebaw",
    role: "Instructor",
    company: "Bahir Dar Institute of Technology",
    content:
      "Dagim is a hardworking and creative engineer with excellent problem-solving skills. Reliable, cooperative, and always eager to share knowledge, he is a true team player with a passion for excellence.",
    rating: 5,
    avatar: "TK",
  },
  {
    name: "Pawlos Girma",
    role: "Software Engineering Team Lead",
    company: "Brothers IT PLC",
    content:
      "Dagim is a proactive and dependable engineer with strong technical and leadership skills. From cloud systems to DevOps, he consistently delivers innovation, accountability, and high-quality results.",
    rating: 5,
    avatar: "PG",
  },
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="testimonials" className="py-20 lg:py-16 section-padding">
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
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gradient">
              Testimonials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Testimonials from My Instructors and Technical Team Leads{" "}
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
                              <Star
                                key={i}
                                className="h-5 w-5 fill-primary text-primary"
                              />
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
                    index === currentIndex ? "bg-primary" : "bg-primary/30"
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
