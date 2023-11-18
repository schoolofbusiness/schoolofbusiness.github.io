---
category:
  - Weboldalak formázása
---

# 6. tananyag

:::tip 📚 EBBEN A FEJEZETBEN
Megismerjük a legfontosabb tulajdonságokat, amelyek segítségével formázási műveleteket végezhetünk a weboldalakon. Ezek segítenek a weboldalak kinézetének testreszabásában és a tartalom megfelelő elrendezésében.
:::

## CSS3 tulajdonságok II.

A tulajdonságok lehetővé teszik számunkra, hogy pontosan szabályozzuk a szöveg és elemek megjelenését, például szín, betűtípus, pozíció és árnyékolás terén. A CSS3 újabb és bővített lehetőségeket kínál a korábbi CSS-verziókhoz képest, amelyek segítségével lenyűgöző, modern webes felhasználói élményeket hozhatunk létre.

### `opacity`

Az `opacity` tulajdonság az átlátszóság szabályozására szolgál. Az értéke egy lebegőpontos szám, amely `0` és `1` között lehet. `0` azt jelenti, hogy az elem teljesen átlátszó, míg `1` azt jelenti, hogy teljesen látható. Az értékek közötti tartományok lehetővé teszik a változtatható fokozatú átlátszóságot, amely fontos lehet például átmenetek vagy árnyékok létrehozásakor.

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/opacity.html'" width="100%"  height="375" />

Az `opacity` tulajdonság használata egyszerű. Itt van egy példa:

```css
.pelda {
  opacity: 0.5;
}
```

Ebben a példában az elem átlátszóságát `0.5`-re állítottuk. Ez azt jelenti, hogy csak részben átlátszó, így a háttérkép vagy az elemek alatta részben láthatók lesznek. Ezt a hatást kreatív dizájnokban és átmenetekben lehet alkalmazni.

::: tip Tipp
Az `opacity` tulajdonság sokféle alkalmazási lehetőséget kínál a webfejlesztés során. Például átlátszó háttereket vagy szövegeket hozhatunk létre, amelyek a felhasználói élményt javítják. Emellett animációk során az átlátszóság változtatása érdekes vizuális hatásokat hozhat létre. Az `opacity` mellett fontos megjegyezni, hogy az összetett átlátszósági hatásokhoz más CSS tulajdonságok, például `rgba()` színek és `background-color` is hozzájárulhatnak.
:::

Összefoglalva, az `opacity` tulajdonság lehetővé teszi, hogy az elemek átlátszóságát szabályozzák, ami számos kreatív lehetőséget kínál a weblapok kinézetének kialakítására és felhasználói élményének fokozására.





### `box-shadow`

A `box-shadow` lehetővé teszi árnyékok létrehozását egy HTML elem körül. Az árnyékok segítenek a dizájnban és a felhasználói élmény javításában, mivel mélységet és dimenziót adnak az elemeknek. 

A `box-shadow` tulajdonság a következő elemekből áll:

1. **offset x és y**: A definíció tartalmazza a vízszintes és függőleges eltolást. Ezek a két érték határozza meg, hogy milyen irányban helyezkedik el az árnyék az elem körül. Például: `2px 2px` - ahol az első szám a vízszintes, a második a függőleges eltolást jelöli meg.

2. **spread radius**: Az árnyék eloszlását szabályozza az elem körül. Ez lehet pozitív vagy negatív érték, ami kiterjedést vagy összezsugorodást eredményez. Például: `4px` - ami 4 pixel kiterjedést jelent az árnyék körül.

3. **blur radius**: Az árnyék elmosódását határozza meg. Minél nagyobb az érték, annál elmosódottabb lesz az árnyék. Például: `1px` - ami enyhe elmosódást eredményez.

4. **inset**: Érték használható a dobozba helyezett árnyékok létrehozásához, amelyek a doboz[^first] belsejében helyezkednek el, nem pedig kívül. Az érték használata esetén az árnyék az elem belsejében jelenik meg.

5. **color**: Színkódokat vagy színneveket is elfogad, amelyek meghatározzák az árnyék színét. Például: `#888888` - ami egy szürke árnyékot eredményez.

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/box-shadow.html'" width="100%"  height="375" />

A `box-shadow` tulajdonság használatával ezeket az elemeket kombinálhatjuk egyetlen definícióban. Példa:

```css
.pelda {
  box-shadow: 2px 2px 4px 1px #888888;
}
```

Ebben a példában egy enyhe árnyékot alkalmaztunk ahol az  __2 pixel__ vízszintesen és __2 pixel__ függőlegesen helyezkedik el az elem alatt, 4 pixeles kiterjedéssel és __1 pixel__ elmosódással. Az árnyék színe `#888888`.

A `box-shadow` tulajdonság rendkívül hasznos a webfejlesztésben, mivel segít vizuális mélységet és dimenziót adni az elemeknek. Árnyékokat lehet alkalmazni gombokra, dobozokra és más elemekre, hogy kiemeljék őket a felhasználók számára. Emellett további beállításokkal kombinálva különböző vizuális hatásokat is létrehozhat, például kiemeléseket és árnyékokat animációk során. Az árnyékok kreatív eszközként szolgálnak a webdizájn területén.

### `box-sizing`

A `box-sizing` lehetővé teszi, hogy hogyan méretezzünk HTML elemeket a böngészőben. Ez a tulajdonság segít abban, hogy egyértelműen lehessen definiálni, a méretarányokat (szélesség és magasság) továbbá, hogy hogyan kerüljenek számításba az elemek tartalmához vagy a külső margóhoz. 

A `box-sizing` két fő tulajdonságot használ:

1. **content-box**: Ez az alapértelmezett érték, és a böngésző az elem tartalmához méretezi az elemet. Ez azt jelenti, hogy a külső margó és padding nincs beleértve az elem szélességébe és magasságába.

2. **border-box**: Ezzel az értékkel az elem szélessége és magassága magában foglalja a külső margót és a paddinget is. Az elem tartalma tehát "belesűrűsödik" az elem keretébe.

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/box-sizing.html'" width="100%"  height="375" />

Példa a `box-sizing` tulajdonság használatára:

```css
.pelda {
  box-sizing: border-box;
  width: 200px;
  padding: 10px;
  border: 1px solid #000;
}
```

Ebben a példában beállítottuk a `box-sizing` tulajdonságot `border-box` értékre. Ez azt jelenti, hogy az elem szélessége és magassága már tartalmazza a paddinget és a keretet. Tehát az összes hozzáadott pixel a `200px` széles elem méretén belül van.

A `box-sizing` tulajdonság lehetővé teszi a pontosabb méretezést és elrendezést az elemek számára. Például az `border-box` érték segít elkerülni olyan problémákat, amikor a padding és a keret szélessége növeli az elem effektív méretét. Ez különösen hasznos a reszponzív tervezésnél és a _CSS grid_ vagy _flexbox_ használatakor, amikor az elemek méretezése kritikus a tervezési koncepcióhoz.




### `overflow`

Az `overflow` ellenőrzi, hogy ha az oldal tartalmi területét meghaladó tartalom kerül bele. Segítségével lehetőség van a görgetés vagy elrejtés beállítására a túlcsorduló tartalomak számára.

Az `overflow` tulajdonság két fő értéket használ:

1. **visible**: Ez az alapértelmezett érték, és azt jelenti, hogy a túlcsorduló tartalom látható lesz az elemen kívül is. Az elem területe nem fogja korlátozni a túlcsorduló tartalmat, és az esetleges többlet tartalom az elem keretein kívül is látható lesz.

2. **hidden**: Ez az érték azt jelenti, hogy a túlcsorduló tartalom, amely kilóg az elem kereteiből, rejtve lesz, és nem lesz látható. Az elem területe korlátozza a tartalmat, és a túlcsorduló részek egyszerűen el lesznek rejtve.

3. **scroll**: Ha a tartalom túlcsordul az elem keretein, akkor görgető sávok jelennek meg, amelyekkel a felhasználó képes görgetni a tartalmat, hogy lássa az elrejtett részeket. A görgetés lehet vízszintes, függőleges vagy mindkettő.

4. **auto**: Az `auto` érték hasonlóan működik a `scroll` értékhez, azonban csak akkor jeleníti meg a görgető sávokat, ha a tartalom túlcsordul az elem keretein. Ha nincs túlcsordulás, nincs szükség a görgetésre, és nem jelenik meg görgető sáv.

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/overflow.html'" width="100%"  height="375" />

Példa az `overflow` tulajdonság használatára:

```css
.pelda {
  overflow: scroll;
  width: 300px;
  height: 200px;
}
```

Ebben a példában az "overflow" tulajdonságot `scroll` értékre. Ezzel a beállítással, ha a tartalom túlcsordul az elem keretein, akkor vízszintes és függőleges görgető sávok jelennek meg, így a felhasználó képes lesz görgetni a tartalmat és megtekinteni az elrejtett részeket. Az elem szélességét __300 pixelre__ és magasságát __200 pixelre__ is korlátoztuk.

Az `overflow` tulajdonság biztosítja, hogy a tartalom szabályozott módon jelenjen meg az elemeken belül vagy kívül. Hasznos különösen akkor, amikor az elemek tartalma változó méretű vagy amikor az elrejtett tartalom elkerülhetetlen. 




### `z-index`

A `z-index` az elemek átfedési sorrendjét teszi lehetővé az elrendezésben. Ez tulajdonság meghatározza, hogy melyik elem jelenik meg előtérben vagy háttérben, amikor az elemek átfedik egymást az elrendezésben.

A `z-index` tulajdonság két fő jellemzőből áll:

1. **z-index érték**: Ez a pozitív vagy negatív egész szám, amely meghatározza egy elem rétegét az elrendezésben. Minél nagyobb a pozitív `z-index` érték, annál előrébb helyezkedik el egy elem. Minél kisebb a negatív `z-index` érték, annál hátrébb helyezkedik el egy elem.

2. **auto**: Ez az alapértelmezett, és a böngésző automatikusan dönti el az elem rétegét. Az elemek a dokumentum sorrendjük szerinti elrendezésben jelennek meg.

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/z-index.html'" width="100%"  height="375" />

Példa a `z-index` tulajdonság használatára:

```css
.header {
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
}

.content {
  z-index: 1;
  position: relative;
  background-color: #fff;
  padding: 20px;
}

.footer {
  z-index: 2;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #333;
}
```

Ebben a példában három elemet hoztunk létre: `.header`, `.content` és `.footer`. Mindhárom elemhez hozzárendeltünk egy `z-index` értéket a réteg sorrendjének megadásához. A `.header` és a `.footer` elemek `z-index` értéke __2__, míg a `.content` elemé __1__. Ennek eredményeként a fejléc és a lábléc előrébb helyezkednek el a tartalomhoz képest, és a tartalom közöttük van.

A `z-index` hasznos ha olyan elrendezéseket kell létrehozni, amelyekben az elemek átfedik egymást.



### `position`

A `position` egy kulcsfontosságú CSS tulajdonság, amelyet webfejlesztők használnak elemek elhelyezésének és pozicionálásának meghatározására egy weboldalon. A `position` tulajdonság határozza meg, hogyan viselkedik egy elem az oldalon, és lehetővé teszi annak helyzetének finomhangolását.

A `position` tulajdonság négy fő értéket fogad el:

1. **static**: Ez az alapértelmezett érték, és az elemek a dokumentum szerkezeti elrendezésében jelennek meg. A `left`, `right`, `top` és `bottom` tulajdonságok ebben az esetben nem érvényesek.

2. **relative**: Érték segítségével az elemet relatívan pozicionálhatjuk a szülőelemhez képest. Az `left`, `right`, `top` és `bottom` tulajdonságok használhatók az elhelyezés finomhangolására.

3. **absolute**: Érték lehetővé teszi az elem abszolút pozicionálását a szülőelemhez képest. Az elemek pozícióját az `left`, `right`, `top` és `bottom` tulajdonságokkal lehet beállítani.

4. **fixed**: Hasonló az `absolute` értékhez, de az elem fix pozícióban marad, még akkor is, ha a felhasználó görgeti az oldalt. Ez hasznos például fejlécek vagy láblécek elkészítésénél.

Példa a `position` tulajdonság használatára:

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/position.html'" width="100%"  height="375" />


A `position` tulajdonság használata segít a webfejlesztőknek az elemek elhelyezésének pontos beállításában az oldalon. Az __abszolút__ és __relatív__ pozícionálás lehetővé teszi az elemek pontos elrendezését, és hozzájárul az oldal elrendezésének testreszabásához és tervezéséhez. Az `fixed` érték segít a weboldalak fejléceinek vagy lábléceinek rögzítésében, hogy azok mindig láthatók maradjanak a felhasználók számára.

### `line-height`

A `line-height` tulajdonság, amely befolyásolja a szövegsorok közötti térközt vagy magasságot az egyes sorokon belül. Meghatározza, hogy milyen távolságra helyezkednek el egymástól a sorok, ami befolyásolja a szöveg olvashatóságát és elrendezését.

A `line-height` tulajdonság értéke lehet __abszolút__ méret (például `px`) vagy __relatív__ méret (például `százalék` vagy `em`). Az érték lehet nagyobb vagy kisebb, mint __1__, és ez határozza meg a sor magasságát a betűmérethez képest. Például: `line-height: 1.5;` vagy `line-height: 120%;`.


Példa a `line-height` tulajdonság használatára:

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/line-height.html'" width="100%"  height="375" />

A `line-height` tulajdonság használata fontos a szöveges tartalom formázásához. Megfelelő `line-height` beállításával könnyebbé tehető a szöveg olvasása, és a szöveg könnyebben értelmezhető lesz.


### `text-align`

A `text-align` tulajdonság, amelyet a szöveges tartalom vízszintes igazításának meghatározására használunk egy elemen belül. Ez a tulajdonság határozza meg, hogy a szöveges tartalom középre, balra, jobbra vagy sorkizártan jelenik-e meg az adott elemen belül.

A `text-align` tulajdonság négy fő értéket fogad el:

1. **left**: Ez az alapértelmezett érték, és a szöveg bal oldalra igazítódik.

2. **center**: A szöveg középre igazítódik az elemen belül.

3. **right**: A szöveg jobbra igazítódik az elemen belül.

4. **justify**: A szöveg egyenletesen igazítódik mindkét oldalon - sorkizárt.

A `text-align` tulajdonság használata elengedhetetlen a weboldalak szöveges tartalmának elrendezéséhez. Segítségével a webfejlesztők könnyedén igazíthatják a szöveget úgy, hogy az olvasható és esztétikus legyen a felhasználók számára.

Példa a `text-align` tulajdonság használatára:

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/text-align.html'" width="100%"  height="375" />


A `text-align` tulajdonság használata segít a szöveges tartalom elrendezésének és formázásának pontos beállításában az oldalon. Ez lehetővé teszi a szöveg esztétikus elrendezését és jobb olvashatóságát, ami fontos a felhasználói élmény javítása szempontjából.

### `vertical-align`

A `vertical-align` tulajdonsággal lehet beállítani például a szöveg vagy képek vertikális elhelyezését az elemen belül. A `vertical-align` tulajdonság több értéket is elfogad, azonban az értelmezése függ az elem típusától. Néhány gyakori érték a következő:

1. **baseline**: Az elem alapvonalához igazítja a tartalmat. Ez az alapértelmezett érték, és a szöveges elemeknél például a szöveg alja illeszkedik az alapvonalhoz.

2. **top**: A tartalmat az elem tetejéhez igazítja.

3. **middle**: A tartalmat az elem közepéhez igazítja.

4. **bottom**: A tartalmat az elem aljához igazítja.

5. **text-top**: A szöveg tetejéhez igazítja a tartalmat.

6. **text-bottom**: A szöveg aljához igazítja a tartalmat.

Példa a `vertical-align` tulajdonság használatára:

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/vertical-align.html'" width="100%"  height="375" />

A `vertical-align` tulajdonság használata fontos az elemek vertikális pozicionálásának finomhangolásához. Például lehetővé teszi a képek vagy ikonok szöveggel való igazítását a szöveg sorához vagy az elemek középre vagy aljához igazítását.

### `text-justify` 

::: warning <i class="fa-brands fa-firefox"></i> Firefox, Firefox for Android böngészőben csak

A `text-justify` tulajdonság szöveg igazításához használják. A `text-justify` tulajdonság befolyásolja, hogyan osztja el és igazítja a szövegek sorait a szövegterületen belül. Az alapértelmezett érték a `auto`, ami azt jelenti, hogy a böngésző dönti el a szöveg igazítását és osztályozását. Azonban van néhány érték, amelyeket a `text-justify` tulajdonság elfogad:

1. **auto**: Az alapértelmezett érték, a böngésző dönti el az igazítást és az osztályozást.

2. **none**: A szöveg nem igazítódik és nem osztályozódik. A szavak és sorok pontosan úgy jelennek meg, ahogy be vannak írva.

3. **inter-word**: A szöveg közötti résen belül osztályozza a sorokat, hogy azok egyenletesen töltsék ki a rendelkezésre álló teret.

4. **inter-character**: A karakterek közötti résen belül osztályozza a szöveget, ami azonos karakterközösségű betűk közötti tér kiigazítását eredményezi.

5. **distribute**: A sorokat úgy osztályozza, hogy azok a területen egyenletesen terjedjenek el, és a szavak közötti rés mindenhol azonos méretű legyen.

6. **kashida**: A szöveg osztályozása a kashida karakterekkel történik, amelyeket az arab és perzsa nyelvekben használnak. Ez az érték kifejezetten az arab és perzsa szövegekhez használatos.

Példa a `text-justify` tulajdonság használatára:

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/text-justify.html'" width="100%"  height="375" />

A `text-justify` tulajdonság használata különböző szöveges tartalmak esetén segíthet az olvashatóság javításában és a szöveg rendezésében, különösen olyan nyelveknél, ahol a szóközök és karakterközök fontosak az elrendezésben.
:::

### `text-transform`

Az `text-transform` a szöveg megjelenítését és átalakítását befolyásolja. Ez a tulajdonság lehetővé teszi a szöveg kisbetűssé vagy nagybetűssé konvertálását, valamint más szövegmegjelenítési formákat is támogat. Az `text-transform` tulajdonság négy fő értéket fogad el:

1. **none**: Ez az alapértelmezett érték, és nem hajt végre semmilyen átalakítást a szövegen. A szöveg úgy jelenik meg, ahogy eredetileg be van írva.

2. **capitalize**: Ebben az esetben minden szó kezdőbetűjét nagybetűvé alakítja, a többi karakter marad a meglévő formájában.

3. **uppercase**: Ebben az esetben az összes karaktert nagybetűvé alakítja.

4. **lowercase**: Ebben az esetben az összes karaktert kisbetűvé alakítja.

Példa a `text-transform` tulajdonság használatára:

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/text-transform.html'" width="100%"  height="375" />

A `text-transform` tulajdonság használata segíthet a szövegek megjelenítésének szabályozásában és az elrendezési igényekhez való alkalmazkodásban, különösen olyan esetekben, amikor egységes stílust vagy formátumot szeretnél elérni a szövegekkel.

[^first]: **doboz:** `<div>`