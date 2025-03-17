import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  imageUrl?: string;
  url?: string;
}

export function SEO({
  title = 'Prospec Jr. | Empresa Júnior de Engenharia de Minas da UNIFAL-MG',
  description = 'A Prospec Jr. é uma empresa júnior de Engenharia de Minas da UNIFAL-MG que oferece consultoria e soluções para o setor de mineração com qualidade e valores competitivos.',
  keywords = 'Prospec Jr, empresa júnior, engenharia de minas, UNIFAL-MG, consultoria, mineração, ensaios laboratoriais, ensaios de campo, segurança do trabalho',
  imageUrl = './src/assets/images/PROSPEC_logo_branco_fundo_transparente.svg',
  url = 'https://prospecjr.com.br/',
}: SEOProps) {
  useEffect(() => {
    // Atualiza o título da página
    document.title = title;

    // Atualiza as meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: imageUrl },
      { property: 'og:url', content: url },
      { property: 'twitter:title', content: title },
      { property: 'twitter:description', content: description },
      { property: 'twitter:image', content: imageUrl },
      { property: 'twitter:url', content: url },
    ];

    // Remover meta tags existentes que serão substituídas
    const existingMetaTags = document.querySelectorAll('meta[name="description"], meta[name="keywords"], meta[property^="og:"], meta[property^="twitter:"]');
    existingMetaTags.forEach(tag => tag.remove());

    // Adicionar as novas meta tags
    metaTags.forEach(tag => {
      const metaElement = document.createElement('meta');
      if (tag.name) metaElement.setAttribute('name', tag.name);
      if (tag.property) metaElement.setAttribute('property', tag.property);
      metaElement.setAttribute('content', tag.content);
      document.head.appendChild(metaElement);
    });

    // Adicionar structured data (Schema.org)
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Prospec Jr.',
      'description': description,
      'url': url,
      'logo': imageUrl,
      'email': 'juniorprospec@gmail.com',
      'telephone': '+5535990706630',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Rodovia José Aurélio Vilela, 11999, Cidade Universitária, Prédio F',
        'addressLocality': 'Poços de Caldas',
        'addressRegion': 'MG',
        'postalCode': '37715-400',
        'addressCountry': 'BR'
      },
      'sameAs': [
        'https://www.instagram.com/prospecjr/',
        'https://www.linkedin.com/company/prospec-jr/'
      ]
    };

    // Remover script de structured data existente
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Adicionar o novo script de structured data
    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Limpeza ao desmontar o componente
    return () => {
      const dynamicTags = document.querySelectorAll('meta[data-dynamic="true"]');
      dynamicTags.forEach(tag => tag.remove());
      const ldJsonScripts = document.querySelectorAll('script[type="application/ld+json"]');
      ldJsonScripts.forEach(script => script.remove());
    };
  }, [title, description, keywords, imageUrl, url]);

  return null; // Este componente não renderiza nada visualmente
} 