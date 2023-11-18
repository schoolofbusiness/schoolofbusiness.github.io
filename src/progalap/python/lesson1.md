# 1. tananyag


:::tip 📚 EBBEN A FEJEZETBEN
A témakör célja, hogy a tanulók megtanulják a Python programozás megkezdéséhez szükséges alapokat, telepítéssel, fejlesztői környezet megismerésével.

A témakör elsajátítását követően a tanuló:

- Ismeri a számítógépes program működésének elvét, tudja, mi a különbség a fordított és interpretált kódok között.
- Ismeri a Python programozási nyelv jellemzőit.
- Képes Python programok készítésére szolgáló hatékony fejlesztési környezet kialakítására (Python letöltése és telepítése, a választott fejlesztői környezetek kiválasztása, telepítése, konfigurálása).
- Képes „Hello World!” típusú program készítésére és futtatására.
- Képes az egyszerű, tipikus programhibák megkeresésére és javítására.
:::

## Bevezetés

A Python egy nagyszerű programozási nyelv, amit érdemes ismerned, ha jó állást keresel vagy ha már rendelkezel meglévő programozási ismeretekkel és kiszeretnéd egészíteni olyan technológiákkal mint a mesterséges intelligencia (AI), a gépi tanulás (ML), az adattudomány vagy a robotika.

Ennek az anyagnak a megközelítése erősen a gyakorlatias megközelítés felé hajlik. Sok programozási oktatóanyag gyakori hibája, hogy feltételezik, hogy már profi programozó vagy valamilyen programozási nyelven, és átugranak olyan dolgokat, amelyekről feltételezik, hogy már tudod.

Az órákon nem feltételezzük, hogy már programozol Pythonban vagy más nyelven ellenben viszont, hogy tudod használni a számítógépet, és érted az alapokat, például a fájlok és a mappák kezelését.

## Miért Python? :snake:

A Python elsősorban azért menő, mert minden megfelelő dologgal rendelkezik ahhoz a fajta szoftverfejlesztéshez, ami manapság a szoftverfejlesztés világát mozgatja. 

A gépi tanulás, a robotika, a mesterséges intelligencia és az adattudomány a vezető technológiák ma és a belátható jövőben. 

A Python főként azért népszerű, mert már most is rengeteg képességgel rendelkezik ezeken a területeken, míg sok régebbi nyelv lemaradásban van ezekben a technológiákban.

Ahogyan a fogkrémnek a samponnak, az autóknak és szinte minden más terméknek amit megvásárolhatsz, úgy a programozási nyelveknek is különböző márkái vannak, olyan nevekkel, mint a Java, a C, a C++ és a C#. 

Ezek mind programozási nyelvek, ahogyan a fogkrémek is fogkrémek. A Python jelenlegi népszerűségének fő okai a következők:

- A Python viszonylag könnyen tanulható.
- A Python több kész eszközt kínál az aktuális technológiákhoz, mint a legtöbb más nyelv.

## Melyik Python verziót fogjuk használni?

A Python különböző verziói találhatóak meg a világhálón, ami arra késztet, hogy olyan dolgokon töprengjen, mint pl. 

- Miért vannak különböző verziók?
- Miben különböznek?
- Melyiket kellene megtanulnom?

Python-verziókra és a kiadási dátumok:

* Python 1.0 - Január 1994 ~ Python 1.6 Szeptember 2000
* Python 2.0 - Október 2000 ~ Python 2.7 Július 2010
* Python 3.0 - December 2008 ~ napjaink

Ha jól figyeltél észrevehetted, hogy a 3.0 verzió 2008 decemberében indul, de a 2.7-es verzió 2010-ben jelent meg. Felmerülhet az a kérdés, hogy mi is ez az átfedés és minket mennyire is érinthet ez.  

Ha Te történetesen egy szoftvercégnél vagy, amelynek Python 2-ben írt terméke van a piacon, és több millió dollárt fektetett abba a termékbe, nem biztos, hogy túlságosan örülni fog, hogy a nulláról kell kezdenie az aktuális verzióval. Így a régebbi verziók gyakran továbbra is támogatottak és fejlődnek, függetlenül a legfrissebb verziótól, hogy támogassák azokat a fejlesztőket és vállalkozásokat, akik már nagymértékben befektettek az előző verzióba.

Tehát a legnagyobb kérdés az, hogy "*melyik verziót tanuljam meg?*".

A válasz erre egyszerű :point_right: amelyik a legfrissebb  verzió. Tudni fogod, hogy mi az, mert amikor a **python.org** weboldalra mész, hogy letöltsd majd a Pythont, megmondja a legfrissebb **Stable buildet** (verziót).

::: warning
:speech_balloon: Az egyetlen ok arra, hogy megtanulj valami olyasmit, mint a 2. verzió vagy valami más régebbi, hogy, ha már felvettek téged valamilyen projektre, és a cég megköveteli, hogy megtanulj és használj egy bizonyos verziót. Ez a fajta helyzet ritka de a zűrös való világban azonban előfordul, hogy egyes cégek nagymértékben elkötelezettek egy termék egy korábbi verziója iránt, ezért a felvételkor olyan embereket keresnek, akik ismerik azt a verziót.
:::

Ennek az anyagnak a tartalma Python 3.9-es verizó használatával íródott. Ne aggódj az első és második számjegy utáni verzióeltérései miatt. A 3.9.1-es verzió eléggé hasonlít a 3.9.0-s verzióhoz ahhoz, hogy ez ne legyen fontos. Hasonlóképpen, a 3.9-es verzió nem olyan nagy ugrás a 3.8-ashoz képest. A Pythonban lévő dolgok nagy része ugyanaz a legújabb verziókban. Tehát nem kell úgy érezned, hogy felesleges időt fektetsz egy olyan verzió megtanulásába, amely már elavult vagy hamarosan elavulni fog.

:::danger
:heavy_exclamation_mark: A Python 2.7 élettartamának végét eredetileg 2015-re tűzték ki, majd 2020-ra halasztották, mivel aggódtak amiatt, hogy a meglévő kód nagy részét nem lehet könnyen továbbportolni a Python 3-ra. A továbbiakban már nem fognak hozzá további biztonsági javításokat vagy egyéb fejlesztéseket kiadni.
::: 

## Python és Visual Studio Code telepítése

Ahhoz hogy a Pythont elkezd használni egyrészt szükséged lesz egy interpeterre és egy szerkesztőre. A szerkesztőben fogod megírni a kódodat, az interpreterrel pedig lefuttathatod majd a kódot. Amikor futtatod a kódot, azt mondod a számítógépnek, hogy "*csináld azt, amit a kódom mond*".

:::warning A fordított és az interpretált nyelv közötti különbség
A compiler (fordító) gépi kódú programot állít elő, így azt az operációs rendszer már közvetlenül képes futtatni. DOS/Windows architektúrákon az ilyen programok indítása egy COM (command - parancs) vagy EXE (executable – végrehajtható) kiterjesztésű fájl betöltésével kezdődik.
A fordított nyelvek típusai - C, C++, C#, COBOL stb.

Az interpreter (értelmező) viszont nem állít elő gépi kódot, a beírt kód végrehajtása lényegében a kód soronkénti értelmezésével történik. Ebben az esetben a kód futtatásához tehát egy külön futtató környezet szükséges, ami gyakran azonos a fejlesztői környezettel. 

:::

:::tip Offtopic
A Java kilóg a sorból, mert a fordítóprogram nem gépi kódra, hanem egy köztes kódra, például Java virtuális gép (JVM) bájtkódjára fordít. Ebből a kódból aztán szükség szerint Java gép JIT-fordítója állít elő gépikódot a program futtatása közben.
:::

[CPython](https://www.python.org/downloads/) - A leggyakrabban használt fordító, 32 és 64 bites verzióban. Tartalmazza a legújabb nyelvi funkciókat, maximális Python csomag kompatibilitást, teljes hibakeresési támogatást nyújt.

[Visual Studio Code](https://code.visualstudio.com) - A Microsoft több programozási nyelvet tartalmazó fejlesztőkörnyezete, amely az évek során egyre több új programnyelvvel bővült. 

## A Python interaktív módjának használata

Python telepítése után azt javasolom, hogy a Python promptnál próbálj ki pár dolgot. Ehhez a terminál ablaka kiváló hely a Python-kód beírására.

:::tip Prompt
Az informatikában a prompt szöveges, parancssoros felületen a sor elején lévő pár karakter, ami után az utasításokat lehet beírni. Ezzel jelzi a számítógép, hogy befejezte az előző parancs futtatását, és készen áll az újabbak fogadására. Egyéb információt is tartalmazhat a gép állapotáról, például az aktuális meghajtó és könyvtár nevét. A Python programozási nyelvben például egy `>>>` jel jelenik meg promptként.
:::

**Windows**: Windows gomb + R gomb majd `cmd`.

**Mac**: Command gomb + Space gomb majd `terminal`.

### A telepített Python verziójának megtekintése

Az operációs rendszer parancssorába írd be a következőt és nyomd le az Entert, hogy megtudd milyen Python-verziót használsz.

```cmd
python --version
```
Valami olyasmit kell látnod, mint Python 3.x.x (ahol az x-ek a Python általad használt verzióját jelölik). Ha ehelyett egy hibaüzenetet látsz, akkor nem egészen sikerült a telepítésed :disappointed:.

### Belépés a Python interpreterbe

Ha be tudod írni a `python --version` parancsot, és nem kapsz hibaüzenetet, akkor készen állsz a Pythonnal való munkára. 
Innen a Python interpreterbe a következő parancs beírásával juthatsz be:

```cmd
python
```

Látnod kell néhány információt a használt Python verzióról és a `>>>` promptot. 

```txt
david@Redai-MacBook-Pro ~ % python
Python 3.8.9 (default, Apr 13 2022, 08:48:07) 
[Clang 13.1.6 (clang-1316.0.21.2.5)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> 
```

### Parancsok beírása

A parancsok beírása a Python-interpreterben ugyanolyan, mintha bárhol máshol írnánk be őket. A parancsot helyesen kell beírni, majd megnyomni az Entert. Ha valamit rosszul írsz a parancsban, valószínűleg hibaüzenetet fogsz látni, ami csak azt jelenti, hogy az interpreter közli veled, hogy nem érti, mire gondolsz.
De pánikra semmi ok, nem tudsz elrontani semmit. Tegyük fel, hogy a következő parancsot írod be:

`valami`

Miután megnyomtad az Entert, valami technikai halandzsát fogsz látni, ami azt próbálja közölni, hogy az interpreter nem tudja, mit jelent a `valami`, ezért nem tudja végrehajtani. Semmi sem romlott el. Csak visszakerültél egy újabb `>>>` prompthoz - lásd alatta.

```cmd
david@Redai-MacBook-Pro ~ % python
Python 3.8.9 (default, Apr 13 2022, 08:48:07) 
[Clang 13.1.6 (clang-1316.0.21.2.5)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> valami
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'valami' is not defined
>>> 
```

### A Python beépített súgójának használata

A python interpreterében lévő egyik mondat megemlíti, hogy parancsként beírhatjuk a `help`-et. Próbáljuk is ki, figyeljünk oda arra, hogy nem írjuk be az idézőjeleket csak a help szót és utána nyomjuk le az Entert - ahogy az eddigiekben csináltuk.

Ezúttal a következőt fogjuk látni:

```cmd
david@Redai-MacBook-Pro ~ % python3
Python 3.10.6 (v3.10.6:9c7b4bd164, Aug  1 2022, 17:13:48) [Clang 13.0.0 (clang-1300.0.29.30)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> help
Type help() for interactive help, or help(object) for help about object.
>>> 
```
Most az interpreter azt mondja, hogy írd be a help-et, amelyet egy üres zárójelpár követ, vagy a help-et egy adott szóval zárójelben (a példaként megadott objektummal). 


Az Enter megnyomása után a képernyőn megjelenik néhány információ a Python interaktív súgójának használatáról.

```cmd
Welcome to Python 3.10's help utility!

If this is your first time using Python, you should definitely check out
the tutorial on the internet at https://docs.python.org/3.10/tutorial/.

Enter the name of any module, keyword, or topic to get help on writing
Python programs and using Python modules.  To quit this help utility and
return to the interpreter, just type "quit".

To get a list of available modules, keywords, symbols, or topics, type
"modules", "keywords", "symbols", or "topics".  Each module also comes
with a one-line summary of what it does; to list the modules whose name
or summary contain a given string such as "spam", type "modules spam".

help> 
```
A `help>` megjelenése az ablak alján azt jelzi, hogy már nem az operációs rendszer héjában vagy a Python-interpreterben vagy *(amely mindig `>>>`-t mutat)*, hanem egy új területen vagy, amely segítséget nyújt.

A képernyőn leírtak szerint bármely modul, kulcsszó vagy téma nevét beírva segítséget kapsz az adott kifejezéshez. Jelen pillanatban lehet, hogy most éppen nincs szükséged segítségre a konkrétumokkal kapcsolatban. De jó tudni, hogy a segítség ott van, ha szükséged van rá.

A Python például bizonyos kulcsszavakat használ, amelyeknek különleges jelentésük van a nyelvben. Ha ezek listáját szeretnéd megkapni, csak írd be a következőt a help> promptba: 

`keywords`

Miután megnyomtad az Entert, megjelenik a kulcsszavak listája:

```cmd
help> keywords

Here is a list of the Python keywords.  Enter any keyword to get more help.

False               class               from                or
None                continue            global              pass
True                def                 if                  raise
and                 del                 import              return
as                  elif                in                  try
assert              else                is                  while
async               except              lambda              with
await               finally             nonlocal            yield
break               for                 not                 

help> 
```

A kulcsszavak listája fölött egy üzenet található, amely arról tájékoztat, hogy bármelyik kulcsszót beírhatjuk a `help>` promptba, hogy további információkat kapjunk az adott kulcsszóról. Például a `class` kulcsszó beírásával a **Python-osztályokról** kaphatunk információt.

Ezek nem olyan osztályok, amelyeket az iskolában látogatsz :smiley: inkább olyanok, amelyeket Pythonban hozhatsz létre (miután megtanultad az alapokat... :wink: ).

```cmd
Class definitions
*****************

A class definition defines a class object (see section The standard
type hierarchy):

   classdef    ::= [decorators] "class" classname [inheritance] ":" suite
   inheritance ::= "(" [argument_list] ")"
   classname   ::= identifier

A class definition is an executable statement.  The inheritance list
--More--
```

A szöveg alján található `--More--` nem egy prompt, ahová parancsokat írhatsz be. Csak tudatja veled, hogy van még szöveg talán több oldalnyi. Nyomd meg a szóközt vagy az Enter billentyűt, hogy megnézd. Minden alkalommal, amikor `-- More -- `látható, megnyomhatod a szóköz vagy az Enter billentyűt, hogy a következő oldalra lépj. Végül visszakerülsz a `help>` prompthoz. Ha a további görgetés helyett ki akarsz lépni, nyomd meg a `q` (quit) betűt.

### Kilépés az interaktív súgóból

Az interaktív súgóból történő kilépéshez és a Python súgóhoz való visszatéréshez írd be a `q` betűt (quit) vagy nyomd le a `Ctrl+Z` billentyűkombinációt. Ezt követően vissza kell, hogy térj a `>>>` prompthoz.

A Python promptból való kilépéshez és az operációs rendszerbe való visszatéréshez írd be az `exit()` parancsot, majd nyomd le az Enter billentyűt. Ha hibát követsz el, például elfelejted a zárójeleket akkor a képernyőn segítséget kapsz. Ha például beírod az exit parancsot, és megnyomod az Entert, akkor a következő jelenik meg:

`Use exit() or Ctrl-D (i.e. EOF) to exit.`

A kilépéshez használd az exit() vagy a Ctrl-D billentyűkombinációt.
Akkor tudod, hogy kiléptél a Python-interpreterből, ha a Terminal ablak végén nem `>>>`, hanem az operációs rendszer promptja jelenik meg.

## Python kód írása

Valószínűleg a kód túlnyomó többségét VS Code szerkesztőprogramban fogod írni.
Minden egyes Python kódfájlt amelyet létrehozol, egy egyszerű szövegfájl lesz `.py` fájlnévkiterjesztéssel. 

Hozzunk akkor létre egy `hello.py` kiterjesztésű fájlt és nyissuk meg.

Most, hogy létrehoztál egy `.py` fájlt, használhatod arra, hogy Python kódot írj. Ahogy az egy új programozási nyelv tanulásakor jellemző, egy egyszerű **Hello World** program begépelésével kezded. Itt vannak a lépések: 

Írd be a következőket a szerkesztési területre: 

```py
print("Hello World")
```

:::tip Információ
Gépelés közben észreveheted, hogy szöveg jelenik meg a képernyőn. Ez a szöveg az `IntelliSense`, amely érzékeli, hogy mit gépelsz be, és megjelenít néhány információt az adott kulcsszóról. Ezzel azonban semmit sem kell kezdened - csak gépelj tovább.
:::

### A kód elmentése

A VS Code-ban beírt kód nem kerül automatikusan mentésre. Ezt kétféleképpen lehet kezelni. Az egyik, hogy megpróbálsz emlékezni a mentésre minden alkalommal, amikor olyan módosítást végzel, amit érdemes elmenteni. Ennek legegyszerűbb módja, ha a VS Code menüsorából a File `=>` Save menüpontot választod, vagy Windowson a `Ctrl+S`, Macen pedig a `⌘+S` billentyűkombinációt nyomod le.

A második módszer, amely az `AutoSave` használatával automatikusan elmenti az általunk elvégzett módosításokat. Az automatikus mentés engedélyezéséhez válasszuk a VS Code menüsorában a File `=>` AutoSave menüpontot. Az Auto Save (automatikus mentés) melletti pipa azt jelenti, hogy be van kapcsolva. 

### Python futtatása VS Code-ban

A Python kód teszteléséhez a VS Code-ban futtatni kell a kódot. A legegyszerűbb módja ennek, ha jobb gombbal kattintasz a fájl nevére (ebben a példában `hello.py`), és a **Run Python File in Terminal** (Python fájl futtatása a terminálban) parancsot választod.