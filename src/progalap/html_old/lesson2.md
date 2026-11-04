---
category:
  - Webszerkesztési alapok
---

# 2. tananyag

:::tip 📚 EBBEN A FEJEZETBEN

A témakör célja, hogy a tanulók olyan készségeket sajátítsanak el, amelyek lehetővé teszik számukra, hogy hatékonyan navigáljanak és használjanak egy ingyenes kód szerkesztőt, például a __Visual Studio Code__-ot. A tanulók megismerik a szerkesztő alapvető szolgáltatásait és megtanulják, hogyan alkalmazzák ezeket a gyakorlatban. A tanulók megismerik hogy hogyan hozzanak létre új HTML-oldalakat, figyelembe véve azokat az elemeket, mint például a `!DOCTYPE`, `html`, `head`, `body` és `meta`, amelyek szükségesek az oldalak strukturálásához és formázásához. Ezek a készségek kulcsfontosságúak a webfejlesztés terén, és segítenek a tanulóknak magabiztosan készíteni és szerkeszteni weboldalakat.

**A témakör elsajátítását követően a tanuló:**
- Képes lesz hatékonyan navigálni és használni a Visual Studio Code szerkesztőt.
- Alapvető szolgáltatásokat használni, például kódszerkesztés, mentés, visszavonás és keresés/felcserélés.
- Új HTML-oldalakat létrehozni és szerkeszteni a szükséges strukturális elemekkel.
- Megérteni az HTML dokumentum felépítését és szintaxisát.
:::

## Visual Studio Code

![](/assets/images/html/vscode.png)

Visual Studio Code egy ingyenes, nyílt forráskódú kódszerkesztő, amelyet az Microsoft fejlesztett ki. A VS Code célja a fejlesztőknek szánt erőteljes és könnyen testreszabható környezet biztosítása. Bár a Visual Studio az eredeti Microsoft fejlesztői eszköz volt, a VS Code egy könnyűsúlyú alternatíva, ami több platformon fut (Windows, macOS, Linux). A VS Code számos funkciót kínál, beleértve a beépített szintaxiskiemelést, kódkiegészítést és hibakeresést. Emellett támogatja a kiterjesztéseket, amelyekkel a fejlesztők tovább bővíthetik és testreszabhatják a kódszerkesztőt.


### Visual Studio Code kezelőfelülete

A VS Code kezelőfelülete intuitív és felhasználóbarát. A fő részek a következők:

- __Munkaterület__: Itt nyithat meg és kezelhet kódprojekteket vagy mappákat.
- __Szerkesztőpanel__: A kód szerkesztése itt történik. Itt találhatók a kódolást segítő eszközök, például a szintaxiskiemelés és a kódkiegészítés.
- __Oldalsáv__: A bal oldalon található, és tartalmazza a projektfastruktúrát, a Git integrációt, és az kiterjesztések menedzselésére szolgáló lehetőségeket.
- __Alsó sáv__: Az alsó részen található eszköztárak, például a hibakeresés és a Git eszközök.
- __Menüsor__: A felső menüsorban találhatóak az alapvető műveletek, például a fájlkezelés és a beállítások.

Az __Explore__ a kezelőfelület bal oldali paneljén található, és egy mappastruktúrát mutat be. Itt láthatod a jelenlegi projekt vagy mappa tartalmát. Használhatod a fájlok és mappák hozzáadásához, törléséhez, átnevezéséhez és rendezéséhez. A fájlokra való kattintás megnyitja őket a szerkesztőben, és lehetővé teszi a kód szerkesztését. A __Search__ panel lehetővé teszi a projektben vagy a mappában található fájlok és kifejezések gyors keresését. Itt keresést indíthatsz a projektben, és eredményeket kapni a fájlokról, ahol a keresett kifejezések előfordulnak. Ez segít a kód gyors megtalálásában és navigálásban.
A __Source Control__ panel azoknak a fejlesztőknek szól, akik verziókezelési rendszereket, például Git-et használnak. Itt kezelheted a verziókezelési műveleteket, például a _commit_, _push_ és _pull_ műveleteket. Láthatod a módosított fájlokat és a verzióelőzményeket, és könnyen nyomon követheted a projekt változásait. A __Run and Debug__ panel lehetővé teszi a kód futtatását és hibakeresését. Itt konfigurálhatod a futtatási és hibakeresési beállításokat, és indíthatod a kódot. Amikor a kód fut, a panel megjeleníti a kimenetet és lehetővé teszi a hibakeresési lépések végrehajtását, például a hibák keresését és javítását.
Az __Extensions__ panelen keresztül bővítheted a VS Code funkcionalitását. Itt találhatóak a kiterjesztések, amelyeket telepíthetsz a kódszerkesztőhöz. Ezek a kiterjesztések hozzáadhatnak új szintaxiskiemeléseket, fejlesztői eszközöket, vagy akár új nyelvek támogatását. A kiterjesztések nagyon rugalmasak és testreszabhatóak, így személyre szabhatod a fejlesztői környezetedet. Végül a __Settings__ ahol testreszabhatod a VS Code különböző beállításait, például a témát, a billentyűparancsokat és az egyéni konfigurációkat.


### Letöltés
A Visual Studio Code-ot hivatalosan a weboldaláról töltheted le. Látogass el a https://code.visualstudio.com/ weboldalra, és itt megtalálod a letöltéshez szükséges linkeket a különböző platformokhoz (Windows, macOS, Linux).

### Telepítés
A telepítés egyszerű és gyors. Miután letöltötted a megfelelő telepítőfájlt a rendszeredhez, indítsd el a telepítőt, majd kövesd az utasításokat. A telepítő segítségével beállíthatod az alapvető beállításokat, például a témát és a kiterjesztéseket is. Miután a telepítés befejeződött, a VS Code készen áll a használatra.


### Emmet és Prettier

Az Emmet és a Prettier két különálló eszköz a Visual Studio Code-ban, amelyek segítenek a kódolás során. Mindkettő nagyon hasznos a webfejlesztők számára, mivel segítenek a kód írásában és formázásában, ami a fejlesztői munka során alapvető fontosságú.

#### Emmet

Az Emmet egy kódgenerátor és rövidítési eszköz, amely lehetővé teszi a rövidített kódfelírások használatát, majd ezekből kiterjesztett kódok generálását. Például, ha gyorsan szeretnél HTML elemeket vagy CSS szabályokat írni, az Emmet segít a hatékony és gyors kódolásban.

Hogyan használhatod az Emmet-et a Visual Studio Code-ban:
- Az Emmet automatikusan engedélyezve van a VS Code-ban, így nincs szükség külön telepítésre.
- Az Emmet rövidítéseket szokásos módon használhatod a HTML és CSS fájlokban. Például, ha beírod `div>ul>li*3`, az Emmet kibővíti ezt egy olyan HTML kóddá, amely három listaelemet tartalmaz egy belső listában egy div elemen belül.


:::tip > használata
A `>` karakter az Emmet kifejezésekben használt elválasztó karakter, és azt jelzi, hogy az előző elem egy gyerekelemét vagy részét hozod létre a következő elemnek. Az Emmet használatakor, amikor egy `>` karaktert használsz, azt jelzed, hogy az előző elem az új elem szülője vagy tartalmazója lesz.

Például, ha azt szeretnéd kifejezni Emmet segítségével, hogy egy `<div>` elem tartalmaz egy `<ul>` elemet, akkor így írnád:

```
div>ul
```

Ez azt jelenti, hogy a `<div>` elem lesz az `<ul>` elem szülője, vagyis a `<ul>` elem a `<div>` elemen belül lesz.

Az `>` karakter segít a kód egyszerűbb és rövidebb írásában, különösen olyan esetekben, amikor gyerekelemeket vagy mélyebb beágyazást szeretnél létrehozni egy HTML vagy CSS kódban.
:::

:::tip * használata

A `*` karakter az Emmet kifejezésekben használt szorzó vagy ismétlő karakter, és azt jelzi, hogy egy adott elemet vagy kódblokkot többször szeretnél létrehozni. Amikor a `*` karaktert használod, megadhatod, hogy hány példányban szeretnéd az elemet vagy a blokkot létrehozni.

Például, ha azt szeretnéd kifejezni Emmet segítségével, hogy egy `<li>` elemet háromszor szeretnél létrehozni egy listában, akkor így írnád:

```
li*3
```

Ez azt jelenti, hogy három `<li>` elemet fogsz létrehozni a kódodban.

Az `*` karakter hasznos lehet, ha sok azonos típusú elemet szeretnél gyorsan generálni vagy ismételni a kódban, és segít a kód hatékonyabbá tételében. Az Emmet számos további lehetőséget kínál a `*` karakterrel, például attribútumok vagy tartalom ismétlésére is, így nagyon rugalmasan alkalmazható a kódírás során.
:::

#### Prettier

A Prettier egy kódfelület formázó eszköz, amely segít a kódod egységes és átlátható formázásában. A Prettier automatikusan átalakítja a kódodat, hogy megfeleljen a beállított stilisztikai szabályoknak, így nem kell manuálisan formázni a kódot.

#### Hogyan használhatod a Prettier-t a Visual Studio Code-ban

1. Először is, telepítened kell a Prettier kiterjesztést a VS Code-ban. A "__Prettier - Code formatter__" nevű kiterjesztést a VS Code bővítmény piacáról telepítheted.
2. Miután telepítetted, nyisd meg egy projektet vagy fájlt, majd használd az alábbi módok egyikét:
   - Automatikus formázás: A Prettier automatikusan formázza a kódot, amikor egy fájlt megnyitsz vagy elmentesz.
   - Manuális formázás: Az editor alján található "Format Document" vagy "Format Selection" opciókkal manuálisan formázhatod a kódot.

Mind az Emmet, mind a Prettier segítséget nyújtanak a kód hatékonyabb és átláthatóbb írásában és formázásában a Visual Studio Code-ban. Az Emmet segít a rövidített kódfelírások használatával, míg a Prettier automatikusan formázja a kódot a megadott stilisztikai szabályoknak megfelelően.

## HTML alapvető elemei

A HTML, vagyis a "_HyperText Markup Language_" az internet alapvető építőeleme, amely lehetővé teszi, hogy a világ minden tájáról érkező információkat és tartalmakat böngészőnkön keresztül megtekinthessük és interakcióba léphessünk velük. A HTML a weboldalak létrehozásának alapját képezi, és széles körben használt nyelv a webfejlesztésben.

A HTML alapelvei olyan strukturált dokumentumok létrehozását teszik lehetővé, amelyeket webböngészők megjelenítenek. Ezek a dokumentumok szöveget, képeket, videókat, hivatkozásokat és más multimédiás elemeket tartalmaznak, és lehetővé teszik a felhasználók számára a böngészés, az információkeresés és az online tevékenységek folytatása.

A HTML alapvetően egy jelölőnyelv, ami azt jelenti, hogy különböző címkékkel vagy elemekkel látja el a dokumentum tartalmát. Ezek a címkék különböző funkciókat és jelentéseket hordoznak, és a böngészők ezek alapján rendezi el és jeleníti meg a tartalmat. A HTML-dokumentumok struktúráját és tartalmát egyértelműen definiálja, így azok könnyen értelmezhetők és feldolgozhatók.

A HTML-dokumentumokat általában két fő részre osztjuk: a fejlécre és a tartalomra. A fejléc (__head__) rész tartalmazza az olyan metaadatokat, mint a karakterkészlet, a cím, a stíluslapok és a skriptek, amelyek az oldal megjelenítése és viselkedése szempontjából fontosak, de nem jelennek meg közvetlenül a böngészőablakban. A tartalom (__body__) rész tartalmazza magát az oldalon megjelenő szöveget, képeket, táblázatokat és minden olyan elemet, amit a látogatók látnak és használnak.

A HTML az idők során fejlődött, és több verziója létezik, de a legújabb és legelterjedtebb verzió az __HTML5__. A HTML5 számos új elemet és funkciót vezetett be, amelyek lehetővé teszik a jobb multimédiás tartalmak integrációját, az interaktív webalkalmazások fejlesztését és a mobil eszközökkel való kompatibilitást.

Összességében a HTML az online világ alapját képezi, és fontos szerepet játszik a webfejlesztők és tartalomkészítők munkájában. Ahhoz, hogy hatékonyan használhassuk a HTML-t, érdemes megismernünk az alapvető címkéket és szabályokat, amelyek lehetővé teszik számunkra, hogy saját weboldalainkat hozzuk létre és testreszabjuk.


### `<!DOCTYPE>`

Az `!DOCTYPE`, vagyis a "__Document Type Declaration__", egy olyan speciális kódsor, amelyet a HTML-dokumentum elején helyeznek el, és a böngészőnek segít abban, hogy értelmezze az adott HTML-verziót és megfelelően jelenítse meg az oldalt. A HTML dokumentum struktúrájának és szabványosságának fontos része.

Bevezetése a HTML fejlesztésének korai szakaszában kezdődött. Az első HTML-specifikációk még nem rendelkeztek azzal a szigorú szabvánnyal, ami ma ismeretes, így a böngészők gyakran másképp értelmezték az oldalakat. Ahhoz, hogy rendszeresebbé és előre láthatóvá tegyék a böngészők által való megjelenítést, bevezették a `!DOCTYPE`-t. Segít az oldalak szabványosságának és validitásának ellenőrzésében. A megfelelő `!DOCTYPE` megszabja a HTML dokumentum struktúráját és a benne használható elemeket, attribútumokat. Ha az oldal nem tartalmaz `!DOCTYPE`-t vagy rosszul formázott, a böngészők különböző módokon értelmezhetik, ami hibákhoz és inkompatibilitáshoz vezethet. A `!DOCTYPE` az adott HTML-verziótól függően változhat. Például a HTML5 esetén a `<!DOCTYPE html>` használatos, míg az előző verziókhoz más `!DOCTYPE`-ok tartoznak. A böngészők a megadott `!DOCTYPE` alapján állítják be a megfelelő renderelési módokat és funkciókat.

Az alábbiakban látható egy példa a HTML5 `!DOCTYPE` használatára:

   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>Példa Oldal</title>
   </head>
   <body>
       <h1>Üdvözöljük a Példa Oldalon</h1>
       <p>Ez egy példa HTML oldal.</p>
   </body>
   </html>
   ```

Amikor a böngésző feldolgozza a `!DOCTYPE`-t, meghatározza az oldal verzióját, és ennek megfelelően értelmezi az oldalon található HTML-t. Ez biztosítja az oldal szabványos megjelenítését és működését az összes modern böngészőben. Bár a HTML5 `<!DOCTYPE html>` az egyik legelterjedtebb, vannak más `!DOCTYPE`-ok is a korábbi HTML-verziókhoz. 

Például az XHTML 1.0 `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">`.

Online szolgáltatások is rendelkezésre állnak, amelyek ellenőrzik az oldal `!DOCTYPE`-ját és az azt követő HTML-t a szabványosság és a validitás szempontjából, és jelzik az esetleges hibákat vagy hiányosságokat. A HTML szabványok idővel változhatnak, így a `!DOCTYPE` is frissülhet. Fontos, hogy a legaktuálisabb és megfelelő `!DOCTYPE`-t használjuk az oldalak elkészítésekor.

Összefoglalva `!DOCTYPE` tehát egy alapvető eleme a HTML dokumentumoknak, amely segít a böngészőknek értelmezni és helyesen megjeleníteni az oldalakat, és hozzájárul a web szabványosságához és kompatibilitásához. Az alaposan megválasztott `!DOCTYPE` segít elkerülni a böngészők közötti inkompatibilitást és a hibás megjelenítést, valamint lehetővé teszi az oldalak konszisztens és szabványos kialakítását.

### `<html>`

A `<html>` tag a HTML egyik alapvető eleme, és a weboldalak struktúrájának kezdetét jelzi. Ez a tag meghatározza a HTML dokumentum gyökérelemét, és minden más HTML elem ezen belül található, továbbá felelős az oldal tartalmának és struktúrájának meghatározásáért. Tartalmazza az összes további elemet, mint például a `<head>` és a `<body>`, amelyek meghatározzák az oldal fejlécét és tartalmát. Ez a tag elengedhetetlen a böngészők számára, hogy az oldalt helyesen értelmezzék és megjelenítsék. Továbbá lehetőséget nyújt attribútumok használatára, például a nyelv beállítására (`lang` attribútum). A `<html>` tag gyakran együtt használatos más fontos elemekkel, például a `<!DOCTYPE html>` deklarációval, ami meghatározza a HTML verziót. A `<html>` tag tartalmazhat további metaadatokat, mint például karakterkészlet vagy dokumentumnyelv beállításait. Ez a tag összefogja az oldal minden látható és láthatatlan tartalmát, ideértve a szöveget, képeket, hivatkozásokat és skripteket is. Létfontosságú az oldal struktúrájának és formázásának meghatározásához, és az oldal címének alapját képezi a böngésző címsorában. A `<html>` tagben található `<head>` és `<body>` elemek elrendezése határozza meg, hogy mely részek tartoznak az oldal fejlécéhez, és melyek a tartalomhoz. Ez a tag lehetővé teszi a webfejlesztők számára az oldal struktúrájának és elemek elrendezésének meghatározását. A HTML dokumentum összes része a `<html>` tag alatt található, és a böngészők ezen belül kereshetik a tartalmat. A `<html>` tag lehetővé teszi a böngészők számára a helyes dokumentumstruktúra értelmezését, ami a megfelelő megjelenítéshez szükséges. A `<html>` tag megkülönbözteti a HTML tartalmat más típusú adatoktól, például a CSS vagy JavaScript kódoktól. Ez az oldal alapját képezi, amelyre további stílusok, interaktivitás és funkcionalitás épülhet. A `<html>` tag a weboldal fejlesztésének kiindulópontja, ahol a fejlesztők létrehozzák és testreszabják az oldal tartalmát. Kulcsfontosságú szerepet játszik a webes tartalom strukturálásában és előállításában. Végül, a `<html>` tag használata nélkülözhetetlen ahhoz, hogy egy weboldal létrejöhessen, és a HTML dokumentumok minden egyes eleme ennek az alapvető gyökérelemnek a részét képezi.

Most pedig nézzünk pár példát arra, hogy hogyan használjuk az `<html>` taget egy egyszerű HTML dokumentumban:

```html
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <title>Példa Oldal</title>
</head>
<body>
    <h1>Üdvözöljük a Példa Oldalon</h1>
    <p>Ez egy egyszerű HTML oldal példa.</p>
</body>
</html>
```

Ebben a példában a `<html>` tag határozza meg az oldal struktúráját, és minden tartalmat tartalmaz a `<!DOCTYPE html>` deklarációval együtt. Az `<html>` tag tartalmazza a `<head>` és a `<body>` elemeket is, amelyek meghatározzák az oldal fejlécét és tartalmát.

### `<head>` 

A `<head>` tag a HTML dokumentum egy olyan része, amely kulcsfontosságú információkat és beállításokat tartalmaz egy weboldalhoz. Bár nem jelenik meg közvetlenül a böngésző ablakában, rendkívül fontos szerepe van az oldal megjelenésének és viselkedésének szempontjából.

#### Metaadatok

A `<meta>` elemek segítségével definiálhatók különböző metaadatok az oldalhoz. Például a karakterkészlet beállítására szolgáló `<meta charset="UTF-8">`, vagy a leírás megadására használt `<meta name="description" content="Weboldal leírása">`. Ezek a metaadatok segítik a böngészőt és keresőmotorokat az oldal helyes kezelésében és indexálásában.

#### Title

A `<title>` elem határozza meg az oldal címét, amit a böngésző fülén vagy a könyvjelzők listájában láthatunk. Például: `<title>Weboldal Címe</title>`.

#### Stíluslapok és szkriptek

A `<link>` elemekkel és `<script>` elemekkel hivatkozhatunk külső stíluslapokra és JavaScript fájlokra, amelyek meghatározzák az oldal kinézetét és viselkedését. Például: `<link rel="stylesheet" href="style.css">` vagy `<script src="script.js"></script>`.

Az alábbi példa bemutatja, hogyan nézhet ki egy `<head>` rész egy valós HTML-dokumentumban:

```html
<!DOCTYPE html>
<html>
<head>
   <meta charset="UTF-8">
   <title>Weboldal Példa</title>
   <meta name="description" content="Ez egy példa weboldal leírása">
   <link rel="stylesheet" href="style.css">
   <script src="script.js"></script>
</head>
<body>
   <!-- Oldal tartalma itt -->
</body>
</html>
```

Ebben a példában a `<head>` rész tartalmazza a karakterkészlet beállítását, az oldal címét, a leírást, kulcsszavakat, egy stíluslap hivatkozást és egy JavaScript fájl hivatkozást. Ezek az információk segítik a böngészőt és keresőmotorokat az oldal megfelelő megjelenítésében és indexálásában, valamint a fejlesztőket az oldal további testreszabásában.

### `<body>`

A `<body>` tag a weboldalak látható tartalmát tartalmazza. Ez az a rész, amit a böngészők megjelenítenek a felhasználók számára. A `<body>` tag gyakorlatilag az oldal "testét" tartalmazza, és minden olyan elemet tartalmaz, amit a látogatók a böngészőkben látnak és interakcióba lépnek vele.

A `<body>` tagben találhatók az olyan kulcsfontosságú elemek, mint a szövegek, képek, hivatkozások, gombok, űrlapok és más tartalmi elemek. Itt találhatóak azok a HTML címkék is, amelyek meghatározzák az oldal struktúráját és vizuális formázását. Például a `<h1>`-től `<h6>` címkék segítségével címeket adhatunk az oldalunknak, a `<p>` címkékkel szövegeket írhatunk le, a `<img>` címkékkel képeket jeleníthetünk meg, és a `<a>` címkékkel hivatkozásokat készíthetünk.

A `<body>` tag tehát az oldal tartalmának konténere, és az itt elhelyezett elemek meghatározzák, hogy milyen információt vagy funkciót kínál az oldal a látogatóknak. Ennek a tagnek a helyes használata segít abban, hogy az oldalak jól strukturáltak és könnyen értelmezhetők legyenek a felhasználók számára.

Példák arra, hogy hogyan néz ki egy `<body>` tag HTML kódja:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Példa oldal</title>
</head>
<body>
    <h1>Üdvözöljük a Példa Oldalon</h1>
    <p>Ez egy egyszerű példa arra, hogyan használjuk a &lt;body&gt; taget.</p>
    <img src="kep.jpg" alt="Egy kép példa">
    <a href="https://www.pelda.hu">Kattintson ide a Példa webhelyre!</a>
</body>
</html>
```

Ebben a példában a `<body>` tag tartalmazza az oldal címét, címeket, szövegeket, egy képet és egy hivatkozást. Ezek az elemek jelennek meg a böngészőablakban, és teszik lehetővé a felhasználók számára az oldal tartalmának megtekintését és interakcióját.



### `<meta>`

A `<meta>` tag egy HTML elem, amelyet általában az oldal fejlécében találunk meg, a `<head>` részben. A `<meta>` tag használata segít az információk, metaadatok beágyazásában az oldalba, amelyeket a böngészők vagy más webes eszközök olvasnak és használnak. Ezek a metaadatok általában nem láthatók a felhasználók számára, de fontosak lehetnek a weboldal SEO (keresőoptimalizálás), social media megosztás és más funkciók szempontjából.

A `<meta>` tag közvetít számos kulcsfontosságú információt az oldalról, például a karakterkészletet, az oldal leírását (meta leírás), az oldal szerzőjét és az egyéb hasznos metaadatokat.

Például, ha az oldalunkat megfelelően kódoljuk, a következőképpen nézhet ki a `<meta>` tag egy része:

```html
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Ez egy példa weboldal leírása">
    <meta name="author" content="John Doe">
    <meta name="keywords" content="példa, weboldal, metaadat">
</head>
```

Most nézzünk néhány példát arra, hogy milyen szerepet játszik a `<meta>` tag:

A `<meta name="keywords">` tag a weboldal kulcsszavait definiálja. Ezen kulcsszavak segítenek a keresőmotoroknak megérteni, hogy az adott oldal miről szól, és segíthetnek a keresési eredményekben való jobb rangsorolásban. Példában szerepel: `HTML`, `CSS`, `JavaScript`, ami azt jelzi, hogy az oldal kapcsolódik ezekhez a témákhoz.

A `<meta name="description">` tag az oldal rövid leírását tartalmazza, amely megjelenhet a keresési eredmények címsorában. Az itt található leírás segíthet a felhasználóknak és a keresőmotoroknak gyorsan megérteni, hogy az oldal milyen tartalmat kínál.

A `<meta name="author">` tag megadja az oldal szerzőjét vagy készítőjét. Ezzel az információval az olvasók és a böngészők megtudhatják, hogy ki felelős az oldal tartalmáért.

A `<meta http-equiv="refresh">` tag automatikus frissítést indít az oldalon. Az itt megadott szám a másodpercek számát jelöli, mielőtt az oldal automatikusan frissülne. Ebben a példában minden 30 másodpercenként frissül az oldal.

A `<meta name="viewport">` tag a böngésző nézeti portjának (viewport) beállítását határozza meg. Ebben a példában a `width=device-width` azt jelenti, hogy a viewport szélessége megegyezik az eszköz szélességével, és az `initial-scale=1.0` beállítás az alapértelmezett nagyítást állítja be.

Ezek a `<meta>` tagek fontosak a webfejlesztés során, mivel segítenek a weboldalak optimalizálásában a keresőmotorok és a böngészők számára, és lehetővé teszik a jobb felhasználói élmény kialakítását különböző eszközökön és képernyőméreteken.

## HTML5 legfontosabb strukturális elemei

A következőkben találkozni fogunk a HTML5 legfontosabb strukturális elemeit, és elmagyarázom, hogyan alkalmazhatóak.


### `<p>`

Ez a címke egy szövegbekezdést jelöl, és használható a szövegek strukturális elrendezéséhez.

```html
<p>Ez egy példa bekezdés.</p>
```

### `<title>`

A `<title>` címke az oldal címét definiálja, amely a böngésző lapfülén jelenik meg, és fontos a keresőmotor-optimalizálás (SEO) szempontjából.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Weboldal Címe</title>
</head>
<body>
    <!-- Tartalom itt -->
</body>
</html>
```

### `<h1>` - `<h6>`

Ezek a címkék címeket vagy alcímeket jelölnek, és fontosak az oldal hierarchiájának és struktúrájának meghatározásában.

```html
<h1>Első szintű cím</h1>
<h2>Második szintű cím</h2>
<h3>Harmadik szintű cím</h3>
```

### `<img>`

Ezzel a címkével képeket lehet beilleszteni az oldalra, és a `src` attribútum segítségével megadható a képfájl elérési útja.

```html
<img src="kep.jpg" alt="Ez egy kép">
```

### `<a>`

A `<a>` címkét használhatja hivatkozások (link) létrehozásához más oldalakra vagy erőforrásokra. A `href` attribútum meghatározza a link célját.

```html
<a href="https://www.example.com">Ez egy példa link</a>
```

### `<link>`

A `<link>` címke segítségével külső stíluslapokat vagy ikonokat lehet hivatkozni az oldalra.

```html
<link rel="stylesheet" type="text/css" href="style.css">
<link rel="icon" href="favicon.ico" type="image/x-icon">
```

### `<strong>`

A `<strong>` címke a szöveget félkövér formátumban jeleníti meg, ami hangsúlyozást jelent.

```html
<p>Ez egy <strong>félkövér</strong> szövegrész.</p>
```

### `<em>`

Az `<em>` címke a szöveget dőlt formátumban jeleníti meg, ami általában hangsúlyozást vagy kiemelést jelent.

```html
<p>Ez egy <em>dőlt</em> szövegrész.</p>
```

### `<figure>` és `<figcaption>`

Ezek a címkék egy képet (`<figure>`) és annak feliratát (`<figcaption>`) egységként jelölnek. Hasznos képek és azok leírásainak kapcsolásához.

```html
<figure>
    <img src="kep.jpg" alt="Ez egy kép">
    <figcaption>Ez a kép felirata.</figcaption>
</figure>
```

### `<div>`

A `<div>` címke egy általános blokkelemet jelöl, amely segít az oldal tervezésében és elrendezésében.

```html
<div>
    <p>Ez egy blokk elembe tartozó szöveg.</p>
</div>
```

### `<span>`

A `<span>` címke egy inline elemet jelöl, amely általában kisebb szövegrészletek vagy stílusok kiemelésére szolgál.

```html
<p>Ez egy <span style="color: red;">piros színű</span> szövegrész.</p>
```

Ezen elemek kombinálásával és megfelelő elrendezésükkel létrehozhatók a weboldalak strukturális részei, és a tartalom és a formázás elkülönítése segít az oldalak könnyebb karbantartásában és stílusának változtatásában. Az HTML5 egy sokoldalú eszköz a weboldalak tervezéséhez és fejlesztéséhez.



## HTML5 legfontosabb attribútumai

A következőkben megnézzük a HTML5 legfontosabb attribútumait, és elmagyarázom, hogyan alkalmazhatóak.

### `href`
   Az `href` attribútumot gyakran használjuk hiperhivatkozások (link) címének megadására. Ezen attribútum segítségével a böngésző tudja, hogy hová irányítsa a felhasználót, amikor a linkre kattint.

   ```html
   <a href="https://www.pelda.com">Példa link</a>
   ```

### `target`
   A `target` attribútum lehetővé teszi, hogy meghatározzuk, hogyan nyíljon meg a link. Például, `_blank` érték esetén az új oldal egy új ablakban jelenik meg.

   ```html
   <a href="https://www.pelda.com" target="_blank">Példa link új ablakban</a>
   ```

### `src`
   Az `src` attribútumot gyakran használjuk képek, hang- vagy videofájlok forrásának megadására. Az `img`, `audio`, és `video` elemeknél alkalmazzuk.

   ```html
   <img src="kep.jpg" alt="Leíró szöveg a képhez">
   ```

### `alt`
   Az `alt` attribútum a képek esetében fontos, mivel egy alternatív szöveget ad meg a kép számára, amit akkor jelenít meg, ha a kép nem tölthető be, vagy ha a felhasználók képek letöltését tiltották.

   ```html
   <img src="kep.jpg" alt="Egy gyönyörű naplemente a tengerparton">
   ```

### `lang`
   A `lang` attribútummal meghatározhatjuk a dokumentum nyelvét. Ez segíthet a böngészőnek és a keresőmotoroknak az oldal helyes értelmezésében.

   ```html
   <html lang="hu">
     <head>
       <meta charset="UTF-8">
       <title>Weboldal címe</title>
     </head>
     <body>
       <p>Ez a weboldal magyar nyelven van.</p>
     </body>
   </html>
   ```

### `charset`
   A `charset` attribútummal megadhatjuk az oldal karakterkódolását, ami fontos a szöveges tartalmak helyes megjelenítéséhez.

   ```html
   <meta charset="UTF-8">
   ```

### `style`
   A `style` attribútummal lehetőségünk van közvetlenül a HTML elemekhez CSS stílusokat hozzáadni. Ezáltal testre szabhatjuk az elemek megjelenését.

   ```html
   <p style="color: blue; font-size: 16px;">Ez a szöveg kék színű és 16px méretű.</p>
   ```

Ezek az attribútumok kulcsfontosságúak az HTML5-ben, és lehetővé teszik az oldalak részletes testreszabását és a tartalom megfelelő kezelését a böngészők és keresőmotorok számára.


## HTML-listák típusai

HTML-ben három fő típusú lista található: számozott lista (`<ol>`), számozatlan lista (`<ul>`), és definíciós lista (`<dl>`). Minden típusnak megvannak a sajátosságai és felhasználási területei.

### Számozott lista (`<ol>`)
A számozott lista olyan lista, ahol a listaelemek számokkal vannak ellátva. Ezek a számok alapértelmezés szerint arab számok (1, 2, 3, stb.), de lehetőség van azok cseréjére római számokra vagy betűkre is. A `<ol>` elemet használjuk a számozott listák létrehozásához, míg a `<li>` elemeket használjuk a listaelemek definiálásához.

Példa egy számozott listára arab számokkal:
```html
<ol>
  <li>Első elem</li>
  <li>Második elem</li>
  <li>Harmadik elem</li>
</ol>
```

Példa számozott listára római számokkal:
```html
<ol type="i">
  <li>Első elem</li>
  <li>Második elem</li>
  <li>Harmadik elem</li>
</ol>
```

### Számozatlan lista (`<ul>`)
A számozatlan lista olyan lista, ahol a listaelemek előtt jelölők (általában kör alakú pontok vagy más ikonok) találhatók. A `<ul>` elemet használjuk a számozatlan listák létrehozásához, és a `<li>` elemekkel definiáljuk a listaelemeket.

Példa számozatlan listára kör alakú pontokkal:
```html
<ul>
  <li>Első elem</li>
  <li>Második elem</li>
  <li>Harmadik elem</li>
</ul>
```

Példa számozatlan listára négyzet alakú pontokkal:
```html
<ul style="list-style-type: square;">
  <li>Első elem</li>
  <li>Második elem</li>
  <li>Harmadik elem</li>
</ul>
```

### Definíciós lista (`<dl>`)
A definíciós lista egy olyan lista, amely definíciókból és azokhoz tartozó leírásokból áll. A `<dl>` elemet használjuk a definíciós listák létrehozásához, a `<dt>` elemekkel definiáljuk a kulcsszavakat (definíciókat), és a `<dd>` elemekkel adhatjuk meg a hozzájuk tartozó leírásokat.

Példa definíciós listára:
```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language - az internetes tartalom leírására szolgáló nyelv.</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets - az internetes tartalom megjelenítésének nyelve.</dd>
</dl>
```

Ezek a példák bemutatják, hogyan hozhatók létre különböző típusú listák HTML-ben. Fontos megjegyezni, hogy a listaelemek tartalmát bármilyen HTML tartalommal kitölthetjük, például szöveggel, képekkel vagy más HTML elemekkel. A listák formázását CSS segítségével tovább testre szabhatjuk.


## A táblázatok szerepe


A táblázatok szerepe HTML-lapokon nagyon fontos, mivel lehetővé teszik a strukturált adatok és információk rendezett megjelenítését. Táblázatok segítségével lehetőség van adatok oszlopok és sorok formájában való elrendezésére, ami különösen hasznos táblázatok, árlisták, statisztikák, menük és más strukturált adatok esetén. Az alábbiakban megnézzük a táblázatok létrehozásának alapvető elemeit:

### `<table>`

A táblázatot a `<table>` elemmel kezdjük. Ez az elem tartalmazza a teljes táblázatot.

Példa táblázat létrehozására:
```html
<table>
  <!-- táblázat tartalma ide kerül -->
</table>
```

### `<tr>`

A táblázatsorokat a `<tr>` (table row) elemmel definiáljuk. Minden sor tartalmazza a táblázat egy sorát.

Példa táblázatsorok létrehozására:
```html
<table>
  <tr>
    <!-- sor tartalma ide kerül -->
  </tr>
  <tr>
    <!-- második sor tartalma ide kerül -->
  </tr>
</table>
```

### `<td>`

A táblázat adatait a `<td>` (table data) elemmel definiáljuk. Ezek tartalmazzák a tényleges adatokat, amelyek a táblázatban megjelennek.

Példa az adatok létrehozására:
```html
<table>
  <tr>
    <td>Cella 1</td>
    <td>Cella 2</td>
  </tr>
  <tr>
    <td>Cella 3</td>
    <td>Cella 4</td>
  </tr>
</table>
```

### `<th>`

A táblázat fejléceit a `<th>` (table header) elemmel definiáljuk. Ezek általában félkövér vagy más formázásúak, és a táblázat oszlopainak címeit tartalmazzák.

Példa a fejlécek létrehozására:
```html
<table>
  <tr>
    <th>Oszlop 1</th>
    <th>Oszlop 2</th>
  </tr>
  <tr>
    <td>Adat 1</td>
    <td>Adat 2</td>
  </tr>
</table>
```

### `<caption>`

A táblázathoz hozzáadhatunk egy címsort a `<caption>` elem segítségével, amely leírja a táblázat tartalmát vagy célját.

Példa címsor hozzáadására a táblázathoz:
```html
<table>
  <caption>Ez egy példa táblázat</caption>
  <tr>
    <th>Oszlop 1</th>
    <th>Oszlop 2</th>
  </tr>
  <tr>
    <td>Adat 1</td>
    <td>Adat 2</td>
  </tr>
</table>
```

Ezen elemek kombinálásával lehetőségünk van kialakítani és formázni a táblázatokat a HTML-lapokon. Az egyes elemek stílusát tovább testre szabhatjuk CSS segítségével. A táblázatok különböző oszlopaiban és sorain lehet különböző számú cella is, ami rugalmasságot biztosít az adatok megjelenítésében.