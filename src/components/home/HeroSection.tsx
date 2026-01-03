import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-church.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-32 lg:pt-36">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Mon Repos Assembly of God Church at sunrise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-gold/20 rounded-full animate-float opacity-30" />
      <div className="absolute bottom-1/4 right-10 w-48 h-48 border border-gold/20 rounded-full animate-float opacity-20" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto w-full"
        >
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gold text-sm md:text-base tracking-[0.2em] uppercase font-medium mb-6"
          >
            Welcome Home
          </motion.p>

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Mon Repos
            <span className="block text-gold mt-2">Assembly of God</span>
          </h1>

          {/* Motto */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/80 font-serif italic max-w-2xl mx-auto mb-10"
          >
            "The church where everybody is somebody and Jesus Christ is Lord."
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="gold" size="lg" asChild>
              <Link to="/livestream" className="gap-3">
                <Play className="w-5 h-5" />
                Watch Live
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/events" className="gap-3">
                <Calendar className="w-5 h-5" />
                Upcoming Events
              </Link>
            </Button>
          </motion.div>

          {/* Service Times */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 inline-flex items-center gap-6 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-primary-foreground/10"
          >
            <div className="text-center">
              <p className="text-xs text-primary-foreground/60 uppercase tracking-wider">Sunday</p>
              <p className="text-primary-foreground font-semibold">9:30 AM</p>
            </div>
            <div className="w-px h-8 bg-primary-foreground/20" />
            <div className="text-center">
              <p className="text-xs text-primary-foreground/60 uppercase tracking-wider">Wednesday</p>
              <p className="text-primary-foreground font-semibold">6:30 PM Martryville & Jango Town</p>
            </div>
            <div className="w-px h-8 bg-primary-foreground/20" />
            <div className="text-center">
              <p className="text-xs text-primary-foreground/60 uppercase tracking-wider">Friday</p>
              <p className="text-primary-foreground font-semibold">6:30 PM</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-primary-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
