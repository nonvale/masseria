import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold">MT</span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold">MASSERIA TERMITETO</h3>
                <p className="text-sm text-background/70">LUXURY APULIAN RESORT</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed mb-4">
              <strong>Luxury Apulian Resort</strong> autentico del XVI secolo. 
              Esperienza di lusso pugliese tra trulli storici, 50 ettari di bellezza mediterranea e tradizione millenaria.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6">Contatti</h3>
            <div className="space-y-3 text-background/80">
              <p><i className="fas fa-map-marker-alt mr-3 text-primary"></i> Contrada Termiteto, 70043 Monopoli (BA)</p>
              <p><i className="fas fa-phone mr-3 text-primary"></i> +39 080 XXX XXXX</p>
              <p><i className="fas fa-envelope mr-3 text-primary"></i> info@masserietermiteto.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6">Link Utili</h3>
            <div className="space-y-2">
              <Link href="/eventi" className="block text-background/80 hover:text-primary transition-colors">
                Eventi e Matrimoni
              </Link>
              <Link href="/camere" className="block text-background/80 hover:text-primary transition-colors">
                Camere e Suite
              </Link>
              <Link href="/spa" className="block text-background/80 hover:text-primary transition-colors">
                Spa & Wellness
              </Link>
              <Link href="/chiesa" className="block text-background/80 hover:text-primary transition-colors">
                Chiesa Consacrata
              </Link>
              <Link href="/prenota" className="block text-background/80 hover:text-primary transition-colors">
                Prenota Ora
              </Link>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mb-12">
          <h3 className="text-lg font-serif font-bold mb-4">La Nostra Posizione</h3>
          <div className="rounded-xl overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.1234567890!2d17.3123456!3d40.9567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMonopoli%2C%20BA%2C%20Italy!5e0!3m2!1sen!2sit!4v1234567890123!5m2!1sen!2sit"
              width="100%" 
              height="300" 
              style={{ border: 0 }}
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Masseria Termiteto Location"
            ></iframe>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm mb-4 md:mb-0">
              © 2024 <strong>Masseria Termiteto</strong>. Tutti i diritti riservati.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-background/60 hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors text-sm">
                Cookie Policy
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors text-sm">
                Termini e Condizioni
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
