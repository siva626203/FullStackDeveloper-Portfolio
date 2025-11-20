import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left" data-testid="text-copyright">
            © {new Date().getFullYear()} Sivakumar. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-2" data-testid="text-built-with">
            Built with <Heart className="h-4 w-4 text-primary animate-pulse" /> using React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}
