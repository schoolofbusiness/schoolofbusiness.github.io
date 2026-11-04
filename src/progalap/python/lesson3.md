# 3. tananyag

:::tip 📚 EBBEN A FEJEZETBEN
- Egész számokkal való munka
- Tizedesjegyekkel rendelkező számokkal való munka
- A karakterláncok egyszerűsítése
- A Boolean True és False értékek elsajátítása
- Dátumokkal és időpontokkal való munka
:::

A számítógép és természetesen a Python is, olyan módon kezelik az információt, amely eltér attól, amihez a mindennapi életben hozzászoktunk. Ez a gondolat némi megszokást igényel. A számítógépek világában a számok olyan számok, amelyeket összeadhatsz, kivonhatsz, szorozhatsz és oszthatsz. Megkülönbözteti az egész számokat és a tizedespontot tartalmazó számokat is. A szavak karakterláncokként tárolódnak, ami a "karakterlánc" rövidítése.
A számok és a karakterláncok mellett léteznek bool értékek is, amelyek vagy igazak, vagy hamisak lehetnek.
A való életben dátumok és időpontok is előfordulnak, amelyek egy újabb információtípust jelentenek. A Pythonban nincs beépített adattípus a dátumok és időpontok számára, de szerencsére egy bármikor importálható ingyenes modult fogunk tudni használni erre a célra. Ez a fejezet a Python különböző adattípusainak teljes körű kihasználásáról szól.

## Számok számítása függvények segítségével

A Pythonban a függvények hasonlóak a számológép függvényeihez, mivel valamit átadunk a függvénynek, a függvény pedig valamit visszaad. Például a legtöbb számológépnek és programozási nyelvnek van négyzetgyök függvénye. Megadsz egy számot, visszaadja a szám négyzetgyökét.

A Python függvények általában a következő szintaxissal rendelkeznek: 

```py
variablename = functioname(param[,param])
```

Mivel a legtöbb függvény valamilyen értéket ad vissza, általában egy változó definiálásával kezdjük, amely azt tárolja, amit a függvény visszaad. Ezt követi az = jel és a függvény neve, majd egy pár zárójel. A zárójeleken belül egy vagy több értéket (az úgynevezett paramétereket) adhatunk át a függvénynek.

Például az `abs()` függvény egy számot fogad el, és a szám abszolút értékét adja vissza. Ha nem emlékeznél matek óráról rá akkor, ez csak annyit jelent, hogy ha egy negatív számot adsz át, akkor ugyanazt a számot pozitív számként adja vissza. Ha pozitív számot adsz át neki, akkor ugyanazt a számot adja vissza, mint amit átadtál neki. Más szóval az `abs()` függvény egyszerűen negatív számokat alakít át pozitív számokká.


```py
x = -4
y = abs(x)
print(x)
print(y)
```

Példaként a fenti kódrészben létrehoztam egy `x` nevű változót, és hozzárendeltem a `-4` értéket. Ezután létrehoztam egy `y` nevű változót, és hozzárendeltem az `abs()` függvény segítségével az `x` abszolút értékét. Az `x` kiírása mutatja az értékét, `-4`-et, ami nem változott. Az `y` kiírása `4`-et mutat, az `abs()` függvény által visszaadott `x` abszolút értékét.

```py
x = 1.23456
y = round(x,2)
print(x)
print(y)
```

Bár egy függvény mindig egy értéket ad vissza, néhány függvény két vagy több értéket is elfogad. A `round()` függvény például egy számot fogad el első paraméterként. A második paraméter a tizedesjegyek száma, amelyekre kerekíteni szeretnéd azt a számot. A fenti kódrészben látható példában létrehoztunk egy `x` nevű változót, amelynek a tizedesvessző után rengeteg számjegye van. Ezután létrehoztunk egy `y` nevű változót, amely ugyanazt a számot adja vissza két tizedesjegyre kerekítve. Mindkét eredményt kiírtuk.

A Python számos beépített függvényt tartalmaz a számokkal való munkához, ahogy azt a táblázat mutatja. Lehet, hogy néhány nem sokat mond most még neked, főleg ha nem vagy nagy matematikus, de ne hagyd, hogy ez megfélemlítsen. Ha nem érted, mit csinál egy függvény, akkor jó eséllyel nem csinál olyasmit, ami az általad végzett munka szempontjából lényeges. De ha kíváncsi vagy, bármikor rákereshetsz az interneten vagy ki is próbálhatod.

| Beépített fügvény |                                                                       Feladata                                                                      |
|:-----------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------:|
|       abs(x)      |                                   Az x szám abszolút értékét adja vissza (a negatív számokat pozitívvá alakítja).                                   |
|       bin(x)      |                                       Visszaad egy stringet, amely x értékét ábrázolja binárisra konvertálva.                                       |
|      float(x)     |                                            Egy x karakterláncot vagy számot float adattípussá konvertál.                                            |
|    format(x, y)   | Visszaadja az x-et az y-ban megadott minta szerint formázva. Ezt a régebbi szintaxist a Python jelenlegi verzióiban f-stringekkel helyettesítették. |
|       hex(x)      |                                Visszaad egy x-et tartalmazó, hexadecimálisra konvertált karakterláncot, 0x előtaggal.                               |
|       int(x)      |               Az x-et egész szám adattípussá konvertálja a decimális rész és az azt követő számjegyek levágásával (nem kerekítésével).              |
| max(x, y, z, ...) |                                Tetszőleges számú numerikus paramétert vár, és azt adja vissza, amelyik a legnagyobb.                                |
| min(x, y, z, ...) |                                 Tetszőleges számú numerikus paramétert vár, és azt adja vissza, amelyik a legkisebb.                                |
|       oct(x)      |                                     Átalakítja x-et nyolcjegyű számmá, a 0o előtaggal jelezve a nyolcjegyűséget.                                    |
|    round(x, y)    |                                                        Az x számot y tizedesjegyre kerekíti.                                                        |
|       str(x)      |                                                     Az x számot string adattípusúvá konvertálja.                                                    |
|      type(x)      |                                                    Az x adattípusát adja vissza karakterláncként.                                                   |


A függvények egymásba ágyazhatók - vagyis függvényeket helyezhetünk függvényekbe. 

```py
pi = 3.14159265
x = 128
y = -345.67890
z = -999.9999

print(abs(z))
print(int(z))
print(int(abs(z)))
print(round(pi,4))
print(bin(x))
print(bin(x))
print(hex(x))
print(oct(x))
print(max(pi,x,y,z))
print(min(pi,x,y,z))
print(type(pi))
print(type(x))
print(type(str(y)))
```

Például, ha `z = -999,9999`, a `print(int(abs(z))` kifejezés kiírja `z` abszolút értékének egész szám részét, ami `999`. Az eredeti számot pozitívra konvertálja, majd a tizedespontot és mindent, ami tőle jobbra van, levágja.

### Még több matematikai függvény

Az eddig megismert beépített függvényeken kívül vannak még olyanok, amelyeket a matematikai modulból importálhatsz. Ha szükséged van rájuk egy alkalmazásban, tedd az `import math`-et a fájlod első sorába, hogy ezek a függvények elérhetővé váljanak a kód többi része számára. Ha a parancssorban akarod használni, akkor először írd be az `import math` parancsot.
A math modul egyik függvénye az `sqrt()` függvény, amely egy szám négyzetgyökét adja ki. Mivel ez a függvény a math modul része, nem használhatod anélkül, hogy nem importálnád a modult. Ha például a következőt írja be, hibaüzenetet kap, mivel az `sqrt()` nem beépített függvény:

```terminal
>>> sqrt()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'sqrt' is not defined
```

Még akkor is hibát kapunk, ha két olyan parancsot hajtunk végre, mint a következő, mert az `sqrt()` függvényt beépített függvényként kezeljük: 

```py
import math
print(sqrt(81))
```
Ha egy modulból származó függvényt akarsz használni, akkor importálnod kell a modult, és a függvény neve elé a modul nevét és egy pontot kell tenned. 

Tegyük fel, hogy van egy értékünk `x`, és a négyzetgyökét szeretnénk. A helyes válaszhoz a `math` modult kell importálnunk, és a `math.sqrt(x)` függvényt kell használnunk. 

```py
import math
z = 81
print(math.sqrt(z))
```

Ha beírjuk ezt a parancsot, akkor 9.0 lesz az eredmény, ami valóban a 81 négyzetgyöke.

A `math` modul rengeteg trigonometrikus és hiperbolikus függvényt, hatványokat és logaritmusokat, szögátváltásokat tartalmaz, továbbá konstansokat mint a `pi` és az `e`. Nem fogunk mindegyikbe belemenni, mert a haladó matematika a legtöbb ember számára nem releváns. Az összeset bármikor megtekintheted, ha rákeresel az interneten a Python 3 `math` modul függvényekre.

### Tizedesjegyekkel rendelkező számokkal való munka

Az évek során a Python különböző módszereket kínál a számok formázására. Például a legtöbb ember szívesebben látja a dollárösszegeket `$1234.56`. A számok formázásának legegyszerűbb módja Pythonban a 3.6-os verziótól kezdve az f-stringek használata.

#### F-stringek használata

A formázott karakterláncok, vagy f-stringek a legegyszerűbb módja az adatok formázásának Pythonban. Mindössze egy kis f vagy nagy F betűre van szükséged, amelyet közvetlenül követ néhány idézőjelekbe zárt szöveg vagy kifejezés. 

Íme egy példa: 

```txt
f"Hello {username}"
```

Az első idézőjel előtti `f` azt üzeni a Pythonnak, hogy ami ezután következik, az egy formázott karakterlánc. Az idézőjeleken belül a szöveg, az úgynevezett literális rész szó szerint jelenik meg - pontosan úgy, ahogyan az `f` karakterláncban be van írva. Minden, ami a kapcsos zárójelek között van, az az `f-string` kifejezés része. A kapcsos zárójeleken belül lehet egy kifejezés - valamilyen számítás elvégzésére szolgáló képlet, egy változó neve vagy a kettő kombinációja.

Íme egy példa: 

```py
username = "Alan"
print(f"Hello {username}")
```

Amikor ezt a kódot futtatjuk, a `print` függvény a `Hello` szót, majd egy szóközt és a `username` változó tartalmát jeleníti meg.

```txt
Hello Alan
```

Íme egy másik példa egy f-stringre, ahol a következő képlet hajtódik végre, `mennyiség * egységár`ral a kapcsos zárójelek között:

```py
unit_price = 49.99
quantity = 30
print(f"Subtotal: ${quantity * unit_price}")
```

Az ebből származó kimenet, a következő:

```txt
Subtotal: $1499.7
```

Ez a `$1499,7` nem ideális módja a dollárösszegek megjelenítésének. Általában vesszőt használunk az ezreseknél, és két számjegyet a centeknél, mint az alábbiakban: 
```txt
Subtotal: $1,499.70
```
Szerencsére az `f-string`ek biztosítják az eszközt ehhez a formázáshoz, amit a következőkben megismerhetünk.


#### Dollárösszegek megjelenítése

Ahhoz, hogy a dollárösszegben vessző jelenjen meg, a centek pedig két számjegyként, egy f-stringben lévő kifejezésben egy formázó karakterláncot kell használnunk a kapcsos zárójelek között. A formázó karakterlánc kettősponttal kezdődik, és a záró kapcsos zárójelen belül kell elhelyezni, közvetlenül a változó nevével vagy a megjelenített értékkel szemben.

Ha ezeresek helyén szeretnél vesszőt megjeleníteni, akkor a formázó karakterláncban közvetlenül a kettőspont után vesszőt kell használni: 

```txt
:,
```

Valahogy így kellene kinéznie a fenti példa alapján:

```py
print(f"Subtotal: ${quantity * unit_price:,}")
```

Ennek az utasításnak a kimenete a következő: 

```txt
Subtotal: $1,499.7
```

Ahhoz, hogy a centeket két számjegyként jelenítse meg, a vesszőt a `.2f` kövesse.

A `.2f` azt jelenti, hogy két tizedesjegynél több vagy kevesebb nem lehet. A következő kód az eredményt vesszővel és két tizedesjegy pontossággal jeleníti meg: 

```py
print(f"Subtotal: ${quantity * unit_price:,.2f}")
```

Végül az utasításnak a kimenete a következő:

```txt
Subtotal: $1,499.70
```

Tökéletes! Pontosan ezt a formátumot szeretnénk.

## A karakterláncok kezelése

A Pythonban és más programozási nyelvekben a szavakra és a szövegdarabokra karakterláncokként hivatkozunk.
Ebben a részben a karakterláncokkal való munkához szükséges Python-kódolási ismereteket tanulod meg.

### Stringek összekapcsolása

A karakterláncokat `+` jellel lehet összekapcsolni. Az így végzett folyamatot a stringek konkatenációnak nevezik. Amikor karakterláncokat kapcsolsz össze, a számítógép nem tesz automatikusan szóközöket oda, ahová elvárnád. A következő kódban például három karakterlánc összekapcsolását láthatod. 

```py
first_name = "Alan"
middle_init = "C"
last_name = "Simpson"
full_name = first_name + middle_init + last_name
print(full_name)
```

Ha ezt a kódot futtatod a `full_name` változó tartalmának kiírásakor, láthatod, hogy a Python egyetlen hosszú karakterlánccá egyesítette őket:

```txt
AlanCSimpson
```

Ezzel a kimenettel önmagában nincs semmi baj, kivéve, hogy általában szóközöket teszünk a szavak és a személynév részei közé.
Mivel a Python nem tesz automatikusan szóközöket oda, ahová szerinted kellene, neked kell beírnod őket. A legegyszerűbb mód szóköz megjelenítésre, ha idézőjeleket használunk, amelyek között egy szóköz van, például így: 

```txt
" "
```

Ha elfelejted a szóközt az idézőjelek közé tenni, mint a következőkben, akkor nem lesz szóköz a karakterláncodban, mert nincs szóköz az idézőjelek között: 

```txt
""
```

Az idézőjelek közé több szóközt is tehetsz, ha több szóközt szeretnél a kimenetben, de általában egy szóköz is elegendő. A középső névhez érdemes egy pontot tennünk megjelenítés szempontjából.

```py
first_name = "Alan"
middle_init = "C"
last_name = "Simpson"
full_name = first_name + " " + middle_init + ". " + last_name
print(full_name)
```

Ennek a kódnak a kimenete már jobban hasonlít a megszokott nevekhez: 

```txt
Alan C. Simpson
```

### String hosszának megadása

Annak meghatározásához, hogy hány karakter van egy karakterláncban, a beépített `len()` függvényt - a hossz rövidítése - használhatod. A hossz tartalmazza a szóközöket is, mivel a szóközök is karakterek. Egy üres karakterlánc - vagyis egy olyan karakterlánc, amelyben nincs semmi, még szóköz sem - hossza nulla.

Íme néhány példa:

- Az első sorban definiálsz egy `s1` nevű változót, és egy üres karakterláncot írsz bele - egy pár idézőjelet, amelyek között nincs semmi. 
- Az `s2` változó egy szóközt kap (egy idézőjelpár, a kettő között szóközzel). 
- Az `s3` változó egy karakterláncot kap néhány betűvel és szóközzel. 

Ezután három `print()` függvény jeleníti meg az egyes karakterláncok hosszát: 
```py
s1 = ""
s2 = " "
s3 = "A B C"
print(len(s1))
print(len(s2))
print(len(s3))
```
A következő a kód kimenete, amikor végrehajtjuk. A kimenet tökéletesen érthető, ha megértjük, hogy a `len()` a karakterláncok hosszát a karakterláncban lévő karakterek számaként méri - beleértve a szóközöket is: 

```txt
0
1
5
```

### Munka karakterlánc operátorokkal

A Python számos operátort kínál az adatsorozatokkal való munkához. A Pythonban a karakterláncok egyik furcsa tulajdonsága, hogy a karakterek számolásakor az első karakter 0-nak számít, nem pedig 1-nek. A számítógép így számolják a karaktereket, mert ez a leghatékonyabb módszer. Lenti példában a karakterlánc öt karakter hosszú, a karakterlánc utolsó karaktere a 4-es szám, mert az első karakter a 0.

```txt
A B C D E
0 1 2 3 4
```

#### Python string operátorok, amelyek karakterláncokkal dolgoznak

|       Operátor       |                                                                      Feladata                                                                      |
|:--------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------:|
|        x in s        |                                                Igazat ad vissza, ha x szerepel az s karakterláncban.                                               |
|      x not in s      |                                              Igazat ad vissza, ha x nem szerepel az s karakterláncban.                                             |
|    s * n or n * s    |                                                       Megismétli az s karakterláncot n-szer.                                                       |
|         s[i]         |                                             Az s karakterlánc i-edik eleme, amelynek első karaktere 0.                                             |
|        s[i:j]        |                           Egy rész az x karakterláncból az i pozícióban lévő karaktertől a j pozícióban lévő karakterig.                           |
|       s[i:j:k]       |                                                       Az s egy része i-től j-ig, k lépéssel.                                                       |
|        min(s)        |                                                       Az s karakterlánc legkisebb karaktere.                                                       |
|        max(s)        |                                                       Az s karakterlánc legnagyobb karaktere.                                                      |
| s.index(x[, i[, j]]) | Az x első előfordulásának numerikus pozíciója az s karakterláncban. Az opcionális i és j a keresést az i-től j-ig terjedő karakterekre korlátozza. |
|      s.count(x)      |                                            Az x karakterlánc előfordulásának száma az s karakterláncban.                                           |


A következő kódrész példákat mutat a karakterlánc-operátorok használatára. Amikor a `print()` függvény kimenete nem tűnik megfelelőnek, tartsunk észben két fontos tényt a Pythonban használt karakterláncokról: 

- Az első karakter mindig a 0-ás szám.
- Minden szóköz egy karakternek számít, ezért ne hagyj ki szóközöket számoláskor.


```py
s = "Abracadabra Hocus Pocus you're a turtle dove"
# Is there a Lowercase letter t is contained in s?
print("t" in s)
# Is there an uppercase letter t is contained in s?
print("T" in s)
# Is there no uppercase T in s?
print("T" not in s)
# Print 15 hyphens in a row
print("-" * 15)
# Print first character in string X
print(s[0])
# Print characters 33 - 39 from string x
print(s[33:39])
# print every third character in s starting at zero 
print(s[0:44:3])
# Print Lowest character is s (a space is lower than the letter a) 
print(min(s))
# Print the highest character is s
print(max(s))
# Where is the first uppercase P?
print(s.index("P"))
# Where is the first lowercase 0 in the Latter half of string s
# Note that the returned value still starts counting from zero
print(s.index("o",22,44))
# How many Lowercase Letters a are in string s?
print(s.count("a"))
```

Kimenete:

```txt
True
False
True
---------------
A
turtle
AadrHuPuy' tt v
 
y
18
25
5
```

#### ASCII

Talán észrevetted, hogy a `min(s)` egy üres szóközt ad vissza, ami azt jelenti, hogy az üres szóköz karakter a legalacsonyabb karakter a karakterláncban. De pontosan mitől lesz a szóköz "alacsonyabb", mint az `A` vagy az `a` betű? Az egyszerű válasz a betű ASCII-száma. Minden karakterhez, amelyet a billentyűzeten beírsz, és sok további karakterhez is tartozik egy szám, amelyet az `American Standard Code for Information Interchange (ASCII)` rendel hozzá.

![](/assets/images/python/3/ascii.png)

A következő ábra egy táblázatot mutat, amely számos gyakori karakter ASCII-számát tartalmazza. A szóközök és az írásjelek *"alacsonyabbak"*, mint az A, mivel kisebb ASCII-számokkal rendelkeznek. A nagybetűk *"kisebbek"*, mint a kisbetűk, mert kisebb ASCII-számokkal rendelkeznek. Kíváncsi vagy, mi történt a 0-31 számokhoz rendelt karakterekkel? Ezeknek a számoknak is vannak karakterei, de ezek vezérlő karakterek, és lényegében nem nyomtathatóak és láthatatlanok, például amikor lenyomva tartod a Ctrl billentyűt, és megnyomsz egy másik billentyűt.

:::tip 🧐
A Python két funkciót kínál az ASCII-vel való munkához. Az `ord()` függvény bemenetként egy karaktert fogad el, és visszaadja a karakter ASCII-számát. Például a `print(ord("A"))` 65-öt ad vissza, mert a nagybetűs A a 65-ös karakter az ASCII táblázatban. A `chr()` függvény ennek az ellenkezőjét teszi. Megadsz neki egy számot, és a szám ASCII karakterét adja vissza. Például a `print(chr(65))` A-t jeleníti meg, mert az A az ASCII-táblázatban a 65. karakter.
:::

### Stringek manipulálása metódusokkal

A Python 3-ban minden karakterlánc string objektumnak tekinthető. A Python számos string metódust kínál, amelyek segítenek a string objektumokkal való munkában. A string objektum metódusok általános szintaxisa a következő: 

```py
s.methodname(params)
```
ahol az `s` a karakterlánc, a `methodname` egy metódus neve a táblázatból, a params pedig a metódusnak átadandó paraméterekre utal (ha szükséges). A táblázat első oszlopában a kezdő s azt jelenti, hogy "bármilyen karakterlánc", legyen az idézőjelek közé zárt szó szerinti karakterlánc vagy egy karakterláncot tartalmazó változó neve.

|       Metódus      |                                                                                                                              Feladata                                                                                                                             |
|:------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|   s.capitalize()   |                                                                                    Egy olyan karakterláncot ad vissza, amelyben az első betű nagybetűs, a többi pedig kisbetűs.                                                                                   |
| s.count(x, [y, z]) |                                         Visszaadja, hogy hányszor fordul elő x karakterlánc az s karakterláncban. Opcionálisan hozzáadhatja y-t kezdőpontként és z-t végpontként, hogy a karakterlánc egy részét keresse.                                         |
|  s.find(x, [y, z]) | Visszaad egy számot, amely az első olyan pozíciót jelzi, ahol x karakterlánc megtalálható az s karakterláncban. Az opcionális y és z paraméterek lehetővé teszik a keresés szűkítését a karakterlánc egy részére. -1 értékel tér vissza, ha nem találtunk semmit. |
| s.index(x, [y, z]) |                                                                      Hasonló a kereséshez, de "nem talált részlánc" hibát ad vissza, ha az x karakterlánc nem található az y karakterláncban.                                                                     |
|     s.isalpha()    |                                                                                   Igazat ad vissza, ha s legalább egy karakter hosszú és csak betűket (A-Z vagy a-z) tartalmaz.                                                                                   |
|    s.isdecimal()   |                                                                                Igazat ad vissza, ha s legalább egy karakter hosszú és csak numerikus karaktereket (0-9) tartalmaz.                                                                                |
|     s.islower()    |                                                                                             Igazat ad vissza, ha s betűket tartalmaz, és ezek a betűk mind kisbetűsek.                                                                                            |
|    s.isnumeric()   |                                                                                Igazat ad vissza, ha s legalább egy karakter hosszú és csak numerikus karaktereket (0-9) tartalmaz.                                                                                |
|   s.isprintable()  |                                                                                          Igazat ad vissza, ha az s karakterlánc csak nyomtatható karaktereket tartalmaz.                                                                                          |
|     s.istitle()    |                                                                      Igazat ad vissza, ha az s karakterlánc betűket tartalmaz, és minden szó első betűje nagybetű, amelyet kisbetűk követnek.                                                                     |
|     s.isupper()    |                                                                                                 Igaz értéket ad vissza, ha a karakterlánc összes betűje nagybetűs.                                                                                                |
|     s.islower()    |                                                                                                 Igaz értéket ad vissza, ha a karakterlánc összes betűje kisbetűs.                                                                                                 |
|     s.lstrip()     |                                                                                                        Visszaadja az s-t a kezdő szóközök eltávolításával.                                                                                                        |
|     s.rstrip()     |                                                                                                 Visszaadja az x karakterláncot az utolsó szóközök eltávolításával.                                                                                                |
|      s.strip()     |                                                                                           Visszaadja az x karakterláncot a kezdő és az utolsó szóközök eltávolításával.                                                                                           |
|      s.title()     |                                                                          Visszaadja az s karakterláncot úgy, hogy minden szó első betűje nagybetűs, az összes többi betű pedig kisbetűs.                                                                          |
|      s.upper()     |                                                                                           Visszaadja az s karakterláncot úgy, hogy az összes betűt nagybetűvé alakítja.                                                                                           |
|      s.lower()     |                                                                                                  Visszaadja az s-t úgy, hogy az összes betűt kisbetűvé alakítja.                                                                                                  |
|   s.replace(x, y)  |                                                                                 Visszaadja az s karakterlánc másolatát úgy, hogy az összes x karaktert y karakterrel helyettesíti.                                                                                |
| s.rfind(x, [y, z]) |                               Hasonló az s.find-hez, de a karakterlánc elejétől visszafelé keres. Ha y és z van megadva, akkor a z pozíciótól az y pozícióig keres visszafelé. -1-et ad vissza, ha az x karakterláncot nem találja.                               |
|     s.rindex()     |                                                                                             Ugyanaz, mint az s.rfind, de hibát ad vissza, ha a részláncot nem találja.                                                                                            |
|    s.swapcase()    |                                                                            Visszaadja az s karakterláncot úgy, hogy a nagybetűket kisbetűvé, a kisbetűket pedig nagybetűvé alakítja át.                                                                           |

A következő kódrészben néhány példát látsz, ahol `s1`, `s2` és `s3` nevű változót használunk stringként a kísérletezéshez. 

```py
s1 = "There is no such word as schmeedledorp" 
s2="   a b c   "
s3="ABC"
# Captialize first letter, the rest Lowercase 
print(s3.capitalize())
# Count the number of spaces in sl 
print(s1.count(" "))
# Find the dot in 54 
print(s1.find("."))
# Is 52 all Lowercase letters? 
print(s2.islower())
# Convert 53 to aLL Lowercase
print(s3.lower())
# String Leading characters from s2 
print(s2.lstrip())
# String Leading and trailing characters from s2 
print(s2.strip())
# Swap the case of Letters in sl 
print(s1.swapcase())
# Show sl in titLe case (initial caps) 
print(s1.title())
# Show sl uppercase 
print(s1.upper())
```
Kimenete:

```txt
Abc
6
-1
True
abc
a b c   
a b c
tHERE IS NO SUCH WORD AS SCHMEEDLEDORP
There Is No Such Word As Schmeedledorp
THERE IS NO SUCH WORD AS SCHMEEDLEDORP
```

:::tip ❗
Ne fáradj azzal, hogy megpróbálsz minden egyes metódust megjegyezni. Ehelyett ne feledd, hogy ha egy karakterlánccal kell operálnod, akkor a Python 3 string metódusokra való internetes kereséssel megtudhatod, hogy mi áll rendelkezésedre. 😉
:::


## Dátumok és időpontok felfedezése

A számítógépek világában gyakran használunk dátumokat és időpontokat annak kiszámításához, hogy mikorra esedékes valami, vagy hány napja esedékes. Néha időbélyegeket használunk arra, hogy pontosan rögzítsük, hogy egy felhasználó mikor csinált valamit, vagy mikor történt egy esemény. Rengeteg oka van a dátumok és időpontok használatának a Pythonban, de talán meglepő, hogy nincs beépített adattípusuk, mint a karakterláncok és számok esetében.

A dátumokkal és időpontokkal való munkához általában a `datetime` modult kell használni. Mint minden modult, ezt is importálnod kell, mielőtt használnád. Ezt az `import datetime` használatával teheted meg. Mint minden importálásnál, itt is hozzáadhatsz egy aliast (becenevet), amit könnyebb beírni, ha szeretnéd. Például az `import datetime as dt`. Csak nem szabad elfelejtened, hogy `datetime` helyett `dt`-t írj be a kódodba, amikor az adott modult hívod meg.

A `datetime` modul új adattípusokat kínál a nyelvnek. A dátumok és időpontok esetében ezek az adattípusok a következők: 

- `datetime.date`: Egy dátum, amely hónapból, napból és évből áll (de nincs időinformáció).
- `datetime.time`: Óra, perc, másodperc, mikroszekundum és szükség esetén időzóna információból álló idő (de dátum nélkül).
- `datetime.datetime`: Egyetlen adatelem, amely dátumból, időpontból és opcionálisan időzóna információból áll.

:::warning ❗
Az előző listában minden típus előtt a teljes `datetime` szót használtuk, de ha egy aliast használsz, például `dt` -t, akkor azt használhatod helyette a kódban. Az egyes adattípusokról külön-külön beszélünk a következő részben.
:::

### Dátumokkal való munka

A `datetime.date` adattípus ideális a dátumokkal való munkához, amikor az idő nem számít. Kétféleképpen hozhatsz létre dátumobjektumot. Például a `datetime` modul importálása után a `date.today()` segítségével lekérdezheted az aktuális dátumot a számítógép belső órájából. Vagy a `date(year, month, day)` szintaxissal létrehozhatsz egy dátumobjektumot valamilyen más dátumhoz. A következő kód mindkét módszert bemutatja: 

```py
# Import the datetime module, nickname dt
import datetime as dt
# Store today's date in a variable named today.
today = dt.date.today()
# Store some other date in a variable called last_of_teens
last_of_teens = dt.date(2019, 12, 31)”

print(today)
print(last_of_teens)
```

A `.month`, `.day` vagy `.year` használatával a dátumobjektum bármely része elkülöníthető. 
Például próbáld ki ezt a kódot: 

```py
print(last_of_teens.month)
print(last_of_teens.day)
print(last_of_teens.year)
```

A dátum mindhárom összetevője külön sorban jelenik meg: 

```txt
12
31
2019
```
Ahogy az első kiíratásnál láthatod, a dátum alapértelmezett megjelenítése `yyyy-mm-dd`, de a dátumokat és időpontokat tetszés szerint formázhatod. Használd az `f-string`eket, amelyeket már korábban tárgyaltunk. A táblázat tartalmazza a dátumok és az időpontok formátumát is, amit később tovább tárgyalunk.

| Direktíva |                         Leírás                        |           Példa          |
|:---------:|:-----------------------------------------------------:|:------------------------:|
|     %a    |                 A hét napja, rövidítve                |            Sun           |
|     %A    |                  A hét napja, teljes                  |          Sunday          |
|     %w    | Hétköznapok száma 0-6, ahol a 0 a vasárnapot jelenti. |             0            |
|     %d    |              A hónap napjának száma 01-31             |            31            |
|     %b    |                 Hónap neve, rövidítve                 |            Jan           |
|     %B    |                   Hónap neve, teljes                  |          Januar          |
|     %m    |                   Hónap száma 01-12                   |            01            |
|     %y    |                  Évszázad nélküli év                  |            19            |
|     %Y    |                Évszázaddal ellátott év                |           2019           |
|     %H    |                       Óra 00-23                       |            23            |
|     %I    |                       00-12 óra                       |            11            |
|     %p    |                         AM/PM                         |            PM            |
|     %M    |                       Perc 00-59                      |            01            |
|     %S    |                    Másodperc 00-59                    |            01            |
|     %f    |             Mikroszekundum 000000-99999999            |          495846          |
|     %z    |                      UTC eltolás                      |           -0500          |
|     %Z    |                        Időzóna                        |            EST           |
|     %j    |                 Az év napszáma 001-366                |            300           |
|     %U    | Az év hetének száma, vasárnap a hét első napja, 00-53 |            50            |
|     %W    |   Hét száma az évben, hétfő a hét első napja, 00-53   |            50            |
|     %c    |           A dátum és az idő helyi változata           | Tue Dec 31 23:59:59 2019 |
|     %x    |                A dátum helyi változata                |         12/31/18         |
|     %X    |                 Az idő helyi változata                |         23:59:59         |
|     %%    |                     Egy % karakter                    |             %            |

Néhány oktatóanyag azt mondja, hogy a dátumokat és időpontokat `strftime` használatával kell formázni, nem pedig f-stringekkel, és ez minden bizonnyal egy érvényes módszer. Itt azonban ragaszkodok az újabb f-stringekhez, mert úgy gondolom, hogy a jövőben ezeket fogják előnyben részesíteni a `strftime`-mal szemben.
A formázott karakterláncok használatakor ügyeljünk arra, hogy szóközöket, kötőjeleket és bármi mást tegyél a direktívák közé, ahol azt szeretnéd, hogy azok megjelenjenek a kimeneten.

Például:
```py
print(f"{last_of_teens:%A, %B %d, %Y}")
```

ha lefutattod akkor, ezt fogja megjeleníteni: 

```txt
Tuesday, December 31, 2019
```

Ha a dátumot `mm/dd/yyyy` formátumban szeretnéd megjeleníteni, használd a `%m/%d/%Y` formátumot:

```py
todays_date = f"{today:%m/%d/%Y}
```

és így fog akkor megjelenni:

```txt
11/19/2018
```

### Az időpontokkal való munka

Ha szigorúan időadatokkal akarsz dolgozni, használd a `datetime.time` osztályt. Az időobjektum `time` osztály használatával történő definiálásának alapvető szintaxisa a következő:

```py
variable = datetime.time([hour,[minute,[second,[microsecond]]]])
```

Vegyük észre, hogy minden argumentum opcionális.

```py
midnight = dt.time()
print(midnight)
```

Ez a kód `00:00:00:00`-ként tárolja az időt, ami éjfél. Annak ellenőrzésére, hogy ez valóban egy idő, a `print(type(midnight))` beírása a következőt jeleníti meg: 

```txt
00:00:00
<class 'datetime.time'>
```

A második sorból megtudhatjuk, hogy a 00:00:00 érték egy időobjektum a `datetime` osztályból.

Néha csak dátumokkal, néha pedig csak időpontokkal akarsz dolgozni. Gyakran előfordul, hogy egy adott időpontot a dátum és az idő segítségével is meg akarsz határozni. Ehhez használd a `datetime` modul `datetime` osztályát. Ez az osztály támogat egy `now()` metódust, amely a számítógép órájából az aktuális dátumot és időt tudja lekérdezni a következőképpen: 

```py
import datetime as dt
right_now = dt.datetime.now()
print(right_now)
```

A datetime érték formátuma a következő lesz:

```txt
2019-11-19 14:03:07.525975
```

Ez azt jelenti, hogy 2019. november 19., 14:03 (7,525975 másodperccel kiegészítve).
A következő paraméterek bármelyikével is meghatározhatod a dátumidőt. A hónap, a nap és az év megadása kötelező. A többi opcionális, és ha kihagyod őket, akkor 0-ra állítják be az időt.

```py
datetime(year, month, day, hour, [minute, [second, [microsecond]]])
```

Íme egy példa a 2019. december 31. 23:59 óra: 

```py
import datetime as dt
new_years_eve = dt.datetime(2019, 12, 31, 23, 59)
print(new_years_eve)
```

A `print()` utasítás kimenete formázás nélkül: 

```txt
2019-12-31 23:59:00
```

### Az időtartamok kiszámítása

Néha a dátum vagy az idő ismerete nem elég. Ismernie kell az időtartamot. Más szóval, nem a dátumot, nem az órát, hanem azt, hogy "meddig", évek, hónapok, hetek, napok, órák, percek vagy bármi más tekintetében. Az időtartamokhoz a Python datetime modulja tartalmazza a `datetime.timedelta` osztályt.

Egy `timedelta` objektum automatikusan létrejön, amikor két dátumot, időpontot vagy dátumidőt kivonunk, hogy meghatározzuk a köztük lévő időtartamot. Tegyük fel például, hogy létrehozunk néhány változót a dátumok tárolására, talán egyet az újév napjára, egyet pedig az emléknapra. Ezután létrehoz egy harmadik, `days_between` nevű változót, és ebbe a változóba a korábbi dátum és a későbbi dátum kivonásával kapott különbséget teszi a következőképpen:


```py
import datetime as dt
new_years_day = dt.date(2019, 1, 1)
memorial_day = dt.date(2019, 5, 27)
days_between = memorial_day - new_years_day
```

Szóval mi is pontosan a `days_between` adattípus szempontjából? Ha kiírjuk az értékét, akkor 146 napot kapunk, 0:00:00. Más szóval, 146 nap van a két dátum között; a 0:00:00 az idő, de mivel egyik dátumban sem adtunk meg, az idő számjegyei mind csak 0-ra vannak állítva. Ha a Python `type()` függvényt használod a `days_between` adattípusának meghatározására, akkor azt látod, hogy ez egy `timedelta` objektum a `datetime` osztályból:

```txt
146 days, 0:00:00
<class 'datetime.timedelta'>
```

Hogy megértsd, hogyan működik ez, próbáld ki a következő kódot. A `datetime` modul importálása után hozzon létre egy dátumot a `.date()` segítségével. Ezután hozzon létre egy `timedelta` objektumot a `.timedelta` segítségével. Ha egy dátumot és egy timedeltát adunk össze, akkor egy új dátumot kapunk - ebben az esetben egy olyan dátumot, amely 146 nappal 2019. január 1. után van:

```py
import datetime as dt
new_years_day = dt.date(2019, 1, 1)
duration = dt.timedelta(days=146)
print(new_years_day + duration)
```

Kimenete:

```txt
2019-05-27
```

Ha egy napnál rövidebb időtartamot keresel, csak add meg mindkét időpontnak ugyanazt a dátumot. Vegyük például a következő kódot és a kivonás eredményét:

```py
import datetime as dt
start_time = dt.datetime(2019, 3, 31, 8, 0, 0)
finish_time = dt.datetime(2019, 3, 31, 14, 34, 45)
time_between = finish_time - start_timeprint(time_between)
print(type(time_between))
```

Kimenete:

```txt
6:34:45
<class 'datetime.timedelta'>
```

Két okból tudjuk, hogy a `6:34:45` - 6 óra 34 perc és 45 másodperc időtartamot jelent. Az egyik, hogy az egyik időpillanat kivonásának eredménye egy másikból. A másik pedig, az adattípus `type()` kiírása azt mutatja, hogy ez egy `timedelta` objektum (egy időtartam), nem pedig egy óraidő.


Íme egy másik példa, amely különböző dátumú dátumokat használ: Az egyik az aktuális dátum, a másik pedig egy születési dátum, perc pontossággal (1995. március 31. 8:26). Az életkor kiszámításához vonjuk ki a születési dátumot az aktuális időből, most:

```py
import datetime as dt
now = dt.datetime.now()
birthdatetime = dt.datetime(1995, 3, 31, 8, 26)
age = now - birthdatetime
print(age)
print(type(age))
```

Kimenete:

```txt
8634 days, 7:55:07.739804
<class 'datetime.timedelta'>
```

Végezetül nézzünk egy komplexebb számítást dátumokkal és időkkel:

```py
import datetime as dt
# Today's date according to your computer 
today = dt.date.today()

# Any birthdate expressed as year, month, day 
birthdate = dt.date(2000, 1, 31)

# Duration between the dates as a timedeLta 
delta_age = (today - birthdate)

# Duration between the dates as a number (of days) 
days_old = delta_age.days

# FLoor divide days by 365 to get the number of years 
years = days_old // 365

# Days Left over is remainder of days_old divided by 365.
# FLoor divide that remainder by 30 for approximate months. months = (days_old % 365) // 30
months = (days_old % 365) // 30

# Print in a format to your Liking
print(f"You are {years} years and {months} months old.")
```

Kimenete:

```txt
You are 22 years and 7 months old.
```


