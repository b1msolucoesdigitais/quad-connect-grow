import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";
import { companyConfig } from "@/config/company";
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
      <div className="relative z-10 container mx-auto px-4 py-20 pt-32 md:pt-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-6 flex flex-wrap justify-center gap-4 md:space-x-8">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 md:w-6 md:h-6 text-white/80" />
              <span className="text-xs md:text-sm text-white/80">Há +10 anos no mercado</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 md:w-6 md:h-6 text-white/80" />
              <span className="text-xs md:text-sm text-white/80">Atendimento rápido</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              <Users className="w-6 h-6 text-white/80" />
              <span className="text-sm text-white/80">Equipe especializada</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            {companyConfig.slogan.split(' ').slice(0, 2).join(' ')}
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              {companyConfig.slogan.split(' ').slice(2, 4).join(' ')}
            </span>
            <span className="block text-accent-foreground">{companyConfig.slogan.split(' ').slice(4).join(' ')}</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed px-2">
            {companyConfig.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-12">
            <Button variant="hero" size="lg" className="md:text-lg" onClick={() => document.getElementById('contato')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Solicitar Orçamento
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 md:text-lg" onClick={() => document.getElementById('servicos')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Conhecer Serviços
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{companyConfig.stats.yearsExperience}</div>
              <div className="text-xs md:text-sm text-white/80">Anos de experiência</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{companyConfig.stats.clientsServed}</div>
              <div className="text-xs md:text-sm text-white/80">Clientes atendidos</div>
            </div>
            <div className="text-center">
              <div className="text-lg md:text-2xl lg:text-3xl font-bold text-white">Atendimento</div>
              <div className="text-xs md:text-sm text-white/80">Em todo {companyConfig.stats.serviceArea}</div>
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