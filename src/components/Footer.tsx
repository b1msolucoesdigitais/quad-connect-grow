import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, MapPin, Clock, ShoppingCart } from "lucide-react";
import quadLogo from "@/assets/quad-logo.png";
const Footer = () => {
  return <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <div className="flex items-center mb-4">
              <img src="https://www.quadinformatica.com.br/wp-content/uploads/2020/09/LOGO-GRAND.png" alt="Quad Informática" className="h-[85px] w-auto" />
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Há mais de 10 anos oferecendo soluções completas em tecnologia 
              para o Vale do Aço. Qualidade, confiança e atendimento personalizado.
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" onClick={() => window.open('https://api.whatsapp.com/send?phone=553138236644')}>
                <MessageCircle className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={() => window.open('tel:+553138236644')}>
                <Phone className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Formatação de Computadores</li>
              <li>Rede de Computadores</li>
              <li>Upgrade de Hardware</li>
              <li>Manutenção de Notebooks</li>
              
              <li>Suporte Empresarial</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>(31) 3823-6644</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Amaro Lanari, Cel Fanbriciano - MG</span>
              </div>
            </div>
          </div>

          {/* Horário */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Funcionamento</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <div>
                  <div>Seg-Sex: 9:00-18:00</div>
                  <div>Sáb: 9:00-13:00</div>
                  <div>Dom: Fechado</div>
                </div>
              </div>
            </div>
            <Button variant="outline" size="sm" className="mt-4 w-full" onClick={() => window.open('https://quadinformatica.mercadoshops.com.br/')}>
              <ShoppingCart className="w-4 h-4 mr-2" />
              Loja Online
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">© 2025 Quad Informática. Todos os direitos reservados. Há mais de 10 anos trazendo tecnologia para o Vale do Aço.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;