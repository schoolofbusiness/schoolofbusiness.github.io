---
title: "6. Hivatkozások"
order: 6
category: HTML
tag:
  - Alapok
---

# 6. Hivatkozások

## Mit fogsz megtanulni?

Más oldalakra, fájlokra és oldalon belüli pontokra mutató linkeket, valamint e-mail- és telefonhivatkozásokat készítesz.

## A hivatkozás felépítése

```html
<a href="cicak.html">Ismerd meg a cicákat!</a>
```

Az `a` páros elem; a `href` adja meg a célt, a két címke közötti tartalom a kattintható rész. `href` nélkül az `a` nem hoz létre hiperhivatkozást.

| Részlet | Szerep |
| --- | --- |
| `<a` | A hivatkozás elemének kezdete |
| `href="cicak.html"` | Hová vezet? |
| `Ismerd meg a cicákat!` | Mit lát a felhasználó? |
| `</a>` | Az elem lezárása |

A linkszöveg írja le a célt. Az „Órarend letöltése” informatívabb, mint a „Kattints ide”.

## Relatív és abszolút útvonal

A példákban az aktuális fájl a `projekt/index.html`, mellette `cicak.html`, a `kepek` almappában pedig `cicak.jpg` található.

| Hivatkozás | Értelmezés |
| --- | --- |
| `cicak.html` | Az aktuális mappában lévő oldal |
| `kepek/cicak.jpg` | Az aktuális mappa `kepek` almappájában lévő kép |
| `../index.html` | Egy mappaszinttel feljebb lévő fájl |
| `/kepek/cicak.jpg` | A webhely gyökeréhez viszonyított útvonal |
| `https://example.com/` | Teljes, abszolút URL |

Az útvonalakban `/` jelet használj, ne Windows-féle `\` jelet. A kis- és nagybetűk egy kiszolgálón eltérő fájlt jelenthetnek.

## A target attribútum

| Érték | Hol nyílik meg? |
| --- | --- |
| `_self` | Az aktuális böngészési környezetben; alapértelmezés |
| `_blank` | Új lapon vagy ablakban, a böngésző beállításától függően |
| `_parent` | A szülő böngészési környezetben, ha létezik |
| `_top` | A legfelső böngészési környezetben |

```html
<a href="https://example.com/" target="_blank" rel="noopener">
  Példaoldal (új lapon)
</a>
```

A `_parent` nem a HTML-elem szülőjét jelenti, hanem például egy beágyazott keret szülő környezetét. A `rel="noopener"` kifejezetten jelzi, hogy az új oldal ne kapjon hozzáférést a megnyitó ablakhoz.

## További attribútumok

```html
<a href="cicak.html" title="Három kiscica bemutatása">Cicák</a>
<a href="https://example.com/" hreflang="en">Angol példaoldal</a>
<a href="fajlok/orarend.pdf" download>Órarend letöltése</a>
<a href="fajlok/orarend.pdf" download="heti-orarend.pdf">Órarend mentése</a>
```

A `title` kiegészítő információ, asztali böngészőben gyakran buborékszöveg. Ne ebbe rejts lényeges tudnivalót, mert érintőképernyőn és billentyűzettel nem mindig érhető el. A `hreflang` a céloldal nyelvét jelzi, nem fordítja le az oldalt.

A `download` letöltési szándékot jelez, opcionálisan javasolt fájlnévvel. Normál webes URL-nél azonos eredetű erőforrásra tervezz vele; `blob:` és `data:` URL-ekkel is működhet. A tényleges viselkedést a böngésző és a szerver válasza is befolyásolja.

## Oldalon belüli ugrás

```html
<a href="#gondozas">Ugrás a gondozáshoz</a>

<h2 id="gondozas">Gondozás</h2>
<p>A gondozással kapcsolatos tudnivalók.</p>
```

A `#` utáni rész az elem `id` értéke. Az azonosító az adott dokumentumban legyen egyedi, és pontosan egyezzen a hivatkozásban megadottal. Másik oldal megfelelő részére így hivatkozhatsz:

```html
<a href="cicak.html#gondozas">A cicák gondozása</a>
```

## Képes, e-mail- és telefonhivatkozás

```html
<a href="cicak.html">
  <img src="kepek/cicak.jpg" alt="A cicák bemutatásának megnyitása">
</a>
<a href="mailto:tanar@example.com">E-mail írása</a>
<a href="tel:+3662123456">Telefonhívás</a>
```

A képes link alternatív szövege a hivatkozás célját is közvetítse. A `mailto:` és a `tel:` a beállított alkalmazást indíthatja el; nem küld automatikusan üzenetet, és nem garantálja, hogy az adott eszközön van hozzá megfelelő alkalmazás.

## A hivatkozások állapotai

| Állapot | CSS-jelölés | Jelentés |
| --- | --- | --- |
| Még nem látogatott | `:link` | Korábban nem megnyitott cél |
| Látogatott | `:visited` | Korábban megnyitott cél |
| Rámutatás | `:hover` | A mutató a link fölött áll |
| Fókusz | `:focus-visible` | A böngésző látható fókuszjelzést tart szükségesnek |
| Aktiválás | `:active` | Az aktiválás ideje alatt |

Stíluslap nélkül gyakori a kék, lila és aktív állapotban piros szín, de ez nem garantált. A Theme Hope saját stílust alkalmazhat. Billentyűzettel is próbáld ki a linkeket: `Tab`, majd `Enter`!

## Gyakorlás

Készíts egy külső linket, egy letöltési linket és egy oldalon belüli hivatkozást! A saját fájlok ténylegesen létezzenek, a belső cél rendelkezzen azonosítóval.

::: details Hibakeresési sorrend
Ellenőrizd a `href` értékét, a fájl helyét, a kis- és nagybetűket, végül a `#` utáni azonosítót. Ha egy link rossz oldalrészhez ugrik, keress ismétlődő `id` értéket!
:::

