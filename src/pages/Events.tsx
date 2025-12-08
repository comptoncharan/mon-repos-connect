import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    id: 1,
    title: "Harvest & Thanksgiving Service",
    date: "December 15, 2024",
    time: "9:00 AM",
    location: "Main Sanctuary",
    description: "Join us for our annual Harvest & Thanksgiving celebration as we give thanks to God for His faithfulness throughout the year.",
    featured: true,
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&q=80",
  },
  {
    id: 2,
    title: "Youth Christmas Program",
    date: "December 22, 2024",
    time: "6:00 PM",
    location: "Main Sanctuary",
    description: "Our youth ministry presents a special Christmas drama and musical celebration. All are welcome!",
    featured: false,
    image: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=600&q=80",
  },
  {
    id: 3,
    title: "New Year's Eve Service",
    date: "December 31, 2024",
    time: "10:00 PM",
    location: "Main Sanctuary",
    description: "Cross over into 2025 with prayer, praise, and thanksgiving. Let's welcome the new year together!",
    featured: false,
    image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=600&q=80",
  },
  {
    id: 4,
    title: "Women's Fellowship",
    date: "January 8, 2025",
    time: "5:00 PM",
    location: "Fellowship Hall",
    description: "Monthly gathering for women of all ages. Join us for fellowship, prayer, and encouragement.",
    featured: false,
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
  },
  {
    id: 5,
    title: "Youth Bible Study",
    date: "Every Friday",
    time: "6:00 PM",
    location: "Youth Center",
    description: "Weekly Bible study and fellowship for teens and young adults.",
    featured: false,
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80",
  },
];

const Events = () => {
  const featuredEvent = events.find((e) => e.featured);
  const regularEvents = events.filter((e) => !e.featured);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-navy to-navy-light text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-4">
              What's Happening
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Upcoming Events
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Stay connected with what's happening at Mon Repos Assembly of God.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Event */}
      {featuredEvent && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="relative rounded-3xl overflow-hidden bg-navy">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative aspect-[4/3] lg:aspect-auto">
                    <img
                      src={featuredEvent.image}
                      alt={featuredEvent.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-transparent lg:hidden" />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center text-primary-foreground">
                    <span className="inline-flex items-center gap-2 bg-gold text-primary text-sm font-bold px-4 py-1.5 rounded-full w-fit mb-6">
                      Featured Event
                    </span>
                    <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
                      {featuredEvent.title}
                    </h2>
                    <p className="text-primary-foreground/80 mb-6">
                      {featuredEvent.description}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-8 text-sm">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gold" />
                        {featuredEvent.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gold" />
                        {featuredEvent.time}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gold" />
                        {featuredEvent.location}
                      </span>
                    </div>
                    <Button variant="gold" className="w-fit">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* All Events */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              More Events
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {regularEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-3 mb-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1 bg-muted px-2 py-1 rounded-full">
                      <Calendar className="w-3 h-3 text-gold" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1 bg-muted px-2 py-1 rounded-full">
                      <Clock className="w-3 h-3 text-gold" />
                      {event.time}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-gold" />
                    {event.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Don't Miss Out
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Follow us on Facebook to stay updated on all our events and activities.
            </p>
            <Button variant="gold" size="lg" asChild>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Follow Us on Facebook
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
