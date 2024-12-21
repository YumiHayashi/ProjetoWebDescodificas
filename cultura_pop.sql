CREATE TABLE filmes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  sinopse TEXT,
  ano INT,
  genero VARCHAR(100),
  imagem_url VARCHAR(255)
);

CREATE TABLE musicas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  artista VARCHAR(255),
  album VARCHAR(255),
  ano INT,
  imagem_url VARCHAR(255)
);

CREATE TABLE series (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  sinopse TEXT,
  temporadas INT,
  imagem_url VARCHAR(255)
);
