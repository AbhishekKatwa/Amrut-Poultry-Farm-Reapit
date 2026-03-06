import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="w-full bg-background min-h-screen">
      
      {/* Page Header */}
      <section className="relative pt-32 pb-20 px-4 bg-foreground text-background overflow-hidden">
        {/* hero scenic poultry farm lush green */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://pixabay.com/get/g1f5b418dde2e857adc1809d9ea32f59316492917135be2d70dacd8c3a25246e2c9afcb2f6b03838d7a0ee2a5678a7cbe65a180de4366465a9a9b636639f580a2_1280.jpg"
            alt="Poultry farm background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Story</h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed text-balance">
              Rooted in tradition and driven by a passion for quality, Amrut Poultry Farm has been providing exceptional agricultural products to families and businesses since 1995.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section 1 */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* farmer working fresh produce eggs */}
              {/* <div className="rounded-3xl overflow-hidden shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop" 
                  alt="Farmer carrying produce"
                  className="w-full h-auto aspect-[4/5] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary rounded-full -z-10 blur-2xl opacity-50" />
              </div> */}
              <div className="rounded-3xl overflow-hidden shadow-2xl relative">
                <video
                  src="/videos/eggs.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto aspect-[4/5] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary rounded-full -z-10 blur-2xl opacity-50" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm">Our Heritage</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">A legacy of ethical farming and community trust.</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What started as a small family venture in Bagalkot has grown into one of the region's most trusted names in poultry. We believe that what goes into our birds is exactly what comes out in the quality of the food on your table.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                By combining traditional farming wisdom with modern sustainability practices, we ensure our flocks thrive in a stress-free environment.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Over 30 years of farming excellence",
                  "100% natural, hormone-free feeding programs",
                  "Spacious free-range environments",
                  "Daily quality and health inspections"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-foreground font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-secondary/30 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg">The principles that guide every decision we make on the farm.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Animal Welfare",
                desc: "We prioritize the health, comfort, and happiness of our birds above all else. A happy flock yields the best products."
              },
              {
                title: "Sustainability",
                desc: "We minimize our ecological footprint by using renewable energy sources and sustainable waste management."
              },
              {
                title: "Transparency",
                desc: "We invite our customers to know exactly where their food comes from and how it's raised. No secrets, just good farming."
              }
            ].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card p-10 rounded-3xl border border-border shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-2xl font-bold text-primary mx-auto mb-6">
                  {i + 1}
                </div>
                <h4 className="text-2xl font-bold mb-4">{val.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
