# 9. tananyag

## Osztályok

Már láttuk, hogyan használhatunk szótárat az összefüggő adatok csoportosítására, és hogyan használhatunk függvényeket a gyakran használt utasításcsoportok rövidítésére. Egy függvény egy műveletet hajt végre bizonyos bemeneti paraméterek felhasználásával. Nem minden függvény alkalmazható mindenféle adatra. Az osztályok az összefüggő adatok és az adatokon dolgozó függvények csoportosítására szolgálnak.

Az osztály egyfajta adattípus, akárcsak a karakterlánc, az egész szám vagy a lista. Amikor egy ilyen adattípusú objektumot hozunk létre, azt egy osztály példányának nevezzük.

:::tip Entitás
Az entitás bármely egyedi, azonosítható és különálló objektum. Azokra az egyénekre, szervezetekre, rendszerekre, adatok bitjeire vagy akár különálló rendszerösszetevőkre vonatkozik, amelyeket önmagukban jelentősnek tekintnek.

A kifejezést számos programozási nyelvben / fogalomban, adatbáziskezelésben, rendszerek tervezésében és más területeken használják.
:::

Mint már említettük, néhány más nyelvben egyes entitások objektumok, mások pedig nem. A Pythonban minden objektum - minden valamilyen osztály példánya. A Python korábbi verzióiban különbséget tettek a beépített típusok és a felhasználó által definiált osztályok között, de ezek ma már teljesen megkülönböztethetetlenek. Az osztályok és típusok maguk is objektumok, és `type` típusúak. Bármely objektum típusát a `type` függvény segítségével megtudhatjuk:

```py
type(any_object)
```

Az objektumon belül tárolt adatértékeket attribútumoknak, az objektumhoz kapcsolódó függvényeket pedig metódusoknak nevezzük. Néhány beépített objektum, például a karakterláncok és a listák metódusait már használtuk.

Amikor saját objektumokat tervezünk, el kell döntenünk, hogyan fogjuk csoportosítani a dolgokat, és mit fognak az objektumaink képviselni.

Néha olyan objektumokat írunk, amelyek nagyon intuitív módon illeszkednek a valós világ dolgaihoz. Például, ha kémiai reakciók szimulálására írunk kódot, akkor lehetnek `Atom` objektumaink, amelyeket kombinálhatunk, hogy egy `Molekula` objektumot hozzunk létre. Azonban nem mindig szükséges vagy egyáltalán lehetséges, hogy minden kódolt objektum tökéletesen megfeleljen a valós világbeli társaival.

Néha létrehozhatunk olyan objektumokat, amelyeknek nincs semmilyen valós megfelelőjük, csak azért, mert hasznos bizonyos funkciókat csoportosítani.


### Egy osztály definiálása és használata

Íme egy példa egy egyszerű egyéni osztályra, amely egy Személyre vonatkozó információkat tárol:

```py
import datetime

class Person:

    def __init__(self, name, surname, birthdate, address, telephone, email):
        self.name = name
        self.surname = surname
        self.birthdate = birthdate

        self.address = address
        self.telephone = telephone
        self.email = email

    def age(self):
        today = datetime.date.today()
        age = today.year - self.birthdate.year

        if today < datetime.date(today.year, self.birthdate.month, self.birthdate.day):
            age -= 1

        return age

person = Person(
    "Jane",
    "Doe",
    datetime.date(1992, 3, 12),
    "No. 12 Short Street, Greenville",
    "555 456 0987",
    "jane.doe@example.com"
)

print(person.name)
print(person.email)
print(person.age())
```

Az osztálydefiníciót az osztály kulcsszóval kezdjük, amelyet az osztály neve és egy kettőspont követ. A kettőspont előtt zárójelek között felsorolnánk a szülő osztályokat, de ennek az osztálynak nincsenek, így kihagyhatjuk őket.


Az osztályon belül két függvényt definiálunk - ezek az objektumunk metódusai. Az első a `__init__`, amely egy speciális metódus. Amikor meghívjuk az osztályobjektumot, az osztály egy új példánya jön létre, és az `__init__` metódus ezen az új objektumon azonnal végrehajtódik az összes paraméterrel, amelyet az osztályobjektumnak átadtunk. A metódus célja tehát egy új objektum létrehozása az általunk megadott adatok felhasználásával.

A második metódus egy egyéni metódus, amely a születési dátum és az aktuális dátum alapján számítja ki a személy életkorát.


:::danger ❗FONTOS❗
Az `__init__`-t az objektum konstruktorának nevezik, mert hasonlóan használják, mint más nyelvekben a konstruktorokat, de ez technikailag nem helyes - jobb, ha inicializálónak hívjuk.
:::

Talán észrevetted, hogy mindkét metódusdefinícióban a `self` az első paraméter, és ezt a változót használjuk a metóduson belül - viszont nem adjuk át ezt a paramétert. Ennek az az oka, hogy amikor egy objektumon hívunk meg egy metódust, az objektum maga automatikusan átadásra kerül első paraméterként. Ez lehetőséget ad arra, hogy az objektum metódusain belülről elérjük az objektum tulajdonságait.

Egyes nyelvekben ez a paraméter implicit - azaz nem látható a függvény leírásában -, és egy speciális kulcsszóval érjük el. A Pythonban explicit módon van kitéve. Nem kell `self`-nek hívni, __de ez egy nagyon erősen követett konvenció.__

Most már láthatod, hogy a `__init__` függvényünk létrehozza az objektum attribútumait, és beállítja azokat a paraméterként átadott értékekre. Az attribútumoknak és a paramétereknek ugyanazokat a neveket használjuk, de ez nem kötelező.

Az `age` függvény nem fogad el paramétereket, kivéve a `self`-et - _mivel csak az objektum attribútumaiban tárolt információkat és az aktuális dátumot használja_ - amelyet a `datetime` modul segítségével kérdez le.

Vegyük észre, hogy a `birthdate` attribútum maga is egy objektum. A `date` osztály a `datetime` modulban van definiálva, és létrehozzuk ennek az osztálynak egy új példányát, amelyet a születési dátum paraméterként használunk, amikor létrehozzuk a `Person` osztály egy példányát. Nem kell egy köztes változóhoz hozzárendelnünk, mielőtt a `Person` paramétereként használnánk, egyszerűen létrehozhatjuk a `Person` hívásakor, ahogyan a többi paraméter string literálját is létrehozzuk.


:::tip Literál
A literál nem más, mint a program szövegében direkt módon beleírt adat.
:::

### Feladat

Magyarázd el, hogy a következő változók mire hivatkoznak, és milyen hatókörrel rendelkeznek:

1. `Person`
2. `person`
3. `surname`
4. `self`
5. `age` (függvény neve)
6. `age` (függvényen belül használt változó)
7. `self.email`
8. `person.email`


::: details Megoldás
:::warning 👀
1. A `Person` egy globális szinten definiált __osztály__. Ez egy globális változó.
2. `person` a `Person` osztály egy példánya. Ez is egy globális változó.
3. `surname` az `__init__` metódusba átadott paraméter - ez egy helyi változó az `__init__` metódusban.
4. A `self` egy paraméter, amelyet az osztály minden egyes példány metódusába átadunk - _ez a példány az objektummal lesz helyettesítve, amikor a metódust az objektumon a `.` operátorral hívjuk meg. Ez egy új helyi változó az egyes metódusokon belül_ - csak mindig ugyanazzal az értékkel rendelkezik, és a konvenció szerint mindig ugyanazt a nevet kapja, hogy ezt tükrözze.
5. `age` a `Person` osztály egyik metódusa.
6. Az `age` egy helyi változó az `age` metóduson belül.
7. A `self.email` nem igazán különálló változó. Ez egy példa arra, hogy hogyan hivatkozhatunk egy objektum attribútumaira egy olyan változóval, amely az objektumra, a `.` operátorral és az attribútum nevére utal. A `self` változót arra használjuk, hogy egy objektumra hivatkozzunk az objektum egyik saját metódusán belül - bárhol, ahol a `self` változó definiálva van, használhatjuk a `self.email`, `self.age()` stb. változót.
8. A `person.email` egy másik példa ugyanerre. A `person` példányunkra a `person` nevű változóval hivatkozunk. Ahol a `person` definiálva van, ott használhatjuk a `person.email`, `person.age()` stb. változót.
:::

## Példányok attribútumai

Fontos megjegyezni, hogy az `__init__` függvényben az objektumra beállított attribútumok nem képezik az összes olyan attribútum listáját, amellyel az objektumunk valaha is rendelkezhet.

Egyes nyelvekben az osztálydefinícióban meg kell adnunk az objektum attribútumainak listáját, az objektum létrehozásakor placerholdereket hozunk létre ezeknek a megengedett attribútumoknak, és később nem adhatunk hozzá új attribútumokat az objektumhoz. A Pythonban menet közben is hozzáadhatunk új attribútumokat, sőt új metódusokat is az objektumhoz. Valójában semmi különös nincs a `__init__` függvényben, amikor az attribútumok beállításáról van szó. Az `age` függvényben tárolhatunk egy gyorsítótárazott életkor értéket az objektumon:

```py
def age(self):
    if hasattr(self, "_age"):
        return self._age

    today = datetime.date.today()

    age = today.year - self.birthdate.year

    if today < datetime.date(today.year, self.birthdate.month, self.birthdate.day):
        age -= 1

    self._age = age
    return age
```

Az attribútum vagy metódus nevének aláhúzással (`_`) való indítása egy olyan konvenció, amelyet arra használunk, hogy jelezzük, hogy ez egy `private` belső tulajdonság, és nem lehet közvetlenül elérni. Egy reálisabb példában felfoghatjuk úgyis, hogy a gyorsítótárazott értékünk néha lejárna, és újra kellene számolni - _ezért mindig az `age` metódust kellene használnunk, hogy biztosak legyünk benne, hogy a megfelelő értéket kapjuk._

Akár egy teljesen független attribútumot is hozzáadhatunk az objektumon kívülről:

```py
person.pets = ['cat', 'cat', 'dog']
```

:::danger ⚠️
Nagyon gyakori, hogy egy objektum metódusai frissítik az objektum attribútumainak értékeit, de rossz gyakorlatnak számít új attribútumokat létrehozni egy metódusban anélkül, hogy azokat inicializálnánk a `__init__` metódusban. Az objektumon kívülről történő tetszőleges tulajdonságok beállítása még inkább elítélendő, mivel ez megtöri az objektumorientált paradigmát.
:::

A fenti `age` példában ellenőriznünk kell, hogy létezik-e `_age` attribútum az objektumon, mielőtt megpróbáljuk használni, mert ha még nem futtattuk az `age` metódust, akkor még nem jött létre. Sokkal rendezettebb lenne, ha legalább egyszer meghívnánk ezt a metódust az `__init__`-ből, hogy biztosak legyünk benne, hogy az `_age` létrejön, amint létrehozzuk az objektumot.

Az összes attribútumunk inicializálása az `__init__`-ben, még ha csak üres értékeket is adunk meg nekik, kevésbé teszi a kódunkat hibaérzékennyé. Emellett könnyebben olvashatóvá és érthetővé is teszi - egy pillantással láthatjuk, hogy milyen attribútumokkal rendelkezik az objektumunk.

A `__init__` metódusnak nem kell paramétereket fogadnia (__kivéve a self-et__), és teljesen ki is hagyható.

:::tip ℹ️

### `getattr`, `setattr` és `hasattr`

Mi van akkor, ha egy objektum egy attribútumának értékét szeretnénk lekérdezni vagy beállítani anélkül, hogy azt hardcode-olnánk? Néha előfordulhat, hogy több attribútum nevén akarunk végighaladni, és ugyanazt a műveletet végrehajtani mindegyiken, ahogyan ebben a példában is, amely egy szótárat használ:

```py
for key in ["a", "b", "c"]:
    print(mydict[key])
```

Hogyan tehetünk valami hasonlót egy tárggyal? Nem használhatjuk a `.` operátort, mert azt az attribútum nevének puszta szóként kell követnie. Ha az attribútumnevünket karakterláncértékként tároljuk egy változóban, akkor a `getattr` függvényt kell használnunk az attribútumérték kinyeréséhez egy objektumból:

```py
for key in ["a", "b", "c"]:
    print(getattr(myobject, key, None))
```

Vegyük észre, hogy a `getattr` egy beépített függvény, nem pedig egy metódus az objektumban. Első paraméterként az objektumot veszi fel. A második paraméter a változó neve karakterláncként, a választható harmadik paraméter pedig az alapértelmezett érték, amelyet akkor kell visszaadni, ha az attribútum nem létezik. Ha nem adunk meg alapértelmezett értéket, a `getattr` kivételt fog generálni, ha az attribútum nem létezik.

Hasonlóképpen, a `setattr` lehetővé teszi egy attribútum értékének beállítását. Ebben a példában egy szótárból másolunk adatokat egy objektumba:

```py
for key in ["a", "b", "c"]:
    setattr(myobject, key, mydict[key])
```

A `setattr` első paramétere az objektum, a második a függvény neve, a harmadik pedig az attribútum új értéke.

Ahogy az előző `age` függvény példájában láttuk, a `hasattr` érzékeli, hogy létezik-e egy attribútum.

Semmi sem akadályoz meg minket abban, hogy a `getattr`-t használjuk az attribútumokra, még akkor is, ha a név hardcodeolható, de ez nem ajánlott. Ez az attribútumok elérésének szükségtelenül hosszadalmas és kerülő útja:

```py
getattr(myobject, "a")

# means the same thing as

myobject.a
```

Ezeket a függvényeket csak akkor használjuk, ha jó okunk van rá.
:::

### Feladat

Írja át a `Person` osztályt úgy, hogy egy személy életkora először akkor kerüljön kiszámításra, amikor egy új példányt hozunk létre. Valamint az életkora kerüljön újra kiszámításra, ha a nap megváltozott a legutóbbi számítás óta.

:::details Megoldás

Íme egy lehetséges megoldás:

```py
import datetime

class Person:

    def __init__(self, name, surname, birthdate, address, telephone, email):
        self.name = name
        self.surname = surname
        self.birthdate = birthdate

        self.address = address
        self.telephone = telephone
        self.email = email

        # This isn't strictly necessary, but it clearly introduces these attributes
        self._age = None
        self._age_last_recalculated = None

        self._recalculate_age()

    def _recalculate_age(self):
        today = datetime.date.today()
        age = today.year - self.birthdate.year

        if today < datetime.date(today.year, self.birthdate.month, self.birthdate.day):
            age -= 1

        self._age = age
        self._age_last_recalculated = today

    def age(self):
        if (datetime.date.today() > self._age_last_recalculated):
            self._recalculate_age()

        return self._age
```
:::


## Az osztály attribútumai

A `Person` példányon definiált összes attribútum példányattribútum - az `__init__` metódus végrehajtásakor kerülnek hozzá a példányhoz. Meghatározhatunk azonban olyan attribútumokat is, amelyek az osztályon vannak beállítva. Ezeket az attribútumokat az osztály minden példányával megosztja. Sok szempontból ugyanúgy viselkednek, mint a példányattribútumok, de van néhány fenntartás, amellyel tisztában kell lennünk.

Az osztály attribútumokat az osztályban definiáljuk, ugyanazon a behúzási szinten, mint a metódusdefiníciókat (_egy szinttel feljebb a metódusok belsejétől_):


```py
class Person:

    TITLES = ('Dr', 'Mr', 'Mrs', 'Ms')

    def __init__(self, title, name, surname):
        if title not in self.TITLES:
            raise ValueError("%s is not a valid title." % title)

        self.title = title
        self.name = name
        self.surname = surname
```

Mint látható, a `TITLES` osztályattribútumhoz ugyanúgy hozzáférünk, mint egy példány attribútumhoz, amelyet a metóduson belül a `self` változóval érünk el.
Minden általunk létrehozott `Person` objektumnak ugyanaz a `TITLES` osztályattribútuma lesz.

Az osztályattribútumokat gyakran használják olyan konstansok definiálására, amelyek szorosan kapcsolódnak egy adott osztályhoz. Bár az osztályattribútumokat használhatjuk osztálypéldányokból, de használhatjuk őket osztályobjektumokból is, anélkül, hogy példányt hoznánk létre:

```py
# we can access a class attribute from an instance
person.TITLES

# but we can also access it from the class
Person.TITLES
```

Vegyük észre, hogy az osztályobjektum nem fér hozzá semmilyen példány attribútumhoz - azok csak a példány létrehozásakor jönnek létre!

```py
# This will give us an error
Person.name
Person.surname
```

Az osztályattribútumok néha alapértelmezett attribútumértékek megadására is használhatók:

```py
class Person:
    deceased = False

    def mark_as_deceased(self):
        self.deceased = True
```


Amikor egy példányon olyan attribútumot állítunk be, amelynek ugyanaz a neve, mint egy osztályattribútumnak, akkor az osztályattribútumot felülbíráljuk egy példányattribútummal, amely elsőbbséget élvez vele szemben. Ha két `Person` objektumot hozunk létre, és az egyikre meghívjuk a `mark_as_deceased` metódust, akkor a másikra nem lesz hatással. Óvatosnak kell azonban lennünk, ha egy osztályattribútum változtatható típusú - mert ha helyben módosítjuk, akkor az adott osztály összes objektumát egyszerre fogja érinteni. Ne feledjük, hogy minden példány osztozik ugyanazokon az osztályattribútumokon:

```py
class Person:
    pets = []

    def add_pet(self, pet):
        self.pets.append(pet)

jane = Person()
bob = Person()

jane.add_pet("cat")
print(jane.pets)
print(bob.pets) # oops!
```

Kimenet:

```txt
['cat']
['cat']
```

Ilyen esetekben a változtatható attribútumot példányattribútumként kell inicializálnunk a `__init__`-n belül. Ekkor minden példánynak saját külön példánya lesz:

```py
class Person:

    def __init__(self):
        self.pets = []

    def add_pet(self, pet):
        self.pets.append(pet)

jane = Person()
bob = Person()

jane.add_pet("cat")
print(jane.pets)
print(bob.pets)
```

Kimenet:

```txt
['cat']
[]
```

Vegyük észre, hogy a metódusdefiníciók ugyanabban a hatókörben vannak, mint az osztály attribútumdefiníciók, így használhatjuk az osztály attribútumneveket változóként a metódusdefiníciókban (a `self` nélkül, amely csak a metódusokon belül van definiálva):

```py
class Person:
    TITLES = ('Dr', 'Mr', 'Mrs', 'Ms')

    def __init__(self, title, name, surname, allowed_titles=TITLES):
        if title not in allowed_titles:
            raise ValueError("%s is not a valid title." % title)

        self.title = title
        self.name = name
        self.surname = surname
```

Lehetnek osztály metódusaink is? Igen, lehetnek. A következő részben megnézzük, hogyan definiálhatjuk őket egy dekorátor segítségével.

### Feladat

Magyarázza el, hogy mi a különbség a név (`name`), a vezetéknév (`surname`) és a foglalkozás (`profession`) attribútumok között, és milyen értékeket vehetnek fel az osztály különböző példányaiban:

```py
class Smith:
    surname = "Smith"
    profession = "smith"

    def __init__(self, name, profession=None):
        self.name = name
        if profession is not None:
            self.profession = profession
```
:::details Megoldás
:::warning ✅
`name` mindig egy példány attribútum, amely a konstruktorban kerül beállításra, és minden egyes osztálypéldánynak más-más name értéke lehet. `surname` mindig egy osztály attribútum, és nem írható felül a konstruktorban (`__init__`-ben) - minden példánynak `Smith` lesz a `surname` értéke. `profession` egy osztály attribútum, de opcionálisan felülírható egy példány attribútummal a konstruktorban. Minden példány `profession` értéke `smith` lesz, kivéve, ha a konstruktorban az opcionális vezetéknév paramétert más értékkel adjuk meg.
:::

## Osztály dekorátorok

Az előző fejezetben már találkoztunk a dekorátorokkal. Van néhány beépített dekorátor, amelyeket gyakran használunk az osztálydefiníciókban.

### `@classmethod`

Ahogyan definiálhatunk osztályattribútumokat, amelyeket egy osztály minden példánya megoszt, úgy definiálhatunk osztálymetódusokat is. Ezt úgy tehetjük meg, hogy a `@classmethod` dekorátorral díszítünk egy közönséges metódust.

Egy osztály metódus első paramétere továbbra is a hívó objektum, de a konvenció szerint ezt a paramétert átnevezzük `self`-ről `cls`-re. Ha az osztály metódust egy példányból hívjuk, akkor ez a paraméter a példány objektumot tartalmazza, de ha az osztályból hívjuk, akkor az osztály objektumot tartalmazza. A `cls` paraméter megnevezésével emlékeztetjük magunkat arra, hogy garantáltan nem rendelkezik példánytulajdonságokkal.

Mire jók az osztály metódusok? Néha vannak olyan, egy osztályhoz kapcsolódó feladatok, amelyeket konstansok és más osztályattribútumok segítségével végezhetünk el anélkül, hogy osztálypéldányokat kellene létrehoznunk. Ha ezekhez a feladatokhoz példány metódusokat kellene használnunk, akkor ok nélkül kellene létrehoznunk egy példányt, ami pazarlás lenne. Néha pusztán azért írunk osztályokat, hogy a kapcsolódó konstansokat és a rájuk ható függvényeket csoportosítsuk - lehet, hogy ezeket az osztályokat soha nem is példányosítjuk.

Néha hasznos egy olyan osztály metódust írni, amely a bemenet feldolgozása után létrehozza az osztály egy példányát, hogy az megfelelő formátumban átadható legyen az osztály konstruktorának. Ez lehetővé teszi, hogy a konstruktor egyszerű legyen, és ne kelljen bonyolult elemző vagy tisztító kódot implementálni:

```py
class Person:

    def __init__(self, name, surname, birthdate, address, telephone, email):
        self.name = name
        # (...)

    @classmethod
    def from_text_file(cls, filename):
        # extract all the parameters from the text file
        return cls(*params) # this is the same as calling Person(*params)
```

### `@staticmethod`

Egy statikus metódusnak nem a hívó objektumot kell első paraméterként átadni. Ez azt jelenti, hogy egyáltalán nem fér hozzá az osztály vagy a példány többi részéhez. Meghívhatjuk egy példányból vagy egy osztályobjektumból, de leggyakrabban az osztályobjektumokból hívjuk őket, mint az osztálymódszereket.

Ha egy osztályt olyan kapcsolódó metódusok csoportosítására használunk, amelyeknek nem kell hozzáférniük egymáshoz vagy az osztály egyéb adataihoz, akkor érdemes ezt a technikát használni. A statikus metódusok használatának előnye, hogy kiküszöböljük a felesleges `cls` vagy `self` paramétereket a metódusdefinícióinkból. Hátránya, hogy ha időnként egy statikus metóduson belül egy másik osztály metódusára vagy attribútumára akarunk hivatkozni, akkor az osztály nevét teljes egészében ki kell írnunk, ami sokkal terjedelmesebb lehet, mint az osztály metódusán belül rendelkezésünkre álló `cls` változó használata.

Íme egy rövid példa a három módszer összehasonlítására:

```py
class Person:
    TITLES = ('Dr', 'Mr', 'Mrs', 'Ms')

    def __init__(self, name, surname):
        self.name = name
        self.surname = surname

    def fullname(self): # instance method
        # instance object accessible through self
        return "%s %s" % (self.name, self.surname)

    @classmethod
    def allowed_titles_starting_with(cls, startswith): # class method
        # class or instance object accessible through cls
        return [t for t in cls.TITLES if t.startswith(startswith)]

    @staticmethod
    def allowed_titles_ending_with(endswith): # static method
        # no parameter for class or instance object
        # we have to use Person directly
        return [t for t in Person.TITLES if t.endswith(endswith)]


jane = Person("Jane", "Smith")

print(jane.fullname())

print(jane.allowed_titles_starting_with("M"))
print(Person.allowed_titles_starting_with("M"))

print(jane.allowed_titles_ending_with("s"))
print(Person.allowed_titles_ending_with("s"))
```

### `@property`

Néha egy metódust használunk egy objektum egy tulajdonságának dinamikus generálására, kiszámítva azt az objektum többi tulajdonságából. Néha egyszerűen csak egy metódust használunk egyetlen attribútum elérésére és visszaadására. Egy másik metódust is használhatunk az attribútum értékének frissítésére ahelyett, hogy közvetlenül hozzáférnénk az attribútumhoz. Az ilyen metódusokat `getter`-eknek és `setter`-eknek nevezzük, mivel az attribútumok értékét "__megszerzik__", illetve "__beállítják__".

Egyes nyelvekben arra ösztönzik, hogy minden attribútumhoz `getter`-eket és `setter`-eket használjunk, és soha ne érjük el közvetlenül az értéküket - és vannak olyan nyelvi jellemzők, amelyek az attribútumokat elérhetetlenné tehetik, kivéve a `setter`-eken és `getter`-eken keresztül. A Pythonban az egyszerű attribútumok közvetlen elérése tökéletesen elfogadható, és az összes attribútumhoz `getter`-eket és `setter`-eket írni feleslegesen hosszadalmasnak tekinthető. A `setter`-ek azért lehetnek kényelmetlenek, mert nem teszik lehetővé az összetett hozzárendelési operátorok használatát:

```py
class Person:
    def __init__(self, height):
        self.height = height

    def get_height(self):
        return self.height

    def set_height(self, height):
        self.height = height

jane = Person(153) # Jane is 153cm tall

jane.height += 1 # Jane grows by a centimetre
jane.set_height(jane.height + 1) # Jane grows again
```

Amint láthatjuk, a `height` attribútum növelése egy `setter`-en keresztül sokkal bőbeszédűbb. Természetesen írhatnánk egy második `setter`-t is, amely az attribútumot a megadott paraméterrel növeli - de akkor minden attribútumhoz és minden egyes módosításhoz, amit el akarunk végezni, valami hasonlót kellene tennünk. Hasonló problémánk lenne a helyben történő módosításokkal, például az értékek hozzáadásával listákhoz.

Ami gyakran a `setter`-ek és `getter`-ek előnyének tekinthető, az az, hogy megváltoztathatjuk egy attribútum generálásának módját az objektumon belül anélkül, hogy ez hatással lenne az objektumot használó kódra. Tegyük fel például, hogy kezdetben létrehoztunk egy `Person` osztályt, amely rendelkezik egy `fullname` attribútummal, de később meg akarjuk változtatni az osztályt úgy, hogy külön `name` és `surname` attribútumokkal rendelkezzen, amelyeket kombinálunk a teljes név létrehozásához. Ha a `fullname` attribútumot mindig egy setteren keresztül érjük el, akkor egyszerűen átírhatjuk a settert - a settert hívó kódot nem kell megváltoztatni.

De mi van akkor, ha a kódunk közvetlenül a `fullname` attribútumhoz fér hozzá? Írhatunk egy `fullname` metódust, amely visszaadja a megfelelő értéket, de egy metódust meg kell hívni. Szerencsére a `@property` dekorátor lehetővé teszi, hogy egy metódus úgy viselkedjen, mint egy attribútum:

```py
class Person:
    def __init__(self, name, surname):
        self.name = name
        self.surname = surname

    @property
    def fullname(self):
        return "%s %s" % (self.name, self.surname)

jane = Person("Jane", "Smith")
print(jane.fullname) # no brackets!
```

Vannak olyan dekorátorok is, amelyekkel definiálhatunk egy `setter`-t és egy `deleter`-t az attribútumunkhoz (a `deleter` törli az attribútumot az objektumunkból). A `getter`, `setter` és `deleter` metódusoknak azonos nevűnek kell lenniük:

```py
class Person:
    def __init__(self, name, surname):
        self.name = name
        self.surname = surname

    @property
    def fullname(self):
        return "%s %s" % (self.name, self.surname)

    @fullname.setter
    def fullname(self, value):
        # this is much more complicated in real life
        name, surname = value.split(" ", 1)
        self.name = name
        self.surname = surname

    @fullname.deleter
    def fullname(self):
        del self.name
        del self.surname

jane = Person("Jane", "Smith")
print(jane.fullname)

jane.fullname = "Jane Doe"
print(jane.fullname)
print(jane.name)
print(jane.surname)
```

### Feladat

1. Hozzon létre egy `Numbers` nevű osztályt, amelynek egyetlen osztályattribútuma a `MULTIPLIER`, és egy konstruktor, amely az `x` és `y` paramétereket veszi fel (ezek mind számok).

    2. Írjunk egy `add` nevű metódust, amely az `x` és `y` attribútumok összegét adja vissza.
    3. Írjunk egy `multiply` nevű osztálymetódust, amely egyetlen szám paramétert vesz fel `a`. `MULTIPLIER` és az `a` szorzatát adja vissza (`return`).
    4. Írjunk egy statikus metódust `subtract` néven, amely két számparamétert, `b`-t és `c`-t vesz fel, és `b` - `c`-t adja vissza.
    5. Írjunk egy `value` nevű metódust, amely egy olyan `tuple`-t ad vissza, amely `x` és `y` értékeit tartalmazza. Tegyük ezt a metódust `property`-vé, és írjunk egy `setter`-t és egy `deleter`-t az `x` és `y` értékeinek manipulálására.


:::details Megoldás

Íme egy lehetséges megoldás:

```py
class Numbers:
    MULTIPLIER = 3.5

    def __init__(self, x, y):
        self.x = x
        self.y = y

    def add(self):
        return self.x + self.y

    @classmethod
    def multiply(cls, a):
        return cls.MULTIPLIER * a

    @staticmethod
    def subtract(b, c):
        return b - c

    @property
    def value(self):
        return (self.x, self.y)

    @value.setter
    def value(self, xy_tuple):
        self.x, self.y = xy_tuple

    @value.deleter
    def value(self):
        del self.x
        del self.y
```
:::

## Metódusok felülírása

Már láttuk, hogyan lehet a `__init__` metódust túlterhelni, hogy az osztályunk inicializálásához igazíthassuk. Más speciális metódusokat is túlterhelhetünk. Például az `__str__` metódus célja, hogy az objektumunkról egy használható string reprezentációt adjon ki. De alapértelmezés szerint, ha az `str` függvényt használjuk egy `person` objektumon (_ami meghívja az `__str__` metódust_), akkor csak az osztály nevét és egy azonosítót kapunk. Ez nem túl hasznos! Írjunk egy saját `__str__` metódust, amely megmutatja az objektum összes tulajdonságának értékét:

```py
import datetime

class Person:
    def __init__(self, name, surname, birthdate, address, telephone, email):
        self.name = name
        self.surname = surname
        self.birthdate = birthdate

        self.address = address
        self.telephone = telephone
        self.email = email

    def __str__(self):
        return "%s %s, born %s\nAddress: %s\nTelephone: %s\nEmail:%s" % (self.name, self.surname, self.birthdate, self.address, self.telephone, self.email)

jane = Person(
    "Jane",
    "Doe",
    datetime.date(1992, 3, 12),
    "No. 12 Short Street, Greenville",
    "555 456 0987",
    "jane.doe@example.com"
)

print(jane)
```

Vegyük figyelembe, hogy amikor a születési dátum objektumot a kimeneti karakterláncba illesztjük `%s`-el, az maga is karakterlánccá alakul, így ezt nem kell nekünk megtennünk (_hacsak nem akarjuk megváltoztatni a formátumot_).

Gyakran hasznos az összehasonlító metódusok túlterhelése is, így összehasonlító operátorokat használhatunk a person objektumainkon. Alapértelmezés szerint a `person` objektumaink csak akkor egyenlőek, ha ugyanaz az objektum, és nem tudjuk tesztelni, hogy az egyik `person` objektum nagyobb-e egy másiknál, mert a person objektumoknak nincs alapértelmezett sorrendje.

Tegyük fel, hogy azt szeretnénk, hogy a személy objektumaink akkor legyenek egyenlőek, ha minden attribútumuk azonos értékkel rendelkezik, és szeretnénk, ha a vezetéknév, majd a keresztnév alapján ábécérendbe tudnánk rendezni őket. Az összes összehasonlító módszer független egymástól, így mindegyiket túl kell terhelnünk, ha azt akarjuk, hogy mindegyik működjön - de szerencsére, ha már egyszer definiáltuk az egyenlőséget és az egyik alapvető sorrendezési módszert, a többi könnyen elvégezhető. Mindegyik metódus két paramétert vesz fel - `self` az aktuális objektumhoz, és `other` a másik objektumhoz:

```py
class Person:
    def __init__(self, name, surname):
        self.name = name
        self.surname = surname

    def __eq__(self, other): # does self == other?
        return self.name == other.name and self.surname == other.surname

    def __gt__(self, other): # is self > other?
        if self.surname == other.surname:
            return self.name > other.name
        return self.surname > other.surname

    # now we can define all the other methods in terms of the first two

    def __ne__(self, other): # does self != other?
        return not self == other # this calls self.__eq__(other)

    def __le__(self, other): # is self <= other?
        return not self > other # this calls self.__gt__(other)

    def __lt__(self, other): # is self < other?
        return not (self > other or self == other)

    def __ge__(self, other): # is self >= other?
        return not self < other
```

Vegyük figyelembe, hogy az `other` nem garantáltan egy másik személy objektum, és nem is tettünk bele semmilyen ellenőrzést annak biztosítására, hogy ez így is legyen. A módszerünk összeomlik, ha a másik objektum nem rendelkezik név vagy vezetéknév attribútummal, de ha ezek jelen vannak, az összehasonlítás működni fog. Hogy ennek van-e értelme vagy sem, azt majd át kell gondolnunk, ha hasonló típusú objektumokat hozunk létre.

Néha van értelme hibával kilépni, ha a másik objektum nem ugyanolyan típusú, mint a mi objektumunk, de néha két kompatibilis objektumot akkor is össze tudunk hasonlítani, ha nem azonos típusúak. Például van értelme összehasonlítani az `1`-et és a `2,5`-öt, mert mindkettő szám, még akkor is, ha az egyik `integer`, a másik pedig `float`.


