import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Prenota() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    tipoEvento: "",
    dataPrevista: "",
    numeroOspiti: "",
    messaggio: "",
    privacy: false
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      toast({
        title: t('booking.form.error'),
        description: t('booking.form.error.privacy'),
        variant: "destructive",
      });
      return;
    }

    // TODO: Implement form submission logic
    toast({
      title: t('booking.form.success'),
      description: t('booking.form.success.message'),
    });

    // Reset form
    setFormData({
      nome: "",
      cognome: "",
      email: "",
      telefono: "",
      tipoEvento: "",
      dataPrevista: "",
      numeroOspiti: "",
      messaggio: "",
      privacy: false
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="pt-20 py-20 bg-muted min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-foreground mb-6">{t('booking.title')}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('booking.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="luxury-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">{t('booking.form.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nome">{t('booking.form.name')} *</Label>
                    <Input
                      id="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => handleInputChange("nome", e.target.value)}
                      data-testid="input-nome"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cognome">{t('booking.form.surname')} *</Label>
                    <Input
                      id="cognome"
                      type="text"
                      required
                      value={formData.cognome}
                      onChange={(e) => handleInputChange("cognome", e.target.value)}
                      data-testid="input-cognome"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">{t('booking.form.email')} *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <Label htmlFor="telefono">{t('booking.form.phone')} *</Label>
                  <Input
                    id="telefono"
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => handleInputChange("telefono", e.target.value)}
                    data-testid="input-telefono"
                  />
                </div>

                <div>
                  <Label htmlFor="tipoEvento">{t('booking.form.eventType')} *</Label>
                  <Select 
                    required 
                    value={formData.tipoEvento} 
                    onValueChange={(value) => handleInputChange("tipoEvento", value)}
                  >
                    <SelectTrigger data-testid="select-tipo-evento">
                      <SelectValue placeholder={t('booking.form.eventType.placeholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="matrimonio">{t('booking.form.eventType.wedding')}</SelectItem>
                      <SelectItem value="evento">{t('booking.form.eventType.event')}</SelectItem>
                      <SelectItem value="soggiorno">{t('booking.form.eventType.leisure')}</SelectItem>
                      <SelectItem value="business">{t('booking.form.eventType.business')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="dataPrevista">{t('booking.form.expectedDate')}</Label>
                    <Input
                      id="dataPrevista"
                      type="date"
                      value={formData.dataPrevista}
                      onChange={(e) => handleInputChange("dataPrevista", e.target.value)}
                      data-testid="input-data-prevista"
                    />
                  </div>
                  <div>
                    <Label htmlFor="numeroOspiti">{t('booking.form.guests')}</Label>
                    <Input
                      id="numeroOspiti"
                      type="number"
                      min="1"
                      max="200"
                      value={formData.numeroOspiti}
                      onChange={(e) => handleInputChange("numeroOspiti", e.target.value)}
                      data-testid="input-numero-ospiti"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="messaggio">{t('booking.form.message')}</Label>
                  <Textarea
                    id="messaggio"
                    rows={4}
                    placeholder={t('booking.form.message.placeholder')}
                    value={formData.messaggio}
                    onChange={(e) => handleInputChange("messaggio", e.target.value)}
                    data-testid="textarea-messaggio"
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="privacy"
                    required
                    checked={formData.privacy}
                    onCheckedChange={(checked) => handleInputChange("privacy", checked as boolean)}
                    data-testid="checkbox-privacy"
                  />
                  <Label htmlFor="privacy" className="text-sm text-muted-foreground">
                    {t('booking.form.privacy')} *
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full luxury-shadow"
                  data-testid="button-submit-form"
                >
                  {t('booking.form.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="luxury-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">{t('booking.contact.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <i className="fas fa-phone text-primary-foreground"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">{t('booking.contact.phone')}</h3>
                    <p className="text-muted-foreground">+39 080 XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <i className="fas fa-envelope text-primary-foreground"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">{t('booking.contact.email')}</h3>
                    <p className="text-muted-foreground">info@masserietermiteto.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-primary-foreground"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">{t('booking.contact.address')}</h3>
                    <p className="text-muted-foreground">
                      Contrada Termiteto<br />
                      70043 Monopoli (BA)<br />
                      Puglia, Italia
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card className="bg-primary text-primary-foreground luxury-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-serif font-bold mb-4">{t('booking.why.title')}</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <i className="fas fa-check mr-2"></i> 
                    <strong>{t('booking.why.masseria')}</strong>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check mr-2"></i> 
                    <strong>{t('booking.why.hectares')}</strong>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check mr-2"></i> 
                    <strong>{t('booking.why.church')}</strong>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check mr-2"></i> 
                    <strong>{t('booking.why.trulli')}</strong>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check mr-2"></i> 
                    <strong>{t('booking.why.spa')}</strong>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check mr-2"></i> 
                    <strong>{t('booking.why.cuisine')}</strong>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
