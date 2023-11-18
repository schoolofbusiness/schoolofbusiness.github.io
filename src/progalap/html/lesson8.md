---
category:
  - Weboldalak formázása
---

# 8. tananyag



## A CSS függvények

A CSS függvények olyan eszközök, amelyek lehetővé teszik a webfejlesztők számára a stílusok és formázások precíz meghatározását. Ezek a függvények segítenek a színválasztásban (`rgb()`, `rgba()`, `hsl()`, `hsla()`), külső erőforrások beágyazásában (`url()`), és matematikai műveletek végrehajtásában (`calc()`) a CSS tulajdonságokban. A függvények alkalmazása lehetővé teszi a kreatív és rugalmas tervezést a weboldalak kialakításában.

### `url()` függvény

A `url()` függvény a webfejlesztők számára egy hatékony eszköz, amellyel külső erőforrásokat, például képeket vagy betűtípusokat lehet beállítani az elemekhez. Egy egyszerű példa a háttérkép beállítására:

```css
background-image: url('kep.jpg');
```

Ezzel az egyetlen sorral könnyedén hozzáadhatunk egy háttérképet az oldalhoz. A `url()` függvény rendkívül hasznos, ha képek vagy más erőforrásokat kell hivatkozni.

### `rgb()` és `rgba()` függvények

Az `rgb()` és `rgba()` függvények a színek megadására szolgálnak, különösen a háttérszínek vagy szövegszínek beállításakor. Az `rgb()` függvény három számot vár, amelyek a vörös, zöld és kék színkomponenseket reprezentálják. Például:

```css
color: rgb(255, 0, 0); /* Piros szín */
```

Az `rgba()` függvény lehetővé teszi az átlátszóság megadását a színhez, így a különböző átlátszósági szintekkel rendelkező színeket hozhatunk létre. Például:

```css
background-color: rgba(0, 0, 255, 0.5); /* Félátlátszó kék */
```

Ezek a függvények a webfejlesztők számára pontos színválasztást biztosítanak, és lehetővé teszik az oldalak személyre szabását.

### `hsl()` és `hsla()` függvények

Az `hsl()` és `hsla()` függvények egy másik módját kínálják a szín megadásának. A HSL (Hue, Saturation, Lightness) modell használatával definiálják a színeket. Az `hsl()` függvény segítségével könnyen meghatározhatók a színárnyalat, telítettség és világosság értékek. Például:

```css
background-color: hsl(120, 100%, 50%); /* Zöld szín */
```

Az `hsla()` függvény ugyanezt teszi, de hozzáad egy negyedik értéket, az átlátszóságot. Például:

```css
background-color: hsla(120, 100%, 50%, 0.5); /* Félátlátszó zöld */
```

Az `hsl()` és `hsla()` függvények kiválóan alkalmazhatók akkor, amikor a színek átlátszóságát is figyelembe szeretnénk venni.

### `calc()` függvény

A `calc()` függvény egy matematikai műveleteket végrehajtó eszköz, amely lehetővé teszi a CSS tulajdonságok dinamikus beállítását. Például:

```css
width: calc(100% - 20px);
```

Ezzel a sorral a szélességet ahol a szülőelem szélességéből 20 pixelt vonunk le. Ez hasznos lehet, amikor a stílusokat változókhoz vagy dinamikus tartalmakhoz kell igazítani.

Összességében a CSS függvények hatalmas előnyt jelentenek a webfejlesztők számára, mivel lehetővé teszik az egyszerű és hatékony stílusdefiníciókat, és rugalmasabbá teszik a tervezési folyamatot. A `url()`, `rgb()`, `rgba()`, `hsl()`, `hsla()` és `calc()` függvények közösen hozzájárulnak a weboldalak megjelenésének és funkcionalitásának javításához.


## CSS reset

A CSS reset a webfejlesztők által használt technika, amelynek célja a böngészők alapértelmezett stílusai és formázásai által okozott különbségek kiegyenlítése, hogy egységes alapot teremtsen az oldalak tervezése során. A CSS reset segít a böngészők közötti összhang megteremtésében, és lehetővé teszi, hogy a fejlesztők teljes kontrollt szerezzenek az oldal stílusában.

### A fő céljai

1. Alapértelmezett stílusok eltávolítása: A böngészők különböző alapértelmezett stílusokat alkalmaznak az elemekre, például a margókat, a paddinget, a betűtípusokat és méreteket. A CSS reset eltávolítja vagy nullára állítja ezeket az értékeket, így a fejlesztők szinte nulláról indulnak a stílusok beállításakor.

2. Cross-platform összehangolás: A CSS reset célja az, hogy a különböző böngészőkben és platformokon a lehető legközelebbi megjelenést érjük el, így minimalizálva a böngészőfüggő stílusproblémákat.

### A használatának módja

1. CSS reset fájl beillesztése: A CSS reset rendszerint egy külön CSS fájlban található. Ezt a fájlt a weboldal stíluslapja előtt kell beilleszteni, hogy azokat a böngésző alapértelmezett stílusokat felülírja, amelyeket a fejlesztő kíván eltávolítani vagy felülírni.

   Példa a CSS reset fájl beillesztésére:

   ```html
   <link rel="stylesheet" type="text/css" href="reset.css">
   <link rel="stylesheet" type="text/css" href="style.css">
   ```

2. A CSS reset alkalmazása: Miután a CSS reset fájlt beillesztettük, az oldalon minden elem az alapértelmezett stílusok nélkül jelenik meg. Ezt követően a webfejlesztőknek saját stílusokat adhatnak hozzá az elemekhez, és azokat a tervezési igényeiknek megfelelően formázhatják.

Fontos megjegyezni, hogy a CSS resetnek saját előnyei és hátrányai vannak. Bár segít az egységes megjelenés kialakításában, néhány stílus tulajdonság visszaállítása szükséges lehet a tervezői preferenciákhoz vagy a tervezési keretrendszerekhez való igazodás érdekében. Továbbá a CSS reset néha feleslegesen bővíti a CSS kódot, és növelheti az oldal betöltési idejét. Ezért érdemes megfontolni a projekt specifikus igényeket, mielőtt egy CSS resetet alkalmaznánk.


## HTML5-lapszerkezet

Az HTML5 új elemeket vezetett be a weboldalak kialakításához, amelyek a szemantika és az elrendezés jobb megértését és kezelhetőségét segítik elő. Ezek az elemek olyan strukturális elemek, amelyek segítik a böngészőket és keresőmotorokat az oldal tartalmának megértésében, valamint könnyebbé teszik a fejlesztők számára a stílusok és elrendezés kezelését.

### `header`

Az `header` elemet általában a weboldal tetején használják, és benne gyakran megtalálható a weboldal címe, logója és a fő navigációs menü. A `header` az oldal tetején található és általában globális információkat tartalmaz, amelyek az összes oldalra vonatkoznak.

###  `nav`

A `nav` elem egy olyan tartományt határoz meg, amely kifejezetten a navigációs elemek számára van fenntartva. Itt találhatóak az oldalon belüli linkek, amelyek segítenek a felhasználóknak az oldalon történő navigációban. A `nav` elem segít a böngészőknek a navigációs tartalom azonosításában, és hozzájárul az oldal struktúrájának kialakításához.

###  `section`

A `section` elem egy olyan részt definiál az oldalon, amelynek saját tartalmi egysége van. Például egy weboldal tartalmazhat több különböző `section` elemet, amelyek különféle tartalmi témákat vagy fejezeteket képviselnek. Az `section` elem segít a weboldal tartalmának logikus csoportosításában.

###  `article`

Az `article` elem egy olyan tartalmi egységet határoz meg, amely önállóan is értelmes és önmagában is érthető. Ez a tartalmi egység például lehet egy blogbejegyzés, hír cikk vagy egy önálló oldal. Az `article` elem segít a böngészőknek és keresőmotoroknak a tartalom elkülönítésében és azonosításában.

### `aside`

Az `aside` elem olyan tartalmi területet jelöl, amely részben kapcsolódik a fő tartalomhoz, de nem elengedhetetlen az alapértelmezett olvasáshoz. Ez lehet például egy oldalsáv, amely tartalmazhat linkeket, reklámokat, vagy további információkat. Az `aside` segít az oldal tisztaságában és a kiegészítő információk elkülönítésében.

###  `footer`

A `footer` az oldal végén található, és általában tartalmazza az oldal láblécének információit, például a szerző nevét, kapcsolatinformációkat, vagy az oldal frissítési dátumát. A `footer` elem a weboldal záróelemeként szolgál, és segít az oldal befejezésében és strukturális kiegyensúlyozásában.

###  `main`

Az `main` elem az oldal fő tartalmi területét jelöli, és csak egy darab `main` elemnek szabad egy oldalon előfordulni. Az `main` elem segít a böngészőknek és keresőmotoroknak az oldal fő tartalmának azonosításában. Ebben a tartományban található a legfontosabb és legrelevánsabb információ az oldalon.


### Példa

```html
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML5 szemantikus elemek példa</title>
</head>
<body>
    <header>
        <h1>HTML5 szemantikus elemek példa</h1>
        <nav>
            <ul>
                <li><a href="/">Kezdőlap</a></li>
                <li><a href="/about">Rólunk</a></li>
                <li><a href="/contact">Kapcsolat</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section>
            <h2>Bevezetés</h2>
            <p>Ez a weboldal a HTML5 szemantikus elemek használatát mutatja be.</p>
        </section>
        
        <section>
            <h2>Funkciók</h2>
            <p>Bemutatja a header, nav, section, article, aside, footer és main elemeket.</p>
        </section>
        
        <article>
            <h3>Cikk címe</h3>
            <p>Ez a cikk bemutatja az HTML5 szemantikus elemek használatát.</p>
        </article>
    </main>
    
    <aside>
        <h4>Kiemelt hírek</h4>
        <ul>
            <li><a href="/news1">Fontos hír 1</a></li>
            <li><a href="/news2">Fontos hír 2</a></li>
        </ul>
    </aside>
    
    <footer>
        <p>&copy; 2023 Weboldal Neve. Minden jog fenntartva.</p>
    </footer>
</body>
</html>
```

Az HTML5 szemantikus elemek nagyban hozzájárulnak a weboldalak megértéséhez és karbantarthatóságához. A böngészők és keresőmotorok hatékonyabban tudják feldolgozni az oldal tartalmát, és a fejlesztőknek segítséget nyújtanak az oldalak strukturális kialakításában. 

