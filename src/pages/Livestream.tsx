import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Play, Radio, Facebook, Youtube, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const pastStreams = [
  {
    id: 1,
    title: "Sunday Worship Service",
    date: "December 1, 2024",
    thumbnail: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&q=80",
  },
  {
    id: 2,
    title: "Wednesday Bible Study",
    date: "November 27, 2024",
    thumbnail: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80",
  },
  {
    id: 3,
    title: "Sunday Worship Service",
    date: "November 24, 2024",
    thumbnail: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&q=80",
  },
];

const Livestream = () => {
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
            <div className="inline-flex items-center gap-2 bg-destructive/20 text-destructive px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Radio className="w-4 h-4 animate-pulse" />
              Live Now (During Service Times)
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Watch Live
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Join us online for our live worship services and Bible studies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Live Stream Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            {/* Video Embed Placeholder */}
            <div className="relative aspect-video bg-navy rounded-3xl overflow-hidden mb-8">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground">
                <div className="w-24 h-24 rounded-full bg-gold/20 flex items-center justify-center mb-6 animate-pulse-glow">
                  <Play className="w-12 h-12 text-gold ml-1" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-2">Next Live Service</h3>
                <p className="text-primary-foreground/70 mb-6">Sunday at 9:00 AM</p>
                <div className="flex gap-4">
                  <Button variant="gold" asChild>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="gap-2">
                      <Facebook className="w-5 h-5" />
                      Watch on Facebook
                    </a>
                  </Button>
                  <Button variant="heroOutline" asChild>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="gap-2">
                      <Youtube className="w-5 h-5" />
                      Watch on YouTube
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Service Times */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { day: "Sunday Morning", time: "9:00 AM", type: "Worship Service" },
                { day: "Wednesday", time: "7:00 PM", type: "Bible Study" },
                { day: "Sunday Evening", time: "6:00 PM", type: "Evening Service" },
              ].map((service, index) => (
                <motion.div
                  key={service.day}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-card text-center border border-gold/10"
                >
                  <Calendar className="w-8 h-8 text-gold mx-auto mb-3" />
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-1">
                    {service.day}
                  </h4>
                  <p className="text-gold font-medium mb-1">{service.time}</p>
                  <p className="text-sm text-muted-foreground">{service.type}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Past Streams */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Past Livestreams
            </h2>
            <p className="text-muted-foreground">
              Catch up on services you may have missed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pastStreams.map((stream, index) => (
              <motion.div
                key={stream.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={stream.thumbnail}
                    alt={stream.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center shadow-lg">
                      <Play className="w-6 h-6 text-primary ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gold text-sm mb-2">{stream.date}</p>
                  <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-gold transition-colors">
                    {stream.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Follow CTA */}
      <section className="py-20 bg-navy text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Never Miss a Service
            </h2>
            <p className="text-primary-foreground/70 mb-8">
              Follow us on social media to get notified when we go live.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg" asChild>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="gap-2">
                  <Facebook className="w-5 h-5" />
                  Follow on Facebook
                </a>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="gap-2">
                  <Youtube className="w-5 h-5" />
                  Subscribe on YouTube
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Livestream;
