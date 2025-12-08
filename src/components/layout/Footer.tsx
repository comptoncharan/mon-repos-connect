import { Link } from "react-router-dom";
import { Cross, MapPin, Phone, Mail, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                <Cross className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">Mon Repos</h3>
                <p className="text-xs tracking-wider text-primary-foreground/70">Assembly of God</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed font-serif italic">
              "The church where everybody is somebody and Jesus Christ is Lord."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              {["About", "Sermons", "Events", "Ministries", "Livestream"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-gold">Service Times</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <span className="block font-medium text-primary-foreground">Sunday Worship</span>
                9:00 AM & 6:00 PM
              </li>
              <li>
                <span className="block font-medium text-primary-foreground">Wednesday Bible Study</span>
                7:00 PM
              </li>
              <li>
                <span className="block font-medium text-primary-foreground">Friday Prayer Meeting</span>
                7:00 PM
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-gold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <span>45 Mon Repos Housing Scheme ECD, Georgetown, Guyana</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>623-1382</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>info@monreposag.org</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Mon Repos Assembly of God Church. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/50">
            Made with ♥ for the Kingdom
          </p>
        </div>
      </div>
    </footer>
  );
}
