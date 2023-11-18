# 6. tananyag

:::tip 📚 EBBEN A FEJEZETBEN
- Szótárak létrehozása
- Szótárak körbejárásának megismerése
- Szótárak másolása
- Elemek törlése a szótárból
- Többkulcsos szótárak használata
:::

## Adathalmazok átjárása szótárakkal

A szótárak, amelyeket egyes nyelveken asszociatív tömböknek is neveznek, olyanok, mint a listák. De a lista minden egyes elemét nem a listában elfoglalt pozíciója, hanem egy kulcs azonosítja. A kulcsot definiálhatjuk, ami lehet egy karakterlánc vagy egy szám. Csak az számít, hogy a szótár minden egyes eleméhez egyedi legyen.

Hogy megértsük, miért fontos az egyediség, gondoljunk a telefonszámokra, az e-mail címekre és a társadalombiztosítási számokra. 
Ha két vagy több embernek ugyanaz a telefonszáma, akkor amikor valaki hívja ezt a számot, az összes érintett személy megkapja a hívást vagy ha ugyanaz az e-mail címe, akkor mindannyian ugyanazokat az e-mail üzeneteket kapnák meg. 

Ebben az anyagrészben mindent megtudhatsz a Python szótárakról, és arról, hogyan használhatod őket a saját alkalmazásaidban.

### Szótárak megértése

A szótár hasonlít egy listához, azzal a különbséggel, hogy a lista minden egyes eleme egyedi kulccsal rendelkezik. A kulcshoz társított érték lehet szám, karakterlánc, lista, tuple - tulajdonképpen bármi. A szótárra tehát úgy is gondolhatsz, mint egy táblázatra, ahol az első oszlop, az adott elemre egyedi információt tartalmaz, a második oszlop, az érték pedig az adott kulcshoz tartozó, esetleg egyedi információkat. A példában a bal oldali oszlop minden sorhoz egyedi kulcsot tartalmaz. A második oszlop az egyes kulcsokhoz rendelt értéket tartalmazza.


```txt
Key         Value

htanaka   = Haru Tanaka
ppatel    = Priya Patel
zmin      = Zhang Min
hrjackson = Henry Jackson
```
*Egy szótár, amelynek kulcsai a bal oldali oszlopban, értékei pedig a jobb oldali oszlopban találhatók.*

A bal oldali oszlopban egy személy nevének rövidítése látható. Egyes vállalatok ilyen neveket használnak, amikor felhasználói fiókokat és e-mail címeket rendelnek alkalmazottaikhoz.

Az egyes kulcsoknak megfelelő értéknek nem kell stringnek vagy egész számnak lennie. Lehet lista vagy tuple is. Például a lenti ábrán látható szótárban az egyes kulcsok értéke tartalmazza a nevet, egy évet (esetleg a felvétel évét vagy a születési évet), egy számot (például az eltartottak számát), valamint egy Boolean `True` vagy `False` értéket (amely például azt jelezheti, hogy a személynek van-e vállalati mobiltelefonja).

Egyelőre nem számít, hogy az egyes adatok mit képviselnek. Ami számít, az az, hogy minden kulcshoz egy (szögletes zárójelbe tett) lista tartozik, amely négy információt tartalmaz az adott kulcsról. 


```txt
Key         Value

htanaka   = ["Haru Tanaka", 2000, 0, True]
ppatel    = ["Priya Patel, 2015, 1, False]
zmin      = ["Zhang Min", 2017, 0, False]
hrjackson = ["Henry Jackson", 2016, 0, False]
```
*Egy szótár listákkal, értékekkel.*

Egy szótár több különböző kulcsból is állhat, amelyek mindegyike egy-egy adatot képvisel. Például ahelyett, hogy minden egyes elemnek lenne egy sora egy egyedi kulccsal, minden egyes alkalmazottnak saját kis szótárat készíthetünk. Ekkor minden egyes információegységhez rendelhet egy kulcsnevet. A htanaka szótára így a lenti ábrán látható módon nézhet ki.

```txt
'htanaka'   =   'full_name'         =   'Haru Tanaka'
                'year_hired'        =    2000
                'dependents'        =       0
                'has_company_cell'  =    true  
```
*Egy munkavállaló szótára.*

Egy másik alkalmazott szótára ugyanazokkal a kulcsnevekkel rendelkezhet: `full_name`, `year_hired`, `dependents` és `has_company_cell`, de minden egyes kulcsnak más értéke van, ahogy azt lent most láthatod.

A Pythonban gyakori, hogy minden egyes szótári bejegyzésnek több kulcsa van, mivel a nyelv megkönnyíti a kívánt konkrét adatelem elkülönítését az `object.key` szintaxis segítségével, például így: 

```py
ppatel.full_name = 'Priya Patel'
ppatel.year_hired = 2015
ppatel,dependents = 1
ppatel.has_company_cell = True
```

A kulcsnév sokkal leíróbb, mint a pozíció alapú index használata, ahogy az alábbi példában is látható.

```py
ppatel[0] = 'Priya Patel'
ppatel[1] = 2015
ppatel[2] = 1
ppatel[3]=True
```

### Szótár létrehozása

A szótár létrehozásának kódja a következő alapvető szintaxist követi: 

```py
name = {key:value, key:value, key:value, key:value, ...}
```

A név egy általad kitalált név, és általában azt írja le, hogy a kulcs-érték párok kire vagy mire vonatkoznak. A kulcs:érték párokat kapcsos zárójelek közé zárjuk. A kulcs általában egy idézőjelek közé zárt karakterlánc, de használhatunk helyette egész számokat is.

A kettőspont `(:)` elválasztja a kulcs nevét a hozzá rendelt értéktől. Az érték az, amit az adott kulcsnévhez tárolni akarunk, és lehet szám, karakterlánc, lista - nagyjából bármi. Az ellipszis `(...)` csak azt jelenti, hogy annyi kulcs-érték párod lehet, ahányat csak akarsz.

Csak ne feledd, hogy a kulcs:érték párokat vesszővel kell elválasztani, ahogy a szintaxis példában látható.

```py
name = {    
    key:value,    
    key:value,    
    key:value,    
    key:value,
    ...
}
```

Figyeljük meg, hogy létrehoztunk egy people nevű szótárat, amely több kulcs:érték párt tartalmaz, mindegyiket vesszővel elválasztva. A kulcsok és az értékek karakterláncok, ezért idézőjelekbe vannak zárva, és minden kulcsot kettősponttal választunk el az értékétől. Fontos, hogy mindezek jól legyenek írva, különben a kód nem fog működni - igen, akár egyetlen hiányzó, rosszul elhelyezett vagy elgépelt idézőjel, kettőspont, vessző vagy görbe zárójel is elronthatja az egészet:

```py
people = {    
    'htanaka': 'Haru Tanaka',    
    'ppatel': 'Priya Patel',    
    'bagarcia': 'Benjamin Alberto Garcia',    
    'zmin': 'Zhang Min',    
    'afarooqi': 'Ayesha Farooqi',    
    'hajackson': 'Hanna Jackson',    
    'papatel': 'Pratyush Aarav Patel',    
    'hrjackson': 'Henry Jackson'
}
```
### Hozzáférés a szótár adataihoz

Miután hozzáadtad az adatokat, többféleképpen dolgozhatsz velük. A `print(people)` - azaz a `print()` függvény használatával, a szótár nevével a zárójelben - a teljes szótár másolatát kapod meg, a következőképpen:

```py
print(people)

{'htanaka': 'Haru Tanaka', 'ppatel': 'Priya Patel', 'bagarcia': 'Benjamin Alberto Garcia', 'zmin': 'Zhang Min', 'afarooqi': 'Ayesha Farooqi', 'hajackson': 'Hanna Jackson', 'papatel': 'Pratyush Aarav Patel', 'hrjackson': 'Henry Jackson'}
```

Általában nem erre használjuk. Sokkal inkább arra, hogy egy adott elemet keressünk a szótárban. Ebben az esetben használd ezt a szintaxist:

```py
dictionaryname[key]
```

ahol a `dictionaryname` a szótár neve, a `key` pedig a keresett kulcsérték. Ha például a `zmin` kulcs értékét szeretnéd megtudni, akkor a következő parancsot kell beírnod:

```py
print(people['zmin'])
```

Amikor ezt végrehajtod, a Python visszaadja az adott személy értékét - ebben a példában a `zmin` teljes nevét. A lenti kódrészletben ezt a kimenetet mutatja a kód futtatása után.

```py
# Make a data dictionary named people
people = {    
    'htanaka': 'Haru Tanaka',    
    'ppatel': 'Priya Patel',    
    'bagarcia': 'Benjamin Alberto Garcia',    
    'zmin': 'Zhang Min',    
    'afarooqi': 'Ayesha Farooqi',    
    'hajackson': 'Hanna Jackson',    
    'papatel': 'Pratyush Aarav Patel',    
    'hrjackson': 'Henry Jackson'
}

print(people['zmin'])
```

Vegyük észre, hogy a kódban a `zmin` idézőjelben van, mert ez egy karakterlánc. Használhat helyette változónevet is, amennyiben az egy karakterláncot tartalmaz. 

Vegyük például a következő két kódsort. Az első létrehoz egy személy nevű változót, és a `'zmin'` karakterláncot helyezi ebbe a változóba. A következő sor nem igényel idézőjeleket, mivel a `person` egy változó neve:

```py
person = 'zmin'
print(people[person])
```

Mit gondolsz, mi történne, ha a következő kódot hajtanád végre?

```py
person = 'hrjackson'
print(people[person])
```

A `'hrjackson'` kulcshoz tartozó név (érték) Henry Jackson.

Mi lenne, ha ezt a kódrészletet futtatnád?

```py
person = 'schmeedledorp'
print(people[person])
```
A lenti kódrészlet mutatja, hogy mi történne. Hibát kapunk, mert a `people` szótárban semmi sem rendelkezik a `'schmeedledorp'` kulcsértékkel.

```py
# Make a data dictionary named people
people = {    
    'htanaka': 'Haru Tanaka',    
    'ppatel': 'Priya Patel',    
    'bagarcia': 'Benjamin Alberto Garcia',    
    'zmin': 'Zhang Min',    
    'afarooqi': 'Ayesha Farooqi',    
    'hajackson': 'Hanna Jackson',    
    'papatel': 'Pratyush Aarav Patel',    
    'hrjackson': 'Henry Jackson'
}

# Look for a person
person = 'schmeedledorp'
print(people[person])
```

Kimenet:

```txt
Traceback (most recent call last):
  File "/Python/person.py", line 15, in <module>
    print(people[person])
KeyError: 'schmeedledorp'
```

Python így mondja meg, hogy nincs `schmeedledorp`.


### A szótár hosszának meghatározása

A szótárban lévő elemek számát tekintjük a szótár hosszának. A listákhoz hasonlóan a `len()` utasítással meghatározhatjuk a szótár hosszát. A szintaxis a következő:

```py
len(dictionaryname)
```

Mint mindig, a `dictionaryname`-t helyettesítse az ellenőrizni kívánt szótár nevével. A következő kód például létrehoz egy szótárat, majd annak hosszát a `howmany` változóban tárolja:

```py
people = {
    "htanaka": "Haru Tanaka",
    "ppatel": "Priya Patel",
    "bagarcia": "Benjamin Alberto Garcia",
    "zmin": "Zhang Min",
    "afarooqi": "Ayesha Farooqi",
    "hajackson": "Hanna Jackson",
    "papatel": "Pratyush Aarav Patel",
    "hrjackson": "Henry Jackson",
}

# Count the number of key:value pairs and put in a variable.
howmany = len(people)
# Show how many.
print(howmany)
```

Végrehajtásakor a `print` utasítás 8-at mutat, a `howmany` változó értékét, amelyet a szótárban lévő kulcs-érték párok száma határoz meg.

Amint azt már kitalálhattad, egy üres szótár, amely nem tartalmaz kulcs-érték párokat, 0 hosszúságú.

### Nézzük meg, hogy egy kulcs szerepel-e egy szótárban

Az `in` kulcsszóval megnézheti, hogy létezik-e kulcs. Ha a kulcs létezik, az `in` **True** értéket ad vissza. Ha a kulcs nem létezik, az `in` **False**-t ad vissza. A lenti kód egy egyszerű példát mutat két `print()` utasítással. Az első ellenőrzi, hogy a `hajackson` létezik-e a szótárban. A második azt ellenőrzi, hogy `schmeedledorp` létezik-e a szótárban.
Mint látható, az első `print()` utasítás **True**-t mutat, mert `hajackson` szerepel a szótárban. A második **False**-t ad vissza, mert a `schmeedledorp` nincs a szótárban.

```py
people = {
    "htanaka": "Haru Tanaka",
    "ppatel": "Priya Patel",
    "bagarcia": "Benjamin Alberto Garcia",
    "zmin": "Zhang Min",
    "afarooqi": "Ayesha Farooqi",
    "hajackson": "Hanna Jackson",
    "papatel": "Pratyush Aarav Patel",
    "hrjackson": "Henry Jackson",
}

# Is there an hajackson in the people dictionary?
print('hajackson' in people)
# Is there an schmeedledrop int the people dictionary?
print('schmeedledrop' in people)
```

Kimenet:
```txt
True
False
```

### Szótárban lévő adatok lekérdezése a `get()` segítségével

Kissé kellemetlen, hogy a program összeomlik, amikor olyasmit keresünk, ami nincs benne a szótárban. Elegánsabb módja az ilyen helyzet kezelésének, ha a szótár `.get()` metódusát használjuk. A szintaxis a következő:

```py
dictionaryname.get(key)
```

A `dictionaryname` helyébe a keresett szótár neve lép. A kulcsot helyettesítse a keresett dologgal. Vedd figyelembe, hogy a `get()` zárójeleket használ, nem pedig szögletes zárójeleket. Ha olyasmit keresel, ami a szótárban van, például a következőt, ugyanazt az eredményt kapod, mintha szögletes zárójeleket használnál:

```py
# Look for a person.
person = 'bagarcia'
print(people.get(person))
```

A `.get()` funkciót az különbözteti meg attól, hogy mi történik, ha nem létező névre keresünk. Nem kapsz hibaüzenetet, és a program nem omlik össze. Ehelyett a `get()` kecsesen visszaadja a `None` szót, hogy tudassa, hogy nincs `schmeedledorp` nevű személy a `people` szótárban, ahogy a kódban látható.

Két értéket adhatunk át a `get()`-nek, a második érték az, amit a `get()` akkor adjon vissza, ha nem találja meg, amit keresünk. A következő kódsorban például ismét a `schmeedledorp`-ot keressük. De ezúttal, ha a kód nem találja meg ezt a személyt, akkor nem a `None`, hanem a **Unknown to this dictionary** üzenetet jeleníti meg:

```py
print(people.get('schmeedledorp', 'Unknown to this dictionary'))
```
Pythonban szebben fogalmazva: nincs `schmeedledorp`.

```py
people = {
    "htanaka": "Haru Tanaka",
    "ppatel": "Priya Patel",
    "bagarcia": "Benjamin Alberto Garcia",
    "zmin": "Zhang Min",
    "afarooqi": "Ayesha Farooqi",
    "hajackson": "Hanna Jackson",
    "papatel": "Pratyush Aarav Patel",
    "hrjackson": "Henry Jackson",
}

# Look for a person
person = 'schmeedledorp'
print(people.get(person))
```

Kimenet:

```txt
None
```

### Egy kulcs értékének módosítása

A szótárak `mutable` - változtathatóak, ami azt jelenti, hogy a szótár tartalmát kódból megváltoztathatod. A szintaxis egyszerűen a következő:

```py
dictionaryname[key] = newvalue
```

A `dictionaryname`-t a szótár nevével, a `key`-t az elemet azonosító kulccsal, a `newvalue`-t pedig azzal, amit az új értéknek szeretnénk adni.


Például feltételezzük, hogy **Hanna Jackson** férjhez megy, és a nevét **Hanna Jackson-Smith**-re változtatja. Ugyanazt a kulcsot szeretné megtartani, de az értéket meg akarja változtatni. A `people['hajackson'] = "Hanna Jackson-Smith"` sor a változást végrehajtja. A sor alatti `print()` utasítás a kódsor végrehajtása után mutatja a `hajackson` értékét. Amint az látható, a név valóban **Hanna Jackson-Smith**-re változott.

```py
# Print hajackson's current value.
print(people['hajackson'])

# Change the value of the hajackson key.
people['hajackson'] = "Hanna Jackson-Smith"

# Print the hajackson key to verify that the value has changed.
print(people['hajackson'])
```
Egy szótárban lévő kulcshoz tartozó érték megváltoztatása.

Kimenet:

```txt
Hanna Jackson
Hanna Jackson-Smith
```

:::tip 💭
A való életben a szótárban lévő adatokat valószínűleg valamilyen külső fájlban is tárolnák, hogy állandóak legyenek. További kódra lenne szükség ahhoz, hogy a szótárváltozásokat ebbe a külső fájlba mentsük. De ezeket az alapokat meg kell tanulnod, mielőtt mindezzel foglalkoznál, úgyhogy egyelőre csak haladjunk a szótárakkal.
:::

### Szótárban lévő adatok hozzáadása vagy módosítása

A szótár `update()` metódusával új elemet adhatsz hozzá egy szótárhoz, vagy megváltoztathatod egy aktuális kulcs értékét. A szintaxis a következő:

```py
dictionaryname.update(key, value)
```
A `dictionaryname` helyett a szótár nevét adja meg. A `key`-t helyettesítse a hozzáadni vagy módosítani kívánt elem kulcsával. Ha a megadott kulcs nem létezik a szótárban, akkor új elemként kerül hozzáadásra a megadott értékkel. Ha a megadott kulcs létezik, a rendszer nem ad hozzá semmit. A kulcs értéke az Ön által megadott értékre módosul.

Vegyük például a következő Python-kódot, amely létrehoz egy `people` nevű szótárat, és két ember nevét helyezi el benne:

```py
# Make a data dictionary named people.
people = {    
    'papatel': 'Pratyush Aarav Patel',
    'hrjackson': 'Henry Jackson'    
} 

# Change the value of the hrjackson key.
people.update({'hrjackson' : 'Henrietta Jackson'})
print(people) 

# Update the dictionary with a new key:value pair.
people.update({'wwiggins' : 'Wanda Wiggins'})
```
Az első sor frissíti `hrjackson` értékét _Henry Jackson_-ról _Henrietta Jackson_-ra változtatja, mivel a `hrjackson` kulcs már létezik az szótárban:

```py
people.update({'hrjackson' : 'Henrietta Jackson'})
```
A második `update()` a következő:

```py
people.update({'wwiggins' : 'Wanda Wiggins'})
```
A szótárban nincs `wwiggins` kulcs, így az `update()` nem tudja megváltoztatni a `wwiggins` nevét. Ehelyett a sor egy új kulcs-érték párt ad hozzá a szótárhoz, amelynek kulcsa `wwigins`, értéke pedig __Wanda Wiggins__.

A kód nem határozza meg, hogy az értéket megváltoztatjuk vagy hozzáadjuk, mert a döntés automatikusan történik. A szótár minden kulcsának egyedinek kell lennie. 

Nem lehet két vagy több sorban ugyanaz a kulcs. Ezért a `update()` parancs végrehajtásakor a kód először ellenőrzi, hogy létezik-e a kulcs. Ha igen, akkor csak az adott kulcs értéke módosul, ilyenkor semmi új nem kerül hozzá. Ha a kulcs nem létezik a szótárban, akkor nincs mit módosítani, így az új kulcs-érték kerül hozzá a szótárhoz. Ez a folyamat automatikus, és a döntés, hogy melyik műveletet kell végrehajtani, egyszerű:

- Ha a kulcs már létezik a szótárban, az értéke frissül, mivel a szótárban nem lehet két elemnek ugyanaz a kulcsa.

- Ha a kulcs még nem létezik, a kulcs-érték pár hozzáadásra kerül, mert a szótárban még semmi sem rendelkezik ezzel a kulccsal, így az egyetlen lehetőség a hozzáadás.

A kód futtatása után a szótár három elemet tartalmaz: `paptel`, `hrjackson` (az új névvel) és `wwiggins`. A következő sorok hozzáadása a kód végéhez megjeleníti a szótárban lévő összes adatot: 

```py
# Show what's in the data dictionary now.

for person in people.keys():    
    print(person + " = " + people[person])
```

Ha hozzáadjuk ezt a kódot, és újra lefuttatja, a következő kimenetet kapjuk, amely a program végén lévő szótár teljes tartalmát mutatja:

```txt
papatel = Pratyush Aarav Patel
hrjackson = Henrietta Jackson
wwiggins = Wanda Wiggins
```

Ahogyan azt már láthattad, a szótárakon ugyanúgy végighaladhatsz, mint a listákon, tuplekön és halmazokon. De a szótárakkal néhány extra dolgot is csinálhatsz, ezért most ezeket nézzük meg.

### A szótárak körbejárása

A szótár minden egyes elemén ugyanúgy végighaladhatsz, mint a listákon és tuplekön, de van néhány extra lehetőséged. Ha a `for` ciklusban csak a szótár nevét adja meg, akkor az összes kulcsot megkapja, a következőképpen:

```py
for person in people:
print(person) 
```

Kimenet:

```txt
htanaka
ppatel
bagarcia
zmin
afarooqi
hajackson
papatel
hrjackson
```

Ha az egyes elemek értékét szeretnéd látni, akkor a `for` ciklus maradjon ugyanaz, de `print()` utasítás a `dictionaryname[key]` szótárnevet használja, ahol a `dictionaryname` a szótár neve - példánkban `people`, a `key` pedig az a név, amelyet a `for` után használsz a ciklusban - a következő példában `person`.

```py
for person in people:    
    print(people[person])
```

Kimenet:

```txt
Haru Tanaka
Priya Patel
Benjamin Alberto Garcia
Zhang Min
Ayesha Farooqi
Hanna Jackson
Pratyush Aarav Patel
Henry Jackson
```

Az összes nevet egy kissé eltérő szintaxissal is megkaphatjuk a for ciklusban: A szótár nevéhez hozzáadjuk a `.values()` szót, mint a következőkben. Ezután a cikluson belül csak a változó nevét (`person`) írhatjuk ki. A kimenet minden egyes személy teljes neve lesz, mint az előző cikluspéldában.

```py
for person in people.values():
    print(person)
```

Végül, a `for` ciklusban a szótár neve után a `.items()` használatával egyszerre végighaladhatsz a kulcsokon és az értékeken. De a `for` után két változóra is szükséged lesz, az egyik a kulcsra, a másik az értékre való hivatkozáshoz. Ha azt szeretnéd, hogy a kód mindkét változót megjelenítse, miközben a szótáron végighalad, akkor ezeket a neveket a `print` zárójelén belül kell használnia.

A lenti kódban látható ciklus például két változó, a `key` és a `value` - _bár lehet x és y vagy bármi más is_ - nevét használja a `people.items()` ciklus végigfutásához. 

A `print` utasítás a ciklus minden egyes lefutásakor megjeleníti a kulcsot és az értéket is. A `print()` utasításban egy  - _idézőjelekbe zárt_ -  egyenlőségjel is szerepel, hogy elválassza a kulcsot az értéktől. Amint a kimeneten látható, az összes kulcs listáját kapjuk, amelyet egy egyenlőségjel és a kulcshoz rendelt érték követ.

```py
people = {
    "htanaka": "Haru Tanaka",
    "ppatel": "Priya Patel",
    "bagarcia": "Benjamin Alberto Garcia",
    "zmin": "Zhang Min",
    "afarooqi": "Ayesha Farooqi",
    "hajackson": "Hanna Jackson",
    "papatel": "Pratyush Aarav Patel",
    "hrjackson": "Henry Jackson",
}

# Loop through items to get the key and the value.
for key, value in people.items():
    # Show the key and value with = in between.
    print(key, "=", value)
```

Kiemenet:

```txt
htanaka = Haru Tanaka
ppatel = Priya Patel
bagarcia = Benjamin Alberto Garcia
zmin = Zhang Min
afarooqi = Ayesha Farooqi
hajackson = Hanna Jackson
papatel = Pratyush Aarav Patel
hrjackson = Henry Jackson
```

### Szótárak metódusai

Ha folyamatosan figyeltél akkor, észrevehetted, hogy az szótárakra vonatkozó módszerek némelyike hasonlóan néz ki a listákra, tuple-okra és halmazokra vonatkozó metódusokhoz. Ezért talán most itt az ideje, hogy a táblázatban felsoroljuk a szótárak által kínált összes metódust. Néhányat már láthattunk használni ebben a részben. A többire kicsit később térünk rá.

|    Metódus   |                                                           Mit csinál                                                          |
|:------------:|:-----------------------------------------------------------------------------------------------------------------------------:|
|    clear()   |                                  Kiüríti a szótárat az összes kulcs és érték eltávolításával.                                 |
|    copy()    |                                                 Visszaadja a szótár másolatát.                                                |
|  fromkeys()  |                        A szótár új másolatát adja vissza, de csak a megadott kulcsokkal és értékekkel.                        |
|     get()    |                                Visszaadja a megadott kulcs értékét, vagy None, ha nem létezik.                                |
|    items()   |                           Visszaadja az elemek listáját minden kulcs-érték párhoz tartozó tupleként.                          |
|    keys()    |                                        A szótár összes kulcsának listáját adja vissza.                                        |
|     pop()    |                        A kulcs által megadott elemet eltávolítja a szótárból, és visszaadja az értékét.                       |
|   popitem()  |                                            Eltávolítja az utolsó kulcs-érték párt.                                            |
| setdefault() |        Visszaadja a megadott kulcs értékét. Ha a kulcs nem létezik, beilleszti a megadott értékkel rendelkező kulcsot.        |
|   update()   | Egy meglévő kulcs értékének frissítése, vagy új kulcs-érték pár hozzáadása, ha a megadott kulcs még nem szerepel a szótárban. |
|   values()   |                                       Visszaadja a szótárban lévő összes érték listáját.                                      |

### Szótár másolása

Ha egy szótárról másolatot kell készítenie a munkához, használja ezt a szintaxist:

```py
newdictionaryname = dictionaryname.copy()
```

Helyettesítse a `newdictionaryname` szótárnevet azzal, amit az új szótárnak szeretne adni. Cserélje ki a `dictionaryname` szótárnevet annak a meglévő szótárnak a nevével, amelyet másolni szeretne.

Lenti kód egy egyszerű példát mutat, amelyben létrehoztunk egy `people` nevű szótárat, majd létrehoztunk egy `peeps2` nevű szótárat a `people` szótár másolataként. Az egyes szótárak tartalmának kinyomtatása azt mutatja, hogy azok megegyeznek.

```py
# Define a dictionary named people.
people = {
    'htanaka' : 'Haru Tanaka',
    'zmin' : 'Zhang Min'
    'afarooqi' : 'Ayesha Farooqi',
}

# Make a copy of the people dictionary and put it in peeps2.
peeps2 = people.copy()

# Show what's in both dictionaries
print(people)
print(peeps2)
```

### Szótárelemek törlése

Az adatokat többféleképpen is eltávolíthatjuk az szótárakból. A `del` kulcsszóval - _a delete rövidítése_ - bármely elemet eltávolíthatunk a kulcsa alapján. A szintaxis a következő: 

```py
del dictionaryname[key]
```

A következő kód például létrehoz egy `people` nevű szótárat.
Ezután a `del people["zmin"]` segítségével eltávolítja azt az elemet, amelynek kulcsa `zmin`:

```py
# Define a dictionary named people.
people = {
    "htanaka": "Haru Tanaka",
    "zmin": "Zhang Min",
    "afarooqi": "Ayesha Farooqi"
}
# Show original people dictionary.
print(people)
# Remove zmin from the dictionary.
del people["zmin"]
# Show what's in people now.
print(people)
```

A szótár tartalmának kinyomtatása azt mutatja, hogy a `zmin` már nem szerepel a szótárban:

```txt
{'htanaka': 'Haru Tanaka', 'zmin': 'Zhang Min', 'afarooqi': 'Ayesha Farooqi'}

{'htanaka': 'Haru Tanaka', 'afarooqi': 'Ayesha Farooqi'}
```

Ha a del kulcsszóval elfelejtettél egy kulcsot megadni, és csak a szótár nevét adod meg, akkor a teljes szótár törlődik, még a neve is. Tegyük fel például, hogy az előző kódban a `del people["zmin"]` helyett a `del people` parancsot hajtottad végre. A második `print(people)` kimenete hiba lenne, mint az alábbiakban, mivel a `people` szótár törlése után már nem létezik, és tartalma nem jeleníthető meg:

```txt
{'htanaka': 'Haru Tanaka', 'zmin': 'Zhang Min', 'afarooqi': 'Ayesha Farooqi'}
Traceback (most recent call last):
  File "/Python/task3.py", line 12, in <module>
    print(people)
NameError: name 'people' is not defined
```

Ha az összes kulcs-értékpárt el szeretné távolítani egy szótárból anélkül, hogy a teljes szótárat törölné, használja a `clear` módszert ezzel a szintaxissal:

```py
dictionaryname.clear()
```
A következő kód létrehoz egy `people` nevű szótárat, elhelyez benne néhány kulcs-érték párt, majd kiírja a szótárat. Ezután a `people.clear()` kiüríti az összes adatot:

```py
# Define a dictionary named people.
people = {
    "htanaka": "Haru Tanaka",
    "zmin": "Zhang Min",
    "afarooqi": "Ayesha Farooqi",
}
# Show original people dictionary.
print(people)  
# Remove all data from the dictionary.
people.clear()
#Show what's in people now.
print(people)
```

A kód futtatásának eredménye azt mutatja, hogy a `people` szótár kezdetben három kulcs:érték párt tartalmaz. Miután a `people.clear()` használatával törölte a `people` szótárat, a kiírás `{}` értéket jelenít meg, ami a Python módszere arra, hogy közölje, hogy a szótár üres.

```py
{'htanaka': 'Haru Tanaka', 'zmin': 'Zhang Min', 'afarooqi': 'Ayesha Farooqi'}
{}
```

A `pop()` metódus egy másik módot kínál az adatok eltávolítására az szótárból. A `pop()` metódus valójában két dolgot tesz:

- Ha a `pop()` metódus eredményét egy változóban tároljuk, akkor ez a változó kapja meg a eltávolított kulcs értékét.

- Függetlenül attól, hogy a `pop()` metódus eredményét egy változóban tárolja-e, a megadott kulcsot eltávolítja a szótárból.

A következő kód egy olyan példát mutat, ahol először a teljes szótár látható. 

Ezután az `adios = people.pop("zmin")` parancs végrehajtása következik, amely a `zmin` kulcs értékét az `adios` nevű változóba helyezi. 

Ha kiírjuk az `adios` változót, így láthatjuk, hogy az tartalmazza `Zhang Min`-t, a `zmin` kulcs értékét. A teljes `people` szótár újbóli kiíratása bizonyítja, hogy a `zmin` ki lett véve a szótárból.

```py
# Define a dictionary named people.
people = {
    "htanaka": "Haru Tanaka",
    "zmin": "Zhang Min",
    "afarooqi": "Ayesha Farooqi",
}
# Show original people dictionary.
print(people)

# Pop zmin from the dictionary, store its value in adios variable.
adios = people.pop("zmin")

# Print the contents of adios and people.
print(adios)
print(people)
```

Kimenet:

```txt
{'htanaka': 'Haru Tanaka', 'zmin': 'Zhang Min', 'afarooqi': 'Ayesha Farooqi'}
Zhang Min
{'htanaka': 'Haru Tanaka', 'afarooqi': 'Ayesha Farooqi'}
```

Az szótárak a `pop()` egy olyan változatát kínálják, amely ezt a szintaxist használja:

```py
dictionaryname = popitem()
```

Ez a szintaxis azért trükkös, mert a Python néhány korábbi verziójában véletlenszerűen távolított el egy elemet. Ez furcsa, hacsak nem egy játékot vagy valamit írsz, és nem akarsz véletlenszerűen eltávolítani dolgokat. 

De a Python 3.7-es verziójától kezdve a `popitem()` mindig az utolsó kulcs-érték párt távolítja el.

Ha a `popitem` eredményét egy változóban tárolnád, nem kapod meg az adott elem értékét, ami eltér a `pop()` működésétől.

Ehelyett megkapod a kulcsot és az értékét is. A szótár már nem tartalmazza ezt a kulcs-érték párt. Más szóval, fenti kódban az `adios = people.pop("zmin")` helyett `adios = people.popitem()` használjuk, a kimenet a következő lesz:

```py
{'htanaka': 'Haru Tanaka', 'zmin': 'Zhang Min', 'afarooqi': 'Ayesha Farooqi'}
('afarooqi', 'Ayesha Farooqi')
{'htanaka': 'Haru Tanaka', 'zmin': 'Zhang Min'}
```

### Többkulcsos szótárakkal való játék

Eddig egy olyan szótárral dolgoztál, amelynek minden kulcsához - _a személy nevének rövidítése_ - egy érték - _egy személy neve_ - tartozik. De nem szokatlan, hogy egy szótárban egy adathoz több kulcs-érték pár is tartozik.

Tegyük fel például, hogy a személy teljes nevének ismerete nem elegendő. Azt is tudni szeretné, hogy az adott személyt milyen évben vették fel, milyen születési dátummal rendelkezik, és hogy az adott alkalmazott kapott-e vállalati laptopot. A szótár egy személyre vonatkozóan így nézhet ki:

```py
employee = {    
    'name': 'Haru Tanaka',    
    'year_hired': 2005,    
    'dob': '11/23/1987',    
    'has_laptop': False
}
```

Vagy tegyük fel, hogy szükséged van egy szótárra az általad forgalmazott termékekről. Minden terméknek tudni szeretnénk a nevét, az egységárát, azt, hogy adóköteles-e vagy sem, és hogy jelenleg hány darab van belőle raktáron. A szótár valahogy így nézhet ki - _egy termék esetében_:

```py
product = {    
    'name': 'Ray-Ban Wayfarer Sunglasses',
    'unit_price': 112.99,
    'taxable': True,
    'in_stock': 10
}
```

A kulcs értéke lehet lista, tuple vagy halmaz, nem kell egyetlen értéknek lennie. Például a napszemüveg termék esetében lehet, hogy két modellt kínál, a feketét és a zöldet. 

Hozzáadhatsz egy színek vagy modell kulcsot, és az elemeket vesszővel elválasztott listaként szögletes zárójelben felsorolhatja, például így:

```py
product = {    
    'name': 'Ray-Ban Wayfarer Sunglasses',    
    'unit_price': 112.99,    
    'taxable': True,    
    'in_stock': 10,    
    'models': ['Black', 'Green']
}
```

Ezután nézzük meg, hogyan jeleníthetjük meg a szótár adatait. Az egyszerű `dictionaryname[key]` szintaxissal csak az egyes kulcsok értékét nyomtathatjuk ki. Például, az utolsó termék példát használva, ennek a kódnak a kimenete

```py
print(product["name"])
print(product["unit_price"])
print(product["taxable"])
print(product["in_stock"])
print(product["models"])
```

a következő lenne:

```txt
Ray-Ban Wayfarer Sunglasses
112.99
True
10
['Black', 'Green']
```

Lehetne még bonyolultabb is, ha minden egyes `print` utasításhoz leírást fűzne, amelyet egy vessző és a kód követ. A listán végighaladva minden egyes modellt külön sorban is kiírathatnánk. Az adatok formázásához pedig használhatnánk f-stringet. Itt van például az előző `print()` utasítások egy változata:

```py
product = {
    "name": "Ray-Ban Wayfarer Sunglasses",
    "unit_price": 112.99,
    "taxable": True,
    "in_stock": 10,
    "models": ["Black", "Green"],
}
print("Name:    ", product["name"])
print("Price:   ", f"${product['unit_price']:.2f}")
print("Taxable: ", product["taxable"])
print("In Stock:", product["in_stock"])
print("Models:")

for model in product['models']:
    print(" " * 10 + model)
```

Kimenet:

```txt
Name:     Ray-Ban Wayfarer Sunglasses
Price:    $112.99
Taxable:  True
In Stock: 10
Models:
          Black
          Green
```


:::danger ❗️
A `" " * 10` az utolsó kódsorban azt jelenti, hogy tízszer egy szóköz `(" ")` kiírása. Más szóval, tíz szóközzel beljebb tagolva. 

Ha netán nem egy szóközt teszel az idézőjelek közé, akkor nem kapsz 10 darab szóközt. 10-et fogsz kapni abból, ami az idézőjelek között van, ami azt is jelentheti, hogy nem kapsz semmit, ha nem teszel semmit az idézőjelek közé.
:::

### A rejtélyes `fromkeys()` és `setdefault()` metódusok használata

A Pythonban a szótárak két metódust kínálnak, a `fromkeys()` és a `setdefault()` metódusokat, amelyek sok fejvakarást okoznak a Python-tanulók körében - és jogosan, mert nem könnyű gyakorlati alkalmazásokat találni a használatukra. De megpróbálkozunk vele, és legalább megmutatjuk, mire számíthatsz, ha valaha is használod ezeket a metódusokat a kódodban.

A `fromkeys()` metódus ezt a szintaxist használja:

```py
newdictionaryname = dict.fromkeys(iterable[,value])
```

Nem kell, hogy olyan általános név legyen, mint a `product`. Lehet valami, ami egyértelműen azonosítja a terméket, például egy **UPC (Universal Product Code - univerzális termékkód)** vagy egy **SKU (stock-keeping unit - raktárkészlet-nyilvántartási egység)**, amely az Ön vállalkozására jellemző.

Az `iterable` részt cserélje ki bármilyen iterálhatóra - _vagyis valamire, amin a kód végig tud menni_ - egy egyszerű lista is megteszi. A `value` rész opcionális. Ha kihagyjuk, akkor a szótár minden kulcsának értéke `None` lesz, ami egyszerűen a Python kifejezése annak, hogy a szótárban még nem rendeltek értéket ehhez a kulcshoz.

A következő példában létrehoztunk egy `DWC001` nevű szótárat - _ez tartalmazza a készletünkben lévő termék SKU-ját_. Adtunk neki egy listát a kulcsnevekből, szögletes zárójelekbe zárva és vesszőkkel elválasztva, ami egy Python számára megfelelően definiált listává teszi. 
Értéknek nem adtunk meg semmit. A kód ezután kiírja az új szótárat. Mint látható, a kód utolsó sora kiírja a szótárat, amely a megadott kulcsneveket tartalmazza, és minden kulcs értéke `None`.

```py
DWC001 = dict.fromkeys(['name', 'unit_price', 'taxable', 'in_stock', 'models'])
print(DWC001)
```
Kimenet:
```txt
{'name': None, 'unit_price': None, 'taxable': None, 'in_stock': None, 'models': None}
```
Most tegyük fel, hogy nem akarjuk beírni ezeket a kulcsokat. Csak ugyanazokat a kulcsokat szeretnénk használni, amelyeket már más szótárakban is használunk. Ebben az esetben használhatjuk a `dictionary.keys()` parancsot a kulcsnevek iterálható listájához, amennyiben a `dictionary` egy másik, a programban létező szótárra hivatkozik.

A következő kódban például létrehoztunk egy termék nevű szótárat, amelynek van néhány kulcsneve, de az értékeknél nincs semmi konkrétum. Ezután a `DWC001 = dict.fromkeys(product.keys())` használatával létrehoztunk egy `DWC001` nevű szótárat, amelynek ugyanazok a kulcsai, mint az általános `product` szótárnak. A `dict.fromkeys(product.keys())` sorban nem adtunk meg értékeket, így az új szótárban lévő kulcsok értékei `None` értéket kapnak.

```py
# Create a generic dictionary for products named product.
product = {
    "name": "",
    "unit_price": 0,
    "taxable": True,
    "in_stock": 0,
    "models": []
}
# Create a dictionary named DWC001 that has the same keys as product.
DWC001 = dict.fromkeys(product.keys())
# Show what's in the new dictionary.
print(DWC001)
```

Az utolsó `print()` utasítás megmutatja, hogy mi van az új szótárban. Láthatjuk, hogy az összes kulcs ugyanaz, mint a termék szótárban, és minden érték `None` értékre van állítva.

```txt
{'name': None, 'unit_price': None, 'taxable': None, 'in_stock': None, 'models': None}
```

A `.setdefault()` értékkel új kulcsot adhatsz hozzá egy szótárhoz, egy előre meghatározott értékkel.

A `.setdefault()` azonban csak új kulcsot és értéket ad hozzá, nem változtatja meg egy meglévő kulcs értékét, még akkor sem, ha a kulcs értéke `None`. Így utólag jól jöhet, ha más szótárakat definiálsz, majd később egy másik kulcs:érték párost csak olyan szótárakhoz akarsz hozzáadni, amelyekben még nincs ilyen kulcs.

A lenti kód egy olyan példát mutat, amelyben a `DWC001` szótárat a termék szótárral azonos kulcsok használatával hoztuk létre. A szótár létrehozása után a `setdefault('taxable', True)` hozzáad egy `taxable` nevű kulcsot, és annak értékét `True`-ra állítja - de csak akkor, ha a szótárban még nincs `taxable` nevű kulcs. Hozzáad egy `reorder_point` nevű kulcsot is, és annak értékét `10`-re állítja, de szintén csak akkor, ha ez a kulcs még nem létezik. 

```py
# Create a generic dictionary for products named product.
product = {
    "name": "",
    "unit_price": 0,
    "taxable": True,
    "in_stock": 0,
    "models": []
}
# Create a dictionary for product SKU # DWC001
DWC001 = dict.fromkeys(product.keys())
DWC001.setdefault('taxable', True)
DWC001.setdefault('models',[])
DWC001.setdefault('reorder_point', 100)

# Sho what's in the new dictionary.
print("Dictionary after formkeys() and setdefault()")
print(DWC001)

# Change the taxable field from None to True
print("\nDictionary after fromkeys() and setdefault()")
DWC001['taxable'] = True

# Print the dictionary after changing taxable to True
print(DWC001)
```

Kísérletezés a `fromkeys` és a `setdefault` használatával. ☝🏻

Kimenet:

```txt
Dictionary after formkeys() and setdefault()
{'name': None, 'unit_price': None, 'taxable': None, 'in_stock': None, 'models': None, 'reorder_point': 100}

Dictionary after fromkeys() and setdefault()
{'name': None, 'unit_price': None, 'taxable': True, 'in_stock': None, 'models': None, 'reorder_point': 100}
```
Ahogy a kód kimenetén látható, a `fromkeys` és a `setdefault` műveletek után az új szótár ugyanazokkal a kulcsokkal rendelkezik, mint a `product` szótár, plusz egy új kulcs-érték párral, a `reorder_point: 10` -el, amelyet a második `setdefault` adott hozzá. Az `taxable` kulcs ebben a kimenetben azonban még mindig `None`, mert a `setdefault` nem változtatja meg egy meglévő kulcs értékét. Csak akkor ad hozzá egy új kulcsot az alapértelmezett értékkel egy szótárhoz, ha az még nem rendelkezik ezzel a kulccsal.


Mi van akkor, ha tényleg az `taxable` alapértelmezett értékét `True`-ra akarjuk állítani, nem pedig `None`-ra? 

Az egyszerű megoldás az lenne, ha a szabványos szintaxist használnánk: `dictionaryname[key] = newvalue`, hogy a meglévő `taxable` kulcs értékét `None`-ról `True`-ra változtassuk. A fenti kód második kimenete bizonyítja, hogy a kulcs értékének ilyen módon történő módosítása valóban működött.

### Szótárak egymásba ágyazása

Mostanra már talán feltűnt, hogy bármelyik program, amit írsz, több szótárat is igényelhet, mindegyiknek egyedi neve van.

De ha csak egy rakás szótárat definiálsz nevekkel, hogyan tudnál végighaladni az egész gyűjteményen anélkül, hogy minden egyes szótárat név szerint keresnél?  

A válasz az, hogy minden egyes szótár egy kulcs-érték pár legyen valamilyen szótárban, ahol a kulcs az egyes szótárak egyedi azonosítója (például egy UPC vagy SKU minden termékhez).

Az egyes kulcsok értéke ezután az adott szótár összes kulcs-érték párjának szótára lenne. 

A szintaxis tehát a következő lenne: 

```py
containingdictionaryname = {    
    key: {dictionary},
    key: {dictionary},
    key: {dictionary},   
    ...
}
```

Ez csak a szótárak szótárának szintaxisa. Az összes dőlt betűs helyőrző nevet a következőképpen kell helyettesíteni: 

- `containingdictionaryname`: Ez a szótár egészéhez rendelt név. Bármilyen név lehet, de meg kell írnia, hogy mit tartalmaz a szótár.

- `key`: Például egy termék UPC vagy SKU, vagy egy személy felhasználóneve, vagy akár csak egy sorszám, feltéve, hogy soha nem ismétlődik.

- `{dictionary}`: A szótár összes kulcs-érték párját zárójelbe kell tenni, és vesszővel kell követni, ha egy másik szótár következik.


A lenti kód egy példát mutat, amelyben van egy `products` nevű szótárunk - _többes számban, mert sok terméket tartalmaz_. Ez a szótár viszont négy egyedi terméket tartalmaz.
Minden terméknek van egy egyedi kulcsa: `RB0011`, `DWC0317` és így tovább, amelyek házon belüli SKU-számok, amelyeket a vállalkozás a saját készletének kezelésére használ. Mind a négy terméknek van neve, ára és modellkulcsa.

```py
# Create a generic products dictionary to contain multiple product dictionaries.

products = {
    'RB0111': {'name': 'Ray-Ban Sunglasses', 'price': 112.98, 'models': ['black', 'green']},
    'DWC0317': {'name': 'Drone with Camera', 'price': 72.95, 'models': ['white', 'black']},
    'MTS0540': {'name': 'T-Shirt', 'price': 2.95, 'models': ['small', 'medium', 'large']},
    'ECD2989': {'name': 'Echo Dot', 'price': 29.99, 'models': []}
}
```

A bonyolult szintaxis a sok görbe zárójel, vessző és kettőspont miatt nehéz átlátni, hogy mi történik. Pythonon kívül, egy szöveges fájlban, egy táblázatkezelőben, egy adatbázisban vagy bárhol máshol, ahová az adatokat helyezzük, ugyanezeket az adatokat tárolhatjuk egy egyszerű, **Termékek** nevű táblázatként is, ahol a kulcsok neve az oszlopok fejléceként szerepel, mint a lenti táblázatban.

| ID (key) |        Name        |  Price |        Models        |
|:--------:|:------------------:|:------:|:--------------------:|
|  RB0111  | Ray-Ban Sunglasses | 112.98 |     black, green     |
|  DWC0317 |  Drone with Camera |  72.95 |     white, black     |
|  MTS0540 |       T-Shirt      |  2.95  | small, medium, large |
|  ECD2989 |      Echo Dot      |  29.99 |                      |

Az f-stringek és néhány ciklus kombinációjával rávehetjük a Pythont, hogy az szótárakból származó adatokat táblázatos formában jelenítse meg.

```py
products = {
    'RB0111': {'name': 'Ray-Ban Sunglasses', 'price': 112.98, 
'models': ['black', 'green']},
    'DWC0317': {'name': 'Drone with Camera', 'price': 72.95, 
'models': ['white', 'black']},
    'MTS0540': {'name': 'T-Shirt', 'price': 2.95, 'models': 
['small', 'medium', 'large']},
    'ECD2989': {'name': 'Echo Dot', 'price': 29.99, 'models': 
[]}
}
# This header show above the output
print(f"{'ID':<6} {' Name':<17} {'Price':>8} {' Models'}")
print('-' * 60) # Prints 60 hyphens.
# Loop through each dictionary in the products dictionary
for oneproduct in products.keys():
    #Get the id of one product.
    id = oneproduct
    # Get the name of one product.
    name = products[oneproduct]['name']
    # Get the unit price of one product and format with $
    unit_price = '$' + f"{products[oneproduct]['price']:,.2f}"
    # Create and empty string variable named models
    models = ''
    # Loop through the models list and tack onto models
    # one item from the list followed by a comma and a space.
    for m in products[oneproduct]['models']:
        models += m + ', '
    # If the models variable is more than two charaters in length,
    # Peel off the last two chracters (last comma and space).
    if len(models) > 2:
        models = models[:-2]
    else:
        # Otherwise, if no models, shows <none>.
        models = "<none>"
    # Print all the variables with a neat f-string.
    print(f"{id:<6} {name:<17} {unit_price:>8} {models}")
# Any unidented code down here executed after the loop completes.
```
Kimenet:

```txt
ID      Name                Price  Models
------------------------------------------------------------
RB0111 Ray-Ban Sunglasses  $112.98 black, green
DWC0317 Drone with Camera   $72.95 white, black
MTS0540 T-Shirt              $2.95 small, medium, large
ECD2989 Echo Dot            $29.99 <none>
```