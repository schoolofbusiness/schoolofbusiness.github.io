# 1. tananyag 

## Bevezető

Ez a tantárgy útmutató a JavaScript kód írásának elkezdéséhez. A JavaScript programozási nyelvekhez képest viszonylag könnyen elsajátítható és használható. Mivel könnyen hozzáférhető, sokan, akik weblapkészítőként kezdték, olyan helyzetben találták magukat, hogy a JavaScript-kód karbantartásáért, módosításáért és megírásáért kell felelniük.

Akár tudsz egy kicsit JavaScriptet, akár még sosem láttál ilyet, ez az anyag megmutatja, hogyan írj JavaScriptet a helyes módon.

A tantárgyban tárgyalt témák a következők:
- A JavaScript programok alapvető struktúráinak megértése 
- A JavaScript integrálása a HTML5 és a CSS3 használatával
- A programok strukturálása függvényekkel
- Munka JavaScript objektumokkal
- Haladó JavaScript-technikák használata, például AJAX, visszahívások (callbacks) és lezárások (closures)

A JavaScript tanulása nem csak a nyelv szintaxisának elsajátításáról szól. Hanem a nyelv köré épült eszközökhöz és közösséghez való hozzáférésről is. A professzionális JavaScript-programozók a nyelv hosszú és izgalmas története során nagymértékben finomították a JavaScript írásához használt eszközöket és technikákat. Az anyagban végig megemlítjük a teszteléshez, dokumentáláshoz és a jobb kód gyorsabb megírásához szükséges gyakorlatokat és eszközöket!

### Első lépések a JavaScript használatával

:::tip Ebben az anyagban:
- A JavaScript megismerése
- A JavaScript működésének megismerése
- Annak megértése, hogy miért van szükségünk JavaScriptre
:::

A JavaScriptet nem mindig tartották olyan nagyra, mint manapság. Egyesek a világ legjobb és legrosszabb programozási nyelvének nevezték. Az elmúlt néhány évben rengeteg fejlesztés történt a programozók JavaScript-írási módjában és a JavaScript-értelmezésében. Ezek a fejlesztések a JavaScriptet ma sokkal jobb nyelvvé tették, mint korábban.

Ebben a fejezetben megtudhatjuk, hogy mi is a JavaScript, és egy kicsit a nyelv történetét is megismerhetjük. Azt is megtudhatjuk, hogy mit tud a JavaScript, és miért kell ismernünk.

### Mi az a JavaScript?

Az internet kezdeti időszakában a böngészők egyszerű olvasóprogramok voltak a weboldalak számára. Gyakorlatilag semmilyen képességük nem volt, kivéve a szöveg különböző méretű betűtípusokkal történő megjelenítésére. Amint a __Microsoft__ kiadta __Internet Explorer__ böngészőjét, a böngészőháború elkezdődött, és a funkciók elkezdtek repkedni! Az egyik böngésző bevezette a képek megjelenítésének képességét, majd egy másik bevezette a különböző betűtípusok megjelenítésének képességét, majd villogó szöveg, mozgó szöveg és mindenféle egyéb furcsa képességek jelentek meg!

Nem telt el sok idő, mire valakinek az az ötlete támadt, hogy a böngészők maguk is tudnak hasznos dolgokat csinálni, ahelyett, hogy csak díszes dokumentummegjelenítő programként működnének.

A JavaScript 1995-ben indult a Netscape-nél. A JavaScript megalkotója, __Brandon Eich__ rekordidő alatt (egyesek szerint tíz nap alatt!) írta meg a JavaScriptet, számos más programnyelv legjobb tulajdonságait kölcsönözve. A piacra lépés rohanása néhány érdekes furcsaságot (_vagy kevésbé udvariasan fogalmazva: hibát_) is okozott a nyelv tervezésében. Az eredmény egyfajta eszperantó-szerű nyelv, amely megtévesztően ismerősnek tűnik a más programozási nyelvekben jártas emberek számára.

A JavaScript eredeti neve Mocha volt. A Netscape Navigator első bétaverziójának megjelenésekor LiveScriptre nevezték át, majd a Netscape 2 böngészőbe való beépítésekor, 1995-ben JavaScriptre változtatták. A Microsoft nagyon gyorsan visszafejtette a JavaScriptet, és bevezette annak pontos klónját az Internet Explorerben, Jscriptnek nevezve azt, hogy megkerülje a védjegyekkel kapcsolatos problémákat.

A Netscape benyújtotta a JavaScriptet az Ecma International nevű szabványügyi szervezetnek, és 1997-ben ECMAScript néven elfogadták és szabványosították.
Brandon Eich, a JavaScript megalkotója híres megjegyzéseket tett a szabványosított nyelv nevével kapcsolatban; kijelentette, hogy az ECMAScript egy "nem kívánt kereskedelmi név, amely úgy hangzik, mint egy bőrbetegség".

Ha már tudsz programozni Java nyelven, vagy ha valamikor megtanultad, akkor nagyon jó, ha szem előtt tartod, hogy a két nyelvnek ugyan van némi hasonlósága, de valójában teljesen különböző.

#### Több effektre van szükségünk!

Amikor a JavaScript debütált, gyorsan népszerűvé vált, mivel a weboldalak dinamikusabbá tételének egyik módja volt. Az úgynevezett dinamikus HTML (DHTML) a JavaScript webböngészőkbe való beépítésének korai eredménye volt, és mindenféle szórakoztató hatást tett lehetővé, például a hulló hópehely-effektust, a felugró ablakokat, de olyan hasznosabb dolgokat is, mint a legördülő menük és az űrlapérvényesítés.

#### A JavaScript növekedése

A JavaScript immár harmadik évtizedébe lépve a világ legszélesebb körben használt programozási nyelvévé vált, és gyakorlatilag a világ minden személyi számítógépén van legalább egy olyan böngésző, amely képes JavaScript kódot futtatni.

A JavaScript elég rugalmas ahhoz, hogy a nem profi programozók is használhassák és megtanulhassák, de elég erős ahhoz, hogy a profi programozók is használják is, hogy az interneten ma már szinte minden weboldalon működőképes, az egyoldalas honlapoktól kezdve az olyan gigantikus oldalakig, mint a Google, az Amazon, a Facebook és még sok-sok más!

#### Dinamikus szkriptnyelv

A JavaScriptet gyakran dinamikus szkriptnyelvként írják le. Ahhoz, hogy megértsük, mit jelent ez, először is meg kell határoznunk néhány fogalmat, és némi összefüggést kell látnunk.

### Gyakori tévhitek a JavaScriptről

Az évek során a JavaScriptről elég csúnya dolgokat mondtak. Bár a felvetések néha érdekesek, nem mindig igazak. Az alábbi lista néhány gyakori tévhitet ismertet a JavaScriptről:

__Mítosz__: A JavaScript nem igazi programozási nyelv.
__Valóság__: A JavaScriptet gyakran triviális feladatokra használják a webböngészőkben, de ettől még nem lesz kevésbé programozási nyelv. Valójában a JavaScript számos olyan fejlett funkcióval rendelkezik, amelyek javították a programozási nyelvek színvonalát, és amelyeket ma már olyan nyelvek is utánoznak, mint a PHP, a C++ vagy akár a Java.

__Mítosz__: A JavaScript a Javaval rokon. 
__Valóság__: Nem. A JavaScript nevet pusztán marketingstratégiaként találták ki, mivel a Java hihetetlenül népszerű volt a JavaScript megjelenésekor.

__Mítosz__: A JavaScript új programozási nyelv.
__Valóság__: A JavaScript már több mint 20 éve létezik! Az általunk ismert professzionális JavaScript-programozók közül néhányan még meg sem születtek, amikor a JavaScriptet létrehozták.

__Mítosz__: A JavaScript hibás, és különböző böngészőkben eltérően fut. 
__Valóság__: Bár ez bizonyos esetekben igaz volt, a böngészők gyártói már régen úgy döntöttek, hogy a JavaScript szabványosított verzióját támogatják. Ma már minden böngésző ugyanúgy futtatja a JavaScriptet.

A számítógépes programok olyan utasításkészletek, amelyek a számítógépeket bizonyos dolgok elvégzésére késztetik. Minden számítógépes programozási nyelvnek van egy utasításkészlete és egy bizonyos módja, ahogyan az embereknek ezeket az utasításokat meg kell írniuk. A számítógép nem tudja közvetlenül megérteni ezeket az utasításokat. Ahhoz, hogy a számítógép megértsen egy programozási nyelvet, át kell mennie egy átalakítási folyamaton, amely az ember által olvasható (és írható) utasításokat gépi nyelvre fordítja. Attól függően, hogy ez a fordítás mikor történik, a programozási nyelvek nagyjából két típusra oszthatók: fordított (_compiled_) és értelmezett (_interpreted_) nyelvek.

#### Fordított programozási nyelvek

A fordított programozási nyelvek olyan nyelvek, amelyekben a programozónak meg kell írnia a kódot, majd egy speciális programon, az úgynevezett fordítóprogramon kell lefuttatnia, amely értelmezi az adott kódot, majd gépi nyelvre alakítja át. A számítógép ezután tudja végrehajtani a lefordított programot. A lefordított nyelvek közé tartozik például a C, C++. Fortran, Java, Objective-C és COBOL.

#### Értelmezett programozási nyelvek

Az értelmezett nyelveket technikailag még mindig a számítógép fordítja gépi nyelvre, de a fordítást a felhasználó webböngészője végzi közvetlenül a program futtatása közben. Az értelmezett nyelveket író programozóknak nem kell a kódot lefordítaniuk, mielőtt átadnák a számítógépnek futtatásra.

Az értelmezett nyelven történő programozás előnye, hogy a programon bármikor könnyű változtatásokat eszközölni. Hátránya azonban, hogy a kód futtatás közbeni lefordítása újabb lépést jelent a folyamatban, és lelassíthatja a programok teljesítményét.

Részben e teljesítménytényező miatt az értelmezett nyelvek a kevésbé komoly programozási nyelvek hírében állnak. A jobb just-in-time fordítóprogramok és a gyorsabb számítógépes processzorok miatt azonban ez a megítélés gyorsan változik. A JavaScript nagy hatással van erre.

Az értelmezett programozási nyelvek közé tartozik például a PHP, a Perl, a Haskell, a Ruby és természetesen a JavaScript.

A JavaScript segítségével engedélyezhető funkciók listája igen széles, és az egyszerű értesítésektől kezdve, amelyeket akkor kap, ha elfelejtett kitölteni egy űrlap kötelező mezőjét, egészen az olyan összetett alkalmazásokig terjed, mint a Google Docs vagy a Facebook.

#### Miért JavaScript?

A JavaScript vált a webes dinamikus felhasználói felületek létrehozásának szabványává. Nagyjából minden alkalommal, amikor egy animációval, élő adatokkal, gombbal vagy legördülő menüvel rendelkező weboldalt látogatsz meg, JavaScriptet használ. A JavaScript-kódolás a modern webfejlesztők számára a legnépszerűbb és legszükségesebb készség, mivel minden böngészőben futtatható, ezért a JavaScript-kódolás a legnépszerűbb és legszükségesebb készség, amellyel egy modern webfejlesztőnek rendelkeznie kell.

#### A JavaScript könnyen tanulható

A programozási nyelveket azért hozták létre, hogy hogy az emberek egyszerű módon beszélhessenek a számítógépekkel, és megmondhassák nekik, mit tegyenek. A gépi nyelvhez képest, vagyis ahhoz a nyelvhez képest, amelyet a számítógép processzora beszél, minden programozási nyelv egyszerű és érthető. Hogy ízelítőt adjunk abból, hogy a számítógép valójában milyen utasításoknak engedelmeskedik, íme egy gépi nyelvű program a "Hello World" kiírására.

```txt
b8 21 0a 00 00
a3 80 00 00 64
b8 10 00 00 00
a3 6f 2c 20 57
b9 48 65 6c 6c
```

Most nézzük meg, hogyan lehet ezt az egyszerű feladatot JavaScript segítségével elvégezni:

```js
alert("Hello World");
```

Sokkal könnyebb, ugye?
