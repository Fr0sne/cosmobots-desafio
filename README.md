Instalação:

1 - Instalar dependências

```sh
cosmobots:$ yarn install
```

2 - Iniciar o Postgres com o Docker

```sh
cosmobots:~$ docker-compose up
```

3 - Gerar os Types para o Prisma

```sh
cosmobots:~$ npx prisma generate
```

4 - Empurrar os modelos das tabelas para o Postgres

```sh
cosmobots:~$ npx prisma db push
```

5 - Configurar o projeto para (criar os grupos padrões)

```sh
cosmobots:~$ yarn setup
```

Uso:

Desenvolvimento:

```sh
cosmobots:~$ yarn dev
```

Produção:

```sh
cosmobots:~$ yarn build
cosmobots:~$ yarn start
```

Teste:

```sh
cosmobots:~$ yarn jest
```
