import { FeatureCard } from "@/components/ui/feature-card";
import { HeroSection } from "@/components/ui/hero-section";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const features = [
    {
      title: t('home.feature1.title'),
      description: t('home.feature1.desc'),
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      link: "/eventi"
    },
    {
      title: t('home.feature2.title'),
      description: t('home.feature2.desc'),
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      link: "/camere"
    },
    {
      title: t('home.feature3.title'),
      description: t('home.feature3.desc'),
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      link: "/servizi"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <HeroSection
        title={t('home.hero.title')}
        subtitle={t('home.hero.subtitle')}
        backgroundImage="https://pixabay.com/get/g74db269017f42bfcec438b21a86bd271ff2cc98bab39a7735337c59f79ea4162f95523c4a2133a424cddf77920532ca0146abf22d7c90426f9616dc8029cc585_1280.jpg"
        ctaText={t('home.hero.cta')}
        ctaLink="/prenota"
      />

      {/* Features Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              {t('home.experiences.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('home.experiences.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                image={feature.image}
                link={feature.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">{t('home.story.title')}</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  {t('home.story.p1')}
                </p>
                <p>
                  {t('home.story.p2')}
                </p>
                <p>
                  {t('home.story.p3')}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <img 
                src="https://pixabay.com/get/g5a830c9c663ef73c98cef4e6202f40279cf16a1d56cacca9944a3144fef37cc33d2196393f2c03d086ab374696c2aa737e771e26535e1a6f9a321842ab4fa0a3_1280.jpg" 
                alt="Aerial view of Masseria Termiteto" 
                className="rounded-2xl luxury-shadow"
              />
              <img 
                src="https://pixabay.com/get/gc50e41d850fc5d06bcef75581ce1098b68be34535c6dadbcd8ee8819eba1754dc4f6de00ae30cdeb2f6e83a506c136a0b5e7d6d87be10c95b80e2cfd8db5de24_1280.jpg" 
                alt="Traditional trulli architecture" 
                className="rounded-2xl luxury-shadow"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
