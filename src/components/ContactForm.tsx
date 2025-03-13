import { useState, FormEvent } from 'react';
import { Button } from './Button';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulando envio do formulário
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Limpar formulário após envio bem-sucedido
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background rounded-lg shadow-md p-6 border border-muted">
      {submitStatus === 'success' ? (
        <div className="text-center py-8">
          <h3 className="text-xl font-bold text-primary mb-2">Mensagem Enviada!</h3>
          <p className="text-muted-foreground mb-6">
            Obrigado por entrar em contato. Retornaremos em breve.
          </p>
          <Button onClick={() => setSubmitStatus('idle')}>Enviar nova mensagem</Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1">
              Assunto
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Selecione um assunto</option>
              <option value="consultoria">Consultoria</option>
              <option value="ensaios-laboratoriais">Ensaios Laboratoriais</option>
              <option value="ensaios-campo">Ensaios de Campo</option>
              <option value="seguranca-trabalho">Segurança do Trabalho</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-3 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="pt-2">
            <Button type="submit" disabled={isSubmitting} fullWidth>
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </Button>
          </div>

          {submitStatus === 'error' && (
            <p className="text-red-500 text-sm mt-2">
              Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.
            </p>
          )}
        </form>
      )}
    </div>
  );
} 