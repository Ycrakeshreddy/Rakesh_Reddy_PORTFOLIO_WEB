import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Briefcase, Lightbulb } from "lucide-react";

const certifications = [
  "Python Essentials 1 & 2 – Cisco",
  "C Language Essentials 1 & 2 – Cisco",
  "Introduction to AI in IoT",
  "Computer Organization & Architecture",
  "Data-level & Instruction-level Parallelism",
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <span className="text-primary font-heading text-sm tracking-wider uppercase">
              — About Me
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Get to Know <span className="gradient-text">Me Better</span>
            </h2>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass-card p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold">Who I Am</h3>
                </div>
                <p className="text-muted-foreground font-body leading-relaxed">
                  I'm a passionate and curious B.Tech student focused on building smart, scalable, and 
                  meaningful tech solutions. With a strong foundation in Artificial Intelligence, 
                  Machine Learning, IoT, and Embedded Systems, I love exploring the intersection of 
                  software and hardware.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Beyond technology, I have an entrepreneurial mindset with keen interest in business, 
                  stock market analysis, and ambitious projects — including a solar plant venture 
                  targeting ₹40+ crores revenue. I believe in lifelong learning, innovation, and 
                  practical application of knowledge.
                </p>
              </div>

              {/* Education Card */}
              <div className="glass-card p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-2">
                  <h4 className="font-heading font-medium text-foreground">
                    B.Tech – Computer Science Engineering (AI & ML)
                  </h4>
                  <p className="text-primary font-body">
                    Karunya Institute of Technology and Sciences
                  </p>
                  <p className="text-muted-foreground font-body text-sm">
                    Expected Graduation: 2028
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Certifications Section */}
            <motion.div variants={itemVariants} className="glass-card p-6 md:p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/50 hover:border-primary/50 transition-all"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground font-body text-sm">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
