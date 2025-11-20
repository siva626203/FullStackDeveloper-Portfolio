import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-strong rounded-md px-6 py-3 flex items-center justify-between">
          <motion.a
            href="#hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold text-gradient"
            data-testid="link-nav-logo"
            aria-label="Home"
          >
            SK
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-sm text-foreground/80 hover:text-foreground transition-colors relative group"
                data-testid={`link-nav-${item.name.toLowerCase()}`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Desktop Theme Toggle */}
          <div className="hidden md:block">
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              className="rounded-md"
              data-testid="button-theme-toggle"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              className="rounded-md"
              data-testid="button-theme-toggle-mobile"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-md"
              data-testid="button-menu-toggle"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-strong rounded-md mt-2 overflow-hidden md:hidden"
            >
              <div className="flex flex-col p-4 gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="text-sm text-foreground/80 hover:text-foreground hover-elevate transition-colors p-3 rounded-md"
                    data-testid={`link-nav-mobile-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
