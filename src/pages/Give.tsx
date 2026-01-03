import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

export default function Give() {
  return (
    <Layout>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Give Online
          </h1>

          <p className="text-muted-foreground mb-8">
            Thank you for partnering with Mon Repos Assembly of God.
            Your generosity helps us advance God’s work in our community.
          </p>

          <div className="space-y-4">
            <Button variant="gold" size="lg" className="w-full">
              Give via PayPal (Coming Soon)
            </Button>

            <Button variant="outline" size="lg" className="w-full">
              Bank Transfer (Coming Soon)
            </Button>

            <Button variant="outline" size="lg" className="w-full">
              MMG (Coming Soon)
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground italic">
            “Each one must give as he has decided in his heart, not reluctantly or under compulsion,
            for God loves a cheerful giver.” — 2 Corinthians 9:7
          </p>
        </div>
      </section>
    </Layout>
  );
}
