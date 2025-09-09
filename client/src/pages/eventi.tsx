import { Button } from "@/components/ui/button";
import { Gallery } from "@/components/ui/gallery";
import { HeroSection } from "@/components/ui/hero-section";
import { Link } from "wouter";

export default function Eventi() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Outdoor wedding ceremony"
    },
    {
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Romantic candlelit dinner"
    },
    {
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Church wedding ceremony"
    },
    {
      src: "https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Luxury reception setup"
    },
    {
      src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Evening celebration"
    },
    {
      src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Bridal couple portrait"
    }
  ];

  return (
    <div className="pt-20">
      <HeroSection
        title="Eventi Indimenticabili"
        subtitle="<strong>Matrimoni di lusso</strong> e <strong>eventi esclusivi</strong> nella nostra <strong>masseria pugliese autentica</strong>. 
          Celebrazioni uniche che uniscono tradizione millenaria e raffinatezza moderna."
        backgroundImage="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
        ctaText="Richiedi Preventivo"
        ctaLink="/prenota"
      />

      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-foreground mb-6">Eventi Indimenticabili</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <strong>Matrimoni di lusso</strong> e <strong>eventi esclusivi</strong> nella nostra <strong>masseria pugliese autentica</strong>.
              
              <br /><br />
              Celebrazioni uniche che uniscono <strong>tradizione millenaria</strong> e raffinatezza moderna in un contesto di bellezza straordinaria. 
              La nostra masseria offre spazi versatili per ogni tipo di evento, dalla chiesa consacrata del XVII secolo ai giardini panoramici.
            </p>
          </div>

          {/* Event Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-card p-8 rounded-2xl luxury-shadow hover-elevate">
              <i className="fas fa-church text-4xl text-primary mb-4"></i>
              <h3 className="text-xl font-serif font-bold mb-4">Chiesa Consacrata</h3>
              <p className="text-muted-foreground">
                Cerimonie religiose nella nostra <strong>chiesa del XVII secolo</strong>, completamente restaurata e benedetta per matrimoni ufficiali.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl luxury-shadow hover-elevate">
              <i className="fas fa-users text-4xl text-primary mb-4"></i>
              <h3 className="text-xl font-serif font-bold mb-4">Fino a 200 Ospiti</h3>
              <p className="text-muted-foreground">
                Spazi versatili per <strong>ricevimenti di ogni dimensione</strong>, da eventi intimi a grandi celebrazioni in ambiente esclusivo.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl luxury-shadow hover-elevate">
              <i className="fas fa-utensils text-4xl text-primary mb-4"></i>
              <h3 className="text-xl font-serif font-bold mb-4">Cucina Gourmet</h3>
              <p className="text-muted-foreground">
                <strong>Cucina professionale</strong> con menu personalizzati che celebrano i sapori autentici della tradizione pugliese.
              </p>
            </div>
          </div>

          <Gallery images={galleryImages} title="Galleria Eventi" />

          {/* CTA */}
          <div className="text-center">
            <Link href="/prenota">
              <Button 
                size="lg" 
                className="luxury-shadow text-lg px-8 py-4"
                data-testid="button-eventi-cta"
              >
                Richiedi Preventivo Eventi
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
