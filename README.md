# 🍎 Frutaria JB

Uma aplicação web simples desenvolvida em **React** para cadastro e exibição de frutas, criada com o objetivo de exercitar conceitos fundamentais como **gerenciamento de estado**, **formulários** e **validação**.

---

## 📋 Sobre o Projeto

O **Frutaria** é um projeto de estudos que simula uma loja virtual de frutas, permitindo visualizar, cadastrar e gerenciar informações de diferentes frutas. A aplicação foi desenvolvida para praticar conceitos essenciais do React moderno.

### Conceitos Exercitados

- **Gerenciamento de Estado** com `useState`
- **Formulários Controlados** em React
- **Validação de Dados** no frontend
- **Roteamento** com React Router DOM
- **Componentização** e reutilização de código
- **CSS Modules** para estilização modular
- **Integração com API** usando JSON Server

---

## 🚀 Tecnologias Utilizadas

| Tecnologia                                             | Versão     | Descrição                                |
| ------------------------------------------------------ | ---------- | ---------------------------------------- |
| [React](https://react.dev/)                            | 19.2.0     | Biblioteca para construção de interfaces |
| [TypeScript](https://www.typescriptlang.org/)          | 5.9.3      | Superset tipado de JavaScript            |
| [Vite](https://vitejs.dev/)                            | 7.2.4      | Build tool moderna e rápida              |
| [React Router DOM](https://reactrouter.com/)           | 7.13.0     | Roteamento para aplicações React         |
| [Axios](https://axios-http.com/)                       | 1.13.4     | Cliente HTTP para requisições            |
| [JSON Server](https://github.com/typicode/json-server) | 1.0.0-beta | API REST fake para desenvolvimento       |

---

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── NavBar.tsx       # Barra de navegação
│   ├── Footer.tsx       # Rodapé da aplicação
│   └── FruitsCard.tsx   # Card de exibição de frutas
├── pages/               # Páginas da aplicação
│   ├── Home.tsx         # Página inicial com listagem
│   ├── About.tsx        # Página sobre
│   └── RegisterFruits.tsx # Formulário de cadastro
├── data/
│   └── db.json          # Banco de dados JSON
├── App.tsx              # Componente principal
└── main.tsx             # Ponto de entrada
```

---

## ⚙️ Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/joaobatistamedeiroscf/frutaria_jb.git
   cd frutaria
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Inicie o servidor de API (JSON Server)**

   ```bash
   npm run server
   ```

   > O servidor será iniciado em `http://localhost:3000`

4. **Em outro terminal, inicie a aplicação**
   ```bash
   npm run dev
   ```
   > A aplicação estará disponível em `http://localhost:5173`

---

## 📜 Scripts Disponíveis

| Comando           | Descrição                               |
| ----------------- | --------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento    |
| `npm run build`   | Gera a build de produção                |
| `npm run preview` | Visualiza a build de produção           |
| `npm run lint`    | Executa o ESLint para análise de código |
| `npm run server`  | Inicia o JSON Server na porta 3000      |

---

## ✨ Funcionalidades

- **Listagem de Frutas**: Visualize todas as frutas cadastradas com imagem, nome, preço e descrição
- **Cadastro de Frutas**: Adicione novas frutas através de um formulário com validação
- **Validação de Formulário**: Campos obrigatórios e regras de negócio validadas
- **Verificação de Duplicidade**: Impede cadastro de frutas com nomes repetidos
- **Navegação SPA**: Experiência fluida sem recarregamento de página

---

## 🎯 Objetivos de Aprendizado

Este projeto foi desenvolvido para consolidar conhecimentos em:

1. **Estados em React**: Uso de hooks como `useState` para controlar dados do formulário e mensagens de erro
2. **Formulários Controlados**: Input fields vinculados ao estado do componente
3. **Validação Frontend**: Verificação de campos obrigatórios e regras de negócio antes do envio
4. **Requisições HTTP**: Integração com API REST usando fetch/axios
5. **Componentização**: Divisão da interface em componentes reutilizáveis e modulares

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.

---

<p align="center">
  Desenvolvido com 💙 para estudos de React
</p>
