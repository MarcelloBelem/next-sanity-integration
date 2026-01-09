# 🚀 Next.js + Sanity (Embedded Studio)

Este projeto foi desenvolvido com **objetivos educacionais**, com foco em aprofundar o domínio da integração entre **Next.js** e o **Sanity CMS**, utilizando o conceito de **Sanity Studio embarcado (Embedded Studio)**.

Ao invés de manter o CMS em uma aplicação separada, o **Sanity Studio é executado dentro da própria aplicação Next.js**, compartilhando o mesmo domínio do front-end. Essa abordagem simplifica o deploy, melhora a experiência de desenvolvimento e aproxima o fluxo de conteúdo da aplicação final.

---

## 🎯 Objetivos do Projeto

- Compreender a arquitetura de um **Headless CMS** moderno.
- Integrar o **Sanity Studio** diretamente no Next.js.
- Utilizar boas práticas de configuração, organização de pastas e variáveis de ambiente.
- Consumir conteúdo do Sanity de forma segura e performática.

---

## 🛠️ Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)** — Framework React para aplicações web modernas e escaláveis.
- **[Tailwind CSS](https://tailwindcss.com/)** — Framework utilitário para estilização rápida e consistente.
- **[Sanity.io](https://www.sanity.io/)** — Headless CMS flexível e altamente customizável.

---

## 📋 Pré-requisitos

Antes de iniciar o projeto, certifique-se de ter:

- **Node.js** instalado (versão LTS recomendada)
- Uma conta ativa no **Sanity.io**

---

## 🚀 Instalação e Configuração

### 1️⃣ Clonar o repositório

```bash
git clone <link-do-seu-repositorio>
cd nome-do-projeto
```

### 2️⃣ Instalar as dependências

```bash
npm install
# ou
yarn install
```

---

## ⚙️ Configuração das Variáveis de Ambiente

Para que a aplicação consiga se comunicar corretamente com o Sanity, é necessário configurar as variáveis de ambiente.

### Passo a passo:

1. Crie um projeto no painel do Sanity:
   - [https://www.sanity.io/manage](https://www.sanity.io/manage)

2. No projeto, localize o **Project ID** e o **Dataset**.

3. Renomeie o arquivo:

```bash
example.env.local → .env.local
```

4. Preencha o arquivo `.env.local`:

```bash
# ID do projeto no Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID="seu_project_id_aqui"

# Nome do dataset (geralmente "production")
NEXT_PUBLIC_SANITY_DATASET="production"
```

> ⚠️ **Importante:** Nunca versionar o arquivo `.env.local`.

---

## ▶️ Executando o Projeto

Com tudo configurado, inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse no navegador:

```
http://localhost:3000
```

---

## 🎛️ Acessando o Sanity Studio

O **Sanity Studio** está integrado à aplicação Next.js.

### Para acessar:

- Com o projeto rodando, abra:

```
http://localhost:3000/studio
```

### Primeiro acesso (Erro de CORS)

No primeiro acesso local, o Sanity pode bloquear a conexão por questões de segurança.

Caso isso aconteça:

1. Um aviso será exibido na tela.
2. Clique em **"Add Development Host"** ou **"Add CORS Origin"**.
3. Autorize o domínio `http://localhost:3000`.
4. Faça login com sua conta do Sanity.

Após isso, o Studio estará totalmente funcional.

---

## 📌 Observações Finais

Este projeto serve como base para estudos e pode ser facilmente expandido para:

- Blogs
- Portfólios
- Sites institucionais
- Dashboards administrativos

---

### 👨‍💻 Autor

Desenvolvido por **Dev.Belém**
Estudos em **Next.js + Sanity CMS**

🚀
