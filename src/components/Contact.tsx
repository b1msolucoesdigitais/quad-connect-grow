import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { companyConfig } from "@/config/company";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [] as string[],
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!formData.name || !formData.phone || formData.services.length === 0) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Criar mensagem para WhatsApp
    const whatsappMessage = `
Olá! Gostaria de solicitar um orçamento:

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*Email:* ${formData.email || 'Não informado'}
*Serviços:* ${formData.services.join(', ')}
*Mensagem:* ${formData.message || 'Sem observações adicionais'}
    `.trim();
    const whatsappUrl = `${companyConfig.urls.whatsapp}&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para o WhatsApp com sua mensagem pronta!"
    });

    // Limpar formulário
    setFormData({
      name: "",
      email: "",
      phone: "",
      services: [],
      message: ""
    });
  };
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solicite um orçamento sem compromisso. Nossa equipe está pronta para atender você!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Send className="w-5 h-5 mr-2 text-primary" />
                Entrar em Contato
              </CardTitle>
              <CardDescription>
                Preencha o formulário e receba uma resposta rápida via WhatsApp
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input id="name" value={formData.name} onChange={e => handleInputChange('name', e.target.value)} placeholder="Seu nome completo" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone *</Label>
                    <Input id="phone" value={formData.phone} onChange={e => handleInputChange('phone', e.target.value)} placeholder="(31) 99999-9999" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} placeholder="seu@email.com.br" />
                </div>

                <div>
                  <Label className="text-base font-medium mb-3 block">Serviços Desejados *</Label>
                  <div className="grid grid-cols-1 gap-3">
                    {companyConfig.services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox
                          id={`service-${index}`}
                          checked={formData.services.includes(service)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setFormData(prev => ({
                                ...prev,
                                services: [...prev.services, service]
                              }));
                            } else {
                              setFormData(prev => ({
                                ...prev,
                                services: prev.services.filter(s => s !== service)
                              }));
                            }
                          }}
                        />
                        <Label htmlFor={`service-${index}`} className="text-sm font-normal cursor-pointer">
                          {service}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>                

                <div>
                  <Label htmlFor="message">Mensagem Adicional</Label>
                  <Textarea id="message" value={formData.message} onChange={e => handleInputChange('message', e.target.value)} placeholder="Descreva o problema ou serviço desejado..." rows={5} />
                </div>



                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <MessageSquare className="w-5 h-5" />
                  Enviar via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informações de Contato */}
          <div className="space-y-6">
            {/* Contato Direto */}
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-4">Contato Direto</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Telefone / WhatsApp</p>
                      <p className="text-muted-foreground">{companyConfig.contact.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Localização</p>
                      <p className="text-muted-foreground">{companyConfig.contact.address.street} - {companyConfig.contact.address.neighborhood}, {companyConfig.contact.address.city} - {companyConfig.contact.address.state}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Horário de Atendimento</p>
                      <p className="text-muted-foreground text-sm">
                        Seg-Sex: {companyConfig.businessHours.weekdays}<br />
                        Sáb: {companyConfig.businessHours.saturday}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mapa */}
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-4">Nossa Localização</h3>
                <div className="space-y-4">
                  <div className="aspect-video w-full rounded-lg overflow-hidden">
                    <iframe
                      src={companyConfig.map.embedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização da Quad Informática"
                      className="rounded-lg"
                    />
                  </div>

                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>;
};
export default Contact;