# 7. tananyag 

## Ismerkedés a funkciókkal


Ebben a fejezetben

- Írásfunkciók
- Funkciók dokumentálása
- Paraméterek átadása
- Értékek visszaadása
- Programok szervezése függvényekkel

A függvények segítenek csökkenteni a kód ismétlődését azáltal, hogy a gyakran használt kódrészeket újrafelhasználható részekké alakítják. Ebben a fejezetben írsz néhány függvényt, és használod őket, hogy az egyébként unalmas feladatokat egyszerűvé és szórakoztatóvá tedd!

### A funkciók megértése

A függvények mini programok a programokon belül. A függvények a főprogramon belül bizonyos feladatok elvégzésére szolgálnak, amelyekre a program különböző részeinek többször is szükségük lehet.

Ha elolvastad az előző fejezetek bármelyikét, láthattál néhány függvényt működés közben. A következő példa egy egyszerű függvény, amely futtatásakor egyszerűen hozzáad egy z-t egy karakterlánc végéhez.

```js
function addZ(astring) { 
    aString += "z";
    return aString;
}
```

A funkció kipróbálásához kövesd az alábbi lépéseket:

1. Nyisd meg a JavaScript konzolt a Chrome-ban.

2. Írd be a funkciót.
Beírhatod az egészet egy sorban, vagy minden sor után megnyomhatod a Shift+Enter vagy a Shift+Return billentyűkombinációt, hogy a kód végrehajtása nélkül sortörést hozzon létre.

3. Nyomd meg a Return vagy az Enter billentyűt az utolsó görbe zárójel után. A konzolnak ki kell írnia, hogy undefined.

4. A függvény futtatásához írd be a következő parancsot, majd a Return vagy az Enter billentyűt:

```js
addZ("I have JavaScript skill");
```

A függvények a JavaScript programozás alapvető részét képezik, és a
sok szabály és különleges képesség, amelyekkel JavaScript-kódolóként tisztában kell lenned. Ne aggódj, ha nem vagy képes megjegyezni minden egyes részletet a függvényekről. Némi gyakorlásra lesz szükség ahhoz, hogy megérts néhány absztraktabb fogalmat, és még az is lehet, hogy újra el kell olvasnod ezt a fejezetet. Végül minden világos lesz számodra, csak tarts ki!

### Funkcionális kifejezések használata

A programozók számos olyan szót használnak, amelyeket fontos megérteni, amikor függvényekről beszélnek. Ezeket a szavakat ebben a fejezetben és a könyvben is gyakran használjuk. A következő lista egy gyors összefoglaló néhány szakkifejezésről, amelyekkel találkozhatsz, amikor függvényekkel dolgozol.

### Definiálj egy függvényt

Amikor egy függvény megjelenik a JavaScript-kódban, nem fut le. Egyszerűen csak létrehozzuk és elérhetővé tesszük későbbi használatra. A függvény létrehozását, hogy később felhasználható legyen, függvény definiálásának nevezzük.
Egy függvényt csak egyszer kell definiálni egy programban vagy egy weboldalon. Ha azonban véletlenül többször definiáljuk ugyanazt a függvényt, a JavaScript nem fog reklamálni. Egyszerűen a függvény legutóbb definiált változatát fogja használni.

```js
var myFunction = new Function() { };
```

vagy

```js
function myFunction(){ };
```

### Függvényfej

A függvényfej a függvénydefiníciónak az a része, amely tartalmazza a függvény kulcsszavát, a függvény nevét és a zárójeleket.

Például:

```js
function myFunction()
```

### Függvény törzse

A függvény törzsét a függvény szögletes zárójelek közötti utasítások alkotják.

Például:

```js
{
  // function body
}
```

### Függvény hívása

Amikor egy függvényt használsz, azt hívjuk a függvény meghívásának. A függvény meghívása a függvénytestben lévő utasítások végrehajtását eredményezi.

Például:

```js
myFunction();
```

Paraméterek definiálása és argumentumok átadása

A paraméterek olyan nevek, amelyeket olyan adatdaraboknak adunk, amelyeket egy függvény meghívásakor adunk meg. Az argumentumok a függvényeknek megadott értékek. Amikor egy függvényt argumentumokkal hívunk meg (a függvény megadott paraméterei szerint), a programozók ezt úgy nevezik, hogy az argumentumok átadása a függvénynek.

A paraméterek meghatározásának szintaxisa a következő:

```js
function myFunction(parameter) { }
```

A függvények argumentummal történő hívásának szintaxisa a következő:

```js
myFunction(myArgument);
```

### Értékvisszaadás

Amellett, hogy a függvények képesek a külvilágtól bemenetet fogadni, a futás befejezése után értékeket is küldhetnek vissza. Amikor egy függvény visszaküld valamit, azt értékvisszaadásnak nevezzük.

Egy érték visszaadásához használd a return kulcsszót. 

Például:

```js
return myValue;
```

### A funkciók használatának előnyei

```html
<html>
  <head>
    <title>Get the total</title>
  </head>
  <body>
    <script>
      var myNumbers = [2, 4, 2, 7];
      var total = 0;
      for (oneNumber in myNumbers) {
        total = total + myNumbers[oneNumber];
      }
      document.write(total);
    </script>
  </body>
</html>
```

Ha azonban több összeadandó számsorozatunk lenne, akkor minden egyes új számsorozathoz egy új ciklus utasítást kellene írnunk.

```html
<html>
  <head>
    <title>Get the sum</title>
  </head>
  <body>
    <script>
      /**
        *Adds elements in an array
        *@param {Array.<number>} numbersToAdd 
        *@return {Number} sum
      */
      function addNumbers(numbersToAdd) {
        var sum = 0;
        for (oneNumber in numbersToAdd) {
          sum = sum + numbersToAdd[oneNumber];
        }
        return sum;
      }
      var myNumbers = [2, 4, 2, 7];
      var myNumbers2 = [3333, 222, 111];
      var myNumbers3 = [777, 555, 777, 555];
      var sum1 = addNumbers(myNumbers);
      var sum2 = addNumbers(myNumbers2);
      var sum3 = addNumbers(myNumbers3);
      document.write(sum1 + " <br>"); 
      document.write(sum2 + " <br>"); 
      document.write(sum3 + " <br>");
    </script>
  </body>
</html>
```

### JavaScript dokumentálása JSDoc segítségével

Jó gyakorlat, hogy a JavaScript kódot mindig szabványos rendszerrel dokumentáljuk. A legszélesebb körben használt JavaScript dokumentációs rendszer, és így a de facto szabvány a JSDoc.

A JSDoc nyelv egy egyszerű jelölőnyelv, amelyet a JavaScript-fájlok belsejébe lehet beilleszteni. A JSDoc jelenleg harmadik verziója a JavaDoc rendszeren alapul, amelyet a Java programozási nyelven írt kód dokumentálására használnak.
Miután a JavaScript-fájlokat JSDoc-kal megjegyzésekkel látta el, a kódot dokumentáló HTML-fájlok létrehozásához használhatsz egy dokumentáció-generátort, például a jsdoc-toolkit-et.

A JSDoc-jelölés speciális blokkkommentáló címkékbe kerül. Az egyetlen különbség a JSDoc-jelölés és a normál JavaScript blokkkommentárok között az, hogy a JSDoc-jelölés /**-mal kezdődik és */-vel végződik, míg a normál JavaScript-blokkkommentárok csak egy csillagot igényelnek a kezdővonal után. A JSDoc-jelölésekben lévő extra csillag lehetővé teszi, hogy normál blokkidézőjeleket hozzon létre anélkül, hogy azok a generált dokumentáció részét képeznék.

Az ábra a nyílt forráskódú Angular JS JavaScript keretrendszer néhány kódját mutatja, amelyet a JSDoc segítségével jegyzeteltünk.

Egy program különböző részei és aspektusai dokumentálhatók a JSDoc segítségével JDDoc címkékkel. Itt vannak a legnépszerűbb címkék:

|   JSDoc Tag  |                                         Magyarázat                                         |
|:------------:|:------------------------------------------------------------------------------------------:|
|    @author   |                                      A programozó neve                                     |
| @constructor |                             Jelzi, hogy a függvény konstruktor.                            |
|  @deprecated |                                Jelzi, hogy a módszer elavult                               |
|  @exception  |               Egy metódus által dobott kivételt ír le; a @throws szinonimája.              |
|   @exports   |                    Meghatároz egy olyan tagot, amelyet a modul exportál.                   |
|    @param    |                               Egy metódus paraméterét írja le                              |
|   @private   |                                Egy tag privát jellegét jelzi                               |
|    @return   |                   Egy visszatérési értéket ír le. A @returns szinonimája                   |
|   @returns   |                    Leír egy visszatérési értéket. A @return szinonimája                    |
|     @see     |                      Egy másik objektumhoz való hozzárendelést rögzít                      |
|     @this    | Megadja annak az objektumnak a típusát, amelyre a this kulcsszó utal egy függvényen belül. |
|    @throws   |                          Egy metódus által dobott kivételt ír le.                          |
|   @version   |                              Megadja egy könyvtár verziószámát                             |

A funkciók nagyszerű idő-, munka- és helytakarékosságot jelentenek. Egy hasznos függvény megírása kezdetben hosszabb időt vehet igénybe, mint a függvényeken kívüli JavaScript-kód megírása, de hosszú távon a programjaid jobban szervezettek lesznek, és sok fejfájástól kíméled meg magad, ha rászoksz a függvények írására.

### Funkciók írása

A függvénydeklarációt meghatározott sorrendben kell megírni. A függvénydeklaráció a következő elemekből áll, ebben a sorrendben:

- Funkció kulcsszó
- A függvény neve
- Zárójelek, amelyek egy vagy több paramétert tartalmazhatnak. 
- utasításokat tartalmazó szögletes zárójelek párja

Néha egy függvénynek az a célja, hogy egy üzenetet írjon a képernyőre egy weboldalon. Egy példa arra, amikor egy ilyen függvény hasznos lehet, az aktuális dátum megjelenítése. A következő példafüggvény kiírja az aktuális dátumot a böngésző ablakába:

```js
function getTheDate(){
  var rightNow = newDate(); 
  document.write(rightNow.toDateString());
}
```

Kövesd az alábbi lépéseket a funkció kipróbálásához:

1. Nyisd meg a JavaScript konzolt a Chrome-ban.

2. Írd be a funkciót a konzolba.
Használd a Shift + Return (vagy Shift + Enter) billentyűkombinációt minden egyes sor beírása után, hogy a kód végrehajtása nélkül sortörést hozz létre a konzolon.

3. Az utolsó `}` beírása után nyomd le a Return (vagy Enter) billentyűt a kód futtatásához.
Vedd észre, hogy semmi sem történik, kivéve, hogy a konzolon megjelenik az `undefined` szó, amely tudatja, hogy a függvényt elfogadták, de nem adott vissza értéket.

4. Hívd meg a függvényt a függvény nevének (`getTheDate`) beírásával, amelyet zárójel, majd pontosvessző követ:

```js
  getTheDate();
```

A függvény kiírja az aktuális dátumot és időt a böngészőablakba, majd a konzolon megjelenik a undefined, mivel a függvénynek nincs visszatérési értéke; célja egyszerűen a dátum kiírása a böngészőablakba.

:::tip Megjegyzés
A függvények alapértelmezett visszatérési értéke undefined, tehát technikailag az undefined egy visszatérési érték.
:::

Visszatérési értékek

Az előző szakaszban bemutatott példában egy olyan függvényt hozunk létre, amely csak egy karakterláncot ír ki a böngésző ablakába. Az egyetlen `document.write` utasítás végrehajtása után nincs több futtatandó utasítás, ezért a program kilép a függvényből, és a függvényhívás után a következő utasítással folytatódik.

A legtöbb függvény a munka elvégzése után visszaad egy értéket (a meghatározatlanon kívül). Ezt az értéket aztán felhasználhatod a program többi részében. A minta egy olyan függvényt mutat, amely visszaad egy értéket. A függvény visszatérési értékét ezután egy változóhoz rendeljük, és kiírjuk a konzolra.

```js
function getHello() {
    return "Hello!";
}
var helloText = getHello();
console.log(helloText);
```

A `return` utasítás általában az utolsó utasítás a függvényben. Amikor végrehajtódik, a függvény kilép. A `return` utasítással bármilyen típusú literális értéket (például "Hello!" vagy 3) küldhetsz a függvényen kívülre, vagy visszaadhatod egy változó, kifejezés, tömb vagy objektum értékét, vagy akár egy másik függvény értékét is!


```js
function getCircumference() {
    var radius = 12;
    return 2 * Math.PI * radius;
}

console.log(getCircumference());
```

### Argumentumok átadása és használata

Ahhoz, hogy a függvények különböző bemenetekkel ugyanazt a dolgot tudják elvégezni, szükségük van arra, hogy a programozók megadhassák nekik a bemenetet. 

A fejezet korábbi látott kódjaiban a függvény neve után a deklarációban a zárójelek a függvény paramétereinek megadására szolgálnak.

:::warning Fontos!
A paraméterek és az argumentumok közötti különbség elsőre zavaró lehet. A következőképpen működik:

- A paraméterek a függvény definíciójában megadott nevek.
- Az argumentumok a függvénynek átadott értékek. Ezek az értékek a paraméterek nevét veszik fel, amikor átadjuk őket.
:::

Amikor egy függvényt hívsz, adatokat (argumentumokat) adsz meg azokon a helyeken, ahol a függvénydefiníciónak paraméterei vannak. Vedd figyelembe, hogy az átadott argumentumok a függvénynek átadott argumentumokat ugyanabban a sorrendben kell felsorolni, mint a függvénydefinícióban szereplő paramétereket.

A következő függvényben két paramétert definiálunk a `myTacos` függvényhez:

```js
function myTacos(meat,produce){ 
  ...
}
```

Amikor ezt a függvényt hívod, adatokat (argumentumokat) adsz meg azokon a helyeken, ahol a függvénydefiníciónak paraméterei vannak. Vedd figyelembe, hogy a függvénynek átadott argumentumokat ugyanabban a sorrendben kell felsorolni, mint a függvénydefinícióban szereplő paramétereket:

```js
myTacos("beef","onions");
```

A függvénynek átadott értékek lesznek a függvényen belüli helyi változók értékei, és megkapják a függvény paramétereinek nevét.

A myTacos függvényt, hogy a két argumentum értékét kiírja a konzolra. Az argumentum átadása olyan, mintha egy `var` utasítást használnánk a függvényen belül, azzal a különbséggel, hogy az értékek a függvényen kívülről is származhatnak.

```js
function myTacos(meat, produce) {
    console.log(meat); // writes "beef"
    console.log(produce); // writes "onions" 
}

myTacos("beef", "onions");
```

:::tip Megjegyzés
Egy függvénydefinícióban legfeljebb 255 paramétert adhatsz meg. Azonban nagyon ritka, hogy olyan függvényt kelljen írni, amely közel ennyi paramétert vesz fel! Csak a kódod tisztán és áttekinthetően tartása érdekében, ha úgy találod, hogy sok paraméterre van szükséged, érdemes elgondolkodnod azon, hogy van-e jobb megoldás.
:::

### Argumentumok átadása értékkel

Ha egy primitív adattípusú változót használsz az argumentum átadásához, az argumentum érték szerint adódik át. Ez azt jelenti, hogy a függvényen belül létrehozott új változó teljesen elkülönül az argumentum átadásához használt változótól, és bármi történik is az érték függvénybe kerülése után, a függvényen kívüli változó nem változik.

:::danger Fontos❗
A JavaScript primitív adattípusai a `string`, a `number`, a `Boolean`, a `undefined` és a `null`.
:::

Láthatjuk, hogy több változót hozunk létre, értékeket adunk nekik, majd átadjuk őket egy függvénynek. Ebben az esetben a függvény paramétereinek ugyanazok a nevei, mint az argumentumok átadásához használt változóknak. Bár a függvényen belüli változók értékei megváltoznak, az eredeti változók értékei ugyanazok maradnak.

```html
<html>
  <head>
    <title>Arguments Passed By Value</title>
  </head>
  <body>
    <script>
      /**
       * Increments two numbers
       * @param {number} number1
       * @param {number} number2
       */
      function addToMyNumbers(number1, number2) {
        number1++;
        number2++;
        console.log("number 1: " + number1);
        console.log("number 2: " + number2);
      }

      var number1 = 3;
      var number2 = 12;

      addToMyNumbers(number1, number2); // pass the arguments

      console.log("original number1: " + number1);
      console.log("original number2: " + number2);
    </script>
  </body>
</html>
```


__Kimenete:__

```txt
number 1: 4
number 2: 13
original number1: 3
original number2: 12
```

### Argumentumok átadása hivatkozással

Míg a JavaScript primitív változókat (karakterláncok, számok, Boolean, undefined és null) értékkel adjuk át a függvényeknek, addig a JavaScript objektumokat hivatkozással adjuk át. Ez azt jelenti, hogy ha egy objektumot adsz át argumentumként egy függvénynek, akkor az objektum függvényen belüli bármilyen módosítása a függvényen kívüli értékét is megváltoztatja. A hivatkozással történő átadás következményei és felhasználási lehetőségei meghaladják e fejezet kereteit, de a 8. fejezetben tárgyaljuk őket.

### Egy függvény hívása az összes argumentumok nélkül

Nem kell mindig ugyanannyi paraméterrel hívni egy függvényt, mint amennyi a függvény definíciójában szerepel. Ha egy függvénydefiníció három paramétert tartalmaz, de csak kettővel hívod meg, a harmadik paraméter egy meghatározatlan értékű változót hoz létre a függvényben.

### Alapértelmezett paraméterértékek beállítása

Ha azt szeretnéd, hogy az argumentumok alapértelmezett értéke ne legyen definiálatlan, akkor beállíthatsz alapértelmezett értékeket. A legszélesebb körben támogatott és általánosan elfogadott módja ennek az, hogy a függvény értékén belül teszteled az argumentumokat, és alapértelmezett értékeket állítasz be, ha az argumentum adattípusa meghatározatlan.

A példában a függvény egy paramétert vesz fel. A függvényen belül teszteléssel ellenőrizzük, hogy az argumentum nem definiálatlan. Ha igen, akkor alapértelmezett értéket kap.

```js
function welcome(yourName) {
  if (typeof yourName === 'undefined'){
    yourName = "friend"; 
  }
}
```

A JavaScript, ECMAScript 6 nevű verziójában lehetőségünk lesz a függvényfejben lévő paraméterek alapértelmezett értékeinek beállítására.

```js
function welcome(yourName = "friend") { 
  document.write("Hello," + yourName);
}
```

Egy függvény hívása több argumentummal mint paraméterrel

Ha egy függvényt a paraméterek számánál több argumentummal hívunk meg, a további argumentumokhoz nem jönnek létre helyi változók, mivel a függvény nem tudja, hogyan hívja őket.

Van egy ügyes trükk, amivel lekérdezhetjük a függvénynek átadott, de megfelelő paraméterrel nem rendelkező argumentumok értékeit: az Argument-objektum.

### Bevezetés az argumentumokba az argumentum objektel 

Ha nem tudjuk, hogy hány argumentumot adunk át egy függvénybe, akkor a JavaScript által a függvényekbe beépített argumentumobjektummal az összes argumentumot lekérdezhetjük és felhasználhatjuk.


Az Arguments objektum a függvénynek átadott összes argumentumot tartalmazó tömböt tartalmazza. A tömbön való végighaladással (a for ciklus vagy a for ... in ciklus segítségével) minden argumentumot felhasználhatunk, még akkor is, ha az argumentumok száma a függvény meghívásakor változhat.

A példában az Arguments objektum használatát mutatja be egy üdvözlő üzenet bemutatására egy két középső névvel rendelkező és egy egy középső névvel rendelkező személy számára.


```html
<html>
  <head>
    <title>Welcome Message</title>
  </head>
  <body>
    <script>
      function flexibleWelcome() {
        var welcome = "Welcome,";
        for (i = 0; i < arguments.length; i++) {
          welcome = welcome + arguments[i] + " ";
        }
        return welcome;
      }
      document.write(flexibleWelcome("Christopher", "James", "Phoenix", "Minnick") + "<br>");
      document.write(flexibleWelcome("Eva ", "Ann ", "Holland") + "<br>");
    </script>
  </body>
</html>
```

### Funkció hatókör

A függvényen belül argumentumok átadásával vagy a var kulcsszó használatával létrehozott változók csak az adott függvényen belül állnak rendelkezésre. A programozók a JavaScript függvény hatókörének nevezik ezt a tulajdonságot. A függvényen belül létrehozott változók a függvény kilépésekor megsemmisülnek.

Ha azonban függvényen belül hozol létre változót a var kulcsszó használata nélkül, akkor az a változó globális változóvá válik, és a programban bárhol módosítható és elérhető.

A globális változók véletlen létrehozása számos JavaScript-hiba és -hiba forrása, ezért ajánlott, hogy a változókat mindig megfelelően határold le, és soha ne hozz létre globális változót, hacsak nem feltétlenül szükséges.

### Névtelen funkció

A függvényfej függvénynév része nem szükséges, és létrehozhatsz név nélküli függvényeket is. Ez furcsa dolognak tűnhet, mert egy név nélküli függvény olyan, mint egy kutya név nélkül; nem tudod hívni! Az __anonim__ függvényeket azonban létrehozásukkor hozzárendelhetjük változókhoz, ami ugyanazokat a lehetőségeket nyújtja, mintha a függvényfejben nevet használnánk:

```js
var doTheThing = function(thingToDo) {
	document.write("I will do this thing: " + thingToDo);
}
```

### A különbségek ismerete a névtelen és név nélküli függvények között

Van néhány fontos és néha hasznos különbség egy nevesített függvény létrehozása és egy névtelen függvény hozzárendelése egy változóhoz. Az első az, hogy a változóhoz rendelt névtelen függvény csak akkor létezik, és csak akkor hívható meg, ha a program végrehajtja a hozzárendelést. A megnevezett függvények a programban bárhol elérhetők.

A második különbség a megnevezett függvények és a változókhoz rendelt névtelen függvények között az, hogy bármikor megváltoztathatjuk egy változó értékét, és más függvényt rendelhetünk hozzá. Ez teszi a változókhoz rendelt névtelen függvényeket rugalmasabbá, mint a megnevezett függvényeket.

### Önvégrehajtó anonim függvények

Az __anonim__ függvények másik felhasználási módja az önvégző függvények. Az önvégző anonim függvény olyan függvény, amely a létrehozását követően azonnal végrehajtódik.

Ahhoz, hogy egy normál névtelen függvényt önvégző függvénnyé alakítsunk, egyszerűen zárójelekbe kell zárnunk a névtelen függvényt, és egy zárójelet és pontosvesszőt kell utána tennünk.

Az önvégző névtelen függvények használatának előnye, hogy a bennük létrehozott változók a függvény kilépésével megsemmisülnek. Ily módon elkerülhetjük a változónevek közötti konfliktusokat, és elkerülhetjük, hogy a változókat a memóriában tartsuk, miután már nincs rájuk szükség. A következő kód bemutatja, hogyan írhatunk és használhatunk önvégrehajtó névtelen függvényeket.


```js
var myVariable = "I live outside the function.";

(function() {
    var myVariable = "I live in this anonymous function";
    document.write(myVariable);
})();

document.write(myVariable);
```


__Kimenete:__

```txt
I live in this anonymous function
I live outside the function.
```

A webes alkalmazások programozói rendszeresen használnak névtelen függvényeket, hogy a weboldalakon a legkülönfélébb modern hatásokat érjék el.

### Csináld újra rekurzióval

A függvényeket hívhatjuk a függvényen kívülről vagy más függvényeken belülről. Még egy függvényt is meghívhatsz önmagán belülről. Amikor egy függvény önmagát hívja meg, akkor egy rekurziónak nevezett programozási technikát használ.

A rekurziót sok olyan esetben használhatod, mint a ciklusokat, azzal a különbséggel, hogy a rekurzió a függvényen belüli utasításokat ismétli meg.


Ennek a rekurzív függvénynek azonban van egy nagy problémája. Felismered?

```js
function squareItUp(startingNumber) {
    var square = startingNumber * startingNumber;
    console.log(square);
    squareItUp(square);
}
```

Látod a problémát ezzel a funkcióval? Soha nem ér véget. Addig szorozza a számokat, amíg le nem állítod.

Ha ezt a funkciót futtatod, valószínűleg összeomlik a böngésződ, ha nem is a számítógéped. Maradandó kárt persze nem okoz, de elég, ha csak elolvasod a kódot, és észreveszed az itt lévő problémát.

A következő kód a `squareItUp()` függvényt továbbfejleszti az úgynevezett alapeset megadásával. Az alapeset az a feltétel, amely mellett egy rekurzív függvénynek vége a feladatának, és meg kell állnia. Minden rekurzív függvénynek rendelkeznie kell egy alapesettel.

```js
function squareItUp(startingNumber) {
    square = startingNumber * startingNumber;

    if (square > 1000000) {
        console.log(square);
    } else {
        squareItUp(square);
    }
}
```

Így már jobb! De ennek a funkciónak még mindig van egy nagy problémája. Mi van akkor, ha valaki negatív számot, nullát vagy 1-et ad be? Bármelyik eset eredménye még mindig egy végtelen ciklus lenne. Hogy megvédjük magunkat az ilyen helyzetektől, szükségünk van egy befejezési feltételre. A most következő kódban már egy olyan ellenőrzést adtunk hozzá, amely biztosítja, hogy az argumentum nem kisebb vagy egyenlő 1-nél, és nem más, mint egy szám. Mindkét esetben a függvény azonnal leáll.

```js
function squareItUp(startingNumber) {
    // Termination conditions, invalid input 
    if ((typeof startingNumber != 'number') || (startingNumber <= 1)) {
        return -1; // exit the function
    }

    square = staringNumber * startingNumber;

    //Base condition
    if (square > 1000000) {
        console.log(square); // Print the final value
    } else { // If the base condition isn't met, do it
        again.squareItUp(square);
    }
}
```

### Funkciók a funkciókban

A függvények függvényeken belül is deklarálhatók. A lenti kód bemutatja, hogyan működik ez a technika, és hogyan befolyásolja a függvényeken belül létrehozott változók hatókörét.

```js
function turnIntoAMartian(myName) {
    function recallName(myName) {
        var martianName = myName + " Martian";
    }
    recallName(myName);
    console.log(martianName); // returns undefined
}
```

Az előző példa azt mutatja, hogy a függvények függvényen belüli egymásba ágyazása hogyan hoz létre egy újabb hatókörréteget. A belső függvényben létrehozott változók nem közvetlenül elérhetők a tartalmazó függvény számára. Ahhoz, hogy megkapjuk az értéküket, szükség van egy `return` utasításra.


```js
function turnIntoAMartian(myName) {
    function recallName(myName) {
        var martianName = myName + " Martian";
        return martianName;
    }
    var martianName = recallName(myName);
    console.log(martianName);
}
```

