import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Users, Lightbulb, Handshake } from "lucide-react";

const services = [
  {
    title: "Technical Mentoring",
    description: "Guidance and support for juniors and peers in programming concepts and project development.",
    icon: Users,
  },
  {
    title: "Programming Assistance",
    description: "Help with Python, Java, IoT implementations, and basic AI/ML concepts.",
    icon: BookOpen,
  },
  {
    title: "Project Guidance",
    description: "Idea validation, architecture planning, and hands-on support for technical projects.",
    icon: Lightbulb,
  },
  {
    title: "Collaboration",
    description: "Open to internships, learning-based roles, and collaborative opportunities.",
    icon: Handshake,
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="text-primary font-heading text-sm tracking-wider uppercase">
            — Services
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            As a student passionate about technology and growth, I offer value-driven services 
            to help others on their tech journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 space-y-4 text-center group hover:border-primary/50 transition-all"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 group-hover:scale-110 transition-all">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
