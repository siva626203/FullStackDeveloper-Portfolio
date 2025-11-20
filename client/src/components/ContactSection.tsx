import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sivakumar.626203@gmail.com",
    href: "mailto:sivakumar.626203@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9384784497",
    href: "tel:+919384784497",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sattur, Tamil Nadu, India",
    href: null,
  },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/sivakumar-web3",
    color: "hover:text-purple-500",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/sivakumar-web3",
    color: "hover:text-blue-500",
  },
  {
    name: "Portfolio",
    icon: ExternalLink,
    href: "#",
    color: "hover:text-cyan-500",
  },
];

export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
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
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>

          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto mb-8 rounded-md"
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          />

          <motion.p
            className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out!
          </motion.p>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <Card className="glass-strong rounded-md border-0 neon-border p-6 sm:p-8 md:p-12 neon-glow-purple">
              <div className="space-y-8">
                {/* Contact Information */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="flex flex-col items-center text-center gap-3 p-4 rounded-md glass hover-elevate"
                      data-testid={`contact-${item.label.toLowerCase()}`}
                    >
                      <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center neon-glow-blue">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-foreground">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.3 }}
                  className="text-center"
                >
                  <p className="text-sm text-muted-foreground mb-6">
                    Connect with me on
                  </p>
                  <div className="flex justify-center gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.div
                        key={social.name}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 1.5 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Button
                          size="icon"
                          variant="outline"
                          className={`rounded-md glass neon-glow-cyan ${social.color} transition-all`}
                          asChild
                          data-testid={`button-social-${social.name.toLowerCase()}`}
                        >
                          <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                          >
                            <social.icon className="h-5 w-5" />
                          </a>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.8 }}
                  className="text-center pt-4"
                >
                  <Button
                    size="lg"
                    className="neon-glow-purple rounded-md"
                    asChild
                    data-testid="button-send-email"
                  >
                    <a href="mailto:sivakumar.626203@gmail.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Send me an email
                    </a>
                  </Button>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
