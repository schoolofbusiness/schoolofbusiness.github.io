# 11. tananyag

:::tip 📚 EBBEN A FEJEZETBEN
- Munka szöveges és bináris fájlokkal
- Fájlok megnyitása, tartalmának olvasása és bezárása
- Fájlok körbejárása ciklussal
- Bináris fájlok olvasása és másolása
:::

Nagyjából minden, amit a számítógépén tárolunk, legyen az dokumentum, program, film, fénykép és így tovább, egy fájlban van tárolva. A legtöbb fájl mappákba (más néven könyvtárakba) van rendezve. A mappák és fájlok között a Finder (_Macen_) vagy a File Explorer (_Linux_) vagy a Windows Explorer (_Windowsban_) segítségével böngészhetünk.
A Python számos eszközt kínál a különböző típusú fájlok létrehozásához, olvasásához és írásához. Ebben a fejezetben a Python kód fájlokkal való munkához szükséges legfontosabb készségeket tanuljuk meg.

## A szöveges és bináris fájlok

Alapvetően kétféle fájltípus létezik: 

- __Szöveges fájl:__ Egyszerű szöveges karaktereket tartalmaz. Ha egy szöveges fájlt megnyitunk egy szövegszerkesztőben, akkor az ember által olvasható tartalmat jelenít meg. A szöveg nem biztos, hogy olyan nyelven van, amelyet ismerünk vagy értünk, de többnyire olyan normál karaktereket látunk, amelyeket bármelyik billentyűzeten beírhatunk.

- __Bináris fájl:__ Bájtokban tárolja az információkat, amelyek nem annyira ember által olvashatóak. Ha megnyitjuk a bináris fájlt egy szövegszerkesztő programban, akkor a lenti ábrához hasonlót láthatunk.

![Bináris fájl](/assets/images/python/11/1.jpg)

Ha megnyitunk egy bináris fájlt egy szövegszerkesztőben, és ezt a zagyvaságot látjuk, ne essen pánikba. Csak zárjuk be a fájlt vagy a programot, és válasszunk a Nemet, ha a mentésre kéri. A fájl rendben lesz, amíg nem szerekesztünk és mentünk rá.

A lenti ábra különböző szöveges és bináris fájlok példáit sorolja fel, amelyek közül néhánnyal talán már dolgoztál már korábban. Más fájltípusok is léteznek, ezek a legelterjedtebbek közé tartoznak.

![Fájltípusok](/assets/images/python/11/2.png)

Mint minden Python-kód megírásához is használhatunk VS Code-ot vagy szinte bármilyen kódszerkesztőt. Ebben a fejezetben egyszerűen azért használjuk a VS Code-t, mert annak Explorer sávja (bal oldalon, amikor nyitva van) megjeleníti annak a mappának a tartalmát, amelyben éppen dolgozol.

## Fájlok megnyitása és lezárása

Egy fájl Python alkalmazásból történő megnyitásához használjuk a következő szintaxist:

```py
open(filename.ext[,mode])
```

A `filename.ext` helyére írjuk be a megnyitni kívánt fájl nevét. Ha a fájl nem ugyanabban a könyvtárban van, mint a Python-kód, akkor meg kell adnia a fájl elérési útvonalát perjelekkel (__/__).

Ha például a __foo.txt__ fájlt az asztalról szeretnénk megnyitni, és a felhasználói fiók neve Alan, akkor a `C:/Users/Alan/Desktop/foo.txt` elérési utat kell használnunk, nem pedig a Windowsban megszokott, fordított törtvonalas (más néven __Backslash__ vagy __visszaper__) szintaxist (`C:\Users\Alan\Desktop\foo.txt`).


A __,mode__ opcionális (_ezt a szögletes zárójelek jelzik_).

:::tip Használhatjuk annak megadására, hogy milyen típusú hozzáférést szeretnénk hozzárendelni az alkalmazásunknak, a következő egykarakteres rövidítésekkel:

__r:__ (_Read_): Megnyitja a fájlt, de nem engedi a Python számára, hogy változtatásokat végezzen. Ez az alapértelmezett mód, és akkor használatos, ha nem adjuk meg. Ha a fájl nem létezik, a Python __FileNotFoundError__ kivételt dob.

__r+:__ (_Read/Write_): Megnyitja a fájlt, és lehetővé teszi a Python számára a fájl olvasását és írását.

__a:__ (_Append_): Megnyitja a fájlt, és lehetővé teszi a Python számára, hogy új tartalmat adjon hozzá a fájl végéhez, de a meglévő tartalmat nem változtatja meg. Ha a fájl nem létezik, ez a mód _létrehozza_ a fájlt.

__w:__ (_Write_): Megnyitja a fájlt, és lehetővé teszi a Python számára, hogy változtatásokat végezzen a fájlban. Létrehozza a fájlt, ha az nem létezik.

__x:__ (_Create_): Létrehozza a fájlt, ha az még nem létezik. Ha a fájl már létezik, __FileExistsError__ kivételt dob.
:::

Megadhatjuk a megnyitandó vagy létrehozandó fájl típusát is. Ha már megadtuk az előző módok valamelyikét, csak adjuk hozzá ezt a specifikációt egy újabb betűként. 

:::tip Ha csak az alábbi betűk egyikét használjuk önmagában, a fájl olvasási módban nyílik meg:

__t:__ (_Szöveg_): Szöveges fájlként nyitja meg a fájlt, és lehetővé teszi a Python számára a szöveg olvasását és írását. 

__b:__ (_Bináris_): Megnyitja a fájlt bináris fájlként, és lehetővé teszi a Python számára, hogy olvasson és írjon bájtokat.
:::

Az `open` metódust alapvetően kétféleképpen használhatjuk. Az egyik szintaxissal hozzárendelsz egy változó nevet a fájlhoz, és ezt a változó nevet használod a kódban a fájlra való hivatkozáshoz:

```py
var = open(filename.ext[,mode])
```

A `var`-t helyettesítsük egy tetszőleges névvel (_bár a Pythonban gyakori, hogy a csak az __f__ betűt használjuk a változóneveként_).

Miután megnyitottuk a fájlt, többféleképpen is hozzáférhetünk a tartalmához, ahogyan azt a fejezet későbbi részében tárgyaljuk. Egyelőre egyszerűen átmásolunk mindent, ami a fájlban van, egy __filecontents__ nevű változóba, majd ezt a tartalmat egy egyszerű `print()` függvény segítségével megjelenítjük.

Tehát az `quotes.txt` fájl megnyitásához, és a teljes tartalmának beolvasásához továbbá a képernyőn való megjelenítéséhez használjuk ezt a kódot:

```py
f = open('quotes.txt')
filecontents = f.read()
print(filecontents)
```

Ezzel a módszerrel a fájl mindaddig nyitva marad, amíg be nem zárjuk azt a fájlváltozó nevének és a `.close()` metódusnak a használatával, például így:

```py
f.close()
```

Győződjünk meg róla, hogy alkalmazásunk bezárják azokat a fájlokat, amelyekre már nincs szükségünk. Ennek elmulasztása a nyitott fájlkezelők felhalmozódásához, ami végül az alkalmazás kivételek dobásához és összeomlásához vezethet, és talán még a nyitott fájlok egy részét is megrongálhatja eközben.

A fájl megnyitásának második módja a kontextuskezelő. A kontextuskezelő kódolása a `with` szóval kezdődik. Hozzárendel egy változó nevet, de ezt a sor vége felé teszi. Az ezt követő összes behúzott kódról feltételezzük, hogy a megnyitott fájl kontextusához tartozik (mint például a cikluson belül behúzott kód). A kontextuskezelő kódolásának végén nem kell lezárni a fájlt, mert a Python ezt automatikusan megteszi.

```py
# ---------------- Contextual syntax 
with open('quotes.txt') as f:
    filecontents = f.read() 
    print(filecontents)

# The unindented line below is outside the with... block; 
print('File is closed: ', f.closed)
```

A következő kód egy alkalmazást mutat be, amely megnyitja a `quotes.txt` fájlt, beolvassa és megjeleníti a tartalmát, majd bezárja a fájlt. Az első módszerrel a `.close()`-ot kell használnunk a fájl bezárásához. A második módszerrel a fájl automatikusan bezáródik, így nincs szükség a `.close()` parancsra:

```py
# - Basic syntax to open, read, and display file contents. 
f = open('quotes.txt')
filecontents = f.read()
print(filecontents)
# Returns True if the file is closed, otherwise False.
print('File is closed: ', f.closed)
# Closes the file.
f.close() # Close the file. 
print() # Print a blank line.

# ---------------- Contextual syntax 
with open('quotes.txt') as f:
    filecontents = f.read() 
    print(filecontents)
# The unindented line below is outside the with... block
print('File is closed: ', f.closed)
```

Az alkalmazás kimenete a következő:

```txt
I've had a perfectly wonderful evening, but this wasn't it.
Groucho Marx
The difference between stupidity and genius is that genius has its limits. 
Albert Einstein
We are all here on earth to help others; what on earth the others are here 
for,
I have no idea. W. H. Auden
Ending a sentence with a preposition is something up with which I will not 
put. Winston Churchill

File is closed:  False

I've had a perfectly wonderful evening, but this wasn't it.
Groucho Marx
The difference between stupidity and genius is that genius has its limits. 
Albert Einstein
We are all here on earth to help others; what on earth the others are here 
for,
I have no idea. W. H. Auden
Ending a sentence with a preposition is something up with which I will not 
put. Winston Churchill

File is closed:  True
```

_Nem tudom garantálni, hogy ezeket a híres idézeteket valóban a bemutatott személyek mondták._ Az első kimenet végén a `.closed` értéke `False`, mert a `close()` fájl bezárása előtt teszteltük. A második kimenet végén a `.closed` értéke `True` a `.close()` végrehajtása nélkül, mert a `with:` sor alatt behúzott kód elhagyása automatikusan bezárja a fájlt.

A fejezet hátralévő részében maradunk a kontextuskezelő szintaxisnál, mert általában ez az előnyben részesített és ajánlott szintaxis, amit el kell sajátítani.


Az előző példa jól működik, mivel a `quotes.txt` egy egyszerű szövegfájl, amely csak __ASCII__ karaktereket tartalmaz - _olyan betűket, számokat és írásjeleket, amelyeket az angol nyelv szabványos billentyűzetéről be lehet írni_. Most nézzük meg a következő kódot, amely egy __.jpg__ fájlt próbál megnyitni, ami egy grafikus kép, nem pedig szöveges fájl:

```py
with open('happy_pickle.jpg') as f:
    filecontents = f.read()
    print(filecontents)
```

A kód futtatásának kísérlete a következő hibát eredményezi:

```txt
UnicodeDecodeError: 'charmap' codec can't decode byte 0x90 in position 40: character maps to <undefined>
```

Ez az üzenet nem a leghasznosabb. Tegyük fel, hogy megpróbáljuk megnyitni a `names.txt` fájlt, amely (feltételezhetően) egy olyan szöveges fájl, mint az `quotes.txt`, ezzel a kóddal:

```py
with open('names.txt') as f:
    filecontents = f.read()
    print(filecontents)
```

Ezután futtatjuk ezt a kódot, és ismét egy furcsa hibaüzenetet kapunk, a következőt:

```txt
UnicodeDecodeError: 'charmap' codec can't decode byte 0x81 in position 45: character maps to <undefined>
```

__Mi a fene folyik itt?__

Az első problémát az okozza, hogy a fájl típusa `.jpg`, azaz grafikus kép, ami azt jelenti, hogy a fájl bináris fájl, nem pedig szöveges. A `.jpg` fájl megnyitásához szükséges mód a `b`. Vagy használd az `rb`-t, ami azt jelenti, hogy __read binary__, például így:

```py
with open('happy_pickle.jpg', 'rb') as f:
    filecontents = f.read()
    print(filecontents)
```

A kód futtatása nem generál hibát. De amit megjelenít, az egyáltalán nem hasonlít a tényleges képre:

```txt
b'\xff\xd8\xff\xe0\x00\x10JFIF\x00\x01\x01\x00\x00H\x00H\x00\x00\xff\xe1\x00X
Exif\x00\x00MM\x00*\x00\x00\x00\x08\x00\x02\x01\x12\x00\x03\x00\x00\x00\x01\x00
\x01\x00\x00\x87i\x00\x04\x00\x00\x00\x01\x00\x00\x00&\x00\x00\x00\x00\x00\x03
\xa0\x01\x00\x03\x00\x00\x00\x01\x00\x01\x00\x00\xa0\x02\x00\x04\x00\x00\x00\x01
\x00\x00\x02\xbc\xa0\x03\x00\x04\x00\x00\x00\x01\x00\x00\x03\xa5\x00\x00\x00\x00
\xff\xed\x008Photoshop 3.0
...
```

Ha megnyitjuk a `happy_pickle.jpg` fájlt egy __grafikus alkalmazásban__ vagy a __VS Code__-ban, nem úgy néz ki, mint ez a halandzsa. Ehelyett úgy néz ki, mint az lenti ábrán.

![happy_pickle.jpg](/assets/images/python/11/3.jpg)

_Így kellene kinéznie a happy_pickle.jpg képnek._

![names.txt](/assets/images/python/11/4.png)

_A names.txt fájl szöveg, de nem sok angol karakterrel._

Akkor miért néz ki a fájl ilyen kuszán a Pythonban? A `print()` függvény megjeleníti a nyers bájtokat, amelyek a fájlt alkotják. A nyers bájtok megjelenítése nem gond vagy probléma, csak jelenleg nem jó módja a .jpg fájlok kezelésére.

A `names.txt` fájllal más a probléma. Ez a fájl egy szöveges fájl _(.txt)_, akárcsak az `quotes.txt`. De ha megnyitjuk, és megnézzük a tartalmát, mint ahogy azt a lenti ábrán láthatjuk, sok olyan szokatlan karaktert tartalmaz, amelyeket általában nem látunk az ASCII-ban (_a billentyűzeten lévő számok, betűk és írásjelek_).

![Python *.txt fájl beolvasása](/assets/images/python/11/5.png)

_A names.txt megjelenítve_.

Egy fájl megnyitásakor három dologra kell figyelnünk:
- Egy sima szövegfájl (ASCII) esetében az `r` módot használhatjuk.
- Bináris fájl esetén a `b`-t kell megadni a módban.
- Egy különleges karaktereket tartalmazó szöveges fájlt az `open()` utasításban az `utf-8` kódolásra kell állítani.

:::tip MI AZ UTF-8?

Az __UTF-8 a Unicode Transformation Format__, 8 bites rövidítése, és a betűk és számok számítógépes ábrázolásának szabványosított módja. Az eredeti ASCII karakterkészlet, amely főként kis- és nagybetűket, számokat és írásjeleket tartalmaz, a számítástechnika kezdeti időszakában jól működött. Amikor azonban más nyelvek is bekerültek a rendszerbe, ezek a karakterek már nem voltak elegendőek. Az évek során számos szabványt javasoltak és fogadtak el más nyelvek kezelésére. Ezek közül az __UTF-8__ használata folyamatosan nőtt, míg a legtöbb másé csökkent. Ma az __UTF-8__ nagyjából minden internetes dologban a szabvány, ezért jó választás, ha egy projekthez karakterkészletet kell választani.

Ha elakadsz egy olyan fájl megnyitásakor, amelynek __UTF-8__ kódolásúnak kellene lennie, de nem működik együtt, keress rá a weben a _convert file to utf-8 encoding_ kifejezésre. Ezután keressen egy weboldalt vagy alkalmazást, amely az operációs rendszerrel együttműködve elvégzi az átalakítást.
:::

## Fájlok tartalmának olvasása

Ebben a fejezetben már korábban láthattad, hogyan használhatod a `.read()` parancsot egy megnyitott fájl tartalmának beolvasására. De nem ez az egyetlen módja egy fájl beolvasásának. 

:::warning Három lehetőséged van:

`read([size])`: A teljes fájl beolvasása, ha a zárójeleket üresen hagyjuk. Ha a zárójelben megadunk egy méretet, akkor annyi karaktert (szöveges fájl esetén) vagy bájtot (bináris fájl esetén) olvas be.

`readline()`: Egy sor tartalmát olvassa be egy szöveges fájlból - a sor ott ér véget, ahol egy újsor karakter van.
(Az újsor karakter, `\n`, befejezi a megjelenített sort, és a kurzort a következő sorba mozgatja).

`readlines()`: Egy szövegfájl összes sorát beolvassa egy listába.
:::

Az emberek nem írnak bináris fájlokat, így a bináris fájlban lévő újsor karakterek véletlenszerűek. Ezért a `readline()` és a `readlines()` csak szöveges fájlok esetén hasznos.

Mind a `read()`, mind a `readline()` metódus egyszerre olvassa be a teljes fájlt. Az egyetlen különbség az, hogy a `read` egyetlen nagy adatdarabként olvassa be a fájlt, míg a `readlines()` soronként olvassa be a fájlt, és minden sort egy lista elemeként tárol. Például a következő kód megnyitja a `quotes.txt` fájlt, beolvassa a teljes tartalmát, majd megjeleníti azt.

```py
with open('quotes.txt') as f: 
    # Read in entire file
    content = f.read()
    print(content)
```

A `content` változó a szöveges fájlból származó összes adat másolatát tárolja. A változót kiírjuk, hogy megjelenítsük a tartalmát. A fájl minden sorának végén lévő újsor karakter a kiíráskkor új sort indít a képernyőn.

Itt van ugyanez a kód readlines() használatával read helyett:

```py
with open('quotes.txt') as f:
    content = f.readlines()
    print(content)
```

A kód kimenete a következő:

```txt
["I've had a perfectly wonderful evening, but this wasn't it.\n", 'Groucho Marx\n', 'The difference between stupidity and genius is that genius has its limits. \n', 'Albert Einstein\n', 'We are all here on earth to help others; what on earth the others are here \n', 'for,\n', 'I have no idea. W. H. Auden\n', 'Ending a sentence with a preposition is something up with which I will not \n', 'put. Winston Churchill\n']
```

A kimenetet körülvevő szögletes zárójelek jelzik, hogy ez egy lista. A lista minden egyes elemét idézőjelek veszik körül és vesszőkkel választják el. Az egyes elemek végén lévő `\n` az újsor karakter, amely a fájl sorát zárja.


A `readlines()` (többes szám) funkcióval ellentétben a `readline()` csak egy sort olvas be a fájlból. A sor a fájl aktuális pozíciójától a következő újsor karakterig tart. Egy újabb `readline()` végrehajtása a fájl következő sorát olvassa be, és így tovább. Tegyük fel, hogy például ezt a kódot futtatjuk:

```py
with open('quotes.txt') as f:
    content = f.readline()
    print(content)
```

A kimenet a következő:

```txt
I've had a perfectly wonderful evening, but this wasn't it.
```

Ha ezt követően egy újabb `readline()` parancsot hajtunk végre, akkor a következő sort olvassuk be. Mint sejtheted, amikor a `readline()` és `readlines()` függvényekről van szó, valószínűleg ciklusokat akarsz használni, hogy az összes adathoz úgy férj hozzá, hogy nagyobb kontrollt biztosítson számodra.

## Fájlok körbejárársa

A `readlines()` vagy a `readline()` segítségével végighaladhatunk egy fájlon. A `readlines()` metódus mindig az egész fájlt olvassa be. Így ha a fájl nagyon nagy, a számítógépen elfogyhat a memória (RAM), mielőtt a fájl beolvasása befejeződne. 

Ha azonban ismerjük a fájl méretét, és az viszonylag kicsi (_talán néhány száz sornyi vagy annál kevesebb adat_), `readlines()` a leggyorsabb módja az összes adat beolvasásának. Ezek az adatok egy listában lesznek, így a fájl helyett a listán fogunk végighaladni. A bináris fájlokon is végighaladhatunk, de ezekben nincsenek olyan szöveges sorok, mint a szöveges fájlokban.
A bináris fájlokat tehát darabokban olvassa be.

### Ciklus és `readlines()` használata

Amikor a `readlines()` funkcióval olvasunk be egy fájlt, akkor a teljes fájlt egy csapásra beolvashatjuk egy listaként. Tehát nem igazán ciklusszerűenó megyünk végig a fájlon. Inkább a `readlines()` által a memóriában tárolt elemek listáján megyünk végig. Az ehhez szükséges kód így néz ki:

```py
with open('quotes.txt') as f:
    # Reads in all lines first, then loops through. 
    for one_line in f.readlines():
        print(one_line)
```

Ha ezt a kódot futtatjuk, a kimenet dupla sorközzel fog megjelenni, mivel minden egyes listaelem újsorral végződik, és a `print` mindig hozzáadja a saját újsorát a ciklus minden egyes lefutásakor. Ha meg akarjuk tartani az egyszerű sorközöket, akkor a `print` utasításhoz adjuk hozzá at `end=''`-t (_ügyeljünk arra, hogy két szimpla vagy dupla idézőjelet használjunk, szóköz nélkül az = után_). Íme egy példa:

```py
with open('quotes.txt') as f:
    # Reads in all lines first, then loops through. 
    for one_line in f.readlines():
        print(one_line, end='')
```

Ennek a kódnak a kimenete a következő:

```txt
I've had a perfectly wonderful evening, but this wasn't it.
Groucho Marx
The difference between stupidity and genius is that genius has its limits. 
Albert Einstein
We are all here on earth to help others; what on earth the others are here 
for,
I have no idea. W. H. Auden
Ending a sentence with a preposition is something up with which I will not 
put. Winston Churchill
```

Tegyük fel, hogy elégedettek vagyunk ezzel a kimenettel, de szeretnénk azért egy kicsit javítani rajta. Az egyes idézetek alatti nevet néhány szóközzel beljebbhúzva, és a név alá egy üres sort rakva. Hogyan tudnánk ezt megtenni? 

Nos, a Pythonban van egy beépített `enumerate()` függvény, amely egy listával használva a cikluson való áthaladások számát számolja, 0-tól kezdve.

Tehát az előző példában látható `for:` ciklus helyett azt írjuk, hogy `for one_line in enumerate(f.readlines()):`. 

A ciklus minden egyes átfutásakor a `one_line[0]` tartalmazza az adott sor számát, a `one_line[1]` tartalmazza a tartalmát (_a sor szövegét_), és a __modulo__ operátor (`%`) segítségével, amely az osztás utáni maradékot adja vissza, megnézhetjük, hogy a számláló páros szám-e. A __modulo__ operátor a maradékot adja vissza.

Tehát ha egy páros számra kiszámolod a `% 2`-t (_modulo 2_), mindig __0__-t kapsz. Egy páratlan szám mindig nullától különböző maradékot fog visszaadni, ha osztod 2-vel. Tehát a kódot így írhatod meg:

```py
with open('quotes.txt') as f:
    # Reads in all lines first, then loops through. 
    # Count each line starting at zero.
    for one_line in enumerate(f.readlines()):
        # If counter is even number, print with no extra newline 
        if one_line[0] % 2 == 0:
            print(one_line[1], end='')
        # Otherwise print a couple spaces and an extra newline. 
        else:
            print(' ' + one_line[1])
```

A kimenet a következő:

```txt
I've had a perfectly wonderful evening, but this wasn't it.
 Groucho Marx

The difference between stupidity and genius is that genius has its limits. 
 Albert Einstein

We are all here on earth to help others; what on earth the others are here for, I have no idea.
 W. H. Auden

Ending a sentence with a preposition is something up with which I will not put. 
 Winston Churchill
```

### Ciklus és `readline()` használata

Ha nem vagy biztos az olvasandó fájl méretét vagy az alkalmazásodat futtató számítógép RAM-jának mennyiségét illetően, a `readlines()` használata egy teljes fájl beolvasására kockázatos lehet. Ha nincs elég memória a teljes fájl tárolására, az alkalmazás összeomlik, amikor elfogy a memória. Ha biztosra akarunk menni, akkor a fájlon soronként végighaladunk, így a fájl tartalmának mindig csak egy sora van a memóriában.
Ehhez a módszerhez nyissuk meg a fájlt, olvassunk be egy sort, és tegyük egy változóba. Ezután végighaladunk a fájlon, addig amíg a változó nem üres. Mivel a fájl minden egyes sora tartalmaz valamilyen szöveget, a változó nem lesz üres, amíg az utolsó sor beolvasása meg nem történik. Íme a kód a ilyen megközelítéséhez:

```py
with open('quotes.txt') as f: 
    one_line = f.readline() 
    while one_line:
        print(one_line, end='') 
        one_line = f.readline()
```

Nagyobb fájlok esetén ez a módszer a legjobb megoldás, mivel nem olvassa be a teljes fájlt. Az egyetlen lehetséges probléma az, ha elfelejtjük a `.readline()` funkciót a cikluson belül, hogy a következő sorra lépjünk. Ellenkező esetben végtelen ciklusba kerülünk, amely újra és újra kiírja az első sort. Ha valaha is ilyen helyzetben találjuk magunkat, akkor nyomjuk le a `Ctrl+C` billentyűkombinációt a terminálablakban, ahol a kód fut, a ciklus leállításához.

Ugyanezt a formátumot a `.readline()` használatával elérhetjük a Pythonban. A kódunkban indítsunk egy számlálót 1-el. Hozzunk létre egy ciklust, amely egyszerre egy sort olvas be a szövegfájlból. A cikluson belül növeljük a számláló változóját 1-gyel minden egyes ciklus futáskor. Ezután a páros soroknál tagoljuk be és tegyünk egy plusz szóközt a következőképpen:

```py
# Store a number to use as a loop counter. 
counter = 1
# Open the file.
with open('quotes.txt') as f:
    # Read one line from the file.
    one_line = f.readline()
    # As long as there are lines to read... 
    while one_line:
        # If the counter is an even number, print a couple spaces. 
        if counter % 2 == 0:
            print(' ' + one_line)
        # Otherwise print with no newline at the end. 
        else:
            print(one_line, end='') 
        # Increment the counter 
        counter += 1
        # Read the next line.
        one_line = f.readline()
```

### Hozzáfűzés vs felülírás

Bármikor, amikor fájlokkal dolgozunk, fontos, hogy megértsük a különbséget a __write__ és az __append__ között. Ha egy fájl információt tartalmaz, és __write__ módban nyitjuk meg, majd további információkat írunk bele, akkor az új tartalom felülírja a fájlban már meglévő tartalmakat. Erre nincs visszavonás. Ha tehát a fájl tartalma fontos, akkor biztosra kell mennünk, hogy nem követjük el ezt a hibát. Ha tartalmat szeretnénk hozzáadni egy fájl végéhez, nyissuk meg a fájlt __append__ (`a`) módban, majd a `.write` paranccsal írjunk a fájlba.

Tegyük fel, hogy a _Peña Calderón_ nevet szeretnénk hozzáadni a `names.txt` fájlhoz. Ez a név, valamint a fájlban már szereplő nevek az angol ábécén kívüli speciális karaktereket használnak, ezért a kódolást __UTF-8__-ra kell állítani. Továbbá, ha a fájlban szereplő minden egyes nevet külön sorban szeretnénk megjeleníteni, akkor a hozzáadandó név végére egy `\n` (újsor) kerüljön. A kódodnak így kell kinéznie:

```py
# New name to add with \n to mark end of line. 
new_name = 'Peña Calderón\n'
# Open names.txt in append mode with encoding.
with open('names.txt', 'a', encoding='utf-8') as f:
    f.write(new_name)
```

Hogy ellenőrizzük, hogy működött-e, indítsunk el egy új kódblokkot, behúzások nélkül, így a `names.txt` fájl automatikusan bezáródik. Ezután nyissuk meg a fájlt olvasási (`r`) módban, és tekintsük meg a tartalmát. A lenti ábra mutatja az új név hozzáadására szolgáló kódot, valamint a `names.txt` fájl megjelenítésére szolgáló kódot a név hozzáadása után.


![Új szöveg hozzáfűzése.](/assets/images/python/11/6.png)

_Egy új név a names.txt fájl végéhez csatolva._

### A tell() használata a pointer (mutató) helyének meghatározásához

Amikor egy fájlon végighaladunk, a tartalmát fentről lefelé és balról jobbra olvassuk. A Python egy pointert (_mutatót_) tart fenn, hogy nyomon kövesse, hol tart a fájlban. Amikor egy szöveges fájlt olvasol a `readline()` paranccsal, a pointer (_mutató_) mindig a következő sor karakterpozíciója a fájlban.

Ha eddig csak megnyitottad a fájlt, akkor a karakterpozíció __0__, a fájl eleje lesz. A `readline()` minden egyes végrehajtásakor a pointer (_mutató_) a következő sor elejére lép. Íme néhány kód és annak kimenete a szemléltetés érdekében:


```py
with open('names.txt', encoding='utf-8') as f: 
    # Read first line to get started. 
    print(f.tell())
    one_line = f.readline()
    # Keep reading one line at a time until there are no more. 
    while one_line:
        print(one_line[:-1], f.tell()) 
        one_line = f.readline()
```

```txt
0
Björk Guðmundsdóttir 25 
毛泽东 36
Бopиc Hикoлaeвич Eльцин 82 
Nguyễn Tấn Dũng 104
Peña Calderón 121
```

Az első __0__ a pointer pozíciója közvetlenül a fájl megnyitása után. A következő sor végén lévő __25__ a pointer pozíciója az első sor beolvasása után. A __36__ a következő sor végén a pointer pozíciója a második sor végén, és így tovább, egészen a __121__-ig a végén, amikor a pointer a fájl végén van.

Ha ezt a `readlines()` paranccsal próbálod megtenni, más eredményt kapsz. Íme a kód:

```py
with open('names.txt', encoding='utf-8') as f:
    print(f.tell())
    # Reads in all lines first, then loops through. 
    for one_line in f.readlines():
        print(one_line[:-1], f.tell())
```

Íme a kimenet:

```txt
0
Björk Guðmundsdóttir 121 
毛泽东 121
Бopиc Hикoлaeвич Eльцин 121 
Nguyễn Tấn Dũng 121
Peña Calderón 121
```

A mutató a __0.__ pozícióban kezdődik, ahogyan az várható volt. De minden sor végén __121__-et mutat, mert a `readlines()` a teljes fájlt beolvassa, amikor végrehajtja, és a mutatót a végén, a __121__-es pozícióban hagyja. A ciklus valójában a fájl memóriában lévő másolatán fut végig, már nem olvassa végig a fájlt.

### A mutató mozgatása seek() segítségével

Míg a `tell()` metódus megmondja, hogy hol van a pointer egy külső fájlban, a `seek()` metódus lehetővé teszi a mutató újrapozícionálását. A szintaxis a következő

```py
file.seek(position[,whence])
```

A `file`-t helyettesítsük a megnyitott fájl változó nevével. Helyettesítsük `position`, hogy megadjuk, hova szeretnénk helyezni a pointert. Például a `0` a fájl elejére viszi vissza. A `whence` opcionális, használhatjuk annak megadására, hogy a fájlban hova állítsa be a mutató pozícióját. A következő lehetőségek közül választhatunk:


- 0: A fájl elejéhez viszonyított pozíció beállítása.
- 1: A pozíciót a pointer aktuális pozíciójához képest állítja be.
- 2: A fájl végéhez viszonyított pozíció beállítása. A pozícióhoz negatív számot használjon.

Ha kihagyjuk a `whence` értéket, az alapértelmezett érték 0 lesz.

A _seek_ a leggyakorabban használt a pointer visszaállítására a a fájl újbóli körbejárásához. Ennek szintaxisa egyszerűen `.seek(0)`.

## Bináris fájlok olvasása és másolása

Tegyük fel, hogy van egy alkalmazásunk, amely megváltoztat egy bináris fájlt, és a biztonság kedvéért mindig az eredeti fájl másolatával akarunk dolgozni. A bináris fájlok hatalmasak lehetnek, ezért ahelyett, hogy egyszerre nyitnánk meg az egészet, és kockáztatnánk, hogy kifogyunk a memóriából, darabokban olvashatjuk és darabokban írhatjuk ki. A bináris fájloknak nincs ember által olvasható tartalmuk. Szövegsorok sincsenek bennük. Ezért a `readline()` és a `readlines()` nem jó választás a bináris fájlok átfutására, de használhatod a `.read()` funkciót megadott __mérettel__.

A lenti ábra a `binarycopy.py` fájlt mutatja, amely másolatot készít bármely bináris fájlról. Lépésről lépésre végigvezetjük ezt a kódot, hogy megértsük, hogyan működik.


![`binarycopy.py`](/assets/images/python/11/7.png)

_A `binarycopy.py` fájl bármilyen bináris fájlt másol._

Az első lépés a másolni kívánt fájl megadása. Mi a `happy_pickle.jpg` fájlt választottuk, amely, mint az ábrán látható, ugyanabban a mappában van, mint a `binarycopy.py` fájl:

```py
# Specify the file to copy.
file_to_copy = 'happy_pickle.jpg'
```

Ha üres fájlt szeretne létrehozni, amelybe másolni szeretne, szüksége van egy fájlnévre. A következő kód gondoskodik erről:

```py
# Create new file name with _copy before the extension.
name_parts = file_to_copy.split('.')
new_file = name_parts[0] + '_copy.' + name_parts[1]
```

A másolás utáni első sor a meglévő fájlnevet a pontnál kettéválasztja, így a `name_parts[0]` a `happy_pickle`-t, a `name_parts[1]` pedig a `png`-t tartalmazza. Ezután a `new_file` változó egy olyan értéket kap, amely a név első részéből áll, amelyhez `_copy` és egy pont van csatolva, majd a név utolsó részéből. Így a sor végrehajtása után a `new_file` változó a `happy_pickle_copy.png` nevet tartalmazza.

A másoláshoz nyissa meg az eredeti fájlt `rb` (__read, binary file__) módban. Ezután nyissa meg a fájlt, amelybe az eredeti fájlt másolni szeretné, `wb` (__write, binary__) módban. Az íráskor a Python létrehoz egy ilyen nevű fájlt, ha a fájl még nem létezik. Ha a fájl létezik, a Python 0-ra állított mutatóval nyitja meg, így bármit írunk a fájlba, az a meglévő fájl helyébe lép (_nem pedig hozzáadódik_).

A kódban látható, hogy az `original_file` változó nevet használtuk a másoláshoz, és a `copy_to` változót annak a fájlnak a neveként, amelybe az adatokat másoljuk. A behúzások, mint mindig, kritikusak:

```py
# Open the original file as read-only binary. 
with open(file_to_copy, 'rb') as original_file:
    # Create or open file to copy into.
    with open(new_file, 'wb') as copy_to:
```

Ha a `.read()` parancsot használja a teljes bináris fájl beolvasására, fennáll annak a veszélye, hogy az olyan nagy lesz, hogy túlterheli a számítógép RAM-ját, és a program összeomlik. Ennek elkerülése érdekében ezt a programot úgy írtuk meg, hogy egyszerre 4 KB (4096 bájt) adatot olvasson be. Ezt a 4 KB-os darabot egy chunk nevű változóban tároljuk:


```py
# Grab a chunk of original file (4KB). 
chunk = original_file.read(4096)
```

A következő sor egy olyan ciklus, amely egyszerre csak egy darabot olvas be. A mutató automatikusan a következő darabra pozícionálódik a ciklus minden egyes lefutásakor. Végül eléri a fájl végét, ahol már nem tud tovább olvasni. Amikor ez megtörténik, a `chunk` üres lesz, vagyis a hossza __0__. Tehát ez a ciklus addig megy végig a fájlon, amíg a végére nem ér:

```py
# Loop through until no more chunks. 
while len(chunk) > 0:
```

A cikluson belül az első sor az utoljára beolvasott darabot másolja a `copy_to` fájlba. A második sor beolvassa a következő 4 KB-os darabot az eredeti fájlból. És így megy ez mindaddig, amíg az eredeti_fájlból minden át nem másolódik az új fájlba:

```py
copy_to.write(chunk)
# Make sure you read in the next chunk in this loop.
chunk = original_file.read(4096)
```

Minden behúzás megszűnik e sor után. Amikor a ciklus befejeződik, a fájlok automatikusan bezáródnak, és az utolsó sorban a __Done!__ jelenik meg a következőképpen:

```py
print('Done!')
```

A lenti ábra a kód futtatásának eredményét mutatja. A terminál ablaktáblán egyszerűen a Done! jelenik meg. De mint látható, a mappában most már van egy `happy_pickle_copy.jpg` nevű fájl. Ezt a fájlt megnyitva bebizonyosodik, hogy ez az eredeti fájl másolata.

![`binarycopy.py` komplett kód](/assets/images/python/11/8.png)

_`binarycopy.py` hozzáadta a mappához a `happy_pickle_copy.jpg` fájlt._

Letöltés: [Happy Pickle kép](/assets/images/python/11/happy_pickle.jpg)