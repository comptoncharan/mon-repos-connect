import { motion } from "framer-motion";
import { Bell, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const announcements = [
  {
    id: 1,
    title: "Harvest & Thanksgiving Service",
    date: "December 15, 2024",
    description: "Join us for our annual Harvest & Thanksgiving celebration. Bring your tithes and offerings as we give thanks to God for His blessings.",
    highlight: true,
  },
  {
    id: 2,
    title: "Youth Christmas Program",
    date: "December 22, 2024",
    description: "Our youth ministry presents a special Christmas drama and musical celebration. All are welcome!",
    highlight: false,
  },
  {
    id: 3,
    title: "New Year's Eve Service",
    date: "December 31, 2024",
    description: "Cross over into 2025 with prayer and praise. Service begins at 10:00 PM.",
    highlight: false,
  },
];

export function AnnouncementsSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Bell className="w-4 h-4" />
            Stay Updated
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Announcements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay informed about upcoming events, special services, and important church news.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {announcements.map((announcement, index) => (
            <motion.div
              key={announcement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-2xl p-6 transition-all duration-300 hover:shadow-elevated ${
                announcement.highlight
                  ? "bg-navy text-primary-foreground"
                  : "bg-card shadow-card hover:bg-card/80"
              }`}
            >
              {announcement.highlight && (
                <div className="absolute -top-3 -right-3 bg-gold text-primary text-xs font-bold px-3 py-1 rounded-full shadow-gold">
                  Featured
                </div>
              )}
              
              <div className={`inline-flex items-center gap-2 text-xs font-medium mb-3 ${
                announcement.highlight ? "text-gold" : "text-gold"
              }`}>
                <Calendar className="w-3 h-3" />
                {announcement.date}
              </div>
              
              <h3 className={`font-serif text-xl font-semibold mb-3 ${
                announcement.highlight ? "text-primary-foreground" : "text-foreground"
              }`}>
                {announcement.title}
              </h3>
              
              <p className={`text-sm leading-relaxed ${
                announcement.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
              }`}>
                {announcement.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" asChild>
            <Link to="/events" className="gap-2">
              View All Events
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
