# 7. tananyag

:::tip 📚 EBBEN A FEJEZETBEN
- Saját függvény létrehozása
- Kommentek elhelyezése függvénybe
- Annak megismerése, hogyan adhatunk át adatokat a függvénynek
- Értékek visszaadása függvényből
- Az anonim (lambda) függvények megértése
:::

Ebben az anyagban megtanulod, hogyan kezelhetsz jobban nagyobb kódprojekteket saját függvények létrehozásával. A függvények segítségével a kódot kis feladatokra bonthatod, amelyek az alkalmazás több helyéről is meghívhatók. Ha például valami, amihez az egész alkalmazásodnak hozzá kell férnie és egy tucatnyi sornyi kódot igényel, jó eséllyel nem akarod ezt a kódot újra és újra megismételni minden alkalommal, amikor szükséged van rá. Ezzel csak nagyobb lesz a kód a kelleténél. Továbbá, ha valamit meg akarsz változtatni, vagy ha ki kell javítanod egy hibát a kódban, nem akarod, hogy ezt többször, több helyen kelljen megtenned. Ha az összes kódot egy függvény tartalmazná, akkor csak egy helyen kellene megváltoztatni vagy javítani.

A függvény által végrehajtott feladat eléréséhez a kódból meg kell hívni a függvényt, ugyanúgy, mint egy beépített függvényt, például a `print`-et. Más szóval, csak beírod a nevét a kódodba. Saját függvényneveket is kitalálhatsz. Gondolj tehát a függvényekre úgy, mint egy olyan lehetőségre, amellyel személyre szabhatod a Python nyelvet, hogy a parancsok megfeleljenek annak, amire az alkalmazásodban szükséged van.

## Függvény létrehozása

Egy függvény létrehozása egyszerű, létrehozásához kezdj egy új sort és írd be, hogy `def` (a definíció rövidítése), majd egy szóközzel, aztán egy szabadon választott névvel, amelyet egy pár zárójel követ, szóközök nélkül előtte és belül. Ezután tegyél egy kettőspontot a sor végére. Például egy egyszerű `hello()` nevű függvény létrehozásához írd be a következőt:

```py
def hello():
```

Ez egy függvény, de nem csinál semmit. Ahhoz, hogy a függvény csináljon valamit, Python kódot kell írnod a következő sorokba. Annak érdekében, hogy az új kód a függvényen "belül" legyen, húzza be az egyes sorokat.

:::tip 🐍
A behúzások nagy szerepet játszanak a Pythonban. Nincs olyan parancs, amely egy függvény végét jelöli. A def sor alatti összes behúzott sor az adott függvény része. Az első nem behúzott sor (a def sorig behúzva) a függvényen kívül van.
:::

Ahhoz, hogy ez a függvény csináljon valamit, tegyünk egy behúzott kódsort a `def` alá. Kezdjük azzal, hogy a függvény csak kiírja a __hello__-t. Tehát írjuk be a `print('Hello')` kódot behúzva a `def` sor alá. Most már így néz ki a kódunk:

```py
def hello():
    print('Hello')
```

Ha most futtatjuk a kódot, semmi sem fog történni. Ez így van rendjén. Semmi sem történhet, mert a függvényen belüli kód nem hajtódik végre, amíg a függvényt meg nem hívjuk. A saját függvényeket ugyanúgy hívod meg, mint a beépített függvényeket: olyan kódot írsz, amely a függvényt a nevénél fogva hívja, a zárójelekkel együtt a végén.

Nyomd meg az Entert egy üres sor hozzáadásához, majd írd be a `hello()` parancsot (szóközök nélkül), és győződj meg róla, hogy nincs behúzva. (Azért nem akarod, hogy ez a kód behúzva legyen, mert a függvényt hívja meg, hogy futtassa a kódod, ez nem része a függvénynek). Tehát így néz ki:


```py
def hello():
    print('Hello')

hello()
```

Amikor a kódod lefut, akkor a kimeneten látnod kell a _Hello_ szót.

### Kommentek használata a fügvényben

A megjegyzések mindig opcionálisak a kódban. De szokás, hogy a `def` utasítás alatti első sor egy `docstring` (háromszoros idézőjelekbe zárt szöveg), amely leírja, hogy mit csinál a függvény. Az is szokásos, hogy az első sorban a zárójelek jobb oldalára egy `#`-el megjegyzést teszünk. Íme egy példa az egyszerű `hello()` függvényt használva:

```py
def hello():   # Practice function
    """ A docstring describing the function """
    print('Hello')
```

Mivel ezek csak megjegyzések, nincs semmilyen hatásuk arra, hogy mit csinál a kód. A megjegyzések csak jegyzetek önmagadnak vagy a programozói csapat tagjainak, amelyek leírják, hogy miről szól a kód. A kód ismételt futtatása ugyanazt az eredményt mutatja.

A VS Code felhasználók számára bónusz, hogy amikor elkezded beírni a függvény nevét, a _VS Code IntelliSense_ súgója megjeleníti az egyéni függvény `def` utasítását, valamint a hozzá beírt `docstringet`. Tehát egyéni súgó létrehozható a saját függvényeidhez.

### Adatok átadása egy függvénynek

Adatokat adhatsz át egy függvénynek, hogy azokkal dolgozhas. Ehhez a `def` utasításban adj meg egy paraméternevet, amelyet átadsz a függvénynek. Bármilyen nevet használhat a paraméterként, feltéve, hogy betűvel vagy aláhúzással kezdődik, amelyet egy betű, egy aláhúzás vagy egy szám követ. A név nem tartalmazhat szóközöket vagy írásjeleket. (A paraméternevek és a változók nevei ugyanazokat a szabályokat követik.) Ideális esetben a kód olvashatósága érdekében a paraméternek le kell írnia, hogy mit adunk át, de használhatunk általános neveket is, például `x` és `y`, ha úgy tetszik.

Bármely paraméterként megadott név csak az adott függvényre vonatkozik. Például, ha van egy `x` nevű változó a függvényen kívül, és egy másik `x` nevű változó a függvényen belül, akkor az `x` változóban a függvényen belül végrehajtott változtatások nem befolyásolják az `x` változót a függvényen kívül.

A függvényeken belüli változók működésének technikai kifejezése a `scope`, ami azt jelenti, hogy a változók léte és hatása a függvényen belül marad, és nem terjed tovább. A függvényen belül létrehozott és módosított változók szó szerint megszűnnek létezni, amint a függvény leáll, és a függvényen kívül definiált változókat nem befolyásolják a függvényen belüli történések. Ez azért jó dolog, mert amikor függvényt írsz, nem kell aggódnod amiatt, hogy véletlenül megváltoztatsz egy függvényen kívüli változót, amelynek történetesen ugyanaz a neve.


:::tip 📎
Egy függvény visszaadhat egy értéket (`return`), és ez a visszaadott érték a függvényen kívül is látható. Arról, hogy ez a folyamat hogyan működik, egy pillanat múlva bővebben.
:::

Tegyük fel, hogy a `hello` függvény azt szeretné, hogy köszönjön annak, aki az alkalmazást használja (és ehhez az információhoz hozzáférhetünk egy változóban). Ahhoz, hogy az információt átadjuk a függvénynek, és ott használjuk, a következőket kell tennünk:

- A függvény zárójelébe tegyen egy paraméternevet, amely a bejövő információ helyőrzőjeként szolgál.
- A függvényen belül használja ezt a nevet a beadott információval való munkához.

Például mondjuk, hogy egy személy nevét szeretnénk átadni a `hello` függvénynek, majd a nevet a `print()` utasításban használni. A paraméterhez és a függvényhez is használhat bármilyen általános nevet, például így:

```py
def hello(x):   # Practice function    
    """ A docstring describing the function """
    print('Hello ' + x)
```

A `hello(x)` zárójelében az x egy paraméter, egy _placeholder_ a bejövő értéknek. A függvényen belül ez az `x` csak a függvénybe átadott értékre utal. A függvényen kívüli `x` nevű változók elkülönülnek a paraméternévben és a függvényen belül használt `x`-től.

Az általános nevek  nem igazán segítik a kód egyszerűbb megértését. Jobb lenne egy beszédesebb nevet használni, például `name` vagy akár `user_name`, mint a következőkben:

```py
def hello(user_name):   # Practice function
    """ A docstring describing the function """
    print('Hello ' + user_name)
```

A `print()` függvényben egy szóközt adtunk hozzá az __o__ után a _Hello_-ban, hogy a kimeneten szóköz legyen a _Hello_ és a név között.

Ha egy függvénynek van paramétere, akkor a híváskor át kell adnod neki egy értéket, különben nem fog működni. Ha például a `def` utasításhoz hozzáadnánk a paramétert, és mégis megpróbálnánk a függvényt a paraméter nélkül hívni, mint az alábbi kódban, a kód futtatása hibát eredményezne:

```py
def hello(user_name):   # Practice function
    """ A docstring describing the function """
    print('Hello ' + user_name)    
    
hello()
```

A hiba a következőképp nézne ki:

```txt
hello() missing 1 required positional argument: 'user_name'
```

Ehhez a függvényhez egy karakterláncot kell átadni. Ezt onnan tudjuk, hogy amit a változóba átadunk, azt egy másik karakterlánccal (a hello szóval, amelyet egy szóköz követ) konkatenáljuk (összeadjuk). Ha megpróbálnánk egy számot egy stringhez csatolni, hibát kapnánk.

Az átadott érték lehet egy literál (a pontos adat, amelyet át akar adni) vagy egy változó neve, amely tartalmazza az adott információt. Például, amikor ezt a kódot futtatja:

```py
def hello(user_name):   # Practice function    
    """ A docstring describing the function """
    print('Hello ' + user_name)

hello('Alan')
```

a kimenet __Hello Alan__, mert amikor meghívtad a függvényt a következő kódsorral, az Alan-t sztringként adtuk át:

```py
hello('Alan')
```

Az adatok átadásához is használhatsz változót. Például a lent látható kódban az `"Alan"` karakterláncot egy `this_person` nevű változóban tároltuk. Ezután meghívjuk a függvényt ezzel a változónévvel. A kód futtatásával a `Hello Alan` eredményt kapjuk, ahogy az ábra alján látható.

```py
def hello(user_name):   # Practice function    
    """ A docstring describing the function """
    print('Hello ' + user_name)

# Put a string in a variable named this_person.
this_person = 'Alan'
# Pass that variable name to the function.
hello(this_person)
```

Adatok átadása egy függvénynek egy változóval.

Kimenet:

```txt
Hello Alan
```


### Opcionális paraméterek definiálása alapértelmezett értékekkel

Feljebb említettük, hogy ha olyan függvényt hívunk meg, amely paramétereket vár, anélkül, hogy átadnánk azokat, hibaüzenetet kapunk. Ez egy kicsit hazugság volt. Írhatsz egy függvényt úgy, hogy egy paraméter átadása opcionális, de meg kell mondanod a függvénynek, hogy mit használjon, ha nem ad át semmit. A szintaxis a következő:

```py
def functioname(parametername=defaultvalue):
```

Az egyetlen dolog, ami tényleg más, az a paraméter neve utáni = `defaultvalue` rész. Például átírhatod a `hello()` függvényt egy alapértelmezett értékkel, például így:

```py
def hello(user_name = 'nobody'):   # Practice function
    """ A docstring describing the function """
    print('Hello ' + user_name)
```

Lenti kódrész mutatja a függvényt a módosítás után, a függvény tesztelésének kimenetével együtt.

```py
def hello(user_name = 'nobody'):   # Practice function    
    """ A docstring describing the function """
    print('Hello ' + user_name)

hello('Alan')
hello()
```

A hello() függvényhez hozzáadott opcionális paraméter alapértelmezett értékkel.

```py
hello('Alan')
```

Tehát a kimenet

```txt
Hello Alan
```

A második sor, amelyet a függvény tesztelésére használtunk, meghívja a függvényt, de nem ad át értéket. Más szóval, meghívja a függvényt, de a zárójelben lévő érték nélkül, például így:

```py
hello()
```

Mivel ez a sor nem ad át értéket, a függvény alapértelmezett értéke __'nobody'__, és a kimenet, ahogy az ábra alján látható, a következő lesz:

```txt
Hello nobody
```

### Több érték átadása egy függvénynek

Eddig minden példánkban csak egy értéket adtunk át a függvénynek. De annyi értéket adhatunk át, amennyit csak akarunk. Csak adjunk meg egy paraméternevet minden egyes értékhez, és válasszuk el a neveket vesszővel.

Tegyük fel például, hogy a felhasználó keresztnevét, vezetéknevét és esetleg egy dátumot szeretnénk átadni a függvénynek. Ezt a három paramétert így definiálhatjuk:

```py
def hello(fname, lname, datestring):   # Practice function
    """ A docstring describing the function """
    print('Hello ' + fname + ' ' + lname)
    print('The date is ' + datestring)
```

Vegyük figyelembe, hogy egyik paraméter sem opcionális. Tehát a függvény hívásakor három értéket kell átadni, például így:

```py
hello('Alan', 'Simpson', '12/31/2019')
```

A következő kód egy példát mutat a ahogy végrehajtására kerül a `hello()` függvény, amely három paramétert fogad el.

```py
def hello(fname, lname, datestring):   # Practice function
    """ A docstring describing the function """
    msg = "Hello " + fname + " " + lname
    msg += " you mentioned " + datestring
    print(msg)

hello('Alan', 'Simpson', '12/31/2019')
```

Kimenet:

```txt
Hello Alan Simpson you mentioned 12/31/2019
```

Ha néhány (de nem az összes) opcionális paramétert több paraméterrel is használni szeretné, győződjön meg róla, hogy az opcionális paraméterek az utolsók. Vegyük például a következőt kódot, ami nem működne:

```py
def hello(fname, lname='unknown', datestring):
```

Ha megpróbálja futtatni ezt a kódot ezzel az elrendezéssel, akkor egy hibaüzenetet kapunk, amely a következőhöz hasonlóan szólna:

```txt
SyntaxError: non-default argument follows default argument.
```

Ez a hiba azt próbálja elmondani, hogy ha egy függvényben kötelező és opcionális paramétereket is fel akar sorolni, akkor a kötelező paramétereket kell az első helyre tenni (bármilyen sorrendben). Ezután az opcionális paramétereket lehet felsorolni utána az **=** jellel (tetszőleges sorrendben). Tehát a következő jól működne:


```py
def hello(fname, lname, datestring=''):
    msg = 'Hello ' + fname + ' ' + lname 
    if len(datestring) > 0:
        msg += ' you mentioned ' + datestring
    print(msg)
```

Logikailag a függvényen belüli kód a következőket teszi:

- Hozzunk létre egy `msg` nevű változót, és írja be a _Hello_, valamint a kereszt- és vezetéknevet.
- Ha az átadott `datestring` hossza nagyobb, mint 0, adjuk hozzá _" you mentioned "_ és a `datestringet` a `msg` változóhoz.
- Nyomtassuk ki, ami ebben a `msg` változóban van.

Az következő kód két példát mutat a függvény ezen változatának hívására. Az első hívás három értéket ad át, a második hívás pedig csak kettőt. Mindkettő működik, mert a harmadik paraméter opcionális. Az első hívás kimenete a teljes kimenet a dátummal együtt, a második hívás kimenete pedig kihagyja a dátumra vonatkozó részt.


```py
def hello(fname, lname, datestring=''):
    msg = 'Hello ' + fname + ' ' + lname 
    if len(datestring) > 0:
        msg += ' you mentioned ' + datestring
    print(msg)

hello('Alan', 'Simpson', '12/31/2019')
hello('Smmy', 'Schmeedledorp')
```

A `hello()` függvény meghívása három paraméterrel, majd újra két paraméterrel.

Kiement:

```txt
Hello Alan Simpson you mentioned 12/31/2019
Hello Smmy Schmeedledorp
```

### Kulcsszavas argumentumok (kwargs) használata

Ha valaha is megnézted a _python.org_ hivatalos Python dokumentációját, észrevehetted, hogy sokszor használják a `kwargs` kifejezést. Ez a kulcsszavas argumentumok rövidítése, és egy újabb módja annak, hogy adatokat adjunk át egy függvénynek.

Az argumentum kifejezés a "függvény paramétereinek átadott érték" szakkifejezése. Eddig szigorúan pozicionális argumentumokat használtunk. Vegyük például ezt a három paramétert:

```py
def hello(fname, lname, datestring=''):
```

Amivel így hívjuk a függvényt:

```py
hello("Alan", "Simpson")
```

A Python feltételezi, hogy __"Alan"__ az első név, mivel ez az első átadott argumentum, és az `fname` az első paraméter a függvényben. __"Simpson"__, a második argumentumról feltételezi, hogy `lname`, mert `lname` a második paraméter a `def` utasításban. A `datestring`-ről feltételezzük, hogy üres, mert a `datestring` a harmadik paraméter a `def` utasításban, és harmadik argumentumként semmi sem kerül átadásra.

Ahelyett, hogy kizárólag az argumentum kódban elfoglalt pozíciójára hagyatkoznánk a paraméternévhez való hozzárendeléskor, a függvényt hívó kódban a `parameter = value` szintaxis használatával is megmondhatja a függvénynek, hogy mi micsoda. Nézzük meg például a `hello` hívását:


```py
hello(datestring='12/31/2019', lname='Simpson', fname='Alan')
```

Ha ezt a kódot futtatnánk, akkor is jól működne, bár az átadott argumentumok sorrendje nem egyezik a `def` utasításban szereplő paraméternevek sorrendjével. De a sorrend itt nem számít, mert az egyes argumentumokhoz tartozó paraméternév szerepel a hívásban. Az __'Alan'__ argumentum egyértelműen az `fname` paraméterhez tartozik, mivel az `fname` a `def` utasításban szereplő paraméter neve.

Ugyanez a koncepció érvényes, ha változókat adsz át. Ismétlem, a sorrend nem számít. A következő példában a függvénynek átadandó értékek először az `appt_date`, `last_name`, stb. nevű változókba kerülnek. Ezután az utolsó sor ismét meghívja a `hello()` függvényt, mint az előző példákban. De az egyes paraméternevekhez rendelt érték egy változó neve, nem pedig egy átadott szó szerinti érték.

```py
appt_date = '12/30/2019'
last_name = 'Janda'
first_name = 'Kylie'

hello(datestring=appt_date, lname=last_name, fname=first_name)
```

A kódban mindkét módon történő futtatásának eredményét láthatjuk. Ahogy látszik is, minden rendben működik. Nincs félreértés abban, hogy melyik argumentum melyik paraméterhez tartozik, mivel a paraméter neve a hívó kódban van megadva.

```py
def hello(fname, lname, datestring=''): # Practice function
    """ A docstring describing the function """
    msg = 'Hello ' + fname + ' ' + lname 
    if len(datestring) > 0:
        msg += ' you mentioned ' + datestring
    print(msg)

# Pass in literal kwargs (identify each by parameter name)
hello(datestring='12/31/2019', lname='Simpson', fname='Alan')

# Pass in kwargs from variables (identify each by parameter name)
appt_date = '12/30/2019'
last_name = 'Janda'
first_name = 'Kylie'
hello(datestring=appt_date, lname=last_name, fname=first_name)
```

Egy függvény hívása kulcsszavas argumentumokkal (kwargs).

Kimenet:

```txt
Hello Alan Simpson you mentioned 12/31/2019
Hello Kylie Janda you mentioned 12/30/2019
```

### Több érték átadása listával

Eddig egyszerre csak egy adatot adtunk át. De iterálható értékeket is átadhatunk egy függvénynek. Emlékezzünk, hogy az iterálható bármi, amin a Python ciklusban végig tud menni, hogy értékeket kapjon. Egyszerű és talán a leggyakrabban használt a lista.
A listákkal való munka fő trükkje a következő: Ha meg akarod változtatni a lista tartalmát (például a tartalom rendezésével), készíts egy másolatot a listáról a függvényben, majd az végez változtatásokat a másolaton.

Az átadott lista másolatával kell dolgoznunk, mert a függvény nem kapja meg az eredeti listát mutable (változtatható) formában, csak egy pointert (mutatót) kap a listára, amely a lista helyét jelzi. Ezután a függvény megkapja a lista tartalmát. A függvény a lista saját másolatával bármit megtehet, de az eredeti lista változatlan marad.

Miután a függvényen belül megvan a lista másolata, ezt a másolatot a `sort()` metódussal rendezhetjük. Vagy, ha csökkenő sorrendbe akarsz rendezni, használd a `sort(reverse=True)` parancsot.

Itt van például egy új, `alphabetize()` nevű függvény, amely egy argumentumot, a `names` nevet veszi fel. Az átadott paraméter neve `original_list`. A teljes paraméterdeklaráció `original_list=[]`. A szögletes zárójelek egy üres listát jelölnek alapértelmezettként, arra az esetre, ha semmit sem adunk át paraméterként. Más szóval, az `=[]` használatával az alapértelmezett bemenetet üres listaként definiáljuk. A függvény tetszőleges számú szóból vagy névből álló listát tud betűrendbe állítani:

```py
def alphabetize(original_list=[]):
    """ Pass any list in square brackets, displays a string with items sorted """
    # Inside the function make a working copy of the list passed in.
    sorted_list = original_list.copy()    
    # Sort the working copy.
    sorted_list.sort()    
    # Make a new empty string for output
    final_list = ''    
    # Loop through sorted list and append name and comma and space.
    for name in sorted_list:
        final_list += name + ', '    
    # Knock off last comma space if the string is not blank
    final_list = final_list[:-2]    
    # Print the alphabetized list.
    print(final_list)
```

Az első sor definiálja a függvényt. Figyeljük meg, hogy a paraméterként az `original_list=[]`-t használtuk. Az alapértelmezett érték `(=[])` opcionális, de azért tettük oda, hogy a függvény ne omoljon össze, ha véletlenül lista átadása nélkül hívjuk meg. 

Ehelyett csak egy üres listát hoz létre. Amikor például a VS Code-ban elkezdi beírni a függvény nevét, `IntelliSense`-segítségként megjelenik a `def` utasítás és a `docstring` is, hogy emlékeztessen a függvény használatára.

Mivel a függvény nem tudja közvetlenül megváltoztatni a listát, először az eredeti (átadott) listáról készít egy másolatot egy új, `sorted_list` nevű listában, ezzel a kódsorral:

```py
sorted_list = original_list.copy()
```

Ezen a ponton a `sorted_list` nem igazán rendezett, ez még mindig csak egy másolata az eredetinek. A következő kódsor elvégzi a rendezést:

```py
sorted_list.sort()
```

Ez a függvény egy karakterláncot hoz létre a rendezett elemekkel, vesszővel elválasztva. A következő sor tehát létrehoz egy új változót, a `final_list` nevet, és az `=` jel után üres karakterláncként indítja a változót (két szimpla idézőjel, szóköz nélkül):

```py
final_list = ''
```

Ez a ciklus végigmegy a rendezett listán, és a lista minden egyes, vesszővel és szóközzel elválasztott elemét hozzáadja a `final_list` stringhez:

```py
for name in sorted_list:
    final_list += name + ', '
```

Amikor ez végrehajtódik akkor egy extra vesszőt és egy szóközt fog tartalmazni a végén. A következő utasítás eltávolítja ezt az utolsó két karaktert, feltéve, hogy a lista legalább két karakter hosszúságú:

```py
final_list = final_list[:-2]
```

Az ezt következő utasítás csak kiírja a `final_list`-et, hogy láthassuk.

A függvény hívásához átadhatunk egy listát a függvény zárójelén belül, így:

```py
alphabetize(['Schrepfer', 'Maier', 'Santiago', 'Adams'])
```

Mint mindig, a listát tartalmazó változó nevét is megadhatja, mint ebben a példában:

```py
names = ['Schrepfer', 'Maier', 'Santiago', 'Adams']
alphabetize(names)
```

Akárhogy is, a funkció ábécé sorrendben jeleníti meg ezeket a neveket:

```txt
Adams, Maier, Santiago, Schrepfer
```

### Tetszőleges számú argumentum átadása

A lista az egyik módja annak, hogy sok értéket adjunk át egy függvénybe. A függvényt úgy is megtervezhetjük, hogy tetszőleges számú argumentumot fogadjon el. Vegyük figyelembe, hogy ez a módszer nem különösebben gyorsabb vagy jobb, ezért azt használja, amelyik a legegyszerűbb vagy a legértelmesebb. Bármennyi argumentum átadásához használjuk a `*args` paraméternevet, például így:

```py
def sorter(*args):
```

Bármit is adsz át, az a függvényen belül egy `args` nevű `tuple` lesz. Ne feledjük, hogy a `tuple` egy megváltoztathatatlan lista - _egy olyan lista, amelyet nem lehet megváltoztatni_. Tehát ismét, ha változtatni akarunk valamit, akkor a `tuple`-t egy listába kell másolnunk, majd ezen a másolaton kell dolgoznunk. Íme egy példa, ahol a kód az egyszerű `newlist = list(args)` utasítást használja. Ezt úgy olvashatjuk, hogy a `newlist` nevű változó az `args tuple`-ban lévő összes dolog listája. A következő sorban a `newlist.sort()` rendezi a listát, a `print` pedig megjeleníti a lista tartalmát:


```py
def sorter(*args):    
    """ Pass in any number of arguments separated by commas
    Inside the function, they treated as a tuple named args. """

    # Create a list from the passed-in tuple.
    newlist = list(args) 
    # Sort and show the list.
    newlist.sort() 
    print(newlist)
```

Következő kód egy számsorozat argumentumaival mutat példát, mint látható, a kapott lista a elvárásunknak megfelelően rendezett sorrendben van.

```py
sorter(1, 0.001, 100000, -900, 2)
```

Egy függvény, amely tetszőleges számú argumentumot fogad el `*args` használatával.

### Értékek visszaadása függvényekből

Eddig minden függvényünk kimenetet jelenített meg a képernyőn, hogy meggyőződhessünk arról, hogy a függvény működik. A való életben sokkal gyakoribb, hogy egy függvény valamilyen értéket ad vissza, és azt a hívó kódban megadott változóba helyezi. A visszatérést végző sor általában a függvény utolsó sora, amelyet egy szóköz és a változó neve követ, amely a visszatérítendő értéket tartalmazza.

Íme az `alphabetize` metódus egy változata. Nem tartalmaz print utasítást. Ehelyett a végén egyszerűen visszaadja a függvény által létrehozott betűrendes listát (`final_list`): 

```py
def alphabetize(original_list=[]):
    """ Pass any list in square brackets, displays a string with items sorted """
    # Inside the function make a working copy of the list passed in.
    sorted_list = original_list.copy()    
    # Sort the working copy.
    sorted_list.sort()    
    # Make a new empty string for output
    final_list = ''    
    # Loop through sorted list and append name and comma and space.
    for name in sorted_list:
        final_list += name + ', '    
    # Knock off last comma space if the string is not blank
    final_list = final_list[:-2]    
    # Return the alphabetized list.
    return final_list
```

A függvények használatának leggyakoribb módja, hogy a függvények által visszaadott adatokat valamilyen változóban tároljuk. Az alábbi kódban például az első sorban egy `random_list` nevű változót definiálunk, amely nem más, mint egy lista, amely neveket tartalmaz, különösebb sorrendben, szögletes zárójelek közé zárva - _ami azt jelzi a Python számára, hogy ez egy lista_. A második sor létrehoz egy új, `alpha_list` nevű változót úgy, hogy a `random_list`-et átadja az `alphabetize()` függvénynek, és tárolja, amit a függvény visszaad. Az utolsó `print` utasítás megjeleníti, ami az `alpha_list` változóban van:

```py
random_list = ['McMullen', 'Keaser', 'Maier', 'Wilson', 'Yudt', 'Gallagher', 'Jacobs']
alpha_list = alphabetize(random_list)
print(alpha_list)
```

## Az anonim (lambda) függvények megértése

A Python támogatja az anonim függvények, más néven lambda függvények koncepcióját. A névtelen rész azon alapul, hogy a függvénynek nem kell, hogy legyen neve (de lehet, ha akarjuk). A lambda rész azon alapul, hogy a Pythonban a lambda kulcsszót használjuk névtelen függvények definiálására. Más szóval, amikor a Python-kódban a lambda szót látod, az a kódsor egy névtelen függvényt definiál.

A lambda kifejezés definiálásának minimális szintaxisa a következő:

```py
lambda arguments : expression
```

Az argumentumokat a kifejezésbe átadott adatokkal helyettesíti. A kifejezést pedig helyettesítse egy olyan formulával, amely meghatározza, hogy mit adjon vissza az anonim függvény.
Ennek a szintaxisnak a használatára gyakori példa, amikor olyan szöveges karakterláncokat próbálunk meg rendezni, amelyekben némelyiknek a neve nagybetűvel, némelyiknek pedig kisbetűvel kezdődik, mint például ezekben a nevekben:

```txt
Adams, Ma, diMeola, Zandusky
```

Tegyük fel, hogy a következő kódot írjuk a nevek listába helyezéséhez, a lista rendezéséhez, majd kiírásához:

```py
names = ['Adams', 'Ma', 'diMeola', 'Zandusky']
names.sort()
print(names)
```

A kimenet a következő:

```txt
['Adams', 'Ma', 'Zandusky', 'diMeola']
```

Az, hogy __diMeola__ __Zandusky__ után jött, szerintünk és valószínűleg szerinted is helytelen. De a számítógépek nem mindig úgy látják a dolgokat, mint mi - valójában nem látnak semmit, mert nincs szemük vagy agyuk, de ez most mellékes 🤷🏻‍♂️.  A `diMeola` azért következik `Zandusky` után, mert a rendezés az __ASCII__-n alapul, ami egy olyan rendszer - __amit már jó pár fejezettel ez előtt néztünk__ 🙄 -, amelyben minden karaktert egy számmal ábrázolnak. Minden kisbetűs betűhöz magasabb szám tartozik, mint a nagybetűs számokhoz. Tehát a rendezés során a kisbetűvel kezdődő szavak a nagybetűvel kezdődő szavak után következnek. Ha mást nem is, ez legalább egy kisebb ismétlést megérdemelt.

A Python `sort()` metódusa lehetővé teszi, hogy a zárójelek között egy `key=` kifejezést is megadhassunk, ahol megmondhatjuk, hogy hogyan rendezzük. A szintaxis a következő: 

```py
.sort(key = transform)
```

A `transform` rész a rendezett adatok valamilyen variációja. Ha szerencsés vagy, és valamelyik beépített függvény, például a `len` (a hosszra) működik, akkor azt használhatod a `transform` helyett, például így: 

```py
names.sort(key=len)
```

Sajnos számunkra a karakterlánc hossza nem segít az ábécésítésben. Tehát amikor ezt a kódsort futtatod, a sorrend a következő lesz:

```txt
['Ma', 'Adams', 'diMeola', 'Zandusky']
```

A rendezés a legrövidebb (a legkevesebb karaktert tartalmazó) karakterlánctól a leghosszabb karakterláncig tart. Jelenleg ez számunkra nem hasznos.

Azt sem írhatjuk, hogy `key=lower` vagy `key=upper`, hogy a rendezést az összes kisbetűre vagy az összes nagybetűre alapozzuk, mert a `lower` és a `upper` nem beépített függvények - _amiről gyorsan meggyőződhetsz, ha rákeresel a Python 3 beépített függvényeire a neten_ 😉.

Beépített függvény helyett használhatunk egy saját függvényt, amelyet a `def` segítségével definiálunk. Például létrehozhatunk egy `lowercaseof()` nevű függvényt, amely elfogad egy karakterláncot, és azt az összes betűjét kisbetűvé alakítva adja vissza. Íme a függvény:

```py
def lowercaseof(anystring):    
    """ Converts string to all lowercase """    
    return anystring.lower()
```

A `lowercaseof` nevet mi találtuk ki, az `anystring` pedig egy `placeholder` a jövőben átadott bármilyen karakterlánc számára. A `return anystring.lower()` sorban az `str` (string) objektum `.lower()` metódusának használatával kisbetűvé konvertált karakterláncot adjuk vissza.

Ezután hívjuk meg a függvényt valami olyasmivel, mint `print(lowercaseof('Zandusky'))`. A lent látható módon kapjuk meg a kisbetűsre konvertált karakterláncot kimenetként.

```py
def lowercaseof(anystring):    
    """ Converts string to all lowercase """    
    return anystring.lower()

print(lowercaseof('Zandusky'))
```

Oké, tehát most már van egy egyéni függvényünk, amely bármilyen karakterláncot kisbetűvé alakít. Hogyan használjuk ezt rendezési kulcsként? Egyszerű. Használjuk a `key=transform`-ot ugyanúgy, mint korábban, de a `transform` helyett használjuk az egyéni függvényünk nevét. A mi függvényünk neve `lowercaseof`, így a `.sort(key=lowercaseof)` parancsot használjuk, ahogy az alábbiakban látható:

```py
def lowercaseof(anystring):    
    """ Converts string to all lowercase """    
    return anystring.lower()

names = ['Adams', 'Ma', 'diMeola', 'Zandusky']
names.sort(key=lowercaseof)
```

Ha ezt a kódot futtatjuk a nevek listájának megjelenítésére, akkor a nevek a megfelelő sorrendben lesznek, mivel a rendezés alapja a kisbetűs karakterláncok. A megjelenített nevek ugyanazok, mint korábban, mert csak a színfalak mögött zajló rendezés használt kisbetűket. Az eredeti adatok továbbra is az eredeti nagy- és kisbetűket tartalmazzák.

```txt
Adams', 'diMeola', 'Ma', 'Zandusky
```

Ha mindezek elolvasása után még mindig ébren vagy és eszméletednél vagy, akkor talán azt gondolod: __"Oké, megoldottad a rendezési problémát. De azt hittem, hogy itt lambda függvényekről beszélünk. Hol van a lambda függvény?"__ Még nincs lambda függvény. De ez egy tökéletes példa arra, hogy hol használhatnál lambda függvényt, mert a meghívott függvény, a `lowercaseof()`, egyetlen sor kóddal végzi el az összes feladatát: `return anystring.lower()`.

Ha a függvényed egy ilyen egyszerű egysoros kifejezéssel tudja elvégezni a dolgát, akkor kihagyhatod a `def`-et és a függvénynevet, és csak ezt a szintaxist használhatod:

```py
lambda parameters : expression
```

A paraméterek helyettesíthetők egy vagy több, saját magad által kitalált paraméternévvel. Helyettesítsük a kifejezést azzal, amit a függvénynek vissza kell adnia a `return` szó nélkül. Tehát ebben a példában a kulcs egy lambda-kifejezés használatával a következő lenne:

```py
lambda anystring: anystring.lower()
```

Most már érti, miért névtelen függvény. A teljes első sort a `lowercaseof()` függvénynévvel eltávolítottuk. A lambda kifejezés használatának előnye tehát az, hogy nincs is szükség a külső egyéni függvényre. Csak a paraméterre van szükséged, amelyet egy kettőspont és egy kifejezés követ, amely megmondja, hogy mit adjon vissza.

Lent látható példa a teljes kódot és a futtatás eredményét mutatja. Megkapja a megfelelő rendezési sorrendet anélkül, hogy szükség lenne egy olyan külső ügyfélfüggvényre, mint a `lowercaseof()`. Egyszerűen csak `anystring: anystring.lower()` (lambda után) rendezési kulcsként használod.

```py
names = ['Adams', 'Ma', 'diMeola', 'Zandusky']
names.sort(key = lambda anystring : anystring.lower())
print(names)
```

Vegyük észre, hogy az `anystring` hosszabb paraméternév, mint amit a legtöbb programozó használna. A Pythonosok szeretik a rövid neveket, még az egybetűs neveket is. Például az `anystring`et helyettesíthetjük `s`-sel (vagy bármely más betűvel), mint az alábbiakban, és a kód ugyanúgy működne:

```py
names = ['Adams', 'Ma', 'diMeola', 'Zandusky']
names.sort(key = lambda s : s.lower())
print(names)
```

A  legelején említettük, hogy a `lambda` függvényeknek nem kell névteleneknek lenniük. Adhatunk nekik nevet, és hívhatjuk őket úgy, ahogy más függvényeket is hívnánk.

Itt van például egy `currency` nevű `lambda`-függvény, amely bármilyen számot elfogad, és egy stringet ad vissza valutaformátumban (azaz egy dollár előjellel, vesszővel az ezresek között, és két számjeggyel a fillérek esetében):

```py
currency = lambda n: f"${n:,.2f}"
```

Itt van egy százalék nevű program, amely bármilyen elküldött számot megszoroz 100-zal, és a tizedesvessző után két számjeggyel, valamint a végén egy százalékjellel jeleníti meg:

```py
percent = lambda n: f"{n:.2%}"
```

A következő kód példákat mutat mindkét függvényre. Minden egyes `print()` utasítás a kívánt formátumban jeleníti meg a számot.

```py
# Show number in currency format.
currency = lambda n: f"${n:,.2f}"
# Show number in percent format.
percent = lambda n: f"{n:.2%}"

# Test currency function
print(currency(99))
print(currency(123456789.09876543))