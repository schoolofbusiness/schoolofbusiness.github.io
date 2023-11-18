# 10. tananyag

:::tip 📚 EBBEN A FEJEZETBEN
- A kivételek megismerése
- A hibák helyes kezelése
- Az alkalmazás összeomlásának megakadályozása
- A `try` ... `except` ... `else` ... `finally` használata
- Saját kivételek készítése
:::

Mindannyian azt szeretnénk, hogy ha programjaink mindig tökéletesen futnának. De néha előfordulnak olyan helyzetek, amelyek megakadályozzák a program futását. A probléma nem a kódoddal vagy a programoddal van. Általában a programot használó személy csinált valamit rosszul. A hibakezelés lényege, hogy előre látjuk ezeket a problémákat, észleljük a hibát, majd tájékoztatjuk a felhasználókat a problémáról, hogy kitudják javítani azt.

Az itt leírt technikák nem a kódodban lévő hibák javítására szolgálnak. Az ilyen típusú hibákat magadnak kell kijavítanod. Szigorúan a program futtatási környezetében fellépő hibákról beszélünk, amelyekre nincs ráhatása. A hibakezelés egyszerűen csak egy módja annak, hogy a Python által általában megjelenített, a legtöbb ember számára értelmetlen, technikai nyelven megfogalmazott hibaüzenetet egy olyan üzenettel helyettesítsük, amely közérthetően elmondja, hogy mi a baj, és ideális esetben azt is, hogy hogyan javítsuk ki.

_Ismétlem, a felhasználó azt a környezetet javítja, amelyben a program fut - nem a kódodat javítja._

## A kivételek megértése

A Pythonban (és minden más programozási nyelvben) a kivétel kifejezés olyan hibára utal, amely nem programozási hiba miatt következik be. Inkább egy olyan hiba, amely megakadályozza a program megfelelő futását. Egy egyszerű példával élve, legyen a Python alkalmazásunk egy fájl megnyitása. Ennek szintaxisa egyszerű:

```py
name = open(filename)
```

A `name`-t helyettesítsük egy szabadon választott névvel, ugyanúgy, mint egy változó nevét. A `filename` helyettesítsük a fájl nevével. Ha a fájl ugyanabban a mappában van, mint a kód, nem kell megadnod a mappa elérési útvonalát, mert az aktuális mappát használja.

A példához a __VS Code__ programot használjuk, így látható a mappa tartalma, amelyben dolgozunk. A mappa tartalmaz egy `showfilecontents.py` nevű fájlt, amely az általunk írt Python-kódot tartalmazza. A másik fájl neve `people.csv`.

__people.csv tartalma:__

```csv
Username,FirstName,LastName,Role,DateJoined
Rambo,Rocco,Moe,0,3/1/2019
Ann,Annie,Angst,0,6/4/2019
Wil,Wilbur,Blomgren,0,2/28/2019
Lupe,Lupe,Gomez,1,4/2/2019
Ina,Ina,Kumar,1,1/15/2019
```


A `showfilecontents` fájl kódot tartalmaz. A `people.csv` fájl adatokat (az emberekre vonatkozó információkat) tartalmaz. A `people.csv` fájl tartalmát mutatjuk Excelben (fent), hogy könnyen olvasható legyen, és szövegszerkesztőben (lent), így néz ki a Python és más nyelvek számára. A fájl tartalma most nem sokat számít, amit itt megtanulsz, az bármilyen külső fájlban működni fog.

A Python kód mindössze két sor (a megjegyzéseket leszámítva), az alábbiak szerint:

```py
# Open file that's in this same folder.
thefile = open('people.csv')
# Show the filename.
print(thefile.name)
```

Az első kódsor megnyitja a `people.csv` nevű fájlt. A második kódsor megjeleníti a fájl nevét a képernyőn. Ennek az egyszerű `showfilecontents.py` fájlnak a futtatása (_a VS Code-ban a nevére jobb egérgombbal kattintva, majd a Python fájl futtatása a terminálban parancsot választva_) megjeleníti a `people.csv` fájlt a képernyőn - feltéve, hogy a megnyitandó mappában létezik egy `people.csv` nevű fájl. Ezután jön a kivételkezelés.


![people.csv](/assets/images/python/10/1.jpg)

Tegyük fel, hogy rajtad kívül álló okokból a `people.csv` fájl nincs ott, mert egy személy vagy egy automatizált eljárás elmulasztotta elhelyezni. Vagy esetleg valaki elírta a fájlnevet. Könnyen előfordulhat, hogy véletlenül mondjuk __.csv__ helyett __.cvs__-t írunk be a fájlnévhez. Az alkalmazás futtatása kivételt (_ami magyarul annyit jelent, hogy "hibaüzenetet jelenít meg"_) dob, amit a Terminal ablakban láthatunk:

```txt
Traceback (most recent call last):
  File "/Python/1.py", line 2, in <module>
    thefile = open('people.csv')
              ^^^^^^^^^^^^^^^^^^
FileNotFoundError: [Errno 2] No such file or directory: 'people.csv'
```

A `Traceback` egy utalás arra, hogy ha több kivétel lenne, akkor ezek mind fel lennének sorolva, és a legutóbbi lenne az első. Ebben az esetben csak egy kivétel van. A `File` rész azt mondja meg, hogy hol történt a kivétel, a `showfilecontents.py` fájl második sorában. A következő rész megmutatja a hibát okozó kódsort:

```py
thefile = open('people.csv')
```

Végül pedig maga a kivétel kerül leírásra: 

```txt
FileNotFoundError: [Errno 2] No such file or directory: 'people.csv'.
```

Az ilyen típusú hiba általános neve `FileNotFoundError`. Sok kivételhez egy szám is tartozik (_ebben a példában Errno 2_). A szám azonban az operációs rendszer környezetétől függően változhat, ezért általában nem használják a hibák kezelésére. Ebben az esetben a fő hiba a `FileNotFoundError`, és az a tény, hogy az Errno 2, ahol most vagyunk, nem számít.

:::tip throw or raise an exception ?!
Egyesek a __throw an exception__ (kivételt dob) kifejezést használják a __raise an exception__ (kivételt vált ki) helyett. A két kifejezés ugyanazt jelenti.
:::

Az utolsó rész pontosan megmondja, hogy mi romlott el: __No such file or directory: 'people.csv.'__. Más szóval a Python nem tudja elvégezni az `open('people.csv')` műveletet, mert nincs `people.csv` nevű fájl az aktuális mappában.

Ezt a problémát a kód megváltoztatásával orvosolhatod, de a __.csv__ egy általános fájlkiterjesztés a vesszővel elválasztott értékeket tartalmazó fájlok számára. Értelmesebb lenne a __people.cvs__ nevet __people.csv__-re változtatni, így megfelel annak, amit a program keres, és a __.csv__ kiterjesztés jól ismert.

## Hibák elegáns kezelése

A legjobb módja a __FileNotFoundError__ hiba kezelésének, ha a Python által általában megjelenített hiba helyett valami olyat adunk vissza, amit az alkalmazást használó személy valószínűleg jobban megért. Ehhez egy `try` `except` blokkot írhatsz a következő alapvető szintaxissal:

```py
try:     
  # The things you want the code to do
except Exception:     
  # What to do if it can't do what you want it to do
```

Íme, hogyan írhatod át a `showfilecontents.py` kódot a hiányzó (_vagy rosszul írt_) fájl hibájának kezelésére:

```py
try:
    # Open file and show its name.
    thefile = open("people.csv")
    print(thefile.name)
except Exception:
    print("Sorry, I don't see a file named people.csv here")
```

Mivel előfordulhat, hogy az a fájl, amelyet az alkalmazásnak meg kellene nyitnia, hiányzik, a `try:` paranccsal kezdjük, majd megpróbáljuk megnyitni az alatta lévő fájlt. Ha a fájl megnyílik, akkor a `print()` utasítás lefut, és megjeleníti a fájlnevet. Ha azonban a fájl megnyitásának kísérlete kivételt eredményez, a program egy általános hibaüzenetet jelenít meg. Ahelyett hogy egy olyan üzenetet jelenítene meg, amelyet az átlagos számítógép-felhasználó nem érthet.

```txt
Sorry, I don't see a file named people.csv here
```

## Beszéljünk pontosabban a kivételekről

Az előző kódpéldánk elegánsan kezelte a nem talált fájl hibát. Egy nagyobb alkalmazásban azonban több helyen is előfordulhat hiba, és minden egyes hibát másképp kell kezelni. Ehhez több kivételt is definiálhatunk, ahogyan azt a következőkben tárgyaljuk.

Tegyük fel, hogy manuálisan javítjuk a fájlnevet, hogy az eredetileg tervezett __people.csv__ legyen. Mint láttad, amikor futtatod a kódot, és nincs hiba, a kimenet csak a fájlnév. A fájlnevet kiíró sor alatt egy újabb kódsort adtunk hozzá:

```py
try:
    # Open file and show its name.
    thefile = open("people.csv")
    print(thefile.name)
    print(thefile.wookems())
except Exception:
    print("Sorry, I don't see a file named people.csv here")
```

Amikor ezt a kódot futtatod, a fájlnév nem jelent problémát, így a kimenet a __people.csv__ fájlt jeleníti meg, ahogyan azt várnád. A következő kódsor, a `print(thefile.wookems())` azonban hibát dob, mert nem definiáltunk `wookems()` nevű metódust. Sajnos a hibaüzenet továbbra is ugyanaz, mint korábban, pedig a hiba oka az, hogy a Pythonban nincs `.wookems()` nevű metódus:

```txt
people.csv
Sorry, I don't see a file named people.csv here
```

Akkor miért mondja a hibaüzenet, hogy a __people.csv__ nevű fájlt nem találták meg, amikor tudjuk, hogy megtalálta, és hogy a következő kódsor okozza a hibát? A probléma az `except Exception:` sorban van, amely azt mondja, hogy "ha ebben a try blokkban bármilyen kivétel keletkezik, akkor a _except_ sor alatti kódot kell végrehajtani".

Ahhoz, hogy ezt rendbe tegyük, az `Exception:` helyett a Python által elkapni kívánt konkrét kivételt kell megadnunk. De honnan tudjuk, hogy mi az a konkrét kivétel? Egyszerű. A kivétel, amelyet kivételkezelés nélkül dobott:

```txt
FileNotFoundError: [Errno 2] No such file or directory: 'people.csv'
```

Az első szó a kivétel neve, amelyet az általános Exception helyett használhatunk, például így:

```py
try:
    # Open file and show its name.
    thefile = open("people.csv")
    print(thefile.name)
    print(thefile.wookems())
except FileNotFoundError:
    print("Sorry, I don't see a file named people.csv here")
```

Igaz, a FileNotFoundError elkülönítése nem segít a nem létező metódus meghívásával kapcsolatban. A rossz metódusnév azonban nem kivétel. Ez egy programozási hiba, amelyet ki kell javítani a kódban a `.wookems()` helyettesítésével a használni kívánt metódusnévvel.

Legalább a megjelenő hibaüzenet nem a félrevezető _Sorry, I don't see a file named people.csv here_. A kód normálisan működik, ezért utasításra megjeleníti a fájlnevet. Aztán amikor eléri a rossz `.wookem()` metódust tartalmazó sort, hibát dob - de nem a fájlnév nem találásával kapcsolatos hibát. Megjeleníti a helyes hibaüzenetet erre a hibára, az objektumnak nincs __'wookems'__ attribútuma.

```py
Traceback (most recent call last):
  File "/Python/1.py", line 5, in <module>
    print(thefile.wookems())
          ^^^^^^^^^^^^^^^
AttributeError: '_io.TextIOWrapper' object has no attribute 'wookems'
```

Ismétlem, ha a `.wookems` hiba kezelésére gondolsz, ez nem olyan kivétel, amelyre __exception__ írsz. Kivételek akkor fordulnak elő, ha valami a programon kívül, amitől a program függ, nem elérhető. A programozási hibák, mint például a nem létező metódusnevek, a programon belüli hibák, amelyeket a kódot író programozónak kell kijavítania.

## Az alkalmazás összeomlásának megakadályozása

Egy try blokkban egymásra halmozhatod a except: utasításokat a különböző hibák kezelésére. Csak arra figyeljünk, hogy amikor a kivétel bekövetkezik, a program mindegyiket a tetejétől kezdve vizsgálja meg. Ha talál olyat, amely megfelel a kivételnek, akkor azt hívja elő. Ha olyan kivétel lépett fel, amely nem kezelt, akkor a Python standard hibaüzenetét kapjuk meg. De ezt is meg lehet kerülni.

Ha el akarjuk kerülni az összes Python hibaüzenetet, akkor a kód utolsó kivételét az `except Exception:` használjuk. Ez a sor azt jelenti: "Ha a bekövetkezett hibát még nem kezelte valamelyik előző kivétel, használd helyette az Exception". Más szóval, a __catch-all exception__ minden olyan kivételt kezel, amelyet a kódban még nem kezeltek. Itt például két kezelő van, egy a __file not found__ hibára és egy minden másra.

```py
try:
    # Open file and show its name.
    thefile = open("people.csv")
    # Print a couple blank lines then the first line from the file.
    print("\n\n", thefile.readline())
    # Close the file.
    thefile.closed()
except FileNotFoundError:
    print("Sorry, I don't see a file named people.csv here")
except Exception:
    print("Sorry, something else went wrong")
```

:::warning Tudjuk, hogy nem
tanultunk az `open`-ről, a `readline`-ról és a `close`-ról, de emiatt ne aggódjunk most. Jelen pillanatban csak a kivételkezeléssel foglalkozunk, ami a kód `try:` és `except:` részei.
:::

A kód futtatása a következő kimenetet eredményezi:

```txt
Username,FirstName,LastName,Role,DateJoined
Sorry, something else went wrong
```

Az első sor a _people.csv_ fájl első sorát jeleníti meg. A második sor a második except: utasítás kimenete, amely így szól: __Sorry, something else went wrong__. Ez az üzenet homályos, és nem segít a probléma megtalálásában.

Ahelyett, hogy csak egy általános üzenetet írna ki egy ismeretlen kivételre, a hibaüzenetet egy változóban rögzítheti, majd a változó tartalmát megjelenítve láthatja az üzenetet. Mint általában, a változót bárhogyan nevezheted, bár sokan használják az `e` vagy `err` nevet a hiba rövidítéseként.

Vegyük például az előző kód átalakításának következő változatát. Az Exception, most egy `e`-t tartalmaz, ami azt jelenti, hogy "a hibaüzenetet egy `e` nevű változóba tedd". Ezután a következő sor a `print(e)` segítségével jeleníti meg az `e` változó tartalmát:

```py
try:
    # Open file and show its name.
    thefile = open("people.csv")
    # Print a couple blank lines then the first line from the file.
    print("\n\n", thefile.readline())
    thefile.wigwam()
except FileNotFoundError:
    print("Sorry, I don't see a file named people.csv here")
except Exception as e:
    print(e)
```

A kód futtatása a következőket jeleníti meg:


```txt
Username,FirstName,LastName,Role,DateJoined
'_io.TextIOWrapper' object has no attribute 'wigwam'
```

Az első sor csak a __people.csv__ fájl első sora.
Nincs hiba a kódban, és az a fájl is megvan, tehát minden rendben ment. 

A második sor:

```txt
'_io.TextIOWrapper' object has no attribute 'wigwam'
```

Ez nem egyszerű, de jobb, mint a "Something else went wrong". Legalább az a rész, hogy az objektumnak nincs `'wigwam'` attribútuma, tudatja velünk, hogy a problémának köze van a `wigwam` szóhoz. A hibát elegánsan kezelted, és az alkalmazás nem omlott össze. Illetve kaptunk némi információt a hibáról, ami hasznos lehet számodra, még akkor is, ha nem biztos, hogy hasznos azoknak, akik az alkalmazást úgy használják, hogy nem ismerik annak belső működését.

## Egy `else` hozzáadása a mixhez

Az legutóbbi példánkban egy kivételt használtunk a nem talált fájl hibáinak kezelésére, és egy második kivételt minden másra. A való életben azonban előfordulhat, hogy sokkal több hibát kell kezelnünk. És ha nincs hiba, akkor azt szeretnénk, hogy a végrehajtás normálisan folytatódjon. Az `else`-t az utolsó feltételhez használhatod a következőképpen:

```py
try:     
The thing that might cause an exceptioncatch a common exception:
Explain the problem 
catch Exception as e:
Show the generic error message
else:
Continue on here only if no exceptions raised
```

Ha ezt a kódot egyszerűen lefordítjuk, a folyamat logikája a következő: 

Megpróbáljuk megnyitni a fájlt.
Ha a fájl nincs ott, szóljon, és álljon le.
Ha valami más hiba van, mutassa az általános hibaüzenetet, és állítsa le.
Ellenkező esetben
Folytassa a kód többi részét.

Ha a `try:`-t arra a dologra korlátozzuk, ami a legnagyobb valószínűséggel kivételt fog kiváltani, akkor megállíthatjuk a kódot, mielőtt tovább próbálkozna. Ha azonban nem történik kivétel, a kód normálisan folytatódik tovább, az `else` alatt, ahol a korábbi kivételek már nem számítanak. Itt van az összes kód, kommentárokkal, amelyek elmagyarázzák, mi történik:

```py
try:
    # Open the file named people.csv
    thefile = open("people.csv")
# Watch for common error and stop program if it happens.
except FileNotFoundError:
    print("Sorry, I don't see a file named people.csv here")
# Catch any unexpected error and stop the program if one happens.
except Exception as err:
    print(err)
# Otherwise, if nothing bad has happened by now, just keep going.
else:
    # File must be open by now if we got here.
    print("\n")  # Print a blank line.
    # Print each line from the file.
    for one_line in thefile:
        print(one_line)
    thefile.close()
    print("Success!")
```


:::danger ❗
Mint mindig a Pythonban, a behúzások sokat számítanak. Győződj meg róla, hogy a kódodat a fejezetben bemutatott módon behúzod. Ellenkező esetben a kódod nem fog megfelelően működni.
:::


## A try ... except ... else ... finally használata

Ha megnézzük a Python kivételkezelés teljes szintaxisát, a végén még egy opciót találunk, például ezt:

```py
try:    
try to do this
except:
if x happens, stop here
except Exception as e:    
if something else bad happens, stop here
else:    
if no exceptions, continue on normally here
finally:    
do this code no matter what happened above
```

A `finally` kód akkor kerül végrehajtásra, amikor a `try` blokk véget ér, függetlenül attól, hogy mi történik. Ha például egy függvényen belül vagy, és egy `except` blokk a `return`-t használja a függvényből való kilépéshez, a `finally` kód akkor is végrehajtódik. Ilyen funkció nélkül a `finally` blokk egyenértékű lenne azzal, hogy a kódját a `try` blokk után és azon kívül helyezzük el.

Ennek illusztrálására itt van néhány kód, amely elvárja, hogy a __people.csv__ nevű külső erőforrás elérhető legyen a kód számára:

```py
print("Do this first")
try:
    open("people.csv")
except FileNotFoundError:
    print("Cannot find file named people.csv")
except Exception as e:
    print(e)
else:
    print("Show this if there is no exception.")
finally:
    print("This is in the finally block")
    print("This is outside the try...except...else...finally")
```

Ha ezt a kódot futtatjuk a mappában lévő __people.csv__ nevű fájllal, ezt a kimenetet kapja:

```txt
Do this first
Show this if no exception.
This is in the finally block
This is outside the try...except...else...finally
```

Egyik kivételtjelentő kód sem hajtódott végre, mivel az `open()` utasítás képes volt megnyitni a __people.csv__ nevű fájlt.
Ha ezt a kódot úgy futtatja, hogy nincs __people.csv__ nevű fájl ugyanabban a mappában, a következő eredményt kapja:

```txt
Do this first
Cannot find file named people.csv
This is in the finally block
This is outside the try...except...else...finally
```

Ezúttal a kód nem találja a __people.csv__ nevű fájlt. De az alkalmazás nem zuhan össze. Inkább folytatja a kód többi részének végrehajtását.

Ezek a példák jól szemléltetik, hogy pontosan hogyan szabályozhatjuk, mi történjen a felhasználói hibákra vagy más külső kivételekre érzékeny program egy kis részében, miközben a többi kódot normálisan futtathatjuk.

## Saját kivételek készítése

A Python rengeteg beépített kivétellel rendelkezik a hibák felismerésére és azonosítására, amint azt a kód írása és tesztelése során látni fogod, különösen az első tanuláskor. Azonban nem korlátozódsz a beépített kivételekre. Ha az alkalmazásodban olyan sebezhetőség van, amelyre a beépített kivételek nem terjednek ki, akkor készíthetsz egy sajátot.

A saját hiba készítése általános szintaxisa a következő:

```py
raise error
```

Az `error`-t helyettesítsük annak az ismert hibának a nevével, amelyet ki akarunk váltani (például `FileNotFoundError`). Vagy, ha a hiba nem tartozik a beépített hibák közé, akkor egyszerűen használhatja a `raise Exception`-t, és ez végrehajtja azt, ami a `catch Exception:` alatt van a kódban.

Mondjuk, hogy két feltételnek kell teljesülnie ahhoz, hogy a program sikeresen fusson: 

- A people.csv fájlnak léteznie kell, hogy meg tudja nyitni.
- A people.csv fájlnak egynél több adatsort kell tartalmaznia. Az első sor oszlopneveket tartalmaz, nem adatokat, így ha a fájl csak oszlopcímeket tartalmaz, akkor üresnek tekintjük.

Íme egy példa arra, hogyan kezelhetjük a helyzet kivételkezelő részét:

```py
try:
    # Open the file
    thefile = open("people.csv")
    # Count the number of lines in file.
    line_count = len(thefile.readlines())
    # If there are fewer than 2 lines, raise exception.
    if line_count < 2:
        raise Exception
    # Handles missing file error.
except FileNotFoundError:
    print("\nThere is no people.csv file here")
# Handles all other exceptions
except Exception as e:
    # Show the error.
    print("\n\nFailed: The error was " + str(e))
    # Close the file.
    thefile.close()
```

Nézzük végig a kódot. Az első sorok a __people.csv__ fájlt próbálják megnyitni:

```py
try:
    # Open the file
    thefile = open("people.csv")
```

Tudjuk, hogy ha a __people.csv__ fájl nem létezik, a végrehajtás a következő kivételhez ugrik, amely közli a felhasználóval, hogy a fájl nem létezik:

```py
except FileNotFoundError:
    print("\nThere is no people.csv file here")
```

Feltételezve, hogy a fájl meg lett találva, és nem történt hiba, és a fájl most nyitva van, a következő sor megszámolja, hogy hány sor van a fájlban:

```py
line_count = len(thefile.readlines())
```

Ha a fájl üres, a sorokszáma 0. Ha a fájl csak oszlopcímeket tartalmaz, például így:

```txt
Username,FirstName,LastName,DateJoined
```

a hossz 1 lesz. Azt akarjuk, hogy a kód többi része csak akkor fusson, ha a fájl hossza 2 vagy több. Tehát ha a sorszám 2-nél kevesebb, a kód kivételt fog generálni. Lehet, hogy nem tudod, hogy mi ez a kivétel, ezért a `raise Exception` (nagy E-vel) segítségével közlöd az alkalmazásnak, hogy egy általános kivételt dobjon:

```py
if line_count < 2:
        raise Exception
```

Az általános kivételek így néznek ki:

```py
except Exception as e:
    # Show the error.
    print("\n\nFailed: The error was " + str(e))
    # Close the file.
    thefile.close()
```

Az `e` változó megragadja a kivételt, és a következő `print` utasítás megjeleníti a kivételt. Tegyük fel, hogy lefuttatjuk ezt a kódot, és a __people.csv__ üres vagy hiányos. A kimenet a következő lenne:

```txt
Failed: The error was
```

Megjegyezzük, hogy nincs magyarázat a hibára, mert mi a

```py
except Exception as e:
```

használjuk.

Ne feledjük, hogy az `Exception` bármilyen hibára vonatkozik, nem pedig olyan hibára, amelynek konkrét neve az `e` nevű változóban van tárolva. Ha olyan hibát szeretnénk dobni, amelyhez hibaüzenet is tartozik, helyettesítsük az `Exceptiont` egy konkrét Python kivétel nevével. Az alábbi kódban például az általános `Exceptiont` a specifikusabb `FileNotFoundError`-ra cseréltük:

```py
if line_count < 2:    
  raise FileNotFoundError
```

De ha ezt így csináljuk, akkor a `FileNotFoundError` meghívásra kerül, és megjeleníti a __There is no people.csv file__, ami ebben az esetben nem igaz, és nem ez a probléma oka. Van __people.csv__ fájl, csak nincs rajta adat, amin végighaladhatnánk. Amire szükséged van, az egy egyéni kivételkezelő erre a kivételre.

Pythonban minden kivétel objektum, olyan osztályok példányai, amelyek a Pythonban az `Errors` alaposztályból öröklődnek. A saját kivétel létrehozásához először is importálni kell az `Exception` osztályt, hogy alaposztályként használhassuk (_hasonlóan ahhoz, ahogy a `Member` osztály is alaposztály volt a különböző típusú felhasználók számára_). Ezután definiáljuk a hibánkat ennek az alaposztálynak az alosztályaként. Ez a kód a fájl elejére kerül, így azelőtt végrehajtódik, mielőtt bármely más kód megpróbálná használni az egyéni kivételt:

```py
# Define Python user-defined exceptions
class Error(Exception):    
  """Base class for other exceptions"""
      pass 

# Your custom error (inherits from Error)
class EmptyFileError(Error):
      pass
```

Mint korábban már volt róla szó, hogy a `pass` minden osztályban azt mondja a Pythonnak, hogy __"Tudom, hogy ebben az osztályban nincs kód, és ez itt rendben van. Nem kell kivételt generálnod, hogy ezt közöld velem"__.
Most, hogy létezik egy `EmptyFileError` nevű kivételosztály, ezt a kivételt akkor is ki lehet váltani, ha a fájlnak nincs elegendő tartalma:

```py
# If there are fewer than 2 lines, raise exception.
if line_count < 2:
  raise EmptyFileError
# Handles my custom error for too few rows.
except EmptyFileError:    
  print("\nYour people.csv file doesn't have enough stuff.")
```

A következőképp alakulnak a dolgok, amikor a kód fut. Ha egyáltalán nincs __people.csv__ fájl, akkor ez a hiba jelenik meg:

```txt
There is no people.csv file here.
```

Ha van __people.csv__ fájl, de az üres vagy csak oszlopcímeket tartalmaz, a program a következőket jeleníti meg:

```txt
Your people.csv file doesn't have enough stuff.
```

Feltételezve, hogy egyik hiba sem történt meg, az `else:` alatti kód lefut, és megjeleníti a fájlban lévő adatokat.

Amint láthatod, a kivételkezeléssel tehát megtervezheted a kódodban lévő sebezhetőségek által okozott hibákat. Nem a kódodban lévő hibákra vagy kódolási hibákra gondolunk, hanem olyan külső erőforrásokra, amelyekre a programnak szüksége van a helyes futáshoz.

A teljes kód:

```py
# Define Python user-defined exceptions
class Error(Exception):
    """Base class for other exceptions"""
    pass


# Your custom error (inherits from Error)
class EmptyFileError(Error):
    pass

try:
    # Open the file
    thefile = open("people.csv", "r")
    # Count the number of lines in file.
    lines = thefile.readlines()
    line_count = len(lines)
    # If there are fewer than 2 lines, raise exception.
    if line_count < 2:
        raise EmptyFileError
# Handles missing file error.
except FileNotFoundError:
    print("\nThere is no people.csv file here")
except EmptyFileError:
    print("\nYour people.csv file doesn't have enough stuff.")
except Exception as e:
    # Show the error.
    print("\n\nFailed: The error was " + str(e))
    # Close the file.
    thefile.close()
else:
    # File must be open by now if we got here.
    print("\n")  # Print a blank line.

    # Print each line from the file.
    for one_line in lines:
        print(one_line)
    thefile.close()
    print("Success!")
```

Ha a külső erőforrások hiányoznak vagy nem elegendőek, nem kell hagynod, hogy a program egyszerűen összeomoljon, és egy hibaüzenetet jelenítsen meg, amely zavarba hozza a felhasználóidat. Ehelyett elkaphatjuk a kivételt, és megjeleníthetünk a felhasználóknak egy szöveget, amely pontosan megmondja neki, hogy mi a baj, ami segíthet a probléma kijavításában, és a program újbóli, ezúttal sikeres futtatásában. Erről szól a kivételkezelés.