Instalação:

1 - Instalar dependências

```console
cosmobots:$ yarn install
```

2 - Iniciar o Postgres com o Docker

```console
cosmobots:~$ docker-compose up
```

3 - Gerar os Types para o Prisma

```console
cosmobots:~$ npx prisma generate
```

4 - Empurrar os modelos das tabelas para o Postgres

```console
cosmobots:~$ npx prisma db puconsole
```

5 - Configurar o projeto para (criar os grupos padrões)

```console
cosmobots:~$ yarn setup
```

Uso:

Desenvolvimento:

```console
cosmobots:~$ yarn dev
```

Produção:

```console
cosmobots:~$ yarn build
cosmobots:~$ yarn start
```

Teste:

```console
cosmobots:~$ yarn jest
```
