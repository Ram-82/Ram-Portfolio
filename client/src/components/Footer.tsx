import { Link } from "wouter";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border/40 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display font-bold text-lg">Ramachandragowda S Patil</h3>
            <p className="text-muted-foreground text-sm mt-1">
              Building products that matter.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://www.linkedin.com/in/ramachandragowda-s-p-avgx/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:ramachandragowdasp19@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            {/* Placeholders for other potential social links if needed */}
            <a href="#" className="text-muted-foreground/50 hover:text-muted-foreground cursor-not-allowed">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground/50 hover:text-muted-foreground cursor-not-allowed">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/20 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} RSP. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
