import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gallery } from "@/components/ui/gallery";
import { HeroSection } from "@/components/ui/hero-section";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function Camere() {
  const { t } = useLanguage();
  
  const accommodations = [
    {
      title: t('rooms.elisabetta.title'),
      description: t('rooms.elisabetta.desc'),
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      features: ["4 Coni Autentici", "117 mq", "Giardino Privato"]
    },
    {
      title: t('rooms.michele.title'),
      description: t('rooms.michele.desc'),
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      features: ["7 Coni", "160 mq", "Area Wellness", "Piscina Privata"]
    },
    {
      title: t('rooms.masseria.title'),
      description: t('rooms.masseria.desc'),
      image: "https://images.unsplash.com/photo-1578774296842-c45e472b3028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      features: ["7 Suite", "1.200 mq", "2 Piani"]
    },
    {
      title: t('rooms.dependance.title'),
      description: t('rooms.dependance.desc'),
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
        title={t('rooms.hero.title')}
        subtitle={t('rooms.hero.subtitle')}
        backgroundImage="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
        ctaText={t('nav.book')}
        ctaLink="/prenota"
      />

      <div className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-foreground mb-6">{t('rooms.hero.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('rooms.description1')}
              <br /><br />
              {t('rooms.description2')}
              <br /><br />
              {t('rooms.description3')}
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

          <Gallery images={galleryImages} title={t('rooms.gallery.title') || "Galleria Camere"} />

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
