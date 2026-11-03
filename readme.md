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

**Isabela Yumi Hayashi Sabanay**

Desenvolvedora Full Stack em formação.

📧 **Contato:** [yumihay28@gmail.com](mailto:yumihay28@gmail.com)

🐙 **GitHub:** [Acessar perfil](https://github.com/YumiHayashi)

---

## 📚 Contexto Acadêmico

O Seriescope foi desenvolvido como parte de um processo de aprendizagem na área de desenvolvimento web, envolvendo conceitos de programação, estruturação de interfaces, integração entre sistemas, desenvolvimento de APIs e gerenciamento de bancos de dados relacionais.

O projeto representa a aplicação prática de conhecimentos relacionados ao desenvolvimento Full Stack e à construção de soluções tecnológicas.
