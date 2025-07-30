import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Heart, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre a Quad Informática
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma empresa consolidada no Vale do Aço, com mais de uma década de experiência 
            em soluções tecnológicas completas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Nossa História
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Fundada há mais de 10 anos, a Quad Informática nasceu com o propósito de 
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
              <span className="font-medium">Vale do Aço - Minas Gerais</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center p-6 hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-0">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Experiência</h4>
                <p className="text-muted-foreground text-sm">
                  Mais de 10 anos no mercado de tecnologia
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-0">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Agilidade</h4>
                <p className="text-muted-foreground text-sm">
                  Atendimento rápido e eficiente
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-0">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Compromisso</h4>
                <p className="text-muted-foreground text-sm">
                  Dedicação total aos nossos clientes
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">Q</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Qualidade</h4>
                <p className="text-muted-foreground text-sm">
                  Serviços com garantia e qualidade
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Horário de Funcionamento */}
        <Card className="max-w-md mx-auto">
          <CardContent className="p-6 text-center">
            <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
            <h4 className="font-bold text-lg mb-4">Horário de Funcionamento</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Segunda a Sexta:</span>
                <span className="font-medium">8:30 às 18:30</span>
              </div>
              <div className="flex justify-between">
                <span>Sábado:</span>
                <span className="font-medium">9:00 às 13:00</span>
              </div>
              <div className="flex justify-between">
                <span>Domingo:</span>
                <span className="font-medium">Fechado</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;