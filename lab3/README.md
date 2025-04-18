# Lab 3

## Starta applikationen för Lab 3

Från projektroten: `$ cd lab3`, `$ npm install` följt av `$ npm run start`. Gå sedan in på http://localhost:5173/ för att öppna upp applikationen.

## Del 1 - Redux-snurran

1. Ta en till på befintliga komponenter och hur Redux-snurran är implementerad för att välja bakgrund. Ladda ner och använd [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) för detta.
2. Bakgrundsfärgen är satt till `lavender` från början via initialState. Byt default från `lavender` till `gold`._Hint: Detta görs i en slice_
3. Vår applikation har fått ny feature, en avatar-väljare. Men just nu fungererar den inte alls. Det ska vi fixa med Redux! Börja med att göra klart logien för att uppdatera vårt state i action-funktionen `updatedAvatar` i `avatarSlice.ts`.
4. Lägg även till ytterligare en ny action i `avatarSlice.ts` som nollställer `currentAvatar`. Glöm inte bort att exportera den tillsammans med `updatedAvatar`!
5. Nu vill vi dispatch:a våra två nya actions från `AvatarPicker.tsx`. Kontrollera att det fungerar med Redux Dev Tools. Du ska nu kunna se actions som skickas och att vårt state uppdateras.
6. Nu när vi har rätt värde i vår store kan vi läsa ut det vart vi vill. Använd `useSelector()` i `NavBar.tsx` för att välja ut vår avatar. Deklarera om konstanten `avatar`.
7. Nu ska applikationen fungera fullt ut!

## Del 2 - Egen komponent

Nu är det dags att sätta allt du lärt dig hittills på prov. Gör så långt du hinner. Uppgiften är att du ska skapa en egen komponent och visa detaljerad användarinformation i denna när man klickat på en av användarna i listan. I `List.tsx` finns det nu en callback, `onClick`, som kommer att skicka med ett id för användaren som klickades på. I `api.ts` finns det en funktion som hämtar användardata baserat på ett id.

För att lösa uppgiften behöver du:

- Skapa en ny komponent `<UserDetails>` (eller liknande namn) och använda denna i `Container.tsx`.
- `<UserDetails>` behöver rendera ut JSX för detaljerad användardata.
- Skapa en ny action `userSlice.ts` som tar in ett id och gör ett asynkront anrop mot `api.ts` för att hämta ut detaljerad användardata för en användare.
- Utöka state i `userSlice.ts` till att även innehålla detaljerad användardata.
- Dispatcha en nytt action för detaljerad användardata från `onItemClick()` i `List.tsx` via `useDispatch()`.
- Rita även ut en `<Spinner />` medans den detaljerade användardatan hämtas och en `<Error />` när det misslyckas.
- Läsa in den detaljerade användardatan från applikationens state till din nya komponent.

Lycka till!

##### _Del två finns löst i solutions-branchen om du bara vill se lösningen_ 😇

### Lycka till!
