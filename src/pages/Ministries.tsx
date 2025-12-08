import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Music, Users, Heart, HandHeart, Globe, Mail, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ministries = [
  {
    id: 1,
    name: "Worship Team",
    description: "Our worship team leads the congregation in heartfelt praise and worship through music and song. We believe that worship is not just a part of the service—it's a lifestyle.",
    icon: Music,
    leader: "Minister Sarah Thomas",
    meetingTime: "Saturdays at 4:00 PM",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&q=80",
  },
  {
    id: 2,
    name: "Youth Ministry",
    description: "Empowering the next generation to discover their identity in Christ and become bold leaders for the Kingdom. We create an environment where young people can grow in faith and friendship.",
    icon: Users,
    leader: "Minister David Peters",
    meetingTime: "Fridays at 6:00 PM",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
  },
  {
    id: 3,
    name: "Women's Ministry",
    description: "Building a strong community of faith, support, and sisterhood among women of all ages. We encourage, equip, and empower women to fulfill their God-given purpose.",
    icon: Heart,
    leader: "Sister Mary Williams",
    meetingTime: "First Saturday of each month",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
  },
  {
    id: 4,
    name: "Intercessory Team",
    description: "A dedicated group committed to prayer and spiritual warfare for the church, community, and nation. We believe in the power of prayer to transform lives and situations.",
    icon: HandHeart,
    leader: "Sister Grace Joseph",
    meetingTime: "Tuesdays at 5:30 AM",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80",
  },
  {
    id: 5,
    name: "Missions",
    description: "Spreading the Gospel and serving communities both locally and around the world. We are committed to making disciples of all nations and meeting the needs of the vulnerable.",
    icon: Globe,
    leader: "Pastor James Williams",
    meetingTime: "Monthly planning meetings",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80",
  },
];

const Ministries = () => {
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
              Get Involved
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Our Ministries
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Discover your place in our church family and use your gifts for God's glory.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ministries List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {ministries.map((ministry, index) => (
              <motion.div
                key={ministry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative">
                    <div className={`absolute w-full h-full bg-gold/20 rounded-2xl ${
                      index % 2 === 0 ? "-bottom-4 -right-4" : "-bottom-4 -left-4"
                    }`} />
                    <img
                      src={ministry.image}
                      alt={ministry.name}
                      className="relative rounded-2xl shadow-elevated w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                    <ministry.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                    {ministry.name}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {ministry.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                        <Users className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-foreground font-medium">{ministry.leader}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-muted-foreground">{ministry.meetingTime}</span>
                    </div>
                  </div>
                  <Button variant="outline" asChild>
                    <Link to="/contact">
                      Get Involved
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Serve?
            </h2>
            <p className="text-muted-foreground mb-8">
              We believe everyone has unique gifts and talents that can be used to serve God and others. 
              Contact us to learn more about how you can get involved in any of our ministries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Learn About Our Church</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Ministries;
