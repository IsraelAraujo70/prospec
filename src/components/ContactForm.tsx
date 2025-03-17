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
    console.log('handleChange', name, value);
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Formulário enviado');

    try {
      // Simulando um processamento
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Definir estado de sucesso antes de tentar abrir o email
      setSubmitStatus('success');
      setIsSubmitting(false);
      
      // Limpando o formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
    } catch (error) {
      alert("Ocorreu um erro: " + error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  // Função para abrir o email
  const abrirEmail = () => {
    const emailDestino = 'juniorprospec@gmail.com';
    const assunto = encodeURIComponent(`Contato via Site - ${formData.subject || 'Contato'}`);
    const corpo = encodeURIComponent(
      `Nome: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Telefone: ${formData.phone}\n` +
      `Assunto: ${formData.subject}\n\n` +
      `Mensagem:\n${formData.message}\n\n` +
      `---\nEnviado através do formulário de contato do site Prospec Jr.`
    );
    
    window.location.href = `mailto:${emailDestino}?subject=${assunto}&body=${corpo}`;
  };

  return (
    <div className="bg-background rounded-lg shadow-md p-6 border border-muted">
      {submitStatus === 'success' ? (
        <div className="text-center py-8 text-foreground">
          <h3 className="text-xl font-bold text-primary mb-2">Mensagem preparada!</h3>
          <p className="text-muted-foreground mb-6">
            Clique no botão abaixo para abrir seu cliente de email:
          </p>
          <div className="flex flex-col space-y-3">
            <Button onClick={abrirEmail}>
              Abrir Cliente de Email
            </Button>
            
            <Button variant="outline" onClick={() => setSubmitStatus('idle')}>
              Voltar ao Formulário
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1 text-foreground">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-foreground">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1 text-foreground">
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1 text-foreground">
              Assunto
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            >
              <option value="" className="bg-background text-foreground">Selecione um assunto</option>
              <option value="consultoria" className="bg-background text-foreground">Consultoria</option>
              <option value="ensaios-laboratoriais" className="bg-background text-foreground">Ensaios Laboratoriais</option>
              <option value="ensaios-campo" className="bg-background text-foreground">Ensaios de Campo</option>
              <option value="seguranca-trabalho" className="bg-background text-foreground">Segurança do Trabalho</option>
              <option value="outro" className="bg-background text-foreground">Outro</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1 text-foreground">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-3 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            />
          </div>

          <div className="pt-2">
            <Button type="submit" disabled={isSubmitting} fullWidth>
              {isSubmitting ? 'Enviando...' : 'Continuar para Envio'}
            </Button>
          </div>

          {submitStatus === 'error' && (
            <p className="text-red-500 text-sm mt-2">
              Ocorreu um erro ao preparar sua mensagem. Por favor, tente novamente.
            </p>
          )}
        </form>
      )}
    </div>
  );
} 