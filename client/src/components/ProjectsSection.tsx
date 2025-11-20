import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "WAVEMAKER",
    subtitle: "ERC20 Token Platform",
    period: "Nov 2022 – Jun 2023",
    description:
      "Deployed and interacted with Ethereum ERC20 smart contracts using Web3.js and Next.js. Full blockchain integration with wallet connectivity.",
    tags: ["Web3.js", "Next.js", "Ethereum", "ERC20", "Smart Contracts"],
    url: "https://wavemaker-official.vercel.app",
  },
  {
    title: "A Glance Limousine",
    subtitle: "Booking Platform",
    period: "Apr 2024 – May 2024",
    description:
      "Built a city transfer booking platform using Next.js and Google Places Autocomplete API. Implemented a secure checkout flow with Stripe integration.",
    tags: ["Next.js", "Google API", "Stripe", "TypeScript"],
    url: "https://glancelimousine.com.sg/",
  },
  {
    title: "Elyff Events",
    subtitle: "Event Management API",
    period: "Mar 2024 – Apr 2024",
    description:
      "Developed a NextJS API with MongoDB and Stripe integration for event ticketing. Complete event management system with payment processing.",
    tags: ["Next.js", "MongoDB", "Stripe", "REST API"],
    url: "https://elyffevents.com.sg/",
  },
  {
    title: "Elyff Playground",
    subtitle: "Microservices Platform",
    period: "Feb 2024 – Mar 2024",
    description:
      "Built authentication flow and user dashboard using Next.js and Redux Thunk. Microservices architecture with state management.",
    tags: ["Next.js", "Redux Thunk", "Microservices", "Authentication"],
    url: "https://elyffplayground.com.sg/",
  },
];

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-24 md:py-32 px-4">
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
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>

          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto mb-16 rounded-md"
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          />

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
                data-testid={`card-project-${index}`}
              >
                <Card className="glass-strong rounded-md border-0 neon-border h-full overflow-hidden hover-elevate transition-all duration-300">
                  <CardHeader className="space-y-2 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {project.subtitle}
                        </p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center neon-glow-purple">
                          <ExternalLink className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">{project.period}</p>
                  </CardHeader>

                  <CardContent className="px-6 pb-6 space-y-4">
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs glass"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="w-full rounded-md glass neon-glow-blue"
                      asChild
                      data-testid={`button-view-project-${index}`}
                    >
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
