import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Mic, Plane, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Smart Health Monitoring System",
    description: "Real-time monitoring of heart rate, SpO₂, body temperature, and environmental conditions for proactive healthcare.",
    tags: ["IoT", "ESP32", "MAX30100", "DS18B20", "DHT11"],
    icon: Heart,
    color: "from-red-500/20 to-pink-500/20",
  },
  {
    title: "IoT with Voice Assistance",
    description: "Python-based voice assistant integrated with IoT systems for automation and smart interaction capabilities.",
    tags: ["Python", "IoT", "Voice AI", "VS Code"],
    icon: Mic,
    color: "from-purple-500/20 to-indigo-500/20",
  },
  {
    title: "Travel Management System",
    description: "Java-based desktop application for managing travel bookings and records with focus on GUI design and user experience.",
    tags: ["Java", "GUI", "Desktop App", "CRUD"],
    icon: Plane,
    color: "from-blue-500/20 to-cyan-500/20",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden tech-grid">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="text-primary font-heading text-sm tracking-wider uppercase">
            — My Projects
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            A showcase of innovative projects blending AI, IoT, and software development 
            to solve real-world problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 space-y-4 group hover:border-primary/50 transition-all cursor-pointer"
            >
              {/* Project Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <project.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-body rounded-full bg-muted/50 text-muted-foreground border border-border/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://github.com/Ycrakeshreddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
