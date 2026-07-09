import { MapPin } from "lucide-react";
import { companyConfig } from "@/config/company";
const About = () => {
  return <section id="sobre" className="py-20 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Sobre a {companyConfig.name}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Uma empresa consolidada no {companyConfig.stats.serviceArea}, com mais de uma década de experiência
          em soluções tecnológicas completas.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Nossa História
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Fundada em 2010, a Quad Informática nasceu com o propósito de
            democratizar o acesso à tecnologia no Vale do Aço. Começamos como uma
            pequena assistência técnica e hoje somos referência regional em soluções
            completas de informática.
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Nossa missão é oferecer serviços de qualidade, com atendimento humanizado
            e preços justos. Acreditamos que a tecnologia deve ser acessível e funcional
            para todos, desde usuários domésticos até grandes empresas.
          </p>
          <div className="flex items-center space-x-4 text-primary">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">{companyConfig.stats.serviceArea} - {companyConfig.contact.address.state}</span>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-elegant">
          <div className="relative">
            <img
              src="/img/lojafachada.png"
              alt="Fachada da loja Quad Informatica"
              className="block w-full h-auto"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-900/95 via-blue-700/65 to-transparent px-6 py-8">
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                Quad Informática
              </h3>
              <p className="mt-1 text-sm font-medium text-blue-100 md:text-base">
                Desde 2010 no Vale do Aço
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
};
export default About;
