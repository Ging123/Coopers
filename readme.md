# COOPERS

## Como se Executar

Para se executar a aplicação é necessário que você **levante dois servidores**. Um para a api e outro para o frontend.

### API

Para se levantar o servidor da api é necessário que você primeiro **crie um arquivo .env na pasta api** usando o arquivo **example.env** como base. Criado o arquivo, você pode levantar a api de duas formas, usando npm ou utilizando docker.

#### npm
```
#Entra na pasta api pelo terminal
cd api
#Instala as dependências
npm install
#Executa a aplicação no modo de desenvolvedor
npm run dev
```

#### docker
```
cd api
#Api está na porta que você definir no .env
docker-compose up -d
```

#### testes
É possível rodar testes na api com o comando 
```
npm run test
```

### Frontend

Para se executar o frontend é necessário que você primeiro entre na pasta src e **vá no arquivo env.ts** e coloque a variável **production** como false. Após isso, você pode levantar o servidor do client com npm ou com docker.

#### npm
```
#Entra na pasta client no terminal
cd client
#Instala todas dependências do frontend
npm install
#Cria um servidor para rodar a aplicação
npm run start
```

#### docker
```
cd client
#A aplicação vai está na porta 3000
docker-compose up -d
```