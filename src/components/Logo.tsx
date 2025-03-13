import { useTheme } from '../contexts/ThemeContext';

// Importando as imagens
import logoLight from '../assets/images/PROSPEC_logo_fundo_transparente.png';
import logoDark from '../assets/images/PROSPEC_logo_fundo_transparente_2.png';
import logoLightHorizontal from '../assets/images/PROSPEC_logo_fundo_transparente_horizontal.png';
import logoDarkHorizontal from '../assets/images/PROSPEC_logo_fundo_transparente_horizontal_2.png';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'horizontal';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'hero';
}

export function Logo({ className = '', variant = 'default', size = 'md' }: LogoProps) {
  const { theme } = useTheme();
  
  // Definindo classes de tamanho
  const sizeClasses = {
    sm: variant === 'horizontal' ? 'h-12' : 'h-16',
    md: variant === 'horizontal' ? 'h-16' : 'h-24',
    lg: variant === 'horizontal' ? 'h-24' : 'h-32',
    xl: variant === 'horizontal' ? 'h-32' : 'h-48',
    '2xl': variant === 'horizontal' ? 'h-48' : 'h-64',
    '3xl': variant === 'horizontal' ? 'h-64' : 'h-80',
    '4xl': variant === 'horizontal' ? 'h-80' : 'h-96',
    'hero': variant === 'horizontal' ? 'h-96' : 'h-[30rem]'
  };
  
  // Selecionando a logo com base no tema atual e na variante
  let logoSrc;
  if (variant === 'horizontal') {
    logoSrc = theme === 'dark' ? logoDarkHorizontal : logoLightHorizontal;
  } else {
    logoSrc = theme === 'dark' ? logoDark : logoLight;
  }
  
  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <img 
        src={logoSrc} 
        alt="Prospec Jr." 
        className="h-full w-auto" 
      />
    </div>
  );
} 