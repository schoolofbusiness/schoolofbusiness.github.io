---
category:
  - Weboldalak formázása
---

# 5. tananyag

:::tip 📚 EBBEN A FEJEZETBEN
Megismerjük a legfontosabb tulajdonságokat, amelyek segítségével formázási műveleteket végezhetünk a weboldalakon. Ezek segítenek a weboldalak kinézetének testreszabásában és a tartalom megfelelő elrendezésében.
:::

## CSS3 tulajdonságok I.

A tulajdonságok lehetővé teszik számunkra, hogy pontosan szabályozzuk a szöveg és elemek megjelenését, például szín, betűtípus, pozíció és árnyékolás terén. A CSS3 újabb és bővített lehetőségeket kínál a korábbi CSS-verziókhoz képest, amelyek segítségével lenyűgöző, modern webes felhasználói élményeket hozhatunk létre.

### `margin` 

A `margin` egy alapvető tulajdonság, amelyet arra használnak, hogy az elemek közötti távolságot beállítása és az elrendezést finomhangolja, vagyis az elemek körüli üres területek meghatározását teszi lehetővé.

A `margin` tulajdonság a következő jellemzőkből áll:

1. **margin-top**: Ez a tulajdonság meghatározza a felső margót, vagyis a fenti elem és az azt körülvevő elem közötti távolságot.

2. **margin-right**: Meghatározza a jobb oldali margót, vagyis a jobb oldalon lévő elem és az azt körülvevő elem közötti távolságot.

3. **margin-bottom**: Ez határozza meg az alsó margót, vagyis az alsó elem és az azt körülvevő elem közötti távolságot.

4. **margin-left**: Bal oldali margót határozza meg, vagyis a bal oldalon lévő elem és az azt körülvevő elem közötti távolságot.

Az értékek lehetnek __abszolút méretek__ (_például pixel_), __relatív méretek__ (_például százalék_), vagy akár __negatív értékek__ is.

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/margin.html'" width="100%"  height="375" />

Példa a `margin` tulajdonság használatára:

```css
.pelda {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
}
```

Példában a fenti margó __10 pixel__, a jobb margó __20 pixel__, az alsó margó __10 pixel__ és a bal margó __20 pixel__. Ennek eredményeként az elemnek megfelelő tere lesz körülötte a többi elemhez képest.

A `margin` az elemek közötti helytakarékosság és a megjelenés testreszabása érdekében fontos, hogy a fejlesztés során jól értsük és hatékonyan alkalmazzuk ezt a tulajdonságot. Az elemek közötti távolságok megfelelő kezelése segít a weboldalak egyenletes és esztétikus kinézetének elérésében.

### `padding`

A `padding` szintén egy alapvető CSS3 tulajdonság, amelyet arra használnak, hogy az elemek belső területeinek szabályozza. Lehetővé teszi a belső margók, vagyis az elem tartalma és a körülötte lévő keret közötti tér meghatározását.

A `padding` tulajdonság a következő jellemzőkből áll:

1. **padding-top**: Ez a tulajdonság meghatározza a felső belső margót, vagyis a tartalom és az elem teteje közötti távolságot.

2. **padding-right**: Meghatározza a jobb oldali belső margót, vagyis a tartalom és az elem jobb oldala közötti távolságot.

3. **padding-bottom**: Az alsó belső margót, vagyis a tartalom és az elem alsó része közötti távolságot határozza meg.

4. **padding-left**: Meghatározza a bal oldali belső margót, vagyis a tartalom és az elem bal oldala közötti távolságot.

Az értékek lehetnek __abszolút méretek__ (_például pixel_), __relatív méretek__ (_például százalék_), vagy akár __negatív értékek__ is.

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/padding.html'" width="100%"  height="375" />

Példa a `padding` tulajdonság használatára:

```css
.pelda {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
}
```

Ebben a példában a fenti belső margó __10 pixel__, a jobb belső margó __20 pixel__, az alsó belső margó __10 pixel__ és a bal belső margó __20 pixel__. Ennek eredményeként az elem tartalmának megfelelő tér lesz körülötte.

Az elemek belső területeinek pontos beállítását és a tartalom megjelenítésének finomhangolását teszi lehetővé a `padding`. Az elrendezés és a design szempontjából kulcsfontosságú, hogy a fejlesztés során jól értsük és hatékonyan alkalmazzuk ezt a tulajdonságot. A belső margók kezelése segít a tartalom szabályozott megjelenítésében és az elemek közötti tér pontos beállításában, ami hozzájárul a weboldalak egyenletes és esztétikus megjelenéséhez.

### `width`

A `width` tulajdonság egy elem szélességének meghatározására használjuk és lehetővé teszi az elem vízszintes méretének beállítását továbbá kulcsszerepet játszik az elrendezés és a tervezés során.

A `width` tulajdonság egy __mértékegységet__ vagy egy __relatív értéket__ fogad el:

- **abszolút méretek**: Például _pixelekben_ (`px`) vagy _centiméterben_ (`cm`) adják meg az elem szélességét. Például: `width: 300px;`.

- **relatív méretek**: Például _százalékosan_ adják meg az elem szélességét a szülőelemhez képest. Például: `width: 50%;`.

A `width` tulajdonság használata nagyon fontos az elrendezés során, mivel lehetővé teszi az elemek méretének finomhangolását az oldalon. Például egy `div` elem szélességének beállítása segíthet abban, hogy az elem az oldal szélességének egy meghatározott részét elfoglalja, vagy egy kép szélességének szabályozásával biztosítható, hogy az megfelelő méretben jelenjen meg.

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/width.html'" width="100%"  height="375" />

Példa a `width` tulajdonság használatára:

```css
.container {
  width: 80%;
  margin: 0 auto;
}

.image {
  width: 200px;
}
```

A `.container` elemnek beállítottuk a szélességét __80%__-ra, ami azt jelenti, hogy az elem az oldal szélességének __80%__-át foglalja el, és középre igazítjuk a `margin` tulajdonság segítségével. A `.image` elemnek beállítottuk a szélességét __200 pixelre__, így az kép pontos mérete __200 pixel__ lesz.

A __width__ tulajdonsággal az abszolút és relatív méretek használata lehetővé teszi a rugalmas és reszponzív tervezést, amely fontos a különböző kijelzőméretekhez és eszközökhöz való alkalmazkodás szempontjából.


### `height`

A `height` tulajdonságot az elem magasságának meghatározására használjuk és lehetővé teszi az elem függőleges méretének beállítását, továbbá fontos szerepet játszik az elrendezés és a tervezés során.

A `height` tulajdonság egy __mértékegységet__ vagy egy __relatív értéket__ fogad el, __hasonlóan a__ `width` tulajdonsághoz:

- **abszolút méretek**: __Pixelekben__ (`px`) vagy __centiméterben__ (`cm`) adják meg az elem magasságát. Például: `height: 200px;`.

- **relatív méretek**: __Százalékosan__ adják meg az elem magasságát a szülőelemhez képest. Például: `height: 50%;`.

A `height` tulajdonság alkalmazása segít az elemek függőleges méretének finomhangolásában az oldalon. Például, egy `<div>` magasságának beállításával biztosítható, hogy a tartalom a kívánt területen megjelenjen.

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/height.html'" width="100%"  height="375" />

Példa a `height` tulajdonság használatára:

```css
.container {
  height: 400px;
  background-color: #f0f0f0;
}

.sidebar {
  height: 100%;
  background-color: #333;
}

.image {
  height: 150px;
}
```

Ebben a példában van egy `.container` nevű tartalomtér, egy `.sidebar` nevű oldalsáv és egy `.image` nevű kép. A `.container` elemnek beállítottuk a magasságát __400 pixel__-re, a `.sidebar` elemnek pedig __100%__-ra a szülőelem magasságához képest, míg a `.image` elemnek beállítottuk a magasságát __150 pixelre__. Így az elemeknek különböző magasságuk van, és az oldalon különböző méretű területeken jelennek meg.

A __height__ tulajdonsággal az abszolút és relatív méretek használata lehetővé teszi a rugalmas és reszponzív tervezést, amely fontos a különböző kijelzőméretekhez és eszközökhöz való alkalmazkodás szempontjából.


### `top`

A `top` az elemek pozíciójának függőleges elhelyezésének meghatározására használjuk és lehetővé teszi az elem felső szélét az elrendezés során történő igazítására. Mértékegységet fogad el, például __pixelekben__ (`px`) vagy relatív értékeket __százalékosan__. Például: `top: 20px;` vagy `top: 10%;`.

Használata fontos az elemek pozíciójának pontos beállításához az oldalon. Például, ha egy elemet fentről kell elhelyezni az oldalon, akkor ennek a tulajdonság segítségével határozható meg, hogy mekkora távolságra legyen az elem a szülőelem tetejétől.

Példa a `top` tulajdonság használatára:

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/top.html'" width="100%"  height="375" />


A `top` tulajdonság használata segít az elemek függőleges pozíciójának pontos beállításában az oldalon. Ez fontos az elrendezés és a tervezés során, és lehetővé teszi, hogy az elemeket szabályozottan helyezzék el az oldalon, és megfelelő elrendezést hozzanak létre a különböző elemek között.

### `bottom`

A `bottom` az elemek pozíciójának függőleges elhelyezésének meghatározására használjuk és lehetővé teszi az elem alsó szélét az elrendezés során történő igazítására. Mértékegységet fogad el, például __pixelekben__ (`px`) vagy relatív értékeket __százalékosan__. Például: `bottom: 20px;` vagy `bottom: 10%;`.

Használata fontos az elemek pozíciójának pontos beállításához az oldalon. Például, ha egy elemet lent kell elhelyezni az oldalon, akkor ennek a tulajdonság segítségével határozható meg, hogy mekkora távolságra legyen az elem a szülőelem aljától.

Példa a `bottom` tulajdonság használatára:

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/bottom.html'" width="100%"  height="375" />

A `bottom` tulajdonság használata segít az elemek függőleges pozíciójának pontos beállításában az oldalon. Ez fontos az elrendezés és a tervezés során, és lehetővé teszi, hogy az elemeket szabályozottan helyezzék el az oldalon, és megfelelő elrendezést hozzanak létre a különböző elemek között.

### `left`

A `left` az elemek pozíciójának vízszintes elhelyezésének meghatározására használjuk és lehetővé teszi az elem bal szélét az elrendezés során történő igazítására. Mértékegységet fogad el, például __pixelekben__ (`px`) vagy relatív értékeket __százalékosan__. Például: `left: 20px;` vagy `left: 10%;`.

Használata fontos az elemek pozíciójának pontos beállításához az oldalon. Például, ha egy elemet balra kell elhelyezni az oldalon, akkor ennek a tulajdonság segítségével határozható meg, hogy mekkora távolságra legyen az elem a szülőelem bal szélétől.

Példa a `left` tulajdonság használatára:

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/left.html'" width="100%"  height="375" />

A `left` tulajdonság használata segít az elemek vízszintes pozíciójának pontos beállításában az oldalon. Ez fontos az elrendezés és a tervezés során, és lehetővé teszi, hogy az elemeket szabályozottan helyezzék el az oldalon, és megfelelő elrendezést hozzanak létre a különböző elemek között.

### `right`

A `right` az elemek pozíciójának vízszintes elhelyezésének meghatározására használjuk és lehetővé teszi az elem jobb szélét az elrendezés során történő igazítására. Mértékegységet fogad el, például __pixelekben__ (`px`) vagy relatív értékeket __százalékosan__. Például: `right: 20px;` vagy `right: 10%;`.

Használata fontos az elemek pozíciójának pontos beállításához az oldalon. Például, ha egy elemet jobbra kell elhelyezni az oldalon, akkor ennek a tulajdonság segítségével határozható meg, hogy mekkora távolságra legyen az elem a szülőelem jobb szélétől.

Példa a `right` tulajdonság használatára:

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/right.html'" width="100%"  height="375" />

A `right` tulajdonság használata segít az elemek vízszintes pozíciójának pontos beállításában az oldalon. Ez fontos az elrendezés és a tervezés során, és lehetővé teszi, hogy az elemeket szabályozottan helyezzék el az oldalon, és megfelelő elrendezést hozzanak létre a különböző elemek között.

### `float`

A `float` tulajdonság lehetővé teszi az elemek lebegését más elemek mellett, amelyekhez igazodnak, így lehetőséget nyújt az oldal különböző elrendezési struktúráinak létrehozására.

A `float` tulajdonság két alapvető értéket tartalmaz:

1. **left**: Az elem balra lebeg, és a szomszédos elemek jobbra rendeződnek. Az elem új sorban helyezkedik el, ahol a bal oldali margótól számítva elhelyezkedik.

2. **right**: Az elem jobbra lebeg, és a szomszédos elemek balra rendeződnek. Az elem új sorban helyezkedik el, ahol a jobb oldali margótól számítva elhelyezkedik.

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/float.html'" width="100%"  height="375" />

Egy példa a `float` tulajdonság használatára:

```css
.left-column {
  float: left;
  width: 50%;
}

.right-column {
  float: right;
  width: 50%;
}
```

Ebben a példában két elemet használunk: `.left-column` és a `.right-column`. Mindkettőnél alkalmaztuk a `float` tulajdonságot, ahol az egyik balra (`left`) lebeg, a másik pedig jobbra (`right`). Mindkét elemnek beállítottuk a szélességét __50%__-ra, így a két elem vízszintesen helyezkedik el az oldalon, és elfoglalják az oldal felét.

::: tip Info
A `float` tulajdonság rendkívül hasznos a webfejlesztés során, különösen akkor, amikor az elemek elrendezését szeretnénk megoldani. Azonban fontos megjegyezni, hogy a `float` tulajdonság meghatározott viselkedést eredményez, és gondoskodni kell arról, hogy a szomszédos elemek helyesen illeszkedjenek hozzá. A modern CSS technológiák, például a `flexbox` és a `grid` keretrendszerek is alternatívát kínálnak az elrendezési igények teljesítésére, és gyakran hatékonyabbak lehetnek a `float` tulajdonság helyett.
:::


### `color`

A `color` tulajdonság a szöveg vagy szövegrészletek színének beállítására szolgál. Ez az egyik alapvető tulajdonság, amely lehetővé teszi a webfejlesztők számára a weboldalak színválasztásának széles skáláját.

A színértékek különböző formátumokban állíthatjuk be, például:
- hexadecimális (`#RRGGBB`)
- RGB (`rgb(255, 0, 0)`)
- RGBA (`rgba(255, 0, 0, 0.5)`) 
- vagy név szerint (pl. `red`)

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/color.html'" width="100%"  height="375" />

Az `color` tulajdonság használata egyszerű. Itt van egy példa:

```css
.pelda {
  color: red;
}
```

### `background`

A `background` egy komplex tulajdonság, amely lehetővé teszi, hogy a háttérképet és annak tulajdonságait részletesen szabályozzák egy HTML elemen belül.

A `background` tulajdonság egy összetett tulajdonság, amelynek számos _al-tulajdonsága_ van:

1. **background-color**: Meghatározza a háttérszínét az elemnek. Lehet egy szín neve, hexadecimális érték vagy más színre vonatkozó érték.

2. **background-image**: Képet állíthatunk be háttérképként. Például egy URL-t adhatunk meg, ami az elérési útvonalat jelöli meg a háttérképhez.

3. **background-repeat**: Szabályozza, hogyan ismétlődik a háttérkép. Lehetővé teszi az `repeat`, `no-repeat`, `repeat-x`, és `repeat-y` értékek használatát.

4. **background-size**: A háttérkép méretét lehet szabályozni, például beállítani, hogy a kép kitöltse az elemet vagy csak részben jelenjen meg.

5. **background-position**: Az elemen belüli háttérkép pozícióját határozza meg. Megadhatjuk pixelben, százalékban vagy kulcsszavakkal (pl. `center`, `left top`).

6. **background-attachment**: Ez szabályozza a háttérkép gördüléshez való viszonyát. Lehet `scroll` vagy `fixed`, attól függően, hogy az elem vagy a háttérkép gördül-e a böngészőablakban.

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/background.html'" width="100%"  height="375" />

Itt egy példa a `background` tulajdonság használatára:

```css
.pelda {
  background-color: #f2f2f2;
  background-image: url('background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
```

A háttérszín világosszürke (`#f2f2f2`), és egy `background.jpg` képet használ háttérképként. A háttérkép nem ismétlődik (`no-repeat`), kitölti az elemet (`background-size: cover`), középen helyezkedik el (`background-position: center`), és a háttérkép nem mozdul el, amikor a felhasználó görgeti az oldalt (`background-attachment: fixed`).

Összefoglalva a `background` tulajdonság rendkívül hasznos a webfejlesztés során, mivel lehetővé teszi a háttérkép testreszabását, a szín és képek kombinálását, és különböző vizuális hatások létrehozását az elemek háttérén. A színek és háttérképek kiválasztása lehetővé teszi a weboldalak egyedi stílusának és megjelenésének kialakítását a választott dizájn és brand arculat alapján.

### `border`

A `border` tulajdonság, amely lehetővé teszi, hogy meghatározzák egy HTML elem keretének tulajdonságait és stílusát. Széles körben használható a weboldalak megjelenésének testreszabására és a felhasználói élmény kialakítására.

A `border` tulajdonság három fő _al-tulajdonságot_ tartalmaz:

1. **border-width**: Ez meghatározza a keret vastagságát. Ezt például pixelben vagy más mértékegységekben lehet megadni.

2. **border-style**: Ez határozza meg a keret stílusát. Lehetnek olyan értékek, mint `solid` (_egyenes vonal_), `dotted` (_pöttyözött_), `dashed` (_szaggatott_), és több más.

3. **border-color**: A keret színét határozza meg. Ez lehet egy szín `neve`, `hexadecimális érték` vagy más színre vonatkozó érték.

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/border.html'" width="100%"  height="375" />

A `border` tulajdonság használatával ezeket az al-tulajdonságokat kombinálhatjuk egyetlen sorban. Például:

```css
.pelda {
  border: 2px solid #333;
}
```

Ebben a példában egy 2 pixel vastag szürke keretet alkalmaztunk.

Ezenkívül a `border` tulajdonságot további tulajdonságokkal is kiegészíthetjük, mint például a `border-radius`, amely az elem sarkainak lekerekítését határozza meg, vagy a `border-image`, amely lehetővé teszi képek használatát a keretek helyett. Gyakorlatilag lehetővé teszi az elemek megjelenésének testreszabását és szépítését, valamint a keretek használatát az elemek körül, hogy azok kiemelkedjenek a weboldalon.


### `display`

A `display` egy kulcsfontosságú CSS tulajdonság, amely meghatározza, hogy egy elem milyen módon jelenjen meg az oldalon. A `display` tulajdonság fontos az elrendezés és a megjelenés irányításában, mivel határozza meg, hogyan rendeződnek el az elemek, milyen térközökkel és milyen viselkedéssel rendelkeznek az oldalon.

A `display` tulajdonság a következő értékeket tartalmazza:

1. **block**: Ez az érték általában a legelterjedtebb és legtöbb HTML elem alapértelmezett megjelenési módja. Az elem egy blokkot képez, amely a rendelkezésre álló helyet teljes szélességben elfoglalja, így a következő elem a sor alatt jelenik meg.

2. **inline**: Ez az érték lehetővé teszi, hogy az elem egy sorban jelenjen meg a szöveg részeként anélkül, hogy új sorba kerülne. Az elem szélessége csak annyi lesz, amennyi a tartalom méretétől szükséges.

3. **inline-block**: Az `inline` és `block` közötti kompromisszumot jelenti. Az elemek sorban jelennek meg, de lehetővé teszik a szélesség és a magasság beállítását, valamint a `margin` és `padding` használatát.

4. **none**: Az elem elrejtésére használják így az nem foglal teret és teljesen eltűnik a megjelenésből.

5. **flex**: Lehetővé teszi a rugalmas elrendezés létrehozását egy tartományon belül, amely lehetővé teszi az elemek dinamikus elrendezését és viselkedését.

6. **grid**: Érték használata egy többszintű elrendezési rendszert hoz létre, ahol az elemek egy síkon vagy síkokon helyezkednek el.

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/display.html'" width="100%"  height="375" />

Példa a `display` tulajdonság használatára:

```css
.pelda {
  display: block;
  width: 200px;
  height: 100px;
  background-color: #ff0000;
}
```

Ebben a példában beállítottuk a `display` tulajdonságot `block` értékre. Ez azt jelenti, hogy az elem blokk formában jelenik meg, és teljes szélességet foglal el. Az elemnek beállítottunk egy __200 pixel__ szélességet és egy __100 pixel__ magasságot, és piros háttérszínt alkalmaztunk rá. Így az elem egy __piros__ téglalap formájában jelenik meg az oldalon.

:::tip Info
A megfelelő `display` érték kiválasztása segít az elrendezés és a design testreszabásában. Az `inline`, `block`, `inline-block`, `none`, `flex`, és `grid` értékek használatával változatos elrendezéseket hozhatunkk létre az oldalainkon a felhasználói élmény javítása érdekében.
:::