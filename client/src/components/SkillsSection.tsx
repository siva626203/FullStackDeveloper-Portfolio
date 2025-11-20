import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiAmazon,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiNestjs,
  SiExpress,
  SiRedux,
  SiEthereum,
  SiSolidity,
} from "react-icons/si";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Express", icon: SiExpress, color: "#000000" },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ],
  },
  {
    name: "Web3 & Blockchain",
    skills: [
      { name: "Ethereum", icon: SiEthereum, color: "#3C3C3D" },
      { name: "Solidity", icon: SiSolidity, color: "#363636" },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "AWS", icon: SiAmazon, color: "#FF9900" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Git", icon: SiGit, color: "#F05032" },
    ],
  },
];

export function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-24 md:py-32 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
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
            Skills & <span className="text-gradient">Technologies</span>
          </motion.h2>

          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto mb-16 rounded-md"
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          />

          {/* Skills Grid */}
          <div className="space-y-12">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + catIndex * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-foreground/90">
                  {category.name}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: 0.8 + catIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group"
                      data-testid={`skill-${skill.name.toLowerCase().replace(/\./g, '-')}`}
                    >
                      <div className="glass-strong rounded-md p-6 flex flex-col items-center justify-center gap-3 hover-elevate transition-all duration-300 neon-border h-full">
                        <div className="relative">
                          <skill.icon
                            className="h-10 w-10 transition-all duration-300 group-hover:scale-110"
                            style={{ color: skill.color }}
                          />
                          <motion.div
                            className="absolute -inset-2 bg-primary/20 rounded-full blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                            initial={false}
                          />
                        </div>
                        <p className="text-sm font-medium text-center text-foreground/80 group-hover:text-foreground transition-colors">
                          {skill.name}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
