import { Button } from "@/components/ui/button";
import { Gallery } from "@/components/ui/gallery";
import { HeroSection } from "@/components/ui/hero-section";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function Chiesa() {
  const { t } = useLanguage();
  const churchFeatures = [
    { icon: "fas fa-calendar-alt", title: "XVII Secolo", description: "Costruzione originaria" },
    { icon: "fas fa-church", title: "110 mq", description: "Superficie totale" },
    { icon: "fas fa-ring", title: "Matrimoni Religiosi", description: "Autorizzata per cerimonie" },
    { icon: "fas fa-bell", title: "Campanile Storico", description: "Ancora funzionante" }
  ];

  const weddingServices = [
    {
      icon: "fas fa-heart",
      title: "Cerimonie Autorizzate",
      description: "Matrimoni religiosi ufficiali in ambiente consacrato con validità legale completa"
    },
    {
      icon: "fas fa-music",
      title: "Accompagnamento Musicale",
      description: "Servizi di organista e coro per rendere la cerimonia ancora più emozionante"
    },
    {
      icon: "fas fa-camera",
      title: "Location Fotografica",
      description: "Spazi interni ed esterni perfetti per servizi fotografici di matrimonio"
    }
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Church altar interior"
    },
    {
      src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Wedding ceremony"
    },
    {
      src: "https://pixabay.com/get/g4f1ac3d71699b97005e30f398264b99c957b58e0ab710cfba6773428cde8be51951e59e702f951d1b2a85fed80c32865a0417e5fc26221c66373883202425f25_1280.jpg",
      alt: "Historic bell tower"
    },
    {
      src: "https://pixabay.com/get/gd7d04aff821dcf6b2b8c227d42bd139e8cd0cac0091a8a8ea2ae3738bde0f7f68e3ca6d8db8c69a2594bdd04ebe653d900590f7b4e5aaffa56611cf7b5dd915a_1280.jpg",
      alt: "Sacred religious art"
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Church entrance"
    },
    {
      src: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Church interior with pews"
    }
  ];

  return (
    <div className="pt-20">
      <HeroSection
        title="Chiesa Consacrata"
        subtitle="La nostra <strong>chiesa consacrata</strong> del XVII secolo rappresenta il cuore spirituale della masseria. 
          Uno spazio sacro unico per <strong>matrimoni religiosi</strong> e celebrazioni speciali."
        backgroundImage="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
        ctaText="Prenota la Tua Cerimonia"
        ctaLink="/prenota"
      />

      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-foreground mb-6">Chiesa Consacrata</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              La nostra <strong>chiesa consacrata</strong> del XVII secolo rappresenta il cuore spirituale della masseria.
              
              <br /><br />
              Completamente restaurata preservando la sua autenticità storica, offre uno spazio sacro unico 
              per <strong>matrimoni religiosi</strong> e celebrazioni speciali in Puglia. Un luogo dove spiritualità 
              e bellezza architettonica si incontrano per creare momenti indimenticabili.
            </p>
          </div>

          {/* Church Features */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Historic church interior" 
                className="rounded-2xl luxury-shadow w-full"
              />
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Storia e Spiritualità</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  La <strong>chiesa di Masseria Termiteto</strong> risale al XVII secolo e rappresenta un esempio straordinario 
                  di architettura sacra pugliese. Costruita secondo i canoni tradizionali, conserva ancora oggi il suo fascino originario.
                </p>
                <p>
                  Completamente <strong>consacrata e benedetta</strong>, la chiesa è autorizzata per celebrazioni religiose ufficiali, 
                  offrendo alle coppie la possibilità di celebrare il loro matrimonio in un contesto di rara bellezza e spiritualità.
                </p>
                <p>
                  L'<strong>antico campanile</strong> ancora funzionante veglia sulla proprietà, 
                  mentre gli interni restaurati con cura mantengono l'atmosfera sacra e solenne tipica delle chiese pugliesi storiche.
                </p>
              </div>

              {/* Church Features Grid */}
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                {churchFeatures.map((feature, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <i className={`${feature.icon} text-primary mr-2`}></i>
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Wedding Services */}
          <div className="bg-muted rounded-3xl p-12 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif font-bold mb-4">Matrimoni Religiosi</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Celebrate il vostro amore in una cornice di spiritualità autentica e bellezza senza tempo
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {weddingServices.map((service, index) => (
                <div key={index} className="text-center">
                  <i className={`${service.icon} text-4xl text-primary mb-4`}></i>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <Gallery images={galleryImages} title="Galleria Chiesa" />

          {/* CTA */}
          <div className="text-center">
            <Link href="/prenota">
              <Button 
                size="lg" 
                className="luxury-shadow text-lg px-8 py-4"
                data-testid="button-chiesa-cta"
              >
                {t('cta.church')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
