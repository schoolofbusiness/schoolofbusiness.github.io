---
title: "1. CSS-alapok"
order: 1
category: CSS
tag:
  - Alapok
---

# 1. CSS-alapok

## Mit fogsz megtanulni?

Megismered a CSS szerepét, a stíluslap három kapcsolási módját, a szabályok felépítését és a legfontosabb kijelölőket. A fejezet végén saját HTML-oldalt tudsz külső stíluslappal formázni.

## Mi a CSS?

A **CSS** a *Cascading Style Sheets*, vagyis lépcsőzetes stíluslapok rövidítése. A HTML megadja a tartalom szerkezetét, a CSS pedig a megjelenését: például a színeket, betűket, térközöket és méreteket.

A külső stíluslap szöveges fájl, `.css` kiterjesztéssel. A CSS több, önállóan fejlődő modulból áll; a „CSS3” nem az összes mai képesség egységes verziószáma.

| HTML | CSS |
| --- | --- |
| „Ez egy főcím.” | „Legyen kék és nagyobb betűméretű.” |
| „Ez egy bekezdés.” | „Legyen másfeles sorközzel szedve.” |
| „Ez egy táblázat.” | „A cellák kapjanak szegélyt.” |

## A CSS-szabály felépítése

```css
p {
  color: blue;
  font-size: 18px;
}
```

| Részlet | Megnevezés | Szerep |
| --- | --- | --- |
| `p` | Szelektor, kijelölő | Kiválasztja a bekezdéseket |
| `{ ... }` | Deklarációs blokk | A formázási beállítások helye |
| `color` | Tulajdonság | Mit módosítunk? |
| `blue` | Érték | Mire állítjuk? |
| `color: blue;` | Deklaráció | Egy teljes beállítás |

A tulajdonságot és értékét kettőspont választja el; a deklarációk közé pontosvessző kerül. Az utolsó pontosvessző elhagyható, de a tananyagban mindig kiírjuk. A tulajdonságok neve angol, a tizedesjel pont: `1.5`, nem `1,5`.

## A CSS három elhelyezési módja

### Külső stíluslap

Készíts egymás mellé `index.html` és `style.css` fájlt! A HTML `head` részében kapcsolhatod össze őket:

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Első CSS-oldalam</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Tanuljunk CSS-t!</h1>
  <p>A megjelenést külön fájlban állítjuk be.</p>
</body>
</html>
```

A `style.css` tartalma:

```css
h1 {
  color: navy;
}
p {
  font-family: Arial, sans-serif;
  line-height: 1.5;
}
```

A `rel="stylesheet"` jelzi a kapcsolat típusát, a `href` a fájl útvonalát. HTML-ben CSS-hez a `type="text/css"` nem szükséges. A `link` a `head` része, nem kötelező közvetlenül a `title` után állnia.

**Előnye:** több HTML-oldal ugyanazt a stíluslapot használhatja, így a megjelenés központilag módosítható.

### Beágyazott stíluslap

A szabályok a dokumentum `head` részében, `style` elemben szerepelnek:

```html
<head>
  <meta charset="utf-8">
  <title>Beágyazott CSS</title>
  <style>
    p {
      color: darkgreen;
    }
  </style>
</head>
```

Kisebb önálló oldalhoz vagy példák kipróbálásához kényelmes. Csak az adott dokumentumhoz tartozik.

### Elemen belüli, inline stílus

```html
<p style="color: blue; text-align: justify;">Ez egy formázott bekezdés.</p>
```

A `style` attribútumba csak deklarációkat írunk: szelektor és kapcsos zárójel nem kell. Egyetlen elemre hat, nagyobb oldalon nehezebben karbantartható.

| Módszer | Hol található? | Hatókör |
| --- | --- | --- |
| Külső | Külön `.css` fájlban | Minden oldal, amely csatolja |
| Beágyazott | A `head` egy `style` elemében | Az adott dokumentum |
| Inline | Az elem `style` attribútumában | Az adott elem |

## Megjegyzések

```css
/* Ez egy egysoros CSS-megjegyzés. */

/* A megjegyzés
   több sorba is írható. */
```

A `//` nem CSS-megjegyzés. A HTML `<!-- ... -->` jelölését sem használjuk a CSS-fájlban.

## A négy alapvető kijelölési mód

### Elemkijelölő

```css
p {
  color: navy;
}
```

Az összes `p` elemet kiválasztja. Nem kell elé pont vagy kettőskereszt.

### Osztálykijelölő

A CSS-ben ponttal kezdődik, a HTML `class` attribútumában pont nélkül szerepel:

```html
<p class="kiemelt">Fontos bekezdés.</p>
<h2 class="kiemelt">Fontos alcím</h2>
```

```css
.kiemelt {
  border: 3px solid royalblue;
  padding: 12px;
}
```

Egy osztály több elemen használható, és egy elemnek több osztálya is lehet:

```html
<p class="kiemelt figyelmeztetes">Két osztályhoz tartozó elem.</p>
```

Kezdőként válassz betűvel kezdődő, ékezet nélküli, kötőjellel tagolt neveket, például `fontos-uzenet`. A CSS ennél többféle nevet is megenged, de így elkerülheted az escape-elést igénylő neveket.

### Azonosítókijelölő

```html
<div id="fejlec">Az oldal fejléce</div>
```

```css
#fejlec {
  background-color: navy;
  color: white;
}
```

Az `id` értéke egy dokumentumon belül legyen egyedi. A CSS-ben `#` jel kerül elé. Az azonosító ugrási célpontként és JavaScriptben is használható; újrahasználható formázáshoz általában osztályt érdemes választani.

### Szelektorlista

```css
h1, h2, .kiemelt {
  color: darkblue;
}
```

A vessző jelentése: **mindegyik felsorolt kijelölésre** alkalmazd a szabályt. A `h1, h2` nem azonos a `h1 h2` alakjával: az utóbbi leszármazotti kapcsolatot keres.

::: normal-demo Kijelölők a gyakorlatban
```html
<div class="css01-minta">
  <h3 id="css01-cim">CSS-kísérlet</h3>
  <p>Egyszerű bekezdés.</p>
  <p class="kiemelt">Kiemelt bekezdés.</p>
</div>
```
```css
.css01-minta p { color: #173b65; }
.css01-minta .kiemelt { background: #dbeafe; padding: 12px; }
.css01-minta #css01-cim { border-bottom: 3px solid #2563eb; }
```
:::

## Ha több szabály vonatkozik ugyanarra az elemre

A kaszkád dönti el, melyik deklaráció érvényesül. Kezdő példákban, azonos eredetű, normál fontosságú és azonos rétegű szabályok között:

1. Az azonosítókijelölő specifikusabb az osztálykijelölőnél.
2. Az osztálykijelölő specifikusabb az elemkijelölőnél.
3. Azonos specifikusság esetén a későbbi deklaráció nyer.

```css
p { color: blue; }
.kiemelt { color: darkred; }
```

A `class="kiemelt"` bekezdés sötétpiros lesz. Ez a példa az alaphelyzetet mutatja; a teljes kaszkádhoz a stílus eredete, a rétegek és az `!important` is hozzátartozik. Ne az `!important` legyen az első hibajavítási eszközöd!

Egyes tulajdonságok, például a szövegszín, öröklődhetnek; a `border` és a `padding` általában nem. A gyermekre közvetlenül beállított szín felülírja az örökölt színt.

## Gyakorlás

Készíts külső stíluslapot! Legyen minden bekezdés sötétkék, a `kiemelt` osztályú elemek háttere világoskék, a `focim` azonosítójú cím alatt pedig folytonos szegély.

::: details Megoldás
```css
p { color: navy; }
.kiemelt { background-color: lightblue; }
#focim { border-bottom: 3px solid navy; }
```
```html
<h1 id="focim">CSS-gyakorlás</h1>
<p>Normál bekezdés.</p>
<p class="kiemelt">Kiemelt bekezdés.</p>
```
A stíluslapot a `head` részben csatold `link` elemmel!
:::

## Gyakori hibák

| Hiba | Javítás |
| --- | --- |
| Nem változik semmi | Ellenőrizd a `href` útvonalát és a mentést |
| `.kiemelt` szerepel a `class` értékében | A HTML-ben csak `kiemelt` kell |
| `color = blue` | Helyesen: `color: blue;` |
| Görbe idézőjelek másolása | Használj egyenes `'` vagy `"` jelet |
| Az elem nem azt a színt kapja | Nézd meg az alkalmazott szabályokat a fejlesztői eszközökben |
