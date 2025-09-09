import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSelector } from "@/components/ui/language-selector";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const { t } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.events'), href: "/eventi" },
    { name: t('nav.rooms'), href: "/camere" },
    { name: t('nav.services'), href: "/servizi" },
    { name: t('nav.spa'), href: "/spa" },
    { name: t('nav.church'), href: "/chiesa" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-lg">MT</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-serif font-bold text-foreground">MASSERIA</h1>
              <p className="text-sm text-muted-foreground -mt-1">TERMITETO</p>
              <p className="text-xs text-muted-foreground">LUXURY APULIAN RESORT</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-foreground hover:text-primary transition-colors font-medium ${
                  location === item.href ? "text-primary" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Language Selector, Booking Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <Link href="/prenota">
              <Button className="luxury-shadow" data-testid="button-prenota">
                {t('nav.book')}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-mobile-menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-foreground hover:text-primary transition-colors font-medium py-2 ${
                        location === item.href ? "text-primary" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
