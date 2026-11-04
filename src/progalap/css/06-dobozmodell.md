---
title: "6. A CSS-dobozmodell"
order: 6
category: CSS
---

# 6. A CSS-dobozmodell

## Mit fogsz megtanulni?

Megkülönbözteted a tartalmat, a belső margót, a szegélyt és a külső margót. Kiszámítod egy doboz tényleges szélességét, beállítod a méretezési módot és megérted a margóösszevonás alaphelyzetét.

## A doboz négy rétege

Belülről kifelé haladva:

| Réteg | Angol név | Feladat |
| --- | --- | --- |
| Tartalom | Content | Szöveg, kép vagy más tartalom helye |
| Belső margó | Padding | Távolság a tartalom és a szegély között |
| Szegély | Border | A belső margót körülvevő keret |
| Külső margó | Margin | A dobozon kívüli térköz |

::: normal-demo A dobozmodell rétegei
```html
<div class="css06-modell">
  <div class="margin">
    <span>Külső margó – margin</span>
    <div class="border">
      <span>Szegély – border</span>
      <div class="padding">
        <span>Belső margó – padding</span>
        <div class="content">Tartalom – content</div>
      </div>
    </div>
  </div>
</div>
```
```css
.css06-modell { max-width: 620px; color: #172b4d; }
.css06-modell .margin { background: #ffedd5; padding: 16px; }
.css06-modell .border { background: #fbbf24; padding: 12px; margin-top: 8px; }
.css06-modell .padding { background: #dcfce7; padding: 20px; margin-top: 8px; }
.css06-modell .content { background: #bfdbfe; padding: 24px 12px; margin-top: 8px; text-align: center; }
.css06-modell span { font-size: 14px; font-weight: bold; }
```
:::

Ez magyarázó ábra: külön, feliratozott elemekkel mutatja a rétegeket. A valós `margin` átlátszó, nem saját háttérszínnel rendelkező felület. A valós dobozon az elem háttere a padding alatt is megjelenik, a margin területén viszont nem.

## Szélesség és magasság

```css
.doboz {
  width: 300px;
  min-height: 120px;
}
```

A `width` a szélességet, a `height` a magasságot adja meg, a `box-sizing` szerinti értelemben. A `height: auto` a tartalomhoz igazodhat; szöveges dobozoknál gyakran jobb, mint a merev magasság.

```css
img {
  width: 200px;
  height: auto;
}
```

A kép magassága így a saját arányához igazodik. Egy tetszőleges szöveges `div` viszont nem tart meg automatikusan valamilyen „eredeti képarányt”. A normál, nem helyettesített sorközi elemre, például egy egyszerű `span` elemre, a `width` és `height` nem úgy hat, mint egy blokkra.

## Minimum és maximum

| Tulajdonság | Szerep |
| --- | --- |
| `min-width` | Legkisebb szélesség |
| `max-width` | Legnagyobb szélesség |
| `min-height` | Legkisebb magasság |
| `max-height` | Legnagyobb magasság |

```css
.kartya {
  width: 80%;
  max-width: 600px;
  min-height: 150px;
}
```

A szélesség a rendelkezésre álló helyhez igazodik, de legfeljebb 600 px; a magasság legalább 150 px, hosszabb tartalom esetén nőhet.

**A forrásanyag példája:** 210 px széles szülőben `width: 80%` és `min-width: 200px` esetén a 168 px-es számított szélességet a minimum 200 px-re emeli. A túl nagy minimum kis kijelzőn túlcsordulást okozhat.

A `max-height` nem rejti el önmagában a kilógó tartalmat. Görgethető területhez például `overflow: auto` is kell. Százalékos magasságnál a viszonyítási alapnak meghatározhatónak kell lennie.

## Belső margó: padding

```css
.kartya { padding: 20px; }
```

A padding teret ad a tartalomnak a szegélyen belül. Nem lehet negatív, és nincs `auto` értéke.

### Egy, kettő, három vagy négy érték

| Megadás | Fent | Jobb | Lent | Bal |
| --- | --- | --- | --- | --- |
| `10px` | 10 | 10 | 10 | 10 |
| `10px 20px` | 10 | 20 | 10 | 20 |
| `10px 20px 30px` | 10 | 20 | 30 | 20 |
| `10px 20px 30px 40px` | 10 | 20 | 30 | 40 |

A négyértékes sorrend: **felső → jobb → alsó → bal**, az óramutató járásával megegyezően. A táblázat celláiban a számok pixelértékek.

Külön is megadható:

```css
.kartya {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 40px;
}
```

## Külső margó: margin

A margin a szegélyen kívüli távolság. Ugyanazt az egy–négy értékes sorrendet használja, mint a padding.

```css
.kartya {
  margin: 16px 24px;
}
```

Külön irányok: `margin-top`, `margin-right`, `margin-bottom`, `margin-left`. A margin negatív is lehet, de ez közelítheti vagy átfedheti az elemeket, ezért kezdésként pozitív értékekkel dolgozz.

### Blokk középre igazítása

```css
.kartya {
  width: 80%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
```

Ha marad szabad vízszintes hely, a két automatikus margó elosztja azt. Röviden `margin: 0 auto;`. A doboz középre kerül, de a benne lévő szöveg nem feltétlenül: azt a `text-align` szabályozza.

### Függőleges margók összevonása

Normál blokkfolyamban két szomszédos blokk függőleges margója bizonyos feltételek mellett összevonódik.

```css
.elso { margin-bottom: 30px; }
.masodik { margin-top: 20px; }
```

Ha a két pozitív margó összevonódik, a távolság **30 px**, nem 50 px. Nem általános szabály, hogy minden alsó és felső margó közül mindig a nagyobb érvényesül: például flex- és grid-elemek margói nem így vonódnak össze. Negatív margóknál más számítás szükséges. Szülő és gyermek között is történhet összevonás.

## Szegély: border

```css
.kartya {
  border: 3px solid navy;
}
```

A könnyen olvasható sorrend: vastagság, stílus, szín. A három összetevő sorrendje nem merev, de tanuláskor érdemes következetesen így írni.

| Stílus | Látvány |
| --- | --- |
| `none` | Nincs szegély |
| `solid` | Folytonos |
| `dotted` | Pontozott |
| `dashed` | Szaggatott |
| `double` | Dupla vonal |
| `groove`, `ridge` | Bevágott, illetve kiemelkedő hatás |
| `inset`, `outset` | Besüllyesztett, illetve kiemelt hatás |

```css
.kartya {
  border-width: 3px;
  border-style: solid;
  border-color: navy;
}
```

A `border-style` kezdeti értéke `none`: a vastagság és szín megadása önmagában nem elég, ha más szabály sem állított be stílust.

### Irány és tulajdonság szerinti bontás

```css
.kartya {
  border-top: 2px solid darkred;
  border-right: 5px double blue;
  border-bottom: 3px dotted green;
  border-left: 4px dashed black;
}
```

Még részletesebben: `border-top-width`, `border-top-style`, `border-top-color`. A `border-width`, `border-style` és `border-color` is elfogad egy–négy oldalspecifikus értéket.

::: normal-demo Szegélystílusok
```html
<div class="css06-szegelyek">
  <p class="solid">Folytonos</p>
  <p class="dotted">Pontozott</p>
  <p class="dashed">Szaggatott</p>
  <p class="double">Dupla</p>
</div>
```
```css
.css06-szegelyek p { border-width: 5px; border-color: #2563eb; padding: 12px; }
.css06-szegelyek .solid { border-style: solid; }
.css06-szegelyek .dotted { border-style: dotted; }
.css06-szegelyek .dashed { border-style: dashed; }
.css06-szegelyek .double { border-style: double; }
```
:::

## Sarkok lekerekítése: border-radius

```css
.kartya { border-radius: 16px; }
```

Itt a sorrend **sarkokat**, nem oldalakat jelent:

| Megadás | Hatás |
| --- | --- |
| `20px` | Mind a négy sarok |
| `10px 30px` | Bal felső és jobb alsó: 10; jobb felső és bal alsó: 30 |
| `10px 20px 30px` | Bal felső: 10; jobb felső és bal alsó: 20; jobb alsó: 30 |
| `10px 20px 30px 40px` | Bal felső → jobb felső → jobb alsó → bal alsó |

A `border-radius: 50%` négyzetnél kört, nem négyzetes téglalapnál ellipszist adhat. Látható szegély nélkül is működik a háttéren. A gyermekek tartalmát nem vágja le automatikusan minden esetben; ha ez a cél, külön túlcsordulás-kezelésre is szükség lehet.

## A tényleges méret: content-box

A szokásos `content-box` méretezésben a megadott `width` csak a tartalom szélessége.

```css
.doboz {
  box-sizing: content-box;
  width: 250px;
  padding: 5px;
  border: 10px solid navy;
  margin: 20px;
}
```

| Összetevő | Szélesség |
| --- | --- |
| Tartalom | 250 px |
| Bal és jobb padding | 5 + 5 = 10 px |
| Bal és jobb szegély | 10 + 10 = 20 px |
| Szegélydoboz összesen | **280 px** |
| Két vízszintes margóval együtt | **320 px** |

**Szegélydoboz szélessége = tartalom + bal/jobb padding + bal/jobb border.** A magasság hasonlóan számolható a felső és alsó értékekkel. A külső margó nem része a szegélydoboznak.

## A méretezés módosítása: border-box

```css
.doboz {
  box-sizing: border-box;
  width: 250px;
  padding: 5px;
  border: 10px solid navy;
}
```

Most a teljes szegélydoboz 250 px széles; a tartalomra `250 − 10 − 20 = 220px` jut. A margin ebbe továbbra sem számít bele.

::: normal-demo Ugyanaz a width, két méretezési mód
```html
<div class="css06-meretek">
  <p class="content">content-box: 280 px külső szélesség</p>
  <p class="border">border-box: 250 px külső szélesség</p>
</div>
```
```css
.css06-meretek { overflow-x: auto; }
.css06-meretek p {
  width: 250px;
  padding: 5px;
  border: 10px solid #2563eb;
  background: #dbeafe;
  color: #172554;
  margin: 12px 0;
}
.css06-meretek .content { box-sizing: content-box; }
.css06-meretek .border { box-sizing: border-box; }
```
:::

Egy 250 px széles szülőben a `width: 100%` gyermek `content-box` mellett plusz 5 px paddinggel és 10 px szegéllyel 280 px széles lenne. A `border-box` ugyanebben az esetben a 250 px-be foglalja a paddinget és szegélyt.

Új oldalhoz gyakori kiindulás:

```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

A `*` minden elemet választ, a két további kijelölő a generált ál-elemeket is bevonja.

## Gyakorlás

Egy doboz `width: 300px`, vízszintes paddingje oldalanként 20 px, szegélye oldalanként 4 px, vízszintes margója oldalanként 10 px.

1. Mekkora a szegélydoboz `content-box` mellett?
2. Mennyi helyet foglal a vízszintes margókkal együtt?
3. Mekkora a tartalom szélessége `border-box` mellett?

::: details Megoldás

1. `300 + 20 + 20 + 4 + 4 = 348px`.
2. `348 + 10 + 10 = 368px`.
3. `300 − 20 − 20 − 4 − 4 = 252px`.

:::
