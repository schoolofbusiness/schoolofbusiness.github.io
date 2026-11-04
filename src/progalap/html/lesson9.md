---
title: Összefoglaló projekt
order: 9
---

# 9. Összefoglaló projekt: cicabemutató

Készíts önálló `index.html` oldalt „Cicák bemutatása” témában! Használd a csomag `assets/cicak.jpeg` képét, vagy saját, jogszerűen használható képet. A kódpéldában a kép az `images` mappába kerül.

## Követelmények

1. Magyar nyelv, UTF-8 kódolás, megfelelő lapfülcím és mobilos viewport.
2. Egy főcím és legalább két második szintű címsor.
3. Két bekezdés, egy fontos és egy hangsúlyos szövegrész.
4. Legalább háromelemű lista.
5. Helyes útvonalú kép megfelelő alternatív szöveggel.
6. Egy oldalon belüli hivatkozás, amely működő célpontra mutat.
7. Táblázat címmel, három oszloppal, fejlécekkel és két adatsorral.

## Megoldás

::: details Egy lehetséges teljes HTML-oldal
```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Cicák bemutatása</title>
</head>
<body>
  <h1>Cicák bemutatása</h1>
  <p>Ezen az oldalon megismerheted a cicáinkat.</p>
  <p><strong>A gondozás felelősség.</strong> Foglalkozz velük <em>minden nap</em>!</p>
  <a href="#adatok">Ugrás az adatokhoz</a>
  <h2>A cicák képe</h2>
  <img src="images/cicak.jpeg" alt="Három kiscica egymás mellett"
       width="307" height="224">
  <h2>Napi teendők</h2>
  <ul>
    <li>Friss víz biztosítása</li>
    <li>Etetés</li>
    <li>Közös játék</li>
  </ul>
  <h2 id="adatok">Adatok</h2>
  <table>
    <caption>Cicáink</caption>
    <thead>
      <tr>
        <th scope="col">Név</th>
        <th scope="col">Fajta</th>
        <th scope="col">Életkor</th>
      </tr>
    </thead>
    <tbody>
      <tr><th scope="row">Dönci</th><td>Sziámi</td><td>1 éves</td></tr>
      <tr><th scope="row">Tigris</th><td>Brit rövidszőrű</td><td>Fél éves</td></tr>
    </tbody>
  </table>
</body>
</html>
```
:::

## Leadás előtti ellenőrzés

| Ellenőrzés | Mit vizsgálj? |
| --- | --- |
| Fájl | `.html` kiterjesztés és UTF-8 mentés |
| Szerkezet | A fejrészben metaadatok, a törzsben tartalom |
| Címsorok | Követhető hierarchia |
| Lista | A tételek a lista belsejében vannak |
| Kép | Betöltődik, nem torz, megfelelő az `alt` |
| Link | A megfelelő célpontra ugrik |
| Táblázat | Helyes sorok és cellák, érthető fejlécek |

## Rövid ismétlés

| Kérdés | Válasz |
| --- | --- |
| Mi a különbség a `title` és a `h1` között? | Lapfülcím és tartalmi főcím |
| Mi jelöl új bekezdést? | `p` |
| Mikor kell `ol`? | Amikor fontos a sorrend |
| Mit ad meg a `href`? | A hivatkozás célját |
| Mire való az `alt`? | A kép helyettesítésére szöveggel |
| Mit jelent a `colspan="2"`? | Két oszlop helyét foglalja el egy cella |
| Mit jelent a `rowspan="2"`? | Két sor helyét foglalja el egy cella |
