# Banco de Dados Não Convencional - MongoDB

Um projeto de banco de dados não convencional para um Sistema de Cadastro e Administração de Instituição de Ensino.

## Requisitos

* [MongoDB Community Server](https://www.mongodb.com/try/download/community) versão 4.4.1
* [Robo 3T](https://robomongo.org/download) versão 1.4.0

## Instalação

* Clone este repositório no diretório de sua preferência
* Vá para a pasta raiz do projeto
* Realize o dump da base de dados:
  * Windows:
    * mongorestore --db scie --drop ./dump/scie
  * Linux:
    * mongorestore --db scie --username <ROOT_USER> --password <ROOT_PASSWORD> --authenticationDatabase admin --drop ./dump/scie

## Executando esse projeto

* Abra o Robo 3T
* Abra um nova janela Shell
* Execute os comandos que se encontram no arquivo `commands.js` no Shell do Robot3T
