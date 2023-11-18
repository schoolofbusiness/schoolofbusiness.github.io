# 5. tananyag

:::tip 📚 EBBEN A FEJEZETBEN
- Listák definiálása és használata
- Munka listákkal
- Tuple megértése
:::

Néha a kódban egyszerre csak egy-egy adattal dolgozol, például egy személy nevével, egy egységárral vagy egy felhasználónévvel. Máskor nagyobb adathalmazokkal dolgozol, például egy személynevekből álló listával vagy termékek és áraik listájával. Ezeket az adathalmazokat a legtöbb programozási nyelvben gyakran listáknak vagy tömböknek nevezik.

A Python rengeteg egyszerű, gyors és hatékony módszert kínál mindenféle adatgyűjtemény kezelésére, ahogyan azt ebben a fejezetben megismerheted. Mint mindig, most is arra bátorítalak, hogy csináld végig a példákat egy `.py` fájlban. A "csinálás" része segít a "megértésben".

## Listák definiálása és használata

A Python legegyszerűbb adatgyűjteménye a lista. Az előző anyagban példákat láttunk erre. A lista az adatelemek bármely, vesszővel elválasztott, szögletes zárójelben lévő listája. A listához jellemzően egy `=` karakter segítségével rendelünk nevet, ugyanúgy, mint a változók esetében. Ha a lista számokat tartalmaz, ne használj körülöttük idézőjeleket. Itt van például a tesztpontszámok listája:

```py
scores = [88, 92, 78, 90, 98, 84]
```

:::tip 📚 NAGYON, NAGYON HOSSZÚ LISTÁK 
Ebben az anyagban az összes lista rövid, hogy a példák könnyen kezelhetőek legyenek. A való életben azonban a listák több száz vagy akár több ezer, gyakran változó elemet is tartalmazhatnak. Az ilyen hosszú listák közvetlen beírása a kódba megnehezítené a kódot. Ehelyett az ilyen listákat külső fájlokban vagy külső adatbázisokban tároljuk, ahol mindent könnyebb kezelni.
Ebben az anyagban tanult összes technika a külső fájlokban tárolt listákra is alkalmazható. Az egyetlen különbség az, hogy először kódot kell írnod ahhoz, hogy az adatokat a listába tárold. Mielőtt azonban nekilátnál a nagy listák kezelésének, ismerned kell a bármilyen méretű listákkal való munkavégzés összes technikáját. Maradjunk tehát most még ennél, mielőtt áttérnénk a külső adatok kezelésére.
:::

Ha a lista karakterláncokat tartalmaz, mint mindig, ezeket a karakterláncokat szimpla vagy dupla idézőjelek közé kell zárni, mint ebben a példában: 

```py
students = ["Mark", "Amber", "Todd", "Anita", "Sandy"]
```

A lista tartalmának képernyőn való megjelenítéséhez ugyanúgy kiírhatja azt, mint bármelyik hagyományos változót. Ha például a lista definiálása után a kódban végrehajtja a print(students) parancsot, a képernyőn a következőket jeleníti meg: 

```txt
['Mark', 'Amber', 'Todd', 'Anita', 'Sandy']
```

Ez a kimenet nem biztos, hogy pontosan az, amire gondoltál. De ne izgulj, a Python rengeteg lehetőséget kínál a listák megjelenítésére.

### A lista elemeinek hivatkozása pozíció szerint

A listában minden elemének van egy pozíciószáma, amely 0-val kezdődik, még akkor is, ha nem látsz számokat. A lista bármely elemére hivatkozhatsz a számával, ha a lista nevét és a szögletes zárójelben lévő számot használod. Más szóval, használd ezt a szintaxist:

```py
listname[x]
```

Helyettesítsd `listname`-t a lista nevével, és az `x`-et a kívánt elem pozíciószámával. Ne felejtsd, hogy az első elem mindig 0, nem pedig 1. Például a következő sorban definiálunk egy listát, amelynek neve `students`, majd kiírjuk a lista 0. elemét. A kód végrehajtásakor az eredmény a megjelenített `Mark` név lesz:

```py
students = ["Mark", "Amber", "Todd", "Anita", "Sandy"]
print(students[0])
```

Kimenet:
```txt
Mark
```

A következő példa egy pontszámok nevű listát mutat. A `print()` függvény kiírja a lista utolsó pontszámának pozíciószámát, ami 4 (mivel az első mindig 0).

```py
scores = [88, 92, 78, 90, 84]
print(scores[4])
```

Ha olyan listaelemhez próbálsz hozzáférni, amely nem létezik, akkor a listaindex tartományon kívüli hibaüzenetet kap. Az index rész a szögletes zárójelben lévő számra való hivatkozás. A fenti példában létrehoztunk egy pontszámok listáját, majd megpróbáltuk a `score[5]`-t kiírni. Ez nem sikerült, és hibát generált, mert nincs `scores[5]`. Csak `scores[0]`, `scores[1]`, `scores[2]`, `scores[3]` és `scores[4]` van, mert a számlálás mindig 0-nál kezdődik, a lista első értékével.


### Lista körbejárása

A lista minden egyes eleméhez hozzáférhetünk egy `for` ciklus segítségével, a következő szintaxissal:

```py
for x in list:
```

Egyszerű módja a kód olvashatóvá tételének, ha a `lista` nevére mindig többes számot használunk (pl. diákok, pontszámok). Ezután a változó neveként használhatja az egyes számot (diák, pontszám). Ezzel a megközelítéssel nem kell indexszámokat (szögletes zárójelben lévő számokat) sem használnia. Például a következő kód kiírja a pontszámok listájának minden egyes pontszámát:

```py
for score in scores:    
    print(score)
```

Ne feledd, hogy a ciklusban végrehajtandó kódot mindig be kell húzni. A következő kód egy teljesebb példát mutat, ahol a kód futtatásának eredményét láthatod.

```py
# Define a list of numbers.
scores = [88, 92, 78, 90, 84]
for score in scores:
    print(score)
print("Done")
```

Kimenet:

```txt
88
92
78
90
84
```

### Annak megnézése, hogy egy lista tartalmaz-e elemet

Ha azt szeretnénk, hogy a kódunk ellenőrizze egy lista tartalmát, hogy tartalmaz-e már valamilyen elemet, akkor használjuk a listanevet egy `if` utasításban vagy egy változó hozzárendelésében. A példában látható kód egy névlistát hoz létre. Ezután két változó tárolja a listában az `Anita` és `Bob` nevek keresésének eredményét. Az egyes változók tartalmának kiírása `True` értéket jelenít meg arra az esetre, amikor az `Anita` név szerepel a listában. A teszt, amely azt vizsgálja, hogy a `Bob` név szerepel-e a listában, `False`-t bizonyít.

```py
students = ["Mark", "Amber", "Todd", "Anita", "Sandy"]

# Is Anita in the list?
has_anita = "Anita" in students
print(has_anita)

# Is Bob in the list?
has_bob = "Bob" in students
print(has_bob)
```

Kimenet:

```txt
True
False
```

### Egy lista hosszának megadása

Annak meghatározásához, hogy hány elem van egy listában, használd a `len()` függvényt - a hossz rövidítése. Tegyük a lista nevét a zárójelek közé. Például írjuk be a következő kódot:

```py
students = ["Mark", "Amber", "Todd", "Anita", "Sandy"]
print(len(students))
```

A kód futtatása ezt a kimenetet eredményezi:

```txt
5
```

A listának öt eleme van, bár az utolsó elem indexe mindig eggyel kisebb, mivel a Python 0-nál kezdi a számolást. Így az utolsó elem, Sandy, a `students[4]`-re utal, nem pedig a `students[5]`-re.

### Elem hozzáadása egy lista végéhez

Ha azt szeretnéd, hogy a kódod hozzáadjon egy elemet a lista végéhez, használd az `.append()` metódust, a hozzáadni kívánt értékkel a zárójelben. Az idézőjelek között használhat változónevet vagy szó szerinti értéket is. Például a következő kódban a `students.append("Goober")` sor a `Goober` nevet adja hozzá a listához. A `students.append(new_student)` sor a `new_student` változóban tárolt nevet adja hozzá a listához. Az `.append()` metódus mindig a lista végéhez ad hozzá. Így amikor kiíratjuk a listát, a két új név a lista végén lesz.

```py
# Create a list of strings (names)
students = ["Mark", "Amber", "Todd", "Anita", "Sandy"]

# Add the name Goober to the list
students.append("Goober")

new_student = "Amanda"
# Add whatever name is in new_student to the list.
students.append(new_student)

# Print the entire list
print(students)
```

Kimenet:

```txt
['Mark', 'Amber', 'Todd', 'Anita', 'Sandy', 'Goober', 'Amanda']
```

Egy teszt segítségével ellenőrizheted, hogy egy elem szerepel-e a listában, és csak akkor illesztheted be, ha az elem még nincs benne. Például a következő kód nem fogja hozzáadni az `Amanda` nevet a listához, mivel ez a név már szerepel a listában.

```py
student_name = "Amanda"

# Add student_name but only if not already in the list.

if student_name in students:
    print(student_name + " already in the list")
else:
    students.append(student_name)
    print(student_name + " added to the list")
```


### Elem beszúrása listába

Míg az `append()` metódus egy elemet ad hozzá a lista végéhez, addig az `insert()` metódus egy elemet ad hozzá a listához bármelyik pozícióban. Az `insert()` szintaxisa a következő:

```py
listname.insert(position, item)
```

Helyettesítsd a `listname` -t lista nevével, a `position` pedig azzal a pozícióval, ahová az elemet be szeretnéd illeszteni - például 0, hogy az első elem legyen, 1, hogy a második elem legyen, és így tovább. Helyettesítse az `item`-et azzal az értékkel, vagy annak az értéket tartalmazó változónak a nevével, amelyet a listába szeretnél beilleszteni.

A következő kód például a `Lupe`-ot teszi a lista első elemévé:

```py
# Create a list of strings (names).
students = ["Mark", "Amber", "Todd", "Anita", "Sandy"] 
student_name = "Lupe"

# Add student name to front of the list.
students.insert(0, student_name) 

# Show me the new list.
print(students)
```

Ha a kódot futtatod, a `print(students)` az új név beillesztése után a következőképpen jeleníti meg a listát:

```txt
['Lupe', 'Mark', 'Amber', 'Todd', 'Anita', 'Sandy']
```

### Egy elem módosítása egy listában

Egy lista elemét az `=` hozzárendelési operátorral ugyanúgy megváltoztathatja, mint a változók esetében. Ügyeljünk arra, hogy az indexszámot szögletes zárójelben adjuk meg, hogy jelezzük, melyik elemet szeretnénk megváltoztatni. A szintaxis a következő:

```py
listname[index] = newvalue
```

A `listname` helyébe a lista neve lép, az `index` helyébe a megváltoztatni kívánt elem indexszámát kell írni, és a `newvalue` helyébe azt kell írni, amit a listaelembe be akarunk írni. A kód a következő:

```py
# Create a list of strings (names).
students = ["Mark", "Amber", "Todd", "Anita", "Sandy"]
students[3] = "Hobart"
print(students)
```

Ha ezt a kódot futtatja, a kimenet a következő lesz, mivel `Anita` `Hobart`-ra változott:

```txt
['Mark', 'Amber', 'Todd', 'Hobart', 'Sandy']
```

### Listák kombinálása

Ha két listát szeretne egyetlen listává kombinálni, használja az `extend()` függvényt a következő szintaxissal:

```py
original_list.extend(additional_items_list)
```

A kódban az `original_list` helyett írd be annak a listának a nevét, amelyhez az új listaelemeket fogod hozzáadni. Az `additional_items_list`-et helyettesítsd annak a listának a nevével, amely az első listához hozzáadni kívánt elemeket tartalmazza. Íme egy egyszerű példa a `list1` és `list2` nevű listák használatára. 

A `list1.extend(list2)` végrehajtása után az első lista tartalmazza mindkét lista elemeit, ahogyan az a végén lévő `print()` utasítás kimenetén látható.

```py
# Create two lists of Names.
list1 = ["Zara", "Lupe", "Hong", "Alberto", "Jake"]
list2 = ["Huey", "Dewey", "Louie", "Nader", "Bubba"] 

# Add list2 names to list1.
list1.extend(list2) 

# Print list 1.
print(list1) 
```

```txt
['Zara', 'Lupe', 'Hong', 'Alberto', 'Jake', 'Huey', 'Dewey', 'Louie', 'Nader', 'Bubba']
```

Könnyű, nem?

### Listaelemek eltávolítása

A Python kínál egy `remove()` metódust, amellyel bármely értéket eltávolíthatunk a listából. Ha az elem többször szerepel a listában, csak az első előfordulása kerül eltávolításra. A következő kód például egy olyan betűlistát jelenít meg, amelyben a `C` betű többször ismétlődik. Ezután a kód a `letters.remove("C")` segítségével eltávolítja a `C` betűt a listából:

```py
# Create a list of strings.
letters = ["A", "B", "C", "D", "C", "E", "C"] 
# Remove "C" from the list.
letters.remove("C") 
# Show me the new list.
print(letters)
```

Ha ezt a kódot végrehajtod, látni fogod, hogy csak az első C betű került eltávolításra:

```txt
['A', 'B', 'D', 'C', 'E', 'C']
```

Ha az összes elemet el kell távolítanod, egy `while` ciklus segítségével megismételheted a `.remove` műveletet, amíg az elem a listában marad. Ez a kód például addig ismétli a `.remove`-et, amíg a `C` még a listában van:

```py
while "C" in letters:
    letters.remove("C")
```

Ha egy elemet a listában pozíciója alapján akarsz eltávolítani, használd a `pop()` funkciót egy indexszámmal, nem pedig a `remove()` funkciót egy értékkel. Ha az utolsó elemet akarod eltávolítani a listából, használd a `pop()` funkciót indexszám nélkül. A következő kód például létrehoz egy listát, eltávolítja az első elemet (0), majd eltávolítja az utolsó elemét - `pop()`. A lista kiíratása bizonyítja, hogy ez a két elem eltávolításra került:

```py
# Create a list of strings.
letters = ["A", "B", "C", "D", "E", "F", "G"] 
# Remove the first item.
letters.pop(0)
# Remove the last item.
letters.pop() 
# Show me the new list.
print(letters)
```

```txt
['B', 'C', 'D', 'E', 'F']
```

Amikor a listából `pop()` egy elemet veszel ki, akkor az érték másolatát tárolhatod egy változóban. A következő példa ugyanazt a kódot mutatja, mint az előző, de az eltávolított értékek másolatát a `first_removed` és `last_removed` nevű változókban tárolja. A végén kiírja a listát, és azt is megmutatja, hogy mely betűket távolította el.

```py
# Create a list of strings.
letters = ["A", "B", "C", "D", "E", "F", "G"]

# Make a copy of first list item then remove it from the list.
first_removed = letters.pop(0)
# Make a copy of last list item then remove it from the list.
last_removed = letters.pop()

# Show the new list.
print(letters)
# Show what's been removed.
print(first_removed + " and " + last_removed + " were removed from the list.")
```

Kimenet:
```txt
['B', 'C', 'D', 'E', 'F']
A and G were removed from the list.
```

A Python egy `del` (a `delete` rövidítése) parancsot is kínál, amely az indexszáma (pozíciója) alapján bármely elemet töröl a listából. De itt is emlékeznünk kell arra, hogy az első elem a 0. Tehát mondjuk, hogy a következő kódot futtatjuk, hogy töröljük a listából a 2. elemet:

```py
# Create a list of strings.
letters = ["A", "B", "C", "D", "E", "F", "G"] 

# Remove item sub 2.
del letters[2] 

print(letters)”
```

A kód futtatása újra megjeleníti a listát, a következőképpen:

```txt
['A', 'B', 'D', 'E', 'F', 'G']
```

A `C` betű törlésre került, ez így teljesen rendben is van, mivel a betűk számozása 0, 1, 2, 3 és így tovább.


A `del` segítségével egy teljes listát is törölhetsz, ha eltávolítod a szögletes zárójeleket és az indexszámot. A következőkben látható kód például létrehoz egy listát, majd törli azt. Ha a törlés után megpróbáljuk kiíratni a listát, hibát kapunk, mert a lista a `print()` utasítás végrehajtásakor már nem létezik. Figyeljük meg, hogy a `pop` paranccsal ellentétben, amely visszaadja a törölt elemet, a `del` csak törli a listát anélkül, hogy bármit is visszaadna.

```py
# Create a list of strings.
letters = ["A", "B", "C", "D", "E", "F", "G"] 

# Delete the entrie list.
del letters

# Show me the new list
print(letters)
```

### Lista törlése

Ha egy lista tartalmát szeretnéd törölni, de magát a listát nem, használd a `.clear()` parancsot. A lista továbbra is létezik, de nem tartalmaz elemeket. Más szóval, ez egy üres lista. A következő kód azt mutatja, hogy hogyan tesztelhetjük ezt. A kód futtatásakor a végén `[]` jelenik meg, amiből megtudhatjuk, hogy a lista üres:

```py
# Create a list of strings.
letters = ["A", "B", "C", "D", "E", "F", "G"] 
# Clear the list of all entries.
letters.clear() 
# Show me the new list.
print(letters)
``` 

Kimenet:
```txt
[]
```

### Számoljuk meg, hogy egy elem hányszor jelenik meg a listában

A Python `count()` metódusával megszámolhatjuk, hogy egy elem hányszor jelenik meg egy listában. A többi listamódszerhez hasonlóan a szintaxis egyszerű: 

```py
listname.count(x)
```

Cserélje ki a `listname` a lista nevére, és az `x`-et a keresett értékre - vagy az értéket tartalmazó változó nevére.

A következő kód megszámolja, hogy hányszor jelenik meg a `B` betű a listában, a `.count()` zárójelében egy szó szerinti `B` betűt használva, így: 

```py
grades.count("B")
```

Mivel a `B` idézőjelben van, tudjuk, hogy ez egy karakter, nem pedig valamilyen változó neve.

Ez a kód a `C` osztályzatok számát is megszámolja, de ezt az értéket egy változóban tároltuk, csak hogy megmutassuk a szintaxisbeli különbséget. Mindkét számlálás működött, ahogy a program alján látható kimeneten is láthatjuk.

Mi csak az `F`-eket számoltuk meg közvetlenül az üzenetet megjelenítő kódban. Nincsenek `F` jegyek, így a `grades.count("F")` 0-t ad vissza, ahogy a kimeneten is látható.

Ha kíváncsi vagy, miért nem számolunk más jegyeket, ez azért van, mert az alkalmazás csak egy példa a Python szintaxis illusztrálására. Nem próbálunk meg egy valódi programot létrehozni, amely egy osztályteremben az összes valódi osztályzatot megszámolja.

```py
# Create a list of strings.
grades = ["C", "B", "A", "D", "C", "B", "C"]

# Count the B's
b_grades = grades.count("B")

# Use a variable for value to count.
look_for = "C"
c_grades = grades.count(look_for)

print("There are" + str(b_grades) + " B grades in the list.")
print("There are" + str(c_grades) + " " + look_for + " grades in the list.")

# Count F's too.
print("There are " + str(grades.count("F")) + " F grades in the list.")
```

Kimenet:

```txt
There are 2 B grades in the list.
There are 3 C grades in the list.
There are 0 F grades in the list.
```

:::warning 👀
Amikor számokat és karakterláncokat próbálsz kombinálni egy üzenethez, a számokat karakterláncokká kell konvertálnod az `str()` függvény segítségével. Ellenkező esetben hibaüzenetet kapunk, amely valami olyasmit ír, hogy csak `str` (nem `int`) és `str` összekapcsolása lehetséges. Ebben az üzenetben az `int` az `integer`, a `str` pedig a `string` rövidítése.
:::


### Listaelem indexének keresése

A Python kínál egy `.index()` metódust, amely az indexszám alapján visszaad egy számot, amely egy elem pozícióját jelzi a listában. A szintaxis a következő:

```py
listname.index(x)
```

Mint mindig, a `listname` helyett a keresendő lista nevét adja meg. Az `x`-et helyettesítsd azzal, amit keresel - mint mindig, akár szó szerinti, akár változónév. Természetesen nincs garancia arra, hogy az elem benne van a listában, vagy csak egyszer szerepel a listában. Ha az elem nincs a listában, hiba lép fel. Ha az elem többször szerepel a listában, akkor csak az első megfelelő elem indexét adja vissza.

Következő kódrész egy olyan példát mutat, ahol a program az `f_index = grades.index(look_for)` sorban összeomlik, mert nincs `F` a listában.


```py
# Create a list of strings.
grades = ["C", "B", "A", "D", "C", "B", "C"]

# Find the index for "B"
b_index = grades.index("B")

# Find the index for F.
look_for = "F"
f_index = grades.index(look_for)

# Show the results.
print("The first B is index " + str(b_index))
print("The first " + look_for + " is at " + str(f_index))
```

Ezt a problémát könnyen megkerülhetjük úgy, hogy egy `if` utasítással megnézzük, hogy egy elem szerepel-e a listában, mielőtt megpróbálnánk az indexszámát megadni. Ha az elem nincs a listában, jelenítsünk meg egy üzenetet, amely ezt közli. Ellenkező esetben szerezzük meg az indexszámot, és jelenítsük meg egy üzenetben. Ez a kód a következőként fog kinézni: 

```py
# Create a list of strings.
grades = ["C", "B", "A", "D", "C", "B", "C"] 
# Decide what to look for
look_for = "F"
# See if the item is in the list.
if look_for in grades:    
    # If it's in the list, get and show the index.
    print(str(look_for) + " is at index " + str(grades.index(look_for)))
else:    
    # If not in the list, don't even try for index number.
    print(str(look_for) + " isn't in the list.")
```

### Listák betűrendbe szedése és rendezése

A Python egy `sort()` metódust kínál a listák rendezésére. A legegyszerűbb formájában a lista elemeit ábécésorrendbe rendezi - ha azok karakterláncok. Ha a lista számokat tartalmaz, akkor azokat a legkisebbtől a legnagyobbig rendezi. Egy ilyen egyszerű rendezéshez használjuk a `sort()` parancsot üres zárójelekkel:

```py
listname.sort()
```

A `listname` helyébe a lista neve lép. A programkód egy példát mutat egy karakterláncokat és egy számokat tartalmazó lista használatával. Mindkettőhöz új listát hoztunk létre egyszerűen úgy, hogy minden egyes rendezett listához új listanevet rendeltünk. Ezután a kód kiírja az egyes rendezett listák tartalmát.

Ha a listád nagy- és kisbetűket vegyesen tartalmazó karakterláncokat tartalmaz, és rendezés eredménye nem tűnik megfelelőnek, próbáld meg a `.sort()` helyett `.sort(key=lambda s: s.lower())` parancsot használni, majd futtasd újra a kódot.

A dátumok egy kicsit bonyolultabbak, mert nem lehet csak úgy beírni őket karakterláncokként, mint például `12/31/2020`. A helyes rendezéshez dátum adattípusúnak kell lenniük. Ez azt jelenti, hogy a `datetime` modult és a `date()` metódust kell használni az egyes dátumok definiálásához. A dátumokat ugyanúgy hozzáadhatja a listához, mint bármely más listát. Például a következő sorban a kód létrehoz egy négy dátumot tartalmazó listát:

```py
dates = [dt.date(2020,12,31), dt.date(2019,1,31), dt.date(2018,2,28), dt.date(2020,1,1)]
```

A számítógép biztosan nem bánja, ha így készíted el a listát. De ha a kódot olvashatóbbá akarod tenni saját magad vagy más fejlesztők számára, akkor érdemes minden egyes dátumot egyesével létrehozni és csatolni. A következő kódrész egy példát mutat, ahol létrehoztunk egy üres listát `datelist` néven: 

```py
datelist = []
```

Ezután a `dt.date(year,month,day)` szintaxissal egy-egy dátumot illesztettünk a listához. 


```py
# Need this modules for the dates.
import datetime as dt

# Create a list of dates, empty for starters
datelist = []
# Append adates one at time so code is easier to read.
datelist.append(dt.date(2020,12,31))
datelist.append(dt.date(2019,1,31))
datelist.append(dt.date(2018,2,28))
datelist.append(dt.date(2020,1,1))

# Sort the dates (earliest to latest) and show formatted.
datelist.sort()

for date in datelist:
    print(f"{date:%m/%d/%Y}")
```

Kimenet:

```txt
02/28/2018
01/31/2019
01/01/2020
12/31/2020
```

A lista létrehozása után a kód a `datelist.sort()` segítségével időrendi sorrendbe rendezi a dátumokat - a legkorábbitól a legkésőbbi időpontig. Ebben a kódban nem használtuk a `print(datelist)` parancsot, mert ez a módszer a dátumokat az adattípusra vonatkozó információkkal együtt jeleníti meg, például így:

```py
[datetime.date(2018, 2, 28), datetime.date(2019, 1, 31), datetime.date (2020, 1, 1), datetime.date(2020, 12, 31)]
```

Nem a legkönnyebben olvasható lista. Ezért ahelyett, hogy a teljes listát egyetlen `print()` utasítással nyomtattuk volna ki, végighaladtunk a lista minden egyes dátumán, és mindegyiket a `%m/%d/%Y` f-stringgel formázva nyomtattuk ki. Ez a technika minden egyes dátumot saját sorában jelenít meg `mm/dd/yyyy` formátumban, ahogy a kódot lejebb láthatd.

Ha az elemeket fordított sorrendben akarjuk rendezni, akkor a `sort()` zárójelbe tegyük be a `reverse=True` értéket - és ne felejtsük el a `True` első betűjét nagybetűsre írni). A kód példákat mutat mindhárom lista csökkenő (fordított) sorrendbe rendezésére a `reverse=True` használatával. 

```py
import datetime as dt

# Create a kust if strings.
names = ["Zara", "Lupe", "Hong", "Alberto", "Jake", "Tyler" ]

# Create a list of numbers.
numbers = [14, 0, 56, -4, 99, 56, 11.23]

# Create a list of dates, empty for starters because code is long.
detalist = []
detalist.append(dt.date(2020,12,31))
detalist.append(dt.date(2019,1,31))
detalist.append(dt.date(2018,2,28))
detalist.append(dt.date(2020,1,1))

# Sort strings in reverse order (Z to A) and show.
name.sort(reverse=True)
print(names)
print() # This just adds a blank line to the output.

# Sort numbers in reverse order (largest to smallest) and show.
numbers.sort(reverse=True)
print(numbers)
print() # This just adds a blank line to the output.

# Sirt tge dates in reverse order (latest to earliest) and show formatted.
datelist.sort(reverse = True)
for date in datelist:
    print(f"{date:%m/%d/%Y}")
```

Kimenet:

```txt
['Zara', 'Tyler', 'Lupe', 'Jake', 'Hong', 'Alberto']

[99, 56, 56, 14, 11.23, 0, -4]

12/31/2020
01/01/2020
01/31/2019
02/28/2018
```

### Lista tartalmának megfordítása

A `.reverse` módszerrel megfordíthatjuk a listában lévő elemek sorrendjét. Ez nem ugyanaz, mint a fordított rendezés. A fordított rendezéskor még mindig rendezés marad: Z-A a karakterláncoknál, a legnagyobbtól a legkisebbig a számoknál, és a legkésőbbtől a legkorábbiig a dátumoknál. Amikor egy listát fordítva rendezel, egyszerűen csak megfordítjuk a lista elemeit, függetlenül azok sorrendjétől, anélkül, hogy megpróbálná őket rendezni. A következő kódban megfordítjuk a listában szereplő nevek sorrendjét, majd kiírjuk a listát. 

```py
# Create a list of strings.
names = ["Zara", "Lupe", "Hong", "Alberto", "Jake"]
# Reverse the list.
names.reverse()
# Print the list.
print(names) 
```

Kimenet:

```txt
['Jake', 'Alberto', 'Hong', 'Lupe', 'Zara']
```

### Lista másolása

Ha egy lista másolatával kell dolgoznod úgy, hogy az eredeti listát ne változtasd meg, használd a `.copy()` metódust. A következő kód például hasonló az előzőhöz, azzal a különbséggel, hogy az eredeti lista sorrendjének felcserélése helyett egy másolatot készítünk a listáról, és azt fordítjuk meg. Az egyes listák tartalmának kiírása mutatja, hogy az első lista még mindig az eredeti sorrendben van, míg a második lista sorrendje megfordul:

```py
# Create a list of strings.
names = ["Zara", "Lupe", "Hong", "Alberto", "Jake"] 
# Make a copy of the list.
backward_names = names.copy()
# Reverse the copy.
backward_names.reverse() 
# Print the list.
print(names)
print(backward_names)
```

```txt
['Zara', 'Lupe', 'Hong', 'Alberto', 'Jake']
['Jake', 'Alberto', 'Hong', 'Lupe', 'Zara']
```

#### Metódusok listákhoz

|       Metódus      |                                           Mit csinál?                                           |
|:------------------:|:-----------------------------------------------------------------------------------------------:|
|      append()      |                                Hozzáad egy elemet a lista végére.                               |
|       clear()      |                   Eltávolítja az összes elemet a listából, üresen hagyva azt.                   |
|       copy()       |                                   Másolatot készít a listáról                                   |
|       count()      |                  Megszámolja, hogy egy elem hányszor jelenik meg egy listában.                  |
|      extend()      |                       Egy lista elemeit egy másik lista végéhez csatolja.                       |
|       index()      |                    Visszaadja egy elem indexszámát (pozícióját) egy listában.                   |
|      insert()      |                       Beilleszt egy elemet a listába egy adott pozícióba.                       |
|        pop()       | Eltávolít egy elemet a listából, és megadja az elem másolatát, amelyet egy változóban tárolhat. |
|      remove()      |                                 Eltávolít egy elemet a listából.                                |
|      reverse()     |                           Megfordítja az elemek sorrendjét a listában.                          |
|       sort()       |                               A listát növekvő sorrendbe rendezi.                               |
| sort(reverse=True) |                               A listát csökkenő sorrendbe rendezi.                              |

## Mi az a Tuple és mire jó?

A listákon kívül a Python támogatja a tuple nevű adatszerkezetet is. Egyesek ezt úgy ejtik ki, mint a " two-pull". Vannak, akik úgy ejtik ki, hogy rímeljen a "couple"-re. De nem írják tupple-nek vagy touple-nak, így a legjobb tippünk az, hogy "two-pull"-nak ejtik. A fenébe is, amennyire tudjuk, lehet, hogy nem csak egy helyes kiejtési mód van, de ez nem akadályozza meg az embereket abban, hogy vitatkozzanak róla.

Mindenesetre a furcsa név ellenére a tuple nem más, mint egy megváltoztathatatlan lista - mintha ez sokat mondana. Más szóval, a tuple egy lista, de nem lehet megváltoztatni, miután definiáltuk. Tehát miért akarsz megváltoztathatatlan, megváltoztathatatlan adatokat elhelyezni egy alkalmazásban? Vegyük például az Amazont. Ha mindannyian bemehetnénk az Amazonra, és tetszés szerint változtathatnánk a dolgokat, akkor minden egy fillérbe kerülne, és mindannyiunknak egy háznyi olyan Amazon cuccunk lenne, ami egy fillérbe kerül, ahelyett, hogy egy háznyi olyan Amazon cuccunk lenne, ami több mint egy fillérbe kerül.

A tuple létrehozásának szintaxisa ugyanaz, mint a lista létrehozásának szintaxisa, kivéve, hogy nem használunk szögletes zárójeleket. Zárójeleket kell használnod, például így:

```py
prices = (29.95, 9.98, 4.95, 79.98, 2.95)
```

A előzőleg látott táblázatban a listák használatára tanult technikák és módszerek többsége nem működik a tuplekkkel, mivel a listában lévő valaminek a módosítására szolgálnak, a tupleket pedig nem lehet módosítani. Egy tuple hosszát azonban a `len` segítségével megtudhatjuk, például így:

```py
print(len(prices))
```

A .count() segítségével megnézheted, hogy egy elem hányszor szerepel egy tuple-ban. Például:

```py
print(prices.count(4.95))
```

Az in segítségével megnézheted, hogy egy érték létezik-e egy tuple-ban, mint a következő példakódban:

```py
print(4.95 in prices)
```

Ez `True`-t ad vissza, ha a tuple `4.95`-öt tartalmaz, vagy `False`-t, ha nem.

Ha egy elem létezik a tuple-ban, akkor megkaphatjuk az indexszámát. Ha azonban az elem nem létezik a listában, hibaüzenetet kapunk. Az `in` segítségével először megnézheted, hogy az elem létezik-e, mielőtt az indexszámát lekérdeznéd, majd visszaadhatsz valami értelmetlen értéket, például `-1`-et, ha nem létezik, mint ebben a kódban:

```py
look_for = 12345
if look_for in prices:
    position = prices.index(look_for)
else:    
    position = -1print(position)
```

A tuple elemein végighaladhat a ciklussal, és bármilyen formátumban megjeleníthetjük őket karakterláncok használatával. Például ez a kód minden egyes elemet egy dollárjelet és két számjegyet ad a fillérekhez:

```py
# Loop through and display each item in the tuple.
for price in prices:
    print(f"${price:.2f}")
```

A kód futtatásának kimenete a mintatuplával a következő:

```txt
$29.95
$9.98
$4.95
$79.98
$2.95
```

Nem lehet megváltoztatni egy elem értékét egy tuple-ban ilyen szintaxissal:

```py
prices[1] = 234.56
```

A következő hibaüzenetet kapod: `TypeError: 'tuple' object does not support item assignment.`
Ez az üzenet azt mondja, hogy nem használhatja a hozzárendelési operátort, az =-ot, hogy megváltoztassa a tuple egy elemének értékét, mivel a tuple megváltoztathatatlan, vagyis a tartalma nem változtatható meg.

Minden olyan módszer, amely megváltoztatja, vagy akár csak másolja egy lista adatait, hibát okoz, ha egy tuple-lal próbálja meg. Tehát a `.append()`, `.clear()`, `.copy()`, `.extend()`, `.insert()`, .`pop()`, `.remove()`, `.reverse()` és `.sort()` listamódszerek sikertelenül működnek tuple-okkal. Röviden, a tuple-nek akkor van értelme, ha adatokat akarunk mutatni a felhasználóknak anélkül, hogy bármilyen lehetőséget adnánk nekik az információ megváltoztatására.

## Munka Setekkel

A Python is kínál halmazokat az adatok rendszerezésének eszközeként. A különbség a halmaz és a lista között az, hogy a halmaz elemei nem rendelkeznek meghatározott sorrenddel. Bár a halmazt úgy definiálhatjuk, hogy az elemek egy bizonyos sorrendben vannak, egyik elem sem kap indexszámot a pozíciójának azonosítására.

Egy halmaz definiálásához használj kapcsos zárójeleket, míg listáknál szögletes zárójeleket, tuple-eknél pedig zárójeleket. Itt van például egy halmaz néhány számmal:

```py
sample_set = {1.98, 98.9, 74.95, 2.5, 1, 16.3}
```

A halmazok néhány szempontból hasonlítanak a listákhoz és a tupleökhoz. A `len()` segítségével meghatározhatjuk, hogy hány elem van egy halmazban. Az in segítségével meghatározhatjuk, hogy egy elem benne van-e egy halmazban.

De egy elemet nem kaphatsz meg egy halmazban az indexszáma alapján. A halmazban már szereplő elemet sem tudod megváltoztatni. A halmazban lévő elemek sorrendjét sem tudod megváltoztatni. Tehát nem használhatod a `.sort()` parancsot a halmaz rendezésére, vagy a `.reverse()` parancsot a sorrend megfordítására.

Egyetlen új elemet adhatsz hozzá egy készlethez a `.add()` segítségével, mint a következő példában:

```py
sample_set.add(11.23)
```

A listával ellentétben egy halmaz soha nem tartalmaz egynél több példányt egy értékből. Tehát még ha a 11.23-at többször is hozzáadod a halmazhoz, a halmaz akkor is csak egy példányt fog tartalmazni a 11.23-ból.

A `.update()` segítségével több elemet is hozzáadhatsz egy halmazhoz. De a hozzáadandó elemeket szögletes zárójelben lévő listaként kell definiálni, mint a következő példában:

```py
sample_set.update([88, 123.45, 2.98])
```

Másolhatsz egy halmazt. Mivel azonban a halmaznak nincs meghatározott sorrendje, a másolat megjelenítésekor előfordulhat, hogy az elemek nem ugyanabban a sorrendben vannak, mint az eredeti halmazban, ahogy ez a kód és annak kimenete mutatja:

```py
# Define a set named sample_set.
sample_set = {1.98, 98.9, 74.95, 2.5, 1, 16.3}
# Show the whole set
print(sample_set)
# Make a copy and show the copy.
ss2 = sample_set.copy()
print(ss2)
```

Kimenet:

```txt
{1.98, 98.9, 2.5, 1, 74.95, 16.3}
{16.3, 1.98, 98.9, 2.5, 1, 74.95}
```

A következő példa mutat néhány mintakódot és annak kimenetét. A kód létrehoz egy `sample_set` nevű halmazt, majd különböző `print()` utasításokat használ az információk kiadásához. A következő sor a teljes halmazt megjeleníti a képernyőn:

```py
print(sample_set)
```

Ez a sor 6-ot mutat, mert a készletben hat elem van:

```py
print(len(sample_set))
```

A következő sorban pedig `True` jelenik meg, mivel a `74,95`-ös szám szerepel a `sample_set`ben:

```py
print(74.95 in sample_set)
```

A kódban lévő megjegyzések leírják, hogy mit csinálnak a többi sorban. Figyeljük meg ezt a parancsot a cikluson belül a kód vége felé:

```py
print(f"{price:>6.2f}")
```

```py
# Define a set named sample set.
sample_set = {1.98, 98.9, 74.95, 2.5, 1, 16.3}
# Show the whole set.
print(sample_set)

# Use len to get the length of a set.
print(len(sample_set))

# Use in to determine if the set contains a value.
print(74.95 in sample_set)

# Use add() to add one item to a set.
sample_set.add(11.23)

# Use update to add a [list] to a set.
sample_set.update([88, 123.45, 2.98])

print("\nSample set after .add() and .update()")
print(sample_set)

# Loop through the set and print each item right-aligned and formatted.
print("\nLoop through set and print eac item formatted.")
for price in sample_set:
    print(f"{price:>6.2f}")
```

Kimenet:

```txt
{16.3, 1.98, 98.9, 2.5, 1, 74.95}
6
True

Sample set after .add() and .update()
{1.98, 2.5, 1, 2.98, 74.95, 11.23, 16.3, 88, 98.9, 123.45}

Loop through set and print eac item formatted.
  1.98
  2.50
  1.00
  2.98
 74.95
 11.23
 16.30
 88.00
 98.90
123.45
```

A listák és a tuple-ok a Python két leggyakrabban használt adatszerkezete. Úgy tűnik, a halmazok nem kapnak annyi szerepet, mint a másik kettő, de jó, ha ismerjük őket. A negyedik - és széles körben használt - Python adatszerkezet az adatszótár, amellyel a következő órán ismerkedhetünk meg.