import { ArrowLeft, ExternalLink, Box, TrendingUp, Presentation } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function Avgx() {
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
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">Pitched at Startup Mahakumbh 2025</Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">VC Interest — Accel India (Exploratory)</Badge>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-primary">AVGX</h1>
            <p className="text-xl text-muted-foreground">Neutral, Globally Balanced Digital Currency</p>
          </div>
          <a href="https://avgx.world/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full">
              Visit Website <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="font-display text-2xl font-bold mb-4">The Problem</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Global currencies face extreme volatility and fragmentation, creating friction in cross-border transactions. With over $10 trillion in daily transactional volume, the lack of a stable, neutral medium of exchange creates massive inefficiencies.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" /> Market Size & Long-Term Business Potential
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 bg-secondary/20 rounded-xl p-6 border border-border/50">
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-2">Relevant Markets</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Global FX & cross-border payments</li>
                    <li>• Digital currencies & crypto infrastructure</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-2">TAM (Category Level)</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Global FX: $10T+ daily volume</li>
                    <li>• Crypto assets: $2T+ market cap</li>
                  </ul>
                </div>
                <div className="sm:col-span-2">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-2">Why AVGX Can Be Big</h4>
                  <p className="text-muted-foreground">
                    Neutral, globally balanced value layer. Potential infrastructure role rather than consumer-only product. Long-term monetization via transactions, integrations, and institutional adoption.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4">The Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                AVGX is designed as a neutral, globally balanced digital currency. Unlike stablecoins pegged to a single fiat currency, AVGX derives stability from a basket of global assets, minimizing exposure to any single economy's fluctuations.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4">My Role</h2>
              <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground text-lg">
                <li>Defined the core product vision and economic model.</li>
                <li>Coordinated a distributed team of blockchain developers.</li>
                <li>Managed the end-to-end rollout of the testnet environment.</li>
                <li>Pitched the product vision at Startup Mahakumbh 2025.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4">Key Results</h2>
              <div className="bg-secondary/30 rounded-xl p-6 border border-border/50">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary p-1 rounded-full mr-3 mt-1">✓</span>
                    <span className="text-foreground">Successfully deployed Testnet</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary p-1 rounded-full mr-3 mt-1">✓</span>
                    <span className="text-foreground">Pitched at Startup Mahakumbh 2025</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary p-1 rounded-full mr-3 mt-1">✓</span>
                    <span className="text-foreground">Generated interest from Accel India partners</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
                <Presentation className="w-6 h-6 text-primary" /> Pitch Decks, Media & Visual Artifacts
              </h2>
              <p className="text-muted-foreground mb-6">
                These decks were used to communicate AVGX’s vision, market positioning, and execution roadmap to startup ecosystem stakeholders and investors.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "https://drive.google.com/file/d/15KrTDVmEIHVU0bousdoUGF1DGuElob-v/view",
                  "https://drive.google.com/file/d/18KcEc-6SNZGYrequ4sng1vzFRdczF6K9/view",
                  "https://drive.google.com/file/d/1Wc4SYnCn-UdlnGaZCSaa814apFwxeLP-/view",
                  "https://drive.google.com/file/d/1exxW0UONqM8L8UMvcxA6C6AWYIp740SY/view"
                ].map((link, i) => (
                  <div key={i} className="group relative bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-colors">
                    <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                      <Presentation className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h4 className="font-bold text-sm mb-2">AVGX Pitch Deck Part {i + 1}</h4>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary text-sm font-medium hover:underline">
                      View Pitch Deck <ExternalLink className="ml-1 w-3 h-3" />
                    </a>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4">Learnings</h2>
              <p className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-4">
                "Designing for regulation is just as critical as designing for decentralization. The balance between compliance and crypto-native ethos is where the real product challenge lies."
              </p>
            </section>
          </div>

          <aside className="space-y-8">
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <Box className="w-5 h-5 mr-2" /> Project Details
              </h3>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Status</dt>
                  <dd className="font-medium">Testnet Live</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Domain</dt>
                  <dd className="font-medium">FinTech / Blockchain</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Role</dt>
                  <dd className="font-medium">Product Lead & Founder</dd>
                </div>
              </dl>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80" 
                alt="Blockchain Technology" 
                className="w-full h-auto object-cover"
              />
            </div>
          </aside>
        </div>
      </motion.div>
    </article>
  );
}

