import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Clock,
  Twitter,
  Instagram,
} from "lucide-react";
import { RxDiscordLogo } from "react-icons/rx";

export function ContactSection() {
  // EmailJS credentials
  const EMAILJS_SERVICE_ID = "service_ghb0v06";
  const EMAILJS_TEMPLATE_ID = "template_nbd5x7q";
  const EMAILJS_PUBLIC_KEY = "QvO_kN8rlnS7NBEY2";

  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Helper for theme-aware toast (uses CSS variables)
  const themedToast = (
    type: "success" | "error" | "loading",
    title: string,
    description: string
  ) => {
    const styles = {
      success: "bg-[hsl(var(--success))] text-[hsl(var(--surface))]",
      error:
        "bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))]",
      loading: "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]",
    };

    toast({
      title,
      description,
      className: `border-none animate-slide-up ${styles[type]}`,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      themedToast(
        "error",
        "Missing fields",
        "Please fill in Name, Email, and Message."
      );
      return;
    }

    setLoading(true);
    themedToast(
      "loading",
      "Sending message...",
      "Please wait while your message is being sent."
    );

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      themedToast(
        "success",
        "Message Sent!",
        "Thanks for reaching out, I’ll reply within 24h."
      );

      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      themedToast(
        "error",
        "Failed to send",
        "Something went wrong. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-16 section-padding">
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
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Details */}
              <div className="space-y-4">
                {/* Email */}
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

                {/* Phone */}
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

                {/* Location */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 rounded-lg glass-morphism group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </motion.div>

                {/* Response Time */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 rounded-lg glass-morphism group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Response Time
                    </p>
                    <p className="font-medium text-foreground">
                      Usually within 24 hours
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">
                  Connect on Socials
                </h4>
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
                      <RxDiscordLogo className="h-5 w-5" />
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
                    <h3 className="text-2xl font-bold text-gradient">
                      Ready to Start a Project?
                    </h3>
                    <p className="text-muted-foreground">
                      I'm available for freelance work, consulting, and
                      full-time opportunities. Let's discuss how we can bring
                      your ideas to life.
                    </p>
                  </div>

                  {/* Form with EmailJS */}
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    noValidate
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your Name"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Write your message here..."
                      rows={4}
                      required
                    />
                    <Button
                      type="submit"
                      className="btn-primary w-fit"
                      size="lg"
                      disabled={loading}
                    >
                      <Send className="h-5 w-5 mr-2" />
                      {loading ? "Sending..." : "Send a Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Availability Status */}
              <Card className="glass-morphism">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                    <div>
                      <p className="font-medium text-foreground">
                        Available for new projects
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Currently accepting new client work and collaboration
                        opportunities
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Languages */}
              <div className="space-y-6">
                <Card className="glass-morphism">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-4">
                      Languages
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Amharic</span>
                        <span className="text-sm text-muted-foreground">
                          Native
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">English</span>
                        <span className="text-sm text-muted-foreground">
                          Fluent
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">German</span>
                        <span className="text-sm text-muted-foreground">
                          B1 Certified
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
