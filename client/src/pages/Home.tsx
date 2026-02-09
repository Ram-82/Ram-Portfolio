import { Link } from "wouter";
import { ArrowRight, Box, BarChart2, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-32 pb-12 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
              Product Builder. <br />
              <span className="text-gradient">3 Products Shipped.</span> <br />
              Seeking APM Roles.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              I build products from idea to deployment by identifying real problems, 
              coordinating cross-functional teams, and shipping under uncertainty.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="text-base px-8 h-12 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                  Let's Talk
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/avgx">
                <Button variant="outline" size="lg" className="text-base px-8 h-12 rounded-full hover:bg-secondary/50 transition-all">
                  View Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border/40 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Products Launched", value: "3" },
              { label: "Industries", value: "FinTech, Luxury, Legal" },
              { label: "Pitch", value: "Startup Mahakumbh 2025" },
              { label: "Focus", value: "0 to 1 Execution" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Featured Work</h2>
          <p className="text-muted-foreground text-lg">
            End-to-end product journeys from conception to market validation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* AVGX Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="group relative bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all"
          >
            <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 flex items-center justify-center">
              <Box className="w-16 h-16 text-primary opacity-80" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-colors">AVGX</h3>
                <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full font-medium">Testnet Live</span>
              </div>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                A neutral, globally balanced digital currency addressing market volatility and cross-border transaction friction.
              </p>
              <Link href="/avgx">
                <span className="inline-flex items-center text-sm font-semibold text-primary hover:underline cursor-pointer">
                  View Case Study <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Ragam Elyssia Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="group relative bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all"
          >
            <div className="h-48 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 p-6 flex items-center justify-center">
              <Shield className="w-16 h-16 text-amber-600 opacity-80" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display text-2xl font-bold group-hover:text-amber-600 transition-colors">Ragam Elyssia</h3>
                <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full font-medium">Live</span>
              </div>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                Structured luxury branding and concierge service bringing order to an unstructured events market.
              </p>
              <Link href="/ragam-elyssia">
                <span className="inline-flex items-center text-sm font-semibold text-primary hover:underline cursor-pointer">
                  View Case Study <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Niyam AI Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="group relative bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all"
          >
            <div className="h-48 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 p-6 flex items-center justify-center">
              <BarChart2 className="w-16 h-16 text-purple-600 opacity-80" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display text-2xl font-bold group-hover:text-purple-600 transition-colors">Niyam AI</h3>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">Concept/MVP</span>
              </div>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                AI-assisted compliance intelligence simplifying complex manual auditing processes for Indian CAs.
              </p>
              <Link href="/niyam-ai">
                <span className="inline-flex items-center text-sm font-semibold text-primary hover:underline cursor-pointer">
                  View Case Study <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cross-Product Impact */}
      <section className="bg-secondary/30 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold mb-6 text-center">Cross-Product Impact</h2>
          <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground">
            <p className="mb-4">
              Across three ventures, I’ve worked on distinct problem spaces: from macroeconomic stability (AVGX) to high-touch luxury service (Ragam Elyssia) and regulatory efficiency (Niyam AI).
            </p>
            <p>
              While the domains differ, my approach remains consistent: deeply understanding the user's pain, identifying the core constraints (regulatory, financial, or operational), and shipping the smallest valuable product that creates impact. I don't just write specs; I drive outcomes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
