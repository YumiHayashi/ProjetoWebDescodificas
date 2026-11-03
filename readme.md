# 🎬 Seriescope

### 🍿 Explore o universo da cultura pop em um só lugar!

O **Seriescope** é uma plataforma web desenvolvida para explorar o universo da cultura pop, reunindo informações sobre filmes, séries e músicas em uma interface moderna, intuitiva e responsiva.

O projeto combina desenvolvimento **Frontend e Backend**, utilizando tecnologias como JavaScript, Node.js, Express e MySQL para proporcionar uma experiência de navegação dinâmica, organizada e interativa.

---

## ✨ Sobre o Projeto

O Seriescope nasceu com a proposta de criar um espaço digital dedicado aos apaixonados por entretenimento e cultura pop.

A plataforma permite consultar e gerenciar conteúdos relacionados a filmes e séries, apresentando informações como sinopses, anos de lançamento e imagens.

Além da funcionalidade, o projeto busca oferecer uma experiência visual diferenciada, inspirada na estética vibrante do universo cinematográfico e televisivo.

### 🎯 Objetivos

- Desenvolver uma plataforma para consulta e gerenciamento de filmes e séries.
- Implementar uma API RESTful para comunicação com o banco de dados.
- Integrar o frontend ao backend por meio de requisições HTTP.
- Aplicar conceitos de desenvolvimento web Full Stack.
- Explorar tecnologias de banco de dados relacionais.
- Desenvolver uma interface moderna, intuitiva e responsiva.

---

## 👥 Público-Alvo

O projeto é direcionado principalmente a:

- Fãs de filmes, séries e cultura pop.
- Jovens e adultos interessados em entretenimento.
- Usuários que desejam explorar conteúdos audiovisuais.
- Pessoas que buscam uma plataforma simples e intuitiva para consultar informações sobre produções populares.

---

## 🚀 Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| 🎬 Filmes | Consulta e exibição de filmes disponíveis. |
| 📺 Séries | Exploração e gerenciamento de séries. |
| 🎵 Músicas | Proposta de consulta de conteúdos musicais. |
| 🔎 Pesquisa | Busca e exploração de conteúdos. |
| 📝 Detalhes | Exibição de sinopse, ano e imagens. |
| 🌐 Compartilhamento | Acesso ao repositório do projeto pelo GitHub. |
| 📱 Responsividade | Interface adaptável a diferentes dispositivos. |

---

## 🎨 Interface do Usuário

A interface do Seriescope foi desenvolvida com uma identidade visual inspirada na cultura pop, priorizando uma navegação intuitiva e uma apresentação visual atrativa.

### Características da interface:

- Design moderno e responsivo.
- Paleta de cores vibrantes.
- Cards para apresentação dos conteúdos.
- Menu de navegação simplificado.
- Páginas individuais para visualização de detalhes.
- Botões de interação e navegação.

---

## 🛠️ Tecnologias Utilizadas

O projeto utiliza diferentes tecnologias para estruturar sua arquitetura e implementar suas funcionalidades.

### Frontend

- **HTML5:** Estruturação das páginas.
- **CSS3:** Estilização e responsividade.
- **JavaScript:** Implementação da lógica e interatividade da interface.

### Backend

- **Node.js:** Ambiente de execução JavaScript.
- **Express.js:** Framework utilizado para criação da API RESTful.
- **CORS:** Gerenciamento de requisições entre diferentes origens.
- **dotenv:** Gerenciamento de variáveis de ambiente.

### Banco de Dados

- **MySQL:** Sistema de gerenciamento de banco de dados relacional.
- **MySQL Workbench:** Ferramenta utilizada para administração e gerenciamento do banco de dados.

---

## 🗄️ Banco de Dados

O banco de dados utilizado no projeto é o **MySQL**, responsável pelo armazenamento e gerenciamento das informações relacionadas aos conteúdos da plataforma.

**Nome do banco de dados:**

`cultura_pop`

A estrutura foi planejada para armazenar informações sobre filmes, séries e músicas, permitindo a integração com o backend por meio de consultas SQL.

---

## 🔌 API RESTful

O backend utiliza Node.js e Express para disponibilizar endpoints responsáveis pela comunicação entre a aplicação e o banco de dados.

### Endpoints implementados

| Método HTTP | Endpoint | Descrição |
|---|---|---|
| GET | `/filmes` | Retorna os filmes cadastrados. |
| POST | `/series` | Adiciona uma nova série ao banco de dados. |

### Métodos HTTP utilizados

- **GET:** Recuperação de informações.
- **POST:** Criação de novos registros.

---

## 💻 Como Executar o Projeto Localmente

Para executar o Seriescope em sua máquina, siga as instruções abaixo.

### 1. Pré-requisitos

Antes de começar, certifique-se de possuir:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- [MySQL Workbench](https://www.mysql.com/products/workbench/)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) (recomendado).

### 2. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd cultura-pop
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure o banco de dados

- Abra o MySQL Workbench.
- Crie o banco de dados `cultura_pop`.
- Execute os scripts SQL disponibilizados no projeto.
- Configure as credenciais de acesso ao banco de dados nas variáveis de ambiente.

Exemplo de arquivo `.env`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=cultura_pop
PORT=3000
```

**Importante:** Não compartilhe seu arquivo `.env` nem envie credenciais privadas para o GitHub. Segurança também faz parte do desenvolvimento.

### 5. Inicie o servidor

Execute o comando:

```bash
node server.js
```

O backend estará disponível na porta configurada no arquivo `.env`.

### 6. Teste a API

Utilize ferramentas como:

- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)

Elas permitem testar os endpoints e verificar as respostas da API.

### 7. Execute o Frontend

Abra o arquivo `index.html` no navegador ou utilize a extensão Live Server no Visual Studio Code.

**Observação:** A abertura direta do HTML permite visualizar a interface, mas as funcionalidades que dependem do backend exigem que o servidor e o banco de dados estejam configurados e em execução.

---

## ☁️ Hospedagem e Deploy

O projeto foi planejado considerando alternativas gratuitas de hospedagem.

Uma possibilidade é utilizar:

- **[Vercel](https://vercel.com/):** Hospedagem do frontend.
- **Serviço de hospedagem compatível com Node.js:** Execução do backend.
- **Serviço de banco de dados MySQL:** Armazenamento das informações.

A implantação do backend e do banco de dados exige configuração própria, pois a hospedagem do frontend na Vercel não disponibiliza automaticamente um servidor MySQL.

---

## 👩‍💻 Autoria
Entrega do Projeto Final - Seriescope

Projeto Escolhido: Cultura Pop (Filmes eSéries)

Descrição

Este projeto tem como objetivo explorar os temas de cultura pop e tecnologia, oferecendo aos usuários uma plataforma para pesquisar, adicionar e interagir com filmes e séries. O backend foi desenvolvido utilizando Node.js, Express e MySQL, enquanto o frontend traz um design moderno e responsivo, com uma estética vibrante e inspirada na cultura pop.

Objetivos:

Criar uma plataforma para consulta e gerenciamento de filmes e séries.

Desenvolver uma API RESTful para interação com o banco de dados.

Hospedar o frontend e backend de forma gratuita em plataformas como Vercel.



---

1. Público-Alvo

Este projeto foi desenvolvido para:

Jovens adultos e adultos entre 18 e 35 anos.

Fãs de cultura pop (filmes e séries).

Usuários que buscam uma interface interativa e moderna para explorar conteúdo relacionado a entretenimento.


A plataforma oferece uma maneira simples de buscar e explorar conteúdos de filmes, séries e músicas populares.

Benefícios:

Facilidade de busca de filmes e séries.

Detalhes sobre cada item, incluindo sinopse, ano e imagens.

Integração social com opções de compartilhamento em redes sociais.

Design responsivo que se adapta a diferentes dispositivos.



---

### 2. Interface do Usuário

A interface do projeto é moderna e focada em uma estética inspirada na cultura pop, com cores vibrantes e uma navegação simples.

Funcionalidades:

Menu de Navegação: Acesso rápido a filmes, séries e a seção "Sobre".

Cards de Conteúdo: Exibição de filmes e séries populares com detalhes básicos.

Detalhes do Conteúdo: Páginas individuais com informações completas sobre filmes e séries.

Botões de Ação: Como "Ver Mais".

Interação Social: Compartilhamento do Github no rodapé.

---

### 3. Base de Dados e Tecnologias Utilizadas

Node.js: Ambiente de execução para o backend. Node.js

Express: Framework para criação de APIs no Node.js. Expressjs

MySQL: Banco de dados relacional para armazenar as informações de filmes, séries e músicas. MySQL

Cors: Middleware para habilitar requisições de diferentes origens. Cors

dotenv: Para gerenciar variáveis de ambiente de forma segura. dotenv

JavaScript: Linguagem utilizada no desenvolvimento de toda a lógica do frontend e backend. JavaScript

HTML/CSS: Para estruturação e estilização da interface. HTML, CSS

MySQL Workbench: Ferramenta para gerenciar o banco de dados. MySQL Workbench

---

### 4. API

A API é responsável pela interação com o banco de dados, permitindo que os usuários consultem filmes, séries e músicas.

### Endpoints:

GET /filmes: Retorna todos os filmes disponíveis.

POST /series: Adiciona uma nova série ao banco de dados.


### Métodos Suportados:

GET: Recuperar dados.

POST: Criar novos registros (ex: adicionar série).



---

### 5. Como Executar Localmente

Pré-requisitos:

Node.js e MySQL instalados em sua máquina.


Passos para Execução:

### 1. Clone o repositório:

git clone 
cd cultura-pop


### 2. Instale as dependências:

npm install


### 3. Configure o banco de dados MySQL:


cultura_pop

Execute os comandos SQL



###  4. Inicie o servidor:

node server.js


###  5. Teste os endpoints com ferramentas como Postman.




---



### 6. Vercel:

1. Faça login no Vercel.


2. Conecte o repositório e inicie o deploy.

### Há outra forma fácil de executar o site: 

1. Execute ele diretamente do index.html do VsCode no seu navegador.


---

### 7. Autores

Isabela Yumi Hayashi Sabanay

Full Stack Developer.

Contato: yumihay28@gmail.com



---

Nota: Este projeto foi desenvolvido como parte do aprendizado na área de desenvolvimento web, combinando técnicas de design, banco de dados e backend.
