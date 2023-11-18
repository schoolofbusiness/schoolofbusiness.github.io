---
category:
  - Weboldalak formázása
---

# 4. tananyag

:::tip 📚 EBBEN A FEJEZETBEN
Az internet és a világháló rohamos fejlődése során a weboldalak nem csupán információt közvetítenek, hanem szemléletes és felhasználóbarát élményt is nyújtanak. A webfejlesztés fontos aspektusa a megjelenés testreszabása és a tartalom stilisztikai elemekkel való kiegészítése. Ebben a kontextusban rendkívül fontosak a stílusok és stíluslapok (CSS), amelyek kulcsfontosságú szerepet töltenek be a webdesign területén.
:::

## CSS3

A **stílusok és stíluslapok (CSS)** a webfejlesztés eszköztárában olyan eszközök, amelyek lehetővé teszik a weboldal tartalmának és megjelenésének elkülönítését. A CSS az ún. Cascading Style Sheets rövidítése, amely egy olyan nyelv, amely meghatározza, hogyan jelenjen meg a weboldal tartalma a böngészőben. Szerepe kiemelkedő fontosságú a webfejlesztésben. Először is, a __CSS__ segít abban, hogy a weboldalak stílusosak és vonzók legyenek. A színek, betűtípusok, elrendezések és animációk beállításával a fejlesztők képesek egyedi megjelenést teremteni, ami segíti a weboldalak azonosítását és a márkaépítést. A konszisztens[^first] megjelenés fenntartását az egész weboldalon lehetővé teszi. Az egységes stílusok és szabályok alkalmazásával a weboldal különböző részei egységesnek és összefüggőnek tűnnek, ami javítja a felhasználói élményt. __CSS__ révén a weboldalak könnyedén testreszabhatók és alkalmazkodhatnak különböző kijelzőméretekhez és eszközökhöz. Ez a reszponzív design elengedhetetlen a mobilbarát és a sokféle eszközön való megjelenéshez.

A  __CSS3__ legújabb verzió, amely több fejlesztést és lehetőséget kínál a webdesign területén. Szabályok és leírók új lehetőségeket nyújtanak az árnyékolás, a színek, a betűtípusok, az animációk és a tranzíciók terén. Például az árnyékolás lehetővé teszi számunkra, hogy valósághű árnyékokat hozzunk létre elemek körül, ami a dimenzió és a térhatás érzetét kelti. Az animációk és tranzíciók segítségével dinamizmust vihetünk az oldalakba, és figyelemfelkeltő vizuális elemeket hozhatunk létre.

A **CSS3 szintaxis** az alábbi alapvető elemekekből áll:

1. **Szelektorok (selectors):** A szelektorok meghatározzák, mely HTML elemekre vonatkozzon a stílus. Például, az `h1` szelektor az összes `h1` címre alkalmazza a definiált stílusokat.

2. **Tulajdonságok (properties):** Ezek azok a vizuális tulajdonságok, amelyeket módosítani kívánunk, például a `color` (szín) vagy a `font-size` (betűméret).

3. **Értékek (values):** Az értékek meghatározzák, hogy a kiválasztott tulajdonság milyen értékkel rendelkezzen. Például, a `color` tulajdonsághoz értékként egy színkódot, például `#FF0000` (vörös) adhatunk meg.

4. **Számszerű értékek (numeric values):** Néhány tulajdonság numerikus értékeket is használ, például a `margin` vagy a `padding`, ahol pixelek vagy százalékok használhatók.

5. **Deklarációk (declarations):** A szelektorokhoz hozzárendeljük a tulajdonságokat és az értékeket, és ezeket nevezzük deklarációknak. Például:
   
   ```css
   h1 {
     color: #FF0000;
     font-size: 24px;
   }
   ```

## Stílusok definiálásnak és alkalmazásának különböző módozatait

A CSS stílusok definiálásának és alkalmazásának különböző módjai: _inline_, _internal_ és _external_. Ezek a technikák kulcsfontosságúak a webfejlesztés során, mivel lehetővé teszik a különböző stílusok és formázások alkalmazását a weboldalakhoz, miközben megkönnyítik a karbantarthatóságot és az újrahasznosíthatóságot.

### Inline CSS

Az _inline_ CSS a legegyszerűbb módszer a stílusok definiálására és alkalmazására. Ebben a módszerben a stílusok közvetlenül a HTML elemeken belül vannak meghatározva. Például:

```html
<p style="color: blue; font-size: 16px;">Ez egy példa szöveg inline stílusokkal.</p>
```

Az _inline_ CSS előnye, hogy gyorsan alkalmazható, és a stílusok csak az adott elemre vonatkoznak. Azonban hátránya, hogy nehezen karbantartható, különösen nagy projekt esetén, mivel a stílusok elszórtan vannak az elemeken.

### Internal CSS

Az _internal_ CSS a stílusok definiálásának egy másik módszere. Ebben a módszerben a stílusokat az HTML dokumentum `<head>` részében, egy `<style>` elemen belül határozzuk meg, és azokat azonosítók, osztályok vagy elemek szerint alkalmazzuk. Például:

```html
<head>
  <style>
    p {
      color: green;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <p>Ez egy példa szöveg internal CSS használatával.</p>
</body>
```

Az _internal_ CSS lehetővé teszi a stílusok újrahasznosítását, mivel több elemre is alkalmazhatók az azonos szabályok. Azonban a stílusok még mindig közvetlenül a HTML-dokumentumban vannak meghatározva, ami a karbantarthatóság terén továbbra is korlátokat jelent.

### External CSS

Az _external_ CSS a legkifinomultabb és rugalmasabb módszer a stílusok definiálására és alkalmazására. Ebben a módszerben a stílusokat külön CSS fájlban tároljuk, és azokat a HTML dokumentumokba egy hivatkozás segítségével alkalmazzuk. Például:

CSS fájl (__styles.css__):

```css
p {
  color: red;
  font-size: 20px;
}
```

HTML fájl (__index.html__):

```html
<head>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <p>Ez egy példa szöveg external CSS használatával.</p>
</body>
```

Az _external_ CSS lehetővé teszi a stílusok globális alkalmazását minden olyan oldalon, amely hivatkozik rá. Ez javítja a karbantarthatóságot és az újrahasznosíthatóságot, mivel a stílusok különállóak a tartalomtól, és könnyen változtathatók és frissíthetők.

Összegzésképpen, az _inline_, _internal_ és _external_ CSS különböző módokat kínálnak a stílusok definiálására és alkalmazására a webfejlesztés során. A megfelelő módszer kiválasztása projektjétől és igényeitől függ, de az _external_ CSS általában a legjobb gyakorlat a nagyobb rugalmasság és karbantarthatóság érdekében.

## CSS-szabályok kiértékelési sorrendjét

A CSS-szabályok kiértékelési sorrendje meghatározza, hogy milyen stílusokat alkalmazzunk egy adott HTML elemre, amikor több szabály is érvényes rá. A kiértékelési sorrend alapján az utolsó alkalmazott szabály felülírja az előzőeket. Az alábbi sorrendben történik a kiértékelés:

1. **Alapértelmezett (_default_) stílusok**: A böngészők beállítanak bizonyos alapértelmezett stílusokat minden HTML elemre. Ezek a böngésző specifikusak, és általában minimális formázást tartalmaznak.

2. **Külső (_external_) stílusok**: Az első lépés a külső CSS fájlok beolvasása és a szabályok kiértékelése. Azok a szabályok, amelyek a külső stíluslapokban találhatók, sorrendjüktől függetlenül érvényesülnek.

3. **Belső (_internal_) stílusok**: Az internal CSS szabályokat a HTML dokumentum `<style>` elemein belül határozzák meg, és azok a külső stílusok után, de a következő pont előtt érvényesülnek.

4. **_Inline_ stílusok**: Az _inline_ CSS szabályokat az adott HTML elemekhez kapcsolják. Ezek a szabályok a legnagyobb prioritást élvezik, és felülírják a külső és belső stílusokat.

Például, ha egy elemre háromféle szabály vonatkozik:

- Külső (_external_) stíluslapban definiált szabály.
- Belső (_internal_) stíluslapban definiált szabály.
- _Inline_ stílus az elemen.

Ebben az esetben az _inline_ stílus felülírja a külső és belső stílusokat.

Fontos megjegyezni, hogy a **származtatott (_inherited_) tulajdonságok** kivételek a fent említett sorrendhez. A származtatott tulajdonságok olyan tulajdonságok, amelyek az elem szülőelemétől öröklődnek. Például, a szövegszín általában öröklődik az elemek között. Ha nincs explicit szín beállítva egy elemre, akkor az azonos szín jelenik meg, amit az őselem használ.

Ezért a CSS-szabályok kiértékelése során fontos figyelembe venni a prioritást és az öröklődést, mivel ezek határozzák meg, hogy mely stílusok érvényesülnek az egyes elemeken. A fejlesztőknek ezeket a szabályokat használva tudatosan tervezhetik meg a stílusok alkalmazását, hogy elérjék a kívánt dizájnt és megjelenést a weboldalaikon.

### Példa

Nézzünk egy példát a CSS-szabályok kiértékelési sorrendjére:

Tegyük fel, hogy van egy egyszerű HTML dokumentum:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Példa</title>
  <style>
    p {
      color: blue;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <p style="color: red;">Ez egy példa szöveg inline stílusokkal.</p>
</body>
</html>
```

Ebben a példában a következő stílusok érintik az `<p>` elemet:

1. **Külső stílus (_external_)**: A külső stíluslap (az HTML fejrészében) beállítja az összes `<p>` elem szövegszínét kék színre, és a betűméretüket 16 pixelre.

2. **Inline stílus (_inline_)**: Az elemen belül az _inline_ stílus felülírja a külső stílusokat. Az _inline_ stílus beállítja a szövegszínt pirosra.

A kiértékelési sorrend és a prioritások alapján a végleges stílusok a következők:

- Szövegszín: piros (_inline stílus felülírja a külső stílust_).
- Betűméret: 16 pixel (_külső stílus_).

Ezért az elem piros szöveggel jelenik meg a 16 pixel méretű betűkkel.

Ez a példa bemutatja a CSS-szabályok kiértékelési sorrendjét és azt, hogy hogyan írja felül az _inline_ stílus a külső stílust az egyes tulajdonságokban. Az alapelvek alkalmazhatók bonyolultabb weboldalakon is, ahol több szabály és elem van.

## CSS3 szelektorok

A CSS (Cascading Style Sheets) egy olyan eszköz, amely lehetővé teszi a weboldalak stílusának meghatározását és formázását. A CSS3-szelektorok egy olyan fontos része ennek a technológiának, amely lehetővé teszi az elemek kiválasztását és a hozzájuk tartozó stílusok alkalmazását. A szelektorok segítségével hatékonyan tudjuk irányítani, hogy mely elemekre, csoportokra vagy specifikus feltételekre alkalmazzuk a stílusokat.

Az alábbiakban bemutatom a különböző CSS3-szelektor típusokat:

### Univerzális szelektor

A univerzális szelektor (* vagy \*) az összes HTML elemet kiválasztja az oldalon. Például:

```css
* {
  margin: 0;
  padding: 0;
}
```

Ez a példa a dokumentum összes elemére alkalmaz egy stílust, amely nullára állítja a margókat és a paddingeket.

### Elem szelektor

Az elem szelektor a kiválasztott HTML elemeket az elem nevükkel azonosítja. Például:

```css
p {
  font-size: 18px;
}
```

Ebben az esetben az összes `<p>` elemnek 18 pixel méretű lesz a betűje.

### Azonosító szelektor

Az azonosító szelektor (#) egy egyedi azonosítót használ az elem kiválasztására. Például:

```css
#header {
  background-color: #333;
}
```

Itt az `#header` azonosítóval rendelkező elem hátterének színét állítjuk be.

### Osztály szelektor

Az osztály szelektor (.) egy vagy több HTML elemet az osztály nevükkel azonosít. Például:

```css
.button {
  background-color: blue;
  color: white;
}
```

Ebben az esetben az összes `.button` osztályú elemnek kék háttérrel és fehér szöveggel lesz megjelenítve.

### Pszeudo szelektorok

A pszeudo szelektorok különböző feltételek alapján választanak ki elemeket. Például:

```css
a:hover {
  text-decoration: underline;
}
```

Ez a szelektor az összes olyan hiperhivatkozást választja ki, amelyekre az egérrel mutatva, vagyis amikor a hivatkozás fölé viszik az egeret, aláhúzott szöveget jelenít meg.

### Speciális szelektorok

A speciális szelektorok olyan specifikus feltételek alapján választják ki az elemeket, amelyek nem illeszkednek az előző kategóriákba. Például:

```css
p:first-child {
  font-weight: bold;
}
```

Ez a szelektor az összes olyan `<p>` elemet választja ki, amelyek az őselemük első gyermekei, és azokra vastag betűstílust alkalmaz.

A fent bemutatott CSS3-szelektorok lehetővé teszik a pontos elemek kiválasztását és a hozzájuk tartozó stílusok alkalmazását. 

A megfelelő szelektorok kiválasztása és alkalmazása segít abban, hogy a weboldalak egyedi és vonzó megjelenést kapjanak, miközben lehetővé teszi a stílusok hatékony kezelését és karbantartását.


[^first]: **konszisztens:** Erős, tömör, állandó; belső ellentmondásoktól mentes, egységes, következetes.

