---
title: "3. Az oldal tagolása"
order: 3
category: HTML
tag:
  - Alapok
---

# 3. Az oldal tagolása

## Mit fogsz megtanulni?

Logikus címsorhierarchiát, bekezdéseket, sortörést és tematikus elválasztást készítesz.

## Címsorok: h1–h6

A hat címsorszint a tartalom hierarchiáját fejezi ki. A `h1` a legmagasabb, a `h6` a legalacsonyabb szint. A böngésző alapstílusában eltérő mérettel, általában félkövéren jelennek meg.

| Szint | Egy könyvben | Weboldalon |
| --- | --- | --- |
| `h1` | Könyv címe | Az oldal főcíme |
| `h2` | Fejezet | Fő témakör |
| `h3` | Alfejezet | Témakörön belüli rész |
| `h4`–`h6` | További bontás | Mélyebb szerkezeti szintek |

::: normal-demo Logikus címsorhierarchia
```html
<h1>Cicák</h1>
<h2>Macskafajták</h2>
<h3>Sziámi macska</h3>
<p>A sziámi macska bemutatása.</p>
<h3>Brit rövidszőrű</h3>
<p>A brit rövidszőrű bemutatása.</p>
<h2>Gondozás</h2>
<p>A gondozás alapjai.</p>
```
:::

::: tip A jelentés alapján válassz!
Kezdőként használj oldalanként egy, a teljes oldalt leíró `h1` elemet, és lefelé haladva ne ugorj át szinteket! A `h3` után visszatérhetsz `h2` szintre, ha új fő témakör kezdődik. Betűméretet CSS-sel állíts, ne a címsorszint megváltoztatásával!
:::

A jól megválasztott címsorok a szemmel olvasást, a képernyőolvasós navigációt és a tartalom értelmezését is segítik.

## Bekezdés: p

Minden önálló gondolati egységet külön bekezdésbe írj. A forráskódba tett egyszerű sortörések és több egymás utáni szóköz normál szövegben jellemzően egyetlen szóközként jelennek meg.

::: normal-demo Két bekezdés
```html
<p>Ez az első bekezdés.
Ez a mondat még ugyanahhoz a bekezdéshez tartozik.</p>
<p>Ez már egy második bekezdés.</p>
```
:::

A tananyagban mindig kiírjuk a `</p>` záró címkét. A HTML bizonyos helyzetekben megengedi az elhagyását, de a következetes lezárás könnyebben olvasható kódot ad. Címsort, listát vagy táblázatot ne helyezz `p` elembe!

## Sortörés: br

A `br` ugyanazon tartalmi egységen belül kezd új sort. Verssorhoz vagy címhez megfelelő.

::: normal-demo Cím több sorban
```html
<p>Gipsz Jakab<br>
Szeged<br>
Minta utca 12.</p>
```
:::

Ne készíts több `br` elemmel nagy üres területet. A térközök beállítása CSS-feladat.

## Tematikus elválasztás: hr

A `hr` témaváltást jelez; alapértelmezésben vízszintes vonalként jelenik meg. Nem pusztán díszítő vonal.

::: normal-demo Két tartalmi egység
```html
<p>Véget ért a kirándulás története.</p>
<hr>
<p>Hasznos információk a következő úthoz.</p>
```
:::

## Gyakorlás

Írj „Osztálykirándulás” főcímű oldalt! Legyen „Programok” és „Tudnivalók” alcíme, a programok alatt két harmadik szintű címsor, továbbá egy háromsoros találkozási cím.

::: details Ellenőrzés
A főcím `h1`, a két fő rész `h2`, a programok alrészei `h3` elemek. A címet egy `p` elemben, két `br` használatával is megadhatod. Az önálló bekezdéseket külön `p` elem jelöli.
:::

