# 2. tananyag 

## Az első JavaScript program megírása

:::tip Ebben az anyagban:

- A fejlesztőkörnyezet kialakítása
- A JavaScript kód megismerése
- Egy egyszerű JavaScript program megírása
- A kód kommentelése
:::

A JavaScript programozást nem nehéz megérteni. Ebben a fejezetben végigmegyünk a számítógép JavaScript-írásra való beállításának folyamatán. Megírjuk az első JavaScript-programunkat és megismerkedünk az alapvető szintaxissal, ami mindannak a hátterében áll, amit a jövőben programozóként a JavaScript segítségével fogunk csinálni.

### A fejlesztői környezet beállítása

Fontos, hogy minden eszközöd a feltelepítésre kerüljön, mielőtt elkezdenénk írni az első JavaScript programunkat. Javasolom azonban, hogy mégis olvasd el ezt az anyagot is, hogy megtud, miért ezeket az eszközöket választottam, és hogy saját magad dönthess arról, hogy melyeket használod.

### A Chrome letöltése és telepítése

A webböngésző, amelyet a JavaScripttel való munka során előnyben részesítünk, a Google Chrome. Ha más böngészőt szeretnél használni, az sem baj, természetesen. Minden böngésző helyesen futtatja a JavaScriptet. Az anyagban található utasítások egy része azonban a Google Chrome-ra lesz jellemző, ezért ezt javasoljuk. Azért választottam a Google Chrome-ot, mert kiváló eszközöket kínál a JavaScript-programozók munkájának megkönnyítésére, és ez a legszélesebb körben használt böngésző az interneten. (Igen, még az Internet Explorernél is népszerűbb.)

Ha nincs telepítve a Chrome, akkor erről az oldalról letöltheted: www.google.com/chrome .

:::tip Most már rendelkezel egy felturbózott JavaScript motorral!

A Google Chrome a Google V8 JavaScript-motorját használja a JavaScript-kód elemzésére, fordítására és futtatására. Attól függően, hogy kinek a benchmarking-tesztjének hiszünk, a Chrome a leggyorsabb a JavaScript futtatására a böngészőben. A nagy böngészőgyártók folyamatosan versenyeznek, hogy felülmúlják egymást. Túlságosan nem számít, hogy valójában ki a leggyorsabb egy adott pillanatban; a verseny az elmúlt években ugrásszerűen növelte minden böngésző JavaScript-motorjának sebességét.

Ha tényleges összehasonlításokat szeretnénk látni arról, hogy a különböző böngészők hogyan teljesítenek a JavaScript teljesítményteszteken, a http://arewefastyet.com oldalon megtehetjük. Ez az oldal, amelyet a Mozilla, a Firefox böngésző fejlesztője tart fenn, automatikusan ellenőrzi és grafikusan ábrázolja a legnépszerűbb böngészők JavaScript-teljesítményét, és naponta többször frissül.
:::

### Kódszerkesztő letöltése és telepítése

A forráskód-szerkesztő, közismert nevén kódszerkesztő egy olyan szövegszerkesztő, amely hozzáadott funkciókkal segíti a programozási kód írását és szerkesztését. Az általunk használt a Visual Studio Code.

Sokféle kódszerkesztő közül választhatsz, így ha már van olyan, amit szívesen használsz és jól kiismertél, akkor használd azt! A kódszerkesztő egy személyes választás, és sokan úgy vélik, hogy van egy adott szerkesztő amivel egyszerűen jobban szeretnek dolgozni.

Mi azért használjuk a Visual Studio Code-ot, mert népszerű a JavaScript-programozók körében, és egyszerű felhasználói felületet biztosít, valamint számos bővítményt biztosít, ahogy egyre több programozási tapasztalatot szerez.

Az első Visual Studio Code projektfájl elkészítéséhez kövesse az alábbi lépéseket:

1. Válasszuk ki a Fájl -> Mentés másként lehetőséget.
Megjelenik a Mentés ablak, és megjelenik az alapértelmezett mentési hely.
2. Hozzunk létre egy új mappát, és nevezzük el a mappát tetszőlegesen.
3. A Mentés másként szövegmezőben adjunk egy nevet az első fájlnak, majd kattintsunk a Mentés gombra.
Az új fájlnév megjelenik az oldalsávban, és a megnyitott lap fejlécén is.
4. Válasszuk a Fájl -> Save As parancsot, és mentsük a létrehozott mappába.
A Visual Studio Code projektfájlokban tárolja az információkat arról, hogy milyen fájlok és mappák tartoznak egy projekthez. A projektmappa létrehozása lehetővé teszi, hogy a programban lévő különböző típusú fájlokat jobban rendszerezze.
5. Válaszd a Open Folder-t -> Mappa kiválasztása majd megnyitás. Az oldalsávban megjelenik egy új, összecsukható lista a mappa nevével, valamint annak tartalma (beleértve a projektfájlt és egyéb kiegészítőket) alatta lesz felsorolva.

### Egy JavaScriptet tartalmazó HTML mintafájl

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello, HTML!</title>
    <script>
      function countToTen() {
        var count = 0;
        while (count < 10) {
          count++;
          document.getElementById("theCount").innerHTML += count + " < br > ";
        }
      }
    </script>
  </head>
  <body onload="countToTen();">
    <h1>Let's Count to 10 with JavaScript!</h1>
    <p id="theCount"></p>
  </body>
</html>
```

A böngészőben hasonlóan kell kinéznie mint lent. Ha nem így néz ki, nagyon alaposan ellenőrizzd a kódód - valószínűleg van valahol egy kis elírás. Ne felejtsd el elmenteni a fájlodat, miután bármilyen változtatást végeztél!

```txt
Let's Count to 10 with JavaScript!

1
2
3
4
5
6
7
8
9
10
```

### JavaScript kód olvasása

Mielőtt belekezdenél a JavaScript-programok írásába, tisztában kell lenned a JavaScript néhány szabályával:

- A JavaScript a nagy- és kisbetűket megkülönbözteti. A JavaScript számára a `pants` és a `Pants` szavak teljesen különbözőek.

- A JavaScript figyelmen kívül hagyja a szóközöket. A szóközök, tabulátorok és sortörések - minden olyan karakter, amely _"nem rendelkezik"_ megjelenítéssel. Amikor JavaScript-kódot írsz, nem számít, hogy egy szóközt, két szóközt, tabulátort vagy akár sortörést használsz-e (a legtöbb esetben) a kódon belül. Az egyetlen kivétel az, amikor olyan szöveget írnánk ki, amelyet a JavaScript meg akar jeleníteni a képernyőn. Ebben az esetben az általunk használt szóközök megjelennek.

- Vigyázzunk a lefoglalt szavakkal. A JavaScriptnek van egy listája olyan szavakról, amelyek különleges jelentéssel bírnak a nyelvben. Ezeket a szavakat később soroljuk fel. Egyelőre csak arra figyeljünk, hogy néhány szó, például a __function__, a __while__, a __break__ és a __with__ speciális jelentéssel bír.

- A JavaScript szereti a pontosvesszőket: A JavaScript-kód utasításokból áll. A parancsokra úgy gondolhatsz, mint a mondatokra. Ezek a JavaScript-programok alapvető építőkövei, ugyanúgy, ahogyan a mondatok a bekezdések építőkövei. A JavaScriptben az utasítások pontosvesszővel végződnek.

Ha nem használsz pontosvesszőt az utasítás végén, akkor a JavaScript _"helyetted teszi oda"_. Ez azonban váratlan eredményekhez vezethet, ezért a legjobb gyakorlatnak számít, hogy az utasításokat mindig pontosvesszővel fejezzük be.

### JavaScript futtatása a böngészőablakban

Bár sokféle környezetben találkozhatunk vele, a legáltalánosabban a webböngészőkben fut a JavaScript. A be- és kimenetek vezérlése, a weboldalak manipulálása, a böngésző olyan gyakori eseményeinek kezelése, mint a kattintás és a görgetés, valamint a webböngészők különböző funkcióinak vezérlése - erre született a JavaScript!

A JavaScript futtatásához a webböngészőben három lehetőség áll rendelkezésre:

- Közvetlenül egy HTML-ben el helyezve
- Egy nyitó és egy záró script tag közé helyezve
- Külön fájlba el helyezve, és meghívva a HTML-dokumentumba.

Mindhárom technika kombinációját használhatjuk egy weboldalon belül. Fontos azonban, hogy tudd, mikor kell használni az egyes technikákat, amelyet több gyakorlással fogsz megtanulni.

### JavaScript használata HTML-ben

A HTML számos speciális attribútummal rendelkezik, amelyeket arra terveztek, hogy JavaScriptet aktiváljanak, amikor valami történik a böngészőben, vagy amikor a felhasználó csinál valamit. Íme egy példa egy HTML-gombra, amelynek eseményattribútuma az egérkattintási eseményekre reagál:


```html
<button id="bigButton" onclick="alert('Hello World!');">Click Here</button>
```

Ebben az esetben, amikor a felhasználó rákattint a HTML-elem által létrehozott gombra, egy felugró ablak jelenik meg a __"Hello World!"__ felirattal.

A HTML több mint 70 különböző eseményattribútummal rendelkezik. A lenti táblázat a leggyakrabban használtakat mutatja be.

|  Attribútum |                                                              Leírás                                                              |
|:-----------:|:--------------------------------------------------------------------------------------------------------------------------------:|
|    onload   |                                 Lefuttatja a szkriptet, miután az oldalak betöltése befejeződött.                                |
|   onfocus   |                        A szkript futtatása, ha az elem fókuszba kerül (például ha egy szövegdoboz aktív).                        |
|    onblur   | A szkript futtatása, amikor az elem elveszíti a fókuszt (például amikor a felhasználó egy űrlapon egy új szövegdobozra kattint). |
|   onchange  |                                     A szkript futtatása, amikor egy elem értéke megváltozik.                                     |
|   onselect  |                                      A szkript futtatása, amikor a szöveg elküldésre került.                                     |
|   onsubmit  |                                        A szkript futtatása, amikor egy űrlapot elküldtek.                                        |
|  onkeydown  |                                 A szkript futtatása, amikor a felhasználó lenyom egy billentyűt.                                 |
|  onkeypress |                                 A szkript futtatása, amikor a felhasználó megnyom egy billentyűt.                                |
|   onkeyup   |                                A szkript futtatása, amikor a felhasználó felenged egy billentyűt.                                |
|   onclick   |                            A szkript futtatása, amikor a felhasználó az egérrel rákattint egy elemre.                            |
|    ondrag   |                                         A szkript futtatása, amikor egy elemet elhúzunk.                                         |
|    ondrop   |                                   A szkript futtatása, amikor egy megfogott elemet engedünk el.                                  |
| onmouseover |                         A szkript futtatása, amikor a felhasználó az egérmutatót egy elem fölé mozgatja.                         |


Bár könnyen használhatóak, az eseményattribútumok használata sok JavaScript-programozó szerint nem éppen ideális gyakorlat. Azért mutatom be őket, mert széles körben használják és könnyen megtanulhatók. Egyelőre azonban csak azzal kell tisztában lennünk, hogy van jobb módja is az eseményekre reagáló JavaScript-kód írásának, mint az eseményattribútumok használata. 

### JavaScript használata egy script elemben

A HTML script elem lehetővé teszi JavaScript beágyazását egy HTML-dokumentumba. A script elemeket gyakran a head elemen belül helyezik el, sőt, ezt az elhelyezést gyakran követelményként fogalmazták meg. Manapság azonban a script-elemeket a fejelemben és a weboldalak törzsében is használják.

A szkriptelem formátuma nagyon egyszerű:

```js
<script>
(insert your JavaScript here)
</script>
```

A fentebb már láthattunk egy példát az ilyen típusú szkriptbeágyazásra. A lenti példában mutatunk egy példát ahol a szkript elemet a body elem aljára helyezzük.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello, HTML!</title>
  </head>
  <body>
    <h1>Let's Count to 10 with JavaScript!</h1>
    <p id="theCount"></p>
    <script>
      var count = 0;
      while (count < 10) {
        count++;
        document.getElementById("theCount").innerHTML += count + " < br > ";
      }
    </script>
  </body>
</html>
```

### Szkript elhelyezés és JavaScript végrehajtás

A webböngészők általában betöltéskor töltik be és hajtják végre a szkripteket. A weboldalt a böngésző mindig felülről lefelé olvassa, ahogyan egy szöveges oldalt is olvasnánk. Néha érdemes megvárni, amíg a böngésző befejezi a weblap tartalmának betöltését, mielőtt a szkript lefutna. A legelső példánkban ezt a body elem onload eseményattribútumának használatával értük el. A végrehajtás késleltetésének másik gyakori módja, hogy a végrehajtandó kódot egyszerűen a kód végére helyezzük, ahogy azt legutoljára (e felett) láthattuk.

### A JavaScript korlátai a `<script>` elemekben

Bár sokkal gyakrabban használják és szélesebb körben elfogadott, mint az inline scripting (JavaScript beágyazása az eseményattribútumokba), a JavaScript script elembe való beágyazásának van néhány komoly korlátja.

A legnagyobb korlátozás az, hogy az így beágyazott szkriptek felhasználhatók csak azon a weblapon belül használhatók, ahol szerepelnek. Más szóval, ha a JavaScriptet egy script-elembe helyezi, akkor pontosan ezt a script-elemet kell bemásolnia és beillesztenie minden olyan oldalra, ahol az létezik. Egyes weboldalak több száz weboldalt tartalmaznak, így érthető, hogy ez hogyan válhat karbantartási rémálommá.


### Mikor használjunk JavaScriptet a `<script>` elemekben?

A JavaScript beágyazásának ez a módja is használható. Olyan JavaScript-darabok esetében, amelyek egyszerűen csak meghívnak más JavaScript-darabokat, és amelyek ritkán (vagy lehetőleg soha) nem változnak, elfogadható, sőt felgyorsíthatja a weboldalak betöltését és megjelenítését, mivel a webkiszolgálónak kevesebb kérést kell intéznie a kiszolgálóhoz.

Az egyoldalas alkalmazások, amelyek (mint a neve is mutatja) csak egyetlen HTML-oldalt tartalmaznak, szintén kiválóan alkalmazható az ilyen típusú beágyazások használatára, mivel mindig csak egyetlen helyen kell frissíteni a szkriptet.

Általános szabályként azonban arra kell törekedned, hogy minimalizáljuk a közvetlenül egy HTML-dokumentumba ágyazott JavaScript mennyiségét. Ennek eredménye a könnyebb karbantartás és a kód jobb szervezése lesz.

### Külső JavaScript fájlok bevonása

A harmadik és legnépszerűbb módja a JavaScript HTML-dokumentumokba való beépítésének a script elem `src` attribútumának használata.

Az `src` attribútummal ellátott script-elem pontosan úgy működik, mint egy script-elem a címkék közötti JavaScript-tel, azzal a különbséggel, hogy az `src` attribútum használata esetén a JavaScript egy különálló fájlból töltődik be a HTML-dokumentumba. Íme egy példa egy `src` attribútummal rendelkező script elemre:

```html
<script src="myScript.js"></script>
```

Ebben az esetben egy különálló, `myScript.js` nevű fájlt kell létrehoznunk, amely ugyanabban a mappában található, mint a HTML-dokumentum. 

A külső JavaScript fájlok használatának előnye, hogy használatukkal:

- A HTML-fájlok rendezettebbek és kevésbé zsúfoltak.
- Könnyebbé teszi fejlesztést, mivel a JavaScriptet csak egy helyen kell módosítani, ha valami megváltozik, vagy ha hibajavítást végezünk.

### .js fájl létrehozása

Egy külső JavaScript-fájl létrehozása hasonló egy HTML-fájl vagy más típusú fájl létrehozásához. A listában szereplő beágyazott JavaScriptet külső JavaScript-fájllal szeretnéd helyettesíteni, kövesd az alábbi lépéseket:

1. A Visual Studio Code-ba válaszd a Fájl➪Új fájl parancsot.
2. Másolj ki mindent részt a  `<script>` és `</script>` között a `MyFirstProgram.html` fájlból, és illeszd be az új .js fileba. Vedd észre, hogy a külső JavaScript fájlok nem tartalmaznak `<script>` elemeket, csak a JavaScriptet.
3. Mentsük el az új fájlt countToTen.js néven ugyanabba a mappába, mint a `MyFirstProgram.html`.
4. A `MyFirstProgram.html` fájlban módosítsd a script elemet úgy, hogy hozzáadsz egy src attribútumot, például így:



A `MyFirstProgram.html` most már így kell kinéznie:


```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello, HTML!</title>
    <script src="countToTen.js"></script>
  </head>
  <body onload="countToTen();">
    <h1>Let's Count to 10 with JavaScript!</h1>
    <p id="theCount"></p>
  </body>
</html>
```

Az új fájl, a `countToTen.js`, így fog kinézni:

```js
function countToTen() {
    var count = 0;
    while (count < 10) {
        count++;
        document.getElementById("theCount").innerHTML += count + "<br>";
    }
}
```

### A `.js` fájlok rendszerezése

A külső JavaScript-fájlok néha nagyon nagyok lehetnek. Sok esetben jó ötlet kisebb fájlokra bontani őket, a bennük található funkciók típusa szerint rendszerezve. Például az egyik JavaScript-fájl tartalmazhat a program felhasználói bejelentkezési funkcióival kapcsolatos szkripteket, míg egy másik a blogolási funkciókkal kapcsolatos szkripteket.

Kisebb programok esetében azonban általában elegendő egyetlen fájl, és sokan az egyetlen JavaScript-fájlt valami általános névvel látják el, például `app.js`, `main.js` vagy `scripts.js`.


A JavaScript-fájloknak nem kell ugyanabban a mappában lenniük, mint az őket tartalmazó HTML-fájlnak. Valójában azt javasoljuk, hogy hozzunk létre egy új mappát kifejezetten a külső JavaScript-fájlok tárolására. A legtöbb fejlesztő ezt úgy nevezi el, hogy **js**.

Kövesd az alábbi lépéseket egy **js** mappa létrehozásához a _Visual Studio Code_ projektjén belül, és helyezd át a **js** fájljunkat oda:

1. Kattints a jobb gombbal a projekt nevére a Visual Studio Code oldalsávjában.
Megjelenik egy almenü.
2. Válaszd a New Folder (Új mappa) lehetőséget az almenüből.
A Visual Studio Code ablak alján megjelenik a Mappa neve szövegmező.
3. Írd be a js-t a mappanév szövegmezőbe, majd nyomja meg az Entert.
Az oldalsávban megjelenik egy új, js nevű mappa.
4. Nyisd meg a countToTen.js fájlt, majd válassza a Fájl ➪ Mentés másként parancsot, és mentse el az
új js mappába.
5. Kattints a jobb gombbal a countToTen.js azon típusára, amelyik kívül van a
mappán kívül, és válaszd a Fájl törlése almenüből a Delete File (Fájl törlése) lehetőséget.
6. Nyisd meg a MyFirstProgram.js fájlt, és módosítsd a script elemet a következőre
a js fájl új helyét tükrözd, például így:

```html
<script src="js/countToTen.js"></script>
```

Ha megnyitod a `MyFirstProgram.html` fájlt a böngészőben, pontosan úgy kell kinéznie, mint mielőtt a JavaScript fájlt a js mappájába helyeztük volna.


### A JavaScript fejlesztői konzol használata

Néha hasznos, ha a JavaScript-parancsokat HTML-oldal létrehozása és különálló szkriptek vagy `<script>` blokkok létrehozása nélkül is futtathatjuk. Ilyenkor használhatja a Chrome böngésző JavaScript-konzolját.

A JavaScript-konzol eléréséhez keressük meg a Chrome menüt a böngésző jobb felső sarkában - három vízszintes vonal. Kattints a Chrome menüre, majd a legördülő menüben keresd meg a További eszközök menüpontot. A More Tools (További eszközök) menüpontban válaszd a JavaScript Console (JavaScript konzol) lehetőséget a legördülő menüből.

És igen, van egy gyorsabb módja a JavaScript konzol megnyitásának. Egyszerűen nyomd meg az Alt+Command+J (Macen) vagy a Control+Shift+J (Windowson) billentyűkombinációt.

A JavaScript konzol talán a JavaScript fejlesztő legjobb barátja. Amellett, hogy lehetővé teszi a JavaScript-kód gyors és egyszerű tesztelését és futtatását, a kód hibáit is itt jelzi, és olyan funkciókkal rendelkezik, amelyek segítenek a kóddal kapcsolatos problémák felkutatásában és megoldásában.

Miután megnyitottad a JavaScript-konzolt, elkezdheted beírni a parancsokat, amelyek lefutnak, amint lenyomja az Entert. A kipróbáláshoz nyisd meg a JavaScript-konzolt, majd írd be a következő parancsokat, mindegyik után nyomd le az Enter billentyűt:

```js
1080/33
40 + 2
40 * 34
100%3
34++
34--
```


### A kód kommentálása

Ahogy egyre több JavaScript-parancsot tanulsz meg, és egyre nagyobb programokat kezdesz írni, gyakran hasznos, ha kis emlékeztetőket hagyhatsz magadnak arról, hogy mire gondoltál, vagy hogy bizonyos dolgok mit csinálnak. A programozók nyelvén ezeket a magunknak (vagy bárki másnak, aki esetleg a kódoddal dolgozik) szóló apró megjegyzéseket kommenteknek nevezzük. Ezeknek a jegyzeteknek a megírását kommentálásnak nevezzük.

A JavaScript motor teljesen figyelmen kívül hagyja a megjegyzéseket. Ezek csak az emberek miatt vannak ott. Ez a Te időd, hogy megmagyarázz dolgokat, tisztázz dolgokat, leírd a gondolkodásod, vagy akár emlékeztetőt hagyjon magadnak olyan dolgokról, amelyeket a jövőben szeretnél megtenni.

Mindig jó ötlet kommentálni a kódot. Még ha úgy is gondolod, hogy a kódod eléggé magától értetődő, amikor megírod. Garantálom, hogy nyolc hónap múlva, amikor módosítani kell, már nem így fogod gondolni.

A JavaScript kétféleképpen jelölhet valamit megjegyzésként: 
- Az egysoros megjegyzés
- A többsoros megjegyzés 

#### Egysoros megjegyzések

Az egysoros megjegyzések `//`-vel kezdődnek. Mindent, ami e két perjel után és a sor végéig következik, a JavaScript figyelmen kívül hagy.

Az egysoros megjegyzéseknek nem kell a sor elején kezdődniük. Gyakran előfordul, hogy egysoros megjegyzést használnak egy olyan kódrészlettel azonos sorban, amely nincs kommentálva, hogy megmagyarázzák, mit jelent az adott sor. Például:

```js
pizzas = pizza + 1; // add one more pizza
```

#### Többsoros megjegyzések

A többsoros megjegyzések `/*`-val kezdődnek, és azt mondják a JavaScriptnek, hogy a `*/`-ig mindent hagyjon figyelmen kívül. A többsoros megjegyzések hasznosak a kód részletesebb dokumentálásához. Például:

```js
/* 
* The countToTen function does the following things:
* Initializes a variable called count
* Starts a loop by checking the value of count to make sure it's less than 10 
* Adds 1 to the value of count
* Appends the current value of count, followed by a line break, to the paragraph with id='theCount'
* Starts the loop over 
*/
```

#### Kommentek használata a kódvégrehajtás megakadályozására

A megjegyzések amellett, hogy hasznosak a kód dokumentálásához, gyakran hasznosak a kódrészletek elkülönítéséhez is, hogy megtaláljuk a problémákat. Ha például meg akarjuk nézni, hogy mit csinálna a `countToTen` függvény, például ha eltávolítanánk a ciklusból azt a sort, amely a `count` értékét növeli, akkor egy egysoros megjegyzéssel kommentálhatnánk ki ezt a sort, például így:

```js
function countToTen() {
    //var count = 0;
    while (count < 10) {
        count++;
        document.getElementById("theCount").innerHTML += count + "<br>";
    }
}
```

Amikor ezt a programot futtatjuk, a `count++;` sor többé nem fut le, és az a program örökké 0-akat fog kiírni (vagy amíg be nem zárjuk a böngészőablakot).

Végtelen ciklusnak nevezzük azt, amit most létrehoztunk. Ha ennek a programnak egy módosított változatát futtatod, nem fog kárt tenni a számítógépedben, de valószínűleg a CPU-t egy körforgásba fogja vinni, és olyan gyorsan fog pörögni, amilyen gyorsan csak tud, amíg be nem zárod a böngészőablakot, amelyben megnyitottad.