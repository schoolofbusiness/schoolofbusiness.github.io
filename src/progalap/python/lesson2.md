# 2. tananyag

:::tip 📚 EBBEN A FEJEZETBEN

- A Python fájl megnyitása
- Python-kommentárok használata
- Adattípusok megértése Pythonban
- A Python operátorokkal való munkavégzés
- Változók létrehozása
- A szintaxis megértése
- A kód szervezése
:::

Az alkalmazások létrehozásához tudnod kell, hogyan kell kódot írni egy kódszerkesztőn belül. Mint minden nyelv esetében, itt is meg kell értened az egyes szavakat, hogy elkezdhess mondatokat, végül pedig az alkalmazásod működését lehetővé tevő kódblokkokat felépíteni. Először is végigvezetünk egy fájl létrehozásán, amelyben a kódodat fogod létrehozni. 

Megismered a különböző **adattípusokat**, **operátorokat** és **változókat**, vagyis a _Python nyelv_ szavait, majd a Python szintaxist. Illetve, hogyan mentheted el az alkalmazásodat, hogyan lehet a hibákat kiszűrni, és hogyan kommentálhatod a kódodat, hogy te és mások is megértsék, hogyan és miként építetted fel.

APython megtanulásához és az alkalmazások létrehozásához az egyre népszerűbb Visual Studio Code (VS Code) szerkesztőt fogjuk használni. Feltételezem, hogy már feltelepítetted és beállítottad a fejlesztői környezetet, ahogyan azt az előző órai fejezeteiben leírtam.

1. Nyisd meg a Visual Studiot.
2. Kattints a létrehozott hello.py fájlra.
3. Kezdjünk akkor neki a hello.py fájl szerkesztéséhez.

## Python kommentek írása és használata

Mielőtt bármilyen kódot begépelnénk, kezdjük egy programozói megjegyzéssel. A programozói megjegyzés (általában röviden **kommentnek** nevezik) olyan szöveg a programban, amely nem csinál semmit. Ami felveti a kérdést: **" Ha nem csinál semmit, miért írjuk be? "**. Tanulóként a kódodban lévő kommentárokat használhatod arra, hogy feljegyzést készíts magadnak arról, hogy mit csinál a kód. Ez sokat segíthet nem csak most tanulási időszakban, hanem majd késöbb is.

A kódban lévő megjegyzések azonban nem csak kezdőknek szólnak. Amikor csapatban dolgoznak, a szakemberek gyakran használnak megjegyzéseket, hogy elmagyarázzák a csapattagoknak, mit csinál a kódjuk. A fejlesztők saját maguknak szóló jegyzetként is tesznek megjegyzéseket a kódjukba, hogy ha a jövőben felülvizsgálják a kódot, a saját jegyzeteikre hivatkozva emlékezhessenek arra, hogy miért csináltak valamit a kódban. Mivel a megjegyzés nem kód, a megfogalmazása bármi lehet, amit csak akarsz. Ahhoz azonban, hogy megjegyzésként lehessen azonosítani, a következők egyikét kell tennie:

- Kezdje a szöveget `#` jellel 
- A szöveget háromszoros idézőjelek közé zárja.

### Python-kommentár beírása a saját kódunkba 

A VS Code-ban kattints a `hello.py` és írja be a következőt: 

```py
# Ez egy Python komment az első Python alkalmazásomban.
```
A beírt megjegyzés megjelenik az 1. sorban. A megjegyzés szövege zöld színű lesz, ha az alapértelmezett színtémát használod. Vedd figyelembe, hogy a villogó kurzor most a 2. sorban van.

Bár egyelőre nem fogsz többsoros megjegyzéseket használni, tudnod kell, hogy hosszabb megjegyzéseket is beírhatsz Pythonban, ha hármas idézőjelekbe zárod őket. Ezeket a nagyobb megjegyzéseket néha docstringnek nevezik, és gyakran a Python modul, függvény, osztály vagy metódus definíciójának tetején jelennek meg, amelyek olyan alkalmazás építőelemek, amelyekkel kicsit később fogsz megismerkedni. Íme egy példa arra, hogyan nézhet ki egy ilyen megjegyzés Python-kódban: 

```py
"""
Ez egy többsoros megjegyzés Pythonban.
Az ilyen típusú megjegyzést néha docstringnek nevezik.
A docstring három dupla idézőjellel kezdődik, és szintén három dupla idézőjellel végződik.
"""
```

A megjegyzés elején és végén három egyszerű idézőjelet is használhatsz, ahelyett, hogy három dupla idézőjelet használnál.
A VS Code-ban a megjegyzések általában más színűek, mint a kód. A `#`-el kezdődő rövid kommentek zöld színűek, a `docstring`ek pedig barnák, hogy jobban kitűnjenek a futtatott Python-kódból.

A kódban korlátlan számú megjegyzést használhatsz. Ha arra vársz, hogy valami történjen, miután beírtál egy megjegyzést ... ne tedd. Amikor egy ilyen szerkesztőben dolgozol, a kód nem csinál semmit, amíg el nem indítod. És most csak egy megjegyzés van, tehát még ha el is indítanánk a kódot, akkor sem történne semmi, mert a megjegyzések az emberi olvasóknak szólnak, nem a számítógépeknek. Mielőtt elkezdenénk kódot gépelni, az abszolút alapokkal kell kezdenünk, amelyek a következők lennének ...

## A Python adattípusok megértése

Ha állandóan írott információkkal foglalkozól, akkor valószínűleg nem gondolsz a számok és a szövegek közötti különbségre. A számok összegek, például 10 vagy 123,45. A szöveg betűkből és szavakból áll. A számítógépek számára a nagy különbség az, hogy számokkal számolni (összeadni, kivonni, szorozni, osztani) tudnak, de betűkkel és szavakkal nem.

Például mindenki tudja, hogy 1+1 = 2. Ugyanez nem vonatkozik a betűkre és a szavakra. Az A+A kifejezés nem feltétlenül egyenlő B-vel vagy AA-val vagy bármi mással, mert a számokkal ellentétben a betűk és a szavak nem mennyiségek.

### Számok

A Pythonban a számoknak számjegyekkel (0-9), ponttal (pont) - *ami a tizedesvesszőt jelenti* -, vagy kötőjellel (-) kell kezdődniük - *amit negatív számok esetén negatív jelként használnak*. Egy szám csak egy tizedespontot tartalmazhat. Nem tartalmazhat betűket, szóközöket, dollárjeleket vagy bármi mást, ami nem része egy normál számnak. 

|    Szám    | Helyes-e? |                            Indoklás                            |
|:----------:|:---------:|:--------------------------------------------------------------:|
|      1     |     I     |                           Egész szám                           |
|     1.1    |     I     |                 Tizedesvesszővel ellátott szám                 |
| 1234567.89 |     I     |                   Nagy szám tizedesvesszővel                   |
|     -2     |     I     |          Egy negatív szám, amit a kezdő kötőjel jelez.         |
|     .99    |     I     | Egy szám, amely tizedesvesszővel kezdődik, mert kisebb, mint 1 |
|    $1.99   |     N     |                         $ -t tartalmazz                        |
| 91740-3384 |     N     |                        - jelet tartalmaz                       |
|  127.0.0.1 |     N     |                 csak egy tizedesjel megengedett                |
|  123 Utca  |     N     |                  szóközt és szöveget tartalmaz                 |

Az általad használt számok túlnyomó többsége valószínűleg megfelel a jó számok első négy példájának. Azonban történetesen a fejlettebb tudományos vagy matematikai alkalmazásokhoz használt kódot nézed, akkor időnként találkozhatsz olyan számokkal, amelyek az e vagy a j betűt tartalmazzák. Ez azért van, mert a Python három különböző számtípust támogat, amint azt a következő szakaszokban tárgyaljuk.

#### Integerek

Az egész szám bármely egész szám, pozitív vagy negatív. Méretének nincs határa. Az olyan számok, mint a **0**, **-1** és **999999999999999999999** mind tökéletesen érvényes egész számok. A te szemszögedből nézve egész szám csak minden olyan érvényes szám, amely nem tartalmaz tizedespontot.

#### Floatok

A float számokat, gyakran lebegőpontos számoknak is nevezik, bármely olyan érvényes szám, amely tizedespontot tartalmaz. Ismétlem, nincs méretkorlátozás: **1,1** és **-1,1** és **123456,789012345** mind tökéletesen érvényes lebegőszám.

:::warning
Ha nagyon nagy tudományos számokkal dolgozol, akkor egy e betűt is tehetsz a számba, hogy jelezd a **10**-es hatványát. Például a **234e1000** egy érvényes szám, és akkor is lebegőszámként kezeli, ha nincs benne tizedesvessző. Ha ismered a tudományos jelölést, akkor tudod, hogy a **234e3** az **234 000** (*az e3 helyett három nullát írsz*). Ha nem ismered a tudományos jelölést, ne aggódj emiatt. Ha most nem használod a mindennapi munkád során, akkor jó eséllyel a Pythonban sem lesz rá szükséged.
:::

#### Komplex számok

Szinte bármilyen szám kifejezhető egész számként vagy lebegőpontos számként, így ezek ismerete szinte mindenkinek elegendő. Megjegyzendő azonban, hogy a Python a komplex számokat is támogatja. Ezek mindig j betűvel végződnek, ami a szám képzeletbeli része. Ha fogalmad sincs, miről beszélünk akkor az azért van mert csak a matematikai világban élő embereket érdeklik a komplex számok. Ha eddig még sosem hallottál róluk, akkor jó eséllyel nem fogod használni őket a számítógépes munkáidban vagy a Python programozásban - de ettől függetlenül még előkerülhet...

### Stringek azaz szavak, karakterláncok

A karakterláncok a számok ellentétei. A számokkal összeadhatunk, kivonhatunk, szorozhatunk és oszthatunk, mert a számok mennyiségeket jelölnek. A karakterláncok szinte minden mást jelentenek. Nevek, címek és minden más szöveg, amivel nap mint nap találkozol. Azért hívják stringnek, mert karakterek (*betűk, szóközök, írásjelek és esetleg néhány szám*) sorozatából áll.

Számunkra egy karakterlánc általában valamilyen jelentéssel bír, például egy személy neve vagy címe. A számítógépeknek azonban nincs szemük, amivel látnának, nincs agyuk, amivel gondolkodhatnának, és nincs tudomásuk arról, hogy emberek egyáltalán léteznek, így a számítógép számára, ha egy információ nem olyan, amivel számolni tud, akkor az csak egy karaktersorozat.

A számokkal ellentétben a karakterláncot mindig idézőjelek közé kell zárni. Dupla `"` vagy szimpla `'` idézőjeleket használhat. A következő karakterláncok mindegyike érvényes:

```py
"Ez egy szöveg."
"Hello Világ!"
"06 (20) 123 4567"
"1994-2022"
```

A karakterláncokban nyugodtan használhatsz numerikus karaktereket (**0-9**), valamint kötőjeleket és pontokat. Mindegyik karakterlánc, mivel idézőjelek közé van zárva.


:::danger FONTOS!

Ha egy karakterlánc aposztrófot (szimpla idézőjelet) tartalmaz, akkor az egész karakterláncot dupla idézőjelek közé kell zárni, mint a következőkben:

```py
"Hello! It's me"
```
:::

A dupla idézőjelekre azért van szükség, hogy ne legyen félreérthető, hol kezdődik és hol végződik a karakterlánc. Ha ehelyett szimpla idézőjeleket használnál, például így: 

```py
'Hello! It's me'
```

a számítógép túl buta ahhoz, hogy ezt helyesen értelmezze. Az első szimpla idézőjelet a karakterlánc kezdetének, a következőt a karakterlánc végének tekintené, és akkor nem tudná, hogy mit kezdjen a többi részével, és az alkalmazásod nem futna megfelelően.

Hasonlóképpen, ha a karakterlánc kettős idézőjeleket tartalmaz, akkor az egészet zárja szimpla idézőjelekbe, hogy elkerül a hibát. Például: 

```py
'Hello! It is "me".'
```

Mi van akkor, ha van egy olyan karakterlánc, amely egyszeres és kettős idézőjeleket is tartalmaz, például így: 

```txt
Hello It's "me".
```

Szerencsére a Python alkotói rájöttek, hogy ilyesmi előfordulhat, ezért kitaláltak egy megoldást az úgynevezett `escape` karaktereket foglalja magában, mert bizonyos értelemben lehetővé teszik, hogy egy karakter, például egy szimpla vagy dupla idézőjel speciális jelentését elkerüljük. Egy karaktert csak egy backslash `\` előz meg.

Folytatva az utolsó példát, az egészet egyszerű idézőjelekbe zárhatod, majd az aposztrófot egy backslash-el megelőzve, így:

```py
'Hello! It\'s "me".'
```

vagy az egészet dupla idézőjelekbe zárhatod, és a karakterláncba ágyazott idézőjelekből kikerülhetsz, így:

```py
"Hello! It's \"me\"."
```

Egy másik gyakori használata backslashnek az, hogy a backslash és az n (`\n`) használatával sortörést adunk a képernyőn, ahol a felhasználó éppen azt nézi. Például ez a karakterlánc:

```py
"Hol volt\nhol nem volt\nvolt egyszer..."
```

így nézne ki, amikor megjelenik a felhasználónak:

```txt
Hol volt
hol nem volt
volt egyszer...
```

### Boolean azaz logikai érték

A harmadik adattípus a Pythonban nem éppen egy szám vagy egy karakterlánc. Boole-nak hívják (*a nevét egy George Boole nevű matematikusról kapta*), és két érték közül az egyik lehet: _True_ vagy _False_. Talán furcsának tűnhet, hogy van egy olyan adattípusunk, amely csak _True_ vagy _False_ lehet, de ez azért hatékony, mert az _True_ vagy _False_ értéket egyetlen bit segítségével tárolhatjuk, ami a számítógép legkisebb tárolási egysége.

A Python kódban az emberek az Igaz és Hamis értékeket változókban tárolják, és ehhez hasonló formátumot használnak: 

```py
x = True
```

Vagy éppen így: 

```py
x = False
```

Tudod, hogy a _True_ és a _False_ itt _Boolean_ értékek, mert nincsenek idézőjelek közé zárva (mint egy karakterlánc esetében), és nem számok. A kezdőbetű is szükséges. Más szóval, a True és False Boolean értékeket a képen látható módon kell leírni.

## Python operátorok

Amint azt az előző részben már említettük, a Python és általában a számítógépek esetében hasznos, ha az információra úgy gondolunk, mint a következő adattípusok egyikére: szám, karakterlánc vagy Boolean. A Pythont arra is használhatod, hogy operálj ezekkel az információkkal, vagyis elvégezz minden szükséges matematikai műveletet, összehasonlítást, keresést vagy bármi mást, ami segít megtalálni az információkat, és úgy rendszerezni őket, hogy legyen értelme számodra.

A Python számos különböző operátort kínál az információtípusokkal való munkához és összehasonlításhoz. Itt összefoglaljuk mindegyiket. Az, hogy használsz-e operátort a saját munkád során, attól függ, hogy milyen típusú alkalmazásokat fejlesztesz. Egyelőre elég, ha csak tudod, hogy rendelkezésre állnak.

### Aritmetikai operátorok

Az aritmetikai operátorok, ahogy a név is mutatja, a számtani műveletek elvégzésére szolgálnak: összeadás, kivonás, szorzás, osztás és így tovább. Az itt lévő táblázat a Python aritmetikai operátorait sorolja fel.

| Operátor |      Leírás      |    Példa    |
|:--------:|:----------------:|:-----------:|
|     +    |     Összeadás    |  1 + 1 = 2  |
|     -    |      Kivonás     |  10 - 1 = 9 |
|     *    |      Szorzás     |  3 * 5 = 15 |
|     /    |      Osztás      |  10 / 5 = 2 |
|     %    |      Modulo      |  11 % 5 = 1 |
|    **    |    Hatványozás   |  3 ** 2 = 9 |
|    //    | Lefele kerekítés | 11 // 5 = 2 |

A táblázat első négy eleme ugyanaz, mint amit az általános iskolában tanultál. Az utolsó három egy kicsit haladóbb, ezért itt elmagyarázom őket: 

- A modulo művelet az osztás utáni maradék. Tehát például `11 % 5` az 1, mert ha 11-et elosztod 2-vel, akkor 5 maradék 1. Ez az 1 a modulo.
- A `**`, ez csak annyit jelent, hogy "hatványra emelve". Például a `3**2` 3^2 (vagy 3 négyzete), ami `3*3`, vagyis 9, a `3**4` pedig `3*3*3*3`, vagyis 81.
- A `//`-el jelzett osztás annyit jelent, hogy a tizedespont utáni részek le vannak vágva. Például a normál osztásnál a `9/5` 1,8. A `9//5` azonban 1, mert a .8-at egyszerűen levágjuk - nem kerekítjük 2-re.

### Összehasonlító operátorok

A számítógépek munkájuk során döntéseket hozhatnak. De ezek a döntések nem emberi döntések. Ezek a döntések abszolút tényeken, összehasonlításokon alapulnak. A Python által kínált összehasonlító operátorokat, amelyek segítségével döntéseket hozó kódot írhatunk, a lenti táblázat tartalmazza.

| Operátor |         Jelentése         |
|:--------:|:-------------------------:|
|     <    |        kisebb mint        |
|    <=    |    kisebb vagy egyenlő    |
|     >    |        nagyobb mint       |
|    >=    |    nagyobb vagy egyenlő   |
|    ==    |          egyenlő          |
|    !=    |        nem egyenlő        |
|    is    |     Objektum azonosság    |
|  is not  | Negált objektum azonosság |

Az első néhány magától értetődő, ezért nem megyünk bele a részletekbe. Az utolsó kettő trükkös, mert Python-objektumokról van szó, amelyekről még nem beszéltünk. A Python-objektumokról most beszélni nagy kitérő lenne, úgyhogy ha most egy kicsit is zavarban vagy valamelyik operátorral kapcsolatban, ne aggódj emiatt.

### Boole operátorok

A Boole-operátorok Boole-értékekkel (_Igaz vagy Hamis_) dolgoznak, és arra szolgálnak, hogy megállapítsák, hogy egy vagy több dolog _Igaz vagy Hamis_. A következő táblázat foglalja össze a Boole-operátorokat:

| Operátor | Példa kód |   Mit állapít meg   |
|:--------:|:---------:|:-------------------:|
|    or    |   x or y  | vagy x, vagy y igaz |
|    and   |  x and y  |     x és y igaz     |
|    not   |   not x   |      x nem igaz     |

:::tip PEP 8
A PEP 8, néha PEP8 vagy PEP-8 néven is írják, egy olyan dokumentum, amely a Python kód írására vonatkozó irányelveket és legjobb gyakorlatokat tartalmazza. Ezt 2001-ben írta Guido van Rossum, Barry Warsaw és Nick Coghlan. A PEP 8 elsődleges célja a Python kód olvashatóságának és konzisztenciájának javítása.
:::

A Python Style Guide (PEP 8) azt javasolja, hogy az operátorok körül mindig legyen szóköz. Íme egy kissé egyszerű példa. Tudjuk, hogy még nem ismered a kódolást, ezért most inkább csak figyeld meg a szóközöket az `=` és a `>` (nagyobb, mint) operátorok körül: 

```py
num = 10

if num > 0:    
    print("Positive number")
else:
    print("Negative number")
```

1. Az első sor a `10`-es számot tárolja a `num` nevű változóban. 
2. Ezután az `if` ellenőrzi, hogy `num` nagyobb-e (>) `0`-nál. 
3. Ha igen, a program kiírja a pozitív számot. 
4. Ellenkező esetben negatív számot ír ki. 

Tegyük fel, hogy a program első sorát így változtatjuk meg:

```py
num = -1
```

Ha ezt a változtatást elvégezzük, és újra futtatjuk a programot, akkor negatív számot ír ki, mert a `-1` egy negatív szám.
Ebben a példában a `num` változó nevet használtuk mintaként, hogy láthass néhány operátort szóközzel körülvéve. Természetesen nem mondtuk el, hogy mik azok a változók, de ezt a részét majd most tisztázzuk!

## Változók létrehozása és azok használata

A változók a Python és minden számítógépes programozási nyelv nagy részét képezik. A változó egy tároló olyan információk számára, amelyek megváltozhatnak. Ha például belépünk egy webes email fiókba, akkor láthatjuk a nevünket és azt a dátumot, amikor utoljára beléptünk. Mindkét információ változó, mert attól függően változik, hogy ki van bejelentkezve az adott email fiókba.

### Érvényes változónevek létrehozása

A változók magyarázatában olyan neveket használtunk, mint a `email` és az `date`, és ez egy általános példa esetében rendben is van. A Pythonban saját változóneveket is kitalálhatsz, de ezeknek meg kell felelniük a következő szabályoknak ahhoz, hogy változónévként ismerjék fel őket:

- A változó nevének betűvel vagy aláhúzással (_) kell kezdődnie.
- Az első karakter után betűket, számokat vagy aláhúzásokat használhatsz.
- A változók nevei nagy- és kisbetű-érzékenyek, ezért a név megalkotása után a változóra való hivatkozásoknak ugyanazokat a nagy- és kisbetűket kell használniuk.
- A változók nevei nem lehetnek idézőjelekbe (', ") zárva, illetve nem tartalmazhatnak ilyen karaktereket.
- A PEP 8 stíluskonvenciók azt javasolják, hogy a változónevekben csak kisbetűket használjon, és több szó elválasztására használjon aláhúzást.

A PEP 8, amelyet az előző részben már említettünk, inkább egy stílus útmutató a kód írásához, mint szigorú, kötelezően betartandó szabály. Így gyakran találkozhatunk olyan változónevekkel, amelyek nem felelnek meg az utóbbi stílusnak. A _camel case_ formázás - ahol az első szó kisbetűs, majd az új szavak pedig nagybetűsek - gyakori, még Pythonban is, például a `extendedPrice` vagy az `unitPrice`.
A tapasztaltabbak néha furán néznek, amikor ilyen neveket látnak a kódodban. Ők jobban szeretnék, ha ragaszkodnál a PEP 8 stílusirányelvekhez, amelyek az `extended_price` és `unit_price` használatát javasolják változónevekként, azzal az indokkal, hogy a PEP 8 szintaxis olvashatóbb az emberi programozók számára.

### Változók létrehozása a kódban

Egy változó létrehozásához a következő szintaxist használjuk:

```py
variablename = value # változónév = érték
```

ahol a `variablename` az általad kitalált név. Használhatod az `x` vagy az `y` nevet, ahogyan azt a matematikában gyakran teszik, de nagyobb programokban érdemes a változóknak értelmesebb neveket adni, például `quantity` vagy `unit_price` vagy `sales_tax` vagy `user_name`, hogy emlékezz arra, mit tárolsz a változóban.

Az érték az, amit a változóban tárolni akarsz. Ez lehet szám, karakterlánc vagy Boolean True vagy False érték.

Az `=` jel a hozzárendelési operátor, és azért kapta ezt a nevet, mert az `értéket` (a jobb oldalon) hozzárendeli a `változóhoz` (a bal oldalán). 

Például a következőkben:

```py
x = 10
```

a `10`-es számot tároljuk az `x` nevű változóban, vagyis a `10`-es értéket rendeljük az `x` változóhoz.

És itt: 
```py
user_name = "Alan"
```

az Alan karakterláncot helyezzük el egy `user_name` nevű változóban.


### Változók kezelése

A számítógépes programozás nagy része az értékek változókban való tárolása és az információk operátorokkal történő manipulálása körül forog. Ideje kipróbálni néhány egyszerű példát, hogy elsajátítsuk a dolgok lényegét. Ha még mindig meg van nyitva a VS Code, és megjelenik az az egy megjegyzés akkor kövesd az alábbi lépéseket a VS Code szerkesztőben: 


1. Az `"# Ez egy Python komment az első Python alkalmazásomban."` sor alá írd be ezt a megjegyzést, és nyomd meg az Entert:
    
    ```py
    # Ez a változó egy integert tartalmaz
    ```
2. Írd be a következőket - ne felejts el szóközt tenni az `=` jel elé és után, majd nyomd meg az Enter billentyűt:

    ```py
    mennyiseg = 10
    ```
3. Írd be a következőket majd nyomd meg az Enter billentyűt:
    
    ```py
    # Ez a változó egy floatot tartalmaz
    ```
4. Írd be a következőket majd nyomd meg az Enter billentyűt:
    
    ```py
    egysegar = 1.99
    ```
5. Írd be a következőket majd nyomd meg az Enter billentyűt:
    
    ```py
    # Ez a változó a mennyiség és az egységár szorzatának eredményét tartalmazza
    ```
6. Írd be a következőket - ne felejts el szóközt tenni az `=` jel elé és után, majd nyomd meg az Enter billentyűt:
    
    ```py
    vegosszeg = mennyiseg * egysegar
    ```
7. Írd be a következőket majd nyomd meg az Enter billentyűt:
    
    ```py
    # Lássuk a végeredményt
    ```
8. Végül írd be ezt, és nyomd meg az Entert:
    
    ```py
    print(vegosszeg)
    ```

A Python-alkalmazásod létrehoz néhány változót, tárol bennük néhány értéket, a `mennyiseg` és `egysegar` változók tartalma alapján kiszámít egy új értéket, a `vegosszeg`-et. Az utolsó sorban megjeleníti a képernyőn a `vegosszeg` változó tartalmát. Ne feled, a megjegyzések nem csinálnak semmit a programban, miközben az fut. A megjegyzések csak megjegyzések önmagunknak arról, hogy mi történik a programban.
```py
# Ez egy Python komment az első Python alkalmazásomban.
# Ez a változó egy integert tartalmaz
mennyiseg = 10
# Ez a változó egy floatot tartalmaz
egysegar = 1.99
# Ez a változó a mennyiség és az egységár szorzatának eredményét tartalmazza
vegosszeg = mennyiseg * egysegar
# Lássuk a végeredményt
print(vegosszeg)
```
A fenti kódrész meg mutatja, hogyan kellene most kinéznie a dolgoknak. Ha hibát vétettél, hullámos vonalakat láthatsz a hibák közelében, például egy extra szóköz vagy egy kihagyott Enter a sor végén. A kód beírásakor pontosnak kell lennie. Nem gépelhetsz be olyasmit, ami valahogy úgy néz ki, mint amit be kellett volna írnod. Amikor embereknek írsz szöveget, hibát elkövethetsz, mert az üzenet kontextusa alapján általában ki tudja találni, hogy mire gondoltál - jó esetben. A számítógépeknek azonban nincs szemük, agyuk vagy kontextusfogalmuk, így nem fog megfelelően működni a kódod ha hibás.

Más szóval, ha a kód rossz, akkor nem fog működni, amikor futtatod. Ez ilyen egyszerű - nincsenek kivételek.


### A kódunk elmentése

A kód beírása ugyanolyan, mint más dokumentumok gépelése a számítógépen. Ha nem mented el a munkádat, lehet, hogy nem lesz meg, amikor legközelebb leülsz. Ha tehát nem engedélyezted az automatikus mentést a File menüben, amint azt korábban tárgyaltuk, válaszd a File ⇒ Save parancsot.

### A Python alkalmazás futtatása VS Code-ban

Most már futtathatod a programot, és megnézheted, hogy működik-e. Ennek egyszerű módja, ha az Explorer sávban jobb egérgombbal kattintasz a `hello.py` fájlnévre, és a `Run Python File in Terminal` parancsot választod.

Ha a kódot helyesen írtad be, akkor a **Terminal** ablakban **19.9**-es eredményt kell látniod. Az eredmény a kódban szereplő `print(vegosszeg)` kimenete, és ez 19,9, mert a mennyiség (10) szorozva az egységárral (1,99).

Tegyük fel, hogy az alkalmazásodnak ki kell számolnia 14 darab, egyenként 26,99 dollárba kerülő termék összköltségét. Ki tudod találni, hogyan lehetne ezt megvalósítani? Biztosan nem kellene egy teljesen új alkalmazást írnod. Ehelyett a kódban, amellyel most dolgozol, változtasd meg a `mennyiseg` változó értékét 10-ről 14-re. Változtassa meg az `egysegar` változó értékét 26,99-re. 

Így néz ki a kód ezekkel a változtatásokkal:

```py
# Ez egy Python komment az első Python alkalmazásomban.
# Ez a változó egy integert tartalmaz
mennyiseg = 14
# Ez a változó egy floatot tartalmaz
egysegar = 26.99
# Ez a változó a mennyiség és az egységár szorzatának eredményét tartalmazza
vegosszeg = mennyiseg * egysegar
# Lássuk a végeredményt
print(vegosszeg)
```

Mentsd el a munkádat majd ezután futtasd az alkalmazást a jobb egérgombbal kattintva, és válaszd ismét a `Run Python File in Terminal` opciót - ugyanúgy, mint az előbb. Az eredmény 377.859999999999999996 ezt látnod kell a Terminal ablakban a VS Code ablak aljának közelében. Nem kerekít fillérekre, és nem is úgy néz ki, mint egy dollárösszeg. Ez egyenlőre nem nagy valami de meg kell tanulnod járni, mielőtt megtanulsz futni, úgyhogy egyelőre elégedj meg azzal, hogy az alkalmazások futnak.

## A szintaxis megértése és miért fontos

Ha a szótárban utánanézel a szintaxisnak, az egyik definíció, amit találhatsz, a következő: **"szavak és kifejezések elrendezése, hogy jól formált mondatokat hozzanak létre egy nyelvben"**. Az olyan programozási nyelvekben, mint a Python, nem létezik jól formált mondatok. De a Pythonban vannak szavak abban az értelemben, hogy minden szó között szóközre van szükséged, ahogyan az ilyen normál szöveg beírásakor is, és fontos a szavak sorrendje.

A szintaktika azért fontos az emberi nyelvekben, mert a sorrend nagyban hozzájárul a jelentéshez. Hasonlítsuk össze például ezt a három rövid mondatot: 

1. Marika megcsókolta Józsit.
2. Józsi megcsókolta Marikát.
3. Megcsókolta Marika Józsi.

Mindhárom mondat ugyanazokat a szavakat tartalmazza, de a jelentésük különböző. Az első kettőből egyértelműen kiderül, hogy ki kit csókolt meg, az utolsót pedig kicsit nehéz értelmezni.

A helyes szintaxis a programozási nyelvekben ugyanolyan fontos, mint az emberi nyelvekben - bizonyos szempontból még fontosabb is, mert ha hibát követsz el valakinek beszélve vagy írva, az a másik személy általában ki tudja találni, hogy mire gondoltál a szavaid kontextusából. A számítógépek azonban közel sem ilyen okosak. A számítógépeknek nincs agyuk, nem tudják kitalálni a tényleges jelentésedet a szövegkörnyezet alapján, és valójában a szövegkörnyezet fogalma nem is létezik a számítógépek számára. Tehát a szintaxis még inkább számít a programozási nyelvekben, mint az emberi nyelvekben.

Ha visszanézzük a fejezet legkorábbi kódját, figyeljük meg, hogy a tényleges kód minden sora (nem a megjegyzések, amelyek #-val kezdődnek) ezt a szintaxist követi:

```py
variablename = value
```

ahol a változónév egy általad kitalált név, az érték pedig valami, amit a változóban tárolsz. Ez működik, mert ez a megfelelő szintaxis. Ha így próbálod csinálni, nem fog működni: 

```py
value = variablename
```
Például a következő a helyes módja annak, hogy a 10-es értéket egy x nevű változóban tároljuk:

```py
x = 10
```

Úgy tűnik, hogy a következő módon is megtehetnéd, de ez nem fog működni Pythonban: 

```py
10 = x
```

Ha ezzel a sorral futtatod az alkalmazást, egy olyan hibaüzenetet fogsz kapni, mint a következő: 

```py
File "…/AIO Python/hello.py", line 10
10=x
^
SyntaxError: cannot assign to literal
```

A **SyntaxError** rész azt mondja, hogy a Python nem tudja, mit csináljon a kódsorral, mert nem követte a megfelelő szintaxist. A hiba kijavításához csak írja át a sort a következőre:

```py 
x = 10
```
Most beszéljünk az egyes kódsorokról. A Pythonban egy kódsor egy sortöréssel vagy pontosvesszővel végződik. Ez például három sor Python kód: 

```py
first_name = "Alan"
last_name = "Simpson"
print(first_name, last_name)
```

Az is elfogadható lenne, ha a sortörés helyett pontosvesszőt használnánk: 

```py
first_name = "Alan"; last_name = "Simpson"
print(first_name, last_name)
```

Vagy, ha jobban tetszik: 

```py
first_name = "Alan"; last_name = "Simpson"; print(first_name, last_name)
```


A kód ugyanúgy fut, akár szünettel, akár pontosvesszővel fejezzük be a sorokat.
Figyeljük meg, hogy a változók nevei mind kisbetűsek, és a szavakat aláhúzással választjuk el: 

```py
first_name
last_name
```

A Pythonban a kisbetűk használata a változóneveknél, a szavakat pedig aláhúzással elválasztva, egy elnevezési konvenció. Vegyük azonban figyelembe, hogy a konvenció nem azonos a szintaktikai szabállyal. A változókat a következőképpen is elnevezhetnéd anélkül, hogy bármilyen szintaxisszabályt megszegnél:

```py
FirstName
LastName
```

Az elnevezési konvenció arra próbálja rávenni a programozókat, hogy kövessék az alapvető irányelveket, amelyek a kódot más programozók számára olvashatóbbá teszik, ami különösen fontos, ha programozói csapatokban vagy csoportokban dolgozunk.
Eddig a kódsorokat nézted meg. Vannak olyan kódblokkok is, amelyekben két vagy több kódsor együtt dolgozik. Íme egy példa:

```py
x = 10

if x == 0:
    print("x is zero")
else:
    print("x is ",x)
print("All done")
```

Az első sor, `x = 10`, csak egy kódsor.

Ezután az `if x == 0` azt vizsgálja, hogy az `x` változó az egyenlő-e `0` számmal.

Ha az `x` valóban `0`-val egyenlő, akkor a behúzott sor (`print("x is zero")`) végrehajtódik, és ezt látjuk a képernyőn. Ha azonban `x` nem egyenlő 0-val, akkor a behúzott sor kimarad, és az `else:` utasítás végrehajtódik.

Az `else: print("x is ",x)` alatti behúzott sor végrehajtódik, de csak akkor, ha az `x` nem egyenlő 0-val. Az utolsó sor, a `print("All done")`, mindenképpen végrehajtódik, mert nincs behúzva.

Tehát, mint láthatod, a behúzások sokat számítanak a Pythonban. Az előző kódban csak az egyik behúzott sor fog végrehajtódni az `x` értékétől függően. A behúzások használatának sajátosságait a kódban az anyag előrehaladtával ismerheted meg. **Egyelőre csak arra próbálj meg emlékezni, hogy a Pythonban a szintaxis és a behúzások fontosak, ezért a kód írásakor óvatosan kell gépelned.** Az imént elvégzett gyakorlatok elmagyarázzák, hogyan kell írni, menteni, futtatni és módosítani egy programkódot/programot, majd újra menteni és újra futtatni. 