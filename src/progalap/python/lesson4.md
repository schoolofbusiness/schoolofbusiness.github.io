# 4. tananyag

:::tip 📚 EBBEN A FEJEZETBEN
- Megismerkedünk az `if` szerkezettel
- Ismétlés `for` ciklussal
- Ismétlés `while` ciklussal
:::

Eddig a tananyag során sokat beszéltünk az információk számítógépes tárolásáról, leginkább változókban, amelyekkel a Python és a számítógép dolgozhat. Most azonban az információval való munkára fogunk törkedni, hogy valami hasznosat vagy szórakoztatót hozzunk létre. Ebben a fejezetben a legfontosabb és leggyakrabban használt műveletekkel foglalkozunk, amelyekkel a számítógépet dolgokra lehet rávenni. Azzal kezdjük, amit a számítógépek jól, gyorsan és sokat csinálnak - a döntések meghozatalával.

## A fő operátorok a műveletek vezérlésére

A program tevékenységét döntésekkel irányítod, amelyek gyakran összehasonlítások elvégzésével járnak. Az összehasonlítások elvégzésére olyan operátorokat használsz, mint amilyenek a lent lévő táblázatban találhatók. Ezeket az operátorokat gyakran nevezik relációs operátoroknak vagy összehasonlító operátoroknak, mivel az elemek összehasonlításával a számítógép meghatározza, hogy két elem hogyan kapcsolódik egymáshoz.

| Operátor |       Jelentés       |
|:--------:|:--------------------:|
|    ==    |        egyenlő       |
|    !=    |      nem egyenlő     |
|     <    |      kisebb mint     |
|     >    |     nagyobb mint     |
|    <=    |  kisebb vagy egyenlő |
|    >=    | nagyobb vagy egyenlő |


A Python három logikai operátort, más néven boolean operátorokat is kínál, amelyek lehetővé teszik több összehasonlítás értékelését a végső döntés meghozatala előtt. Ezek az operátorok az angol szavakat használnak, jelentésük tulajdonképpen az, amit önmagukban is jelentenek, a következő táblázatban láthatóak.

| Operátor |           Jelentés          |
|:--------:|:---------------------------:|
|    and   |      minden érték igaz      |
|    or    | egyik vagy másik érték igaz |
|    not   |   tagadás, tehát nem igaz   |

Mindezeket az operátorokat gyakran használják `if...then...else` döntésekkel, hogy ellenőrizzék, mit csinál egy alkalmazás vagy program. Az ilyen döntések meghozatalához a Python `if` utasítást használjuk.

## Döntések meghozatala az if

Az `if` szót minden alkalmazásban és számítógépes programban sokat használják döntések meghozatalára.
Az `if` legegyszerűbb szintaxisa a következő: 

```txt
if condition: do this
do this no matter what
```

Tehát az első `do this` sor csak akkor hajtódik végre, ha a feltétel igaz. Ha a feltétel hamis, akkor az első `do this` figyelmen kívül marad. Függetlenül attól, hogy mi lesz a feltétel, a második sor következik. Vegyük észre, hogy egyik sor sincs behúzva. A behúzás sokat jelent a Pythonban, amint azt rövidesen látni fogod. De előbb nézzünk néhány egyszerű példát ezzel az egyszerű szintaxissal.

A következő kódrész egy egyszerű példát mutat, amelyben a `sun` változó a `down` karakterláncot kapja. Ezután egy `if` utasítás ellenőrzi, hogy a `sun` változó megegyezik-e a `down` szóval, és ha igen, akkor kiír egy **Jó éjt!** üzenetet. Ezután csak folytatja a műveletet, és kiír egy **Itt vagyok** üzenetet. 

```py
sun = "down"
if sun == "down": print("Good Night!)
print("I am here")
```

:::warning Győződjön meg róla 👀
Hogy mindig két egyenlőségjelet használsz, szóköz nélkül (==) az egyenlőség teszteléséhez. Ezt a szabályt könnyű elfelejteni. Ha rosszul írod be, a kód nem fog a várt módon működni.
:::

Ha ugyanezt a kódot úgy futtatod, hogy a `sun` változóban a `down`-tól eltérő szó szerepel, akkor az első kiírást figyelmen kívül hagyja. A következő sor azonban normálisan végrehajtódik, mert nem függ attól, hogy a feltétel igaz-e, ahogyan az láthatod.

```py
sun = "up"
if sun == "down": print("Good Night!)
print("I am here")
```

A második példában nem igaz, hogy a `sun` változó egyenlő a `down`-nal. Ezért a sor többi részét figyelmen kívül hagyjuk, és csak a következő sort hajtjuk végre.

Ebben a két példában a feltétel igaznak bizonyulása esetén végrehajtandó kód ugyanabban a sorban van, mint az if. Gyakran azonban egynél több dolgot szeretnénk végrehajtani, ha a feltétel igaznak bizonyul. Ehhez minden olyan sort be kell húzni, amely csak akkor hajtódik végre, ha a feltétel igaznak bizonyul. Az if alatt nem behúzott kód pedig attól függetlenül végrehajtódik, hogy a feltétel igaznak bizonyul-e vagy sem. Az ajánlás szerint **négy** szóközzel kell behúzni, de ez nem egy szigorúan betartandó szabály. Csak arra kell gondolni, hogy minden sort ugyanannyival kell behúzni.
A behúzott szintaxist akkor is használhatod, ha csak egy sor kódot kell végrehajtani, ha a feltétel igaznak bizonyul. Valójában ez a legelterjedtebb módja az `if` megírásának Pythonban, mert a legtöbben egyetértenek abban, hogy emberi szempontból olvashatóbbá teszi a kódot. Tehát valójában a szintaxis


```txt
if condition:
    do this
do this no matter what
```
Tehát ha a feltétel igaznak bizonyul, a `do this` sor végrehajtódik, ahogyan az összes többi sor is, amelyek ugyanúgy behúzva vannak, mint ez a sor. Az `if` alatti első nem behúzott sor mindenesetre végrehajtásra kerül. Tehát az egyszerű `sun` példát így írhatod:

```py
sun = "down"
if sun == "down": 
    print("Good Night!)
print("I am here")
```

Ez a kód ugyanúgy működik, mintha egy sorba tennénk a kódot. Ha a `sun` egyenlő `down`, a **Jó éjt!** kiíródik, mielőtt a második kiíratás végrehajtásra kerülne. Ha a `sun` nem egyenlő `down`, akkor a **Jó éjt!** `print` utasítása kihagyásra kerül.

Ha azon gondolkozól, hogy jobb-e egy vagy több sort használni az `if` utasításokban, akkor ez attól függ, hogy mit értesz jobb alatt. Ha úgy érted, hogy melyik módszer hajtódik végre gyorsabban, akkor a válasz egyik sem. A kód végrehajtásakor nem fog sebességkülönbséget látni. Ha a jobb alatt azt érted, hogy egy programozó számára melyiket könnyebben olvasni, akkor a legtöbb programozó a második módszert részesíti előnyben, ahol a kód az `if` utasítás alatt van behúzva.
Ne felejtsd el, hogy az `if` alatt tetszőleges számú sort behúzhatsz, és ezek a behúzott sorok csak akkor hajtódnak végre, ha a feltétel igaznak bizonyul. Ha a feltétel hamisnak bizonyul, a behúzott sorok egyike sem hajtódik végre. A behúzott sorok alatt lévő, nem behúzott kód mindig végrehajtásra kerül, mivel nem függ a feltételtől. Íme egy példa négy olyan kódsorral, amely csak akkor hajtódik végre, ha a feltétel igaznak bizonyul:

```py
total = 100
sales_tax_rate = 0.065
taxable = True

if taxable:
        print(f"Subtotal: ${total:.2f}")
        sales_tax = total * sales_tax_rate
        print(f"Sales Tax: ${sales_tax:.2f}")
        total = total + sales_tax
print(f"Total: ${total:.2f}")
```

:::warning A True és a False 👀
A szavakat nagy kezdőbetűvel, a többit kisbetűvel kell írni. Ha másképp írja be, a Python nem fogja **Boolean** _True_ vagy _False_ -ként felismerni, és a kódod nem fog az elvárt módon működni.
:::


Nézzük meg, hogy hogyan használtuk az if utasításunkat: 

```py
if taxable:
```

Ez a kód teljesen rendben van, mert az `taxable` egy **Boolean**, amely csak `True` vagy `False` értéket vehet fel. Lehet, hogy mások úgy írják, hogy 

```py
if taxable == True:
```

Ez a sor is rendben van, és nincs különösebb hatása a kódra. Az `== True` csak azért felesleges, mert az taxable már önmagában is vagy `True` vagy `False`.

Mindenesetre, mint láthattad, egy `total` változóval, egy `sales_tax_rate` változóval és egy `taxable` változóval kezdünk. Ha az `taxable` értéke `True`, akkor az `if` alatt lévő mind a négy sor végrehajtódik, és a lent látható kimenetet kapjuk.

```txt
Subtotal: $100.00
Sales Tax: $6.50
Total: $106.50
```

Ha az adóköteles értéke `False`, akkor az összes behúzott sor átugrik, és a megjelenített végösszeg az eredeti végösszeg hozzáadott forgalmi adó nélkül, ahogyan az a lenti ábrán látható.

```txt
Total: $100.00
```

### Az else ág használata az if logikával

Eddig olyan kódpéldákat néztél meg, amelyekben valamilyen kód akkor kerül végrehajtásra, ha valamilyen feltétel igaznak bizonyul. Ha a feltétel hamisnak bizonyul, az adott kódot figyelmen kívül hagyjuk. Néha előfordulhat, hogy azt szeretnénk, hogy egy kódrészlet akkor kerüljön végrehajtásra, ha egy feltétel igaznak bizonyul, ellenkező esetben (`else`) ha nem bizonyul igaznak, akkor egy másik kódrészletet szeretnénk végrehajtani. Ebben az esetben hozzáadhatsz egy `else:` -t az `if` -hez. Az `else:` alatt behúzott kódsorok csak akkor kerülnek végrehajtásra, ha a feltétel nem bizonyult igaznak. Íme a logika és a szintaxis:


```txt
if condition:
    do indented lines here
    ...
else:    
    do indented lines here
    ...
do remaining un-indented lines no matter what
```

A következő kódrészlet egy egyszerű példát mutat, ahol a `datetime.now()` segítségével, ahol lekérdezzük az aktuális időt. Ha ennek az időnek az órája kisebb, mint 12, akkor a program a **"Good morning"** -ot jeleníti meg. Ellenkező esetben a **"Good afternoon"** jelenik meg. Az órától függetlenül kiírja a **"I hope you are doing well!"** Ha tehát írunk egy ilyen programot, és reggel futtatjuk, akkor a kódban látható módon a megfelelő üdvözlést kapjuk, amelyet az **"I hope you are doing well!"** követ.

```py
import datetime as dt

now = dt.datetime.now()

if now.hour < 12:
    print("Good morning")
else:
    print("Good afternoon")

print("I hope you are doing well!")
```

Most talán azt mondod, hogy "Hű, ez lenyűgöző". De mi van, ha este 11 óra van? Tényleg azt akarod mondani, hogy **"Good afternoon"**? - Egy újabb kérdés, ami megérdemeli a néma csendet pár másodpercre.
Szóval amire szükséged van, az egy `if ... else`, ahol több `else` utasítás is lehetséges. Itt jön a képbe a következőkben ismertetett `elif` utasítás.

### Több else utasítás kezelése elif utasítással

Ha az `if ... else` nem elég az összes lehetőség kezelésére, akkor ott van az `elif` (ami, mint már kitalálhattad, az `else if` szóból képzett utasítás). Egy `if` utasítás tetszőleges számú `elif` feltételt tartalmazhat. Beilleszthetünk egy utolsó `else` utasítást, amely csak akkor hajtódik végre, ha az if és az összes előző `elif` hamisnak bizonyul.

A legegyszerűbb formában az `elif` és `else` utasításokat tartalmazó `if` szintaxisa a következő:

```txt
if condition:
     do these indented lines of code
     ...
elif condition:
    do these indented lines of code
    ...
do these un-indented lines of code no matter what
```

Tekintettel erre a struktúrára, lehetséges, hogy a behúzott kódból egy sem fog végrehajtódni.

```py
light_color = "green"

if light_color == "green":
    print("Go")
elif light_color == "red":
    print("Stop")

print("This code executes no matter what")”
```

A kód futattása után a következő lesz a kimeneten:

```txt
Go
This code executes no matter what
```

Ha a fény színét pirosra változtatod így:


```py
light_color = "red"

if light_color == "green":
    print("Go")
elif light_color == "red":
    print("Stop")

print("This code executes no matter what")”
```
A kód futattása után a következő lesz a kimeneten:

```txt
Stop
This code executes no matter what
```

Tegyük fel, hogy a fény színét nem `red`-re vagy `green`-re változtatjuk, az alábbiak szerint:

```py
light_color = "yellow"

if light_color == "green":
    print("Go")
elif light_color == "red":
    print("Stop")

print("This code executes no matter what")”
```
A kód lefutása a következő kimenetet eredményezi, mivel sem a color == "green", sem a color == "red" nem bizonyult igaznak, így a behúzott kód egyik része sem került végrehajtásra:


```txt
This code executes no matter what
```

Hozzáadhatsz egy `else` ágat, amelybe csak akkor fog belefutni, ha az előző feltételek mind hamisnak bizonyulnak majd:

```py
light_color = "yellow"

if light_color == "green":
    print("Go")
elif light_color == "red":
    print("Stop")
else:
    print("Proceed with caution")

print("This code executes no matter what")
```

A kód futattása után a következő lesz a kimeneten:

```txt
Proceed with caution
This code executes no matter what
```

Az a tény, hogy a `light_color` "yellow", megakadályozza, hogy az első két `if` feltétel igaznak bizonyuljon, így csak az `else` kód kerül végrehajtásra. És ez igaz bármire, amit a `light_color` változóba teszel, kivéve a "red" vagy a "green", mert az `else` nem egy adott feltételt keres. Csak egy "ha minden más nem sikerül, akkor csináld ezt" szerepet játszik a logikában.

### Hármas if ( if...elif...else )

Íme egy másik kódpélda, ahol az `age` nevű változót 31-re állítjuk. Ezután `if`...`elif`...`else` használatával döntünk arról, hogy mit jelenítsünk meg:

```py
age = 31

if age < 21:    
    beverage = "milk"
elif age >= 21 and age < 80:
    beverage = "beer"
else:    
    beverage = "prune juice"

print("Have a " + beverage)
```
A megjegyzések mindig opcionálisak. De ha megjegyzéseket fűzünk a kódhoz, az megkönnyítheti annak megértését, a későbbi felhasználás érdekében:

```py
age = 31

if age < 21:
    # If under 21, no alcohol   
    beverage = "milk"
elif age >= 21 and age < 80:
    # Ages 21 - 79, suggest beer
    beverage = "beer"
else:
    # If 80 or older, prune juice might be a good choice. 
    beverage = "prune juice"

print("Have a " + beverage)
```

:::tip 📝
Ha a megjegyzések behúzására vonatkozó szabályra vagy kíváncsi akkor kijelenthetjük, hogy nincs rá szabály. A megjegyzések csak jegyzetek saját magadnak, tehát nem futtatható kód.
:::

## Folyamat ismétlése for ciklussal

A döntéshozatal nagy része mindenféle alkalmazás írásának, bármi legyen is az. De néha újra és újra számolnunk kell vagy végre kell hajtanunk egy feladatot. Ezekre az esetekre használhatsz `for` ciklusokat, amelyek lehetővé teszik, hogy egy vagy több kódsort annyiszor ismételj meg, ahányszor csak akarsz.

### Számok körbejárása egy tartományban

Ha tudod, hogy hányszor szeretnéd, hogy egy ciklus ismétlődjön, a következő szintaxis használata lehet a legegyszerűbb:

```py
for x in range(y):
    do this
    do this  

un-indented code is executed after the loop
```
Ki cserélheted az `x`-et egy tetszőleges változó nevére. Helyettesítheted `y`-t bármilyen számmal vagy számtartománnyal.

```py
for x in range(7):
    print(x)

print("All done")
```

A kimenet a `print(x)` futásának az eredménye. A ciklusban az `x` 0-val kezdődik és minden egyes alkalommal egyel növekszik. Az utolsó sor, amely nincs behúzva, a ciklus befejezése után hajtódik végre. Tehát a kimenet a következő lesz:

```txt
0
1
2
3
4
5
6
All done
```

Talán azt vártad volna, hogy a ciklus 1-7-ig számol, nem pedig 0-6-ig. Ha azonban nem adsz meg mást, a ciklus mindig 0-tól kezdi a számolást. Ha más számmal akarod elkezdeni a számolást, ad meg a kezdő és a befejező számot vesszővel elválasztva a zárójelben. Ha két számot adsz meg akkor az első szám határozza meg, hogy hol kezdődjön a számlálás. A második szám 1-gyel nagyobb, mint ahol a ciklus megáll - ami az olvashatóság szempontjából nem szerencsés, de ez a gondolkodás menet ilyen. Itt van például egy `for` ciklus két számmal a tartományban:

```py
for x in range(1, 10):
    print(x)
    
print("All done")
```

Amikor ezt a kódot futtatod, a számláló 1-nél kezdődik, és mint ahogy mondtam is az utolsó szám előtt 1-el megáll:

```txt
1
2
3
4
5
6
7
8
9
All done
```

Ha azt szeretnénk, hogy a ciklus 1-től 10-ig számoljon, akkor a tartomány 1,11.

```py
for x in range(1, 11):
    print(x)
    
print("All done")
```
Egy ciklus, amely 1-től 10-ig számol:

```txt
1
2
3
4
5
6
7
8
9
10
All done
```


### Szöveg (stringek) körbejárása ciklussal

A `range()` használata a `for` ciklusban opcionális. A `range` helyettesíthető egy karakterlánccal, és a ciklus a karakterlánc minden egyes karakterét megismétli. Az `x` változó _(vagy bárhogy is nevezzük el a változót)_ a ciklus minden egyes futásakor balról jobbra haladva tartalmazza a karakterlánc egy-egy karakterét. A szintaxis itt a következő:

```py
for x in string
    do this
    do this

do this when the loop is done
```
A szokásos módon helyettesítheted az `x`-et bármilyen változó nevével. A karakterlánc legyen idézőjelek közé zárt szöveg, vagy egy olyan változó neve, amely karakterláncot tartalmaz.

```py
for x in "snorkel":    
    print(x)

print("Done")
```

Ha ezt a kódot futtatod, a következő kimenetet kapod. A `snorkel` szó egy-egy betűjét írja ki a ciklus minden egyes futásakor. Amikor a ciklus véget ért, az utolsó sor, amely nincs behúzva, a befejezése után hajtódik végre.

```txt
s
n
o
r
k
e
l
Done
```

A karakterláncnak nem kell szó szerinti karakterláncnak lennie. Lehet olyan változó, amely egy karakterláncot tartalmaz. Próbáld ki például ezt a kódot:

```py
my_word = "snorkel"

for x in my_word:
    print(x)
    
print("Done")
```

Az eredmény ugyanaz. Az egyetlen különbség az, hogy a `for` ciklusban egy változó nevét használtuk `string` helyett. De a kód tudta, hogy a `my_word` tartalmára gondoltál, nem pedig a szó szerinti `my_word` karakterláncra, mivel a `my_word` nincs idézőjelek közé zárva.

```txt
s
n
o
r
k
e
l
Done
```

### Listák körbejárása

A Pythonban a lista alapvetően szögletes zárójelben lévő, vesszővel elválasztott elemek csoportja. Egy ilyen listán `for` ciklus segítségével lépkedhetünk végig. A következő példában a ciklus körbejárására szolgáló listát az első sorban zárójelben adjuk meg:

```py
for x in ["The", "rain", "in", "Spain"]:
    print(x)

print("Done")
```

Ez a fajta ciklus a lista minden egyes elemére egyszer ismétlődik. Az `x` változó a lista egy-egy elemétől kapja az értékét, balról jobbra haladva. Tehát a kód futtatása a következő kimenetet eredményezi:

```txt
The
rain
in
Spain
Done
```

A listát egy változóhoz is hozzárendelheted, majd a `for` ciklusban a lista helyett a változó nevét használhatod. A következő kódrész egy olyan példát mutat, ahol a `seven_dwarves` változóhoz egy hét nevet tartalmazó listát rendelünk.

Ismét figyeljük meg, hogy a listánk szögletes zárójelben van. Ezek miatt a Python a változót listaként fogja kezeli. A `for` ciklus ezután végigmegy a listán, és a ciklus minden egyes lépésénél kiírja egy törpe nevét - `az az lista egy elemét`. Mi a változó neve, vagyis az `x` helyett a `dwarf` nevet használtuk, de ez a név bármilyen érvényes név lehet. Használhattuk volna az `x`-et vagy a `little_person`-t vagy a `name_of_fictional_entity`-t vagy bármi mást, amíg az első sorban szereplő név megegyezik a for ciklusban használt névvel.


```py
seven_dwarves = ["Happy", "Grumpy", "Sleepy", "Bashful", "Sneezy", "Doc", "Dopey"]

for dwarf in seven_dwarves:
    print(dwarf)

print("And Snow White too")
```

### Kilépés a ciklusból

Általában azt szeretnénk, ha egy ciklus egy teljes listán vagy elemtartományon végigmenjen, de kényszeríthetjük a ciklus korai leállítását is, ha valamilyen feltétel teljesül. Az `if` utasításon belüli `break` utasítással kényszerítheti a ciklus kilépését. A szintaxis a következő:

```py
for x in items:
    if condition:
    [do this … ]
    break

do this
```

A szögletes zárójelek ebben a példában nem részei a kódnak. Azt jelzik, hogy ami a zárójelek között van, az opcionális. Tegyük fel, hogy valaki kitöltött egy vizsgát, és át akarjuk nézni a válaszokat. De van egy szabályunk, amely szerint ha egy válasz üres, akkor azt hiányosnak jelöljük, és figyelmen kívül hagyjuk a lista többi elemét. A következőkben minden tételre válaszoltunk - _nincsenek üres részek_:

```py
answers = ["A", "C", "B", "D"]
for answer in answers:
    if answer == "":
        print("Incomplete")
        break
    print(answer)
print("Loop is done")
```

Az eredményben mind a négy válasz ki van írva:

```txt
A
C
B
D
Loop is done
```

Itt ugyanaz a kód, de a lista harmadik eleme üres, amit az `""` jelez, ami egy üres karakterlánc:

```py
answers = ["A", "C", "", "D"]
for answer in answers:
    if answer == "":
        print("Incomplete")
        break
    print(answer)
print("Loop is done")
```

Itt van a kód futtatásának kimenete:

```txt
A
C
Incomplete
Loop is done
```

A logika tehát az, hogy amíg valamilyen választ adunk, az `if` kód nem kerül végrehajtásra, és a ciklus a végéig fut. Ha azonban a ciklus üres választ talál, akkor kiírja, hogy "Incomplete". Maga a `break` a ciklust megszakítja úgy, hogy leugorik a cikluson kívüli első utasításhoz (az utolsó, nem behúzott utasításhoz), amely kiírja, hogy "Loop is done".


### Ciklus folytatása a continue-val

Egy ciklusban használhatsz `continue` utasítást is, ami a `break` ellentéte. Míg a `break` a kód végrehajtását a ciklus végére ugratja és megállítja a ciklus végrehajtását, addig a `continue` a ciklus elejére ugrik vissza és a következő elemmel folytatja - _vagyis a `continue`-t kiváltó elem után_. Tehát itt ugyanaz a kód, mint az előző példában, de ahelyett, hogy break-et hajtana végre, amikor a végrehajtás üres válaszhoz ér, a lista következő elemével folytatódik:

```py
answers = ["A", "C", "", "D"]
for answer in answers:
    if answer == "":
        print("Incomplete")
        continue
    print(answer)
print("Loop is done")
```

A kód kimenete a következő. Nem írja ki az üres választ, hanem helyette az "Incomplete"-et írja ki, de aztán visszamegy, és folytatja a többi elemen való körbejárását:

```txt
A
C
Incomplete
D
Loop is done
```

### Egymásba ágyazott ciklusok

Teljesen rendben van a ciklusok egymásba ágyazása, azaz ciklusok elhelyezése ciklusok között. Csak győződj meg róla, hogy a behúzásokat jól használod, mert a behúzások határozzák meg, hogy egy kódsor melyik cikluson belül helyezkedik el.

```py
# Outer loop
for outer in ["First", "Second", "Third"]:
    print(outer)
    # Inner loop
    for inner in range(3):
        print(inner + 1)

print("Both loops are done")
#Out of both loops here
```

Például a következő kódban egy külső ciklus végighalad egy listán ami a "First", "Second" és "Third" szavakat taralmazza. A ciklus minden egyes futásakor kiír egy szót, majd a belső ciklus kiírja 1-től 3-ig a számokat - egy tartományon (`range`) való végighaladással és a tartomány minden egyes értékéhez 1 hozzáadásával.
A ciklus vége az első, nem behúzott sor alul, amely nem íródik ki, amíg a külső ciklus be nem fejezte a folyamatot.

## Folyamat ismétlése while-al

A `for` ciklus helyett a `while` ciklus is használható. A különbség csekély.
A `for` használatával általában fix számú ciklust kapunk, egyet egy tartomány (`range`) minden egyes elemére vagy egyet egy lista (`list`) minden egyes elemére. `while` ciklus esetén a ciklus addig folytatódik, amíg (`while`) valamilyen feltétel igaz. Íme az alapvető szintaxis:

```py
while condition:
       do this 
       do this
do this when the loop is done
```

A `while` ciklusok esetében meg kell győződnie arról, hogy a ciklus leállítását kiváltó feltétel végül bekövetkezik. Ellenkező esetben egy végtelen hurkot kapunk, amely csak megy és megy és megy, amíg valamilyen hiba miatt meg nem szűnik, vagy amíg az alkalmazás bezárásával, a számítógép leállításával vagy más dologgal nem kényszerítjük a leállításra.

Íme egy példa, ahol a while feltétel három dolog miatt véges számúszor fut le:

- Létrehozunk egy `counter` nevű változót, és megadunk neki egy kezdőértéket (65).
- Azt mondjuk, hogy addig futtassuk a ciklust, amíg a `counter` kisebb, mint 91.
- A cikluson belül növeljük a számlálót 1-gyel - `counter += 1`. Az ismételt 1-gyel való növelés végül 91-nél nagyobbra növeli a számlálót, ami a ciklus végét jelenti.

A `chr()` függvény a cikluson belül megjeleníti a számlálóban szereplő szám ASCII karakterét. A 65-ről 90-ig való léptetés elegendő ahhoz, hogy az ábécé összes nagybetűjét kiírjuk, ahogyan azt majd a lenti kódban látható. 

Az ilyen típusú ciklusoknál könnyen és gyakran elkövethető hiba, hogy elfelejtjük növelni a számlálót, így az a ciklus minden egyes alkalommal növekszik és végül a `while` feltétel hamis lesz és megáll. 

```py
counter = 65

while counter < 91:
    print(str(counter) + "=" + chr(counter))
    counter += 1

print("All done")
```

A következő kódban szándékosan eltávolítottuk a `counter += 1` értéket, hogy ezt a hibát okozzuk. Amint láthatjuk, a ciklus tovább nyomtatja az A-t. Addig megy, amíg meg nem állítjuk.


```py
counter = 65

while counter < 91:
    print(str(counter) + "=" + chr(counter))

print("All done")
```

### A while ciklusok újraindítása continue-val

A `while` ciklusban az `if` és a `continue` segítségével ugyanúgy visszaugorhatsz a ciklus elejére, mint a `for` ciklusok esetében. Nézzük meg a következő példa kódot:

```py
import random
print("Odd numbers")
counter = 0

while counter < 10:
    # Get a random number
    number = random.randint(1,999)
    if int(number / 2) == number / 2:
        # If it's an even number, don't print it.
        continue
    # Otherwise, if it's odd, print it and increment the counter.
    print(number)
    # Increment the loop counter.
    counter += 1

print("Loop is done")
```

Kimenete:

```txt
697
449
91
567
949
333
591
699
895
837
Loop is done
```

A `while` ciklus addig tart, amíg a `counter` nevű változó kisebb, mint 10. A cikluson belül a `number` nevű változóhoz egy véletlen számot rendelünk az 1 és 999 közötti tartományból. Ezután a következő utasítás ellenőrzi, hogy a szám páros-e:

```py
if int(number / 2) == number / 2:
```

:::warning ⚠️
Ne feled, hogy az `int()` függvény csak a szám egész részét adja vissza. Tegyük fel tehát, hogy a generált véletlen szám 5. 

Ha ezt a számot elosztjuk 2-vel, akkor 2,5-t kapunk. Ekkor az `int(number)` értéke 2, mert az `int()` egy számból mindent elhagy a tizedesvessző után. 

Mivel a 2 nem egyenlő 2,5-tel, a kód átugorja a folytatást, kiírja a páratlan számot, növeli a számlálót, és folytatja.

Ha a következő véletlen szám mondjuk 12, akkor 12 osztva 2-vel 6, és az `int(6)` tényleg 6 - _mert egyik számnak sincs tizedesvesszője_. 
:::

Ez a `continue` végrehajtását okozza, átugorva a `print(number)` utasítást és a "számláló" inkrementálását, így csak egy másik véletlen számot próbál meg, és folytatja. Végül 10 páratlan számot talál, ekkor a ciklus leáll, és a kód utolsó sorában megjelenik a `Loop is done`.

### A while ciklusok megszakítása breakkel

A `while` ciklus megszakítható a break segítségével, csakúgy, mint a for ciklus esetében. A `while` ciklus megszakításával a végrehajtást a ciklus alatti és a cikluson kívüli első kódsorral kényszerítjük folytatásra, ezzel megszakítva a ciklust, de folytatva a folyamatot a ciklus utáni művelet többi részével.

A megszakítás egy másik módja annak, hogy a `while` ciklus megállítását lehetővé teszi, mielőtt a `while` feltétel hamisnak bizonyulna. Tehát lehetővé teszi, hogy szó szerint kiszakadjunk a ciklusból, mielőtt annak az ideje lejárna. Az igazat megvallva azonban nem emlékszünk olyan helyzetre, amikor a ciklusból való kilépés az ideje előtt jó megoldást jelentett volna egy problémára, így nehéz gyakorlati példával előállni. Ehelyett inkább csak megmutatjuk a szintaxist, és egy általános példát adunk.

```py
while condition1:
    do this
    if condition2:
        break

do this when the loop is done
```

Alapvetően két dolog állíthatja meg a ciklust. Vagy a `feltetel1` hamisnak bizonyul, vagy a `feltetel2` igaznak. Függetlenül attól, hogy e két dolog közül melyik következik be, a kód végrehajtása a cikluson kívüli első kódsorral folytatódik, vagyis azzal a sorral, amelyik a mintakódban a `do this` kódot olvassa, amikor a ciklus befejeződik.

Íme egy példa, ahol a program legfeljebb tíz olyan számot írki, amelyek nem oszthatók 5-tel. Lehet, hogy ennél kevesebbet is kiír, mert amikor egy olyan véletlen számot talál, amely osztható 5-tel, kilép a ciklusból. Tehát az egyetlen dolog, amit a példával kapcsolatban megjósolhatunk, az az, hogy nulla és tíz közötti számot fog kiírni, amelyek nem oszthatók 5-tel. Nem tudjuk megjósolni, hogy hányat fog kiírni egy adott futás során, mert nem tudjuk megmondani, hogy a megengedett tíz próbálkozás során mikor fog egy 5-tel osztható véletlen számot találni:

```py
import random
print("Numbers that aren't evenly divisible by 5")
counter = 0

while counter < 10:
    # Get a random number
    number = random.randint(1,999)
    if int(number / 5) == number / 5:
        # If it's evenly divisible by 5, bail out.
        break
    # Otherwise, print it and keep going for a while.
    print(number)
    # Increment the loop counter.
    counter += 1

print("Loop is done")
```

1. Példa futtatás kimenete:

```txt
Numbers that aren't evenly divisible by 5
144
488
496
651
384
658
164
286
774
492
Loop is done
```

2. Példa futtatás kimenete:

```txt
Numbers that aren't evenly divisible by 5
511
616
838
Loop is done
```

Tehát a kód első futtatásakor a kimenet hasonlóan nézhet ki mint a minta kimeneten, de a második alkalommal is hasonlót kaphatsz. Egyszerűen nem lehet megjósolni az eredményt, mert a véletlen szám valóban véletlenszerű és nem kiszámítható - ami sok játékban fontos fogalom.


## Feladatok

1. feladat: Az első 10 természetes szám kiírása `while` ciklus segítségével
    
    Elvárt kimenet:
    ```txt
    1
    ...
    10
    ```
- - -

2. feladat: A következő minta kiírása
    
    Írj programot a következő számmintázat kiírására egy ciklus segítségével.
    
    Elvárt kimenet:
    ```txt
    1 
    1 2 
    1 2 3 
    1 2 3 4 
    1 2 3 4 5
    ```

    Segítség:
    ```py
    print(j, end=' ') # Ugyanabba a sorba való kiíratás.
    ```

- - -

3. feladat: Számítsuk ki az összes szám összegét 1-től egy adott számig.
    Elvárt kimenet:
    ```txt
    Enter number 10
    Sum is:  55
    ```

    Segítség:
    ```py
    input("Enter number ") # Szám bekérése
    ```

- - -

4. feladat: Írjunk programot amely egy adott szám szorzótáblázatát kiírja - _elegendő az első 10_.
    
    Elvárt kimenet:
    ```txt
    2
    4
    6
    8
    10
    12
    14
    16
    18
    20
    ```

- - -

5. feladat: Számok megjelenítése egy listából ciklus segítségével

    Lista:
    ```py
    numbers = [12, 75, 150, 180, 145, 525, 50]
    ```
    Írjon programot, amely egy listából csak azokat a számokat jeleníti meg, amelyek megfelelnek a következő feltételeknek

    - A számnak öttel oszthatónak kell lennie
    - Ha a szám nagyobb, mint 150, akkor hagyjuk ki, és lépjünk a következő számra.
    - Ha a szám nagyobb, mint 500, akkor állítsuk le a ciklust.
    
    Elvárt kimenet:
    ```txt
    75
    150
    145
    ```

- - -

6. feladat: Számolja meg egy szám összes számjegyét
    
    Például a szám **75869**, tehát a kimenetnek 5-nek kell lennie.
    
    Elvárt kimenet:
    ```txt
    5
    ```

- - -

7. feladat: Nyomtassa ki a következő mintát

    Írj egy programot, amely `for` ciklus segítségével kiírja a következő számmintát:

    ```txt
    1 
    1 2 
    1 2 3 
    1 2 3 4 
    1 2 3 4 5
    ```
    Segítség:
    ```py
    print(j, end=' ') # Ugyanabba a sorba való kiíratás.
    ```

- - -

8. feladat: A lista fordított sorrendben történő kiírása ciklus segítségével

    Lista:
    ```py
    list1 = [10, 20, 30, 40, 50]
    ```

    Elvárt kimenet:
    ```txt
    50
    40
    30
    20
    10
    ```

- - -

9. feladat: Számok megjelenítése -10-től -1-ig for ciklus segítségével
 
    Elvárt kimenet:
    ```txt
    -10
    -9
    -8
    -7
    -6
    -5
    -4
    -3
    -2
    -1
    ```
- - -
10. feladat: Az `else` blokk használatával a `for` ciklus sikeres végrehajtása után megjelenítjük a "Done" üzenetet.
    
    Elvárt kimenet:
    ```txt
    0
    1
    2
    3
    4
    Done!
    ```   
- - -
11. feladat: Írjunk programot egy tartományon belüli összes prímszámot megjeleníti.

    Elvárt kimenet:
    ```txt
    Prime numbers between 25 and 50 are:
    29
    31
    37
    41
    43
    47
    ``` 

- - -
12. feladat: Fibonacci-sorozat megjelenítése 10 tagig
    
    Elvárt kimenet:
    ```txt
    Fibonacci sequence:
    0  1  1  2  3  5  8  13  21  34
    ```
- - -
13. feladat: Adott szám faktoriálisának megkeresése

    Elvárt kimenet:
    ```txt
    5! = 120
    ```

- - -
14. feladat: Adott egész szám megfordítása
    
    Adott szám:
    ```txt
    76542
    ```
    
    Elvárt kimenet:
    ```txt
    24567
    ````

- - -
15. feladat: Egy ciklus segítségével jelenítse meg egy adott lista __páratlan__ indexpozíciókban lévő elemeit.

    Lista:
    ```py
    my_list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    ```

    Elvárt kimenet:
    ```txt
    20 40 60 80 100
    ````
- - -
16. feladat: Számítsuk ki az 1-től egy adott számig terjedő számok köbét (n^3).

    Elvárt kimenet:
    ```txt
      Number is : 1  and the cube is 1
      Number is : 2  and the cube is 8
      Number is : 3  and the cube is 27
      Number is : 4  and the cube is 64
      Number is : 5  and the cube is 125
      Number is : 6  and the cube is 216
    ```
- - -
17. feladat: Nyomtassa ki a következő mintát

    Használj két for ciklust. Az első for ciklus a felső minta nyomtatásához, a második for ciklus pedig az alsó minta nyomtatásához.
    ```txt
    * 
    * * 
    * * * 
    * * * * 
    * * * * * 
    * * * * 
    * * * 
    * * 
    *
    ```