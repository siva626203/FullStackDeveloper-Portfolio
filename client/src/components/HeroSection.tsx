import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function HeroSection() {
  // Generate particles after mount to avoid hydration mismatches
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      left: number;
      top: number;
      duration: number;
      delay: number;
    }>
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 animate-gradient-xy" />

      {/* Floating particles - fewer on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute w-2 h-2 bg-primary/20 rounded-full ${
              particle.id > 10 ? "hidden md:block" : ""
            }`}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes - hidden on mobile */}
      <motion.div
        className="hidden md:block absolute top-20 left-10 w-32 h-32 border-2 border-purple-500/20 rounded-full"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="hidden md:block absolute bottom-20 right-10 w-24 h-24 border-2 border-cyan-500/20 rounded-md"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Name with glow effect */}
          <motion.h1
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-gradient mb-4 px-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-testid="text-hero-name"
          >
            Sivakumar
          </motion.h1>

          {/* Title */}
          <motion.h2
            className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/90 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            data-testid="text-hero-title"
          >
            Full Stack Developer | Web3 Developer
          </motion.h2>

          {/* Typing animation subtitle */}
          <motion.div
            className="text-base sm:text-lg md:text-xl text-muted-foreground min-h-[2rem] px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            data-testid="text-hero-subtitle"
          >
            <TypeAnimation
              sequence={[
                "Building scalable CRM platforms",
                2000,
                "Integrating blockchain solutions",
                2000,
                "Creating modern web experiences",
                2000,
                "Deploying smart contracts",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <Button
              size="lg"
              className="neon-glow-purple rounded-md min-w-[180px]"
              asChild
              data-testid="button-view-projects"
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-md min-w-[180px] glass"
              asChild
              data-testid="button-contact-me"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-6 justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <Button
              size="icon"
              variant="ghost"
              className="rounded-md hover-elevate"
              asChild
              data-testid="button-github"
            >
              <a
                href="https://github.com/sivakumar-web3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-md hover-elevate"
              asChild
              data-testid="button-linkedin"
            >
              <a
                href="https://linkedin.com/in/sivakumar-web3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-md hover-elevate"
              asChild
              data-testid="button-email"
            >
              <a
                href="mailto:sivakumar.626203@gmail.com"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
}
