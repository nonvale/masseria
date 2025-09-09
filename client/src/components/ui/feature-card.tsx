import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  ctaText?: string;
}

export function FeatureCard({ 
  title, 
  description, 
  image, 
  link, 
  ctaText = "Scopri di Più" 
}: FeatureCardProps) {
  return (
    <Card className="overflow-hidden luxury-shadow hover:transform hover:scale-105 transition-all duration-300">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-64 object-cover"
      />
      <CardContent className="p-8">
        <h3 className="text-2xl font-serif font-bold text-foreground mb-4">{title}</h3>
        <p 
          className="text-muted-foreground mb-6 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        <div className="text-center">
          <Link href={link}>
            <Button 
              className="hover-elevate"
              data-testid={`button-feature-${link.replace('/', '')}`}
            >
              {ctaText}
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
