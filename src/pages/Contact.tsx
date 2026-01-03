import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  Youtube,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  const isSuccess = new URLSearchParams(location.search).get("success");

  return (
    <Layout>
      {/* HERO */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-navy to-navy-light text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-4">
              Get In Touch
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/80">
              We'd love to hear from you. Reach out with any questions or prayer requests.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* CONTACT INFO */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                Visit Us
              </h2>

              <div className="space-y-6 mb-10">
                <Info icon={<MapPin />} title="Address">
                  45 Mon Repos Housing Scheme ECD<br />Guyana
                </Info>
                <Info icon={<Phone />} title="Phone">
                  592-623-1382
                </Info>
                <Info icon={<Mail />} title="Email">
                  info@monreposag.org
                </Info>
                <Info icon={<Clock />} title="Service Times">
                  Sunday: 9:30 AM & 6:30 PM Martryville Outstation<br />
                  Wednesday: 6:30 PM Jango Town & Martryville<br />
                  Friday: 6:30 PM
                </Info>
              </div>

              <h3 className="font-semibold text-foreground mb-4">
                Connect With Us
              </h3>
              <div className="flex gap-4">
                <Social href="https://facebook.com"><Facebook /></Social>
                <Social href="https://youtube.com"><Youtube /></Social>
                <Social href="https://wa.me/5926231382"><MessageCircle /></Social>
              </div>
            </motion.div>

            {/* CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>

                {isSuccess && (
                  <div className="mb-6 rounded-lg bg-green-100 text-green-800 px-4 py-3 text-sm">
                    ✅ Thank you! Your message has been sent successfully.
                  </div>
                )}

                <form
                  action="https://formspree.io/f/xnjqenvg"
                  method="POST"
                  className="space-y-6"
                >
                  <Input name="name" placeholder="Your name" required />
                  <Input name="email" type="email" placeholder="your@email.com" required />
                  <Input name="phone" placeholder="Your phone number (optional)" />
                  <Textarea
                    name="message"
                    rows={5}
                    placeholder="How can we help you?"
                    required
                  />

                  <input
                    type="hidden"
                    name="_subject"
                    value="New message from church website"
                  />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://comptoncharan.github.io/mon-repos-connect/contact?success=true"
                  />
                  <input type="text" name="_gotcha" style={{ display: "none" }} />

                  <Button type="submit" variant="gold" className="w-full" size="lg">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>

                  {/* PRIVACY TEXT */}
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    We respect your privacy. Contact information is used only to respond to inquiries.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-2">
                Find Us
              </h2>
              <p className="text-muted-foreground">
                Mon Repos Assembly of God — Georgetown, Guyana
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-card">
              <iframe
                title="Mon Repos Assembly of God Map"
                src="https://www.google.com/maps?q=Mon+Repos+Assembly+of+God+Guyana&z=16&output=embed"
                className="w-full h-[420px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Mon+Repos+Assembly+of+God+Guyana"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-gold text-primary font-semibold text-lg hover:opacity-90 transition"
              >
                📍 Get Directions on Google Maps
              </a>
              <p className="mt-3 text-sm text-muted-foreground">
                Opens in Google Maps for turn-by-turn navigation
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PLAN YOUR VISIT */}
      <section className="py-20 bg-navy text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Plan Your First Visit
            </h2>
            <p className="text-primary-foreground/70 mb-10">
              We can’t wait to welcome you. Here’s what you can expect when you visit
              Mon Repos Assembly of God.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <VisitCard
                title="Warm Welcome"
                text="Our greeters will welcome you and help you feel right at home."
              />
              <VisitCard
                title="Powerful Worship"
                text="Experience uplifting worship that glorifies God."
              />
              <VisitCard
                title="Biblical Teaching"
                text="Messages rooted in Scripture and relevant to daily life."
              />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

/* ---------- HELPER COMPONENTS ---------- */

const Info = ({ icon, title, children }: any) => (
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-muted-foreground">{children}</p>
    </div>
  </div>
);

const Social = ({ href, children }: any) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center hover:bg-gold hover:text-primary transition"
  >
    {children}
  </a>
);

const VisitCard = ({ title, text }: any) => (
  <div className="bg-navy-light rounded-xl p-6">
    <h3 className="font-serif text-lg font-semibold text-gold mb-2">
      {title}
    </h3>
    <p className="text-primary-foreground/70 text-sm">
      {text}
    </p>
  </div>
);


