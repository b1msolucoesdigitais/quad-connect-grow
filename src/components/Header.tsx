import { Button } from "@/components/ui/button";
import { MessageSquare, Phone, Menu } from "lucide-react";
import { companyConfig } from "@/config/company";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={companyConfig.logo.url} 
            alt={companyConfig.logo.alt} 
            className="h-[60px] md:h-[85px] w-auto"
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
            className="hidden sm:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open(companyConfig.urls.phone)}
          >
            <Phone className="w-4 h-4" />
            {companyConfig.contact.phone}
          </Button>
          <Button 
            variant="whatsapp" 
            size="sm"
            onClick={() => window.open(`${companyConfig.urls.whatsapp}&text=Olá! Gostaria de saber mais sobre os serviços da ${companyConfig.name}.`)}
          >
            <MessageSquare className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </Button>
          
          {/* Menu Mobile */}
          <Button 
            variant="outline" 
            size="sm"
            className="md:hidden border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#inicio" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </a>
            <a 
              href="#sobre" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a 
              href="#servicos" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#contato" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;