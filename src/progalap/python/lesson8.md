# 8. tananyag

:::tip 📚 EBBEN A FEJEZETBEN
- Az osztályok és objektumok megértése
- Osztályok létrehozásának megtanulása
- Objektum inicializálása egy osztályban
- Egy objektum attribútumokkal feltöltése
- Annak felfedezése, hogyan adhatunk egy osztálynak metódusokat
- Az osztályok öröklődésének vizsgálata
:::


Az előző fejezetben beszéltünk a függvényekről, amelyek lehetővé teszik, hogy a kód egyes részeit, amelyek meghatározott feladatokat végeznek, feldaraboljuk. Ebben a fejezetben az osztályokról tanulunk, amelyek lehetővé teszik a kód és az adatok tagolását. Felfedezzük az osztályok és objektumok minden csodáját, nagyságát és szépségét - oké, talán egy kicsit túlzásba visszük a dolgot 😆.

De az osztályok a modern objektumorientált programozási nyelvek, például a Python meghatározó jellemzőjévé váltak.

Tisztában vagyunk vele, hogy az előző fejezetekben rengeteg újdonságot mutattunk be. Ne aggódjatok. A fejezet hátralévő részében abból indulunk ki, hogy - _mint az emberek 99,9 százaléka a világon_ - te sem tudod megkülönböztetni az osztályt az objektumtól.


## Osztályok és objektumok elsajátítása

Mint azt talán tudod, a Python egy objektumorientált programozási nyelv. Az objektumorientált programozás (_OOP_) koncepciója legalább néhány évtizede nagyon divatos szó a számítógépes világban. Az __objektum__ kifejezés onnan ered, hogy a __modell__ hasonlít a valóságban __létező__ objektumokhoz abban, hogy minden objektum egy olyan dolog, amely bizonyos __tulajdonságokkal__ és __jellemzőkkel__ rendelkezik, amelyek __egyedivé__ teszik. Például egy __szék__ egy objektum. Rengeteg __különböző__ szék létezik, amelyek méretben, formában, színben és anyagban különböznek egymástól. De attól még __mind__ szék.

_Mi a helyzet az autókkal?_ Mindannyian felismerünk egy autót, ha látunk egyet. (_Nos, általában._ 🤷🏻‍♂️) Bár az autók nem mind teljesen egyformák, mindnek vannak bizonyos tulajdonságai (_évjárat, gyártmány, modell, szín_), amelyek mindegyiket egyedivé teszik. Vannak bizonyos közös metódusaik, ahol a metódus egy művelet vagy dolog, amit az autó meg tud tenni. Például az autók mindegyike rendelkezik go, stop és turn műveletekkel, amelyeket nagyjából ugyanúgy irányíthatsz.

A következő ábra mutatja a koncepciót, ahol minden _autó_ rendelkezik bizonyos közös tulajdonságokkal és metódusokkal. Ebben az esetben úgy gondolhatunk az _Autó_ osztályra, mint egy gyárra, amely az összes autót létrehozza. Miután minden egyes autó létrejött, az egy önálló objektum. Egy _autó_ megváltoztatása nincs hatással a többi autóra vagy a `Car` osztályra.

![](/assets/images/python/8/1.png)

Vegyük például a kutyákat. A kutyák olyan tulajdonságokban különböznek, mint a fajta, a szín és a méret, de bizonyos viselkedési módok például az evés és az alvás, közösek. A következő ábra egy példát mutat egy `Dog` nevű állatosztályra, amelyből minden kutya származik.

![](/assets/images/python/8/2.png)

Még az embereket is tárgyaknak tekinthetjük ilyen módon. Például van egy klubod, és szeretnéd nyomon követni a tagjait. Minden egyes tag természetesen egy személy. De a kódban létrehozhatsz egy `Member` osztályt, amelyben az egyes tagokról szóló információkat tárolhatod. Minden tagnak vannak bizonyos attribútumai - _felhasználónév_, _teljes név_ stb. Lehetnének olyan metódusok is, mint például a `.archive()` egy fiók deaktiválásához és a `.restore()` egy fiók újraaktiválásához. A `.archive()` és `.restore()` metódusok olyan viselkedések, amelyekkel a tagságot vezérelhetjük, hasonlóan ahhoz, ahogyan a _gázpedál_, a _fék_ és a _kormánykerék_ lehetővé teszi az autó _irányítását_.

![](/assets/images/python/8/3.png)

A lényeg az, hogy egy osztály minden példánya egy független objektum, amellyel dolgozhatsz. Egy osztály egy példányának megváltoztatása nincs hatással az osztályra vagy más példányokra, ahogyan az egyik autó más színűre festése sincs hatással az autógyárra vagy az általa gyártott többi autóra.

Tehát, visszatérve a kezdeti fogalmakhoz, az osztályok és példányok az objektumorientált programozás (_OOP_) nevű programozási módszerből ered. A Python, mint minden modern programozási nyelv, objektumorientált. A legfontosabb kifejezések, amelyekkel meg kell barátkoznod, azok, amelyekről az elmúlt néhány bekezdésben beszéltünk: 

- _Osztály_ (__class__): Az osztály egy olyan kódrészlet, amelyből egyedi objektumot lehet létrehozni, ahol minden objektum az osztály egyetlen példánya. Gondoljon az osztályra úgy, mint egy tervrajzra vagy gyárra, amelyből egyedi objektumokat hozhatunk létre.

- _Példány_ (__instance__): Egy osztályból generált adat és kód egy egysége. Az adott osztály példánya. Egy osztály minden példányát _objektumnak_ is nevezzük, ahogyan a különböző autók is _objektumok_, amelyeket valamilyen autógyár (_osztály_) hoz létre.

- _Attribútum_ (__attribute__): Egy objektum olyan tulajdonsága, amely az objektumra vonatkozó információkat tartalmaz. Az attribútum neve előtt egy pont áll, mint például a `member.username`, amely tartalmazhatja egy oldal felhasználójának a nevét.

- _Metódus_ (__method__): Az osztályhoz kapcsolódó Python-funkció. Egy metódus olyan műveletet határoz meg, amelyet egy objektum elvégezhet. Egy metódust úgy hívhatunk meg, hogy a metódus neve elé pontot teszünk, majd egy zárójelpárral követjük. Például a `member.archive()` egy olyan metódus lehet, amely archiválja - _az az deaktiválja_ - a tag fiókját.

### Osztályok létrehozása

Saját osztályokat hozhatsz létre, ahogyan saját függvényeket is létrehozhatsz. Az osztálynak azt a nevet adhatod, amit csak akarsz, feltéve, hogy ez egy szabályos név, amely betűvel vagy aláhúzással kezdődik, és nem tartalmaz szóközöket vagy írásjeleket. Szokás az osztályok nevét nagybetűvel kezdeni, hogy az osztályokat könnyebben meg lehessen különböztetni a változóktól. A kezdéshez mindössze a `class` szóra van szükség, amelyet egy szóköz, egy tetszőleges osztálynév és egy kettőspont követ. Például egy új, `Member` nevű osztály létrehozásához használjuk a `class Member:` szót.

Hogy a kódot még szemléletesebbé tegyük, nyugodtan adjunk hozzá egy megjegyzést az osztály definíciója fölé. Az osztály sora alá egy `docstringet` is elhelyezhetünk, amely megjelenik, amikor a __VS Code__-ban beírjuk az osztály nevét. Például, ha az új `Member` osztályához megjegyzéseket szeretnénk hozzáadni, a kódot így írhatjuk be:

```py
# Define a new class name Member.
class Member:
    """ Create a new member. """
```

Ennyi kell egy új osztály definiálásához. Ez azonban addig nem hasznos, amíg meg nem adjuk meg, hogy az osztályból létrehozott objektumok milyen tulajdonságokat kapjanak.

:::tip ÜRES OSZTÁLYOK 🚀

Ha egy osztályt az `class Name:`-el kezdünk, majd a kódot az osztály befejezése előtt futtatjuk, akkor hibaüzenetet kapunk.

Ezt úgy kerülheted el, hogy a Python-nak megmondod, hogy még __nem fejezted__ be az osztály megírását, ha a definíció alá a `pass` kulcsszót teszed, mint az alábbi kódban:

```py
# Define a new class name Member.
class Member:
    pass
```
Lényegében ezzel azt mondod a Python-nak, hogy:

_"Hé, tudom, hogy ez az osztály még nem igazán működik, de hagyd, hogy átmenjen, és ne dobj ki hibaüzenetet, amiben közlöd velem."_
:::

### Példány létrehozása egy osztályból

Ahhoz, hogy az osztályodnak megadhasd a képességet, hogy példányokat (objektumokat) hozzon létre helyetted, adj az osztálynak egy `init` metódust.

Az `init` szó az inicializálás rövidítése. Mint metódus, ez valójában csak egy osztályon belül definiált függvény. De a metódusnak a `__init__` (__ez két aláhúzás, majd az `init` és még két aláhúzás__) nevet kell viselnie.

Az init metódus létrehozásának szintaxisa a következő:

```py
def __init__(self[, suppliedprop1, suppliedprop2, ...])
```

A `def` a __define__ rövidítése, a `__init__` pedig annak a beépített Python-metódusnak a neve, amely képes objektumokat létrehozni egy osztályon belül. A `self` rész csak egy változó neve, és az éppen létrehozott objektumra való hivatkozásra szolgál. A `self` helyett használhatsz tetszőleges nevet is. De a `self` használatát a legjobb módszernek tekintik, mert egyértelmű és bevált.

Az osztályok működését könnyebb megtanulni és megérteni, ha egyszerűen elkezdjük következő példa alapján. Nos, gyakorlati példához hozzunk létre egy `Member` nevű osztályt, amelybe átadja a _felhasználónevet_ (`uname`) és a _teljes nevet_ (`fname`), amikor egy tagot akarunk létrehozni.

Mint mindig, a kódot megjegyzésekkel kiegészíthetjük. A `docstringet` - _hármas idézőjelben_ -  az első sor alá is beírhatod, egyrészt megjegyzésként, másrészt `IntelliSense` emlékeztetőként, amikor a __VS Code__-ban kódot gépelsz:

```py
# Define a class named Member for making member objects.
class Member:    
    """ Create a member from uname and fname """
    def __init__(self, uname, fname):
```

Amikor a def `__init__` sor végrehajtódik, az osztályon belül egy üres self nevű objektumot kapunk. Az `uname` és `fname` paraméterek tartalmazzák az átadott adatokat - _mindjárt meglátjuk, hogyan működik ez._

Egy üres, adatok nélküli objektum nem sok jóval kecsegtet. Egy objektumot az attribútumai tesznek hasznossá a benne lévő, csak az adott objektumra jellemző információk alapján. Az osztályodban tehát a következő lépés az, hogy az objektum minden egyes attribútumához értéket rendeljünk.

### Objektum tulajdonságainak meghatározása

Most, hogy már van egy új, üres `Member` objektum, elkezdhetünk attribútumokat adni neki, és feltölteni - _értékeket tárolni_ - ezeket az attribútumokat.

Tegyük fel például, hogy minden tagnak rendelkeznie kell egy `.username` attribútummal, amely tartalmazza a `username` felhasználónevét - _a bejelentkezéshez._ Van egy második, `fullname` nevű attribútumunk, amely a tagunk teljes neve. Az attribútumok definiálásához és feltöltéséhez használjuk a következőket:

```py
self.username = uname
self.fullname = fname
```
Az első sor létrehoz egy `username` nevű attribútumot az új példány (`self`) számára, és az osztály hívásakor az `uname` attribútumba átadott értéket írja be. A második sor létrehoz egy `fullname` nevű attribútumot az új `self` objektum számára, és azt teszi bele, amit az `fname` változóban átadtunk. Adjunk hozzá néhány megjegyzést, és az egész osztály így néz ki: 

```py
# Define a new class named Member.
class Member:    
    """ Create a new member.  """
    def __init__(self, uname, fname):
        # Define attributes and give them values.
        self.username = uname
        self.fullname = fname
```

Látod, mi történik? Az `__init__` sor létrehoz egy új üres objektumot `self` néven. Ezután a `self.username = uname` sor hozzáad egy `username` nevű attribútumot az üres objektumhoz, és ebbe az attribútumba azt írja be, amit az `uname`-ként adtunk át. Ezután a `self.fullname = fname` sor ugyanezt teszi a `fullname` attribútummal és az átadott `fname` értékkel.

:::danger ❗
Az osztályokban lévő dolgok elnevezésére vonatkozó konvenció szerint az osztálynévhez egy nagy kezdőbetűt kell használni. Az attribútumoknak azonban a változókra vonatkozó szabványt kell követniük, ami a kisbetűs írásmódot jelenti, a szavakat a néven belüli aláhúzással elválasztva.
:::

### Egy példány létrehozása osztályból

Miután létrehoztad az osztályt, létrehozhatsz belőle példányokat (objektumokat) az alábbi egyszerű szintaxis segítségével:

```py
this_instance_name = Member('uname', 'fname')
```

A `this_instance_name` nevet egy tetszőlegesen választott névvel helyettesíthetjük (_hasonlóan ahhoz, ahogyan egy kutyát is elnevezhetünk, amely a `Dog` osztály példánya_). Cseréljük ki a `uname` és `fname` értékeket a felhasználónévvel és a teljes névvel, amelyet a létrehozandó objektumba akarunk helyezni. Ügyeljünk arra, hogy ne húzd be ezt a kódot; különben a Python azt fogja gondolni, hogy az új kód még mindig az osztály kódjához tartozik. Ez nem így van. Ez új kód az osztály tesztelésére.

A példa kedvéért mondjuk, hogy létrehozunk egy `new_guy` nevű tagot __Rambo__ felhasználónévvel és __Rocco Moe__ teljes névvel. Íme a kód ehhez:

```py
new_guy = Member('Rambo', 'Rocco Moe')
```

Ha lefuttatjuk ezt a kódot, és nem kapunk hibaüzenetet, akkor tudjuk, hogy legalább futott. De hogy megbizonyosodjunk róla, kiírhatjuk az objektumot vagy annak attribútumait.

Ha látni akarjuk, hogy mi van valójában a `new_guy` példányban a `Members`, akkor ki tudjuk íratni az egészet, de akár csak az attribútumait is, a `new_guy.username` és a `new_guy.fullname` értékeket. A `type(new_guy)` kiírásával lekérdezhetjük, hogy milyen típusú a `new_guy`. Ez a kód mindezt megteszi:


```py
# Define a new class named Member.
class Member:    
    """ Create a new member.  """
    def __init__(self, uname, fname):
        # Define attributes and give them values.
        self.username = uname
        self.fullname = fname

# The class ends at the first un-indented line.

# Create an instance of the Member class named new_guys
new_guy = Member('Rambo', 'Rocco Moe')

# See what's in the instance, as well as its individual properties.
print(new_guy)
print(new_guy.username)
print(new_guy.fullname)
print(type(new_guy))
```

Kimenet:

```txt
<__main__.Member object at 0x10ddcffd0>
Rambo
Rocco Moe
<class '__main__.Member'>
```

Az ábrán látható, hogy a kimenet első sora a következő:

```txt
<__main__.Member object at 0x10ddcffd0>
```
Ez a kimenet azt mutatja, hogy a `new_guy` a `Member` osztályból létrehozott objektum. A szám a végén a memóriában való elhelyezkedése. Ne foglalkozz ezzel most, a memóriahelyekről most nem kell tudnod.


A következő három kimeneti sor a következő:
```txt
Rambo
Rocco Moe
<class '__main__.Member'>
```

Az első sor az `new_guy` felhasználóneve (`new_guy.username`), a második sor pedig a `new_guy` teljes neve (`new_guy.fullname`). Az utolsó sor a típusa, és azt mondja meg, hogy `new_guy` a `Member` osztály egy példánya.

Bevalljuk, hogy nehéz lehet ezeket a fogalmakat most még elsajátítani, de ne feledjük, hogy az objektum egyszerűen egy praktikus módja annak, hogy információt gyűjtsünk egy olyan elemről, amely hasonló más elemekhez - _például minden kutya kutya, és minden autó autó._ Az objektumot az attribútumai teszik egyedivé, amelyek nem feltétlenül azonosak más, azonos típusú objektumok attribútumaival, hasonlóan ahhoz, ahogyan nem minden kutya ugyanolyan fajta, és nem minden autó ugyanolyan színű.

Szándékosan használtuk az `uname` és `fname` paraméterneveket, hogy megkülönböztessük őket az attribútumnevektől `username` és `fullname`. Ez azonban nem követelmény. Igazából használhatjuk ugyanazokat a neveket a paraméterekre, mint az attribútumokra.

```py
# Define a new class named Member.
class Member:    
    """ Create a new member.  """
    def __init__(self, username, fullname):
        # Define attributes and give them values.
        self.username = username
        self.fullname = fullname

# The class ends at the first un-indented line.

# Create an instance of the Member class named new_guy.
new_guy = Member('Rambo', 'Rocco Moe')

# See what's in the instance, as well as its individual properties.
print(new_guy)
print(new_guy.username)
print(new_guy.fullname)
print(type(new_guy))
```

A `Member` osztály `username` és `fullname` ugyanazon nevű paraméterekkel és attribútumokkal.

### Egy attribútum értékének módosítása

A `tuple`-kel való munka során __kulcs:érték__ párokat definiálhatunk, hasonlóan az __attribútum:érték__ párokhoz, amelyeket az osztályok példányai esetében láthatunk. 

Van azonban egy lényeges különbség: A `tuple`-k megváltoztathatatlanok, ami azt jelenti, hogy miután definiáltuk őket, a kódunk nem változtathat rajtuk semmit. __Ez nem igaz az objektumokra.__ Miután létrehoztál egy objektumot, a következő egyszerű szintaxissal bármikor megváltoztathatod bármelyik attribútum értékét:

```py
objectname.attributename = value
```

Az `objectname`-t helyettesítsük az objektum nevével - _amelyet már létrehoztunk az osztályon keresztül._ Helyettesítsük az `attributename`-t annak az attribútumnak a nevével, amelynek az értékét meg akarja változtatni. Az `value`-t helyettesítse az új értékkel.

```py
new_guy.username = "Princess"
```

Az alatta lévő kimeneti sorok azt mutatják, hogy `new_guy` felhasználóneve valóban __Princess__-re változott. A teljes neve nem változott, mert a kódodban nem csináltunk vele semmit.

```py
# Define a new class named Member.
class Member:    
    """ Create a new member.  """
    def __init__(self, username, fullname):
        # Define attributes and give them values.
        self.username = username
        self.fullname = fullname

# The class ends at the first un-indented line.

# Create an instance of the Member class named new_guy.
new_guy = Member('Rambo', 'Rocco Moe')

# See what's in the instance, as well as its individual properties.
print(new_guy.username)
print(new_guy.fullname)
print() # This just prints a blank line.

# Change new_guy's user name then print both attributes again.
new_guy.username = "Princess"
print(new_guy.username)
print(new_guy.fullname)
```

Kimenet:

```txt
Rambo
Rocco Moe

Princess
Rocco Moe
```

### Attribútumok definiálása alapértelmezett értékekkel

Egy új objektum esetében nem kell minden attribútum értékét megadnia. Ha mindig valamilyen alapértelmezett értéket akarsz adni egy attribútumnak az objektum létrehozásakor, akkor egyszerűen használhatod a `self.attributename = value` értéket, ugyanúgy, mint korábban, ahol az `attributename` egy általad választott név. A `value` pedig lehet valamilyen érték, amit éppen most adtál meg, például `True` vagy `False` egy `Boolean` esetében, vagy a mai dátum, vagy bármi, amit a Python kiszámíthat vagy meghatározhat anélkül, hogy megadnánk az értéket.

Tegyük fel például, hogy amikor új tagot hozunk létre, a tag létrehozásának dátumát egy `date_joined` nevű attribútumban szeretnénk nyomon követni. És szeretnénk, ha a felhasználói bejelentkezések ellenőrzéséhez képes lenne fiókokat aktiválni és deaktiválni. Tehát létrehozunk egy `is_active` nevű attribútumot, és amikor létrehozunk egy új tagot akkor az attribútum `True` kezdőértékű lesz.

Ha bármit is szeretnénk csinálni dátumokkal és időpontokkal, akkor importálnunk kell a `datetime` modult, ezért tegyük ezt a fájlunk elejére, még a `class Member:` sor előtt.
Az alábbi módon adjuk hozzá az `import`-ot és a két új attribútumot az osztályhoz:

```py
import datetime as dt 

# Define a new class name Member.
class Member: 
    """ Create a new member. """ 
    def __init__(self, username, fullname):
        # Define attributes and give them values. 
        self.username = username
        self.fullname = fullname

        # Default date_joined to today's date.
        self.date_joined = dt.date.today()
        # Set is active to True initially.
        self.is_active = True
```

Vegyük figyelembe, hogy az alapértelmezett érték csak ennyi. Az alapértelmezett értéket azonban ugyanúgy megváltoztathatjuk, mint bármely más attribútum értékét, a következő szintaxissal:

```py
objectname.attributename = value
```
Tegyük fel például, hogy az `is_active` attribútummal határozzuk meg, hogy egy felhasználó aktív-e, és be tud-e jelentkezni a webhelyre. Ha egy felhasználóról kiderül, hogy egy ellenszenves troll 🧌, és nem akarjuk, hogy többé bejelentkezzen, akkor az `is_active` attribútumot egyszerűen megváltoztathatjuk `False`-ra, például így:

```py
newmember.is_active = False
```

:::warning ⚠️
Ha a kód elején elfelejted importálni a `datetime`-ot, akkor a kód futtatásakor hibaüzenetet ad, amely szerint a program nem tudja, hogy mit jelent a `dt.date.today()`. Csak add hozzá az `import` sort a kód elejére, és próbáld meg újra.
A `date_joined` és az `is_active` attribútumokhoz nem kell új adatokat átadni az osztályba, mivel ezek az attribútumok alapértelmezett értékeket kapnak a kódból.
:::

:::tip AZ ADATOKBAN BEKÖVETKEZETT VÁLTOZÁSOK MEGŐRZÉSE 📝
 
- _Mi értelme létrehozni ezeket a különböző osztályokat és objektumokat, ha minden megszűnik létezni, amint a program véget ér?_

- _Mi értelme létrehozni egy felhasználót, ha nem tudjuk örökre tárolni az információit és felhasználni egy weboldalra?_

Az igazat megvallva, az objektumok létrehozása, amelyek megszűnnek létezni abban a pillanatban, amikor a program véget ér, nem az egész történet.

Minden adat, amelyet osztályokkal és objektumokkal hozol létre és kezelsz, perzisztens (__korlátlan ideig őrzött__) és bármikor rendelkezésedre állhat, ha ezeket az adatokat valamilyen külső fájlban, általában egy adatbázisban tárolod.

A perzisztens adatokkal később foglalkozunk. De előbb meg kell tanulnod a Python alapvető alapjait, mielőtt megértenéd az olyan bonyolultabb témákat, mint az adatok perzisztenciája.
:::

### Osztály metódusok létrehozása

Bármelyik objektumnak tetszőleges számú attribútuma lehet, amelyeknek tetszőleges nevet adhatunk, és amelyek az objektummal kapcsolatos információkat tárolják, például egy kutya fajtáját és színét vagy egy autó márkáját és modelljét. Saját metódusokat is definiálhatunk bármely objektumhoz, amelyek inkább viselkedések, mint az objektummal kapcsolatos tények. Egy kutya például tud enni, aludni és ugatni. Egy autó tud menni, megállni és megfordulni. A metódus valójában nem más, mint egy függvény, ahogyan azt az előző fejezetben megtanultuk. Az teszi metódussá, hogy egy adott osztályhoz és az ebből az osztályból létrehozott minden egyes objektumhoz kapcsolódik.

A metódusneveket a nevet követő zárójelpár különbözteti meg egy objektum attribútumneveitől. Ahhoz, hogy meghatározzuk, hogy az osztályunkban milyen metódusok lesznek, használjuk ezt a szintaxist minden egyes metódushoz:

```py
def methodname(self[, param1, param2, ...]):
```
Helyettesítse a `methodname` egy tetszőleges névvel (kisbetűvel, szóközök nélkül). A `self` szót tartsuk meg, mint az osztály által definiált objektumra való hivatkozást. Opcionálisan a `self` után vesszőkkel paramétereket is átadhatsz, mint bármely más függvény esetében.

Hozzunk létre egy `.show_date_joined()` nevű metódust, amely egy formázott karakterláncban adja vissza a felhasználó nevét és a dátumát. Így definiálhatjuk ezt a metódust:

```py
# A method to return a formatted string showing date joined.
def show_datejoined(self):
    return f"{self.fullname} joined on {self.date_joined:%m/%d/%y}
```

A módszer neve `show_datejoined`. Ennek a metódusnak a feladata, amikor meghívják, egyszerűen csak az, hogy szépen formázott szöveget állítson össze, amely tartalmazza a felhasználó teljes nevét és a csatlakozási dátumát.

A metódust kódból történő hívásához használjuk ezt a szintaxist:
```py
objectname.methodname()
```

Az `objectname` helyébe az objektum neve lép, amelyre hivatkozunk. Helyettesítsük `methodname`-t a meghívni kívánt metódus nevével.
Ha az osztály `__init__` metódusa csak self-et ad meg, akkor nem adsz át semmit. Ha azonban a `__init__` a self-en kívül további paramétereket is megad, akkor ezek értékeit is meg kell adnia.

Figylejük meg, hogy `show_datejoined()` metódus hogyan van definiálva az osztályon belül. A `def`-je az első `def`-vel azonos szintre van behúzva. A kód, amelyet a metódus végrehajt, alatta van behúzva. Az osztályon kívül a `new_guy = Member('Rambo', 'Rocco Moe')` létrehoz egy új tagot `new_guy` néven. Ezután a `new_guy.show_datejoined()` végrehajtja a `show_datejoined()` metódust, amely viszont megjeleníti, hogy Rocco Moe 10/18/22, a kód futtatásának napján csatlakozott.


```py
import datetime as dt 

# Define a new class name Member.
class Member: 
    """ Create a new member. """ 
    def __init__(self, username, fullname):
        # Define attributes and give them values. 
        self.username = username
        self.fullname = fullname

        # Default date_joined to today's date.
        self.date_joined = dt.date.today()
        # Set is active to True initially.
        self.is_active = True

    # A method to return a formatted string showing date joined.
    def show_datejoined(self):
        return f"{self.fullname} joined on {self.date_joined:%m-%d-%y}"
    
    # Method to activate (True) or deactivate (False) account.
    def activate(self, yesno):
        """ True for active, False to make inactive """
        self.is_active = yesno
    
# The class ends at the first unidented line.

# Create an instance of the Member class named new_guy.
new_guy = Member('Rambo', 'Rocco Moe')

#  See what's in the instance, change is_active status.
print(new_guy.show_datejoined())
```

Kimenet:

```txt
Rocco Moe joined on 10-23-22
```

### Paraméterek átadása metódusoknak

A metódusoknak ugyanúgy adhatunk át adatokat, mint a függvényeknek, a zárójelben lévő paraméternevek használatával. Ne feledjük azonban, hogy a `self` mindig az első név a metódus neve után, és soha nem adhat át adatokat a `self` paraméterhez. Tegyük fel például, hogy létrehozunk egy `.activate()` nevű metódust, és `True` értékre állítjuk, ha a felhasználónak engedélyezve van a bejelentkezés, illetve `False` értékre, ha a felhasználónak nem. Bármit is adsz át, az a `.is_active` attribútumhoz lesz hozzárendelve. Így definiáld ezt a metódust a kódodban:

```py
# Method to activate (True) or deactivate (False) account.
def activate(self, yesno):
    """ True for active, False to make inactive """
        self.is_active = yesno
```
A `docstring` nem kötelező. A `docstring` azonban megjelenik a képernyőn, amikor a VS Code-ban az erre vonatkozó kód nevét gépeljük, így jó emlékeztetőül szolgálna arra, hogy mit adhat át. Ez a metódus végrehajtásakor nem jelenít meg semmit a képernyőn, csak az adott tag `is_active` attribútumát változtatja meg arra, amit a `yesno` paraméterként átadtál.

A lenti kód a teljes osztályt mutatja, majd a teszteléshez szükséges kódot. A `new_guy = Member('Rambo', 'Rocco Moe')` sor létrehoz egy új tagobjektumot `new_guy` néven. Ezután a `print(new_guy.is_active)` megjeleníti az `is_active` attribútum értékét, ami `True`, mert ez az alapértelmezett érték minden új tag esetében.


```py
import datetime as dt 

# Define a new class name Member.
class Member: 
    """ Create a new member. """ 
    def __init__(self, username, fullname):
        # Define attributes and give them values. 
        self.username = username
        self.fullname = fullname

        # Default date_joined to today's date.
        self.date_joined = dt.date.today()
        # Set is active to True initially.
        self.is_active = True

    # A method to return a formatted string showing date joined.
    def show_datejoined(self):
        return f"{self.fullname} joined on {self.date_joined:%m-%d-%y}"
    
    # Method to activate (True) or deactivate (False) account.
    def activate(self, yesno):
        """ True for active, False to make inactive """
        self.is_active = yesno
    
# The class ends at the first unidented line.

# Create an instance of the Member class named new_guy.
new_guy = Member('Rambo', 'Rocco Moe')

# Is the new guy active?
print(new_guy.is_active)

# Try out the activate method.
new_guy.activate(False)

# Is the new guy still active?
print(new_guy.is_active)
```

Kimenet:

```txt
True
False
```

A `new_guy.activate(False)` sor meghívja az objektum `activate()` metódusát, és átad neki egy Boolean `False` értéket. Ezután a `print(new_guy.is_active)` bizonyítja, hogy az `activate` hívása valóban megváltoztatta a `new_guy` `is_active` attribútumát `True`-ról `False`-ra.

### Osztály metódus hívása az osztály neve alapján

Mint láthattad, egy osztály metódusát a következő szintaxissal hívhatod meg:

```py
specificobject.method()
```

Egy másik lehetőség a konkrét osztálynév használata, ami segíthet abban, hogy az emberek számára könnyebben érthető legyen a kód:

```py
Classname.method(specificobject)
```

Helyettesítsük a `Classname`-t az osztály nevével (_amelyet jellemzően nagybetűvel kezdődően határozunk meg_), majd a metódus nevével, és tegyük a zárójelek közé az adott objektumot (_amelyet feltehetően már létrehoztunk_).

Tegyük fel például, hogy létrehozunk egy új tagot `wilbur` néven a `Member` osztály és a következő kód segítségével:

```py
wilbur = Member('wblomgren', 'Wilbur Blomgren')
```

Itt a wilbur az a konkrét objektum, amelyet a `Member` osztályból hoztunk létre. Ezen az objektumon a már látott szintaxissal hívhatjuk meg a `show_datejoined()` metódust:

```py
print(wilbur.show_datejoined())
```

A másik lehetőség, hogy meghívjuk a `Member` osztály `show_datejoined()` metódusát, és átadjuk neki az adott objektumot, `wilbur`-t, így:

```py
print(Member.show_datejoined(wilbur))
```

Mindkét módszer kimenete ugyanaz:

```txt
Wilbur Blomgren joined on 10/23/22
```

Ez utóbbi módszer nem gyorsabb, nem lassabb, nem jobb, nem rosszabb, vagy bármi ilyesmi. Ez csak egy alternatív szintaxis, amit használhatsz, és néhányan jobban szeretik, mert a sor `Member`-rel való kezdése egyértelművé teszi, hogy a `show_datejoined()` metódus melyik osztályhoz tartozik. Ez viszont olvashatóbbá teheti a kódot más programozók számára, vagy a saját magad számára egy év múlva, amikor már nem emlékszel semmire, amit az alkalmazásban írtál.

### Osztályváltozók használata


Eddig az attribútumokra láttunk példákat, amelyeket néha példányváltozóknak is nevezünk, mivel olyan adatokat tartalmaznak, amelyek az osztály egyik példányától a másikig változónak.

Például egy `Dog` osztályban a `dog.breed` lehet az egyik kutya esetében Uszkár, de egy másik kutyánál Schnauzer.
Az osztályokkal használható változók másik típusa az úgynevezett __osztályváltozó__, amely az osztály minden új, még nem létrehozott példányára vonatkozik.

Az osztályváltozók egy osztályon belül nem kötődnek a `self`-hez, mert a `self` kulcsszó mindig az adott pillanatban létrehozott konkrét objektumra utal. Egy osztályváltozó definiálásához helyezze az egérmutatót a `def __init__` sor fölé, és definiálja a változót a szokásos szintaxissal:

```py
variablename = value
```

A `variablename`-t helyettesítsük egy szabadon választott névvel, az értéket pedig azzal a konkrét értékkel, amelyet a változóhoz kívánunk rendelni.

Tegyük fel például, hogy a kódunk tartalmaz egy `free_days` változót, amely három hónapos (90 napos) ingyenes hozzáférést biztosít a regisztrációkor. Nem vagy biztos benne, hogy ezt _örökre_ akarod, ezért ahelyett, hogy beprogramoznád (_hardcode-olnád_) az alkalmazásodba (_mert akkor nehéz lenne megváltoztatni_), egyszerűen egy olyan osztályváltozóvá teheted, amely automatikusan minden új objektumra vonatkozik, például így:

```py
# Define a class named Member for making member objects.
class Member:    
    """ Create a member object """
    free_days = 90

    def __init__(self, username, fullname):
```

Mivel a `free_days` változót az `__init__` definiálása előtt definiáljuk, nem kötődik egy adott objektumhoz a kódban.

Most tegyük fel, hogy később a kódban el akarjuk tárolni az ingyenes próbaidőszak lejáratának dátumát.

Létrehozhatunk egy `date_joined` nevű attribútumot, amely a felhasználó csatlakozásának dátumát jelöli, és egy másik, `free_expires` nevű attribútumot, amely a felhasználó ingyenes tagságának lejárati dátumát jelöli.

A második dátumot úgy határozhatjuk meg, hogy a felhasználó csatlakozási dátumához hozzáadjuk az ingyenes napok számát. Értelemszerűen úgy tűnhet, hogy a `free_days`-t egy egyszerű szintaxissal hozzáadhatjuk a dátumhoz, például a következő módon:

```py
self.free_expires = dt.date.today() + dt.timedelta
```

De ha megpróbálnánk futtatni ezt a kódot, hibaüzenetet kapnánk, miszerint a Python nem ismeri fel a `free_days` változó nevét - _annak ellenére, hogy az osztály tetején van definiálva_. Ehelyett a változó neve elé kell tenned az osztály nevét vagy a `self`-et. Például ez így működne:

```py
self.free_expires = dt.date.today() + dt.timedelta(days=Member.free_days)
```

_Az eredeti osztályból eltávolítottuk a kód egy részét, hogy könnyebben tudjunk az új dolgokra koncentrálni._

A `free_days = 365` sor a `free_days` változó értékét __365__-re állítja. - _Az előző példában 90 napot használtunk, de ez egy új példa, és azt szeretnénk bemutatni, hogy ugyanaz a kód hogyan működik a `free_days` változóban megadott bármely napszámmal_.

Ezután a kód későbbi részében a `__init__` módszer a `Member.free_freedays` változót használja, hogy hozzáadja ezt a napszámot az aktuális dátumhoz. A kód futtatása egy `wilbur` nevű új felhasználó létrehozásával a `date_joined` és `free_expires` attribútum értékeinek megjelenítésével az aktuális dátumot és az azt követő 365 napot mutatja.


```py
import datetime as dt

# Define a new class name Member.

class Member:
    # Default number of free days.
    free_days = 365

    """ Create a new member. """
    def __init__(self, username, fullname):
        self.date_joined = dt.date.today()
        # Set an expiration date
        self.free_expires = dt.date.today() + dt.timedelta(days = Member.free_days)

# The class ends at the first un-indented line.

# Create an instance of the Member class named new_guy.
wilbur = Member('wblomgren', 'Wilbur Blomegren')

print(wilbur.date_joined)
print(wilbur.free_expires)
```

Kimenet:

```txt
2022-10-23
2023-10-23
```

Ha később úgy döntünk, hogy 90 ingyenes napot adni bőven elég akkor egyszerűen a 365 nap értéket 90-re állítjuk az osztályban. Mivel ez egy változó, megteheted menet közben is, például így, az osztályon kívül:

```py
# Set a default for free days.
Member.free_days = 90
```
Ha ezt a kódot futtatjuk, akkor ezúttal a `wilbur.free_expires` __90__ nap lesz, nem pedig _365_.

### Osztály metódusok használata

Emlékezzünk vissza, hogy a metódus egy adott osztályhoz kötött függvény. Az eddig használt metódusok, mint például a `.show_datejoined()` és `.activate()`, példány metódusok voltak, mert mindig egy adott objektummal - az osztály egy adott példányával - használod őket. A Pythonban osztály metódusokat is létrehozhatsz.

Ahogy a neve is mutatja, az __osztálymetódus__ az osztály egészéhez kapcsolódó metódus, __nem__ pedig az osztály konkrét példányaihoz. Más szóval az _osztálymetódusok_ az osztályváltozókhoz hasonló módon az egész osztályra vonatkoznak, nem csak az osztály egyes példányaira.

Az osztályváltozókhoz hasonlóan az _osztálymetódusok_ esetében sincs szükség a `self` kulcsszóra, mivel ez a kulcsszó mindig az adott pillanatban létrehozott konkrét objektumra vonatkozik, nem pedig az osztály által létrehozott összes objektumra. Tehát kezdetnek, ha azt akarjuk, hogy egy metódus az osztály egészével csináljon valamit, ne használjuk a `def name(self)` kifejezést, mert a `self` azonnal egy objektumhoz köti a metódust.

Jó lenne, ha egy osztály metódus létrehozásához csak annyit kellene tennünk, hogy kizárjuk a `self` szót, de sajnos ez nem így működik. Egy osztály metódus definiálásához először ezt kell beírnod a kódodba:

```py
@classmethod
```

A `@` az elején a `classmethod`-t dekorátorként definiálja - igen, egy újabb kifejezés, amit hozzáadhatsz a kulcsszavak egyre növekvő listájához. A dekorátor általában olyasvalami, ami megváltoztatja vagy kiterjeszti annak a funkcióját, amire alkalmazzák.

:::tip DEKORÁTOR 🚀
A dekorátor egy olyan tervezési mintázat a Python-ban, amely lehetővé teszi a felhasználó számára, hogy új funkcionalitást adjon egy meglévő objektumhoz anélkül, hogy módosítaná annak struktúráját.
:::

Definiáljuk az osztálymetódust ezzel a szintaxissal:

```py
def methodname(cls,x, ...):
```

Helyettesítse a `methodname` azzal a névvel, amelyet a metódusnak adni szeretne. A `cls`-t hagyd változatlanul, mert ez egy hivatkozás az osztály egészére - __mivel a @classmethod dekorátor a színfalak mögött így definiálta.__ A `cls` után vesszők és a metódusnak átadni kívánt paraméterek nevei következnek, ugyanúgy, mint a hagyományos példány metódusoknál.

Tegyük fel például, hogy egy olyan módszert szeretnénk definiálni, amely közvetlenül az objektumok létrehozásának megkezdése előtt beállítja a szabad napok számát, hogy minden objektum ugyanazt a `free_days` mennyiséget kapja.

A következő kód ezt úgy éri el, hogy először definiál egy `free_days` nevű osztályváltozót, amelynek adott alapértelmezett értéke 0 - __az alapértelmezett érték bármi lehet.__

```py
# Class methods follow @classmethod decorator and refer to cls rather than to self.
@classmethod
def setfreedays(cls,days):
    cls.free_days = days
```
Ez a kód azt mondja a Python-nak, hogy amikor valaki meghívja az osztály `setfreedays()` metódusát, akkor a `cls.free_days` - _az osztály `free_days` osztályváltozója_ - értékét a megadott napok számának megfelelően kell beállítania.

```py
import datetime as dt

# Define a new class name Member.
class Member:
    # Default number of free days.
    free_days = 365

    """ Create a new member. """
    def __init__(self, username, fullname):
        self.date_joined = dt.date.today()
        # Set an expiration date
        self.free_expires = dt.date.today() + dt.timedelta(days = Member.free_days)

    # Class methods follow @classmethod decorator and refer to cls rather than to self.
    @classmethod
    def setfreedays(cls,days):
        cls.free_days = days
```

Tehát a `setfreedays()` metódus a `Member` osztály osztály metódusa.

# Statikus metódusok használata

Amikor már azt hitted, hogy végre befejeztük az osztályok megismerését, kiderült, hogy van egy másik fajta metódus is, amelyet egy Python osztályban hozhatsz létre. Ezt __statikus metódusnak__ hívják, és ezzel a dekorátorral kezdődik: `@staticmethod`.

Ez a rész tehát egyszerű. A statikus metódus abban __különbözik__ a __példány- és osztálymetódusoktól__, hogy a statikus metódus n__em vonatkozik__ konkrétan egy objektum __példányára__ vagy akár az __osztály__ egészére. Ez egy általános függvény, és az egyetlen ok, amiért egy osztály részeként definiáljuk, az az, ha ugyanazt a nevet máshol egy másik osztályban szeretnénk használni a kódunkban.

Ahol statikus metódust akarsz, ott írd be a `@staticmethod` sort. A sor alatt ugyanúgy definiálod a statikus metódust, mint bármely más metódust, de nem használod a `self`-et és nem használod a `cls`-t, mert egy statikus metódus nem kötődik szigorúan egy osztályhoz vagy objektumhoz. Íme egy példa egy statikus metódusra:

```py
@staticmethod
def currenttime():
    now = dt.datetime.now()
    return f"{now:%I:%M %p}"
```

Tehát van egy `currenttime()` nevű metódusunk, amely nem vár semmilyen adatot, és nem érdekli, hogy milyen objektummal vagy osztállyal dolgozunk. A metódus csak az aktuális időpontot kapja meg a `now = dt.datetime.now()` használatával, majd ezt az információt szépen __12:00 PM__ formátumban adja vissza.

A lenti kódrész egy teljes példát mutat, amelyben a statikus metódus megfelelően behúzva és az osztály végéhez közel gépelve látható. Amikor az osztályon kívüli kód meghívja a `Member.currenttime()` metódust, az pontosan visszaadja a pillanatnyi időt, anélkül, hogy bármit is mondanunk kellene az osztály egy konkrét objektumáról.

```py
import datetime as dt

# Define a new class name Member.
class Member:
    # Default number of free days.
    free_days = 365

    """ Create a new member. """
    def __init__(self, username, fullname):
        self.date_joined = dt.date.today()
        # Set an expiration date
        self.free_expires = dt.date.today() + dt.timedelta(days = Member.free_days)

    # Class methods follow @classmethod decorator and refer to cls rather than to self.
    @classmethod
    def setfreedays(cls,days):
        cls.free_days = days
    
    @staticmethod
    def currenttime():
        now = dt.datetime.now()
        return f"{now:%I:%M %p}"

# Class definition ends at last indented line

# Try out the new static method (no object required)
print(Member.currenttime())
```

Kimenet:

```txt
03:22 PM
```

Tehát a `Member` osztály mostantól rendelkezik egy `currenttime()` nevű statikus metódussal.

## Az osztályok öröklődésének megértése

Az objektumorientált programozással foglalkozó emberek olyan dolgokról beszélnek, amelyek az átlagembernek vagy az utca emberének nem sokat vagy semmit sem jelentenek. Mégis, amiről ők Python-koncepcióként beszélnek, az olyasmi, amivel a való életben is állandóan találkozunk.

Mint említettük, ha a kutya DNS-ét egyfajta gyárnak vagy Python-osztálynak tekintjük, akkor az összes kutyát összevonhatjuk egy kutyáknak nevezett állatosztály tagjaként. Bár minden kutya egyedi, mégis minden kutya kutya, mert az általunk kutyáknak nevezett osztály tagjai. A lenti ábrán látható módon szemléltethetjük.

![](/assets/images/python/8/4.png)

Tehát minden kutya egyedi, de ami miatt a kutyák hasonlítanak egymásra, azok a tulajdonságok, amelyeket a kutyák osztályából örökölnek.

Az osztály és az osztályöröklés fogalma, amit a Python és más objektumorientált nyelvek kínálnak, nem azért bukkant fel a derült égből, hogy nehezebbé és idegesítőbbé tegyék a tanulásukat. A világ információinak nagy részét a legjobban úgy lehet tárolni, kategorizálni és megérteni, ha osztályokat, alosztályokat és al-alosztályokat használunk, egészen az egyedekig.

Például észrevehetted, hogy más kutyaszerű lények is kószálnak a bolygón  - _bár valószínűleg nem olyanok, amelyeket háziállatként szívesen tartanál a ház körül 😆._ Ha a farkasok, prérifarkasok és sakálok jutnak eszedbe akkor abban hasonlítanak a kutyákhoz, hogy mindannyian egy magasabb szintű osztálytól örökölték kutyásságukat, amelyet kutyáknak nevezhetnénk, ahogy a lenti ábrán látható.

![](/assets/images/python/8/5.png)

A kutyás hasonlatot használva, biztosan nem kell megállnunk a kutyáknál a felfelé vezető úton. Az emlősöket is föléjük helyezhetjük, mert minden kutyaféle emlős. Az állatokat is fölé helyezhetjük, mert minden emlős állat. És az élőlényeket is feljebb helyezhetjük, mert minden állat élőlény. Tehát alapvetően minden, ami a kutyát kutyává teszi, abból a tényből ered, hogy mindegyikük bizonyos tulajdonságokat örökölt az őt megelőző számos osztálytól, vagy állatfajtától.

:::tip 👀
Ha rákeresel az interneten az élőlények hierarchiájára, látni fogod, hogy hányféleképpen lehet osztályozni az összes élőlényt, és hogy az öröklődés hogyan halad lefelé az általánostól a konkrét élőlényig.
:::

Ezt még az autós hasonlatunk is követni tudja. A csúcson vannak a szállítójárművek. Alatta talán a hajók, a repülőgépek és az autók. Az autók alatt vannak a személygépkocsik, teherautók, furgonok, és így tovább, egészen bármelyik konkrét autóig. Az osztályok és alosztályok tehát nem újdonságok. Lássuk tehát, hogyan csinálhatnánk ezt.

Kódolási szempontból a legegyszerűbb módja az öröklésnek az, hogy egy osztályon belül __alosztályokat__ hozunk létre. Az osztály olyan dolgokat definiál, amelyek az osztály minden példányára vonatkoznak. Minden alosztály csak az alosztályra vonatkozó dolgokat definiál, anélkül, hogy bármit is helyettesítene, ami az általános szülőosztályból származik.

### Az alap (main) osztály létrehozása

Az alosztályok valamilyen magasabb szintű főosztály, vagy szülőosztály - amelyet általában alaposztálynak neveznek - összes attribútumát és metódusát öröklik. Ez az osztály egy akármilyen osztály, semmiben sem különbözik attól, amit eddig ebben a fejezetben láttál. Ismét egy Member osztályt fogunk használni, de ezt lecsökkentjük néhány puszta lényegre, amelyeknek semmi közük az alosztályokhoz, így nem kell lényegtelen kódban turkálnunk. Íme az alaposztály:

```py
# Class is used for all kinds of people.
import datetime as dt

# Base class is used for all kinds of Members.
class Member:
    """The Member class attributes and methods are for everyone"""

    # By default, a new account expires in one year (365 days)
    expiry_days = 365

    # Initialize a member object.
    def __init__(self, firstname, lastname):
        # Attributes (instance variables) for everybody.
        self.firstname = firstname
        self.lastname = lastname
        # Calculate expiry date from today's date.
        self.expiry_date = dt.date.today() + dt.timedelta(days=self.expiry_days)
```

Alapértelmezés szerint az új fiókok egy év múlva járnak le. Ezért ez az osztály először egy `expiry_days` nevű osztályváltozót állít be 365-re, amelyet a későbbi kódban a lejárati dátum kiszámításához használunk a mai dátumból. Mint később látni fogjuk, az `expiry_days` meghatározásához egy osztályváltozót használtunk, mert egy alosztályból új értéket adhatunk neki.

Hogy a kódpélda egyszerű és áttekinthető maradjon, a `Member` osztály ezen változata csak két paramétert fogad el, a keresztnév és a vezetéknév paramétereket.

A lenti kód a tesztelésre mutat egy példát képzeletbeli Joe nevű  taggal. Joe `firstname`, `lastname` és `expiry_date`-jének kiírása megmutatja, hogy mit várunk az osztálytól, ha átadjuk a `firstname`-nek, hogy __Joe__ és a `lastname`-nek azt, hogy __Anybody__. A kód futtatásakor a `expiry_date`-nek a kód futtatásának időpontjától számított egy évnek kell lennie.

```py
# Class is used for all kinds of people.
import datetime as dt

# Base class is used for all kinds of Members.
class Member:
    """The Member class attributes and methods are for everyone"""

    # By default, a new account expires in one year (365 days)
    expiry_days = 365

    # Initialize a member object.
    def __init__(self, firstname, lastname):
        # Attributes (instance variables) for everybody.
        self.firstname = firstname
        self.lastname = lastname
        # Calculate expiry date from today's date.
        self.expiry_date = dt.date.today() + dt.timedelta(days=self.expiry_days)

# Outside the class now.
Joe = Member('Joe', 'Anybody')
print(Joe.firstname)
print(Joe.lastname)
print(Joe.expiry_date)
```

Kimenet:

```txt
Joe
Anybody
2023-10-23
```

Most tegyük fel, hogy a valódi szándékunk az, hogy két különböző típusú felhasználót hozzunk létre, `Admins` és `Users`. Mindkét típusú felhasználó rendelkezik majd azokkal az attribútumokkal, amelyeket a `Member` osztály kínál. Tehát azzal, hogy ezeket a típusú felhasználókat a `Member` alosztályaként definiáljuk, automatikusan ugyanazokat az attribútumokat kapják meg.

### Alosztály definiálása

Alosztály definiálásához győződjünk meg róla, hogy a kurzor az alaposztály alá kerül, majd vissza a behúzás nélküli helyre, mivel az alosztály nem része, vagy nem tartalmazza az alaposztályt. Alosztály definiálásához használjuk ezt a szintaxist:

```py
class subclassname(mainclassname):
```

Helyettesítse a `subclassname` azzal, amivel ezt az alosztályt el akarja nevezni. A `mainclassname`-t helyettesítse az alaposztály nevével, ahogyan az az alaposztály tetején definiálva van. Például a `Member` egy `Admin` nevű alosztályának létrehozásához használjuk a következőt:

```py
class Admin(Member):
```

Egy másik `User` nevű alosztály létrehozásához adjuk hozzá ezt a kódot:

```py
class User(Member):
```

Ha üresen hagyod az osztályokat, akkor nem tudod majd tesztelni őket, mert egy hibaüzenetet kapsz, hogy az osztály üres. De mindegyikbe beírhatod a `pass` szót első parancsként. Ezzel azt mondod a Pythonnak, hogy __"Igen, tudom, hogy ezek az osztályok üresek, de hagyd átadni, ne dobjon hibaüzenetet"__. Mindegyik fölé tehetsz egy-egy megjegyzést, hogy emlékeztessen arra, mint a következőkben:

```py
# Subclass for Admins.
class Admin(Member):
    pass


# Subclass for Users.
class User(Member):
    pass
```

Az alosztályok használatakor nem kell közvetlenül hivatkozni a `Member` osztályra. Az `Admins` és a `Users` automatikusan örökölni fogják az összes `Member` funkciót. Így például egy __Annie__ nevű `Admin` létrehozásához a következő szintaxist használjuk: 

```py
Ann = Admin('Annie', 'Angst')
```

Felhasználó létrehozásához ugyanezt kell tennie a `User` osztállyal és a felhasználó nevével. Például:

```py
Uli = User('Uli', 'Ungula')
```

Ha meg akarod nézni, hogy ez a kód működik-e, akkor ugyanazt csinálhatod, mint __Ann__ tag esetében. Miután létrehozta a két fiókot, használjuk a `print()` utasításokat, hogy megnézzük, mi van bennük.

A lenti kód megmutatja a két felhasználó létrehozásának eredményét. __Ann__ egy _admin_, __Uli__ pedig egy _felhasználó_, de mindketten automatikusan megkapják a tagokhoz rendelt összes attribútumot. (A `Member` osztály közvetlenül a látható kód felett található. Ezt kihagytuk, mert nem változott).

```py
# Class is used for all kinds of people.
import datetime as dt

# Base class is used for all kinds of Members.
class Member:
    """The Member class attributes and methods are for everyone"""

    # By default, a new account expires in one year (365 days)
    expiry_days = 365

    # Initialize a member object.
    def __init__(self, firstname, lastname):
        # Attributes (instance variables) for everybody.
        self.firstname = firstname
        self.lastname = lastname
        # Calculate expiry date from today's date.
        self.expiry_date = dt.date.today() + dt.timedelta(days=self.expiry_days)

# Subclass for Admins.
class Admin(Member):
    pass


# Subclass for Users.
class User(Member):
    pass

Ann = Admin('Annie', 'Angst')
print(Ann.firstname)
print(Ann.lastname)
print(Ann.expiry_date)
print()
Uli = User('Uli', 'Ungula')
print(Uli.firstname)
print(Uli.lastname)
print(Uli.expiry_date)
```
Az __Admin__ és __User__ osztályok létrehozása és tesztelése. 👆🏻

Kimenet:
```txt
Annie
Angst
2023-10-23

Uli
Ungula
2023-10-23
```

Tehát amit itt megtanultunk, az az, hogy az alosztály elfogadja a különböző paramétereket, amit az alaposztály elfogad, és hozzárendeli őket az attribútumokhoz, ugyanúgy, mint a `Member` osztály. De eddig az `Admin` és a `User` csak tagok, egyedi jellemzők nélkül. A való életben valószínűleg lesz némi különbség e két típusú felhasználó között. A következőkben megtanuljuk, hogyan lehet ezeket a különbségeket megvalósítani.

### Alapértelmezett értékek felülírása alosztályból

Az egyik legegyszerűbb dolog, amit egy alosztállyal tehetünk, hogy egy olyan attribútumnak, amelynek az alaposztályban alapértelmezett értéke van, más értéket adunk. 

Például a Member osztályban létrehoztunk egy `expiry_days` nevű változót, amelyet később az osztályban a lejárati dátum kiszámításához használunk. 

De tegyük fel, hogy azt szeretnénk, hogy az __admin__ fiókok soha ne járjanak le - _vagy hogy valamilyen nevetséges időtartam után járjanak le, hogy még mindig legyen ott valamilyen dátum._

Egyszerűen állítsuk be az új `expiry_date`-t az `Admin` osztályban - __és eltávolíthatjuk a pass sort, mert az osztály már nem lesz üres.__ Nézzük a változásokat az Admin alosztályunkban:

```py
# Subclass for Admins.
class Admin(Member):
    # Admin accounts don't expire for 100 years.
    expiry_days = 365 * 100
```

Bármilyen értéket is adsz meg, az felülbírálja a `Member` osztály tetején beállított alapértelmezett értéket, és az `Admin` lejárati dátumának kiszámításához lesz használva.

### Extra paraméterek hozzáadása egy alosztályból

Előfordul, hogy egy alosztály tagjai olyan paraméterértékkel rendelkeznek, amely más tagoknak nincs. Ebben az esetben előfordulhat, hogy az alosztályból olyan paramétert kell átadni, amely az alaposztályban nem létezik. Ez egy kicsit bonyolultabb, mint egy alapértelmezett érték megváltoztatása, de ez egy gyakori technika, ezért tisztában kell lennie vele. Vizsgáljunk meg egy példát.

Először is, az alosztályodnak szüksége lesz egy saját `def __init__` sorra, amely tartalmaz mindent, ami az alaposztály `__init__` sorában van, plusz minden olyan extra dolgot, amit át akarsz adni. Tegyük fel például, hogy az adminoknak van valami titkos kódjuk, és ezt szeretnénk átadni az `Admin` alosztályból. A kereszt- és vezetéknevet még mindig át kell adnod, így a `def __init__` sorod az `Admin` alosztályban így fog kinézni:

```py
def __init__(self, firstname, lastname, secret_code):
```

A behúzási sáv megegyezik a felette lévő sorokkal.

Ezután minden olyan paramétert, amely az alaposztályhoz, a `Member`-hez tartozik, felfelé kell átadni, ezt a meglehetősen furcsa szintaxist használva:

```py
super().__init__(param1, param2, ...)
```

A `param1`, `param2` és így tovább helyettesítse a paraméterek neveit az alaposztályba küldendő paraméterek nevével. A paraméterekben megadott információnak mindannak kell lennie, ami a `self` kivételével már a `Member` paraméterekben is szerepel. Ebben a példában a `Member` csak a `firstname` és a `lastname` értékeket várja el, így a kód a következő lesz:

```py
super().__init__(firstname, lastname)
```

Amit nem adtál meg az első paramétersorozatban, azt ezzel a kóddal rendelheted az alosztály objektumához:

```py
self.secret_code = parametername
```

A `parametername` helyettesítse annak a paraméternek a nevével, amelyet nem küldött el a `Member`-nek. Ebben az esetben ez lenne a `secret_code` paraméter. A kód tehát a következő:

```py
self.secret_code = secret_code
```

A következő kódrész lent példát mutat, amelyben létrehoztunk egy __Ann__ nevű __admin__ felhasználót, és a titkos kódjaként a __PRESTO__-t adtuk meg. Az összes attribútumának kiírása azt mutatja, hogy valóban rendelkezik még a megfelelő lejárati dátummal és titkos kóddal. Mint látható, létrehoztunk egy __Uli__ nevű __normál__ felhasználót is. __Uli__ adatait nem érintik az __Admin__ módosításai.

A mi példánkban a felhasználóknak még nem adtunk titkos kódot. Ha megpróbálunk kiírni egy normál felhasználót a Python kóddal, ahogyan azt a lenti kódban láthatod, hibát fogsz kapni, mert a Python kód még nincs megírva a titkos kóddal nem rendelkező felhasználók számára.

```py{4,5}
Ann = Admin('Annie', 'Angst', 'PRESTO')
print(Ann.firstname, Ann.lastname, Ann.expiry_date, Ann.secret_code)

Uli = User('Uli', 'Ungula', 'PRESTO2')
print(Uli.firstname, Uli.lastname, Uli.expiry_date, Uli.secret_code)
```
Kimenet:
```txt
Traceback (most recent call last):
  File "member_class.py", line 40, in <module>
    print(Uli.firstname, Uli.lastname, Uli.expiry_date, Uli.secret_code)
AttributeError: 'User' object has no attribute 'secret_code'

Traceback (most recent call last):
  File "member_class.py", line 39, in <module>
    Uli = User('Uli', 'Ungula', 'PRESTO2')
TypeError: Member.__init__() takes 3 positional arguments but 4 were given
```


Az egyik megoldás az, hogy egyszerűen emlékezzünk arra, hogy a normál felhasználóknak nincs titkos kódjuk. Tehát az alkalmazás használatakor soha ne próbáljuk meg kiírni a titkos kódot egy normál felhasználó számára. De jobb lenne, ha a kód kezelné a hibát helyettünk. Ehhez minden felhasználó fiókjához titkos kódot társítunk. A felhasználók esetében a titkos kód üres lesz, ami megakadályozza, hogy hozzáférjenek a rendszergazdai információkhoz. Csak az adminok rendelkeznének érvényes titkos kódokkal.

```py
# Class is used for all kinds of people.
import datetime as dt

# Base class is used for all kinds of Members.
class Member:
    """The Member class attributes and methods are for everyone"""

    # By default, a new account expires in one year (365 days)
    expiry_days = 365

    # Initialize a member object.
    def __init__(self, firstname, lastname):
        # Attributes (instance variables) for everybody.
        self.firstname = firstname
        self.lastname = lastname
        # Calculate expiry date from today's date.
        self.expiry_date = dt.date.today() + dt.timedelta(days=self.expiry_days)

# Subclass for Admins.
class Admin(Member):
    # Admin accounts don't expire for 100 years.
    expiry_days = 365 * 100
    # Subclass paramters
    def __init__(self, firstname, lastname, secret_code):
        # Pass Member parameters on up to Member class.
        super().__init__(firstname, lastname)
        # Assign the remaining paramter to this object.
        self.secret_code = secret_code


# Subclass for Users.
class User(Member):
    pass

Ann = Admin('Annie', 'Angst', 'PRESTO')
print(Ann.firstname, Ann.lastname, Ann.expiry_date, Ann.secret_code)

print()
Uli = User('Uli', 'Ungula')
print(Uli.firstname, Uli.lastname, Uli.expiry_date)
```
Az `Admin` alosztály új `secret_code` paraméterrel rendelkezik.

Kimenet:

```txt
Annie Angst 2122-09-29 PRESTO

Uli Ungula 2023-10-23
```

Ha egy tag rendes tagként csatlakozik, és később admin lesz, a Python kódnak csak az üres `secret_code`-ot kell érvényes `secret_code`-ra cserélnie.

Ha az osztályod minden felhasználóhoz  - __nem csak az adminokhoz__ hozzárendelünk egy `secret_code`-ot, akkor nem fogunk hibát kapni, amikor kiírjuk a normál felhasználó adatait. Ehelyett a normál felhasználó titkos kódja üresként fog megjelenni. Ahhoz, hogy minden taghoz hozzárendeljünk egy titkos kódot, még akkor is, ha a titkos kód üres, adjuk hozzá a következőket a `Member` osztályhoz:

```py
# Default secret code is nothingself.
secret_code = ""
```

Így annak ellenére, hogy a `User` alosztályban nem csinálsz semmit a `secret_code`-al, nem kell aggódnod, hogy hibát kapsz, ha megpróbálsz hozzáférni egy `User` titkos kódjához. A `User`-nek lesz titkos kódja, de az csak egy üres karakterlánc lesz. A lenti kód megmutatja az `Uli.secret_code` kiírására tett kísérletet, amely hibaüzenet dobása nélkül csak a semmit jeleníti meg.

A `User` alosztályt meghagyjuk a `pass` egyetlen utasítással. A való életben valószínűleg több alapértelmezett értéket vagy paramétert találnál ki a többi alosztályod számára. De a szintaxis és a kód minden alosztály esetében ugyanaz. Az ebben a szakaszban tanult készségek az összes osztályod és alosztályod esetében működni fognak.

```py
# Class is used for all kinds of people.
import datetime as dt

# Base class is used for all kinds of Members.
class Member:
    """The Member class attributes and methods are for everyone"""

    # By default, a new account expires in one year (365 days)
    expiry_days = 365

    # Initialize a member object.
    def __init__(self, firstname, lastname):
        # Attributes (instance variables) for everybody.
        self.firstname = firstname
        self.lastname = lastname
        # Calculate expiry date from today's date.
        self.expiry_date = dt.date.today() + dt.timedelta(days=self.expiry_days)
        # Default secret code is nothing
        self.secret_code = ''

# Subclass for Admins.
class Admin(Member):
    # Admin accounts don't expire for 100 years.
    expiry_days = 365 * 100
    # Subclass paramters
    def __init__(self, firstname, lastname, secret_code):
        # Pass Member parameters on up to Member class.
        super().__init__(firstname, lastname)
        # Assign the remaining paramter to this object.
        self.secret_code = secret_code


# Subclass for Users.
class User(Member):
    pass

Ann = Admin('Annie', 'Angst', 'PRESTO')
print(Ann.firstname, Ann.lastname, Ann.expiry_date, Ann.secret_code)

print()
Uli = User('Uli', 'Ungula')
print(Uli.firstname, Uli.lastname, Uli.expiry_date, Uli.secret_code)
```
A teljes `Admin` és `User` alosztályok. 👆🏻

Kimenet:

```txt
Annie Angst 2122-09-29 PRESTO

Uli Ungula 2023-10-23 
```

### Alaposztály metódus hívása

Az alaposztály metódusai ugyanúgy működnek az alosztályok esetében, mint az alaposztály esetében. Az alaposztályban lévő metódus kipróbálásához adjunk hozzá egy új metódust `showexpiry(self)` néven az alaposztály aljához, az alábbiak szerint:

```py
 # Method in the base class
    def showexpiry(self):
        return f"{self.firstname} {self.lastname} expires on {self.expiry_date}"
```

A `showexpiry()` metódus meghívásakor egy formázott karakterláncot ad vissza, amely tartalmazza a felhasználó vezeték- és keresztnevét, valamint a lejárati dátumot. Az alosztályokat érintetlenül hagyva és a kódot végrehajtva megjeleníti __Ann__ és __Uli__ nevét és lejárati dátumát:

```py
Ann = Admin('Annie', 'Angst', 'PRESTO')
print(Ann.showexpiry())

Uli = User('Uli', 'Ungula')
print(Uli.showexpiry())
```

A kimenet, bár a dátumok különbözni fognak a kód futtatásának dátumától függően:

```txt
Annie Angst expires on 2122-09-29
Uli Ungula expires on 2023-10-23
```


### Ugyanazon név többszöri használata

Talán kíváncsi vagy arra, hogy mi történik, ha ugyanazt a nevet többször használod? A Python mindig a __legmeghatározóbbat / legkonkrétabbat__ választja, azt, amelyik az alosztályhoz kötődik. Az alaposztály általánosabb módszerét csak akkor fogja használni, ha az alosztályban semmi sem rendelkezik ezzel a metódusnévvel.

A szemléltetés érdekében íme néhány kód, amely egy `Member` osztályt definiál néhány attribútummal és metódussal, hogy minden irreleváns kódot eltüntessünk az útból. A kódban található megjegyzések leírják, hogy mi történik a kódban:

```py
class Member:
    """The Member class attributes and methods"""

    # Initialize a member object.
    def __init__(self, firstname, lastname):
        # Attributes (instance variables) for everybody.
        self.firstname = firstname
        self.lastname = lastname
        # Method in the base class
        def get_status(self):
            return f"{self.firstname} is a Member."


# Subclass for Administrators
class Admin(Member):
    def get_status(self):
        return f"{self.firstname} is an Admin."


# Subclass for regular Users
class User(Member):
    def get_status(self):
        return f"{self.firstname} is a regular User."
```

A `Member` osztály, valamint az `Admin` és a `User` osztályok rendelkeznek egy `get_status()` nevű metódussal, amely a tag _keresztnevét_ és _státuszát_ mutatja.

```py
class Member:
    """The Member class attributes and methods"""

    # Initialize a member object.
    def __init__(self, firstname, lastname):
        # Attributes (instance variables) for everybody.
        self.firstname = firstname
        self.lastname = lastname
    
    # Method in the base class
    def get_status(self):
            return f"{self.firstname} is a Member."


# Subclass for Administrators
class Admin(Member):
    def get_status(self):
        return f"{self.firstname} is an Admin."


# Subclass for regular Users
class User(Member):
    def get_status(self):
        return f"{self.firstname} is a regular User."


# Create an admin
Ann = Admin('Annie', 'Angst')
print(Ann.get_status())
# Create a user
Uli = User('Uli', 'Ungula')
print(Uli.get_status())
# Create a member (neither Admin or User)
Manny = Member('Manny', 'Membo')
print(Manny.get_status())
```

Kimenet:

```txt
Annie is an Admin.
Uli is a regular User.
Manny is a Member.
```


A metódusfelbontási sorrend azt mondja, hogy ha egy _osztály_ (és alosztályai) mindegyike rendelkezik azonos nevű metódussal (például `get_status`), akkor a `get_status()` hívása egy `Admin` felhasználó részéről azt eredményezi, hogy a Python megkeresi az `Admin`-ban ezt a metódust, és ha létezik, akkor használja. Ha az __Admin__ alosztályban nem definiáltak `get_status()` metódust, akkor a Python a Member osztályban keresi és azt használja, ha talál. Ha egyikben sem volt `get_status` metódus, akkor a `builtins.object` osztályban keres, ami egy hivatkozás bizonyos beépített metódusokra, amelyeken minden osztály és alosztály osztozik.

A lényeg tehát az, hogy ha az adatokat osztályok és alosztályok hierarchiájában tároljuk, és egy alosztály metódusát hívjuk meg, a Python az alosztály metódusát fogja használni, ha létezik. Ha nem, akkor a Python az alaposztály metódusát fogja használni, ha az létezik. Ha az sem létezik, akkor a beépített metódusokkal próbálkozik. Ha pedig minden más nem sikerül, hibát fog dobni, mert nem találja azt a metódust, amelyet a kódunk meg akar hívni. Általában az ilyen típusú hiba fő oka az, hogy egyszerűen rosszul írtad a metódus nevét a kódodban, így a Python nem találja meg.

Az osztályok - _és bizonyos mértékig az alosztályok_ - nagymértékben használatosak a Python világában, és amit itt megtanultál, az megkönnyíti a saját osztályok írását, valamint a mások által írt osztályok megértését. A következő órán megtanuljuk, hogy hogyan kezeli a Python a hibákat, és mit tehetünk a saját kódjainkban a hibák jobb kezelése érdekében.