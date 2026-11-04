---
title: "4. Felsorolások és listák"
order: 4
category: HTML
tag:
  - Alapok
---

# 4. Felsorolások és listák

## Mit fogsz megtanulni?

Kiválasztod a tartalomhoz illő listatípust, megváltoztatod a számozást, és többszintű listát készítesz.

| Lista | Elemek | Mikor használd? |
| --- | --- | --- |
| Számozatlan | `ul` és `li` | A sorrend nem lényeges |
| Számozott | `ol` és `li` | Lépések, rangsor, fontos sorrend |
| Leíró | `dl`, `dt`, `dd` | Fogalom és magyarázat, név és érték |

## Számozatlan lista

::: normal-demo Perifériák
```html
<ul>
  <li>Nyomtató</li>
  <li>Monitor</li>
  <li>Egér</li>
  <li>Billentyűzet</li>
</ul>
```
:::

A `ul` a lista kerete, az egyes tételeket `li` elemek jelölik. A felsorolásjelet a böngésző készíti el; nem kell kézzel beírni.

## Számozott lista

::: normal-demo Egy HTML-oldal elkészítése
```html
<ol>
  <li>Hozd létre az index.html fájlt!</li>
  <li>Írd bele a dokumentum vázát!</li>
  <li>Mentsd el, majd nyisd meg böngészőben!</li>
</ol>
```
:::

| Attribútum | Példa | Eredmény |
| --- | --- | --- |
| `start` | `start="5"` | A kezdőérték 5 |
| `reversed` | `reversed` | Csökkenő számozás |
| `type` | `type="A"` | Nagybetűs jelölés |

A `type` értékei: `1`, `a`, `A`, `i`, `I`. A `start` akkor is szám, ha betűs vagy római számozást használsz. A `reversed` logikai attribútum: jelenléte kapcsolja be, ezért a `reversed="false"` sem kapcsolja ki.

::: normal-demo Fordított római számozás
```html
<ol type="I" start="3" reversed>
  <li>Harmadik hely</li>
  <li>Második hely</li>
  <li>Első hely</li>
</ol>
```
:::

## Többszintű lista

A belső lista annak a `li` elemnek a része, amelyhez tartozik. A külső lista tételét csak a belső lista után zárjuk le.

::: normal-demo Perifériák csoportosítása
```html
<ol>
  <li>Kimeneti perifériák
    <ul>
      <li>Nyomtató</li>
      <li>Monitor</li>
    </ul>
  </li>
  <li>Bemeneti perifériák
    <ul>
      <li>Egér</li>
      <li>Billentyűzet</li>
    </ul>
  </li>
</ol>
```
:::

::: warning Gyakori hiba
A belső `ul` ne a külső `li` testvére legyen! A behúzás mutassa, melyik elem melyikhez tartozik. A példákban minden `li` elemet lezárunk.
:::

## Leíró lista

A `dt` a fogalom vagy név, a `dd` a hozzá tartozó leírás. Nincs `li`, automatikus sorszám vagy felsorolásjel. Egy fogalomhoz több leírás is tartozhat.

::: normal-demo Webes fogalomtár
```html
<dl>
  <dt>HTML</dt>
  <dd>A weboldal tartalmát és szerkezetét leíró jelölőnyelv.</dd>
  <dt>CSS</dt>
  <dd>A weboldal megjelenését meghatározó stílusnyelv.</dd>
</dl>
```
:::

## Gyakorlás

Készíts számozatlan bevásárlólistát, háromlépéses számozott receptet, valamint kételemű fogalomtárat! A bevásárlólista egyik tétele alatt legyen két altétel.

::: details Önellenőrzés
A bevásárlólista `ul`, a recept `ol`, a fogalomtár `dl`. Az altételek listája a megfelelő `li` belsejébe kerül. A fogalomtárban minden név `dt`, a magyarázata `dd` elem.
:::

