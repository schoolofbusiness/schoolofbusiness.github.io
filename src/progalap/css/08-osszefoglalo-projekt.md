---
title: "Összefoglaló projekt"
order: 8
category: CSS
tag:
  - Projekt
---

# 8. Összefoglaló projekt: szakköri bemutatkozó oldal

Készíts bemutatkozó oldalt egy iskolai szakkörnek! A HTML-vázat megkapod, a feladatod a hozzá tartozó külső stíluslap elkészítése. Használd együtt az előző hét leckében tanultakat: a kijelölőket, színmegadási módokat, mértékegységeket, háttereket, szövegformázást, dobozmodellt és táblázatformázást.

A szakkör nevét és a szövegeket átírhatod saját témára. Kép, külső betűtípus és JavaScript nem szükséges a megoldáshoz.

## Előkészítés

Hozz létre egy mappát, benne két fájllal:

```text
css-projekt/
  index.html
  style.css
```

Másold az alábbi HTML-t az `index.html` fájlba! A `style.css` kezdetben legyen üres, majd nyisd meg a HTML-fájlt a böngészőben. A két fájl maradjon ugyanabban a mappában, hogy a stíluslap csatolása működjön.

## Kiinduló HTML

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Webes alkotóműhely</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
<main class="css-projekt">
  <header class="fejlec">
    <p class="felirat">Iskolai szakkör</p>
    <h1>Webes alkotóműhely</h1>
    <p>Tanulj, kísérletezz, és készíts saját weboldalakat!</p>
    <a class="gomb" href="#program">Nézd meg a programot!</a>
  </header>

  <section class="kartya">
    <h2>Mit készítünk?</h2>
    <p>A szakkörön egyszerű weboldalakat tervezünk és valósítunk meg.
      A tartalmat HTML-ben építjük fel, a megjelenést CSS-sel alakítjuk.</p>
    <ul>
      <li>Áttekinthető dokumentumszerkezet</li>
      <li>Összeillő színek és olvasható szövegek</li>
      <li>Formázott dobozok és táblázatok</li>
    </ul>
    <p class="kiemeles"><strong>Nem kell előzetes tapasztalat!</strong>
      A kíváncsiság és a rendszeres gyakorlás a legfontosabb.</p>
  </section>

  <section class="kartya" id="program">
    <h2>Foglalkozások</h2>
    <div class="tablazat-gorgetes">
      <table class="programtabla">
        <caption>A szakkör három tervezett foglalkozása</caption>
        <thead>
          <tr>
            <th scope="col">Téma</th>
            <th scope="col">Nehézség</th>
            <th scope="col">Időtartam</th>
          </tr>
        </thead>
        <tbody>
          <tr><th scope="row">Első HTML-oldal</th><td>Kezdő</td><td>45 perc</td></tr>
          <tr><th scope="row">Színek és betűk</th><td>Kezdő</td><td>60 perc</td></tr>
          <tr><th scope="row">Dobozok és táblázatok</th><td>Gyakorló</td><td>75 perc</td></tr>
        </tbody>
        <tfoot>
          <tr><th scope="row" colspan="2">Összes idő</th><td>180 perc</td></tr>
        </tfoot>
      </table>
    </div>
  </section>

  <footer class="lablec">
    <p>Készítette: Saját neved · CSS összefoglaló projekt</p>
  </footer>
</main>
</body>
</html>
```

A `class` értékeket és az `id="program"` azonosítót tartsd meg, hogy a megadott kijelölőkkel és a belső hivatkozással is dolgozhass!

## Követelmények

1. **Külső stíluslap:** a formázás a `style.css` fájlba kerüljön, ne használj inline stílusokat.
2. **Oldal és szélesség:** a projekt háttere legyen halványkék, a tartalom legfeljebb `56rem` széles, középre rendezett és belső térközzel ellátott.
3. **Színek:** használj hexadecimális és HSL-színmegadást, valamint legalább egy alfacsatornás háttérszínt.
4. **Fejléc:** készíts kék színátmenetes hátteret, világos szöveget és lekerekített sarkokat; maradjon meg egy egyszerű háttérszín tartaléknak.
5. **Szöveg:** állíts be betűcsaládot, olvasható sormagasságot és eltérő címsorméreteket; a kis fejlécfelirat legyen nagybetűs, ritkított betűközű.
6. **Dobozmodell:** a tartalmi kártyák kapjanak belső és külső térközt, szegélyt és lekerekítést; a méretezéshez használj `border-box` beállítást.
7. **Hivatkozás:** a programhoz ugró link kapjon gombszerű formát, és egérrel fölé állva, illetve billentyűzettel ráfókuszálva is legyen látható visszajelzés.
8. **Kiemelés:** a fontos bekezdést áttetsző háttérrel és hangsúlyos bal oldali szegéllyel emeld ki.
9. **Táblázat:** legyen teljes szélességű, egyesített szegélyű, belső cellatérközökkel, eltérő fejléccel és összegző sorral; az adatsorok háttere váltakozzon, az időtartamok legyenek jobbra igazítva.
10. **Kis ablak:** a táblázat szükség esetén a saját burkolójában legyen vízszintesen görgethető, ne az egész oldal lógjon ki.

::: tip Először saját megoldást készíts!
A színeknek nem kell pontosan megegyezniük a mintával. A követelmények teljesítése és a CSS-szabályok megértése fontosabb, mint a megoldás bemásolása.
:::

## Javasolt munkamenet

1. Állítsd be a betűcsaládot, a szövegszínt, a szélességet és a `box-sizing` értékét!
2. Formázd a fejlécet és a címsorokat, majd a belső hivatkozást!
3. Készítsd el a kártyák és a kiemelt bekezdés térközeit, hátterét és szegélyeit!
4. Formázd külön a táblázat fejlécét, törzsét, celláit és összegző sorát!
5. Minden lépés után ments, frissíts a böngészőben, és ellenőrizd a változást!

## Egy lehetséges megoldás

::: details A teljes style.css megjelenítése
```css
/* A szabályok csak a projekt elemeire vonatkoznak. */
.css-projekt,
.css-projekt * {
  box-sizing: border-box;
}

.css-projekt {
  width: 100%;
  max-width: 56rem;
  margin: 0 auto;
  padding: 1.25rem;
  background-color: #eaf2ff;
  color: #1f2937;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  overflow-wrap: anywhere;
}

.css-projekt h1,
.css-projekt h2 {
  margin: 0 0 1rem;
  padding: 0;
  border: 0;
  font-family: inherit;
  font-weight: 700;
  line-height: 1.25;
}

.css-projekt h1 { font-size: 2rem; }
.css-projekt h2 { color: hsl(215 70% 30%); font-size: 1.5rem; }
.css-projekt p { margin: 1em 0; text-align: left; line-height: 1.6; }
.css-projekt ul { padding-left: 1.5em; line-height: 1.6; }

.css-projekt .fejlec {
  padding: 1.5rem;
  border-radius: 12px;
  background-color: #1453a1;
  background-image: linear-gradient(120deg, #12386b, #096dd9);
  color: white;
}

.css-projekt .felirat {
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.css-projekt .gomb {
  display: inline-block;
  padding: 0.6em 1em;
  border: 2px solid white;
  border-radius: 8px;
  background-color: white;
  color: #12386b;
  font-weight: bold;
  text-decoration: none;
}

.css-projekt .gomb:hover,
.css-projekt .gomb:focus-visible {
  background-color: #dbeafe;
  text-decoration: underline;
}

.css-projekt .kartya {
  margin-top: 1.25rem;
  padding: 1.25rem;
  border: 1px solid #b9cee8;
  border-radius: 12px;
  background-color: white;
}

.css-projekt .kiemeles {
  padding: 1rem;
  border-left: 4px solid #096dd9;
  background-color: rgb(9 109 217 / 10%);
}

.css-projekt .tablazat-gorgetes { overflow-x: auto; }

.css-projekt .programtabla {
  width: 100%;
  min-width: 28rem;
  border-collapse: collapse;
  table-layout: fixed;
  color: #1f2937;
}

.css-projekt .programtabla caption {
  padding: 0.75rem;
  color: #12386b;
  font-weight: bold;
  text-align: left;
  caption-side: top;
}

.css-projekt .programtabla th,
.css-projekt .programtabla td {
  padding: 0.75rem;
  border: 1px solid #b9cee8;
  text-align: left;
  vertical-align: middle;
}

.css-projekt .programtabla thead {
  background-color: #12386b;
  color: white;
}

.css-projekt .programtabla tbody tr:nth-child(odd) { background-color: #eff6ff; }
.css-projekt .programtabla tbody tr:nth-child(even) { background-color: white; }
.css-projekt .programtabla tfoot { background-color: #dbeafe; font-weight: bold; }
.css-projekt .programtabla td:last-child { text-align: right; }

.css-projekt .lablec {
  margin-top: 1.25rem;
  color: #475569;
  font-size: 0.875rem;
  text-align: center;
}

.css-projekt .lablec p { text-align: center; }
```
:::

A `rem` a gyökérelem betűméretéhez, a gomb `em` egységű térköze a gomb betűméretéhez igazodik. A `width: 100%` és a `max-width` együtt a rendelkezésre álló helyhez alkalmazkodó szélességet ad. A `min-width` miatt a táblázat keskeny ablakban szélesebb lehet a kártyánál, ezért kapott külön görgethető burkolót.

A `.css-projekt` előtag azt jelzi, hogy a formázás a projekt tartalmára vonatkozik. A `:focus-visible` a billentyűzettel a hivatkozásra lépő felhasználónak ad visszajelzést. A `.gomb` itt egy hivatkozás formázását jelöli: az elem továbbra is az oldalon belüli célpontra ugrik.

## Kipróbálható minta

Az alábbi példa megmutatja a HTML és a CSS együttes eredményét. A JSFiddle gombbal külön szerkesztőben is módosíthatod.

::: normal-demo Webes alkotóműhely – kész minta
```html
<main class="css-projekt">
  <header class="fejlec">
    <p class="felirat">Iskolai szakkör</p>
    <h1>Webes alkotóműhely</h1>
    <p>Tanulj, kísérletezz, és készíts saját weboldalakat!</p>
    <a class="gomb" href="#program">Nézd meg a programot!</a>
  </header>

  <section class="kartya">
    <h2>Mit készítünk?</h2>
    <p>A szakkörön egyszerű weboldalakat tervezünk és valósítunk meg.
      A tartalmat HTML-ben építjük fel, a megjelenést CSS-sel alakítjuk.</p>
    <ul>
      <li>Áttekinthető dokumentumszerkezet</li>
      <li>Összeillő színek és olvasható szövegek</li>
      <li>Formázott dobozok és táblázatok</li>
    </ul>
    <p class="kiemeles"><strong>Nem kell előzetes tapasztalat!</strong>
      A kíváncsiság és a rendszeres gyakorlás a legfontosabb.</p>
  </section>

  <section class="kartya" id="program">
    <h2>Foglalkozások</h2>
    <div class="tablazat-gorgetes">
      <table class="programtabla">
        <caption>A szakkör három tervezett foglalkozása</caption>
        <thead>
          <tr>
            <th scope="col">Téma</th>
            <th scope="col">Nehézség</th>
            <th scope="col">Időtartam</th>
          </tr>
        </thead>
        <tbody>
          <tr><th scope="row">Első HTML-oldal</th><td>Kezdő</td><td>45 perc</td></tr>
          <tr><th scope="row">Színek és betűk</th><td>Kezdő</td><td>60 perc</td></tr>
          <tr><th scope="row">Dobozok és táblázatok</th><td>Gyakorló</td><td>75 perc</td></tr>
        </tbody>
        <tfoot>
          <tr><th scope="row" colspan="2">Összes idő</th><td>180 perc</td></tr>
        </tfoot>
      </table>
    </div>
  </section>

  <footer class="lablec">
    <p>Készítette: Saját neved · CSS összefoglaló projekt</p>
  </footer>
</main>
```
```css
/* A szabályok csak a projekt elemeire vonatkoznak. */
.css-projekt,
.css-projekt * {
  box-sizing: border-box;
}

.css-projekt {
  width: 100%;
  max-width: 56rem;
  margin: 0 auto;
  padding: 1.25rem;
  background-color: #eaf2ff;
  color: #1f2937;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  overflow-wrap: anywhere;
}

.css-projekt h1,
.css-projekt h2 {
  margin: 0 0 1rem;
  padding: 0;
  border: 0;
  font-family: inherit;
  font-weight: 700;
  line-height: 1.25;
}

.css-projekt h1 { font-size: 2rem; }
.css-projekt h2 { color: hsl(215 70% 30%); font-size: 1.5rem; }
.css-projekt p { margin: 1em 0; text-align: left; line-height: 1.6; }
.css-projekt ul { padding-left: 1.5em; line-height: 1.6; }

.css-projekt .fejlec {
  padding: 1.5rem;
  border-radius: 12px;
  background-color: #1453a1;
  background-image: linear-gradient(120deg, #12386b, #096dd9);
  color: white;
}

.css-projekt .felirat {
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.css-projekt .gomb {
  display: inline-block;
  padding: 0.6em 1em;
  border: 2px solid white;
  border-radius: 8px;
  background-color: white;
  color: #12386b;
  font-weight: bold;
  text-decoration: none;
}

.css-projekt .gomb:hover,
.css-projekt .gomb:focus-visible {
  background-color: #dbeafe;
  text-decoration: underline;
}

.css-projekt .kartya {
  margin-top: 1.25rem;
  padding: 1.25rem;
  border: 1px solid #b9cee8;
  border-radius: 12px;
  background-color: white;
}

.css-projekt .kiemeles {
  padding: 1rem;
  border-left: 4px solid #096dd9;
  background-color: rgb(9 109 217 / 10%);
}

.css-projekt .tablazat-gorgetes { overflow-x: auto; }

.css-projekt .programtabla {
  width: 100%;
  min-width: 28rem;
  border-collapse: collapse;
  table-layout: fixed;
  color: #1f2937;
}

.css-projekt .programtabla caption {
  padding: 0.75rem;
  color: #12386b;
  font-weight: bold;
  text-align: left;
  caption-side: top;
}

.css-projekt .programtabla th,
.css-projekt .programtabla td {
  padding: 0.75rem;
  border: 1px solid #b9cee8;
  text-align: left;
  vertical-align: middle;
}

.css-projekt .programtabla thead {
  background-color: #12386b;
  color: white;
}

.css-projekt .programtabla tbody tr:nth-child(odd) { background-color: #eff6ff; }
.css-projekt .programtabla tbody tr:nth-child(even) { background-color: white; }
.css-projekt .programtabla tfoot { background-color: #dbeafe; font-weight: bold; }
.css-projekt .programtabla td:last-child { text-align: right; }

.css-projekt .lablec {
  margin-top: 1.25rem;
  color: #475569;
  font-size: 0.875rem;
  text-align: center;
}

.css-projekt .lablec p { text-align: center; }
```
:::

A minta külön is [megnyitható](/assets/projects/css-szakkor/index.html). A kész fájlokat innen mentheted el: [index.html](/assets/projects/css-szakkor/index.html) és [style.css](/assets/projects/css-szakkor/style.css). Ha letöltéskor megváltozik a CSS-fájl neve, nevezd vissza `style.css`-re, és tedd a HTML-fájl mellé!

## Leadás előtti ellenőrzés

| Ellenőrzés | Mit vizsgálj? |
| --- | --- |
| Stíluslap | A `style.css` betöltődik, és nincs a HTML-be írt formázás |
| Kijelölők | Az elemeket, osztályokat és állapotokat a megfelelő szabályok célozzák |
| Színek | A szöveg minden háttéren olvasható, többféle színmegadás is szerepel |
| Dobozok | A padding, border és margin szerepét el tudod magyarázni |
| Táblázat | A sorcsíkozás csak az adatsorokat érinti, a fejléc és az összegzés elkülönül |
| Hivatkozás | A gomb a programhoz ugrik, és billentyűzettel is elérhető |
| Keskeny nézet | A táblázat saját területén görgethető, a tartalom nem lóg ki az oldalról |

## Gondold végig!

- Mi történik, ha kikapcsolod a `border-box` beállítást?
- Miért a `tbody tr:nth-child(...)` kijelölőt használjuk az összes `tr` helyett?
- Miben térne el az eredmény, ha az áttetsző háttérszín helyett a teljes kiemelt bekezdésre `opacity` értéket állítanál?
- Melyik értékeket módosítanád ahhoz, hogy ugyanebből a vázból sportklub vagy könyvklub oldala készüljön?

## Továbbfejlesztés

Készíts saját színvilágot, írj új bemutatkozó szöveget, és adj hozzá még egy foglalkozást! Az összes időt is számold újra az összegző sorban. A CSS maradjon külön fájlban, és az új sor kövesse a meglévő táblázatformázást.
