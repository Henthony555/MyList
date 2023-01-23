/*
 mysql -u root -p
 CREATE DATABASE MyList;
 USE MyList;
 --Criar tebela abaixo--
 SELECT * FROM alunos;
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