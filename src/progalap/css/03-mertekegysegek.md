---
title: "3. Mértékegységek"
order: 3
category: CSS
---

# 3. Mértékegységek

## Mit fogsz megtanulni?

Megkülönbözteted az abszolút és relatív hosszúságokat, kiszámítod az `em`, `rem` és nézetablak-egységek értékét, és felismered, hogy a százalék viszonyítási alapja a tulajdonságtól függ.

## A méret megadása

```css
p {
  font-size: 18px;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}
```

A szám és a mértékegység között nincs szóköz: `18px`, nem `18 px`. Hosszúságként a nullánál többnyire elhagyható az egység: `margin: 0;`. Egy nem nulla hosszúsághoz általában kell egység. A `line-height: 1.6` külön eset: egység nélküli szorzó.

## Abszolút egységek

| Egység | Név | CSS szerinti kapcsolat |
| --- | --- | --- |
| `px` | CSS-pixel | `1px = 1/96in` |
| `in` | Hüvelyk | `1in = 2.54cm = 96px` |
| `cm` | Centiméter | `1cm ≈ 37.795px` |
| `mm` | Milliméter | `1mm = 0.1cm` |
| `Q` | Negyedmilliméter | `1Q = 0.25mm` |
| `pt` | Pont | `1pt = 1/72in` |
| `pc` | Pica | `1pc = 12pt = 1/6in` |

A CSS-pixel nem feltétlenül egy fizikai kijelzőképpont. A pixelsűrűség és a nagyítás miatt több eszközpixel is kirajzolhat egy CSS-pixelt. Képernyőn a CSS-ben megadott `1cm` sem feltétlenül egy vonalzóval mért centiméter; a fizikai egységek nyomtatásnál kézenfekvőbbek.

```css
.keret { border: 2px solid navy; }
/* Nyomtatásra szánt stílusban például: */
.nyomtatott-szoveg { font-size: 12pt; }
```

## Betűméret-kulcsszavak

Abszolút méretkulcsszavak: `xx-small`, `x-small`, `small`, `medium`, `large`, `x-large`, `xx-large`, `xxx-large`.

A `medium` a böngésző alap betűméretéhez kötődik; ez gyakran 16 px, de a felhasználó átállíthatja. A kulcsszavakhoz ezért ne tanulj meg minden helyzetre érvényes, fix pixeltáblázatot.

A `font-size: 16px` a betűméretet adja meg, nem ígéri, hogy minden látható betűrajz pontosan 16 pixel magas.

## em: az adott helyzet betűméretéhez viszonyítva

A `font-size` esetén az `em` a szülő számított betűméretéhez viszonyít. Más tulajdonságnál, például `padding` esetén, az elem saját számított betűmérete az alap.

```css
.szulo { font-size: 20px; }
.gyermek {
  font-size: 1.5em;
  padding: 1em;
}
```

Ha a gyermek a szülőben van:

| Beállítás | Számítás | Eredmény |
| --- | --- | --- |
| Gyermek betűmérete | `20 × 1.5` | 30 px |
| Gyermek belső margója | `30 × 1` | 30 px oldalanként |

Az `em` nem az „M” betű ténylegesen megmért magassága. Egymásba ágyazott elemek `font-size: 1.5em` beállítása halmozódhat: 16 px → 24 px → 36 px.

## rem: a gyökérelem betűméretéhez viszonyítva

A `rem` általában a `html` elem számított betűméretét használja.

```css
html { font-size: 16px; }
.kartya {
  font-size: 1.25rem;
  padding: 2rem;
}
```

Itt a betűméret 20 px, a belső margó 32 px. A szülő betűméretének módosítása nem változtatja meg ezt a két értéket. Ha a gyökér betűméretét változtatod, mindkettő változik. Valódi oldalon a felhasználói alapméret tiszteletben tartásához a `html { font-size: 100%; }` is jó kiindulás.

::: normal-demo em és rem
```html
<div class="css03-szulo">
  <p class="em">1.5em: a 20 px-es szülő miatt 30 px.</p>
  <p class="rem">1.5rem: a weboldal gyökér-betűméretéhez igazodik.</p>
</div>
```
```css
.css03-szulo { font-size: 20px; }
.css03-szulo .em { font-size: 1.5em; }
.css03-szulo .rem { font-size: 1.5rem; }
```
:::

A `rem` példa pontos pixelértéke a befogadó oldal gyökér-betűméretétől függ.

## Százalék: mindig keresd a viszonyítási alapot!

| Tulajdonság | A százalék jellemző alapja |
| --- | --- |
| `width` | A tartalmazó blokk szélessége |
| `height` | Megfelelően meghatározott magasságú tartalmazó blokk magassága |
| `font-size` | A szülő betűmérete |
| `padding`, `margin` | Szokásos vízszintes írásmódban a tartalmazó blokk szélessége |
| `background-size` | A háttér pozicionálási területe |

A tartalmazó blokk gyakran a szülő tartalomdoboza, de nem minden elrendezésben. A százalék tehát nem mindig egyszerűen „a szülő azonos irányú mérete”.

```css
.szulo { width: 400px; }
.gyermek { width: 50%; } /* 200 px tartalomszélesség content-box esetén */
```

A `height: 50%` nem megbízható „fél képernyő” beállítás. Ha a tartalmazó blokk magasságát a tartalom alakítja, a százalékos magasság sok helyzetben nem a várt módon számítható ki.

## Nézetablakhoz kapcsolódó egységek

| Egység | Jelentés |
| --- | --- |
| `1vw` | A nézetablak szélességének 1%-a |
| `1vh` | A nézetablak magasságának 1%-a |
| `1vmin` | A szélesség és magasság közül a kisebb 1%-a |
| `1vmax` | A szélesség és magasság közül a nagyobb 1%-a |

1200 × 800 CSS-pixeles nézetablaknál:

| Érték | Eredmény |
| --- | --- |
| `10vw` | 120 px |
| `10vh` | 80 px |
| `10vmin` | 80 px |
| `10vmax` | 120 px |

Mobilon a böngésző eszköztárának megjelenése miatt eltérhet a rendelkezésre álló látható terület. A korszerű változatok:

| Család | Példa | Viszonyítás |
| --- | --- | --- |
| Kis nézetablak | `svh`, `svw` | A böngésző felülete által csökkentett méret |
| Nagy nézetablak | `lvh`, `lvw` | A böngésző felületének visszahúzódásakor elérhető méret |
| Dinamikus | `dvh`, `dvw` | Az aktuálisan változó nézetablakméret |

```css
.nyito-szakasz {
  min-height: 100vh;
  min-height: 100dvh;
}
```

Az első sor tartalék, a második az azt támogató böngészőkben érvényesül. A `min-height` engedi, hogy a hosszabb tartalom nagyobbra növelje a szakaszt.

## ex és ch

| Egység | Alapja | Fontos megjegyzés |
| --- | --- | --- |
| `ex` | A betűtípus x-magassága | Nem garantáltan fél `em` |
| `ch` | A „0” karakter előrelépési szélessége | Nem minden karakter szélessége egyenlő ezzel |

```css
.olvasmany {
  max-width: 65ch;
}
```

Ez kényelmesen korlátozza egy szövegblokk szélességét, de arányos betűtípusnál nem jelent pontosan 65 karaktert soronként.

A `smaller` és `larger` betűméret-kulcsszavak a szülőhöz képest csökkentik vagy növelik a méretet; nem rögzített egységek.

## Gyakorlás

A gyökér betűmérete 16 px, a szülőé 24 px. A gyermek beállításai:

```css
.gyermek {
  font-size: 1.5em;
  padding: 0.5em;
  margin-bottom: 2rem;
}
```

Mekkora a gyermek betűmérete, belső margója és alsó külső margója? Mennyi `25vw` egy 1000 px széles nézetablakban?

::: details Megoldás

- Betűméret: `24 × 1.5 = 36px`.
- Belső margó: `36 × 0.5 = 18px` oldalanként.
- Alsó külső margó: `16 × 2 = 32px`.
- `25vw`: `1000 × 0.25 = 250px`.

:::
