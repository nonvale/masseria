import { FeatureCard } from "@/components/ui/feature-card";
import { HeroSection } from "@/components/ui/hero-section";

export default function Home() {
  const features = [
    {
      title: "Eventi Indimenticabili",
      description: `<strong>Matrimoni di lusso</strong> e eventi esclusivi nella nostra <strong>masseria pugliese autentica</strong>. 
        Celebrazioni uniche tra storia e tradizione, con la chiesa consacrata e spazi per 200 ospiti.`,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      link: "/eventi"
    },
    {
      title: "Trulli di Lusso",
      description: `<strong>Appartamenti di lusso</strong> nei nostri <strong>trulli autentici</strong> restaurati con cura. 
        Suite esclusive che uniscono tradizione pugliese e comfort moderno per un soggiorno indimenticabile.`,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      link: "/camere"
    },
    {
      title: "Servizi Esclusivi",
      description: `Spa wellness, piscine riscaldate, idromassaggio e cucina gourmet nella nostra <strong>struttura pugliese di lusso</strong>. 
        Relax e benessere in un ambiente esclusivo e riservato.`,
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      link: "/servizi"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <HeroSection
        title="Benvenuti alla<br><span class='text-accent'>Masseria Termiteto</span>"
        subtitle="<strong>Luxury Apulian Resort</strong> autentico immerso in 50 ettari di bellezza mediterranea. 
          Esperienza di <strong>lusso pugliese</strong> tra trulli storici e tradizione millenaria."
        backgroundImage="https://pixabay.com/get/g74db269017f42bfcec438b21a86bd271ff2cc98bab39a7735337c59f79ea4162f95523c4a2133a424cddf77920532ca0146abf22d7c90426f9616dc8029cc585_1280.jpg"
        ctaText="Scopri il Lusso"
        ctaLink="/prenota"
      />

      {/* Features Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Esperienze Indimenticabili
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tre dimensioni del <strong>lusso pugliese</strong> che renderanno il vostro soggiorno unico e memorabile
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
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">La Nostra Storia</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong>Masseria Termiteto</strong> è una <strong>masseria pugliese autentica</strong> del XVI secolo, 
                  completamente restaurata preservando la sua architettura originale e il fascino storico.
                </p>
                <p>
                  Immersa in <strong>50 ettari di terreno</strong> con uliveti secolari, la nostra proprietà offre 
                  un'esperienza di <strong>lusso apuliano</strong> unica, dove tradizione e comfort moderno si incontrano perfettamente.
                </p>
                <p>
                  Dalla chiesa consacrata del XVII secolo ai <strong>trulli autentici</strong> restaurati, 
                  ogni spazio racconta la storia millenaria della Puglia in un contesto di lusso esclusivo.
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
