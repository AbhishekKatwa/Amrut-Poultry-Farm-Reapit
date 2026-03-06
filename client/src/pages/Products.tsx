import { motion } from "framer-motion";
import { Link } from "wouter";
import { useProducts } from "@/hooks/use-products";
import { PackageX } from "lucide-react";

export default function Products() {
  const { data: products, isLoading, error } = useProducts();

  return (
    <div className="w-full bg-background min-h-screen">
      
      {/* Page Header */}
      <section className="bg-secondary/50 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Farm Products</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our selection of premium, ethically raised poultry and fresh farm eggs. 
              We guarantee unmatched quality straight from our farm to your table.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-card rounded-3xl h-[420px] animate-pulse border border-border/50" />
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-destructive font-semibold">Error loading products. Please try again later.</p>
            </div>
          ) : products?.length === 0 ? (
            <div className="text-center py-32 flex flex-col items-center justify-center">
              <div className="bg-muted p-6 rounded-full mb-6 text-muted-foreground">
                <PackageX className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-2">No products available</h3>
              <p className="text-muted-foreground">We are currently updating our inventory. Please check back later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products?.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card rounded-3xl overflow-hidden shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                >
                  <div className="relative h-64 overflow-hidden bg-muted">
                    {product.imageUrl ? (
                      <img 
                        src={product.imageUrl} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-secondary/30">
                        No Image
                      </div>
                    )}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-foreground uppercase tracking-wider shadow-sm">
                      {product.category}
                    </div>
                    
                    {!product.isAvailable && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="bg-destructive text-destructive-foreground px-4 py-2 rounded-xl font-bold transform -rotate-12">
                          Out of Stock
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-border mt-auto">
                      <div className="flex flex-col">
                        <span className="text-sm text-muted-foreground">Price</span>
                        <span className="text-3xl font-black text-primary">
                          ${Number(product.price).toFixed(2)}
                        </span>
                      </div>
                      
                      <Link 
                        href={`/contact`}
                        className={`px-6 py-3 rounded-xl font-bold shadow-md transition-all duration-200 ${
                          product.isAvailable 
                            ? "bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent/20 hover:-translate-y-0.5" 
                            : "bg-muted text-muted-foreground cursor-not-allowed"
                        }`}
                        onClick={(e) => {
                          if (!product.isAvailable) e.preventDefault();
                        }}
                      >
                        Inquire
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
