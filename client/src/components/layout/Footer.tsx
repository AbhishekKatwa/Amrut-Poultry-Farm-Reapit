import { Link } from "wouter";
import { Egg, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-primary/20 p-2 rounded-xl text-primary">
                <Egg className="w-6 h-6" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                Amrut Farm
              </span>
            </div>
            <p className="text-white/60 leading-relaxed">
              Providing farm-fresh, organically raised poultry and eggs to our community since 1993. Taste the difference of ethical farming.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-white/60 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/products" className="text-white/60 hover:text-primary transition-colors">Our Products</Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Our Categories</h3>
            <ul className="space-y-4">
              <li className="text-white/60">Farm Fresh Eggs</li>
              <li className="text-white/60">Organic Chicken</li>
              <li className="text-white/60">Premium Feed</li>
              <li className="text-white/60">Wholesale Orders</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  Near College Road, Bagalkot,<br />
                  Karnataka, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-white/60 text-sm">+91 02425-002611</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-white/60 text-sm">hello@amrutfarm.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Amrut Poultry Farm. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
