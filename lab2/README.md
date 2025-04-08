# Lab 2

Instruktionerna nedan förutsätter att du står i katalogen `lab2` i detta repo i terminalen.

## Starta applikationen för Lab 2

Från projektroten: `$ cd lab2`, `$ npm install` följt av `$ npm start`. Gå sedan in på http://localhost:3000/ för att öppna upp applikationen.

## Uppgift

1. Bekanta dig med hur applikationen är uppbyggt komponentmässigt. Utgå från `App.jsx`.
2. Byt titel ("\*Insert title") på `List`-komponenten genom att skicka in ett annat värde för rätt `prop`.
3. Just nu går det inte att byta bakgrundfärg. Komponenten `App.jsx` har ett `state` för sidans bakgrundsfärg (`bgColor`). Använd callbacken från `BackgroundColorPicker` för att få färgväljaren att fungera. Hur sätts själva färgen?
4. Skicka in en lista med användare som `prop` till komponenten `List`. Hur hämtas listan med användare?
5. Användarna syns fortfarande inte listade. Använd **React Devtools Extension** för att verifiera att komponenten `List` har fått in en lista med användare.
6. Rendera ut lista med användare i `return()` i komponenten `List.jsx`. Använd `.map(...)` för detta (hint: kika i `BackgroundColorPicker` om du kör fast).
7. Nu vill vi kunna filtrera listan. I `List.jsx` använder vi komponenten `SearchBar` som tar en callback, `onKeyPressed`. Vad vill vi göra då? Implementera `onKeyPressed()` i `List.jsx`!
8. Nu när `List.jsx` känner till söktermen vill vi filtrera listan av användare. Det finns en metod `filterListItemsBySearchTerm()` som gör just detta. Tilldela konstanten `filteredItems` och iterera över denna istället för `items`.

## Jag har tid över, vad gör jag nu?

1. Hjälp en vän.
2. Utöka List-komponenten till att innehålla lite mer detaljerad användarinformation för varje item i listan.
3. Testa att skapa och styla en egen komponent från grunden.
4. Ta en kaffe ☕️
