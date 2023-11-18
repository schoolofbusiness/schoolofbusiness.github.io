# 3. tananyag 

## Munka változókkal

Ebben a fejezetben
- Változók létrehozása és használata
- A változók hatókörének megértése
- A JavaScript adattípusainak ismerete
- A változók elnevezése
- Beépített függvények használata a változókkal való munkavégzéshez

Ebben a fejezetben megtudhatjuk, hogyan hozhatunk létre változókat, hogyan tölthetjük fel őket értékekkel, hogyan használhatjuk függvényeket annak megállapítására, hogy milyen típusú adatok vannak a változókban, hogyan konvertálhatunk különböző adattípusok között, és hogyan manipulálhatjuk a változókban lévő adatokat.


### A változók létrehozása

A változók reprezentatív nevek egy programban. Ahogyan az __x__ jelképezhet valamilyen még ismeretlen értéket az algebrában, vagy az __x__ jelölheti a kalózok térképén a kincs elásásának helyét, a változókat a programozásban arra használják, hogy valami mást jelképezzenek.

A változókra úgy is gondolhatunk, mint tárolókra, amelyek adatokat tartalmaznak. Ezeknek a tárolóknak nevet adhatsz, és később a változó nevének használatával előhívhatod és megváltoztathatod a változóban lévő adatokat.

Változók nélkül minden számítógépes programnak csak egy célja lenne. Az alábbi egysoros program például nem használ változókat:

```js
alert(3 + 7);
```

Feladata, hogy összeadja a 3 és a 7 számokat, és az eredményt kiírja egy felugró böngészőablakban.

A programnak azonban nincs sok haszna (hacsak nem kell rendszeresen felidézni a 3 és a 7 összegét). A változók segítségével olyan általános célú programot készíthetünk, amely bármely két számot össze tud adni, és ki tudja nyomtatni az eredményt, mint a következő példa:


```js
var firstNumber = 3;
var secondNumber = 7;
var total = Number(firstNumber) + Number(secondNumber); 
alert (total);
```

Egy lépéssel továbblépve ezt a programot kibővíthetjük úgy, hogy két számot kérdezünk meg a felhasználótól, majd összeadjuk őket, mint a következő példában:

```js
var firstNumber = prompt("Enter the first number");
var secondNumber = prompt("Enter the second number"); 
var total = Number(firstNumber) + Number(secondNumber); 
alert (total);
```


Próbáld ki ezt a programot magad! Kövesd az alábbi lépéseket:

1. Nyisd meg a kódszerkesztőt, és hozz létre egy alap HTML-sablont.
2. A <body> és </body> közé illessz be egy nyitó `<script>` taget és egy záró `</script>` taget.
3. A nyitó és a záró script tagek közé írja be az előző példakódot.

A dokumentumunknak most már így kell kinéznie:

```html
<html>
  <head></head>
  <body>
    <script>
      var firstNumber = prompt("Enter the first number");
      var secondNumber = prompt("Enter the second number");
      var total = Number(firstNumber) + Number(secondNumber);
      alert(total);
    </script>
  </body>
</html>
```

4. Mentsük el az új HTML-dokumentumot `addtwo.html` néven.
5. Nyissuk meg a HTML-dokumentumot a webböngészőben.
6. Írjuk be az első számot. Miután megadtuk ezt a számot, egy második számot fog kérni.
7. Adjuk meg a második számot. Miután megadtuk a programnak a második számot, a képernyőn megjelenik a két szám összeadásának eredménye.


### Változók deklarálása

A változó deklarálása az a szakkifejezés, amellyel azt a folyamatot írjuk le, amikor először létrehozunk egy változót a programban. Ezt inicializálásnak is nevezhetjük. A változó létrehozása, a változó deklarálása és a változó inicializálása mind ugyanazt jelenti.


A JavaScriptben a változókat kétféleképpen lehet létrehozni:


- A var kulcsszó használata:

  ```js
  var myName;
  ```

- A var kulcsszóval létrehozott változó kezdeti értéke `undefined` lesz, hacsak nem adunk neki értéket a létrehozásakor, mint például:

  ```js
  var myName = "Chris";
  ```

- var kulcsszó nélkül:

  ```js
  myName = "Chris";
  ```



:::warning Mikor nem egyenlő az egyenlő?

Ez az értelmezés azonban nem helyes a programozásban.
Az angol nyelvben gyakori és helyes, hogy a `=` -t tartalmazó mondatokat úgy olvassuk, hogy __var myName egyenlő Chris__. Ez az értelmezés azonban nem helyes a programozásban.

Vegyük például a következőt,

```js
var myName = "Chris";
```

Az előző példában a változó neve (`myName`) és az érték (`"Chris"`) közötti egyenlőségjelnek látszó karakter pontosan úgy nézhet ki, mint egy egyenlőségjel, és még a billentyűzeten általában egyenlőségjelnek nevezett billentyűvel is előállítható. Azonban a programozásban az egyenlőségjelet valójában hozzárendelési operátornak hívják.

A hozzárendelési operátor a tőle balra lévő dolgot egyenlővé teszi a tőle jobbra lévővel, például így:
`var myName = "Chris";`.

Az `Equals` összehasonlítja a bal oldali értéket a jobb oldali értékkel, és megállapítja, hogy azok megegyeznek-e vagy sem. Az egyenlőséget JavaScriptben `===`-ként írjuk.
:::

Ha `var` kulcsszó nélkül hozunk létre egy változót, az globális változóvá válik. Annak megértéséhez, hogy mit jelent a globális változó, lásd a következő szakaszt.

Figyeld meg az előző példákban a jobb oldali érték körüli idézőjeleket. Ezek az idézőjelek azt jelzik, hogy az értéket szövegként kell kezelni, nem pedig számként. Az idézőjelek használatának módjáról és idejéről bővebben a fejezet adattípusokról szóló részében olvashatunk majd.

### A globális és helyi scope megértése

Az, hogy hogyan és hol deklarál egy változót, meghatározza, hogy a program hogyan és hol használhatja azt a változót. Ezt a fogalmat nevezzük a változó scope-jának. A JavaScript kétféle scope-pal rendelkezik:

- A globális változók bárhol használhatók a programon belül.
- A helyi (függvény) változók olyan változók, amelyeket egy programon belül egy védett részen belül hozunk létre, amelyet függvénynek nevezünk.



:::warning A hiányzó var tragikus története

Valójában soha nincs okunk arra, hogy a `var`-kulcsszó használata nélkül hozzunk létre egy `var`-t, és ha így teszünk, az problémákat okozhat. Ha kihagyod a `var` kulcsszót, úgy néz ki, mintha elfelejtetted volna, ezért ne tedd!

A következő példa azt mutatja, hogy a `var` kulcsszó használatának elmulasztása milyen problémákat és zavart okozhat. Emellett egy fejlettebb programozási eszköz, az úgynevezett függvény használatát is bemutatja, amellyel egy későbbi fejezetben foglalkozunk részletesebben. Röviden, a függvények segítségével kisebb programokat helyezhetünk el a programjainkon belül.

Ebben az első példában a programozó egy `movie` nevű változót szeretne, amely globális, és egy ugyanilyen nevű, csak a `showBadMovie` nevű függvényen belül érvényes változót. Ez egy teljesen normális dolog, és normális körülmények között a függvényen belüli `movie` változó nem befolyásolná a globális változót. Ha azonban elfelejtjük használni a `var` kulcsszót a `movie` változó függvényen belüli deklarálásakor, csúnya dolgok történnek.

```js
var movie = "The Godfather";

function showGoodMovie() {
	alert(movie + " is a good movie!");
}

function showBadMovie() {
	movie = "Speed 2: Cruise Control";
	alert(movie + " is a bad movie!");
}
```

Vegyük észre, hogy a `var` kulcsszó hiányzik a `movie` változó előtt a `showBadMovie()` függvényben. A JavaScript feltételezi, hogy a globális `movie` változót akarja felülírni, ahelyett, hogy egy helyi függvényváltozót hozna létre. Az eredmény egyenesen katasztrofális!

```js
showGoodMovie(); // pops up "The Godfather is a good movie!"
showBadMovie(); // pops up "Speed 2: Cruise Control is a bad movie!"
/* Oh no! The global variable is now Speed 2: Cruise Control, not the good movie name anymore! */
showGoodMovie(); // pops up "Speed 2: Cruise Control is a good movie!"
```
:::

:::tip Javaslat
Általában a helyi változók használata előnyösebb, mint a globális változóké, mert a változók hatókörének korlátozása csökkenti annak esélyét, hogy véletlenül felülírja egy változó értékét egy másik, azonos nevű változóval.
:::

A globális változók használata olyan problémákat okozhat a programban, amelyeket nehéz lehet megtalálni és kijavítani. Javaslom, hogy soha ne hozz létre változókat a var kulcsszó használata nélkül. Ha mégis szükséged van globális változóra, akkor a var kulcsszó használatával is létrehozhatod őket, és azt javaslom, hogy így tedd.

### Változók elnevezése

A változók nevei a következő karakterekkel kezdődhetnek:

- Kicsi vagy nagybetű
- Aláhúzás (`_`)
- Dollárjel (`$`)

Bár használhatsz aláhúzást vagy dollárjelet is egy változó írásához, a legjobb, ha betűvel kezdődik. A nem várt karakterek miatt a kód gyakran zavarosnak és nehezen olvashatónak tűnhet, különösen, ha még nem ismered a JavaScript-kódolást.

Az első karakter után bármilyen betűt vagy számot használhatsz a változó nevében, és a név hossza is tetszőleges lehet. A JavaScript-változók nem tartalmazhatnak szóközöket, matematikai operátorokat vagy írásjeleket (az aláhúzáson kívül).

:::warning Ne feledd, hogy
A JavaScript a nagy- és kisbetűket megkülönbözteti. A `myname` nevű változó nem ugyanaz a változó, mint a `Myname` vagy a `myName`.
:::

A változók nevei tulajdonképpen azonosítók; a legjobb, amit tehetsz, ha valami pontos és releváns nevet adsz a változónak. Ez a névadási konvenció néha nagyon hosszú neveket eredményezhet, de általában egy hosszabb név, amely pontosan jellemzi a változót, hasznosabb, mint egy rövidebb, homályos név.

:::tip Milyen hosszúak lehetnek a változónevek?
Természetesen vannak határai annak, hogy milyen hosszúak lehetnek a változónevek anélkül, hogy megnehezítenénk az életünket. Ha 20 karaktert kell használnia a változó pontos leírásához, csak rajta! De ha olyan változóneveket hoz létre, mint a `nameOfPersonWhoJustFilledOutTheFormOnMyWebsite`, akkor érdemes megnéznie, hogy nem tudná-e egyszerűsíteni az életét (és mindenki másét is, akinek a kódjával dolgoznia kell), ha lerövidítené valami olyanra, mint a `personName`.
:::

:::warning Irányelvek a jó változónevek létrehozásához

Bár a JavaScript nagy szabadságot ad a változók elnevezésében, a legjobb, ha még a programozás megkezdése előtt eldöntesz magadnak néhány alapvető szabályt. Például kis- vagy nagybetűvel kezdje a változó nevét? Aláhúzást használsz a változó nevén belül több szó között, vagy `camelCase`-t használsz? Ahogy a kódod egyre összetettebbé válik, úgy válik nyilvánvalóvá a helyes elnevezés fontossága.

Szerencsére nem vagy egyedül, amikor a stílusodról döntesz. Van néhány bevált gyakorlat, amelyben sok profi JavaScript-programozó egyetért, és amelyet a változók elnevezésekor alkalmaz:

- Ne használj túl rövid neveket! Az egyszerű egybetűs nevek vagy értelmetlen nevek nem jó választás a változók elnevezésénél.
- Használj többszavas neveket, hogy minél pontosabbak legyenek.
- A többszavas neveknél mindig a bal oldali tárgyeset kerüljön a bal oldalra, mint a `var greenPython;` esetében.

Válassz egy stílust a több szóból álló nevekhez, és legyen következetes. A szavak összekapcsolásának két módja van: `camelCase` és `under_score`. A JavaScript egy rugalmas nyelv, és bármelyik módszert használhatja, bár a `camelCase` általában az elterjedtebb.

Egyes szavak nem használhatók változónévként. Az alábbiakban felsoroljuk azokat a fenntartott szavakat, amelyek nem használhatók JavaScript-változók, függvények, módszerek, cikluscímkék vagy objektumok neveként.

| abstract   | boolean      | break      | byte    | case      |
|------------|--------------|------------|---------|-----------|
| catch      | char         | class      | const   | continue  |
| debugger   | default      | delete     | do      | double    |
| else       | enum         | export     | extends | false     |
| final      | finally      | float      | for     | function  |
| goto       | if           | implements | import  | in        |
| instanceof | int          | interface  | long    | native    |
| new        | null         | package    | private | protected |
| public     | return       | short      | static  | super     |
| switch     | synchronized | this       | throw   | throws    |
| transient  | true         | try        | typeof  | var       |
| void       | volatile     | while      | with    |           |

:::

### Konstansok létrehozása a const kulcsszó használatával

Előfordulhat, hogy a programnak szüksége van olyan változókra, amelyeket nem lehet megváltoztatni. Ezekben az esetekben a `const` kulcsszóval deklarálhatja a változót. Például:


```js
const heightOfTheEmpireStateBuilding = 1454; 
const speedOfLight = 299792458;
const numberOfProblems = 99;
const meanNumberofBooksReadIn2014 = 12;
```

A konstansokra ugyanazok a szabályok vonatkoznak, mint a többi változóra, de ha egyszer létrehoztál egy konstanst, az értéke nem változtatható meg az élettartama alatt (ami addig tart, amíg a szkript fut).

### Az adattípusok kezelése

Egy változó adattípusa az a fajta adat, amelyet a változó tartalmazhat, és milyen műveletek végezhetők a változó értékével. A 10-es szám, amelyet egy mondatban használunk, különbözik például az egyenletben használt 10-es számtól. Az adattípusok segítségével a JavaScript különbséget tesz a szavaknak szánt értékek és a matematikai kifejezésekként kezelendő értékek között.

Ha elgondolkodsz az összes olyan adattípuson, amellyel nap mint nap dolgozik - kördiagramok, receptek, novellák, újságcikkek és így tovább -, láthatod, milyen sok lehetőség van arra, hogy a dolgok nagyon bonyolulttá váljanak, ha adatokról van szó. A JavaScript nagylelkű alkotói úgy döntöttek, hogy nagyon egyszerűvé teszik a dolgokat az Ön számára. Mindössze öt alapvető adattípussal rendelkezik.

Ráadásul a JavaScript egy úgynevezett lazán típusos nyelv. A laza típus azt jelenti, hogy a JavaScriptnek nem kell megmondania, sőt, nem is kell tudnia, hogy egy létrehozott változó egy szót, egy bekezdést, egy számot vagy más típusú adatot fog tartalmazni.

A laza tipizálás nem azt jelenti, hogy a JavaScript nem tesz különbséget szavak és számok között. A JavaScript egyszerűen csak barátságosan kezeli ezt a kérdést, és nagyrészt a színfalak mögött végzi el a munkát, hogy kitalálja, milyen típusú adatokat tárol a változókban.

:::tip Tudnivaló
A _JavaScript_ öt alapvető vagy primitív adattípust ismer.
A _C++_ programozási nyelv legalább 12 különböző adattípussal rendelkezik!
:::

### Szám adattípus

A számok a JavaScriptben 64 bites, lebegőpontos értékként tárolódnak. Ez magyarul azt jelenti, hogy a számok 5e-324-től (_ez -5, amit 324 nulla követ_) 1,79769731348623157e+308-ig terjedhetnek (_a tizedesjegyet 308 ponttal jobbra kell tolni, hogy ezt az óriási számot lássuk_). Bármelyik szám lehet tizedesvesszővel vagy anélkül. A legtöbb programozási nyelvtől eltérően a JavaScriptben nincsenek külön adattípusok az egész számok (_pozitív vagy negatív számok törtrész nélkül_) és a lebegőpontok (_tizedesjegyek_) számára.

:::tip Tudnivaló
Mekkora a legnagyobb szám, amit a JavaScript használhat? Itt van, tudományos jelölés nélkül leírva:

```txt
17976931348623157000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000
```
:::

Amikor egy számváltozót deklarálsz, a következő elemek mindegyikéből állítod össze:
- A `var` kulcsszó
- A változónak adandó név
- A hozzárendelési operátor
- Egy szám (vagy akár egy egyenlet, amely egy számra változik 
- Egy pontosvessző.

Íme néhány példa az érvényes számváltozók deklarációjára:

```js
var numberOfDucks = 4;

var populationOfSpain = 47200000;

var howManyTacos = 8;
```

### Számfüggvények

A JavaScript tartalmaz egy beépített `Number` függvényt az értékek számokká alakítására. A `Number` függvény használatához egyszerűen tedd a `Number` függvény után zárójelek közé azt az értéket (_vagy az értéket tartalmazó változót_), amelyet számmá szeretnél alakítani.

A `Number` függvény négyféle kimenetet állít elő:

- A szöveges karakterláncokként formázott számok számokká alakulnak át amelyek számításokhoz használhatók, például így:
  ```js
  Number("42") // returns the number 42
  ```
- A számokká nem alakítható szöveges karakterláncok NaN értéket adnak vissza,
például így:
  ```js
  Number("eggs") // returns NaN
  ```
- A Boolean érték true az 1 számot adja vissza, mint például:
  ```js
  Number(true) // returns 1
  ```
- A Boolean érték false a 0 számot adja vissza, például így:
  ```js
  Number(false) // returns 0
  ```

### parseInt() függvény

A JavaScript számára minden szám valójában lebegőpontos szám. A `parseInt()` függvénnyel azonban megmondhatjuk a JavaScriptnek, hogy csak a szám nem törtrészét (__az egész számot__) vegye figyelembe, a tizedesvessző utáni részeket pedig hagyja figyelmen kívül.

```js
parseInt(100.33); // returns 100
```

### parseFloat() függvény

A `parseFloat()` funkcióval kifejezetten megmondhatod a JavaScriptnek, hogy egy számot lebegő számként kezeljen. Vagy akár arra is használhatja, hogy egy karakterláncot számmá alakítson. Például:

```js
parseFloat("10"); // returns 10 
parseFloat(100.00); //returns 100.00 
parseFloat("10"); //returns 10
```

### String adattípus

A karakterláncok tetszőleges karakterekből állhatnak:

- betű
- szám
- írásjelek (például vesszők és pontok)
- Speciális karakterek, amelyek a backslash és a karakter után írt karakterrel írhatók ki

Néhány karakter, például az idézőjelek, speciális jelentéssel bírnak a JavaScriptben, vagy speciális karakterkombinációt igényelnek, például tabulátor vagy új sor, hogy egy karakterlánc belsejében jelenjenek meg. Ezeket a speciális karaktereket hívjuk. A lenti táblázat felsorolja a JavaScript karakterláncokon belül használható speciális karaktereket.

| Kód |      Kimenet     |
|:---:|:----------------:|
|  \' | szimpla idézőjel |
|  \" |     idézőjel     |
| \\\ |     backslash    |
|  \n |      új sor      |
|  \r |     soremelés    |
|  \t |     tabulátor    |
|  \b |     backspace    |
|  \f |     form feed    |

Egy karakterláncváltozót úgy hozhatunk létre, hogy szimpla vagy dupla idézőjelek közé zárjuk, például így:

```js
var myString = "Hi, I'm a string.";
```

Tulajdonképpen mindegy, hogy szimpla vagy dupla idézőjeleket használsz, amíg a karakterláncot körülvevő kezdő és záró idézőjelek megegyeznek.

Ha a karakterláncot szimpla idézőjelekkel veszi körül, akkor a karakterláncon belül gond nélkül használhat dupla idézőjeleket. Ugyanez vonatkozik arra is, ha a karakterláncot kettős idézőjelekkel veszi körül; a karakterláncon belül gond nélkül használhatsz szimpla idézőjeleket.

Ha azonban létrehozol egy karakterláncot, és azt egy idézőjel-típussal veszi körül, nem használhatod ezt az idézőjel-típust a karakterláncon belül, különben a JavaScript azt fogja hinni, hogy a karakterlánc végét akarod befejezni, és hibát fog generálni.

A megoldás arra a problémára, hogy az ilyen típusú idézőjelekkel körülvett karakterláncok közé nem lehet idézőjeleket tenni, az, hogy az idézőjelek elé egy `\`-t teszünk. Az idézőjelek előtti backslash hozzáadását az idézőjelek kikerülésének nevezzük.


### String funkciók

A JavaScript számos hasznos függvényt tartalmaz a karakterláncokkal való munkához és azok átalakításához. Íme a leggyakrabban használt beépített karakterláncfüggvények listája:

- A `charAt()` a karaktert egy megadott pozícióban jeleníti meg. Vegyük észre, hogy a karakterek számolása 0-val kezdődik:
  ```js
  var watzThisString = 'JavaScript is Fun!';
  console.log(watzThisString.charAt(3));
  // returns a
  ```
- A `concat()` egy vagy több karakterláncot kombinál, és az így kapott karakterláncot adja vissza:
  ```js
  var watzThisString = 'JavaScript is Fun!';
  console.log(watzThisString.concat(' We love JavaScript!'));
  // returns JavaScript is Fun! We love JavaScript!
  ```
- Az `indexOf()` a keresett karakter vagy részlánc első előfordulásának pozícióját adja vissza a karakterláncon belül:
  ```js
  var watzThisString = 'JavaScript is Fun!';
  console.log(watzThisString.indexOf('Fun'); 
  // returns 14
  ```
- A `split()` a karakterláncokat részláncok tömbjére osztja:
  ```js
  var watzThisString = 'JavaScript is Fun!';
  console.log(watzThisString.split('F')); 
  // returns ["JavaScript is ", "un!"]
  ```
- A `substr()` egy karakterláncnak a "start"-tól a megadott hosszúságig terjedő részét vonja ki:
  ```js
  var watzThisString = 'JavaScript is Fun!';
  console.log(watzThisString.substr(2,5)); 
  // returns vaScr
  ```
- A `substring()` kinyeri a karaktereket egy karakterláncban két megadott pozíció között:
  ```js
  var watzThisString = 'JavaScript is Fun!';
  console.log (watzThisString.substring(2,5));
  // returns Vas
  ```
- A `toLowerCase()` az összes karaktert kisbetűvé alakítja a karakterláncon:
  ```js
  var watzThisString = 'JavaScript is Fun!';
  console.log(watzThisString.toLowerCase()); 
  // returns javascript is fun!
  ```
- `toUpperCase()` az összes karaktert nagybetűvé alakítja a karakterláncon:
  ```js
  var watzThisString = 'JavaScript is Fun!';
  console.log(watzThisString.toUpperCase()); 
  // returns JAVASCRIPT IS FUN!
  ```

### Boolean adattípus

A Boolean változók két lehetséges érték egyikét tárolják: igaz vagy hamis.

A Boole-féle kifejezés George Boole (1815-1864) után kapta a nevét, aki megalkotta a logika algebrai rendszerét. Mivel egy személyről kapta a nevét, általában nagy kezdőbetűvel írjuk.

A Boolean változókat gyakran használják az összehasonlítások eredményeinek tárolására.
A `Boolean()` függvény segítségével megtudhatod egy összehasonlítás Boolean-értékét, vagy bármilyen értéket Boolean-értékké alakíthatsz a JavaScriptben. Például:

```js
var isItGreater = Boolean (3 > 20); 
alert (isItGreater); // returns false
var areTheySame = Boolean ("tiger" === "Tiger"); 
alert (areTheySame); // returns false
```

A JavaScriptben egy érték `Boolean()` függvény segítségével Boolean értékké alakításának eredménye az értéktől függ:

1. JavaScriptben a következő értékek mindig egy Boolean false értéket adnak:

- NaN
- undefined
- 0 (numeric value zero)
- -0
- "" (empty string)
- false

2. Bármi, ami nem az előző értékek egyike, Boolean `true` értéket ad. Például:

- 74
- "Eva" 
- "10" 
- "NaN"


A Boolean értékeket elsősorban feltételes kifejezéseknél használják. A következő program létrehoz egy Boole-változót, majd értékét egy `if/then` utasítással teszteli.

```js
var b = true;
if (b == true) {
    alert("It is true!");
} else {
    alert("It is false.");
}
```

### NaN adattípus

A NaN a Not a Number (Nem szám) rövidítése. Ez az az eredmény, amelyet akkor kapunk, ha megpróbálunk egy karakterlánccal matematikai műveletet végezni, vagy ha egy számítás sikertelen vagy nem végezhető el. Például egy negatív szám négyzetgyökét nem lehet kiszámítani. Ha megpróbáljuk megtenni, NaN eredményt kapunk.

Gyakoribb eset, amely NaN-t eredményez, ha olyan karakterláncokkal próbálunk matematikai műveleteket végezni, amelyeket nem lehet számokká konvertálni.

### undefined adattípus

Még akkor is, ha JavaScriptben létrehoz egy változót, és nem ad neki külön értéket, akkor is van egy alapértelmezett értéke. Ez az érték az `undefined` (meghatározatlan).