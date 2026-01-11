import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Cybersecurity Virtual Intern",
    company: "Cisco",
    period: "June – August 2025",
    location: "Virtual",
    description: [
      "Gained hands-on exposure to cybersecurity fundamentals and networking concepts",
      "Completed practical labs simulating real-world security scenarios",
      "Learned industry best practices for threat detection and prevention",
      "Developed understanding of network security architecture",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="text-primary font-heading text-sm tracking-wider uppercase">
            — Experience
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Professional <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-primary/30"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary -translate-x-[9px] glow-effect" />

              <div className="glass-card p-6 md:p-8 space-y-4 ml-4">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-body font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground font-body">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          {/* Additional note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground font-body italic">
              "Constantly evolving as a tech innovator and active learner, strong in programming 
              and system design, ready to take on new challenges."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
