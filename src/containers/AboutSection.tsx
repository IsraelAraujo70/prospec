import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <div className="h-full flex flex-col justify-center bg-background text-foreground w-full">
      <div className="container mx-auto px-4 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre a Prospec Jr.</h2>
              <p className="text-lg mb-4">
                A Prospec Jr. é a Empresa Júnior do curso de Engenharia de Minas da Universidade Federal de Alfenas (UNIFAL-MG), localizada no campus de Poços de Caldas, MG.
              </p>
              <p className="text-lg mb-4">
                Desde nossa fundação em 2015, oferecemos consultoria e soluções para o setor de mineração, priorizando:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                  <span>Qualidade dos serviços</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                  <span>Valores competitivos</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                  <span>Desenvolvimento profissional e pessoal dos membros</span>
                </li>
              </ul>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-muted rounded-lg p-8"
          >
            <div className="aspect-video bg-primary/10 rounded flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">Vídeo Institucional</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 