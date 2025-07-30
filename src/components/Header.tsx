import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import quadLogo from "@/assets/quad-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={quadLogo} 
            alt="Quad Informática" 
            className="h-[85px] w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#inicio" className="text-foreground hover:text-primary transition-colors">Início</a>
          <a href="#sobre" className="text-foreground hover:text-primary transition-colors">Sobre</a>
          <a href="#servicos" className="text-foreground hover:text-primary transition-colors">Serviços</a>
          <a href="#contato" className="text-foreground hover:text-primary transition-colors">Contato</a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button 
            variant="outline" 
            size="sm"
            className="hidden sm:flex"
            onClick={() => window.open('tel:+553138236644')}
          >
            <Phone className="w-4 h-4" />
            (31) 3823-6644
          </Button>
          <Button 
            variant="whatsapp" 
            size="sm"
            onClick={() => window.open('https://api.whatsapp.com/send?phone=553138236644&text=Olá! Gostaria de saber mais sobre os serviços da Quad Informática.')}
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;