import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";
const Hero = () => {
  return <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-6 flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-white/80" />
              <span className="text-sm text-white/80">Há +10 anos no mercado</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-6 h-6 text-white/80" />
              <span className="text-sm text-white/80">Atendimento rápido</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              <Users className="w-6 h-6 text-white/80" />
              <span className="text-sm text-white/80">Equipe especializada</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Tecnologia e
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Inovação para
            </span>
            <span className="block text-accent-foreground">o Vale do Aço</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Há mais de 10 anos oferecendo soluções completas em informática: manutenção, redes, upgrades e muito mais. 
            Transforme sua experiência digital conosco!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" onClick={() => document.getElementById('contato')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20" onClick={() => document.getElementById('servicos')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Conhecer Serviços
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">+10</div>
              <div className="text-sm text-white/80">Anos de experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">5000+</div>
              <div className="text-sm text-white/80">Clientes atendidos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">24h</div>
              <div className="text-sm text-white/80">Suporte técnico</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>;
};
export default Hero;