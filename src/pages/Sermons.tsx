import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Play, Clock, User, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const allSermons = [
  {
    id: 1,
    title: "Walking in Faith",
    speaker: "Pastor James Williams",
    date: "December 1, 2024",
    duration: "45 min",
    topic: "Faith",
    thumbnail: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&q=80",
  },
  {
    id: 2,
    title: "The Power of Prayer",
    speaker: "Pastor James Williams",
    date: "November 24, 2024",
    duration: "52 min",
    topic: "Prayer",
    thumbnail: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80",
  },
  {
    id: 3,
    title: "Finding Hope in Christ",
    speaker: "Pastor James Williams",
    date: "November 17, 2024",
    duration: "48 min",
    topic: "Hope",
    thumbnail: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&q=80",
  },
  {
    id: 4,
    title: "Living in the Spirit",
    speaker: "Pastor James Williams",
    date: "November 10, 2024",
    duration: "55 min",
    topic: "Holy Spirit",
    thumbnail: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&q=80",
  },
  {
    id: 5,
    title: "The Grace of God",
    speaker: "Pastor James Williams",
    date: "November 3, 2024",
    duration: "50 min",
    topic: "Grace",
    thumbnail: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&q=80",
  },
  {
    id: 6,
    title: "Family in God's Design",
    speaker: "Pastor James Williams",
    date: "October 27, 2024",
    duration: "47 min",
    topic: "Family",
    thumbnail: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
  },
];

const topics = ["All", "Faith", "Prayer", "Hope", "Holy Spirit", "Grace", "Family"];

const Sermons = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("All");

  const filteredSermons = allSermons.filter((sermon) => {
    const matchesSearch = sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.speaker.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTopic = selectedTopic === "All" || sermon.topic === selectedTopic;
    return matchesSearch && matchesTopic;
  });

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
              Messages
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Sermons
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Watch or listen to our latest messages and grow in your faith.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-muted/50 border-b border-border sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-6xl mx-auto">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search sermons..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {topics.map((topic) => (
                <Button
                  key={topic}
                  variant={selectedTopic === topic ? "gold" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedTopic(topic)}
                >
                  {topic}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sermons Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredSermons.map((sermon, index) => (
              <motion.div
                key={sermon.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={sermon.thumbnail}
                    alt={sermon.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform cursor-pointer">
                      <Play className="w-7 h-7 text-primary ml-1" />
                    </div>
                  </div>
                  <span className="absolute top-4 right-4 bg-gold/90 text-primary text-xs font-medium px-3 py-1 rounded-full">
                    {sermon.topic}
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-gold text-sm mb-2">{sermon.date}</p>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">
                    {sermon.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
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

          {filteredSermons.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No sermons found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Sermons;
