import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Logo } from './Logo';

interface NavigationProps {
  onNavigate: (index: number) => void;
}

export function Navigation({ onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const { theme, toggleTheme } = useTheme();

  // Atualiza a seção ativa quando o componente é montado
  useEffect(() => {
    // Função para atualizar a seção ativa com base na URL
    const updateActiveSection = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionIndex = ['#home', '#servicos', '#sobre', '#equipe', '#contato'].indexOf(hash);
        if (sectionIndex !== -1) {
          setActiveSection(sectionIndex);
        }
      }
    };

    // Atualiza a seção ativa inicialmente
    updateActiveSection();

    // Adiciona um listener para o evento hashchange
    window.addEventListener('hashchange', updateActiveSection);

    return () => {
      // Remove o listener quando o componente é desmontado
      window.removeEventListener('hashchange', updateActiveSection);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigate = (index: number) => {
    onNavigate(index);
    setActiveSection(index);
    setIsOpen(false);
  };

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '100%' }
  };

  const navItems = [
    { name: 'Início', anchor: 'home' },
    { name: 'Serviços', anchor: 'servicos' },
    { name: 'Sobre', anchor: 'sobre' },
    { name: 'Equipe', anchor: 'equipe' },
    { name: 'Contato', anchor: 'contato' }
  ];

  return (
    <>
      {/* Botão do menu mobile e toggle de tema */}
      <div className="fixed top-6 right-6 z-50 flex items-center space-x-3">
        <button
          onClick={toggleTheme}
          className="p-2 bg-background/80 backdrop-blur-sm rounded-full shadow-md"
          aria-label={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
        >
          {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
        </button>
        <button
          onClick={toggleMenu}
          className="p-2 bg-background/80 backdrop-blur-sm rounded-full shadow-md"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menu mobile */}
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center"
      >
        <div className="mb-12">
          <Logo size="xl" />
        </div>
        <nav className="flex flex-col items-center space-y-6">
          {navItems.map((item, index) => (
            <button
              key={item.anchor}
              onClick={() => handleNavigate(index)}
              className={`text-2xl font-medium transition-colors ${
                activeSection === index ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </motion.div>

      {/* Logo no canto superior esquerdo */}
      <div className="fixed top-6 left-6 z-30">
        <Logo size="lg" />
      </div>
    </>
  );
} 