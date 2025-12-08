import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, Clock, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const sermons = [
  {
    id: 1,
    title: "Walking in Faith",
    speaker: "Pastor James Williams",
    date: "December 1, 2024",
    duration: "45 min",
    thumbnail: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&q=80",
  },
  {
    id: 2,
    title: "The Power of Prayer",
    speaker: "Pastor James Williams",
    date: "November 24, 2024",
    duration: "52 min",
    thumbnail: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80",
  },
  {
    id: 3,
    title: "Finding Hope in Christ",
    speaker: "Pastor James Williams",
    date: "November 17, 2024",
    duration: "48 min",
    thumbnail: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&q=80",
  },
];

export function SermonsPreview() {
  return (
    <section className="py-24 bg-navy text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <p className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-4">
              Recent Messages
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Latest Sermons
            </h2>
            <p className="text-primary-foreground/70 max-w-xl">
              Catch up on messages you may have missed or revisit your favorites.
            </p>
          </div>
          <Button variant="hero" className="mt-6 md:mt-0" asChild>
            <Link to="/sermons" className="gap-2">
              View All Sermons
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sermons.map((sermon, index) => (
            <motion.div
              key={sermon.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-navy-light"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={sermon.thumbnail}
                  alt={sermon.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center shadow-gold transform scale-90 group-hover:scale-100 transition-transform">
                    <Play className="w-7 h-7 text-primary ml-1" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gold text-sm mb-2">{sermon.date}</p>
                <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-gold transition-colors">
                  {sermon.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-primary-foreground/60">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {sermon.speaker}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {sermon.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
