import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Monitor, 
  Network, 
  HardDrive, 
  Smartphone, 
  Shield, 
  Settings,
  Laptop,
  Server,
  MessageCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Formatação de Computadores",
      description: "Seu computador está lento? Demora para carregar? Realizamos formatação completa com instalação de sistemas e programas essenciais.",
      features: ["Limpeza completa do sistema", "Instalação de drivers", "Programas essenciais", "Backup de dados importantes"]
    },
    {
      icon: Network,
      title: "Rede de Computadores",
      description: "Configuração e manutenção de redes para empresas. Servidores, backup's, segurança e infraestrutura completa.",
      features: ["Configuração de servidores", "Backup automático", "Segurança de rede", "Suporte técnico"]
    },
    {
      icon: HardDrive,
      title: "Upgrade de Hardware",
      description: "Aumente o desempenho do seu computador ou notebook. Analisamos sua máquina e criamos o projeto de upgrade ideal.",
      features: ["Análise de compatibilidade", "Memória RAM", "SSD e HD", "Placas de vídeo"]
    },
    {
      icon: Laptop,
      title: "Manutenção de Notebooks",
      description: "Conserto especializado em notebooks e ultrabooks. Tela, teclado, bateria e componentes internos.",
      features: ["Troca de tela", "Reparo de teclado", "Substituição de bateria", "Limpeza interna"]
    },
    {
      icon: Smartphone,
      title: "Assistência em Celulares",
      description: "Reparo de smartphones e tablets. Tela quebrada, problemas de software e componentes danificados.",
      features: ["Troca de tela", "Problemas de software", "Reparo de conectores", "Backup de dados"]
    },
    {
      icon: Server,
      title: "Suporte Empresarial",
      description: "Soluções completas para empresas. Infraestrutura de TI, suporte técnico e consultoria especializada.",
      features: ["Infraestrutura de TI", "Consultoria técnica", "Suporte 24h", "Manutenção preventiva"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas em tecnologia, desde manutenção básica 
            até infraestrutura empresarial complexa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('https://api.whatsapp.com/send?phone=553138236644&text=Olá! Gostaria de saber mais sobre: ' + service.title)}
                >
                  <MessageCircle className="w-4 h-4" />
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-muted/50 rounded-2xl p-8">
          <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Garantia em Todos os Serviços
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Todos os nossos serviços possuem garantia. Trabalhamos apenas com peças originais 
            e oferecemos suporte completo pós-atendimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Fale Conosco Agora
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://quadinformatica.mercadoshops.com.br/')}
            >
              <Settings className="w-4 h-4" />
              Visitar Loja Online
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;