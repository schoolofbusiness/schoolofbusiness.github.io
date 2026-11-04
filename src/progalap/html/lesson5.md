---
title: "5. Szövegformázás és jelentés"
order: 5
category: HTML
tag:
  - Alapok
---

# 5. Szövegformázás és jelentés

## Mit fogsz megtanulni?

Megkülönbözteted a szöveg megjelenését a jelentésétől, és megfelelő elemet választasz a kiemeléshez.

## A legfontosabb szövegszintű elemek

Ezek páros, alapértelmezésben sorközi elemek. Egy bekezdésen belül is használhatók.

| Elem | Jelentés, feladat | Szokásos megjelenés |
| --- | --- | --- |
| `b` | Figyelemfelhívás külön fontosság nélkül, például kulcsszó | Félkövér |
| `strong` | Fontosság, komolyság vagy sürgősség | Félkövér |
| `i` | Eltérő hangvétel, szakkifejezés, más nyelvű fordulat | Dőlt |
| `em` | Hangsúly | Dőlt |
| `u` | Nem szöveges megjegyzés jelölése, például jelzett elírás | Aláhúzott |
| `s` | Már nem érvényes vagy nem pontos információ | Áthúzott |
| `sub` | Alsó index | Kisebb, az alapvonal alatt |
| `sup` | Felső index | Kisebb, az alapvonal felett |

A megjelenést CSS megváltoztathatja. A `b` és az `i` elemeknek is van jelentésük; nem pusztán a `strong` és az `em` régi nevei. Ha csak díszítő formázás kell, CSS-t használj.

::: normal-demo Félkövér és dőlt szöveg
```html
<p>Kulcsszó: <b>HTML</b>.</p>
<p><strong>Mentés előtt ne zárd be a szerkesztőt!</strong></p>
<p>Az angol <i lang="en">browser</i> szó böngészőt jelent.</p>
<p>Én <em>ma</em> készítem el a feladatot.</p>
```
:::

Az utolsó mondatban a hangsúly a napra kerül. A szemantikus jelölés a jelentést teszi felismerhetővé; nem garantálja, hogy minden képernyőolvasó hallhatóan másképp ejti ki.

## Aláhúzás és áthúzás

::: normal-demo Jelölések
```html
<p>Jelzett elírás: <u>muszály</u>. Helyesen: muszáj.</p>
<p>Korábbi ár: <s>5000 Ft</s>. Új ár: 4000 Ft.</p>
```
:::

Az aláhúzást az olvasók könnyen hivatkozásnak nézik, ezért használd megfontoltan. A dokumentum szerkesztése során törölt tartalom jelölésére a `del` való; az `s` a már nem aktuális információhoz illik.

## Alsó és felső index

::: normal-demo Képletek és indexek
```html
<p>A víz képlete: H<sub>2</sub>O.</p>
<p>A sorozat első eleme: a<sub>1</sub>.</p>
<p>Négyzetre emelés: x<sup>2</sup>.</p>
<p>Terület: 25 m<sup>2</sup>.</p>
```
:::

## HTML-jelek megjelenítése szövegként

Ha magukat a címkéket szeretnéd kiírni egy HTML-oldalon, a kisebb jelet karakterhivatkozással helyettesítsd:

```html
<p>A bekezdés nyitó címkéje: &lt;p&gt;</p>
<p>Tom &amp; Jerry</p>
```

| Forráskód | Megjelenő karakter |
| --- | --- |
| `&lt;` | `<` |
| `&gt;` | `>` |
| `&amp;` | `&` |

VuePressben a tananyag kódpéldáit kerített `html` kódblokkokban írjuk: ott nem kell a címkéket karakterhivatkozásokká alakítani.

## Gyakorlás

Írj mondatot fontos határidővel, hangsúlyozott időponttal, régi és új árral, valamint a szén-dioxid képletével!

::: details Egy lehetséges megoldás
```html
<p><strong>A beadási határidő péntek!</strong></p>
<p>A fájlt <em>délig</em> töltsd fel!</p>
<p>Ár: <s>3000 Ft</s> helyett 2500 Ft.</p>
<p>Szén-dioxid: CO<sub>2</sub>.</p>
```
:::

