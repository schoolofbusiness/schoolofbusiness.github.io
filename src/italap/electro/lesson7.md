# 7. tananyag

## Tinkercad

A Tinkercad széles körben elterjedt az oktatásban, mivel ideális eszköz a diákoknak, hogy megismerkedjenek az elektronika és a mérnöki tervezés alapjaival. Az online platform lehetővé teszi a diákok számára, hogy kreatívan kísérletezzenek, módosítsanak és teszteljenek elektronikai projekteket anélkül, hogy valósában eszközöket kellene összeszerelniük vagy drága hardvert kellene beszerezniük.

A Tinkercad emellett közösségi jellegű is, és lehetőséget nyújt a felhasználók számára, hogy megoszthassák és böngészhessék mások által készített projekteket, így inspirációt meríthetnek és tapasztalatot cserélhetnek egymással. Ez együttműködésre és tanulásra ösztönzi a közösség tagjait.

Az alkalmazás a felhő alapú tárolás és munkafolyamatokkal is rendelkezik, ami azt jelenti, hogy a tervezéseid mindig elérhetők és szinkronizálva vannak, függetlenül attól, hogy melyik eszközön vagy helyen dolgozol rajtuk. Ezenkívül a Tinkercad számos interaktív oktatóanyagot és tanfolyamot is kínál, amelyek segítenek a felhasználóknak megtanulni az elektronika és a 3D tervezés alapjait.

Összességében a Tinkercad egy egyszerűen használható, ingyenes eszköz, amely lehetővé teszi az emberek számára, hogy kreatívan fejleszthessék elektronikai és mérnöki készségeiket, és virtuálisan teszteljék ötleteiket anélkül, hogy bonyolult hardvert kellene beszerezniük vagy bonyolult szoftvereket kellene elsajátítaniuk.


### Tinkercad <-> Arduino

A Tinkercad rendkívül sokoldalú lehetőségeket kínál az Arduino projektjeidhez. Az alkalmazás tartalmaz egy teljes Arduino kompatibilis könyvtárat, így könnyen hozzáadhatod az Arduino mikrovezérlőket az áramkörödhöz. A Tinkercad eszköztárában megtalálhatók a leggyakoribb Arduino modellek, például az __Arduino UNO__, Nano vagy Mega, továbbá megtalálhatók más elektronikai komponensek is, mint például LED-ek, ellenállások, érzékelők és aktuátorok. Ezeket egyszerűen hozzáadhatod az áramkörödhöz, majd a hozzájuk tartozó kapcsolási rajzokat könnyedén elkészítheted. Az Arduino kódolásához a Tinkercad egy beépített kódszerkesztőt kínál.

Ebben a kódszerkesztőben programozhatod az Arduino mikrovezérlődet, és láthatod a kód hatásait a szimulációban. A szimulációs funkció különösen hasznos, mivel lehetővé teszi az áramkör tesztelését és működésének előzetes megtekintését. Így láthatod, hogyan viselkedik az áramköröd, mielőtt a valóságban megépítenéd. Mind emellett lehetőséget kínál a projektjeid megosztására és ezenkívül böngészheted más felhasználók projektjeit is, így inspirációt meríthetsz és tanulhatsz másoktól. Az ingyenes oktatóanyagok és tanfolyamok szintén segítségedre lehetnek az Arduino és az elektronika terén való fejlődésben. Összességében a Tinkercad egy erőteljes eszköz az Arduino projektek tervezéséhez, fejlesztéséhez és tanulásához.

## Mi az az Arduino?

Az Arduino egy rendkívül népszerű és széles körben alkalmazott kis méretű mikrovezérlő platform, amelyet főként elektronikai projektfejlesztők, mérnökök, művészek és hobbisták használnak világszerte. A platform hatalmas népszerűségét az egyszerűsége, a rugalmassága és az open-source jellege eredményezi.

Az Arduino projekt eredetileg 2005-ben indult azzal a céllal, hogy megkönnyítse az emberek számára a mikrokontrollerek programozását és az elektronika világában való kísérletezést. Az Arduino platformot olyan tervezési szempontok vezérlik, mint a könnyű használat, az alacsony költség és a közösségi támogatás. Ennek eredményeként a felhasználók számára könnyű hozzáférni az Arduino hardverhez és a hozzá tartozó szoftverekhez.

Az alapját egy kis, egyszerűen programozható mikrovezérlő, például az ATmega sorozat, képezi, amelyre egy speciális firmware-t telepítenek, hogy egyszerűsítse a programozást. Az Arduino mikrokontrollerek számos digitális és analóg bemeneti és kimeneti csatlakozóval rendelkeznek, amelyek lehetővé teszik az eszközök és szenzorok könnyű csatlakoztatását.

A programozás során az __Arduino C/C++__ nyelvet használ, amely viszonylag egyszerű és könnyen tanulható. Az __Arduino IDE__ (Integrated Development Environment) egy ingyenes, nyílt forráskódú szoftver, amely kifejezetten az Arduino projektek fejlesztésére készült. Ebben a fejlesztői környezetben lehetőség van a kód írására, feltöltésére a mikrovezérlőre, valamint a hibák ellenőrzésére és javítására.

Az Arduino széles körben használják olyan projektek létrehozására, mint okosotthon-vezérlőrendszerek, robotika, mérési eszközök, interaktív művészeti alkotások és prototípusok. Az erőssége a közösségi támogatásban rejlik, mivel számos projekt, könyv és oktatóanyag elérhető, amelyek segítenek a kezdőknek és a haladóknak egyaránt az Arduino használatának elsajátításában.

Az Arduino platform open-source, ami azt jelenti, hogy a hardver- és szoftvertervek nyilvánosak, és bárki módosíthatja és adaptálhatja őket saját projektekhez. Ez a nyitott megközelítés hozzájárul a folyamatos innovációhoz és a fejlesztők közösségének növekedéséhez, ami miatt az Arduino továbbra is egy népszerű és fontos eszköz az elektronika és a mikrokontrollerek világában.

### Arduino C/C++ programozási nyelv

Az alap Arduino programkód, amelyet a legtöbb Arduino projekt kiindulópontjaként használnak, a következőképpen néz ki:

```cpp
void setup() {
    // Setup rész: 
    // Itt inicializáljuk az áramkört 
    // és végrehajtjuk az egyszeri beállításokat.
}

void loop() {
    // Loop rész: Itt található 
    // a folyamatosan ismétlődő kód.
}
```

Ez a struktúra az Arduino projektek alapja, és lehetővé teszi a felhasználók számára, hogy könnyen és strukturált módon írják meg a programjaikat. A `setup()` blokkban elvégezett inicializációk segítenek felkészülni az áramkört a működésre, míg a `loop()` blokkban definiálhatjuk a kívánt működést, amely folyamatosan ismétlődik.

_Továbbiakban ezt a két fő részt tárgyaljuk!_

### `void setup() { }`

Az `void setup()` blokk az Arduino program egy része, amelyet egyszer hajtanak végre, amikor a mikrovezérlő elindul. A `setup()` függvénynek nincs visszatérési értéke (`void`), és a leggyakrabban az áramkör inicializálására és a kezdeti beállítások végrehajtására használják.

A `setup()` blokk számos feladatot végezhet, például:

1. **Csatlakozók beállítása**: A leggyakoribb felhasználása a digitális és analóg csatlakozók beállítása. Például a `pinMode()` függvény segítségével meghatározhatjuk, hogy egy adott pin kimenetként vagy bemenetként működjön.

```cpp
void setup() {
  pinMode(13, OUTPUT); // 13-as pin kimenetként használása
}
```

2. **Szenzorok inicializálása**: Ha szenzorokat használunk az áramkörünkben, a `setup()` blokkban inicializálhatjuk ezeket a szenzorokat, például beállítva a kommunikációs protokollt vagy az érzékelési tartományt.

```cpp
void setup() {
  Wire.begin(); // I2C kommunikáció inicializálása
  lcd.begin(16, 2); // LCD kijelző inicializálása (16 karakter, 2 sor)
}
```

3. **Változók inicializálása**: Változókat is inicializálhatunk a `setup()` blokkban, hogy előkészítsük azokat a későbbi használatra.

```cpp
void setup() {
  int ledPin = 13; // LED vezérléséhez egy változó inicializálása
}
```

A `setup()` blokk lényege az, hogy az elején végzi el azokat a beállításokat és inicializációkat, amelyekre az áramkörnek szüksége van a működéshez. Miután a `setup()` függvény lefutott, az Arduino mikrovezérlő a `loop()` függvénybe lép, ahol a folyamatosan ismétlődő műveletek vannak végrehajtva.


### `void loop() { }`

Ez a rész folyamatosan ismétlődik, miután a `setup()` blokk lefutott. Itt található a fő működési kód, amelyet a mikrovezérlő ismételten végrehajt. Például itt lehet LED-eket villogtatni, adatokat olvasni szenzorokról, vagy bármilyen más folyamatosan futó feladatot végezni.

A `void loop()` blokk belsejében lévő kód folyamatosan fut, újra és újra, minden alkalommal, amikor az Arduino végzi a programot. Ez azt jelenti, hogy a benne lévő utasításokat ismételten és folyamatosan végrehajtja, amíg az Arduino bekapcsolva van vagy amíg a program nem kerül leállításra.

Itt néhány példa arra, hogy mire használható a `void loop()` blokk:

1. **Szenzorolvasás és adatfeldolgozás**: Lehetőséget nyújt szenzorok adatainak olvasására és feldolgozására. Például egy hőmérsékletszenzor adatainak olvasása és a hőmérséklet kijelzése.

```cpp
void setup() {
  Serial.begin(9600); // Soros kommunikáció beállítása
}

void loop() {
  int homerseklet = analogRead(A0); // A0-es pinen található szenzor olvasása
  float fahrenheit = (homerseklet * 0.48876) + 32.0; // Fahrenheitban való átváltás
  Serial.print("Homerseklet (Celsius): ");
  Serial.print(homerseklet);
  Serial.print(" Celsius, Homerseklet (Fahrenheit): ");
  Serial.print(fahrenheit);
  Serial.println(" Fahrenheit");
  delay(1000); // Várunk egy másodpercet
}
```

2. **Kimenet vezérlése**: Lehetővé teszi kimenetek vezérlését, például LED-ek, motorok vagy relék kapcsolását, amelyekkel irányíthatod fizikai eszközöket vagy rendszereket.

```cpp
int ledPin = 13; // 13-as pin használata LED-hez

void setup() {
  pinMode(ledPin, OUTPUT); // LED pin kimenetként
}

void loop() {
  digitalWrite(ledPin, HIGH); // LED bekapcsolása
  delay(1000); // Várakozás egy másodpercig
  digitalWrite(ledPin, LOW); // LED kikapcsolása
  delay(1000); // Várakozás egy másodpercig
}
```

3. **Kommunikáció**: Kommunikálhat más eszközökkel, például számítógéppel vagy más Arduino mikrovezérlőkkel, soros porton vagy más kommunikációs csatornákon keresztül.

```cpp
void setup() {
  Serial.begin(9600); // Soros kommunikáció beállítása
}

void loop() {
  Serial.println("Hello, vilag!"); // Üzenet küldése a számítógépnek
  delay(1000); // Várunk egy másodpercet
}
```

4. **Vezérlő programok**: Készíthetsz vezérlő programokat, amelyek folyamatosan figyelik az eseményeket vagy érzékelnek változásokat, és reagálnak rájuk.

```cpp
int buttonPin = 2; // 2-es pin használata a gombhoz
int ledPin = 13; // 13-as pin használata a LED-hez

void setup() {
  pinMode(buttonPin, INPUT); // Gomb pin beállítása bemenetként
  pinMode(ledPin, OUTPUT); // LED pin beállítása kimenetként
}

void loop() {
  int buttonState = digitalRead(buttonPin); // Gomb állapotának olvasása

  if (buttonState == HIGH) {
    digitalWrite(ledPin, HIGH); // Ha a gomb lenyomva van, bekapcsoljuk a LED-et
  } else {
    digitalWrite(ledPin, LOW); // Ha a gomb nincs lenyomva, kikapcsoljuk a LED-et
  }
}
```

Ezek a példakódok segíthetnek megérteni az Arduino void __loop()__ blokk használatát különböző alkalmazási területeken. Az Arduino lehetőségek széles skáláját nyitja meg, és a C/C++ nyelven való programozás révén sokféle projektet hozhatsz létre.

A `void loop()` blokk gyakran tartalmaz ciklusokat (például `for` vagy `while`), elágazásokat (`if` vagy `switch`) és más vezérlési szerkezeteket, hogy a program viselkedése változatos és összetett legyen. Ez a blokk lehetővé teszi az Arduino programok folyamatos futtatását és a különböző események és feltételek kezelését, így sokféle alkalmazást valósíthatsz meg vele.


