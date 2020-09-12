# Banco de Dados Não Convencional - MongoDB

Um projeto de banco de dados não convencional para um Sistema de Cadastro e Administração de Instituição de Ensino Este.

## Requisitos

* [MongoDB Community Server] versão 4.4.1 (https://www.mongodb.com/try/download/community)
* [Robo 3T] versão 1.4.0 (https://robomongo.org/download)

## Configuração

* Realize o dump da base de dados:
  * Windows:
    * mongorestore --db scie --drop <DUMP_FOLDER>
  * Linux:
    * mongorestore --db scie --username <ROOT_USER> --password <ROOT_PASSWORD> --authenticationDatabase admin --drop <DUMP_FOLDER>

## Executando esse projeto

* Execute os comandos que se encontram no arquivo `commands.js` no Shell do Robot3T
