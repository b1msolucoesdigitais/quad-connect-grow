import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, ShoppingCart } from "lucide-react";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!formData.name || !formData.phone || !formData.service) {
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
*Serviço:* ${formData.service}
*Mensagem:* ${formData.message || 'Sem observações adicionais'}
    `.trim();
    const whatsappUrl = `https://api.whatsapp.com/send?phone=553138236644&text=${encodeURIComponent(whatsappMessage)}`;
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
      service: "",
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
                Solicitar Orçamento
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
                  <Input id="email" type="email" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} placeholder="seu@email.com" />
                </div>

                <div>
                  <Label htmlFor="service">Serviço Desejado *</Label>
                  <Select value={formData.service} onValueChange={value => handleInputChange('service', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="formatacao">Formatação de Computador</SelectItem>
                      <SelectItem value="rede">Rede de Computadores</SelectItem>
                      <SelectItem value="upgrade">Upgrade de Hardware</SelectItem>
                      <SelectItem value="notebook">Manutenção de Notebook</SelectItem>
                      <SelectItem value="celular">Assistência em Celular</SelectItem>
                      <SelectItem value="empresarial">Suporte Empresarial</SelectItem>
                      <SelectItem value="outros">Outros Serviços</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Mensagem Adicional</Label>
                  <Textarea id="message" value={formData.message} onChange={e => handleInputChange('message', e.target.value)} placeholder="Descreva o problema ou serviço desejado..." rows={4} />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <MessageCircle className="w-5 h-5" />
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
                      <p className="text-muted-foreground">(31) 3823-6644</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Localização</p>
                      <p className="text-muted-foreground">Amaro Lanari, Cel. Fabriciano - MG</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Horário de Atendimento</p>
                      <p className="text-muted-foreground text-sm">
                        Seg-Sex: 8:30-18:30<br />
                        Sáb: 9:00-13:00
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ações Rápidas */}
            <div className="grid grid-cols-1 gap-4">
              <Button variant="whatsapp" size="lg" className="w-full justify-start h-auto p-4" onClick={() => window.open('https://api.whatsapp.com/send?phone=553138236644&text=Olá! Gostaria de saber mais sobre os serviços da Quad Informática.')}>
                <MessageCircle className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">Falar via WhatsApp</div>
                  <div className="text-sm opacity-90">Resposta imediata</div>
                </div>
              </Button>

              <Button variant="outline" size="lg" className="w-full justify-start h-auto p-4" onClick={() => window.open('tel:+553138236644')}>
                <Phone className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">Ligar Agora</div>
                  <div className="text-sm text-muted-foreground">(31) 3823-6644</div>
                </div>
              </Button>

              <Button variant="outline" size="lg" className="w-full justify-start h-auto p-4" onClick={() => window.open('https://quadinformatica.mercadoshops.com.br/')}>
                <ShoppingCart className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">Loja Online</div>
                  <div className="text-sm text-muted-foreground">Produtos e serviços</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;