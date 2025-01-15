# Dev Bruno Translate

Dev Bruno Translate é uma aplicação de tradução de texto construída com **React** e **Vite**, utilizando a API gratuita do [MyMemory](https://mymemory.translated.net/) para traduzir entre diferentes idiomas.

## 📜 Funcionalidades

- Seleção de idiomas de origem e destino.
- Tradução automática com debounce de 500ms enquanto você digita.
- Alternar rapidamente os idiomas de origem e destino.
- Indicador de carregamento durante a tradução.
- Tratamento de erros para exibir mensagens amigáveis caso algo dê errado.

## 🚀 Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para criar interfaces de usuário.
- **Vite**: Ferramenta de construção para projetos rápidos e leves em JavaScript.
- **TailwindCSS**: Framework de CSS para estilização rápida.
- **MyMemory API**: API de tradução gratuita.

## 📦 Instalação e Uso

Siga os passos abaixo para executar o projeto localmente:

### Pré-requisitos

- Node.js instalado ([Download aqui](https://nodejs.org/))
- Gerenciador de pacotes `npm` ou `yarn`

### Passo a Passo

1. Clone o repositório:

   ```bash
   git clone https://github.com/obrunochaves/Dev_Bruno_Translate.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd Dev_Bruno_Translate
   ```

3. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. Abra o navegador e acesse:

   ```
   http://localhost:5173
   ```

## 📄 Estrutura do Projeto

```plaintext
Dev_Bruno_Translate/
├── public/         # Arquivos públicos
├── src/            # Código fonte do projeto
│   ├── App.jsx     # Componente principal
│   ├── index.css   # Estilos globais
│   └── main.jsx    # Ponto de entrada
├── package.json    # Configurações do projeto
├── vite.config.js  # Configuração do Vite
└── README.md       # Documentação
```

## 🛠 Melhorias Futuras

- Implementar suporte para mais idiomas.
- Adicionar testes automatizados para garantir qualidade.
- Melhorar a experiência do usuário com feedback visual mais avançado.
- Implementar controle de histórico de traduções.

## 📮 Contato

Criado por **Bruno Chaves**. Entre em contato:

- Instagram: [@brunochaves.site](https://instagram.com/brunochaves.site)
- GitHub: [obrunochaves](https://github.com/obrunochaves)

---

&copy; 2025 Bruno Chaves. Todos os direitos reservados.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
