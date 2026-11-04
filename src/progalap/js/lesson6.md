# 6. tananyag 

## Ciklusokkal és elágazásokkal való munka

Ebben a fejezetben
- Az if/else elágazás megismerése
- A ciklusok különböző típusainak megértése
- A ciklusok használata utasítások ismétlésére
- Egy tömb értékeinek átfutása a ciklusokkal

Korábban általában lineáris JavaScript-kódról beszéltünk és mutattunk be. Gyakran előfordul azonban, hogy egy programban eljön az az idő (valójában sokszor), amikor választani kell, vagy amikor meg kell változtatni a program egyenes vonalú logikáját, hogy az állapotokat többször megismételjük különböző értékekkel. Ebben a fejezetben a ciklus- és elágazó utasításokat tárgyaljuk.

### Elágazás

A ciklusokkal és elágozásokkal utasításokat vezérlő utasításoknak nevezzük, mert ezek szabályozzák a JavaScript programok futtatásának sorrendjét. Az elágazási utasításokkal a JavaScript-kód végrehajtásához különböző útvonalakat hozhat létre a feltételes logikától függően. A ciklusok a legegyszerűbb módja annak, hogy a JavaScript utasításokat egy programban csoportosítsuk.

Egy JavaScript program logikája gyakran eljut egy olyan pontra, ahol olyan döntést kell hozni, amely mindent megváltoztat. A 6-1. ábra JavaScript segítségével mutat be egy olyan valós döntést, amelyet elágazás segítségével oldhatunk meg.

### `if` . . . `else`

Az if és `else` utasítások együtt dolgoznak egy logikai kifejezés kiértékelésében és az eredmény alapján különböző utasítások futtatásában. Az if utasítások önmagukban is használhatók, és gyakran használják is őket. Az `else` utasításokat mindig az if utasítással együtt kell használni.


Az if utasítás alapvető szintaxisa a következő:

```js
if (condition) {
 ...
}
```

A feltétel itt bármely olyan kifejezés, amely Boolean (igaz vagy hamis) értéket ad. Ha a kifejezés eredménye igaz, akkor a zárójelek közötti utasítások végrehajtásra kerülnek. Ha az eredmény hamis, akkor egyszerűen átugrik.

Az `else` utasítás akkor jön be, ha valamit akkor akarunk csinálni, ha a feltétel értéke hamis. Például:

```js
var age = 19;
if (age < 21) {
	document.write("You are under the legal drinking age in the U.S.");
} else {
	document.write("What'll it be?");
}
```

Sok más programozási nyelv rendelkezik egy `elseif` nevű kombinációs kulcsszóval, amelyet többször is használhatunk egy `if ... else` utasításban, amíg igaz értéket nem kapunk. __A JavaScript nem rendelkezik `elseif` kulcsszóval.__

Az `elseif` kulcsszóval megegyező funkcionalitást érhetünk el azonban, ha az `if` és az `else` kulcsszavakat együtt használjuk, a kettő között szóközzel. Például:

```js
if (time < 12) {
	document.write("Good Morning!");
} else if (time < 17) {
	document.write("Good Afternoon!");
} else if (time < 20) {
	document.write("Good Evening!");
} else {
	document.write("Good Night!");
}
```

Figyeld meg a sortörések és szóközök használatát az előző példákban. Sokan különböző stílusban írják az `if` ... `else` utasításokat. Előfordulhat, hogy kevesebb sortöréssel vagy a kulcsszavak és zárójelek közötti szóköz nélkül írják őket. Ezek is működnek. Azonban amikor csak lehetséges, a könnyebb olvashatóságot előnyben kell részesíteni a rövidséggel szemben.

### Az `if` . . . `else` rövidítés megértése

Az `if` ... `else` utasítások használatához ismerned kell néhány rövidítést. Az első az `if` ... `else` helyett egy `terner` operátor használata. Ez némileg nehezebben olvasható, mint a hagyományos `if` ... `else`:

A ternerális karakterek a következő: 

```js
var whatToSay = (time < 12 ? "Jó reggelt" : "Hello");
```

Ebben az esetben a `whatToSay` értéke __"Jó reggelt"__-ra lesz állítva, ha az idő kevesebb, mint __12__, és __"Hello"__-ra lesz állítva, ha az idő nem kevesebb, mint __12__.

Egy másik rövidített módszer az `if` ... `else` utasítások írására a logikai ÉS (`&&`) operátor. Ne feledjük, hogy a logikai ÉS csak akkor értékeli ki a második operandus értékét, ha az első igaznak adódik. A programozók ezt rövidzárlatnak nevezik, mert a logikai __ÉS__ műveletben nem szükséges a második operandus kiértékelése, ha az első operandus hamis értéket eredményez.

```js
time < 12 && document.write("Jó reggelt!");
```

Az előző példában az `&&` utasítás először azt vizsgálja, hogy az idő kisebb-e __12__-nél. Ha igen, akkor a __"Jó reggelt"__ karakterláncot írja be a HTML dokumentumba. Ha nem, akkor az `&&` operátor rövidre záró mellékhatása miatt nem történik semmi.

Ezt a módszert nem gyakran használják, elsősorban azért, mert nehezen érthető és zavaros. Azonban időnként találkozhatsz ilyesmivel, és meg kell értened, hogyan működik.

### Switch

A `switch` utasítás egy kifejezés lehetséges értékei alapján választ több végrehajtandó utasítás közül. A `switch` utasításban minden ilyen értéket `case`-nek nevezünk. Magyarul azt mondhatjuk például:

"Abban az esetben, ha hat vendéget várunk, rendeljünk három pizzát. Abban az esetben, ha 12 vendéget várunk, rendeljen hat pizzát. Abban az esetben, ha több mint 20 vendéget várunk, akadjon ki.".

```js
switch (expression) {
	case value1:
		// Statements
		break;
	case value2:
		// Statements
		break;
	case value3:
		// Statements
		break;
	default:
		// Statements
		break;
}
```

Figyeljük meg a `break` utasítást. A `break` utasítás azt mondja a `switch`-nek, hogy állítsa le és lépjen ki a `switch`-ből. A megszakítás nélkül a `switch` utasítás folytatná és futtatná a következő feltételben szereplő utasításokat, függetlenül attól, hogy a kifejezés megfelel-e az adott eset feltételeinek.

A `break` utasítás elfelejtése a `switchen` belül nagy problémákat okozhat, ezért mindig használd. Mivel a `switch` utasítás bármely `case` kifejezés belüli bármely utasítást lefuttat egy igazra értékelő kifjezés után, kiszámíthatatlan eredmények adódhatnak, ha elfelejtjük a `break` utasítást. A `break` utasítás kihagyása által okozott problémákat nem könnyű azonosítani, mert általában nem okoznak hibát, de gyakran hibás eredményeket produkálnak.

Ha a `case` kifejezések egyikében sem találunk egyezést, a `switch` utasítás keres egy default kifejezést, és végrehajtja az abban szereplő utasítást.

A kivétel a szabály alól, miszerint a `case` kifejezés között mindig `break` utasítást kell használni. Amíg a `default` az utolsó utasítás a `switchben` (aminek így kell lennie), addig nyugodtan elhagyhatjuk a break-et utána, mert a program úgyis ki fog lépni a `switchből` az utolsó utasítás után.

### for, for ... in, while, do ... while

A ciklusok ugyanazt az utasítást többször is végrehajtják. A JavaScriptben többféle ciklus létezik:

- for
- for...in 
- do...while 
- while

### For

A `for` utasítás három kifejezést használva hoz létre egy ciklust:

- __Inicializálás__: Egy változó, jellemzően egy számláló kezdeti értéke.
- __Feltétel__: Egy Boolean kifejezés, amelyet a ciklus minden egyes iterációjánál ki kell értékelni.
- __Végső kifejezés__: A ciklus minden egyes iterációja után kiértékelendő kifejezés.

Bár nem kötelező mindhárom kifejezést használni egy `for` ciklusban, szinte mindig mindhárom szerepel. A for-ciklust általában arra használják, hogy a kódot előre meghatározott számú alkalommal futtassák le.

A következő egy példa egy egyszerű for ciklusra:

```js
for (var x = 1; x < 10; x++) {
	console.log(x);
}
```
Lebontva így működik az előző `for ciklus`:

1. Létrehoz egy új változót, ebben az esetben __x__-et, 1 értékkel indítunk.
2. Egy tesztet hajtunk végre annak megállapítására, hogy __x__ kisebb-e _10-nél_. Ha igen, akkor a cikluson belüli utasítások végrehajtásra kerülnek (ebben az esetben egy `console.log(x)` utasítás).
3. Ha nem, akkor __x__ értékét a __inkrementáló operátor__ (__++__) segítségével növeljük.
4. A tesztet újra elvégezzük, hogy megállapítsuk, hogy __x__ kisebb-e _10-nél_. Ha igen, akkor a cikluson belüli utasítások végrehajtásra kerülnek.
5. A teszt ismétlődik, amíg a feltételkifejezés már nem értékelődik igazra.

### Tömbön való átjárás

A `for` ciklusok segítségével ki listázhatod egy tömb tartalmát, a számláló értékét a tömb hossz tulajdonságának értékével összevetve. Ne feledd, hogy a __JavaScript__ tömbök nullás indexűek, és hogy bármely `array.length` értéke eggyel több lesz, mint a tömb legmagasabb indexszámú eleme.

```html
<html>
  <head>
    <title>Different Area Codes</title>
  </head>
  <body>
    <script>
      var areaCodes = ["770", "404", "718", "202", "901", "305", "312", "313", "215", "803"];
      for (x = 0; x < areaCodes.length - 1; x++) {
        document.write("Different Area Code:" + areaCodes[x] + " < br > ");
        }
    </script>
  </body>
</html>
```

__Kimenet:__

```txt
Different Area Code:770
Different Area Code:404
Different Area Code:718
Different Area Code:202
Different Area Code:901
Different Area Code:305
Different Area Code:312
Different Area Code:313
Different Area Code:215
```

### for ... in

A `for ... in` utasítások egy objektum tulajdonságainak körbejárását végzik. A `for ... in` utasítással egy tömb értékein is végighaladhatunk.

A `for ... in` ciklusnak van egy érdekes sajátossága. Nem érdekli a tulajdonságok vagy elemek sorrendje, amelyeken a ciklus végigmegy. Azért a `for ... in` ciklus használata lassabb, sokkal jobban járunk, ha a tömb elemein való végighaladáshoz egy hagyományos for-ciklust használunk.

Az objektumok olyan adattárolók, amelyeknek tulajdonságaik _(mik ők)_ és metódusaik _(mit csinálnak)_ vannak. A webböngészők rendelkeznek egy sor beépített objektummal, amelyeket a programozók a böngésző működésének vezérlésére használhatnak. Ezek közül a legalapvetőbb a `Document` objektum. A `Document` objektum `write` metódusa például azt mondja a böngészőnek, hogy egy megadott értéket illesszen be a HTML-dokumentumba.

A `Document` objektumnak vannak olyan tulajdonságai is, amelyekkel nyomon követheti és információt adhat a programozóknak az aktuális dokumentumról. A `Document.images` gyűjtemény például tartalmazza az aktuális HTML-dokumentum összes `img`-címkéjét.

```html
<html>
  <head>
    <title>document properties</title>
    <style>
      .columns {
        -webkit-column-count: 6; // Chrome, Safari, Opera 
        -moz-column-count: 6; // Firefox
        column-count: 6;
      }
    </style>
  </head>
  <body>
    <div class="columns">
      <script>
        for (var prop in document) {
          document.write(prop + " < br > "); 
        }
      </script>
    </div>
  </body>
</html>
```

A `for ... in` ciklus segítségével az objektum tulajdonságaiban szereplő értékeket is kiadhatja, nem csak a tulajdonság nevét.

```html
<html>
  <head>
    <title>document properties</title>
    <style>
      .columns {
        -webkit-column-count: 6; // Chrome, Safari, Opera 
        -moz-column-count: 6; // Firefox
        column-count: 6;
      }
    </style>
  </head>
  <body>
    <div class="columns">
      <script>
        for (var prop in document) {
          document.write (prop + ": " + document[prop] + " <br>");
        }
      </script>
    </div>
  </body>
</html>
```


### while ciklusok

A while utasítás egy olyan ciklust hoz létre, amely addig fut, amíg egy feltétel igaznak bizonyul.


```html
<html>
  <head>
    <title>Guess the Word</title>
  </head>
  <body>
    <script>
      var guessedWord = prompt("What word am I thinking of ? ");
          while (guessedWord != "sandwich") { // as long as the guessed word is not sandwich 
            prompt("No. That's not it. Try again.");
          }
          alert("Congratulations! That's exactly right!"); // do this after exiting the loop
    </script>
  </body>
</html>
```

### do . . . while

A `do...while` ciklus nagyjából ugyanúgy működik, mint a `while` ciklus, azzal a különbséggel, hogy az utasításokat a kifejezés elé helyezi a teszteléshez. Ennek az a hatása, hogy a `do...while` cikluson belüli utasítások mindig legalább egyszer végrehajtódnak.

```html
<html>
  <head>
    <title>Let's Count</title>
  </head>
  <body>
    <script>
      var i = 0;
      do {
        i++;
        document.write(I + " < br > "); 
      } while (i < 10);
    </script>
  </body>
</html>
```

### break és a continue

A `break és a continue` segítségével megszakíthatod egy ciklus végrehajtását. A `break` utasítást korábban ebben a fejezetben a `switch` utasítással összefüggésben mutattuk be, ahol arra szolgál, hogy egy sikeres találat után megszakítsuk a `switch`-et.
Egy ciklusban a `break` nagyjából ugyanezt teszi. A program azonnali kilépését eredményezi a ciklusból, függetlenül attól, hogy a ciklus befejezésének feltételei teljesülnek-e.

```html
<html>
  <head>
    <title>Guess the Word</title>
  </head>
  <body>
    <script>
      var guessedWord = prompt("What word am I thinking of ? ");
          while (guessedWord != "sandwich") {
            if (guessedWord == "") {
                break;
            } // exit the loop right away if user doesn't enter a value
            prompt("No. That's not it. Try again.");
          }
          alert("Congratulations! That's exactly right!");
    </script>
  </body>
</html>
```

A `continue` utasítás hatására a ciklus aktuális ismétlése leáll, és azt mondja a programnak, hogy a ciklus következő ismétlésével kezdje újra, kihagyva a `continue` utasítás után következő utasításokat.

```html
 <html>
   <head>
     <title>Count and show me even numbers</title>
   </head>
   <body>
     <script>
       for (var i = 0; i <= 20; i++) {
         if (i % 2 != 0) {
           continue;
         }
         document.write(i + " is an even number. < br > "); }
     </script>
   </body>
 </html>
```

Ilyen módon használva a `continue` helyettesítheti az `else` utasítás funkcióját.

__Kimenet:__

```txt
0 is an even number.
2 is an even number.
4 is an even number.
6 is an even number.
8 is an even number.
10 is an even number.
12 is an even number.
14 is an even number.
16 is an even number.
18 is an even number.
20 is an even number.
```

A `break` és a `continue` utasítások hasznosak lehetnek, de veszélyesek is. Kis méretük és nagy erejük miatt a kód átolvasásakor könnyen átsiklunk felettük. Emiatt néhány programozó rossz gyakorlatnak tartja a cikluson belüli használatukat.