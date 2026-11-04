---
title: "2. Színmegadási módok"
order: 2
category: CSS
---

# 2. Színmegadási módok

## Mit fogsz megtanulni?

Ugyanazt a színt névvel, RGB-, hexadecimális, HSL- és HWB-értékkel is megadod, és felismered az alfacsatorna szerepét.

## Hol használunk színt?

```css
.kartya {
  color: navy;
  background-color: lightblue;
  border: 2px solid royalblue;
}
```

A `color` a szöveg színe, a `background-color` a háttérszín; a szegélynek külön színe is lehet. Egy érvényes színérték általában mindegyik helyen használható.

## Színnevek

A CSS előre meghatározott angol színneveket ismer: például `black`, `white`, `red`, `blue`, `orange`, `navy`, `lightblue`.

```css
h1 { color: navy; }
p { background-color: lightyellow; }
```

Nem tetszőleges angol szavakat írhatsz be, hanem a szabványos színneveket. A `transparent` teljesen áttetsző színt jelöl. A `currentColor` az elem aktuális `color` értékét használja, például szegélyszínként.

## RGB: vörös, zöld, kék

Az RGB additív színmodell: a három fénykomponensből keverjük ki a színt.

```css
color: rgb(255 0 0);
```

| Hely | Komponens | Szokásos tartomány |
| --- | --- | --- |
| Első | R – red – vörös | 0–255 |
| Második | G – green – zöld | 0–255 |
| Harmadik | B – blue – kék | 0–255 |

| Szín | RGB |
| --- | --- |
| Fekete | `rgb(0 0 0)` |
| Fehér | `rgb(255 255 255)` |
| Vörös | `rgb(255 0 0)` |
| Zöld fény, lime | `rgb(0 255 0)` |
| Kék | `rgb(0 0 255)` |
| Sárga | `rgb(255 255 0)` |
| Cián | `rgb(0 255 255)` |
| Magenta | `rgb(255 0 255)` |

A CSS `green` színnév nem a teljes intenzitású zöld: értéke `rgb(0 128 0)`. A teljes intenzitású zöld színneve `lime`.

A komponensek százalékban is megadhatók: `rgb(100% 0% 0%)`. A modern, szóközös szintaxis kevert szám- és százalékértékeket is megenged; kezdésként használj következetesen egyféle megadást. A régi, vesszős formában ne keverd a komponensek típusát.

```css
/* Modern forma */
color: rgb(30 100 200);
/* Régebbi, továbbra is használható forma */
color: rgb(30, 100, 200);
```

## Áttetszőség: alfacsatorna

```css
background-color: rgb(0 0 255 / 0.5);
```

A `/` után az alfaérték áll:

| Alfa | Jelentés |
| --- | --- |
| `0` vagy `0%` | Teljesen áttetsző |
| `0.5` vagy `50%` | Félig áttetsző |
| `1` vagy `100%` | Teljesen fedő |

Az `rgba()` ma az `rgb()` szinonimája. Régi szintaxissal a félig áttetsző kék: `rgba(0, 0, 255, 0.5)`. A `none` speciális, hiányzó komponensérték; kezdő színmegadásnál nincs rá szükség, és nem azonos általában a teljes szín átlátszóvá tételével.

::: normal-demo Az alfaérték hatása
```html
<div class="css02-alfa">
  <div class="a100">100% fedés</div>
  <div class="a50">50% fedés</div>
  <div class="a20">20% fedés</div>
</div>
```
```css
.css02-alfa { background: #facc15; padding: 12px; }
.css02-alfa > div { padding: 16px; margin: 8px 0; color: #111827; }
.css02-alfa .a100 { background-color: rgb(96 165 250 / 1); }
.css02-alfa .a50 { background-color: rgb(96 165 250 / 0.5); }
.css02-alfa .a20 { background-color: rgb(96 165 250 / 0.2); }
```
:::

A végeredmény a mögötte lévő háttértől is függ. A szín alfája csak az adott színt teszi áttetszővé; az `opacity` ezzel szemben az egész elem megjelenítését, a gyermekeivel együtt halványítja.

## Hexadecimális színkód

A `#RRGGBB` alakban minden komponens két hexadecimális számjegy. A számjegyek: `0`–`9`, `a`–`f`. A `00` jelentése 0, az `ff` jelentése 255.

```css
color: #1e64c8;
```

Ez ugyanaz, mint az `rgb(30 100 200)`.

| Hosszú alak | Rövid alak | Szín |
| --- | --- | --- |
| `#000000` | `#000` | Fekete |
| `#ffffff` | `#fff` | Fehér |
| `#0000ff` | `#00f` | Kék |
| `#aabbcc` | `#abc` | Kékesszürke |

Rövidíteni csak akkor lehet, ha **mindhárom párban azonos a két számjegy**. A `#123456` nem rövidíthető `#135` alakra.

Alfával: `#RRGGBBAA`, röviden `#RGBA`. Az alfa **a végén** szerepel.

```css
background-color: #0000ff80; /* körülbelül 50%-os fedésű kék */
background-color: #00f8;    /* #0000ff88, körülbelül 53%-os fedés */
```

## HSL: árnyalat, telítettség, világosság

```css
color: hsl(240deg 100% 50%);
```

| Komponens | Jelentés | Példa |
| --- | --- | --- |
| H – hue | Színárnyalat a színkörön | `240deg`: kék |
| S – saturation | Telítettség | `0%`: szürke; `100%`: teljesen telített |
| L – lightness | Világosság | `0%`: fekete; `100%`: fehér |

A fő színköri pontok: 0° vörös, 60° sárga, 120° zöld, 180° cián, 240° kék, 300° magenta. A 360° visszatér a vöröshöz. A fok helyett egység nélküli szám is használható; tört érték is megengedett.

```css
.vilagos { background-color: hsl(210 80% 85%); }
.kozepes { background-color: hsl(210 80% 50%); }
.sotet { background-color: hsl(210 80% 25%); }
.attetszo { background-color: hsl(210 80% 50% / 0.5); }
```

A HSL világossága nem azonos a szem által érzékelt fényességgel: azonos `50%` mellett a sárga és a kék nem egyformán világosnak hat.

## HWB: árnyalat, fehérség, feketeség

```css
color: hwb(240 0% 0%);
```

A tiszta árnyalathoz fehéret és feketét keverünk:

| Komponens | Jelentés |
| --- | --- |
| H – hue | Árnyalat, mint a HSL-ben |
| W – whiteness | Fehér összetevő |
| B – blackness | Fekete összetevő |

```css
.tiszta { color: hwb(240 0% 0%); }
.vilagos { color: hwb(240 40% 0%); }
.sotet { color: hwb(240 0% 40%); }
.attetszo { color: hwb(240 0% 0% / 0.5); }
```

Ha a fehérség és feketeség összege eléri a 100%-ot, szürkeárnyalatot kapunk. 100% fölött a böngésző arányosan normalizálja őket.

::: normal-demo Ugyanaz a kék négy megadási móddal
```html
<div class="css02-szinek">
  <p class="nev">blue</p>
  <p class="rgb">rgb(0 0 255)</p>
  <p class="hex">#0000ff</p>
  <p class="hsl">hsl(240 100% 50%)</p>
</div>
```
```css
.css02-szinek p { color: white; padding: 12px; }
.css02-szinek .nev { background: blue; }
.css02-szinek .rgb { background: rgb(0 0 255); }
.css02-szinek .hex { background: #0000ff; }
.css02-szinek .hsl { background: hsl(240 100% 50%); }
```
:::

## Gyakorlás

1. Add meg a tiszta vöröset névvel, RGB-, hexadecimális, HSL- és HWB-alakban!
2. Készíts 40%-os fedésű fekete hátteret!
3. Rövidítsd a `#aaffcc` értéket!

::: details Megoldás
```css
/* Ezek ugyanazt a vöröset jelentik: */
color: red;
color: rgb(255 0 0);
color: #ff0000;
color: hsl(0 100% 50%);
color: hwb(0 0% 0%);

background-color: rgb(0 0 0 / 0.4);
/* #aaffcc röviden: #afc */
```
Egy szabályban ugyanarra a tulajdonságra írt fenti deklarációk közül az utolsó érvényes fog érvényesülni; a felsorolás itt az egyenértékű megadási módokat szemlélteti.
:::
