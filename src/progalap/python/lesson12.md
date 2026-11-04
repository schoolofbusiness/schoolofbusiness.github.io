# 12. tananyag

:::tip 📚 EBBEN A FEJEZETBEN
- Munka CSV fájlokkal
- CSV importálása objektumokba és szótárakba
:::

## CSV fájlok megismerése

A CSV (vesszővel elválasztott értékek) egy széles körben használt formátum a táblázatos adatok tárolására és szállítására. A táblázatos azt jelenti, hogy az adatok általában sorokból és oszlopokból álló táblázatos formátumban jeleníthetők meg. Egy táblázatkezelő alkalmazásban, például a Microsoft Excelben, az Apple Numbersben vagy a Google Sheetsben a táblázatos formátum nyilvánvaló, ahogy az a lenti ábrán látható.

![img](/assets/images/python/12/1.png)

🖼️ _CSV fájl Microsoft Excelben._

💾 __A__ [sample.csv](/assets/images/python/12/sample.csv) __letöltése__. 👈🏻

Egy speciális program segítsége nélkül, amely a fájlban lévő adatokat táblázatos formában jeleníti meg, minden sor csak egy sor a fájlban. És minden egyes egyedi értéket vesszővel választunk el. Ha például a fenti ábrán látható fájlt megnyitjuk egy egyszerű szövegszerkesztő programban, például a _Notepad_ vagy a _TextEdit_ programban, akkor a lenti ábrán látható módon láthatjuk, hogy valójában mi van a fájlban tárolva.

![img](/assets/images/python/12/2.png)

🖼️ _CSV fájl egy szövegszerkesztő programban._

A szövegszerkesztőben az első sor, amelyet gyakran fejlécnek neveznek, tartalmazza a táblázat első sorában megjelenő oszlopfejléceket vagy mezőneveket. Ha megnézzük a neveket a második példában, a nyers CSV-fájlban, láthatjuk, hogy idézőjelek közé vannak zárva, így:

```txt
"Angst, Annie"
```

Az idézőjelek azt jelzik, hogy a közöttük lévő tartalom mind egy dolog. Más szóval, a vezeték- és keresztnév közötti vessző a név része, nem egy új oszlop kezdete. Tehát az első két oszlop ebben az első sorban a következő

```txt
"Angst, Annie", 1982
```

és nem

```txt
Angst, Annie
```

Ugyanez igaz az összes többi sorra is: Az idézőjelekbe zárt név (_beleértve a vesszőket is_) csak egy név, nem pedig két külön adatoszlop.

Ha egy karakterlánc aposztrófot tartalmaz, ami ugyanaz a karakter, mint egy egyszerű idézőjel, akkor a karakterlánc körül dupla idézőjeleket kell használnunk. Ellenkező esetben, ha ezt tesszük:

```txt
'O'Henry, Harry'
```

a karakterlánc első része __'O'__, és a Python nem tudja, mit kezdjen a második idézőjel utáni szöveggel. A kettős idézőjelek használata csökkenti a félreértéseket, mivel a névben nincsen kettős idézőjel:

```txt
"O'Henry, Harry"
```

Az eddigi ábrákon látott CSV-fájlok létrehozásakor felmerülő egyéb szempontokat is szemlélteti. Például a __Bónañas, Barry__ név néhány nem ASCII karaktert tartalmaz. Az __utolsó előtti sor__ csak egy csomó vesszőt tartalmaz. (Egy CSV-fájlban, ha egy cellából hiányoznak az adatok, akkor a cellát lezáró vesszőt a bal oldalára kell tenni, ahol nincs semmi.) A Balance oszlopban dollárjelek és vesszők vannak a számok között, amelyek nem működnek a Python `float` adattípusával. A következőkben beszélünk arról, hogyan kezeljük mindezeket a problémákat.

Bár a CSV fájlokkal dolgozhatunk az eddig tanultak alapján is, a feladat sokkal gyorsabb és egyszerűbb lesz, ha a `csv` __modult__ használjuk. A használatához csak tegyük ezt a programunk elejére:

```py
import csv
```

Ne feledjük, ez a kódsor nem egy CSV fájlt fog betölteni. Az előre megírt kódokat tölti be, amely megkönnyíti a CSV-fájlokkal való munkát a saját Python-kódunkban.

## CSV fájl megnyitása

A CSV-fájl megnyitása nem különbözik bármely más fájl megnyitásától. Csak ne feledjük, hogy ha a fájl speciális karaktereket tartalmaz, akkor a hibaüzenet elkerülése érdekében be kell írnunk az `encoding='utf-8'` kódolást. Opcionálisan, az adatok importálásakor valószínűleg nem akarjuk beolvasni az újsor karaktert minden sor végén, ezért az `open()` utasításhoz hozzáadhatjuk a `new-line=''`-t. A következőképpen kódolhatod ezt:

```py
# Open CSV file with UTF-8 encoding, don't read in newline characters.
with open('sample.csv', encoding='utf-8', newline='') as f:
```

A CSV-fájlok körbejárásához használhatjuk a beépített `reader()` függvényt, amely végrehajtáskor egy sort olvas be. A szintaxis ismét egyszerű:

```py
reader = csv.reader(f)
```

Helyettesítsük az `f`-et azzal a névvel, amelyet a `with open` utasítás végén használtunk (_a legvégén lévő kettőspont nélkül_) - amennyiben nem `f`-et írtál.

Opcionálisan a sorokat menet közben is megszámolhatjuk. Csak tegyünk mindent az `=` jobb oldalára az `enumerate()`-ben, ahogy az alábbiakban látható (_ahol a kód fölé egy megjegyzést is tettünk_):

```py
# Create a CVS row counter and row reader.
reader = enumerate(csv.reader(f))
```

Ezután beállíthatja a `for:` ciklust úgy, hogy egyszerre csak egy sort olvasson be. Mivel egy enumerate()-et helyeztünk a ciklusra, két változónevet használhatunk a `for:` ciklusban. Az első változó (amelyet `i`-nek __nevezünk__) a __számlálót__ tartja számon (amely 0-ról indul, és a ciklus minden egyes lefutásakor 1-gyel növekszik). A második változó, a `row`, a CSV fájl teljes __adatsorát tartalmazza__:


```py
# Loop through one row at a time, i is counter, row is entire row.
for i, row in reader:
```

A cikluson belül a `print()` függvényt használhatjuk az `i` és a `row` értékének kiírására a ciklus minden egyes átfutásakor, például így:

```py
import csv

# Open CSV file with UTF-8 encoding, don't read in newline characters.
with open("sample.csv", encoding="utf-8", newline="") as f:
    # Create a CVS row counter and row reader.
    reader = enumerate(csv.reader(f))
    # Loop through one row at a time, i is counter, row is entire row.
    for i, row in reader:
        print(i, row)
print("Done")
```
A kód kimenete a korábban ismertetett __sample.csv__ fájlt bemenetként használva a következő:

```txt
0 ['\ufeffFull Name', 'Birth Year', 'Date Joined', 'Is Active', 'Balance']
1 ['Angst, Annie', '1982', '1/11/2011', 'TRUE', '$300.00']
2 ['Bónañas, Barry', '1973', '2/11/2012', 'FALSE', '-$123.45']
3 ['Schadenfreude, Sandy', '2004', '3/3/2003', 'TRUE', '$0.00']
4 ['Weltschmerz, Wanda', '1995', '4/24/1994', 'FALSE', '$999,999.99']
5 ['Malaise, Mindy', '2006', '5/5/2005', 'TRUE', '$454.01']
6 ['OPossum, Ollie', '1987', '7/27/1997', 'FALSE', '-$1,000.00']
7 ['', '', '', '', ' ']
8 ['Pusillanimity, Pamela', '1979', '8/8/2008', 'TRUE', '$12,345.67']
```

Figyeljük meg, hogy az oszlopnevek sora a 0. sor. A Full Name előtti furcsa `\ufeff` ebben a sorban a _byte order mark_ (__BOM__), amit az Excel egyszerűen csak beszúr. Általában nem érdekel, hogy mi van az első sorban, mert az adatok csak a második sorban kezdődnek. Tehát ne is gondoljon a BOM-ra nincs értéke a mi esetünkben, és nem okoz semmilyen problémát.

Amint láthatjuk, minden sor egy öt, vesszővel elválasztott tételből álló lista. A kódunkban az egyes oszlopokra a pozíciójukkal hivatkozhatunk. Például a `row[0]` az első oszlop a sorban (__a személy neve__). Ezután a `row[1]` a születési év, a `row[2]` a csatlakozási dátum, a `row[3]` az, hogy a személy aktív-e, és a `row[4]` az egyenleg.

__A CSV-fájlban minden adat karakterláncokból áll__ - még akkor is, ha nem úgy néznek ki, mint a karakterláncok. De minden és minden, ami egy CSV-fájlból származik, egy karakterlánc, mert a CSV-fájl egyfajta szövegfájl, és a szövegfájl csak karakterláncokat (__szöveget__) tartalmaz - __integereket, dátumokat, booleanokat vagy float értékeket nem.__

Az alkalmazásodban valószínűleg Python adattípusokká akarod majd konvertálni a bejövő adatokat, hogy hatékonyabban tudj velük dolgozni, vagy akár átvinni őket egy adatbázisba. A következő szakaszokban megnézzük, hogyan végezhetjük el a konverziót az egyes adattípusok esetében.

### Stringre (karakterláncá) való alakítás

Gyakorlatilag semmit sem kell a CSV-fájlból karakterlánccá konvertálnia. De előfordulhat, hogy a fájlt egy kicsit fel kell darabolni, vagy az üres karakterláncokat valamilyen módon kezelni kell. Először is, mint említettük, itt csak az adatokkal foglalkozunk, nem azzal az első sorral. Tehát a cikluson belül kezdhetjük egy `if`-fel, amely nem csinál semmit, ha az aktuális sor a 0. sor. A `print(i, row)` helyettesíthető így:

```py
# Row 0 is just column headings, ignore it. 
if i > 0:
    full_name = row[0].split(',')
    last_name = full_name[0].strip()
    first_name = full_name[1].strip()
```

Ez a kód azt mondja: _"Amíg nem az első sort nézzük, hozzon létre egy `full_name` nevű változót, és tárolja benne, ami az első oszlopban van, a vesszőnél két külön értékre osztva."_. Miután ez a sor végrehajtódik, a `full_name[0]` tartalmazza a személy vezetéknevét, amelyet a `last_name` nevű változóba teszünk, a `full_name[1]` pedig a személy keresztnevét, amelyet a `first_name` nevű változóba teszünk. De ha így futtatjuk a kódot, akkor hibára fut, mert a __7. sor__-ban nincs név, és a Python nem tud egy üres karakterláncot vesszőnél szétválasztani - __mert az üres karakterlánc nem tartalmaz vesszőt__.

Ezt megkerülhetjük azzal, hogy a Pythonnak megmondjuk, hogy próbálja meg a nevet a vesszőnél szétválasztani, ha ez lehetséges. De ha a próbálkozás közben hibára futna, akkor egyszerűen tároljon egy üres karakterláncot a `full_name`, `last_name` és `first_name` változókban. Itt van ez a kód néhány extra vesszővel, hogy megmagyarázzuk, mi történik. Ahelyett, hogy `i`-t és a teljes sort kiírná, a kód a keresztnevet és a vezetéknevet írja ki __és semmit arra a sorra, amelynek az információja hiányzik__. A kimenet a kód alatt jelenik meg:

```py
import csv

# Open CSV file with UTF-8 encoding, don't read in newline characters.
with open("sample.csv", encoding="utf-8", newline="") as f:
    # # Create a CVS row counter and row reader.
    reader = enumerate(csv.reader(f))
    # Loop through one row at a time, i is counter, row is entire row.
    for i, row in reader:
        # Row 0 is just column headings, ignore it.
        if i > 0:
            # Whole name split into two at comma.
            try:
                full_name = row[0].split(",")
                # Last name, strip extra spaces.
                last_name = full_name[0].strip()
                # First name, strip extra spaces.
                first_name = full_name[1].strip()
            except IndexError:
                full_name = last_name = first_name = ""
            print(first_name, last_name)
print("Done!")
```

Kimenet:

```txt
Annie Angst
Barry Bónañas
Sandy Schadenfreude
Wanda Weltschmerz
Mindy Malaise
Ollie OPossum
 
Pamela Pusillanimity
Done!
```

### Integerre (egész számra) való átalakítás

Minden sor második oszlopa, a `row[1]` a születési év. Amíg a karakterlánc olyasmit tartalmaz, ami számmá konvertálható, addig az egyszerű beépített `int()` függvénnyel egész számmá konvertálhatjuk. A __7. sorban van egy problémánk__, amely üres. A Python nem fogja automatikusan 0-ra konvertálni, egy kicsit segítenünk kell neki a következők szerint:

```py
# Birth year integer, zero for empty string. 
birth_year = int(row[1] or 0)
```

Ez a kódsor így szól: __"Hozz létre egy `birth_year` nevű változót, és tedd bele a második oszlop értékét, ha tudod, vagy ha nincs semmi, amit egész számmá lehetne konvertálni, akkor csak egy nullát írj bele"__.

### Datere (dátumra) való átalakítás

A CSV-fájlunk harmadik oszlopa, a `row[2]`, a dátumot tartalmazza, és úgy tűnik, hogy minden sorban van egy ésszerű dátum _(kivéve azt a sort, amelynek az adatai hiányoznak)_. Ahhoz, hogy a szöveges dátumot Python-dátummá konvertáljuk, importálnunk kell a `datetime` modult az `import datetime as dt` hozzáadásával a program tetején. Ezután az egyszerű konverzió a következő:

```py
date_joined = dt.datetime.strptime(row[2], "%m/%d/%Y").date()
```

Sok minden történik itt. Először is létrehozunk egy változót, amelynek a neve `date_joined`. A `strptime` kód azt jelenti, hogy "__string parse for date time__". A `row[2]` kód a harmadik oszlopot jelenti (__mivel az első oszlop mindig a 0. oszlop__). A "__%m/%d/%Y__" azt mondja az `strptime`-nak, hogy a dátum karakterlánc tartalmazza a hónapot, egy kötőjelet, a hónap napját, egy kötőjelet, majd a négyjegyű évet (__%Y__). A `.date()` a végén azt jelenti, hogy "_csak a dátum, itt nincs idő, amit elemezni kell_".

Egy kis probléma. Amikor a program eljut ahhoz a sorhoz, amelynek a dátuma hiányzik, akkor hibára fog futni. Ezért ismét egy `try` blokkot használunk a dátum átalakítására, ha nem talál dátumot, akkor a `None` értéket adjon, ami a Pythonban az üres objektumot jelenti.

Pythonban a `datetime` egy osztály, így minden dátum és idő, amit létrehozol, egy objektum (a `datetime` típusból). Az üres karakterláncra a `''`, az üres objektumra pedig a `None` értéket használjuk.

Íme a kód jelenlegi állapotában:

```py
import csv
import datetime as dt

# Open CSV file with UTF-8 encoding, don't read in newline characters.
with open("sample.csv", encoding="utf-8", newline="") as f:
    # Create a CVS row counter and row reader.
    reader = enumerate(csv.reader(f))
    # Loop through one row at a time, i is counter, row is entire row.
    for i, row in reader:
        # Row 0 is just column headings, ignore it.
        if i > 0:
            # Whole name split into two at comma.
            try:
                full_name = row[0].split(",")
                # Last name, strip extra spaces.
                last_name = full_name[0].strip()
                # First name, strip extra spaces.
                first_name = full_name[1].strip()
            except IndexError:
                full_name = last_name = first_name = ""

            # Birth year integer, zero for empty string.
            birth_year = int(row[1] or 0)
            
            # Date_joined is a date.
            try:
                date_joined = dt.datetime.strptime(row[2], "%m/%d/%Y").date()
            except ValueError:
                date_joined = None
            
            print(first_name, last_name, birth_year, date_joined)
print("Done!")
```

Íme a kód kimenete, amely most már kiírja a `first_name`, `last_name`, `birth_year` és `date_joined` adatokat a táblázat minden egyes sorának átfutásakor:

```txt
Annie Angst 1982 2011-01-11
Barry Bónañas 1973 2012-02-11
Sandy Schadenfreude 2004 2003-03-03
Wanda Weltschmerz 1995 1994-04-24
Mindy Malaise 2006 2005-05-05
Ollie OPossum 1987 1997-07-27
  0 None
Pamela Pusillanimity 1979 2008-08-08
Done!
```

### Booleanra (logikai értékre) való átalakítás

A negyedik oszlop, a `row[3]` minden sorban `TRUE` vagy `FALSE` értéket tartalmaz. Az Excel az összes nagybetűt használja, amelyek automatikusan átkerülnek a CSV-fájlba, amikor az Excelben CSV-ként mentjük. A Python nagy kezdőbetűket használ, `True` és `False`. A Python rendelkezik egy egyszerű `bool()` függvénnyel az adatok Boolean értékűvé alakításához. A `bool()` függvény nem fog hibázni, ha üres cellába ütközik - __azt a cellát egyszerűen hamisnak tekinti__. Az átalakítás a következő egyszerű módon történik:

```py
# is_active is a Boolean, automatically False for empty string.
is_active = bool(row[3])
```
### Floatra (lebegőpontosra) való átalakítás

Minden sor ötödik oszlopa tartalmazza az egyenleget, amely egy dollárösszeg. A Pythonban azt szeretnénk, ha a dollárösszeg tényleges numerikus érték lenne, hogy számolni tudjunk. A `float` adattípus azért jó, mert a fillérekhez tizedesvesszőket is megadhatunk. De van egy lehetséges probléma. A Pythonban a lebegőszámok nem tartalmazhatnak dollárjelet (`$`) vagy vesszőt (`,`), ezért ezeket el kell távolítania a karakterláncból. Továbbá, nem lehetnek elöl és hátul szóközök. Ezeket könnyen eltávolíthatjuk a `strip()` metódussal ❤️. A következő kódsor létrehoz egy `str_balance` nevű változót (_amely még mindig egy karakterlánc_), de a dollárjel, a vessző és az esetleges szóközök eltávolításával:


```py
# Remove $, commas, leading trailing spaces.
str_balance = (row[4].replace('$', '').replace(',', '')).strip()
```

Ezt a második sort a következőképpen olvashatja: "__Az `str_balance` nevű új karakterlánc az ötödik oszlopban lévő adatokból áll, miután a dollárjeleket semmivel, a vesszőket semmivel helyettesítettük, és eltávolítottuk a elejéről és a végéről a szóközöket.__".

A sor alatt egy másik sort is hozzáadhatsz, hogy az létrehozzon egy `balance` nevű floatotot, amely a beépített `float()` metódust használja a `str_balance` karakterlánc floattá alakítására. Az `int()` metódushoz hasonlóan a `float()` is 0-t tárol, ha nem tudja értelmezni azt, amikor a floatot számmá próbálja alakítani.

```py
# Balance is a float or zero for empty string.
balance = float(str_balance or 0)
```

A lenti ábrán látható kódban minden a helyén van, beleértve a `print()` sort is, amely megjeleníti mind az öt oszlop értékét az átalakítás után.

![img](/assets/images/python/12/3.png)

🖼️ _CSV fájl beolvasása és Python adattípusokká konvertálása._


:::tip REGULÁRIS KIFEJEZÉSEK HASZNÁLATA PYTHONBAN

Feltételezzem, hogy ismersz már más programozási nyelveket és talán elgondolkodtál azon, hogy a `replace()` metódus helyett miért nem egy reguláris kifejezést használtunk a _dollárjel_ és a _vessző_ eltávolítására az egyenlegből.

Nos, a reguláris kifejezések nincsenek beépítve a Pythonba. Tehát ha használni akarod őket, akkor egy `import re` -t kell tenned a kódod elejére, ami csak a reguláris kifejezések helyettesítési képességeit használja, erre a kódod elejének közelében lenne szükséged:

```py
from re import sub
```

A kódban kicserélhetjük a

```py
str_balance = (row[4].replace('$', '').replace(',', '')).strip()
```

erre

```py
str_balance = (sub(r'[\s\$,]', '', row[4])).strip()
```

Ez a sor ugyanazt teszi, mint az eredeti sor. Eltávolítja a dollárjelet, a vesszőket, valamint a szóközöket az ötödik oszlop értékéből.
:::


## CSV-ből objektumokba és szótárakba való konvertálás

Már láttad, hogyan olvashatsz be adatokat egy CSV-fájlból, és hogyan konvertálhatod az adatokat az alapértelmezett string adattípusból egy megfelelő Python adattípusba. Mindezek mellett az adatokat osztályból generált objektumok csoportjába, vagy esetleg egy nagyobb szótáron belüli szótárak halmazába szeretnéd rendezni.

Minden eddig tanult kód hasznos lesz, mert szükséges a munka elvégzéséhez. Hogy csökkentsük a példákban a zsúfoltságot, az adatok átalakítására szolgáló különböző kódrészleteket saját függvényekbe helyeztük. Ez lehetővé teszi, hogy egy adatelemet csak a függvény nevének használatával konvertáljon az értékkel együtt, például `balance(row[4])`.

### CSV importálása Python objektumokba

Ha azt szeretnénk, hogy a CSV-fájl adatai objektumok listájába legyenek rendezve, írjuk a kódot az itt látható módon:

```py :no-line-numbers
import datetime as dt
import csv

# Use these functions to convert any string to appropriate Python data type.
# Get just the first name from full name.
def fname(any):
    try:
        nm = any.split(",")
        return nm[1]
    except IndexError:
        return ""


# Get just the last name from full name.
def lname(any):
    try:
        nm = any.split(",")
        return nm[0]
    except IndexError:
        return ""


# Convert string to integer or zero if no value.
def integer(any):
    return int(any or 0)


# Convert mm/dd/yyyy date to date or None if no valid date.
def date(any):
    try:
        return dt.datetime.strptime(any, "%m/%d/%Y").date()
    except ValueError:
        return None


# Convert any string to Boolean, False if no value.
def boolean(any):
    return bool(any)


# Convert string to float, or to zero if no value.
def floatnum(any):
    s_balance = (any.replace("$", "").replace(",", "")).strip()
    return float(s_balance or 0)


# Create an empty list of people.
people = []

# Define a class where each person is an object.
class Person:
    def __init__(
        self,
        id,
        first_name,
        last_name, 
        birth_year, 
        date_joined, 
        is_active, 
        balance
    ):
        self.id = id
        self.first_name = first_name
        self.last_name = last_name
        self.birth_year = birth_year
        self.date_joined = date_joined
        self.is_active = is_active
        self.balance = balance


# Open CSV file with UTF-8 encoding, don't read in newline characters.
with open("sample.csv", encoding="utf-8", newline="") as f:
    # Set up a csv reader with a counter.
    reader = enumerate(csv.reader(f))
    # Skip the first row, which is column names.
    f.readline()
    # Loop through remaining rows one at a time, 
    # i is counter, row is 
    # entire row.
    for i, row in reader:
        # From each data row in the CSV file,
        # create a Person object with unique 
        # id and appropriate data types, 
        # add to people list.
        people.append(
            Person(
                i,
                fname(row[0]),
                lname(row[0]),
                integer(row[1]),
                date(row[2]),
                boolean(row[3]),
                floatnum(row[4])
            )
        )

# When above loop is done, show all objects in the people list.
for p in people:
    print(
        p.id,
        p.first_name,
        p.last_name,
        p.birth_year,
        p.date_joined,
        p.is_active,
        p.balance,
    )
```

Kód kimenete:

```txt
0  Annie Angst 1982 2011-01-11 True 300.0
1  Barry Bónañas 1973 2012-02-11 True -123.45
2  Sandy Schadenfreude 2004 2003-03-03 True 0.0
3  Wanda Weltschmerz 1995 1994-04-24 True 999999.99
4  Mindy Malaise 2006 2005-05-05 True 454.01
5  Ollie OPossum 1987 1997-07-27 True -1000.0
6   0 None False 0.0
7  Pamela Pusillanimity 1979 2008-08-08 True 12345.67
```

#### Így működik a kód

Az első néhány sor a szükséges importálások, majd néhány függvény következik, amelyek a bejövő sztringadatokat Python adattípusokká konvertálják. Ez a kód hasonló a témakör korábbi példáihoz ebben a témában. Csak a konverziós kódot külön függvényekre osztottuk, hogy mindent egy kicsit szétválasszunk:

```py
# Use these functions to convert any string to appropriate Python data type.
# Get just the first name from full name.
def fname(any):
    try:
        nm = any.split(",")
        return nm[1]
    except IndexError:
        return ""


# Get just the last name from full name.
def lname(any):
    try:
        nm = any.split(",")
        return nm[0]
    except IndexError:
        return ""


# Convert string to integer or zero if no value.
def integer(any):
    return int(any or 0)


# Convert mm/dd/yyyy date to date or None if no valid date.
def date(any):
    try:
        return dt.datetime.strptime(any, "%m/%d/%Y").date()
    except ValueError:
        return None


# Convert any string to Boolean, False if no value.
def boolean(any):
    return bool(any)


# Convert string to float, or to zero if no value.
def floatnum(any):
    s_balance = (any.replace("$", "").replace(",", "")).strip()
    return float(s_balance or 0)

```

A következő sor egy üres listát hoz létre `people` néven, hogy helyet biztosítson a program által a CSV fájlból létrehozandó objektumok tárolására:

```py
# Create an empty list of people.
people = []
```

Ezután a kód definiál egy osztályt, amely az összes `Person` objektum generálására szolgál a CSV fájlból:

```py
# Define a class where each person is an object.
class Person:
    def __init__(
        self,
        id,
        first_name,
        last_name, 
        birth_year, 
        date_joined, 
        is_active, 
        balance
    ):
        self.id = id
        self.first_name = first_name
        self.last_name = last_name
        self.birth_year = birth_year
        self.date_joined = date_joined
        self.is_active = is_active
        self.balance = balance
```

A CSV fájl beolvasása a következő sorokban kezdődik. A kód megnyitja a `sample.csv` fájlt kódolással. A `newline=''` csak megakadályozza, hogy a kód az egyes sorok végén lévő újsor karaktert az egyes sorok utolsó adatelemére illessze. Az olvasó egy enumerátort használ a sorok olvasása közbeni számláláshoz. Az `f.readline()` beolvassa az első sort, ami csak oszlopfejekből áll, így az ezt követő `for` a második soron kezdődik. Az `i` változó a `for` ciklusban a növekvő számláló, a sor pedig a `CSV fájl` teljes adatsora:

```py
# Open CSV file with UTF-8 encoding, don't read in newline characters.
with open("sample.csv", encoding="utf-8", newline="") as f:
    # Set up a csv reader with a counter.
    reader = enumerate(csv.reader(f))
    # Skip the first row, which is column names.
    f.readline()
    # Loop through remaining rows one at a time, 
    # i is counter, row is 
    # entire row.
    for i, row in reader:
```

A kód a ciklus minden egyes lépésénél létrehoz egy `Person` objektumot a növekvő számlálóból (`i`), és hozzáadja az adatokat a sorban. Figyeljük meg, hogy a kódban korábban definiált függvényeket hívtuk meg az adattípus-átalakítások elvégzéséhez. Ez tömörebbé teszi a kódot, és egy kicsit könnyebbé teszi az olvasást és a munkát:

```py
# From each data row in the CSV file,
# create a Person object with unique 
# id and appropriate data types, 
# add to people list.
        people.append(
            Person(
                i,
                fname(row[0]),
                lname(row[0]),
                integer(row[1]),
                date(row[2]),
                boolean(row[3]),
                floatnum(row[4])
            )
        )
```

Amikor a ciklus befejeződött, a következő kód egyszerűen megjeleníti az objektumokat a képernyőn, hogy ellenőrizzük, hogy a kód helyesen működött:

```py
# When above loop is done, show all objects in the people list.
for p in people:
    print(
        p.id,
        p.first_name,
        p.last_name,
        p.birth_year,
        p.date_joined,
        p.is_active,
        p.balance,
    )
```

### CSV importálása Python szótárakba

Ha a CSV-fájl minden egyes adatsorát saját szótárban szeretnénk tárolni, akkor az objektumok létrehozására az előző kódhoz hasonló kódot használhatunk. Az osztálydefiníciós kódra nincs szükség, mert itt nem fogunk objektumokat létrehozni. 

Az `people` lista létrehozása helyett létrehozhat egy üres `people` szótárat, amely az összes egyéni személy szótárat tartalmazza, például így:

```py
#  Create an empty dictionary of people.
people = {}
```

Ami a ciklust illeti, ismét használhatunk egy enumerátort (`i`) a sorok számolásához, és ezt az egyedi értéket használhatjuk minden új szótár kulcsaként is. A `newdict=` kezdetű sor a Python beépített `dict()` függvényének segítségével létrehoz egy szótárat egy CSV-fájl sorának adataival. A következő sor az `i` plusz 1 értéket rendeli hozzá minden egyes újonnan létrehozott szótárhoz (_hogy a számlálást 0 helyett 1-gyel kezdjük_):

```py
# Loop through remaining rows one at a time, i is counter, row is entire row.
for i, row in reader:
    # From each data row in the CSV file, create a dictionary item with unique
    # id and appropriate data types, add to people list.
    newdict = dict(
        {
            "first_name": fname(row[0]),
            "last_name": lname(row[0]),
            "birth_year": integer(row[1]),
            "date_joined": date(row[2]),
            "is_active": boolean(row[3]),
            "balance": floatnum(row[4]),
        }
    )
    people[i + 1] = newdict
```

Annak ellenőrzésére, hogy a kód helyesen futott-e, végighaladhatunk az people szótárának szótárain, és minden egyes sorban megjeleníthetjük a kulcs:érték párost minden egyes adatelemhez. A lenti ábra mutatja a kód futtatásának eredményét a VS Code-ban:

![img](/assets/images/python/12/4.jpg)

🖼️ _CSV fájl beolvasása szótárak szótárába._

Itt van az összes kód, amely beolvassa az adatokat a CSV-fájlokból a szótárakba:

```py :no-line-numbers
import datetime as dt
import csv

# Use these functions to convert any string to appropriate Python data type.
# Get just the first name from full name.
def fname(any):
    try:
        nm = any.split(",")
        return nm[1]
    except IndexError:
        return ""


# Get just the last name from full name.
def lname(any):
    try:
        nm = any.split(",")
        return nm[0]
    except IndexError:
        return ""


# Convert string to integer or zero if no value.
def integer(any):
    return int(any or 0)


# Convert mm/dd/yyyy date to date or None if no valid date.
def date(any):
    try:
        return dt.datetime.strptime(any, "%m/%d/%Y").date()
    except ValueError:
        return None


# Convert any string to Boolean, False if no value.
def boolean(any):
    return bool(any)


# Convert string to float, or to zero if no value.
def floatnum(any):
    s_balance = (any.replace("$", "").replace(",", "")).strip()
    return float(s_balance or 0)

#  Create an empty dictionary of people.
people = {}

# Open CSV file with UTF-8 encoding, don't read in newline characters.
with open("sample.csv", encoding="utf-8", newline="") as f:
    # Set up a csv reader with a counter.
    reader = enumerate(csv.reader(f))
    # Skip the first row, which is column names.
    f.readline()
    # Loop through remaining rows one at a time, i is counter, row is entire row.
    for i, row in reader:
        # From each data row in the CSV file, create a dictionary item with unique
        # id and appropriate data types, add to people list.
        newdict = dict(
            {
                "first_name": fname(row[0]),
                "last_name": lname(row[0]),
                "birth_year": integer(row[1]),
                "date_joined": date(row[2]),
                "is_active": boolean(row[3]),
                "balance": floatnum(row[4])
            }
        )
        people[i + 1] = newdict

# When above loop is done, show all objects in the people list.
for person in people.keys():
    id = person
    print(
        id,
        people[person]["first_name"], \
        people[person]["last_name"], \
        people[person]["birth_year"], \
        people[person]["date_joined"], \
        people[person]["is_active"], \
        people[person]["balance"]
    )
```

A CSV-fájlokat széles körben használják, mivel a táblázatokból és adatbázis-táblákból könnyen lehet adatokat exportálni ebbe a formátumba. Az adatok kinyerése ezekből a fájlokból időnként trükkös lehet, de a Python csv modulja nagy segítség lehet. A csv modul gondoskodik sok részletről, viszonylag könnyen elvégezhetővé teszi az egy-egy soron való átfutást, és az adatokat úgy kezeli, ahogyan azt a Python alkalmazásodban jónak látod.

A CSV-hez hasonlóan az adatok egyszerű szöveges formátumban történő szállítására és tárolására alkalmas a JSON, vagyis a JavaScript Object Notation.