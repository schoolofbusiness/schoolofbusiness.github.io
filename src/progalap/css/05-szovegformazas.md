---
title: "5. Szövegformázások"
order: 5
category: CSS
---

# 5. Szövegformázások

## Mit fogsz megtanulni?

Beállítod a betűcsaládot, méretet, vastagságot és sormagasságot, majd igazítod és díszíted a szöveget. Felismered a különbséget a HTML-ben jelölt jelentés és a CSS-megjelenés között.

## Szín és betűcsalád

```css
body {
  color: #1e293b;
  font-family: Arial, Helvetica, sans-serif;
}
```

A `font-family` listáját a böngésző balról jobbra használja. Ha az első család nem elérhető, következik a második. Egy hiányzó karakter miatt egyes betűknél is választhat másik betűtípust.

| Család | Jelleg | Példák |
| --- | --- | --- |
| `serif` | Talpas | Georgia, Times New Roman |
| `sans-serif` | Talpatlan | Arial, Verdana |
| `monospace` | Rögzített karakterszélesség | Courier New |
| `cursive` | Kézírást utánzó | Az elérhető betűtípustól függ |

```css
.idezet { font-family: Georgia, "Times New Roman", serif; }
.kod { font-family: "Courier New", monospace; }
```

A több szóból álló konkrét betűcsaládneveket célszerű idézőjelbe tenni. Az általános családnevek, például `serif`, idézőjel nélkül állnak. Egy betűtípus megnevezése nem tölti le automatikusan azt az internetről.

## Betűméret

```css
p { font-size: 1rem; }
h1 { font-size: 2rem; }
.megjegyzes { font-size: 0.875rem; }
```

Használható többek között `px`, `em`, `rem`, százalék és méretkulcsszó. A címsorszintet a tartalom szerkezete alapján válaszd meg; a kívánt látványméretet CSS-sel alakítsd ki.

## Dőlt stílus: font-style

| Érték | Jelentés |
| --- | --- |
| `normal` | Normál, nem dőlt |
| `italic` | A betűcsalád dőlt változata |
| `oblique` | Ferde változat, szükség esetén mesterséges döntéssel |
| `oblique 14deg` | Megadott dőlési szög, ha a betűtípus és megvalósítás támogatja |

A látható eredmény a rendelkezésre álló fontváltozatoktól is függ. A CSS-ben dőltté tett szöveg nem kap automatikusan olyan hangsúlyjelentést, mint a HTML `em` eleme.

## Vastagság: font-weight

| Megadás | Jelentés |
| --- | --- |
| `normal` vagy `400` | Normál |
| `bold` vagy `700` | Félkövér |
| `100`–`900` | Gyakori számozott fokozatok |
| `bolder`, `lighter` | A szülő vastagságához képest módosít |

A numerikus tartomány 1–1000; változó betűtípusnál köztes értékek is megjeleníthetők. Egy hagyományos font nem feltétlenül rendelkezik minden vastagsággal, ezért több érték is ugyanúgy nézhet ki.

```css
h1 { font-weight: normal; }
.fontos { font-weight: 700; }
```

A CSS-ben félkövérre állítás nem ad `strong` jelentést a HTML-nek. A szemantika a jelölőnyelv feladata marad.

## Kiskapitális és szélességváltozat

```css
.kiskapitalis { font-variant: small-caps; }
.suritett { font-stretch: condensed; }
.nyujtott { font-stretch: expanded; }
```

Kiskapitálisnál a kisbetűk kisebb nagybetűalakot kapnak; az eredeti nagybetűk általában magasabbak maradnak. Ez nem ugyanaz, mint a `text-transform: uppercase`.

A `font-stretch` megfelelő keskenyebb vagy szélesebb fontváltozatot választ; nem általános képszerű nyújtás. Ha a betűcsalád nem kínál ilyen változatot, lehet, hogy nem látsz eltérést.

## Sormagasság: line-height

```css
p {
  font-size: 20px;
  line-height: 1.5;
}
```

Az egység nélküli 1.5 a betűméret másfélszerese: itt 30 px-es sormagasságot ad. A `normal` betűtípustól és böngészőtől függ, nem mindenhol pontosan 1.2.

Az egység nélküli szorzó általában jól öröklődik: a nagyobb betűméretű gyermek a saját méretéből számít. Egy már kiszámított, örökölt pixeles sormagasság túl szűk lehet a nagyobb gyermeknek.

## Rövidített megadás: font

```css
.idezet {
  font: italic small-caps 700 20px/1.5 Georgia, serif;
}
```

| Rész | Jelentés |
| --- | --- |
| `italic` | Dőlt |
| `small-caps` | Kiskapitális |
| `700` | Félkövér |
| `20px` | Betűméret |
| `/1.5` | Sormagasság |
| `Georgia, serif` | Betűcsaládlista |

A méret és a család megadása kötelező; a többi felsorolt rész elhagyható. A család a végén áll, a sormagasság a méret után, `/` jellel szerepel. A rövidítés a kihagyott kapcsolódó beállításokat is alapértékre állíthatja.

## Vízszintes igazítás: text-align

| Érték | Hatás |
| --- | --- |
| `left`, `right` | Balra, illetve jobbra igazít |
| `center` | Középre igazít |
| `justify` | Sorkizárt igazítás; az utolsó sor rendszerint nem széthúzott |
| `start`, `end` | Az írásirány kezdetéhez vagy végéhez igazít |
| `match-parent` | A szülő igazítását követi, a szülő irányának figyelembevételével |

A `text-align` a doboz sorközi tartalmát igazítja. Nem magát a blokkot helyezi középre.

::: normal-demo Igazítások
```html
<div class="css05-igazitas">
  <p class="bal">Ez a bekezdés balra igazított.</p>
  <p class="kozep">Ez a bekezdés középre igazított.</p>
  <p class="jobb">Ez a bekezdés jobbra igazított.</p>
  <p class="sorkizart">A sorkizárt szöveg a sorok két szélét is igyekszik a doboz széléhez igazítani. Ehhez a böngésző a szavak vagy karakterek közti távolságokat módosíthatja.</p>
</div>
```
```css
.css05-igazitas { max-width: 34rem; }
.css05-igazitas p { border: 1px solid #94a3b8; padding: 12px; }
.css05-igazitas .bal { text-align: left; }
.css05-igazitas .kozep { text-align: center; }
.css05-igazitas .jobb { text-align: right; }
.css05-igazitas .sorkizart { text-align: justify; }
```
:::

A sorkizárás módját a `text-justify` pontosíthatja: `auto`, `inter-word` (szóközök), `inter-character` (karakterközök). A tényleges támogatás és az eredmény böngészőnként eltérhet; ne alapozd erre az olvashatóságot.

## Szövegdíszítés: text-decoration

| Érték | Díszítés |
| --- | --- |
| `none` | Nincs új díszítés |
| `underline` | Aláhúzás |
| `overline` | Felülhúzás |
| `line-through` | Áthúzás |

A vonal további tulajdonságai is megadhatók:

```css
.jeloles {
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: darkred;
  text-decoration-thickness: 2px;
}
```

Rövidítve:

```css
.jeloles { text-decoration: underline wavy darkred 2px; }
```

Vonalstílusok: `solid`, `double`, `dotted`, `dashed`, `wavy`. Egy szülőről a gyermek fölé kirajzolt aláhúzást nem feltétlenül lehet a gyermeken `text-decoration: none` beállítással eltüntetni.

## Kis- és nagybetűk: text-transform

| Érték | Eredmény |
| --- | --- |
| `none` | Nincs átalakítás |
| `uppercase` | Nagybetűs megjelenés |
| `lowercase` | Kisbetűs megjelenés |
| `capitalize` | A szavak első betűjét nagybetűsíti |

A `capitalize` nem magyar címírási szabályrendszer, és nem feltétlenül teszi kisbetűssé a szó többi betűjét. Az átalakítás nyelvfüggő is lehet, ezért fontos a helyes HTML `lang` attribútum.

## Behúzás és térközök

```css
p {
  text-indent: 1.5em;
  letter-spacing: 0.02em;
  word-spacing: 2px;
}
```

| Tulajdonság | Mit módosít? |
| --- | --- |
| `text-indent` | Az első sor behúzását |
| `letter-spacing` | A karakterek közti többlet- vagy csökkentett térközt |
| `word-spacing` | A szavak közti térközt |

A `letter-spacing` és `word-spacing` alapértéke `normal`; kis negatív érték is használható, de a túl szoros szedés rontja az olvashatóságot. A leckében térközhöz `px` vagy `em` értéket használunk, nem százalékot: ezekkel egyértelműbb a számítás és kiszámíthatóbb a megjelenés.

::: normal-demo Díszítés és betűalak
```html
<div class="css05-disz">
  <p class="kapitalis">Ez egy kiskapitális mondat.</p>
  <p class="nagy">Ez egy nagybetűs mondat.</p>
  <p class="vonal">Hullámos aláhúzás.</p>
  <p class="ritka">Ritkított betűk.</p>
</div>
```
```css
.css05-disz .kapitalis { font-variant: small-caps; }
.css05-disz .nagy { text-transform: uppercase; }
.css05-disz .vonal { text-decoration: underline wavy #2563eb 2px; }
.css05-disz .ritka { letter-spacing: 0.15em; }
```
:::

## Gyakorlás

Formázz egy `.cikk` osztályú szöveget Georgia betűcsaláddal, 1.125 rem mérettel, 1.6-os sormagassággal! A címe legyen középre igazított, a bekezdések első sora 1.5 em behúzású.

::: details Megoldás
```css
.cikk {
  font-family: Georgia, serif;
  font-size: 1.125rem;
  line-height: 1.6;
}
.cikk h2 { text-align: center; }
.cikk p { text-indent: 1.5em; }
```
A `.cikk h2` a `.cikk` elemben található `h2` elemekre vonatkozik; a szóköz leszármazotti kapcsolatot jelöl.
:::
