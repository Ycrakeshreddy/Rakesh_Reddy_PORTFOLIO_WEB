import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cpu, Users, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "C", level: 80 },
    ],
  },
  {
    title: "Technologies & Domains",
    icon: Cpu,
    skills: [
      { name: "AI & Machine Learning", level: 85 },
      { name: "Generative AI", level: 75 },
      { name: "Internet of Things (IoT)", level: 90 },
      { name: "Embedded Systems", level: 85 },
      { name: "Arduino & ESP32", level: 88 },
    ],
  },
  {
    title: "Professional Skills",
    icon: Users,
    skills: [
      { name: "Problem Solving", level: 92 },
      { name: "Leadership", level: 85 },
      { name: "Communication", level: 88 },
      { name: "Business Thinking", level: 80 },
      { name: "Mentoring", level: 85 },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden tech-grid">
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
            — My Skills
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            A comprehensive skill set spanning programming languages, cutting-edge technologies, 
            and professional competencies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="glass-card p-6 space-y-6 hover:border-primary/30 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-body text-foreground">{skill.name}</span>
                      <span className="font-body text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.5 + categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
