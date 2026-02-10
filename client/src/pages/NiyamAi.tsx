import { ArrowLeft, ExternalLink, BarChart2, TrendingUp, Presentation } from "lucide-react";
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
              <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-purple-600" /> Market Size & Long-Term Business Potential
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 bg-secondary/20 rounded-xl p-6 border border-border/50">
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-2">Relevant Markets</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Indian compliance & accounting</li>
                    <li>• B2B SaaS for SMBs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-2">TAM</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Indian ecosystem: $20–30B</li>
                  </ul>
                </div>
                <div className="sm:col-span-2">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-2">Why It Can Scale</h4>
                  <p className="text-muted-foreground">
                    Recurring compliance needs drive predictable subscription revenue. High switching costs once integrated into CA workflows. Clear path to monetization via B2B SaaS model.
                  </p>
                </div>
              </div>
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

            <section>
              <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
                <Presentation className="w-6 h-6 text-purple-600" /> Pitch Decks, Media & Visual Artifacts
              </h2>
              <p className="text-muted-foreground mb-6">
                This document captures early problem research, product direction, and compliance workflows validated through discussions with Chartered Accountants.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="group relative bg-card border border-border rounded-xl p-4 hover:border-purple-600/50 transition-colors">
                  <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <Presentation className="w-8 h-8 text-muted-foreground group-hover:text-purple-600 transition-colors" />
                  </div>
                  <h4 className="font-bold text-sm mb-2">Image</h4>
                  <a href="https://drive.google.com/file/d/1x4ZFfszBKgR7pA_BaMWkuSGMSpJoqewf/view" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-purple-600 text-sm font-medium hover:underline">
                    View Asset <ExternalLink className="ml-1 w-3 h-3" />
                  </a>
                </div>
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

            <div className="rounded-xl overflow-hidden shadow-lg">
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

