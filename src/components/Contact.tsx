import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - would typically send to a backend
    window.location.href = `mailto:chittemrakesh@karunya.edu.in?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden tech-grid">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="text-primary font-heading text-sm tracking-wider uppercase">
            — Contact
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card p-6 space-y-6">
              <h3 className="font-heading text-xl font-semibold">Get in Touch</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:chittemrakesh@karunya.edu.in"
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 border border-border/50 hover:border-primary/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-body text-foreground">chittemrakesh@karunya.edu.in</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/rakesh-reddy-5b2978355/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 border border-border/50 hover:border-primary/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="font-body text-foreground">rakesh-reddy-5b2978355</p>
                  </div>
                </a>

                <a
                  href="https://github.com/Ycrakeshreddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 border border-border/50 hover:border-primary/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                    <Github className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="font-body text-foreground">Ycrakeshreddy</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass-card p-6">
              <p className="text-muted-foreground font-body italic text-center">
                "Innovation distinguishes between a leader and a follower."
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-6 md:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="font-body text-sm text-muted-foreground">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body text-foreground placeholder:text-muted-foreground"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="font-body text-sm text-muted-foreground">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body text-foreground placeholder:text-muted-foreground"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-body text-sm text-muted-foreground">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body text-foreground placeholder:text-muted-foreground resize-none"
                  placeholder="Tell me about your project or idea..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-heading font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-primary/30"
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
