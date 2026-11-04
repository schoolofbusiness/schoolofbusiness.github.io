# 5. tananyag gyakorló


1. **Számok szűrése**: Készíts egy programot, amely egy adott listában kiszűri az összes páros számot, és az eredményt egy másik listába menti.

```python
eredeti_lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

::: details Megoldás
```python
eredeti_lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
paros_szamok = []

for szam in eredeti_lista:
    if szam % 2 == 0:
        paros_szamok.append(szam)

print(paros_szamok)
```
:::

2. **Számok összege**: Számold ki egy lista elemeinek az összegét.

```python
szamok = [3, 7, 1, 9, 2, 8]
```

::: details Megoldás
```python
szamok = [3, 7, 1, 9, 2, 8]
osszeg = 0

for szam in szamok:
    osszeg += szam

print(osszeg)
```
:::

3. **Számok megszámolása**: Számold meg, hány pozitív és hány negatív szám található egy listában.

```python
szamok = [3, -5, 2, -8, 7, -1, 4, 0]
```

::: details Megoldás
```python
szamok = [3, -5, 2, -8, 7, -1, 4, 0]
pozitiv_szamok = 0
negativ_szamok = 0

for szam in szamok:
    if szam > 0:
        pozitiv_szamok += 1
    elif szam < 0:
        negativ_szamok += 1

print("Pozitív számok:", pozitiv_szamok)
print("Negatív számok:", negativ_szamok)
```
:::

4. **Szavak hosszának számolása**: Készíts egy programot, amely egy szavakból álló listából létrehoz egy másik listát, amely tartalmazza a szavak hosszát.

```python
szavak = ["alma", "körte", "banán", "szilva", "szőlő"]
```

::: details Megoldás
```python
szavak = ["alma", "körte", "banán", "szilva", "szőlő"]
szavak_hossza = []

for szo in szavak:
    szavak_hossza.append(len(szo))

print(szavak_hossza)
```
:::

5. **Legnagyobb és legkisebb szám keresése**: Készíts egy programot, amely megtalálja egy lista legnagyobb és legkisebb elemét.

```python
szamok = [5, 2, 9, 1, 7, 3]
```

::: details Megoldás
```python
szamok = [5, 2, 9, 1, 7, 3]
legnagyobb = szamok[0]
legkisebb = szamok[0]

for szam in szamok:
    if szam > legnagyobb:
        legnagyobb = szam
    elif szam < legkisebb:
        legkisebb = szam

print("Legnagyobb szám:", legnagyobb)
print("Legkisebb szám:", legkisebb)
```
:::

6. **Számok szorzata**: Számold ki egy lista elemeinek a szorzatát.

```python
szamok = [2, 3, 4, 5]
```

::: details Megoldás
```python
szamok = [2, 3, 4, 5]
szorzat = 1

for szam in szamok:
    szorzat *= szam

print(szorzat)
```
:::

7. **Elemek szűrése**: Készíts egy programot, amely kiszűri egy listából azokat az elemeket, amelyek kisebbek egy adott küszöbértéknél.

```python
lista = [8, 12, 4, 25, 6, 18]
kuszobertek = 10
```

::: details Megoldás

```python
lista = [8, 12, 4, 25, 6, 18]
kuszobertek = 10
szurt_lista = []

for elem in lista:
    if elem < kuszobertek:
        szurt_lista.append(elem)

print(szurt_lista)
```

:::

8. **Lista elemeinek összehasonlítása**: Készíts egy programot, amely összehasonlít két listát, és megadja, hogy van-e közös elem bennük.

```python
lista1 = [1, 2, 3, 4, 5]
lista2 = [4, 5, 6, 7, 8]
van_kozos_elem = False
```

::: details Megoldás

```python
lista1 = [1, 2, 3, 4, 5]
lista2 = [4, 5, 6, 7, 8]
van_kozos_elem = False

for elem1 in lista1:
    for elem2 in lista2:
        if elem1 == elem2:
            van_kozos_elem = True
```

:::

9. **Elemek megfordítása**: Készíts egy programot, amely megfordítja egy lista elemeinek sorrendjét.

```python
lista = [1, 2, 3, 4, 5]
```

::: details Megoldás

```python
lista = [1, 2, 3, 4, 5]
lista = lista[::-1]

print(lista)
```
:::

10. **Szavak palindrómok-e**: Írj egy programot, amely ellenőrzi, hogy egy listában szereplő szavak palindrómok-e (olyan szavak, amelyek visszafelé olvasva is ugyanazok).


```python
szavak = ["radar", "alma", "level", "magam", "tenet"]
```

::: details Megoldás

```python
szavak = ["radar", "alma", "level", "magam", "tenet"]
palindromok = []

for szo in szavak:
    if szo == szo[::-1]:
        palindromok.append(szo)

print(palindromok)
```
:::

11. **Számok rendezése növekvő sorrendben**: Rendezd egy lista elemeit növekvő sorrendbe.

```python
lista = [5, 2, 9, 1, 7, 3]
```

::: details Megoldás

```python
lista = [5, 2, 9, 1, 7, 3]
lista.sort()

print(lista)
```
:::


12. **Szavak rendezése hossz szerint**: Írj egy programot, amely egy listában található szavakat rendezze hosszuk szerint növekvő sorrendben.

```python
szavak = ["kutya", "tej", "galamb", "oroszlán", "görögdinnye"]
```

::: details Megoldás

```python
szavak = ["kutya", "tej", "galamb", "oroszlán", "görögdinnye"]
szavak.sort(key=len)

print(szavak)
```
:::


13. **Duplikált elemek eltávolítása**: Készíts egy programot, amely eltávolítja egy listából az összes duplikált elemet, és létrehoz egy új listát, amely csak a egyedi elemeket tartalmazza.

```python
lista = [1, 2, 2, 3, 4, 4, 5, 5, 5]
```

::: details Megoldás

```python
lista = [1, 2, 2, 3, 4, 4, 5, 5, 5]
egyedi_lista = []

for elem in lista:
    if elem not in egyedi_lista:
        egyedi_lista.append(elem)

print(egyedi_lista)
```
:::

14.  **Listák közötti különbség meghatározása**: Írj egy programot, amely két listát vesz, és meghatározza a két lista közötti különbséget, azaz azokat az elemeket, amelyek csak az egyik listában szerepelnek.

```python
lista1 = [1, 2, 3, 4, 5]
lista2 = [3, 4, 5, 6, 7]
```

::: details Megoldás
```python
lista1 = [1, 2, 3, 4, 5]
lista2 = [3, 4, 5, 6, 7]
kulonbseg = []

for elem in lista1:
    if elem not in lista2:
        kulonbseg.append(elem)

for elem in lista2:
    if elem not in lista1:
        kulonbseg.append(elem)

print(kulonbseg)
```
:::


