import { ArrowLeft, ExternalLink, BarChart2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NiyamAi() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <Link href="/">
        <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
        </Button>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-border pb-8">
          <div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-purple-600">Niyam AI</h1>
            <p className="text-xl text-muted-foreground">AI-Assisted Compliance Intelligence</p>
          </div>
          <a href="https://niyam-ai-beryl.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full bg-purple-600 hover:bg-purple-700">
              Visit MVP <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="font-display text-2xl font-bold mb-4">The Problem</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Indian Chartered Accountants (CAs) face an overwhelming burden of manual compliance checks. The regulatory landscape is complex and constantly changing, making manual verification prone to errors and incredibly time-consuming.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4">Market Research</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I conducted direct user interviews with over 20 practicing CAs to understand their workflows. The feedback was unanimous: existing tools were either too generic or lacked the specific contextual understanding of Indian tax laws.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4">The Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Niyam AI leverages LLMs to provide intelligent, context-aware compliance assistance. It doesn't just search text; it interprets regulations against specific client scenarios, automating the initial layer of compliance verification.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4">Current Status</h2>
              <div className="bg-secondary/30 rounded-xl p-6 border border-border/50">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-600 p-1 rounded-full mr-3 mt-1">✓</span>
                    <span className="text-foreground">Concept Validation completed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-600 p-1 rounded-full mr-3 mt-1">✓</span>
                    <span className="text-foreground">MVP Deployed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-600 p-1 rounded-full mr-3 mt-1">✓</span>
                    <span className="text-foreground">Iterating based on initial user feedback</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4 flex items-center text-purple-600">
                <BarChart2 className="w-5 h-5 mr-2" /> Project Details
              </h3>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Status</dt>
                  <dd className="font-medium">Concept / MVP</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Domain</dt>
                  <dd className="font-medium">LegalTech / AI</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Role</dt>
                  <dd className="font-medium">Product & Tech</dd>
                </div>
              </dl>
            </div>

            {/* Scenic stock image for tech vibes */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              {/* code on screen matrix style */}
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80" 
                alt="AI Technology" 
                className="w-full h-auto object-cover"
              />
            </div>
          </aside>
        </div>
      </motion.div>
    </article>
  );
}
