import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">About Me</h1>
        
        <div className="prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-p:text-muted-foreground">
          <p className="lead text-xl text-foreground font-medium">
            I’m a builder who starts with problems, not tools. My journey into product management wasn't linear—it was built through the fire of founding and shipping.
          </p>

          <h3>Why Product Management?</h3>
          <p>
            I enjoy the chaos of deciding <em>what</em> to build and <em>why</em>. Engineering gave me the discipline to understand feasibility, but product management gives me the canvas to solve human problems. I thrive in the ambiguity of early-stage definition and the rigor of execution.
          </p>

          <h3>What Makes Me Different</h3>
          <ul className="list-none pl-0 space-y-4">
            <li className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
              <span>
                <strong className="text-foreground">3 End-to-End Journeys:</strong> I haven't just managed tickets; I've managed survival. From AVGX to Ragam Elyssia, I've seen the full lifecycle.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
              <span>
                <strong className="text-foreground">Real Rejection:</strong> I've pitched to VCs, sold to customers, and faced market indifference. I know the value of validation.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
              <span>
                <strong className="text-foreground">Technical Empathy:</strong> I can speak the language of engineers because I've built alongside them.
              </span>
            </li>
          </ul>

          <h3>My Product Thinking Framework</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose">
            {[
              { step: "1", title: "Problem First", desc: "Fall in love with the problem, not the solution." },
              { step: "2", title: "Constraints", desc: "Understand regulatory, technical, and market limits early." },
              { step: "3", title: "MVP Definition", desc: "What is the smallest thing we can build to learn?" },
              { step: "4", title: "Execution", desc: "Ship, measure, learn, iterate. Speed is a feature." },
            ].map((item) => (
              <div key={item.step} className="bg-secondary/30 p-6 rounded-xl border border-border/50">
                <span className="text-4xl font-display font-bold text-primary/20 mb-2 block">{item.step}</span>
                <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center">
            <h3 className="mt-0 mb-4">Ready to build together?</h3>
            <p className="mb-6">I am actively seeking Associate Product Manager (APM) roles where I can bring my ownership mindset to a high-performing team.</p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full">
                Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </article>
  );
}
