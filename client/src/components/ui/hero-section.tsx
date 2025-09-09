import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
}

export function HeroSection({ 
  title, 
  subtitle, 
  backgroundImage, 
  ctaText = "Scopri di Più", 
  ctaLink = "/prenota" 
}: HeroSectionProps) {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="relative h-full flex items-center justify-center text-center text-white">
        <div className="max-w-4xl px-4">
          <h1 
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
          <p 
            className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto font-light"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          ></p>
          <Link href={ctaLink}>
            <Button 
              size="lg" 
              className="luxury-shadow text-lg px-8 py-4"
              data-testid="button-hero-cta"
            >
              {ctaText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
