# README - Projeto API Spring Boot para Pokémons

Este é um projeto que consiste em uma API Spring Boot para acessar dados de Pokémons. A API consome a PokeAPI para obter informações detalhadas sobre Pokémons e fornece endpoints para acessar informações individuais e listas de Pokémons.

## Pré-requisitos

Antes de começar, certifique-se de que você tenha os seguintes pré-requisitos instalados em sua máquina:

- [Java JDK](https://www.oracle.com/java/technologies/javase-downloads.html)

## Configurando e Executando a API Spring Boot

1. Clone este repositório em sua máquina:

   ```shell
   git clone https://github.com/pedroveronez2/API-POKEMON-SPRING-BOOT.git
   
Navegue até a pasta do projeto da API Spring Boot:

```shell
cd seu-projeto/api-spring-boot
```

A API será iniciada em http://localhost:8080.

# Endpoints da API

GET /api/pokemon/{id}: Obtém informações detalhadas sobre um Pokémon específico com base em seu ID.
GET /api/pokemon/{nome}: Obtém informações detalhadas sobre um Pokémon específico com base em seu nome.
GET /api/pokemon/list?limit={limit}: Obtém uma lista de Pokémons com base no limite especificado.
