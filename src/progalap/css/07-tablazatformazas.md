---
title: "7. Táblázatformázások"
order: 7
category: CSS
---

# 7. Táblázatformázások

## Mit fogsz megtanulni?

Megválasztod a táblázat méretezési módját, szegélyeit, cellaközét és belső térközeit. Igazítod a cellatartalmat, elhelyezed a címet, és váltakozó sorhátteret készítesz.

## Kiinduló HTML

A CSS a meglévő táblázatot formázza; az adatok szerkezetét a HTML írja le. A fejlécet, a törzset és az összegzést érdemes külön csoportba rendezni.

```html
<table class="eredmenyek">
  <caption>Gyakorlófeladat eredményei</caption>
  <thead>
    <tr>
      <th scope="col">Név</th>
      <th scope="col">Feladat</th>
      <th scope="col">Pont</th>
    </tr>
  </thead>
  <tbody>
    <tr><th scope="row">Anna</th><td>HTML</td><td>18</td></tr>
    <tr><th scope="row">Béla</th><td>CSS</td><td>16</td></tr>
    <tr><th scope="row">Cili</th><td>HTML és CSS</td><td>20</td></tr>
  </tbody>
  <tfoot>
    <tr><th scope="row" colspan="2">Összesen</th><td>54</td></tr>
  </tfoot>
</table>
```

## Elrendezési mód: table-layout

### Automatikus elrendezés

```css
.eredmenyek {
  table-layout: auto;
  width: 100%;
}
```

Az `auto` az alapérték. A böngésző az oszlopok méretezésekor a tartalmat is figyelembe veszi; az oszlopok nem feltétlenül egyforma szélesek.

Egy nagyon kicsi, például `width: 100px` érték nem garantálja, hogy a tábla valóban ilyen keskeny lesz: a tartalom minimális helyigénye ennél nagyobb szélességet követelhet.

### Rögzített elrendezés

```css
.eredmenyek {
  table-layout: fixed;
  width: 100%;
}
```

A `fixed` használatához meghatározott táblázatszélesség szükséges. Az oszlopszélességeket az oszlopokra megadott méretek, ezek hiányában az első sor cellaméretei, majd a fennmaradó hely elosztása határozza meg. A későbbi sorok hosszabb tartalma nem szélesíti automatikusan az oszlopot.

::: tip A fixed nem jelent mindig egyenlő oszlopokat
Ha nem adsz külön oszlopméreteket, a hely gyakran egyenlően oszlik el. A `col` elemeken vagy az első sor celláin megadott szélességek azonban eltérő oszlopméreteket is létrehozhatnak.
:::

| Mód | A tartalom hatása | Mire figyelj? |
| --- | --- | --- |
| `auto` | Az oszlopszélességhez is hozzájárul | Hosszú tartalom széthúzhatja a táblát |
| `fixed` | A későbbi sorok nem méretezik át az oszlopokat | A tartalom tördelését vagy levágását kezelned kell |

## Hosszú tartalom kezelése

### Tördelés

```css
.eredmenyek td,
.eredmenyek th {
  overflow-wrap: anywhere;
}
```

Ezzel a hosszú, egybefüggő karaktersor is eltörhető. Az információ megmarad, de a sor magasabb lehet.

### Egysoros csonkolás

```css
.eredmenyek td {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

A három beállítás együtt korlátozott szélességű cellában levágja a túl hosszú szöveget, és `…` jellel utal a hiányra. A teljes érték megtekintéséhez külön megoldást biztosíts, ha az információ fontos; ne csak a levágott változat legyen hozzáférhető.

## Szegélyek: a table és a cellák külön elemek

```css
.eredmenyek { border: 2px solid navy; }
```

Ez csak a táblázat külső szegélyét állítja. A cellákhoz külön szabály kell:

```css
.eredmenyek td,
.eredmenyek th {
  border: 1px solid #94a3b8;
}
```

A `border` ugyanazt a vastagság–stílus–szín felépítést használja, mint más elemeknél. A táblázat és a cellák szegélye lehet eltérő.

## Szegélyegyesítés: border-collapse

| Érték | Hatás |
| --- | --- |
| `separate` | A szomszédos cellák szegélyei külön maradnak |
| `collapse` | A szomszédos szegélyek közös szegéllyé egyesülnek |

```css
.eredmenyek {
  border-collapse: collapse;
}
```

Egyesítéskor a `border-spacing` nem érvényesül. Ha az összeérő szegélyek különböznek, a böngésző szegélyütközési szabályok alapján választ; nem általános törvény, hogy mindig a cella színe győz.

## Cellaköz: border-spacing

A cellaköz a szomszédos cellák szegélyei közötti távolság. A táblázaton állítjuk, és a különálló szegélymodellben működik.

```css
.eredmenyek {
  border-collapse: separate;
  border-spacing: 10px 20px;
}
```

| Megadás | Vízszintes köz | Függőleges köz |
| --- | --- | --- |
| `10px` | 10 px | 10 px |
| `10px 20px` | 10 px | 20 px |

**A `border-spacing` hosszúságot vár, százalékos értéket nem.** Használható például `px`, `em` vagy `rem`; negatív érték nem.

## Cellán belüli térköz: padding

A cellaszegély és a cellatartalom közti helyet a `td` és `th` elemen állítjuk:

```css
.eredmenyek td,
.eredmenyek th {
  padding: 10px 20px;
}
```

Itt az első érték **függőleges**, a második **vízszintes** térköz. Ez fordított a kétértékes `border-spacing` irányaihoz képest!

| Tulajdonság | Hol adjuk meg? | `10px 20px` jelentése |
| --- | --- | --- |
| `border-spacing` | `table` | Vízszintes 10, függőleges 20 |
| `padding` | `td`, `th` | Függőleges 10, vízszintes 20 |

A paddingnél az egy–négy értékes, felső–jobb–alsó–bal oldalsorrend használható. A cellák közti hézaghoz ne `margin` értéket próbálj tenni a `td` elemekre.

::: normal-demo Cellaköz és cellán belüli térköz
```html
<div class="css07-koz">
  <table class="kulon">
    <caption>Különálló szegélyek</caption>
    <tbody><tr><td>Anna</td><td>18 pont</td></tr><tr><td>Béla</td><td>16 pont</td></tr></tbody>
  </table>
  <table class="egyesitett">
    <caption>Egyesített szegélyek</caption>
    <tbody><tr><td>Anna</td><td>18 pont</td></tr><tr><td>Béla</td><td>16 pont</td></tr></tbody>
  </table>
</div>
```
```css
.css07-koz table { background: #dbeafe; color: #172554; margin-bottom: 20px; }
.css07-koz td { border: 2px solid #2563eb; padding: 12px 24px; }
.css07-koz caption { padding: 8px; font-weight: bold; }
.css07-koz .kulon { border-collapse: separate; border-spacing: 10px 16px; }
.css07-koz .egyesitett { border-collapse: collapse; border-spacing: 10px 16px; }
```
:::

A második táblázatban a megadott `border-spacing` nem változtatja meg a cellaközt. A padding mindkét táblázatban működik.

## A táblázat középre igazítása

```css
.eredmenyek {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
```

A táblázat mint egész kerül középre, ha marad szabad hely. A cellák tartalmának igazítása ettől külön beállítás.

## Cellatartalom igazítása

### Vízszintesen

```css
.eredmenyek th { text-align: left; }
.eredmenyek td { text-align: center; }
```

Használható `left`, `right`, `center`, `justify`, valamint az írásirányt követő `start` és `end`. A böngésző alapstílusa a `th` elemeket gyakran középre igazítja; egységes eredményhez add meg kifejezetten az értéket.

### Függőlegesen

```css
.eredmenyek td,
.eredmenyek th {
  vertical-align: middle;
}
```

| Érték | Cellatartalom helye |
| --- | --- |
| `top` | Felül |
| `middle` | Függőlegesen középen |
| `bottom` | Alul |
| `baseline` | A szöveg alapvonalához igazítva |

::: warning Nem center, hanem middle!
A `vertical-align: center` érvénytelen. Függőleges középre igazításhoz táblázatcellában `vertical-align: middle` kell. Ez a tulajdonság nem általános módszer egy tetszőleges blokk gyermekeinek középre rendezésére.
:::

## A táblázat címe: caption-side

```css
.eredmenyek caption {
  caption-side: bottom;
  padding: 12px;
  font-weight: bold;
}
```

A `top` a címet felülre, a `bottom` alulra helyezi. A HTML-ben a `caption` továbbra is a `table` első gyermeke; a CSS a megjelenés helyét módosítja, nem a cellák függőleges igazítását.

## Üres cellák: empty-cells

```css
.eredmenyek {
  border-collapse: separate;
  empty-cells: hide;
}
```

A `show` megjeleníti, a `hide` elrejti az üres cella szegélyét és hátterét a különálló szegélymodellben. A cella helye megmarad: ez nem cellatörlés és nem cellaegyesítés. `border-collapse: collapse` esetén nincs ilyen hatása. A `&nbsp;` karakterrel kitöltött cella nem valóban üres.

## Háttérszínek fedési sorrendje

Alulról felfelé:

| Réteg | Elem |
| --- | --- |
| 1. Legalsó | Táblázat – `table` |
| 2. | Oszlopcsoport – `colgroup` |
| 3. | Oszlop – `col` |
| 4. | Sorcsoport – `thead`, `tbody`, `tfoot` |
| 5. | Sor – `tr` |
| 6. Legfelső | Cella – `td`, `th` |

Egy nem áttetsző cellaháttér elfedheti a sor és a táblázat hátterét. Ha a sorcsíkozás nem látszik, nézd meg, nincs-e külön háttér beállítva az összes cellára!

## Fejléc, összegző sor és csíkozás

```css
.eredmenyek thead {
  background-color: #1e3a8a;
  color: white;
}
.eredmenyek tfoot {
  background-color: #dbeafe;
  font-weight: bold;
}
.eredmenyek tbody tr:nth-child(odd) {
  background-color: #f1f5f9;
}
.eredmenyek tbody tr:nth-child(even) {
  background-color: #ffffff;
}
```

| Kijelölő | Mit választ ki? |
| --- | --- |
| `tr:first-child` | A szülője első gyermekeként álló sort |
| `tr:last-child` | A szülője utolsó gyermekeként álló sort |
| `tr:nth-child(odd)` vagy `tr:nth-child(2n+1)` | Páratlan sorszámú sorokat |
| `tr:nth-child(even)` vagy `tr:nth-child(2n)` | Páros sorszámú sorokat |

A számozás a testvérek között történik, nem feltétlenül a teljes táblázatban. A `tr:first-child` minden sorcsoport első sorát is kijelölheti. Ezért fejlécformázáshoz a `thead`, összegzéshez a `tfoot`, adatcsíkozáshoz pedig a `tbody tr:nth-child(...)` egyértelműbb.

## Teljes, kipróbálható példa

::: normal-demo Formázott eredménytáblázat
```html
<div class="css07-gorgetes">
  <table class="css07-eredmenyek">
    <caption>Gyakorlófeladat eredményei</caption>
    <thead>
      <tr><th scope="col">Név</th><th scope="col">Feladat</th><th scope="col">Pont</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">Anna</th><td>HTML</td><td>18</td></tr>
      <tr><th scope="row">Béla</th><td>CSS</td><td>16</td></tr>
      <tr><th scope="row">Cili</th><td>HTML és CSS</td><td>20</td></tr>
    </tbody>
    <tfoot>
      <tr><th scope="row" colspan="2">Összesen</th><td>54</td></tr>
    </tfoot>
  </table>
</div>
```
```css
.css07-gorgetes { overflow-x: auto; }
.css07-eredmenyek {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  color: #172554;
}
.css07-eredmenyek caption { padding: 12px; font-weight: bold; }
.css07-eredmenyek th, .css07-eredmenyek td {
  border: 1px solid #94a3b8;
  padding: 12px;
  vertical-align: middle;
  text-align: left;
  overflow-wrap: anywhere;
}
.css07-eredmenyek thead { background: #1e3a8a; color: white; }
.css07-eredmenyek tbody tr:nth-child(odd) { background: #eff6ff; }
.css07-eredmenyek tbody tr:nth-child(even) { background: white; }
.css07-eredmenyek tfoot { background: #bfdbfe; font-weight: bold; }
.css07-eredmenyek td:last-child { text-align: right; }
```
:::

A görgethető burkoló egy kiegészítő megoldás szélesebb táblázatokhoz; a példában a tördelés is segít. A pontokat jobbra igazítjuk, hogy könnyebb legyen összehasonlítani őket.

## Gyakorlás

Készíts négy adatsoros órarendtáblázatot! Legyen egyesített szegélyű, az oldal szélességének 90%-át töltse ki, álljon középen, a cellák belső margója legyen 8 px függőlegesen és 12 px vízszintesen. A páros adatsorok kapjanak világoskék hátteret, a cím kerüljön alulra.

::: details CSS-megoldás
```css
.orarend {
  width: 90%;
  margin: 0 auto;
  border-collapse: collapse;
}
.orarend th, .orarend td {
  border: 1px solid #64748b;
  padding: 8px 12px;
  text-align: left;
  vertical-align: middle;
}
.orarend tbody tr:nth-child(even) { background-color: #dbeafe; }
.orarend caption { caption-side: bottom; padding: 12px; }
```
A HTML-ben a fejléceket `thead`, az adatsorokat `tbody` elembe helyezd!
:::
