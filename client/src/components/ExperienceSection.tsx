import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Jasmine Global Process Solutions",
    role: "Full Stack Developer",
    type: "Full-Time",
    period: "Nov 2024 – Current",
    location: "Remote, IN",
    description: [
      "Led the development of a CRM platform using Next.js and MongoDB with integrated AWS S3 and CloudFront for media delivery.",
      "Implemented secure role-based access control and automated pipelines for lead management.",
      "Developed smart contract-enabled modules for blockchain-based integrations.",
    ],
    tags: ["Next.js", "MongoDB", "AWS S3", "CloudFront", "Smart Contracts"],
  },
  {
    company: "Riolabz",
    role: "Junior NodeJS Developer",
    type: "Full-Time",
    period: "May 2024 – Nov 2024",
    location: "Remote, IN",
    description: [
      "Built and documented scalable RESTful APIs with NestJS and Swagger.",
      "Integrated AWS Lambda and S3 for optimized backend performance.",
      "Supported frontend-backend collaboration and API testing.",
    ],
    tags: ["NestJS", "Swagger", "AWS Lambda", "AWS S3", "REST API"],
  },
  {
    company: "NIGHATECH",
    role: "Web3/MERN Stack Developer",
    type: "Part-Time",
    period: "Nov 2022 – Nov 2023",
    location: "Remote, IN",
    description: [
      "Integrated ETH Blockchain with web3.js in a Next.js application to deploy and interact with ERC20 tokens.",
      "Developed REST APIs using Express and NodeJS with MongoDB backend.",
      "Conducted wallet connection via RainbowKit for decentralized applications.",
    ],
    tags: ["Web3.js", "Ethereum", "ERC20", "Next.js", "RainbowKit"],
  },
];

export function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-24 md:py-32 px-4 bg-background/50">
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
            Work <span className="text-gradient">Experience</span>
          </motion.h2>

          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto mb-16 rounded-md"
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          />

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 transform md:-translate-x-1/2" />

            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0
                      ? "md:flex-row-reverse md:text-right"
                      : "md:flex-row"
                  }`}
                  data-testid={`card-experience-${index}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full neon-glow-purple z-10" />

                  {/* Content */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                    <Card className="glass-strong p-4 sm:p-6 rounded-md border-0 neon-border hover-elevate">
                      <div className="flex items-start gap-3 mb-3">
                        <Briefcase className="h-5 w-5 text-primary mt-1" />
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground">
                            {exp.role}
                          </h3>
                          <p className="text-primary font-semibold">
                            {exp.company}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {exp.period} · {exp.type}
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4 text-sm text-foreground/80">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1">−</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs glass"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
