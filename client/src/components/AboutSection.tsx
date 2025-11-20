import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const skills = [
  "Next.js",
  "Node.js",
  "NestJS",
  "MongoDB",
  "AWS",
  "Solidity",
  "Web3.js",
  "TypeScript",
  "React",
  "Express",
];

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>

          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto mb-16 rounded-md"
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          />

          {/* About Card */}
          <Card className="glass-strong p-6 sm:p-8 md:p-12 rounded-md border-0 neon-border">
            <motion.p
              className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              data-testid="text-about-description"
            >
              Sivakumar is a Full Stack and Web3 Developer with experience in
              building CRM systems, scalable platforms, and blockchain-integrated
              applications. Skilled in Next.js, Node.js, NestJS, MongoDB, AWS,
              Solidity, and Web3.js. Passionate about solving real-world problems
              and building modern digital experiences.
            </motion.p>

            {/* Skills Badge Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground/90">
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-3" data-testid="container-skills-badges">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.9 + index * 0.1 }}
                  >
                    <Badge
                      variant="secondary"
                      className="px-4 py-2 text-sm glass hover-elevate"
                      data-testid={`badge-skill-${skill.toLowerCase().replace(/\./g, '-')}`}
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
