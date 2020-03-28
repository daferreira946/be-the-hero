<h1 align="center">
<br>
<img src="mobile/src/assets/logo.png" alt="Be The Hero">
<br>
<br>
Be The Hero - Seja o herói de alguém
</h1>

<h3 align="center">WEB</h3>
<img align="center" src="src/web-montage.png" alt="Telas web"/>
<br/>
<h3 align="center">MOBILE</h3>
<img align="center" src="src/mobile-montage.png" alt="Telas mobile"/>
<br/>
Projeto desenvolvido durante a semana OmniStack da [Rocketseat](Ainda sem repositório). Aplicação fullstack que permite a ONGs que cadastrem situações em que necessitam de ajuda pelo site e permite aos heróis a listagem dessas situações e o contato para ajudar, através da plataforma mobile.

## Instalação
### Backend/API
Clone este repositório e instale as dependências dentro da pasta `be-the-hero/backend`
```sh
git clone https://github.com/daferreira946/be-the-hero.git
cd be-the-hero/backend
npm install
```
- No arquivo `nexfile` configurar o banco que vai ser utilizado **SQL**

### Rodar Backend/API
```
npm start
```
> Lembre-se de deixar rodando o backend...
### Frontend
Instale as dependências dentro da pasta `be-the-hero/frontend`
> Em um novo terminal execute os comandos:
```sh
cd frontend
npm install
```
### Rodar Frontend
```
npm start
```
### App Mobile
O modo mais fácil de rodar esse aplicativo no **Android** é utilizando o [Expo](https://expo.io/).
Primeiro instale o `expo-cli` de forma global em sua máquina. 
Dentro da pasta `be-the-hero/mobile` instale as dependências do app, em seguida execute o app.
```
npm install -g expo-cli
npm install
npm start
``` 
Ao abrir uma aba em seu navegador do **Expo DevTools** com o **QRCode**, baixe o aplicativo do **Expo** em sua [play store](https://play.google.com/store/apps/details?id=host.exp.exponent) e faça o Scan do QRCode em seu celular.

- Lembre de configurar a baseUrl em `be-the-hero/mobile/src/service/api.js` para o seu ip externo, caso contrário o não vai funcionar se estiver usado o expo com celular físico.
