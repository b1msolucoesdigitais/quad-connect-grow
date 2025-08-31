import { Button } from "@/components/ui/button";
import { MessageSquare, Phone, MapPin, Clock, Instagram } from "lucide-react";
import { companyConfig } from "@/config/company";

const Footer = () => {
  return <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <div className="flex items-center mb-4">
              <img src={companyConfig.logo.url} alt={companyConfig.logo.alt} className="h-[85px] w-auto" />
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              {companyConfig.description}
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" onClick={() => window.open(companyConfig.urls.whatsapp)}>
                <MessageSquare className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={() => window.open(companyConfig.urls.phone)}>
                <Phone className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={() => window.open(companyConfig.urls.instagram)}>
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {companyConfig.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <a href={companyConfig.urls.phone} className="hover:text-primary transition-colors cursor-pointer">
                  {companyConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MessageSquare className="w-4 h-4" />
                <a href={companyConfig.urls.whatsapp} className="hover:text-primary transition-colors cursor-pointer">
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Instagram className="w-4 h-4" />
                <a href={companyConfig.urls.instagram} className="hover:text-primary transition-colors cursor-pointer">
                  {companyConfig.contact.instagram}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{companyConfig.contact.address.street} - {companyConfig.contact.address.neighborhood}<br /> {companyConfig.contact.address.city} - {companyConfig.contact.address.state}</span>
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
                  <div>Seg-Sex: {companyConfig.businessHours.weekdays}</div>
                  <div>Sáb: {companyConfig.businessHours.saturday}</div>
                  <div>Dom: {companyConfig.businessHours.sunday}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">{companyConfig.copyright}</p>
        </div>
      </div>
    </footer>;
};
export default Footer;