# 4. tananyag

## Tömbök megismerése

Ebben a fejezetben

- Tömbök azonosítása és meghatározása
- Tömbök létrehozása
- A többdimenziós tömbök
- Munka a tömb elemein belül
- Tömbfüggvények és tulajdonságok használata


A tömbök minden programozási nyelv alapvető részét képezik. Ebben a fejezetben megtudhatod, hogy mik azok, hogyan használhatod őket, és mi különbözteti meg a JavaScript tömbjeit a más programozási nyelvek tömbjeitől. A tömbökkel listákat hozhatsz létre, listákat rendezhet, és elemeket adhatsz hozzá és távolíthatsz el listákból.

### Lista készítése

Az anyag korábbi részeiben olyan változókkal dolgozunk, amelyek önálló adatdarabok, például: 
```js
var myName = "Chris"
var firstNumber = "3"
var howManyTacos = 8
```

A programozásban _(és az életben is)_ gyakran előfordul, hogy összefüggő adatokat szeretnénk egyetlen név alatt tárolni. Vegyük például a következő típusú listákat:

- A kedvenc előadóink listája
- Egy program, amely kiválaszt és megjelenít egy másik idézetet egy listából, idézetek listájából - minden egyes futtatáskor
- Ünnepi üdvözlőlapok levelezési listája
- Az év legjobb zenei albumainak listája
- Családtagjaid és barátaid születésnapjainak listája
- Vásárlási lista
- Egy tennivaló lista
- Újévi fogadalmak listája

Egyértékű változók használatával több változót kellene létrehoznod és nyomon követned ahhoz, hogy ezeket a feladatokat elvégezze. Íme egy példa egy egyértékű változókkal létrehozott listára:


```js
var artist1 = "Alphonse Mucha";
var artist2 = "Chiara Bautista";
var artist3 = "Claude Monet";
var artist4 = "Sandro Botticelli";
var artist5 = "Andy Warhol";
var artist6 = "Wassily Kadinski";
var artist7 = "Vincent Van Gough";
var artist8 = "Paul Klee";
var artist9 = "William Blake";
var artist10 = "Egon Schiele";
var artist11 = "Salvador Dali";
var artist12 = "Paul Cezanne";
var artist13 = "Diego Rivera";
var artist14 = "Pablo Picasso";
```

Ez a megközelítés rövid távon működhet, de gyorsan nehézségekbe ütközik. Mi lenne például, ha a listát ábécé-sorrendbe akarná rendezni, és a művészeket az ábécé-sorrendben elfoglalt helyük alapján a megfelelő változónevekbe helyezné át? Ehhez először __Muchát__ kellene áthelyeznie az `artist1` változóból (esetleg egy ideiglenes tárolóváltozóba), majd __Bautistát__ az `artist1` változóba. Az `artist2` hely ezután szabaddá válna __Blake__ számára, de ne feledje, hogy hogy __Mucha__ még mindig abban az ideiglenes résben van! __Blake__ eltávolítása az `artist9`-ből felszabadítja azt a helyet, ahonnan valaki mást áthelyezhetsz az ideiglenes változóba, és így tovább. A lista ilyen módon történő létrehozása gyorsan bonyolulttá és zavarossá válik.

Szerencsére a JavaScript (_és minden más általunk ismert programozási nyelv_) támogatja a több értéket tartalmazó változók, úgynevezett tömbök létrehozását.

A tömbökkel összefüggő adatok csoportjait tárolhatjuk egyetlen változóban. A tömbökkel olyan listákat hozhatsz létre, amelyekben tetszőlegesen vegyesen találhatók karakterláncértékek, _számok_, _boolok_, _objektumok_, _függvények_, bármilyen más típusú adat, sőt, még más __tömbök__ is!

### Array alapjai

Egy tömb tömbelemekből áll. A tömbelemek a tömb nevéből, majd egy szögletes zárójelben lévő indexszámból állnak. A tömbön belüli egyedi értéket tömbelemnek nevezzük. A tömbök számokat (az úgynevezett __indexszámokat__) használnak az elemek eléréséhez. A következő példa azt szemlélteti, hogy a tömbök hogyan használják az __indexszámokat__ az elemek eléréséhez:

```js
myArray[0] = "yellow balloon";
myArray[1] = "red balloon";
myArray[2] = "blue balloon";
myArray[3] = "pink balloon";
```

Ebben a példában a `0` indexszámú elem értéke "__yellow balloon__". A `3` indexszámú elem értéke "__pink balloon__". Mint bármely változónak, a tömbnek is bármilyen nevet adhatsz, amely megfelel a JavaScript-változók elnevezésére vonatkozó szabályoknak. Az __indexszámok__ tömbökben történő hozzárendelésével a JavaScript lehetőséget ad arra, hogy egyetlen változónév szinte korlátlan számú értéket tartalmazzon.

:::tip Tudnivaló
Csak hogy ne essünk túlzásokba, a tömbök elemszámának valóban van egy határa, bár nagyon valószínűtlen, hogy valaha is elérjük azt. A határérték __4 294 967 295__ elem.
:::

Az elnevezési követelményeken kívül a tömböknek van még néhány olyan szabálya és különleges tulajdonsága, amelyeket ismernie kell:

- A tömbök nulla indexűek.
- A tömbök bármilyen típusú adatot tárolhatnak.

### A tömbök nullával indexeltek

A JavaScriptnek nincsenek ujjai vagy lábujjai. Ezért nem kell betartania a mi őrült emberi szabályainkat, miszerint a számolás __1__-gyel kezdődik. A JavaScript tömbök első eleme mindig __0__ indexszámú.

Ez azt jelenti, hogy a `myArray[3]` valójában a tömb negyedik eleme.

A nullás számozás zavaró tényező a programozásban járatlanok számára, de ha egyszer megszokod, akkor teljesen természetes lesz.

### A tömbök bármilyen típusú adatot tárolhatnak

Egy tömb minden eleme tárolhat bármelyik adattípust, valamint más tömböket is. A tömbelemek függvényeket és JavaScript-objektumokat is tartalmazhatnak.
Bár egy tömbben bármilyen típusú adat tárolható, a lent bemutatott módon különböző típusú adatokat tartalmazó elemeket is tárolhatunk együtt, egy tömbben.

```js
item[0] = "apple";
item[1] = 4+8;
item[2] = 3;
item[3] = item[2] * item[1];
```

### Tömbök létrehozása

A JavaScript két különböző módon biztosít új tömbök létrehozását: 
- `new` kulcsszó
- Tömb szó szerinti jelölés

### A `new` kulcsszó használata

A `new` kulcsszó metódus a `new Array()` segítségével hoz létre egy tömböt és ad hozzá értékeket.

```js
var catNames = new Array("Larry", "Fuzzball", "Mr. Furly");
```

Ezt a módszert programozói pályafutásod során is láthatod használni, és ez egy tökéletesen elfogadható módja egy tömb létrehozásának.

:::warning Figyelmeztetés
Sok JavaScript-szakértő azonban nem ajánlja ezt a módszert. A legnagyobb probléma a `new` kulcsszó használatával az, hogy mi történik, ha elfelejtjük beilleszteni. Ha elfelejtjük használni a `new` kulcsszót, az drámaian megváltoztathatja a programunk működését.
:::

### Array literális

A tömbök létrehozásának sokkal egyszerűbb és biztonságosabb módja az úgynevezett tömb literal jelölési módszer használata. Ez így néz ki:

```js
var dogNames =["Shaggy", "Tennesee", "Dr. Spock"];
```

Ennyi az egész. A szögletes zárójelek és a speciális kulcsszavak hiánya azt jelenti, hogy kisebb a valószínűsége annak, hogy véletlenül kihagy valamit. A tömbi szó szerinti módszer kevesebb karaktert használ, mint az új kulcsszavas módszer - és amikor a JavaScriptet a lehető legjobban próbáljuk rendben tartani, minden kis apróság segít!

### Táblák feltöltése

Egy tömbhöz hozzáadhatsz értékeket, amikor először létrehozod, vagy egyszerűen létrehozhatsz egy tömböt, majd később hozzáadhatsz elemeket. Az elemek hozzáadása egy tömbhöz pontosan ugyanúgy működik, mint egy változó létrehozása vagy módosítása, azzal a különbséggel, hogy megadja a létrehozni vagy módosítani kívánt elem indexszámát. A lenti példában egy üres tömb létrehozására, majd elemek hozzáadására mutat példát.

__Egy üres tömb feltöltése__

```js
var peopleList =[];
peopleList[0] = "Chris Minnick";
peopleList[1] = "Eva Holland";
peopleList[2] = "Abraham Lincoln";
```

Nem kell mindig egymás után hozzáadni az elemeket. A JavaScriptben teljesen legális, ha új elemet nem sorrendben hozunk létre. Például az előző, példában szereplő tömbhöz a következőket is hozzáadhatnánk:

```js
peopleList[99] = "Tina Turner";
```

Egy ilyen sorrenden kívüli tömb létrehozása gyakorlatilag üres elemeket hoz létre a `peopleList[2]` és `peopleList[99]` közötti összes indexhez.

Tehát, ha a `peopleList` tömb hossz tulajdonságát egy `99`-es indexű elem hozzáadása után ellenőrizzük, valami érdekes történik:

```js
peopleList.length // returns 100
```

Annak ellenére, hogy csak négy elemet hoztunk létre, a JavaScript azt fogja mondani, hogy a tömb hossza __100__, mivel a hossz _a legmagasabb számozott indexen alapul_, __nem__ pedig azon, hogy _hány elemet hoztunk létre._

### Többdimenziós tömbök megértése

Nemcsak tömböket tárolhatsz tömbökben, hanem tömböket is elhelyezhetsz tömbökben. Ez így tovább és tovább folytatható. Egy tömböt, amely egy tömböt tartalmaz, többdimenziós tömbnek nevezünk. Többdimenziós tömb írásához egyszerűen több szögletes zárójelet adsz a változó nevéhez. Például:

```js
var listOfLists[0][0];
```

A többdimenziós tömböket nehéz lehet megjeleníteni, amikor először kezdünk el velük dolgozni.

A többdimenziós tömböket hierarchikus listák vagy vázlatok formájában is megjelenítheti. Például:

Top albumok műfaj szerint

1. Country
  
  1.1 Johnny Cash:Live at Folsom Prison 
  
  1.2 Patsy Cline:Sentimentally Yours 
  
  1.3 Hank Williams:I’m Blue Inside

2. Rock
  
  2.1 T‐Rex:Slider
  
  2.2 Nirvana:Nevermind 
  
  2.3 Lou Reed:Transformer

3. Punk
  
  3.1 Flipper:Generic
  
  3.2 The Dead Milkmen: Big Lizard in my Backyard 
  
  3.3 Patti Smith:Easter

Íme egy kód, amely létrehoz egy tömböt a fentiek alapján:

```js
var bestAlbumsByGenre = []

bestAlbumsByGenre[0] = "Country";
bestAlbumsByGenre[0][0] = "Johnny Cash:Live at Folsom Prison"
bestAlbumsByGenre[0][1] = "Patsy Cline:Sentimentally Yours";
bestAlbumsByGenre[0][2] = "Hank Williams:I'm Blue Inside"; 

bestAlbumsByGenre[1] = "Rock";
bestAlbumsByGenre[1][0] = "T-Rex:Slider"; 
bestAlbumsByGenre[1][1] = "Nirvana:Nevermind"; 
bestAlbumsByGenre[1][2] = "Lou Reed:Tranformer"; 

bestAlbumsByGenre[2] = "Punk";
bestAlbumsByGenre[2][0] = "Flipper:Generic"; 
bestAlbumsByGenre[2][1] = "The Dead Milkmen:Big Lizard in my Backyard"; 
bestAlbumsByGenre[2][2] = "Patti Smith:Easter";
```

### Tömbelemek elérése

A tömbök elemeit ugyanúgy érheted el, ahogyan beállítottad őket, szögletes zárójelek és az indexszám használatával. Például, ha a myArray nevű tömb harmadik elemét szeretnéd elérni, akkor a következőt kell használnod:

```js
myArray[2];
```

Egy többdimenziós tömb elemeinek eléréséhez csak adjunk hozzá több szögletes zárójelet, hogy elérjük a kívánt elemet:

```js
bestAlbumsByGenre[0][1]; // returns "Patsy_ Cline:Sentimentally Yours";
```
Egy tömb elemeinek beállítását és elérését a következő lépésekkel próbálhatod ki:

1. Nyisd meg a Chrome böngészőt, és nyisd meg a JavaScript konzolt.
A JavaScript-konzolt a Chrome menüjével vagy a Macen a `Command + Option + J`, illetve Windowson a `Ctrl + Shift + J` billentyűkombinációval nyithatod meg.


2. A konzolban írd be a következő utasítást, majd a Return vagy az Enter billentyűt, hogy létrehozzon egy `lengthsOfString` nevű tömböt:

```js
var lengthsOfString = [2,4,1.5,80];
```

3. Írd be a tömb nevét, majd szögletes zárójelben az indexszámot, hogy lekérd az egyes tömbelemek értékét.

```js
lengthsOfString[0];
lengthsOfString[3];
lengthsOfString[2];
```

4. Adj meg olyan indexszámot, amely nem létezik a tömbben.

```js
lengthsOfString[4];
```

5. Írd be a következő parancsot egy új változó létrehozásához, amely a rendelkezésre álló karakterlánc teljes hosszát tárolja:

```js
var totalLength = lengthsOfString[0] + lengthsOfString[1] + lengthsOfString[2] + lengthsOfString[3];
```

6. Végül a totalLength értékét kapja meg ezzel a paranccsal:

```js
totalLength;
```

### Tömbökön való átfutás

Ahogy azt el tudod képzelni, a tömbök több értékével való munka a tömb nevének és az indexszámnak a beírásával egy idő után fárasztó lehet az ujjaid számára. Szerencsére vannak egyszerűbb módszerek is arra, hogy egy tömb összes elemével dolgozzunk. A leggyakoribb módszer a ciklusnak nevezett programozási konstrukció használata.

A JavaScript beépített tömbfüggvényeinek használatával is dolgozhatunk egy tömb több elemével.

### Tömb tulajdonságai

A tömb tulajdonságainak elérésével hozzáférhetsz egy tömb bizonyos adataihoz. A JavaScriptben a tömbtulajdonságok elérésének módja a pontjelölés használata. A pontjelölés használatához írd be a tömb nevét, amelyet egy pont követ, majd a tulajdonság, amelyhez hozzá szeretnél férni. A lenti táblázat a JavaScript tömbök összes tulajdonságát felsorolja.

| Tulajdonság |                               Visszatérési érték                               |
|:-----------:|:------------------------------------------------------------------------------:|
|  prototype  |  Lehetővé teszi tulajdonságok és metódusok hozzáadását egy Array objektumhoz.  |
| constructor | Hivatkozás arra a függvényre, amely létrehozta az Array objektum prototípusát. |
|    length   |              Visszaadja vagy beállítja egy tömb elemeinek számát.              |

A leggyakrabban használt tömbtulajdonság a hossz. A `length` tulajdonságot már láthattad működés közben. Célja, hogy megadja a tömbben lévő elemek számát, akár definiált, akár nem definiált.
Például:

```js
var myArray = []; myArray[2000];
myArray.length; // returns 2001
```

A length tulajdonságot használhatod a tömb lerövidítéséhez is:

```js
myArray.length;// returns 2001 
myArray.length = 10; 
myArray.length; // returns 10
```

### Array módszerek

A JavaScript tömbmetódusok (_más néven tömbfüggvények_) praktikus módszereket biztosítanak a tömbök manipulálására és kezelésére. A lenti táblázat az összes tömbmetódus listáját mutatja, a műveletek vagy az általuk előállított értékek leírásával együtt.
|    Metódus    |                                          Leírás                                         |
|:-------------:|:---------------------------------------------------------------------------------------:|
|    concat()   |           Egyesíti a tömböket és visszaad egy tömböt az egyesített tömbökkel.           |
|  constructor  |              Visszaadja az Array objektum prototípusát létrehozó függvényt.             |
|  copyWithin() |     Tömbelemek másolása a tömbön belül, megadott pozíciókba és megadott pozíciókból.    |
|   entries()   |                  Visszaad egy kulcs/érték párost Array Iteration Object                 |
|    every()    |              Ellenőrzi, hogy egy tömb minden eleme megfelel-e egy tesztnek.             |
|     fill()    |                     Egy tömb elemeinek feltöltése statikus értékkel                     |
|    filter()   |     Létrehoz egy új tömböt egy tömb minden olyan elemével, amely átmegy egy teszten.    |
|     find()    |           Visszaadja egy tömb első elemének értékét, amely átment egy teszten.          |
|  findIndex()  |        Visszaadja egy tömb első olyan elemének indexét, amely átment egy teszten.       |
|   forEach()   |                      Minden egyes tömbelemhez meghív egy függvényt                      |
|     from()    |                             Tömböt hoz létre egy objektumból                            |
|   includes()  |                 Ellenőrzi, hogy egy tömb tartalmazza-e a megadott elemet                |
|   indexOf()   |                Keressen egy elemet a tömbben és adja vissza a pozícióját                |
|   isArray()   |                            Ellenőrzi, hogy az objektum tömb-e                           |
|     join()    |                 Összekapcsolja egy tömb összes elemét egy karakterlánccá                |
|     keys()    |   Visszaad egy Array Iteration objektumot, amely az eredeti tömb kulcsait tartalmazza.  |
| lastIndexOf() |          Keressen egy elemet a tömb végén kezdve, és adja vissza a pozícióját.          |
|     length    |                   Beállítja vagy visszaadja egy tömb elemeinek számát                   |
|     map()     | Létrehoz egy új tömböt egy függvény meghívásának eredményével minden egyes tömbelemhez. |
|     pop()     |             Eltávolítja egy tömb utolsó elemét, és visszaadja azt az elemet.            |
|   prototype   |       Lehetővé teszi tulajdonságok és metódusok hozzáadását egy Array objektumhoz.      |
|     push()    |         Új elemeket ad hozzá egy tömb végéhez, és visszaadja az új hosszúságot.         |
|    reduce()   |         Egy tömb értékeinek redukálása egyetlen értékre (balról jobbra haladva)         |
| reduceRight() |         Egy tömb értékeinek redukálása egyetlen értékre (jobbról balra haladva)         |
|   reverse()   |                       Megfordítja az elemek sorrendjét egy tömbben                      |
|    shift()    |              Eltávolítja egy tömb első elemét, és visszaadja azt az elemet.             |
|    slice()    |               Kiválasztja egy tömb egy részét, és visszaadja az új tömböt.              |
|     some()    |            Ellenőrzi, hogy egy tömb bármelyik eleme megfelel-e egy tesztnek.            |
|     sort()    |                               Egy tömb elemeinek rendezése                              |
|    splice()   |                        Elemek hozzáadása/eltávolítása egy tömbből                       |
|   toString()  |              Egy tömböt karakterlánccá alakít, és az eredményt visszaadja.              |
|   unshift()   |         Új elemeket ad hozzá egy tömb elejéhez, és visszaadja az új hosszúságot.        |
|   valueOf()   |                          Egy tömb primitív értékét adja vissza                          |


__Gyakran használt JavaScript tömb metódusok működés közben__

```html
<html>
  <head>
    <title>common array methods</title>
  </head>
  <body>
    <script>
      var animals = ["tiger", "bear"];
      var fruit = ["cantaloupe", "orange"];
      var dishes = ["plate", "bowl", "cup"];

      var fruitsAndAnimals = fruit.concat(animals);
      document.write(fruitsAndAnimals + " < br > ");

      var whereIsTheTiger = animals.indexof("tiger",
      document.write("The tiger has and index number of: " + whereIsTheTiger + " < br > ")); 
    </script>
  </body>
</html>
```
