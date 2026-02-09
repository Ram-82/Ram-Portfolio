import { ArrowLeft, ExternalLink, Shield } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function RagamElyssia() {
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
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-amber-600">Ragam Elyssia</h1>
            <p className="text-xl text-muted-foreground">Structured Luxury Branding & Concierge</p>
          </div>
          <a href="https://ragamelyssia.com/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full bg-amber-600 hover:bg-amber-700">
              Visit Website <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="font-display text-2xl font-bold mb-4">The Problem</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The luxury events and concierge market is highly fragmented and unstructured. High-net-worth individuals often face inconsistent service quality and a lack of reliable, standardized high-touch experiences.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4">The Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ragam Elyssia provides a structured, brand-first approach to luxury services. By standardizing the "high-touch" experience and building exclusive partnerships, we created a predictable, premium service layer for elite clientele.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4">My Role</h2>
              <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground text-lg">
                <li>Defined the brand identity and service architecture.</li>
                <li>Negotiated and secured key strategic partnerships.</li>
                <li>Designed the customer journey for high-touch service delivery.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4">Key Results</h2>
              <div className="bg-secondary/30 rounded-xl p-6 border border-border/50">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-amber-100 text-amber-600 p-1 rounded-full mr-3 mt-1">✓</span>
                    <span className="text-foreground">Launched live service platform</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-amber-100 text-amber-600 p-1 rounded-full mr-3 mt-1">✓</span>
                    <span className="text-foreground">Received collaboration offer from Meragi Events</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-destructive/80">What Didn't Work</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Despite product-market fit in terms of demand, we faced significant capital constraints. Service businesses require high "trust density" which takes time and capital to build before scaling.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-destructive/50 pl-4">
                "Timing and capital efficiency are as important as the idea itself. A great service model without the runway to build reputation will struggle to capture value."
              </p>
            </section>
          </div>

          <aside className="space-y-8">
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4 flex items-center text-amber-600">
                <Shield className="w-5 h-5 mr-2" /> Project Details
              </h3>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Status</dt>
                  <dd className="font-medium">Live</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Domain</dt>
                  <dd className="font-medium">Luxury Services / Events</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Role</dt>
                  <dd className="font-medium">Co-Founder & Brand Lead</dd>
                </div>
              </dl>
            </div>

            {/* Scenic stock image for luxury vibes */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              {/* luxury hotel lobby aesthetic */}
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" 
                alt="Luxury Ambience" 
                className="w-full h-auto object-cover"
              />
            </div>
          </aside>
        </div>
      </motion.div>
    </article>
  );
}
