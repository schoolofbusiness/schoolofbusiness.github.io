---
title: "4. Háttérformázások"
order: 4
category: CSS
---

# 4. Háttérformázások

## Mit fogsz megtanulni?

Beállítod egy elem háttérszínét és háttérképét, szabályozod az ismétlést, pozíciót és méretet, majd megkülönbözteted a háttér kiindulási és festési területét.

## Háttérszín és háttérkép

```css
.kartya {
  background-color: lightblue;
  background-image: url("kepek/minta.svg");
}
```

A háttérszín a háttérkép mögött helyezkedik el. Képbetöltési hibánál vagy áttetsző kép esetén is látható maradhat. A háttér nem hoz létre önmagától tartalmi méretet: az üres elemhez például `min-height` vagy belső térköz szükséges lehet.

::: warning Az útvonal a CSS helyéhez viszonyít!
Külső stíluslapban az `url()` relatív útvonala **a CSS-fájl helyéhez**, nem a HTML-fájlhoz viszonyít. Ha a stíluslap `css/style.css`, a kép pedig `images/minta.svg`, akkor a stíluslapból tipikusan `url("../images/minta.svg")` szükséges.
:::

A tartalmi képet HTML `img` elemmel és megfelelő `alt` szöveggel add meg. A CSS-háttér dekorációra való; nincs hozzá `alt` attribútum.

## Ismétlődés: background-repeat

| Érték | Hatás |
| --- | --- |
| `repeat` | Mindkét irányban ismétel; alapérték |
| `no-repeat` | Nem ismétel |
| `repeat-x` | Csak vízszintesen ismétel |
| `repeat-y` | Csak függőlegesen ismétel |
| `round` | Az ismételt képek méretét a rendelkezésre álló helyhez igazítja |
| `space` | Teljes képeket helyez el, közöttük egyenletes hézaggal |

Két értékkel az első a vízszintes, a második a függőleges ismétlés:

```css
background-repeat: repeat no-repeat; /* mint a repeat-x */
```

A következő példában egy CSS-színátmenet szolgál képként, ezért nem szükséges külön képfájl. A doboz szélességének változtatásakor figyeld meg az ismétlődést!

::: normal-demo Háttérismétlés képfájl nélkül
```html
<div class="css04-ismetles">
  <p class="mindketto">repeat</p>
  <p class="vizszintes">repeat-x</p>
  <p class="fuggoleges">repeat-y</p>
  <p class="egyszer">no-repeat</p>
</div>
```
```css
.css04-ismetles p {
  min-height: 90px;
  padding: 8px;
  color: #172554;
  background-color: #eff6ff;
  background-image: radial-gradient(circle, #60a5fa 8px, transparent 9px);
  background-size: 40px 40px;
  border: 1px solid #94a3b8;
}
.css04-ismetles .mindketto { background-repeat: repeat; }
.css04-ismetles .vizszintes { background-repeat: repeat-x; }
.css04-ismetles .fuggoleges { background-repeat: repeat-y; }
.css04-ismetles .egyszer { background-repeat: no-repeat; }
```
:::

## Pozíció: background-position

```css
background-position: center;
background-position: right top;
background-position: 200px 100px;
background-position: right 20px bottom 10px;
```

| Megadás | Jelentés |
| --- | --- |
| `center` | Vízszintesen és függőlegesen középen |
| `top` | Felül, vízszintesen középen |
| `right top` | Jobb felső sarok |
| `200px 100px` | Balról 200 px, felülről 100 px |
| `right 20px bottom 10px` | Jobb széltől 20 px, alsó széltől 10 px |

Egyetlen vízszintes értéknél a függőleges pozíció középre kerül: `40px` jelentése `40px center`, nem `40px 0`.

A százalékos pozíció nem egyszerűen a kép bal felső sarkát helyezi az elem adott százalékához. A rendelkezésre álló különbségből számol:

**Vízszintes eltolás = (terület szélessége − kép szélessége) × százalék.**

Ha a terület 300 px, a háttérkép 100 px széles, `25%` esetén az eltolás `(300 − 100) × 0.25 = 50px`. `50%` a kép közepét és a terület közepét illeszti egymáshoz.

## Méret: background-size

| Érték | Jelentés |
| --- | --- |
| `auto` | A kép saját mérete, illetve saját arányai szerinti méret |
| `100px` | 100 px szélesség, automatikus magasság |
| `100px 60px` | Mindkét méret megadva; eltérő képaránynál torzíthat |
| `50% auto` | A pozicionálási terület szélességének fele |
| `contain` | Az egész kép belefér, üres sáv maradhat |
| `cover` | A teljes terület fedett, a kép széle levágódhat |

A `contain` és `cover` megtartja a kép saját arányát. A `background-size` százalékának alapja az elem háttér-pozicionálási területe, nem egyszerűen a szülő mérete.

**Számítási példa:** 400 × 200 px-es képet 300 × 200 px-es dobozba helyezünk.

| Mód | Megjelenített képméret | Következmény |
| --- | --- | --- |
| `contain` | 300 × 150 px | Összesen 50 px magas üres terület marad |
| `cover` | 400 × 200 px | Összesen 100 px vízszintes rész nem fér el |

`background-position: center` esetén az üres terület vagy levágás két oldalra egyenlően oszlik el.

## Görgetési viselkedés: background-attachment

| Érték | Mihez rögzül? |
| --- | --- |
| `scroll` | Az elem dobozához; az oldal görgetésével mozog, a saját tartalom görgetésével nem |
| `local` | Az elem tartalmához; a belső görgetéssel együtt is mozog |
| `fixed` | Általában a nézetablakhoz; az oldal görgetésekor helyben marad |

```css
.gorgetheto {
  height: 180px;
  overflow: auto;
  background-image: linear-gradient(#dbeafe, #1d4ed8);
  background-attachment: local;
}
```

A különbséghez az elemnek a saját magasságánál hosszabb tartalom kell. A `fixed` mobilos megjelenését és viselkedését a célböngészőben is próbáld ki.

## Kiindulási terület: background-origin

Ez határozza meg a háttérkép méretezéséhez és pozicionálásához használt dobozt.

| Érték | Terület |
| --- | --- |
| `padding-box` | Tartalom és belső margó; alapérték |
| `border-box` | Tartalom, belső margó és szegély |
| `content-box` | Csak a tartalom |

## Festési határ: background-clip

| Érték | Meddig rajzolódhat a háttér? |
| --- | --- |
| `border-box` | A szegély külső széléig, a szegély mögött; alapérték |
| `padding-box` | A belső margó külső széléig |
| `content-box` | Csak a tartalomdobozban |
| `text` | A betűk alakján belül |

Az `origin` a **viszonyítási terület**, a `clip` a **kirajzolás határa**. Nem ugyanazt állítják. A szegély mögötti háttér áttetsző szegéllyel figyelhető meg könnyen.

::: normal-demo A háttér terjedelme
```html
<div class="css04-clip">
  <p class="border">border-box</p>
  <p class="padding">padding-box</p>
  <p class="content">content-box</p>
</div>
```
```css
.css04-clip p {
  border: 12px dashed #475569;
  padding: 24px;
  background-color: #bfdbfe;
  color: #172554;
}
.css04-clip .border { background-clip: border-box; }
.css04-clip .padding { background-clip: padding-box; }
.css04-clip .content { background-clip: content-box; }
```
:::

A `background-clip: text` esetén a szöveget áttetszővé kell tenni, hogy a mögé festett háttér látszódjon. A példában támogatásvizsgálat mellett megmarad az olvasható tartalék szín:

```css
.szinatmenetes-cim { color: navy; }
@supports (background-clip: text) {
  .szinatmenetes-cim {
    background-image: linear-gradient(90deg, navy, royalblue);
    background-clip: text;
    color: transparent;
  }
}
```

## Rövidített megadás: background

```css
.borito {
  background: url("kepek/borito.jpg") center / cover no-repeat padding-box border-box scroll #e2e8f0;
}
```

A könnyen követhető sorrend: kép, pozíció, `/` után méret, ismétlés, dobozok, csatolás, szín. Nem minden résznek van merev sorrendje, de a pozíció és méret közötti `/` kötelező. Két dobozértéknél az első az `origin`, a második a `clip`; egy dobozérték mindkettőt állítja.

::: warning A rövidítés visszaállíthat korábbi beállításokat
A `background: lightblue;` nem csak a színt változtatja: a rövidítésben kihagyott háttérösszetevőket is alapértékre állítja, így a korábbi háttérképet eltüntetheti. Ha csak színt módosítasz, használd a `background-color` tulajdonságot.
:::

Több háttérképet vesszővel is felsorolhatsz. Az első kerül legfelülre; háttérszínt csak az utolsó rétegben adhatsz meg.

## Gyakorlás

Készíts `.borito` osztályt világoskék háttérszínnel és `kepek/borito.jpg` háttérképpel! A kép középen legyen, ne ismétlődjön, fedje le a teljes területet, a doboz minimális magassága legyen 250 px!

::: details Megoldás
```css
.borito {
  min-height: 250px;
  background-color: lightblue;
  background-image: url("kepek/borito.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
```
A képfájlt saját próbádhoz létre kell hoznod vagy be kell másolnod; a beépített demók ezzel szemben képfájl nélkül működnek.
:::
