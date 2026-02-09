import { ContactForm } from "@/components/ContactForm";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Let's Connect</h1>
            <p className="text-xl text-muted-foreground mb-8">
              I'm always open to discussing product opportunities, new ideas, or potential collaborations.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <a href="mailto:ramachandragowdasp19@gmail.com" className="text-lg font-semibold hover:text-primary transition-colors">
                    ramachandragowdasp19@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/ramachandragowda-s-p-avgx/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold hover:text-primary transition-colors"
                  >
                    Ramachandragowda S Patil
                  </a>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="font-display font-bold text-xl mb-4">Location</h3>
                <p className="text-muted-foreground">
                  Based in India <br />
                  Open to Remote & Relocation
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
            <h2 className="font-display text-2xl font-bold mb-6">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
