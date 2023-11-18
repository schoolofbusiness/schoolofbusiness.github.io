# 9. tananyag

## A böngésző vezérlése a Window objektummal

Ebben a fejezetben
- A BOM (böngészőobjektum-modell) megértése 
- Az ablakok megnyitása és bezárása
- Az ablakok tulajdonságainak megismerése
- Az ablakok méretének módosítása

A böngészőobjektum-modell (BOM) lehetővé teszi a JavaScript számára, hogy interakcióba lépjen a webböngésző funkcióival. A BOM segítségével ablakokat hozhatsz létre és változtathatod az ablakok méretét, figyelmeztető üzeneteket jeleníthetsz meg, és megváltoztathatod a böngészőben megjelenő aktuális oldalt.

Ebben a fejezetben felfedezheted, hogy mit lehet tenni a böngészőablakkal, és hogyan használhatod azt jobb JavaScript-programok írásához.

### A böngészőkörnyezet megértése

A webböngészők összetett szoftverek. Ha jól működnek, akkor zökkenőmentesen működnek, és minden funkciójukat zökkenőmentes és látszólag egyszerű webböngészési élményt nyújtanak. Mindannyian tudjuk, hogy a webböngészők időnként akadoznak, sőt néha össze is omlanak. Ahhoz, hogy megértsük, miért történik ez, és hogy jobban ki tudjuk használni a böngészőket, fontos ismerned a webböngésző számos különböző részét, és azt, hogy ezek a részek hogyan lépnek interakcióba egymással.

### A felhasználói felület

A webböngészőnek azt a részét, amellyel interakcióba lépsz, amikor beírsz egy URL-címet, rákattintasz a kezdőlap gombra, könyvjelzőt hozol létre vagy használsz, vagy módosítod a böngésző beállításait, felhasználói felületnek nevezik.


### Loader

A _Loader_ a webböngésző azon része, amely kommunikál a webszerverekkel, és letölti a weboldalakat, szkripteket, CSS-t, grafikákat és a weblap összes többi összetevőjét. A _Loader_ az a része a weboldal megjelenítésének, amely a leghosszabb várakozási időt okozza a felhasználó számára.

A HTML-oldal az első olyan része a weboldalnak, amelyet le kell tölteni, mivel linkeket, beágyazott parancsfájlokat és stílusokat tartalmaz, amelyeket fel kell dolgozni az oldal megjelenítéséhez.

A HTML-dokumentum letöltése után a böngészők több kapcsolatot nyitnak a szerverrel, hogy a lehető leggyorsabban letöltsék a weboldal többi részét. Általában a weblap HTML-dokumentumból linkelt részei (más néven erőforrások) a következő sorrendben töltődnek be
ahogyan a HTML-dokumentumban szerepelnek. Például egy olyan szkript, amely az oldal fejelemében van linkelve, előbb töltődik be, mint egy olyan, amely az oldal alján van.

Az erőforrások betöltési sorrendje kritikus fontosságú az oldal hatékonysága és gyorsasága szempontjából, amellyel az oldal megjeleníthető a felhasználó számára. Ahhoz, hogy egy weboldal helyesen jelenjen meg, az adott oldalra vonatkozó CSS-stílusokat be kell tölteni és elemezni kell. Emiatt a CSS-t mindig a weboldal tetején lévő `head` elemben kell betölteni.

A JavaScript néha a weblap megjelenítését is befolyásolja, de gyakrabban csak a funkcionalitást. Ha egy szkript hatással lesz egy weboldal megjelenítésére, akkor azt a dokumentum fejrészébe kell betölteni (_a CSS után_). Azokat a szkripteket, amelyek nem kritikusak a weblap megjelenésére, a body elem legvégén (közvetlenül a `</body>` előtt) kell linkelni, hogy ne jöjjön létre olyan blokkoló forgatókönyv, amelyben a böngésző a szkriptek betöltésére vár, mielőtt bármit is megjelenítene a felhasználónak.

### HTML-elemzés

A weboldal letöltése után a böngésző HTML-elemző komponense megkezdi a HTML elemzését, hogy létrehozza a weboldal modelljét (az úgynevezett __dokumentumobjektum-modellt__ vagy __DOM__-ot). A __DOM__, amelyet majd később részletesen tárgyalunk, olyan, mint a weblap térképe. A JavaScript-programozók ezt a térképet használják a weblap különböző részeinek manipulálására és elérésére.

A HTML-elemzés befejezése után a böngésző elkezdi letölteni a weblap többi összetevőjét.


### CSS elemzése

Miután egy weboldal CSS-je teljesen letöltődött, a webböngésző elemzi a stílusokat, és kitalálja, hogy melyek vonatkoznak a HTML-dokumentumra. A CSS elemzése összetett folyamat, amely többszörös átfutást igényel a dokumentumon, hogy az egyes stílusokat helyesen alkalmazza, és figyelembe vegye, hogy a stílusok hogyan hatnak egymásra.

### JavaScript elemzése

A weboldal megjelenítésének következő lépése a JavaScript elemzése. A JavaScript-elemző lefordítja és lefuttatja a weblap minden egyes szkriptjét abban a sorrendben, ahogyan az a dokumentumban megjelenik. Ha a JavaScript-kódja elemeket, szöveget vagy stílusokat ad hozzá vagy távolít el a HTML DOM-on belül, a böngésző ennek megfelelően frissíti a HTML- és CSS-megjelenítést.

### Elrendezés és renderelés

Végül, miután a weboldal összes erőforrása betöltődött és elemezve lett, a böngésző meghatározza, hogyan jelenítse meg az oldalt, majd megjeleníti azt. Hacsak nem adtad meg, hogy egy, a dokumentumban korábban szereplő szkript a végéig várjon a végrehajtással, a szkriptek elrendezése és megjelenítése a dokumentumban szereplő sorrendben történik.

:::tip Megjegyzés
Általánosságban elmondható, hogy jobb, ha egy weboldalt a lehető leggyorsabban megjelenítünk a felhasználónak, még akkor is, ha az oldal első megjelenésekor még nem teljesen működőképes. A modern weboldalak gyakran alkalmazzák kifejezetten ezt a stratégiát (az úgynevezett halasztott betöltést), hogy javítsák az oldalaik érzékelhető teljesítményét. Ha valaha is megnyitottál már egy weboldalt, és egy pillanatig várnod kellett, mielőtt egy űrlapot vagy interaktív elemet használhattál volna, akkor már láttad a halasztott betöltést működés közben.
:::

### A BOM aktiválása

A JavaScript-programozók a böngészőobjektum-modellnek nevezett API segítségével információt szerezhetnek a felhasználó webböngészőjéről, és irányíthatják a felhasználói élmény egyes aspektusait.

A böngészőobjektum-modellnek nincs hivatalos szabványa. A különböző böngészők különböző módon valósítják meg. Van azonban néhány általánosan elfogadott szabvány arra vonatkozóan, hogy a JavaScript hogyan lép kölcsönhatásba a webböngészőkkel.

### A Navigátor objektum

A Navigator objektum a JavaScript számára hozzáférést biztosít a felhasználó webböngészőjére vonatkozó információkhoz. A _Navigator_ objektum a nevét az első webböngészőről, a NetscapeNavigatorról kapta. A _Navigator_ objektum nincs beépítve a JavaScriptbe. Inkább a webböngészők olyan funkciója, amely a JavaScript segítségével érhető el. Szinte minden webböngésző (és minden modern webböngésző) ugyanazt a terminológiát alkalmazza erre a legmagasabb szintű böngészőobjektumra való utaláshoz.

A Navigátor objektum olyan hasznos információkhoz fér hozzá, mint például:

- A webböngésző neve
- A webböngésző verziója
- A számítógép fizikai helyzete, amelyen a böngésző fut (ha a felhasználó engedélyezi a böngésző számára a földrajzi helymeghatározási adatok elérését).
- A böngésző nyelve
- A számítógép típusa, amelyen a böngésző fut.

A Navigator objektum tulajdonságainak lekérdezéséhez ugyanazt a szintaxist használhatod, mint bármely más objektum tulajdonságainak lekérdezéséhez - nevezetesen a pontjelölést vagy a zárójeles jelölést. A lenti kód webböngészőben megnyitva megjeleníti a Navigátor objektum összes aktuális tulajdonságát és értékét.

|    Property   |                                   Használat                                  |
|:-------------:|:----------------------------------------------------------------------------:|
|  appCodeName  |                       A böngésző kódnevének lekérdezése                      |
|    appName    |                        A böngésző nevének lekérdezése                        |
|   appVersion  |                 A böngésző verzióinformációjának lekérdezése                 |
| cookieEnabled |         Megmutatja, hogy a böngészőben engedélyezve vannak-e a sütik         |
|  geolocation  |        Felhasználható a felhasználó fizikai helyének meghatározására.        |
|    language   |                       A böngésző nyelvének lekérdezése                       |
|     onLine    |                   Azonosítja, hogy a böngésző online van-e                   |
|    platform   |            Megkapja a platformot, amelyre a böngészőt fordították.           |
|    product    |                      A böngészőmotor nevének lekérdezése                     |
|   userAgent   | A böngésző által a webkiszolgálóknak küldött felhasználói ügynök lekérdezése |

```html
<html>
  <head>
    <style>
      .columns {
        -webkit-column-count: 6;
        /* Chrome, Safari, Opera */
        -moz-column-count: 6;
        /* Firefox */
        column-count: 6;
      }
    </style>
  </head>
  <body>
    <div class="columns">
      <script>
        for (var prop in navigator) {
          document.write(prop + ": " + navigator[prop] + " <br> ");
          }
      </script>
    </div>
  </body>
</html>
```

Ha lefuttatod a kódot, akkor észrevehetsz valami érdekeset a kimeneten: Az AppName tulajdonságok értékei látszólag egyszerűen rosszul vannak megadva. Például létrehozásához használt böngésző a Google Chrome volt, de az __AppName__ szerint Netscape.

Ez a félrevezető érték még azokból az időkből maradt fenn, amikor a programozók a Navigator objektum tulajdonságait használták annak megállapítására, hogy a felhasználó egy adott böngészőt használ-e, és támogat-e bizonyos funkciókat.

Amikor megjelentek az új böngészők, például a Chrome és a Firefox, ezek a böngészők átvették a Netscape böngésző __AppName__ értékét, hogy kompatibilisek legyenek az ilyen módon funkciókat észlelő webhelyekkel.

:::warning Figyelmeztetés

Manapság a böngésző észlelése nem ajánlott, és az __AppName__ tulajdonságnál jobb módszereket is használhatsz a böngésző bizonyos funkciók támogatásának észlelésére. A funkciók észlelésének legelterjedtebb módja manapság a __DOM__ vizsgálata a használni kívánt funkcióhoz kapcsolódó objektumok után. Ha például azt szeretnéd megtudni, hogy egy böngésző támogatja-e a HTML5 audio elemet, akkor a következő tesztet használhatod:

```js
var test_audio = document.createElement("audio");
if (test_audio.play) {
    console.log("Browser supports HTML5 audio");
} else {
    console.log("Browser doesn't support HTML5 audio");
}
```

:::


### A Window objektum

A webböngésző fő területét ablaknak nevezzük. Ez az a terület, ahová a HTML-dokumentumok (és a kapcsolódó erőforrások) betöltődnek. A webböngésző minden egyes lapját a __Window__ objektum egy példánya reprezentálja a JavaScriptben. A __Window__ objektum tulajdonságait a lenti táblázat tartalmazza.

|    Property   |                                         Használat                                        |
|:-------------:|:----------------------------------------------------------------------------------------:|
|     closed    |             Boolean érték, amely jelzi, hogy az ablakot bezárták-e vagy sem.             |
| defaultStatus |      Az ablak állapotsorának alapértelmezett szövegének lekérdezése vagy beállítása.     |
|    document   |                         Az ablak Document objektumára hivatkozik                         |
|  frameElement |            Megkapja az elemet, például,vagy , amelybe az ablak be van ágyazva            |
|     frames    |                       Az aktuális ablak összes alkeretének listája                       |
|    history    |         A felhasználó böngészési előzményeinek lekérdezése az aktuális ablakhoz.         |
|  innerHeight  |                           Az ablak belső magasságának megadása                           |
|   innerWidth  |                           Az ablak belső szélességének megadása                          |
|     length    |                      Az ablakban lévő képkockák számának lekérdezése                     |
|    location   |                         Az ablak Location objektumának kinyerése                         |
|      name     |                       Az ablak nevének lekérdezése vagy beállítása                       |
|   navigator   |                         Az ablak Navigátor objektumának kinyerése                        |
|     opener    |                 Az aktuális ablakot létrehozó Window objektum lekérdezése                |
|  outerHeight  | Az ablak külső magasságának megadása, beleértve a görgetősávokat és az eszköztárakat is. |

|   Property  |                                              Használat                                             |
|:-----------:|:--------------------------------------------------------------------------------------------------:|
| pageXOffset |      Az ablak külső magasságának megadása, beleértve a görgetősávokat és az eszköztárakat is.      |
| pageYOffset |                   Az ablakban függőlegesen görgetett pixelek számának lekérdezése                  |
|    parent   |                               Az aktuális ablak szülőjére hivatkozik                               |
|    screen   |                                  Az ablak Screen objektumára utal                                  |
|  screenLeft | A főképernyő bal oldala és az aktuális ablak bal oldala közötti vízszintes pixeltávolság megadása. |
|  screenTop  |       Az ablak tetejétől a képernyő tetejéhez viszonyított függőleges pixeltávolság megadása.      |
|   screenX   |                      A képernyőhöz viszonyított vízszintes koordináta megadása                     |
|   screenY   |                      A képernyőhöz viszonyított függőleges koordináta megadása                     |
|     self    |                                   Az aktuális ablakra vonatkozik                                   |
|     top     |                               A böngésző legfelső ablakára vonatkozik                              |


Az ablak tulajdonságainak leggyakoribb felhasználási területei közé tartozik a következők:

- Új hely megnyitása a böngészőablakban
- A böngészőablak méretének megkeresése
- Visszatérés egy korábban megnyitott oldalra (mint a vissza gomb funkciója)

### Weboldal megnyitása az `window.location` tulajdonsággal

Az `window.location` tulajdonság értékének lekérdezése az aktuális oldal URL-címét adja vissza. Az `window.location` tulajdonság értékének új URL-címmel történő beállítása azt eredményezi, hogy a böngésző betölti az adott URL-címen lévő weboldalt az ablakba.

A lenti kód egy olyan weblapot tartalmaz, amelynek szkriptje egy weblap címét kéri a felhasználótól, majd betölti az oldalt az aktuális böngészőablakba.

```html
<html>
  <head>
    <script>
      function loadNewPage(url) {
        window.location = url;
      }
    </script>
  </head>
  <body>
    <script>
      var newURL = prompt("Please enter a web page address!");
      loadNewPage(newURL);
    </script>
  </body>
</html>
```

### A böngészőablak méretének meghatározása

Amikor egy webhelyet vagy webes alkalmazást úgy tervezel, hogy az különböző típusú eszközökön működjön, különösen fontos a szélességének és magasságának ismerete.

A `window.innerWidth` és `window.innerHeight` tulajdonságok pixelben megadják ezt az információt az aktuális böngészőablakra vonatkozóan.

A CSS használata a böngészőablak méretének meghatározására szintén lehetséges és meglehetősen gyakori megoldás. A CSS és a JavaScript gördítősávok kezelésében azonban van néhány különbség, ami befolyásolhatja, hogy melyik technika mellett döntesz.

Próbálj ki egy egyszerű reszponzív tervezési példát JavaScript használatával. Futtasd a lenti kódban szereplő programot a webböngészőben. Ha a webböngésző ablakának szélessége 500 pixel alatt van, egy üzenet jelenik meg. Ha az ablak szélessége nagyobb, mint 500 pixel, egy másik üzenet jelenik meg.

```html
<html>
  <head>
    <title>Adapting to the window.innerWidth</title>
  </head>
  <body>
    <script>
      var currentWidth = window.innerWidth;
      if (currentWidth > 500) {
        document.write("<h1> Your window is big.</h1>"); } else {
            document.write("<h1> Your window is small.</h1>"); }
    </script>
  </body>
</html>
```

### Vissza gomb létrehozása a hely és az előzmények használatával

Az ablakobjektum `history` tulajdonsága egy csak olvasható hivatkozás a `history` objektumra, amely a felhasználó által az aktuális böngészőablakban megnyitott oldalakról tárol információkat. Az előzmények objektum messze leggyakoribb felhasználási módja az olyan gombok engedélyezése, amelyek visszavezetik a felhasználót egy korábban megtekintett oldalra.

```html
<html>
  <head>
    <title>Creating a Back button</title>
    <script>
      function takeMeBack() {
        window.location(window.history.go(-1));
      }

      function getHistoryLength() {
        var l = window.history.length;
        return l;
      }
    </script>
  </head>
  <body>
    <script>
      var historyLength = getHistoryLength();
      document.write("<p> Welcome!The number of pages you 've visited in this window is: " +
        historyLength + ".</p> ");
    </script>
    <br>
    <a href="javascript:void(0);" onclick="takeMeBack();">Go Back</a>
  </body>
</html>
```

### A `Window` objektum metódusainak használata

A `Window` objektum a tulajdonságain kívül néhány hasznos metódussal is rendelkezik, amelyeket a JavaScript-programozóknak ismerniük és használniuk kell. A lenti táblázat a metódusok teljes listáját mutatja.

A metódus nem más, mint egy objektumban található függvény másik neve.

|     Metódus    |                                       Használat                                       |
|:---------------:|:-------------------------------------------------------------------------------------:|
|     alert()     |          Megjelenít egy figyelmeztető mezőt egy üzenettel és egy OK gombbal.          |
|      atob()     |                       Dekódolja a base-64 kódolt karakterláncot                       |
|      blur()     |                         Az aktuális ablak elveszíti a fókuszt                         |
| clearInterval() |                Törli a setInterval() segítségével beállított időzítőt.                |
|  clearTimeout() |                 Törli a setTimeout() segítségével beállított időzítőt.                |
|     close()     |                      Bezárja az aktuális ablakot vagy értesítést                      |
|    confirm()    | Megjelenít egy párbeszédpanelt egy választható üzenettel és két gombbal: OK és Mégse. |
|  createPopup()  |                               Felugró ablak létrehozása                               |
|     focus()     |                          Az aktuális ablak fókuszba állítása                          |
|     moveBy()    |                   Az aktuális ablak mozgatása egy megadott értékkel                   |
|     moveTo()    |                      Áthelyez egy ablakot egy megadott pozícióba                      |
|      open()     |                                    Új ablakot nyit                                    |
|     print()     |                        Kinyomtatja az aktuális ablak tartalmát                        |
|     prompt()    |       Megjelenít egy párbeszédpanelt, amely a felhasználót inputra szólítja fel.      |
|   resizeBy()  |                            Az ablak méretének módosítása a megadott pixelszámmal                           |
|   resizeTo()  |                         Átméretezi az ablakot a megadott magasságra és szélességre.                        |
|   scrollBy()  |                                A dokumentum görgetése egy megadott értékkel                                |
|   scrollTo()  |                            A dokumentum görgetése egy adott koordinátakészletre                            |
| setInterval() | Egy függvény meghívása vagy egy kifejezés ismételt végrehajtása megadott időközönként (milliszekundumban). |
|  setTimeout() |    Meghív egy függvényt vagy végrehajt egy kifejezést egy megadott intervallum után (milliszekundumban).   |
|     stop()    |                                   Megállítja az aktuális ablak betöltését                                  |