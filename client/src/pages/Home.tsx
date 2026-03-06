import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, ShieldCheck, Sun } from "lucide-react";
import { useProducts } from "@/hooks/use-products";

const FEATURES = [
  {
    icon: Leaf,
    title: "100% Organic Diet",
    description: "Our poultry is fed a natural, nutrient-rich diet free from harmful chemicals or antibiotics."
  },
  {
    icon: Sun,
    title: "Free Range Raised",
    description: "Ample space and sunshine ensure our flocks are healthy, happy, and produce superior quality."
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description: "Rigorous daily health checks and farm hygiene practices deliver absolute best to your table."
  }
];

export default function Home() {
  const { data: products, isLoading } = useProducts();

  // Show a max of 3 products on the homepage
  const featuredProducts = products?.slice(0, 3) || [];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* hero scenic poultry farm lush green */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://pixabay.com/get/g1f5b418dde2e857adc1809d9ea32f59316492917135be2d70dacd8c3a25246e2c9afcb2f6b03838d7a0ee2a5678a7cbe65a180de4366465a9a9b636639f580a2_1280.jpg"
            alt="Beautiful green poultry farm"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-white"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary-foreground font-medium text-sm mb-6">
              Farm Fresh • Locally Sourced
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance text-white">
              Nature's Best, <br />
              <span className="text-primary-foreground drop-shadow-md">Straight to You.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed text-balance">
              Experience the premium quality of organically raised poultry and eggs from Amrut Poultry Farm. Ethical farming for a healthier community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="px-8 py-4 rounded-xl font-bold bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                Shop Our Products <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 rounded-xl font-bold bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
              >
                Our Farming Methods
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-medium tracking-wider uppercase text-sm mb-3">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">The Amrut Difference</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card p-8 rounded-3xl shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-secondary/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-primary font-medium tracking-wider uppercase text-sm mb-3">Farm Fresh</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">Featured Products</h3>
            </div>
            <Link href="/products" className="hidden sm:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              View all products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-card rounded-3xl h-[400px] animate-pulse border border-border/50" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border group"
                >
                  <div className="relative h-64 overflow-hidden bg-muted">
                    {product.imageUrl ? (
                      <img 
                        src={product.imageUrl} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        No image available
                      </div>
                    )}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-foreground uppercase tracking-wider">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">{product.name}</h4>
                    <p className="text-muted-foreground line-clamp-2 mb-4 text-sm">{product.description}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-2xl font-bold text-primary">
                       ₹{Number(product.price).toFixed(2)}
                      </span>
                      <Link 
                        href={`/contact`}
                        className="px-4 py-2 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors shadow-sm shadow-accent/20"
                      >
                        Inquire
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          
          <div className="mt-12 text-center sm:hidden">
            <Link href="/products" className="inline-flex items-center gap-2 text-primary font-bold">
              View all products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground relative overflow-hidden">
        {/* dark subtle texture background */}
        <div className="absolute inset-0 opacity-10">
           <img src="https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="texture" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Ready to taste the freshness?
          </h2>
          <p className="text-lg text-white/70 mb-10 text-balance">
            Contact us today for wholesale orders, farm visits, or to locate a retailer near you.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 rounded-xl font-bold bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 text-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
