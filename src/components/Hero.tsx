import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/rakesh-profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden tech-grid">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground font-body text-sm tracking-wider uppercase">
                Available for opportunities
              </span>
            </div>

            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight">
              Rakesh
              <br />
              <span className="gradient-text">Reddy.</span>
            </h1>

            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />

            <p className="text-lg md:text-xl text-muted-foreground font-body max-w-md">
              AI & ML Enthusiast | IoT Innovator | Python & Java Programmer | Future-Ready Engineer
            </p>

            <p className="text-muted-foreground font-body leading-relaxed">
              Passionate B.Tech student specializing in AI & ML, blending software and hardware 
              to create innovative solutions. Cisco-certified learner open to internships and collaborations.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-heading font-semibold transition-all hover:shadow-lg hover:shadow-primary/30"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card/50 backdrop-blur-sm text-foreground font-heading font-semibold transition-all hover:border-primary/50 hover:bg-card"
              >
                Contact Me
                <Mail className="w-4 h-4" />
              </motion.a>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/rakesh-reddy-5b2978355/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Ycrakeshreddy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:chittemrakesh@karunya.edu.in"
                className="p-3 rounded-full border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl scale-110" />
              
              {/* Profile image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 glow-effect floating">
                <img
                  src={profileImage}
                  alt="Rakesh Reddy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border border-dashed border-primary/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 border border-dashed border-secondary/20 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
