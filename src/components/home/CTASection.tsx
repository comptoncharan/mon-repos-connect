import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-cream to-cream-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-8 h-8 text-gold" />
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Come Worship With Us
          </h2>
          
          <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
            We'd love to welcome you to our church family. Whether you're new to the faith or 
            looking for a new church home, there's a place for you here.
          </p>
          
          <p className="text-foreground font-medium mb-8">
            45 Mon Repos Housing Scheme ECD, Georgetown, Guyana
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact" className="gap-2">
                Plan Your Visit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about" className="gap-2">
                Learn More About Us
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
