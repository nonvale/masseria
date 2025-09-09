import { Button } from "@/components/ui/button";
import { Gallery } from "@/components/ui/gallery";
import { HeroSection } from "@/components/ui/hero-section";
import { Link } from "wouter";

export default function Servizi() {
  const services = [
    { icon: "fas fa-swimming-pool", title: "Piscine", description: "Piscina esterna riscaldata e piscina coperta con sistema fotovoltaico dedicato" },
    { icon: "fas fa-hot-tub", title: "Idromassaggio", description: "Area wellness con idromassaggio e zona relax per il vostro benessere" },
    { icon: "fas fa-utensils", title: "Cucina Gourmet", description: "Cucina industriale professionale per eventi e servizi di ristorazione" },
    { icon: "fas fa-car", title: "Parcheggio", description: "Garage coperto da 500 mq e ampi spazi di parcheggio per gli ospiti" },
    { icon: "fas fa-seedling", title: "50 Ettari", description: "Proprietà immersa in 50 ettari di uliveti e giardini mediterranei" },
    { icon: "fas fa-warehouse", title: "Magazzino", description: "750 mq di spazi di deposito per eventi e attrezzature" },
    { icon: "fas fa-home", title: "Casa Custode", description: "Servizio di custodia e assistenza 24/7 per la vostra sicurezza" },
    { icon: "fas fa-glass-cheers", title: "Portico Feste", description: "235 mq di spazio coperto per eventi e celebrazioni" }
  ];

  const luxuryServices = [
    {
      title: "Piscina Riscaldata All'Anno",
      description: "Sistema di riscaldamento a energia solare per un comfort ottimale in ogni stagione"
    },
    {
      title: "Cucina Professionale",
      description: "Attrezzature di alta qualità per servizi di catering e ristorazione gourmet"
    },
    {
      title: "Servizio Personalizzato",
      description: "Staff dedicato per servizi su misura e assistenza personalizzata"
    }
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Outdoor heated pool"
    },
    {
      src: "https://pixabay.com/get/g12e19891b0f8667bf44cebc3d50f5f241b7868e756c156ed5aa79ba58ba36504d7e23c80470d991d393530614e37a2b2677edbe140e3a6a9b233d94e7f273dfb_1280.jpg",
      alt: "Professional kitchen"
    },
    {
      src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Spa jacuzzi area"
    },
    {
      src: "https://pixabay.com/get/gf25525c580a121f83eaaf1d3a9c5f5e060304ed94951926cfe47fce56bf78432c3ca18b2aeecb93d9b331d982e388dd73e8ead7923ebc0ee4b6004c48727fdb9_1280.jpg",
      alt: "Covered party area"
    },
    {
      src: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Olive grove gardens"
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Elegant dining service"
    }
  ];

  return (
    <div className="pt-20">
      <HeroSection
        title="Servizi Esclusivi"
        subtitle="Una gamma completa di <strong>servizi di lusso</strong> per rendere il vostro soggiorno indimenticabile. 
          Dalla <strong>cucina gourmet</strong> alle aree wellness, ogni dettaglio è curato."
        backgroundImage="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
        ctaText="Scopri Tutti i Servizi"
        ctaLink="/prenota"
      />

      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-foreground mb-6">Servizi Esclusivi</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Una gamma completa di <strong>servizi di lusso</strong> per rendere il vostro soggiorno indimenticabile.
              
              <br /><br />
              Dalla <strong>cucina gourmet</strong> alle aree wellness, ogni dettaglio è curato per offrirvi il massimo comfort 
              in questa <strong>struttura pugliese di lusso</strong>. I nostri servizi uniscono tradizione e innovazione 
              per garantire un'esperienza unica.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-2xl luxury-shadow text-center hover-elevate"
              >
                <i className={`${service.icon} text-4xl text-primary mb-4`}></i>
                <h3 className="text-xl font-serif font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Detailed Services */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Servizi di Lusso</h2>
              <div className="space-y-6">
                {luxuryServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fas fa-check text-primary-foreground text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{service.title}</h4>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img 
                src="https://pixabay.com/get/g013a66dea38f8faf62e1f7a1ccd3ba004a2aa7d7bb4fb410c8aaccd4205fd9b5b62cbc29bb58b60ad4100d2088bf80f958e4b14257b754ad37345c1f8274ade6_1280.jpg" 
                alt="Professional kitchen facilities" 
                className="rounded-2xl luxury-shadow"
              />
            </div>
          </div>

          <Gallery images={galleryImages} title="Galleria Servizi" />

          {/* CTA */}
          <div className="text-center">
            <Link href="/prenota">
              <Button 
                size="lg" 
                className="luxury-shadow text-lg px-8 py-4"
                data-testid="button-servizi-cta"
              >
                Scopri Tutti i Servizi
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
