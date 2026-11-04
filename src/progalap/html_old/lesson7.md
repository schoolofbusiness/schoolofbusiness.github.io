---
category:
  - Weboldalak formázása
---

# 7. tananyag

:::tip 📚 EBBEN A FEJEZETBEN
Megismerjük a legfontosabb tulajdonságokat, amelyek segítségével formázási műveleteket végezhetünk a weboldalakon. Ezek segítenek a weboldalak kinézetének testreszabásában és a tartalom megfelelő elrendezésében.
:::

## CSS3 tulajdonságok III.

A tulajdonságok lehetővé teszik számunkra, hogy pontosan szabályozzuk a szöveg és elemek megjelenését, például szín, betűtípus, pozíció és árnyékolás terén. A CSS3 újabb és bővített lehetőségeket kínál a korábbi CSS-verziókhoz képest, amelyek segítségével lenyűgöző, modern webes felhasználói élményeket hozhatunk létre.

### `font`

A `font` egy __összetett__ CSS tulajdonság, amely lehetővé teszi a betűtípus, a betűméret, a vastagság, a stílus és más fontos betűtulajdonságok beállítását egy elem szövegének formázásához. A `font` tulajdonság általában több __al-tulajdonságot__ tartalmaz, amelyek közül néhány a következő:

1. **font-family**: Meghatározza a használandó betűtípusokat vagy betűcsaládokat. Például: `font-family: Arial, Helvetica, sans-serif;`.

2. **font-size**: Az aktuális betűméretet határozza meg, például `font-size: 16px;`.

3. **font-weight**: A betűvastagságot állítja be, például `font-weight: bold;` vagy `font-weight: normal;`.

4. **font-style**: A betűstílust határozza meg, például `font-style: italic;`.

5. **font-variant**: A kisbetűk esetében használt kisbetű változást szabályozza, például `font-variant: small-caps;`.

6. **line-height**: A sorok közötti térközt vagy magasságot szabályozza, például `line-height: 1.5;`.

7. **text-decoration**: A szöveg aláhúzását, áthúzását vagy vonalozását állítja be, például `text-decoration: underline;`.

8. **text-transform**: A szöveg kisbetűsítését, nagybetűsítését vagy egyéb átalakításokat szabályozza, például `text-transform: uppercase;`.

Példa a `font` tulajdonság használatára:

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/font.html'" width="100%"  height="375" />

A `font` tulajdonság segít az elemek szövegének részletes formázásában és testreszabásában, ami fontos az oldalak stílusának és megjelenésének kialakításában. Az egyes `font` tulajdonságok kombinálásával lehetővé teszi a szöveg különféle aspektusainak testre szabását.

### `font-family`

Az `font-family` meghatározza a használni kívánt betűtípusokat vagy betűcsaládokat egy adott elem szövegének formázásához. A `font-family` lehetővé teszi, hogy különböző betűtípusok közül válasszanak, és meghatározzák az elemen belül használt betűtípus sorrendjét. A böngészők az első olyan betűtípust használják, amely a felhasználó rendelkezésére áll, és ha nincs elérhető betűtípus, akkor a rendszeráltal meghatározott alapértelmezett betűtípust használják.

A `font-family` tulajdonság értéke lehet egy vagy több betűtípus neve, valamint szükség esetén általános csoportosítókat is tartalmazhat, például `sans-serif` vagy `serif`, amelyek a megfelelő betűtípusok csoportját képviselik. Az értékeket vesszővel el kell választani, hogy meghatározd az előnyben részesített betűtípusok sorrendjét. Ha egy betűtípus neve tartalmaz szóközt vagy speciális karaktereket, akkor azt idézőjelek között kell megadni.

Példa a `font-family` tulajdonság használatára:

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/font-family.html'" width="100%"  height="375" />

A `font-family` tulajdonság segít a webfejlesztőknek az elemek szövegének testreszabásában és az elrendezés megtervezésében, mivel lehetővé teszi a különböző betűtípusok kiválasztását a kívánt stílus eléréséhez.

### `font-size`

A `font-size` tulajdonság, a szöveg vagy egy elem méretének meghatározására használnak. Ez a tulajdonság szabályozza a betűk vagy szöveg karaktereinek méretét az adott elemen belül.

A `font-size` tulajdonság értéke lehet különböző mértékegységekben, például `px` (_pixelek_), `em`, `rem`, `pt` (_pont_), `vw` (_viewport width_), `vh` (_viewport height_) és mások. A méretet általában _numerikus_ értékekkel határozzuk meg, például `font-size: 16px;`.

Példa a `font-size` tulajdonság használatára:

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/font-size.html'" width="100%"  height="375" />

A `font-size` tulajdonság használata lehetővé teszi a szöveg méretének finomhangolását és a megjelenés testreszabását az oldalon. A megfelelő betűméret kiválasztása fontos az olvashatóság és a felhasználói élmény szempontjából.


### `font-style`

A `font-style` tulajdonság a szöveg betűstílusát határozza meg, vagyis azt, hogy a szöveg _dőlt_, __félkövér__ vagy normál betűstílusban jelenjen-e meg. A `font-style` tulajdonság három alapvető értéket fogad el:

1. **normal**: Ez az alapértelmezett érték, és azt jelenti, hogy a szöveg normális (nem _dőlt_ és nem __félkövér__) betűstílusban jelenik meg.

2. **italic**: A szöveg _dőlt_ betűstílusban jelenik meg.

3. **oblique**: A szöveg dőlt vagy ferde betűstílusban jelenik meg, amely hasonló az `italic`-hoz, de néhány betűtípus esetén lehet, hogy nincs kifejezett `italic` verzió, és ilyenkor az `oblique` használható a dőlt megjelenítéshez.

Példa a `font-style` tulajdonság használatára:

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/font-style.html'" width="100%"  height="375" />

A `font-style` tulajdonság használata a szöveg megjelenésének testreszabásában és a kívánt stílus elérésében. A dőlt vagy ferde betűstílus hasznos lehet például idézetek, címek vagy más speciális szövegrészletek formázásához.

### `text-decoration`

A `text-decoration` a szöveg aláhúzását, áthúzását vagy vonalozását szabályozza. 

Négy alapvető értéket fogad el:

1. **none**: Ez az alapértelmezett érték, és azt jelenti, hogy nincs semmilyen szövegdekoráció (aláhúzás, áthúzás vagy vonalozás).

2. **underline**: A szöveg aláhúzását állítja be.

3. **overline**: A szöveg feletti vonalozást állítja be.

4. **line-through**: A szöveg áthúzását állítja be.

Példa a `text-decoration` tulajdonság használatára:

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/text-decoration.html'" width="100%"  height="375" />

A `text-decoration` tulajdonság segítségével testreszabhatod a szöveg megjelenését és kiemelheted bizonyos szövegrészleteket. Ez hasznos lehet például hivatkozásoknál, amikor az aláhúzás jelzi a kattintható linkeket.

### `list-style`

A `list-style` egy CSS tulajdonság, amely a listák stílusát és jelölését (_mint például felsorolások és számozott listák_) szabályozza.

Példa a `list-style` tulajdonság használatára:

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/list-style.html'" width="100%"  height="375" />


### `cursor`

A `cursor` lehetővé teszi az egérmutató megjelenésének és viselkedésének beállítását egy adott elem felett.

Néhány példa a `cursor` tulajdonság lehetséges értékeire:

1. **pointer**: Az egérmutató ujjra utal, ami általában azt jelzi, hogy az adott elemre kattintható.

2. **default**: Az alapértelmezett egérmutató, amelyet a böngésző használ, ha más `cursor` érték nincs beállítva.

3. **text**: Az egérmutató szövegre utal, és jelzi, hogy az elembe szöveget lehet írni.

4. **crosshair**: Az egérmutató keresztformájú, és gyakran használják például rajzoló vagy kijelölő funkciók esetén.

5. **not-allowed**: Az egérmutató egy tilos jelet jelöl, és általában azt jelzi, hogy az adott művelet vagy akció nem engedélyezett.

6. **grab**: Az egérmutató egy kezet jelképez, amely azt jelzi, hogy az elemet húzni vagy mozgatni lehet.

Példa a `cursor` tulajdonság használatára:

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/cursor.html'" width="100%"  height="375" />

A `cursor` tulajdonság segítségével személyre szabhatod az egérmutató megjelenését és viselkedését az oldaladon, ami növelheti a felhasználói élményt és segíthet az interakciók kijelzésében.


### `letter-spacing`

A `letter-spacing` a karakterek közötti térközt vagy szóközt szabályozza egy szövegen belül. Ez a tulajdonság lehetővé teszi a betűk közötti távolság finomhangolását, ami befolyásolhatja a szöveg olvashatóságát és kinézetét.

A `letter-spacing` tulajdonság értéke lehet _pozitív_ vagy _negatív_ mértékegység (például `px` vagy `em`), amely meghatározza a karakterek közötti távolság változtatását. _Pozitív_ értékek növelik a karakterek közötti távolságot, míg _negatív_ értékek csökkentik azt.

Példa a `letter-spacing` tulajdonság használatára:

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/letter-spacing.html'" width="100%"  height="375" />

### `viewport`

A `viewport` egy fogalom, amely fontos szerepet játszik a webfejlesztésben és a webdesignban, különösen a reszponzív weboldalak tervezése során. A viewport a böngészőablak vagy a mobil eszköz kijelzőjének területét jelenti, ahol a weboldalak megjelennek.

A `viewport` együttműködik a meta taggel a HTML kódjában, hogy a weboldalak megfelelően jelenjenek meg a különböző eszközökön és kijelzőméreteken. A viewport meta tag lehetővé teszi a weboldal fejlesztőjének a böngészőnek vagy a mobil eszköznek azonosítását és a megfelelő méretre való beállítását.

A viewport meta tag példája:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Ez a meta tag azt mondja a böngészőnek vagy mobil eszköznek, hogy az oldal szélessége az eszköz szélességéhez igazodjon (`width=device-width`), és az oldal alapméretét (`initial-scale`) az alapértelmezett méretre állítsa (`1.0`). Ezáltal a weboldal a kijelző méretéhez és orientációjához igazodik.

A viewport fontos azért, mert a mobil eszközökön és asztali böngészőkön különböző méretűek és felbontásúak lehetnek. Az helyes `viewport` beállítások biztosítják, hogy a weboldal megfelelően jelenjen meg minden eszközön, és az olvasók kényelmesen használhassák a webhelyet. A reszponzív webdesign alapja az, hogy a weboldalak és az alkalmazások alkalmazkodnak a `viewport` méretéhez, és ezáltal biztosítják a felhasználók számára a legjobb élményt.

### `white-space`

A `white-space` egy CSS tulajdonság, amely a szövegben található szóközök, új sorok és egyéb szövegformázások viselkedését szabályozza. Ez a tulajdonság lehetővé teszi a szöveg megjelenítési módjának testreszabását és a szöveg elrendezésének kontrollját. A `white-space` tulajdonság a következő értékeket fogadja el:

1. **normal**: Ez az alapértelmezett érték, és azt jelenti, hogy a böngésző automatikusan eldönti a szöveg elrendezését és a szóközök kezelését. Ezáltal a böngésző általában több szóközt vagy sortörést tömörít egymás mellé, és nem tesz megjegyzést a sorvégeken.

2. **nowrap**: Ez az érték megakadályozza a szöveg tördelését és a sorok áthelyezését. Ez azt jelenti, hogy a szöveg vízszintesen folytatódik, és az oldal széléig megy, ha szükséges, anélkül, hogy új sort kezdene.

3. **pre**: Érték megőrzi a szövegben található szóközöket és sorvégjeleket, és azokat pontosan úgy jeleníti meg, ahogy az eredeti forráskódban szerepelnek. Ez hasznos, ha a szövegben megőrizni szeretnéd a szóközöket és a formázást.

4. **pre-wrap**: Megőrzi a szóközöket és sorvégjeleket, de a szöveget automatikusan tördeli, ha az a kijelző szélességét meghaladja. Így a szöveg automatikusan új sorba kerülhet a kijelző méretétől függően.

5. **pre-line**: Megőrzi a sorvégjeleket, de a szóközöket az eredeti forráskódhoz képest automatikusan kezeli. Ez lehetővé teszi a szöveg automatikus tördelését, de megőrzi a sorvégjeleket a szöveg olvashatósága érdekében.

Példa a `white-space` tulajdonság használatára:

<iframe :src="'https://interactive-examples.mdn.mozilla.net/pages/css/white-space.html'" width="100%"  height="375" />

