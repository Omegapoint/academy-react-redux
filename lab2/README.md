# Lab 2

## Starta applikationen för Lab 2
Från projektroten: `$ cd lab2`, `$ npm install` följt av `$ npm start`. Gå sedan in på http://localhost:3000/ för att öppna upp applikationen. 

## Uppgift
1. Bekanta dig med hur applikationen är uppbyggt komponentmässigt. Utgå från `App.js`.
2. Byt titel ("*Insert title") på `List`-komponenten genom att skicka in ett annat värde för rätt `prop`.
3. Just nu går det inte att byta bakgrundfärg. Komponenten `App.js` har ett `state` för sidans bakgrundsfärg (`bgColor`). Använd callbacken från `BackgroundColorPicker` för att få färgväljaren att fungera. Hur sätts själva färgen?
4. Skicka in en lista med användare som `prop` till komponenten `List`. Hur hämtas listan med användare?
5. Användarna syns fortfarande inte listade. Använd __React Devtools Extension__ för att verifiera att komponenten `List` har fått in en lista med användare.
6. Rendera ut lista med användare i funktionen `render()` i komponenten `List.js`. Använd `.map(...)` för detta (hint: kika i `BackgroundColorPicker` om du kör fast). 
7. Nu vill vi kunna filtera listan. I `List.js` använader vi komponenten `SearchBar` som tar en callback, `onKeyPressed`. Vad vill vi göra då? Implementera `onKeyPressed()` i `List.js`!
8. Nu när `List.js` känner till söktermen vill vi filtrera listan av användare. Det finns en funktion `filterListItemsBySearchTerm()` som gör just detta. Instansiera konstanten `filteredItems` och iterera över denna istället för `this.props.items`.


## Jag har tid över, vad gör jag nu?
1. Hjälp en vän.
2. Utöka liskomponenten till att innehålla lite mer detaljerad användarinformation för varje item i listan.
3. Ta en kaffe ☕️
