<h2>Desafio Cosmobots </h2>

Instalação:

1 - Instalar dependências

```console
cosmobots:~$ yarn install
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
Antes de rodar o seguinte comando, devemos ir ao arquivo .env e setar a variavel <strong>TEST</strong> para <strong>true</strong>.

```console
cosmobots:~$ yarn jest
```
