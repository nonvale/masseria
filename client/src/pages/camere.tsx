import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gallery } from "@/components/ui/gallery";
import { HeroSection } from "@/components/ui/hero-section";
import { Link } from "wouter";

export default function Camere() {
  const accommodations = [
    {
      title: "Trulli Elisabetta",
      description: `<strong>Trulli di lusso</strong> con 4 coni tradizionali completamente ristrutturati. 
        117 mq di comfort esclusivo con giardino privato, orto e patio panoramico ideale per momenti di relax.`,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      features: ["4 Coni Autentici", "117 mq", "Giardino Privato"]
    },
    {
      title: "Trulli Michele",
      description: `<strong>Suite di lusso</strong> con 7 coni tradizionali e area wellness esclusiva. 
        160 mq con ipogeo antico, piscina privata e vista panoramica mozzafiato sui 50 ettari della proprietà.`,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      features: ["7 Coni", "160 mq", "Area Wellness", "Piscina Privata"]
    },
    {
      title: "Masseria Principale",
      description: `<strong>Suite esclusive</strong> nell'edificio principale della masseria. 
        1.200 mq distribuiti su 2 piani con 7 suite indipendenti, ognuna con caratteristiche uniche e comfort di lusso.`,
      image: "https://images.unsplash.com/photo-1578774296842-c45e472b3028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      features: ["7 Suite", "1.200 mq", "2 Piani"]
    },
    {
      title: "Dependance",
      description: `<strong>Alloggi di charme</strong> nelle antiche stalle convertite e nella Torretta. 
        Spazi intimi e caratteristici con accesso indipendente, perfetti per soggiorni esclusivi e riservati.`,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      features: ["Ex Stalle", "Torretta", "Accesso Privato"]
    }
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Trulli bedroom interior"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Luxury bathroom design"
    },
    {
      src: "https://images.unsplash.com/photo-1578774296842-c45e472b3028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Private garden terrace"
    },
    {
      src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Suite living area"
    },
    {
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Traditional cone ceiling"
    },
    {
      src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Master suite with views"
    }
  ];

  return (
    <div className="pt-20">
      <HeroSection
        title="Camere e Suite"
        subtitle="<strong>Appartamenti di lusso</strong> nei nostri <strong>trulli autentici</strong> e suite esclusive. 
          Ogni sistemazione preserva l'architettura originale pugliese con comfort moderno."
        backgroundImage="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
        ctaText="Prenota Ora"
        ctaLink="/prenota"
      />

      <div className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-foreground mb-6">Camere e Suite</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <strong>Appartamenti di lusso</strong> nei nostri <strong>trulli autentici</strong> e suite esclusive.
              
              <br /><br />
              Ogni sistemazione è stata restaurata preservando l'<strong>architettura originale pugliese</strong> e dotata di ogni comfort moderno 
              per un soggiorno indimenticabile. I nostri trulli rappresentano l'essenza della tradizione apuliana 
              reinterpretata in chiave contemporanea.
            </p>
          </div>

          {/* Accommodations */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {accommodations.map((accommodation, index) => (
              <Card key={index} className="overflow-hidden luxury-shadow hover-elevate">
                <img 
                  src={accommodation.image} 
                  alt={accommodation.title} 
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-bold mb-4">{accommodation.title}</h3>
                  <p 
                    className="text-muted-foreground mb-4 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: accommodation.description }}
                  ></p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {accommodation.features.map((feature, featureIndex) => (
                      <Badge 
                        key={featureIndex} 
                        variant="secondary"
                        className="bg-primary/10 text-primary"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Gallery images={galleryImages} title="Galleria Camere" />

          {/* CTA */}
          <div className="text-center">
            <Link href="/prenota">
              <Button 
                size="lg" 
                className="luxury-shadow text-lg px-8 py-4"
                data-testid="button-camere-cta"
              >
                Prenota il Tuo Soggiorno
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
