import { Button } from "@/components/ui/button";
import { Gallery } from "@/components/ui/gallery";
import { HeroSection } from "@/components/ui/hero-section";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function Chiesa() {
  const { t } = useLanguage();
  const churchFeatures = [
    {
      icon: "fas fa-calendar-alt",
      title: t("church.features.century.title"),
      description: t("church.features.century.description"),
    },
    {
      icon: "fas fa-church",
      title: t("church.features.size.title"),
      description: t("church.features.size.description"),
    },
    {
      icon: "fas fa-ring",
      title: t("church.features.weddings.title"),
      description: t("church.features.weddings.description"),
    },
    {
      icon: "fas fa-bell",
      title: t("church.features.belltower.title"),
      description: t("church.features.belltower.description"),
    }
  ];

  const weddingServices = [
    {
      icon: "fas fa-heart",
      title: t("church.wedding.services.authorized.title"),
      description: t("church.wedding.services.authorized.description"),
    },
    {
      icon: "fas fa-music",
      title: t("church.wedding.services.music.title"),
      description: t("church.wedding.services.music.description"),
    },
    {
      icon: "fas fa-camera",
      title: t("church.wedding.services.photography.title"),
      description: t("church.wedding.services.photography.description"),
    }
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Church altar interior",
    },
    {
      src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Wedding ceremony",
    },
    {
      src: "https://pixabay.com/get/g4f1ac3d71699b97005e30f398264b99c957b58e0ab710cfba6773428cde8be51951e59e702f951d1b2a85fed80c32865a0417e5fc26221c66373883202425f25_1280.jpg",
      alt: "Historic bell tower",
    },
    {
      src: "https://pixabay.com/get/gd7d04aff821dcf6b2b8c227d42bd139e8cd0cac0091a8a8ea2ae3738bde0f7f68e3ca6d8db8c69a2594bdd04ebe653d900590f7b4e5aaffa56611cf7b5dd915a_1280.jpg",
      alt: "Sacred religious art",
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Church entrance",
    },
    {
      src: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Church interior with pews",
    }
  ];

  return (
    <div className="pt-20">
      <HeroSection
        title={t("church.hero.title")}
        subtitle={t("church.hero.subtitle")}
        backgroundImage="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
        ctaText={t("cta.church")}
        ctaLink="/prenota"
      />

      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1
              className="text-5xl font-serif font-bold text-foreground mb-6"
              dangerouslySetInnerHTML={{ __html: t("church.intro.title") }}
            />
            <p
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t("church.intro.description") }}
            />
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
              <h2
                className="text-3xl font-serif font-bold mb-6"
                dangerouslySetInnerHTML={{ __html: t("church.history.title") }}
              />
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: t("church.history.paragraph1") }} />
                <p dangerouslySetInnerHTML={{ __html: t("church.history.paragraph2") }} />
                <p dangerouslySetInnerHTML={{ __html: t("church.history.paragraph3") }} />
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
              <h2
                className="text-3xl font-serif font-bold mb-4"
                dangerouslySetInnerHTML={{ __html: t("church.wedding.title") }}
              />
              <p
                className="text-muted-foreground max-w-2xl mx-auto"
                dangerouslySetInnerHTML={{ __html: t("church.wedding.subtitle") }}
              />
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

          <Gallery images={galleryImages} title={t("church.gallery.title")} />

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
