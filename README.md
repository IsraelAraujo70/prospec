# Prospec Jr. - Landing Page

Landing page moderna, responsiva e interativa para a Prospec Jr., empresa júnior do curso de Engenharia de Minas da UNIFAL-MG.

## Tecnologias Utilizadas

- **Frontend**: React.js + TypeScript
- **Estilização**: TailwindCSS
- **Animações**: Framer Motion
- **Scroll Full Page**: React Full Page Scroll
- **Ícones**: Lucide React Icons
- **Gerenciamento de Rotas**: React Router DOM
- **Tema**: Light/Dark Mode com variáveis para cores

## Estrutura do Projeto

O projeto segue a arquitetura Component > Container > Page, garantindo separação de responsabilidades e reutilização de componentes.

```
src/
├── assets/        # Imagens e outros recursos estáticos
├── components/    # Componentes reutilizáveis
├── containers/    # Containers que agrupam componentes
├── contexts/      # Contextos React (ex: ThemeContext)
├── hooks/         # Hooks personalizados
├── pages/         # Páginas da aplicação
└── utils/         # Funções utilitárias
```

## Funcionalidades

- Design responsivo para todos os dispositivos
- Tema claro/escuro
- Animações suaves ao rolar a página
- Navegação intuitiva
- Formulário de contato

## Como Executar

1. Clone o repositório
2. Instale as dependências:
   ```
   npm install
   ```
3. Execute o projeto em modo de desenvolvimento:
   ```
   npm run dev
   ```
4. Acesse `http://localhost:5173` no seu navegador

## Build para Produção

Para gerar a versão de produção:

```
npm run build
```

Os arquivos serão gerados na pasta `dist`.

## Sobre a Prospec Jr.

A Prospec Jr. é a Empresa Júnior do curso de Engenharia de Minas da Universidade Federal de Alfenas (UNIFAL-MG), localizada no campus de Poços de Caldas, MG. Desde sua fundação em 2015, oferece consultoria e soluções para o setor de mineração, priorizando qualidade dos serviços, valores competitivos e desenvolvimento profissional e pessoal dos membros.
