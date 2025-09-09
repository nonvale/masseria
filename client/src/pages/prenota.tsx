import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

export default function Prenota() {
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
        title: "Errore",
        description: "Devi accettare il trattamento dei dati personali per continuare.",
        variant: "destructive",
      });
      return;
    }

    // TODO: Implement form submission logic
    toast({
      title: "Richiesta Inviata!",
      description: "Grazie per la tua richiesta! Ti contatteremo presto per discutere le tue esigenze.",
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
          <h1 className="text-5xl font-serif font-bold text-foreground mb-6">Prenota il Tuo Soggiorno</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contattaci per prenotare la tua esperienza di <strong>lusso pugliese autentico</strong> 
            o per organizzare il tuo evento indimenticabile
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="luxury-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Richiedi Informazioni</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nome">Nome *</Label>
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
                    <Label htmlFor="cognome">Cognome *</Label>
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
                  <Label htmlFor="email">Email *</Label>
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
                  <Label htmlFor="telefono">Telefono *</Label>
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
                  <Label htmlFor="tipoEvento">Tipo di Evento/Soggiorno *</Label>
                  <Select 
                    required 
                    value={formData.tipoEvento} 
                    onValueChange={(value) => handleInputChange("tipoEvento", value)}
                  >
                    <SelectTrigger data-testid="select-tipo-evento">
                      <SelectValue placeholder="Seleziona..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="matrimonio">Matrimonio</SelectItem>
                      <SelectItem value="evento">Evento Privato</SelectItem>
                      <SelectItem value="soggiorno">Soggiorno Leisure</SelectItem>
                      <SelectItem value="business">Meeting/Business</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="dataPrevista">Data Prevista</Label>
                    <Input
                      id="dataPrevista"
                      type="date"
                      value={formData.dataPrevista}
                      onChange={(e) => handleInputChange("dataPrevista", e.target.value)}
                      data-testid="input-data-prevista"
                    />
                  </div>
                  <div>
                    <Label htmlFor="numeroOspiti">Numero Ospiti</Label>
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
                  <Label htmlFor="messaggio">Messaggio</Label>
                  <Textarea
                    id="messaggio"
                    rows={4}
                    placeholder="Descrivici le tue esigenze..."
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
                    Accetto il trattamento dei dati personali secondo la Privacy Policy *
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full luxury-shadow"
                  data-testid="button-submit-form"
                >
                  Invia Richiesta
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="luxury-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Contatti Diretti</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <i className="fas fa-phone text-primary-foreground"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">Telefono</h3>
                    <p className="text-muted-foreground">+39 080 XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <i className="fas fa-envelope text-primary-foreground"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">info@masserietermiteto.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-primary-foreground"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">Indirizzo</h3>
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
                <h3 className="text-xl font-serif font-bold mb-4">Perché Scegliere Masseria Termiteto</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <i className="fas fa-check mr-2"></i> 
                    <strong>Masseria autentica</strong> del XVI secolo
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check mr-2"></i> 
                    <strong>50 ettari</strong> di proprietà esclusiva
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check mr-2"></i> 
                    <strong>Chiesa consacrata</strong> per matrimoni
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check mr-2"></i> 
                    <strong>Trulli autentici</strong> ristrutturati
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check mr-2"></i> 
                    <strong>Spa e piscine</strong> riscaldate
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check mr-2"></i> 
                    <strong>Cucina gourmet</strong> professionale
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
