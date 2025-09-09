import { Button } from "@/components/ui/button";
import { Gallery } from "@/components/ui/gallery";
import { HeroSection } from "@/components/ui/hero-section";
import { Link } from "wouter";

export default function Spa() {
  const spaFeatures = [
    {
      icon: "fas fa-swimming-pool",
      title: "Piscina Coperta Riscaldata",
      description: `Piscina interna di 220 mq ricavata in un antico fienile, riscaldata tutto l'anno con sistema fotovoltaico dedicato. 
        Un ambiente suggestivo con illuminazione LED cromatica e architettura in pietra tradizionale.`
    },
    {
      icon: "fas fa-hot-tub",
      title: "Idromassaggio di Lusso",
      description: `Area idromassaggio esclusiva con getti terapeutici, perfetta per il relax dopo una giornata di esplorazioni. 
        Ambiente intimo e riservato per momenti di puro benessere.`
    },
    {
      icon: "fas fa-spa",
      title: "Area Wellness Ipogea",
      description: `Nel complesso Trulli Michele, area wellness ricavata in un antico ipogeo sotterraneo. 
        Spazio unico che unisce storia millenaria e tecnologie moderne per il benessere.`
    }
  ];

  const spaServices = [
    {
      icon: "fas fa-leaf",
      title: "Trattamenti Naturali",
      description: "Massaggi e trattamenti con prodotti tipici pugliesi: olio extravergine, erbe aromatiche e oli essenziali mediterranei"
    },
    {
      icon: "fas fa-water",
      title: "Idroterapia",
      description: "Percorsi acquatici terapeutici nelle nostre piscine riscaldate per il benessere del corpo e della mente"
    },
    {
      icon: "fas fa-user-clock",
      title: "Servizi Personalizzati",
      description: "Programmi wellness su misura per soggiorni di relax o preparazione per eventi speciali"
    }
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Indoor pool with ambient lighting"
    },
    {
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Spa relaxation area"
    },
    {
      src: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Jacuzzi spa area"
    },
    {
      src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Wellness treatment room"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Underground wellness area"
    },
    {
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Meditation relaxation space"
    }
  ];

  return (
    <div className="pt-20">
      <HeroSection
        title="Spa & Wellness"
        subtitle="Un'oasi di benessere dove <strong>tradizione pugliese</strong> e <strong>lusso moderno</strong> si fondono. 
          La nostra spa offre trattamenti esclusivi in un ambiente unico."
        backgroundImage="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
        ctaText="Prenota il Tuo Benessere"
        ctaLink="/prenota"
      />

      <div className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-foreground mb-6">Spa & Wellness</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Un'oasi di benessere dove <strong>tradizione pugliese</strong> e <strong>lusso moderno</strong> si fondono.
              
              <br /><br />
              La nostra spa offre trattamenti esclusivi in un ambiente unico, tra <strong>piscine riscaldate</strong>, 
              idromassaggio e aree relax immerse nella storia millenaria della masseria. Ogni spazio è progettato 
              per il vostro benessere psicofisico.
            </p>
          </div>

          {/* Spa Features */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Benessere Autentico</h2>
              <div className="space-y-6">
                {spaFeatures.map((feature, index) => (
                  <div key={index} className="bg-background p-6 rounded-xl luxury-shadow">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <i className={`${feature.icon} text-primary mr-3`}></i>
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                alt="Indoor heated pool" 
                className="rounded-2xl luxury-shadow"
              />
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300" 
                alt="Spa treatment room" 
                className="rounded-2xl luxury-shadow"
              />
            </div>
          </div>

          {/* Spa Services */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {spaServices.map((service, index) => (
              <div key={index} className="bg-background p-8 rounded-2xl luxury-shadow text-center hover-elevate">
                <i className={`${service.icon} text-4xl text-primary mb-4`}></i>
                <h3 className="text-xl font-serif font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <Gallery images={galleryImages} title="Galleria Spa" />

          {/* CTA */}
          <div className="text-center">
            <Link href="/prenota">
              <Button 
                size="lg" 
                className="luxury-shadow text-lg px-8 py-4"
                data-testid="button-spa-cta"
              >
                Prenota il Tuo Benessere
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
