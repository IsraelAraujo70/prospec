import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { ChevronDown } from 'lucide-react';
import { Logo } from '../components/Logo';

interface HeroSectionProps {
  onScrollDown: () => void;
}

export function HeroSection({ onScrollDown }: HeroSectionProps) {
  return (
    <div className="h-full flex flex-col justify-center relative bg-background text-foreground w-full">
      <div className="container mx-auto px-4 py-16 h-full flex items-center w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full h-full">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Prospec Jr.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                Empresa Júnior de Engenharia de Minas da UNIFAL-MG
              </p>
              <p className="text-lg mb-8">
                Oferecemos consultoria e soluções para o setor de mineração, priorizando qualidade, valores competitivos e desenvolvimento profissional.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => onScrollDown()}>
                  Entre em contato
                </Button>
                <Button size="lg" variant="outline" onClick={() => onScrollDown()}>
                  Nossos serviços
                </Button>
              </div>
            </motion.div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <Logo size="hero" className="max-w-full" />
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={onScrollDown}
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="mb-2">Rolar para baixo</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </button>
      </motion.div>
    </div>
  );
} 