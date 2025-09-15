import { Button } from "@/components/ui/button";
import { Gallery } from "@/components/ui/gallery";
import { HeroSection } from "@/components/ui/hero-section";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function Servizi() {
  const { t } = useLanguage();
  const services = [
    {
      icon: "fas fa-swimming-pool",
      title: t('services.list.pool.title'),
      description: t('services.list.pool.desc'),
    },
    {
      icon: "fas fa-hot-tub",
      title: t('services.list.hot_tub.title'),
      description: t('services.list.hot_tub.desc'),
    },
    {
      icon: "fas fa-utensils",
      title: t('services.list.kitchen.title'),
      description: t('services.list.kitchen.desc'),
    },
    {
      icon: "fas fa-car",
      title: t('services.list.parking.title'),
      description: t('services.list.parking.desc'),
    },
    {
      icon: "fas fa-seedling",
      title: t('services.list.hectares.title'),
      description: t('services.list.hectares.desc'),
    },
    {
      icon: "fas fa-warehouse",
      title: t('services.list.storage.title'),
      description: t('services.list.storage.desc'),
    },
    {
      icon: "fas fa-home",
      title: t('services.list.caretaker.title'),
      description: t('services.list.caretaker.desc'),
    },
    {
      icon: "fas fa-glass-cheers",
      title: t('services.list.portico.title'),
      description: t('services.list.portico.desc'),
    },
  ];

  const luxuryServices = [
    {
      title: t('services.luxury.pool.title'),
      description: t('services.luxury.pool.desc'),
    },
    {
      title: t('services.luxury.kitchen.title'),
      description: t('services.luxury.kitchen.desc'),
    },
    {
      title: t('services.luxury.personal.title'),
      description: t('services.luxury.personal.desc'),
    },
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
          title={t('services.hero.title')}
          subtitle={t('services.hero.subtitle')}
          backgroundImage="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
          ctaText={t('cta.services')}
          ctaLink="/prenota"
        />

      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-serif font-bold text-foreground mb-6">
                {t('services.hero.title')}
              </h1>
              <p
                className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t('services.intro') }}
              />
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
              <h2 className="text-3xl font-serif font-bold mb-6">{t('services.luxury.title')}</h2>
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

            <Gallery images={galleryImages} title={t('services.gallery.title')} />

          {/* CTA */}
          <div className="text-center">
            <Link href="/prenota">
              <Button 
                size="lg" 
                className="luxury-shadow text-lg px-8 py-4"
                data-testid="button-servizi-cta"
              >
                {t('cta.services')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
