import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { BarChart, FileText, Microscope, Mountain } from 'lucide-react';

interface ServicesSectionProps {
  onViewAllServices: () => void;
}

export function ServicesSection({ onViewAllServices }: ServicesSectionProps) {
  // Dados dos serviços
  const services = [
    {
      title: 'Análise de Viabilidade',
      description: 'Avaliação técnica e econômica de projetos de mineração.',
      icon: <BarChart className="h-10 w-10" />,
    },
    {
      title: 'Licenciamento Ambiental',
      description: 'Suporte para obtenção de licenças ambientais para operações de mineração.',
      icon: <FileText className="h-10 w-10" />,
    },
    {
      title: 'Análises Laboratoriais',
      description: 'Análises físico-químicas de amostras minerais.',
      icon: <Microscope className="h-10 w-10" />,
    },
    {
      title: 'Mapeamento Geológico',
      description: 'Mapeamento e caracterização de áreas com potencial mineral.',
      icon: <Mountain className="h-10 w-10" />,
    },
  ];

  return (
    <div className="h-full flex flex-col justify-center bg-muted text-muted-foreground w-full">
      <div className="container mx-auto px-4 py-16 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Nossos Serviços</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços para atender às necessidades do setor de mineração.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button onClick={onViewAllServices}>
            Ver todos os serviços
          </Button>
        </div>
      </div>
    </div>
  );
} 