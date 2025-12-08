import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Cross, BookOpen, Heart, Users } from "lucide-react";
import pastorImage from "@/assets/pastor.jpg";

const beliefs = [
  {
    title: "The Bible",
    description: "We believe the Bible is the inspired, infallible Word of God and the supreme authority in all matters of faith and conduct.",
  },
  {
    title: "The Trinity",
    description: "We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.",
  },
  {
    title: "Salvation",
    description: "We believe salvation is a gift from God, received through faith in Jesus Christ who died for our sins and rose again.",
  },
  {
    title: "The Holy Spirit",
    description: "We believe in the baptism of the Holy Spirit with the evidence of speaking in tongues, as experienced on the Day of Pentecost.",
  },
  {
    title: "Divine Healing",
    description: "We believe in divine healing as provided in the atonement and is available to all believers today.",
  },
  {
    title: "The Second Coming",
    description: "We believe in the imminent, personal return of our Lord Jesus Christ to gather His Church.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-navy to-navy-light text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-4">
              About Us
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl text-primary-foreground/80 font-serif italic">
              "The church where everybody is somebody and Jesus Christ is Lord."
            </p>
          </motion.div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  A Legacy of Faith
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Mon Repos Assembly of God Church has been serving the community of Mon Repos 
                    and the East Coast Demerara for decades. What began as a small gathering of 
                    believers has grown into a vibrant church family united by faith in Jesus Christ.
                  </p>
                  <p>
                    Our church is part of the Assemblies of God fellowship, one of the largest 
                    Pentecostal denominations in the world, known for its commitment to the Gospel 
                    and the power of the Holy Spirit.
                  </p>
                  <p>
                    Today, we continue to fulfill our mission of sharing God's love, making disciples, 
                    and serving our community with the same passion and dedication as our founders.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-gold/20 rounded-2xl" />
                <div className="relative bg-muted rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
                  <Cross className="w-24 h-24 text-gold" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: "Our Mission",
                  description: "To proclaim the Gospel of Jesus Christ, make disciples of all nations, and demonstrate God's love through service to our community.",
                },
                {
                  icon: Heart,
                  title: "Our Vision",
                  description: "To be a Spirit-filled church that transforms lives, builds strong families, and impacts our nation for the glory of God.",
                },
                {
                  icon: Users,
                  title: "Our Values",
                  description: "Faith in God's Word, love for one another, excellence in worship, integrity in all things, and commitment to community.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-card text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pastor */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <p className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-4">
                Leadership
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Meet Our Pastor
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-gold/20 rounded-2xl" />
                <img
                  src={pastorImage}
                  alt="Pastor"
                  className="relative rounded-2xl shadow-elevated w-full object-cover aspect-[4/5]"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Pastor James Williams
                </h3>
                <p className="text-gold font-medium mb-6">Senior Pastor</p>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Pastor James has been faithfully serving Mon Repos Assembly of God for over 
                    15 years. His passion for preaching the Word of God and caring for the 
                    congregation has made him a beloved leader in our community.
                  </p>
                  <p>
                    He holds a degree in Theology and has been ordained with the Assemblies of God. 
                    Together with his wife and family, he continues to lead our church in spiritual 
                    growth and community outreach.
                  </p>
                  <p className="font-serif italic text-foreground">
                    "My heart's desire is to see every person in our community experience the 
                    transforming love of Jesus Christ."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-20 bg-navy text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-4">
              What We Believe
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Our Statement of Faith
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {beliefs.map((belief, index) => (
              <motion.div
                key={belief.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-navy-light rounded-xl p-6 border border-primary-foreground/10"
              >
                <h3 className="font-serif text-xl font-semibold text-gold mb-3">
                  {belief.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm">
                  {belief.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
