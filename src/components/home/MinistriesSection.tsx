import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Music,
  Users,
  User,
  Heart,
  HandHeart,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ministries = [
  {
    id: 1,
    name: "Worship Team",
    description:
      "Leading the congregation in praise and worship through music and song.",
    icon: Music,
  },
  {
    id: 2,
    name: "Youth Ministry",
    description:
      "Empowering young people to grow in faith and become leaders.",
    icon: Users,
  },
  {
    id: 3,
    name: "Women's Ministry",
    description:
      "Building a community of faith, support, and sisterhood among women.",
    icon: Heart,
  },
  {
    id: 4,
    name: "Intercessory Team",
    description:
      "Committed to prayer and spiritual warfare for the church and community.",
    icon: HandHeart,
  },
  {
    id: 5,
    name: "Missions",
    description:
      "Spreading the Gospel and serving communities locally and globally.",
    icon: Globe,
  },
  {
    id: 6,
    name: "Men’s Ministry",
    description:
      "Building strong men of faith through fellowship, discipleship, accountability, and service.",
    icon: User,
  },
];

export function MinistriesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-4">
            Get Involved
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Ministries
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover opportunities to serve, grow, and connect with our church family.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {ministries.map((ministry, index) => (
            <motion.div
              key={ministry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer border border-transparent hover:border-gold/20"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold group-hover:shadow-gold transition-all duration-300">
                <ministry.icon className="w-7 h-7 text-gold group-hover:text-primary transition-colors" />
              </div>

              <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                {ministry.name}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {ministry.description}
              </p>

              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-5 h-5 text-gold" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="gold" size="lg" asChild>
            <Link to="/ministries" className="gap-2">
              Explore All Ministries
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
