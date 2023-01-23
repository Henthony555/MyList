/*
 1- Entra no MySQL:
  mysql -u root -p

 2- Criar o banco "MyList":
  CREATE DATABASE MyList;
 
 3- Usar o "MyList" criado:
  USE MyList;

 4- Criar a tabela "alunos" dentro do banco "MyList": 
  -Rodar o comando CREATE e INSERT abaixo-
*/

create table alunos (
  id int auto_increment primary key,
  nome varchar(255),
  email varchar(255),
  curso varchar(255),
  matricula varchar(255),
  turno varchar(255)
);

INSERT INTO alunos (nome, email, curso, matricula, turno) VALUES ('Henthony', 'henthony@gmail.com', 'IPI', '20221TIJG0555', 'Noite');
INSERT INTO alunos (nome, email, curso, matricula, turno) VALUES ('Sabrina', 'sabrinagmail.com', 'IPI', '20221TIJG0165', 'Noite');
INSERT INTO alunos (nome, email, curso, matricula, turno) VALUES ('Clarice', 'clarice@gmail.com', 'IPI', '20221TIJG0845', 'Noite');