import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

export function ContactSection() {
  return (
    <section id="contato" className="h-full flex flex-col justify-center bg-background text-foreground w-full">
      <div className="container mx-auto px-4 py-16 w-full">
        <header>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Entre em Contato</h2>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-lg mb-8">
                Estamos prontos para atender às suas necessidades. Entre em contato conosco para saber mais sobre nossos serviços ou para solicitar um orçamento.
              </p>

              <div className="space-y-4 mb-8">
                <article className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-3 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-medium">Endereço</h3>
                    <address className="text-muted-foreground not-italic">
                      Rodovia José Aurélio Vilela, 11999, Cidade Universitária, Prédio F, Poços de Caldas, MG. CEP 37715-400
                    </address>
                  </div>
                </article>

                <article className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mr-3 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:juniorprospec@gmail.com" className="hover:underline">juniorprospec@gmail.com</a>
                    </p>
                  </div>
                </article>

                <article className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-3 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-medium">Telefone</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+5535990706630" className="hover:underline">(35) 9907-0663</a>
                    </p>
                  </div>
                </article>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-muted rounded-lg p-8"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 