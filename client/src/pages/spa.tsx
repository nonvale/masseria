import { Button } from "@/components/ui/button";
import { Gallery } from "@/components/ui/gallery";
import { HeroSection } from "@/components/ui/hero-section";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function Spa() {
  const { t } = useLanguage();
  const spaFeatures = [
    {
      icon: "fas fa-swimming-pool",
      title: t("spa.features.covered_pool.title"),
      description: t("spa.features.covered_pool.description")
    },
    {
      icon: "fas fa-hot-tub",
      title: t("spa.features.hydromassage.title"),
      description: t("spa.features.hydromassage.description")
    },
    {
      icon: "fas fa-spa",
      title: t("spa.features.wellness_area.title"),
      description: t("spa.features.wellness_area.description")
    }
  ];

  const spaServices = [
    {
      icon: "fas fa-leaf",
      title: t("spa.services.natural.title"),
      description: t("spa.services.natural.description")
    },
    {
      icon: "fas fa-water",
      title: t("spa.services.hydrotherapy.title"),
      description: t("spa.services.hydrotherapy.description")
    },
    {
      icon: "fas fa-user-clock",
      title: t("spa.services.personalized.title"),
      description: t("spa.services.personalized.description")
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
        title={t("spa.hero.title")}
        subtitle={t("spa.hero.subtitle")}
        backgroundImage="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
        ctaText={t("cta.spa")}
        ctaLink="/prenota"
      />

      <div className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-foreground mb-6">{t("spa.section.title")}</h1>
            <p
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t("spa.section.description") }}
            ></p>
          </div>

          {/* Spa Features */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">{t("spa.features.heading")}</h2>
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

          <Gallery images={galleryImages} title={t("spa.gallery.title")} />

          {/* CTA */}
          <div className="text-center">
            <Link href="/prenota">
              <Button
                size="lg"
                className="luxury-shadow text-lg px-8 py-4"
                data-testid="button-spa-cta"
              >
                {t("cta.spa")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
