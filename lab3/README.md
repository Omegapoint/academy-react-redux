# Lab 3

## Starta applikationen för Lab 3
Från projektroten: `$ cd lab3`, `$ npm install` följt av `$ npm start`. Gå sedan in på http://localhost:3000/ för att öppna upp applikationen.

## Del 1 - Redux-snurran
1. Ta en till på befintliga komponenter och hur Redux-snurran är implementerad för att välja bakgrund. Ladda ner och använd [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) för detta. 
2. Bakgrundsfärgen är satt till `lavender` från början. Hur sätts den? Byt default från `lavender` till `gold`. Ladda om sidan och se så att det fungerar.
3. Användarna visas inte i listan just nu. Börja med att dispatcha ett action när användare har hämtats asynkront i `userActions`.
4. När vi har dispatchat en action måste vi hantera den i våra reducers. Öppna `userReducers.js` och stoppa in resultatet från din nya action i applikationens state.
5. I `Container.js` har vi nu tillgång till applikationens state och dipatches tack vare `connect()`. Vi vill här hämta alla användare när componenten mountas. Implementera detta.    
6. Nu när vi har användaran i vår store vill vi kunna läsa dom i komponenten `List.js`. Implementera funktionen `mapStateToProps()` i `List.js`.
7. Nu ska applikationen fungera fullt ut. Eftersom vi läser användare från store behöver vi inte längre skicka in `items` som `prop` när vi använder komponenten `<List />` i `Container.js`. Ta bort den. Applikationen fungerar ändå.  

## Del 2 - Egen komponent

Nu är det dags att sätta allt du lärt dig hittills på prov. Gör så långt du hinner. Uppgiften är att du ska skapa en egen komponent och visa detaljerad användarinformation i denna. I `List.js` finns det nu en callback, `onClick`, som kommer att skicka med ett id för användaren som klickades på. I `api.js` finns det en funktion som hämtar användardata basert på ett id.

För att lösa uppgiften behöver du:
- Skapa en ny komponent `<UserDetails>` (eller liknande namn) och använda denna i `Container.js`.
- `<UserDetails>` behöver rendera ut JSX för detaljerad användardata.
- Skapa en ny action creator i `userActions.js` som tar in ett id och gör ett asynkront anrop mot `api.js` för att hämta ut detlajerad användardata.
- Utöka state för `userReducers.js` till att även innehålla detaljerad användardata och handera en ny typ av inkommade action.
- Dispatcha ett nytt action för detaljerad användardata från `onItemClick()` i `List.js` via `connect`.
- Läsa in den detaljerade användardatan från applikationens state till din nya komponent.

Lycka till!
