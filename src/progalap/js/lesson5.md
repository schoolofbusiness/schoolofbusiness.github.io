# 5. tananyag 

## Operátorokkal, kifejezésekkel és utasításokkal való munka

Ebben a fejezetben

- JavaScript-kifejezések olvasása és kódolása
- Értékekmódosítás hozzárendelési operátorokkal 
- Logikus gondolkodás összehasonlító operátorokkal
- Matematikai műveletek számtani operátorokkal
- A bitwise operátorok megismerése
- Összekapcsolás a karakterlánc-operátorokkal


A JavaScript operátorok, kifejezések és utasítások a programok alapvető építőkövei. Segítségükkel értékeket manipulálhat és módosíthat, matematikai műveleteket végezhet, két vagy több értéket hasonlíthat össze, és még sok minden mást.

Ebben a fejezetben megtudhatod, hogyan végzik munkájukat az operátorok, kifejezések és utasítások, és hogyan használhatjuk őket a legjobban.

### Fejezd ki magad

A kifejezés egy olyan kódrészlet, amely egy értéket eredményez. A kifejezések vagy értéket rendelhetnek egy változóhoz, vagy egyszerűen csak egy értéket tartalmazhatnak. Például az alábbiak közül mindkettő érvényes kifejezés:

```js
1 + 1

a = 1;
```

A kifejezések lehetnek rövidek és egyszerűek, ahogyan azt a példa is mutatja, de lehetnek egészen bonyolultak is.

A kifejezésben szereplő adatdarabokat (ezekben a példákban 1 vagy a) nevezzük operandusoknak nevezzük.

### Hello, Operator

Azokat a motorokat, amelyek a kifejezéseket munkára késztetik, operátoroknak nevezzük. Az adatokkal operálva különböző eredményeket állítanak elő. Az előző kifejezésekben szereplő `=` és `+` példák az operátorokra.

### Operátorok precedenciája

Egyetlen kifejezés gyakran több operátort is tartalmaz. Tekintsük a következő példát:

```js
a + 1 + 2 * 3 / 4;
```

Attól függően, hogy milyen sorrendben végzed el a különböző számításokat, az a végső értéke a következők bármelyike lehet:

```js
a = 1.75
a = 2.5
a = 2.25
```

Valójában a kifejezés tényleges eredménye 2,5 lesz. De honnan tudod ezt? Attól függően, hogy végzzük el a számítást, az osztás történhet először (3 / 4), az összeadás történhet először (1 + 2), vagy a szorzás történhet először (2 * 3)?

Nyilvánvaló, hogy kell lennie egy jobb módnak a válasz kitalálására, és van is! Itt jön a képbe az operátorok precedencia-sorrendje. Az operátor precedencia az a sorrend, amelyben az operátorok egy kifejezésben kiértékelődnek.

A legkisebb számmal rendelkező operátornak van a legnagyobb prioritása. Ez elsőre zavarosnak tűnhet, de ha úgy képzeled el, hogy a sorban az első ember (aki ebben az esetben a 0. helyen áll) kap elsőként egy finom szendvicset vagy egy csésze kávét, akkor nem lesz gond, ha ezt nem érted.

Ha egy kifejezés két vagy több olyan operátort tartalmaz, amelyek azonos precedenciájúak, akkor az asszociativitásuk szerint kerülnek kiértékelésre. Az asszociativitás határozza meg, hogy az operátorok balról jobbra vagy jobbról balra kerülnek kiértékelésre.

### Zárójelek használata

Egy kifejezésben a zárójelek a legmagasabb prioritású operátor. A legtöbb esetben egyszerűen figyelmen kívül hagyhatod az operátorok elsőbbségi szabályait, ha a műveleteket zárójelek segítségével részkifejezésekbe csoportosítod. Például az előző, több operátorral rendelkező kifejezés teljes mértékben egyértelművé tehető a következő módon:

```js
a = (1 + 2) * (3 / 4); // result: 2.25 
a = (1 + (2 * 3)) / 4; // result: 1.75 
a = ((1 + 2) *3) / 4; // result: 2.25 
a = 1 + ((2 * 3) / 4); // result: 2.5
```

A zárójelek a kifejezésekben arra kényszerítik a JavaScript-értelmezőt, hogy először a zárójelek tartalmát értékelje ki, a legbelső zárójelektől a legkülső zárójelekig, mielőtt a zárójeleken kívüli műveleteket végrehajtaná.

Az előbbi kifejezés elsőbbségi sorrendje valójában a következő:

```js
a = 1 + ((2 * 3) / 4);
```

Ez az utasítás egyértelművé teszi a tényleges operátorok elsőbbségét. Először a szorzás történik, utána az osztás, majd az összeadás.

### Operátorok típusai

A JavaScript számos operátortípussal rendelkezik. Ez a rész a leggyakrabban használt operátortípusokat tárgyalja.

### Hozzárendelési operátorok

A hozzárendelési operátor a jobb oldali operandus értékét hozzárendeli a bal oldali operandushoz:

```js
a = 5;
```

A kifejezés lefutása után az a változó értéke 5 lesz. A hozzárendelési operátorokat láncba is kapcsolhatjuk, hogy ugyanazt az értéket több változóhoz rendeljük, mint a következő példában:

```js
a = b = c = 5;
```

Mivel az operátor asszociativitása jobbról balra irányul, az 5 először c-hez lesz rendelve, majd c értéke b-hez lesz rendelve, és ha b értéke a-hez lesz rendelve, akkor az a, b és c mindegyike 5 értékű lesz.

Mit gondolsz, mi lesz az a végértéke, miután ezeket a kifejezéseket kiértékeltük?

```js
var b = 1;

var a = b += c = 5;
```

Ennek kiderítéséhez nyissd meg a JavaScript-konzolt a Chrome-ban, és írd be az egyes sorokat, majd a `return` vagy az `enter` billentyűt. Ennek az utasításnak az eredménye az, hogy a egyenlő lesz `6`-tal.

### Összehasonlító operátorok

Az összehasonlító operátorok az operandusok közötti egyenlőséget vagy különbséget vizsgálják, és igaz vagy hamis értéket adnak vissza.

A táblázat a JavaScript összehasonlító operátorok teljes listáját tartalmazza.

| Operator |                Description               | Comparing | Returns |
|:--------:|:----------------------------------------:|:---------:|:-------:|
|    ==    |                  egyenlő                 |   x == 8  |  false  |
|          |                                          |   x == 5  |   true  |
|          |                                          |  x == "5" |   true  |
|    ===   |       azonos érték és azonos típus       |  x === 5  |   true  |
|          |                                          | x === "5" |  false  |
|    !=    |                nem egyenlő               |   x != 8  |   true  |
|    !==   | nem egyenlő érték vagy nem egyenlő típus |  x !== 5  |  false  |
|          |                                          | x !== "5" |   true  |
|          |                                          |  x !== 8  |   true  |
|     >    |               nagyobb, mint              |   x > 8   |  false  |
|     <    |              kevesebb, mint              |   x < 8   |   true  |
|    >=    |        nagyobb vagy egyenlő, mint        |   x >= 8  |  false  |
|    <=    |         kisebb vagy egyenlő, mint        |   x <= 8  |   true  |

### Aritmetikai operátorok

Az aritmetikai operátorok matematikai műveleteket végeznek az operandusokon, és az eredményt adják vissza. A táblázat az aritmetikai operátorok teljes listáját mutatja.

| Operátor |   Leírás   |         Példa         |
|:--------:|:----------:|:---------------------:|
|     +    |  Összeadás |       a = 1 + 1       |
|     -    |   Kivonás  |       a = 10 - 1      |
|     *    |   Szorzás  |       a = 2 * 2       |
|     %    |   Modulus  |       a = 5 % 2       |
|    ++    |   Növelés  | a = ++b  a = b++  a++ |
|    --    | Csökkentés | a = --b  a = b--  a-- |


_A következő kód az aritmetikai operátorok működését mutatja._

```html
<html>
  <head>
    <title>arithmetic operators</title>
  </head>
  <body>
    <h1>Wild Birthday Game</h1>
    <p>
    <ul>
      <li>Enter the number 7</li>
      <li>Multiply by the month of your birth</li>
      <li>Subtract 1</li>
      <li>Multiply by 13</li>
      <li>Add the day of your birth</li>
      <li>Add 3</li>
      <li>Multiply by 11</li>
      <li>Subtract the month of your birth</li>
      <li>Subtract the day of your birth</li>
      <li>Divide by 10</li>
      <li>Add 11</li>
      <li>Divide by 100</li>
    </ul>
    </p>
    <script>
      var numberSeven = Number(prompt('Enter the number 7'));
      var birthMonth = Number(prompt('Enter your birth month'));
      var calculation = numberSeven * birthMonth;
      calculation = calculation - 1;
      calculation = calculation * 13;
      var birthDay = Number(prompt('Enter the day of your birth '));
      calculation = calculation + birthDay;
      calculation = calculation + 3;
      calculation = calculation * 11;
      calculation = calculation - birthMonth;
      calculation = calculation - birthDay;
      calculation = calculation / 10;
      calculation = calculation + 11; 
      calculation = calculation / 100;
      document.write("Your birthday is " + calculation);
    </script>
  </body>
</html>
```

### String operátor

A string operátor két karakterlánccal végez műveleteket. Ha a __+__ operátort karakterláncokkal használjuk, akkor az a láncolás operátora lesz. Célja a karakterláncok összekapcsolása. Vedd figyelembe, hogy a karakterláncok összekapcsolásakor a konkatenációs operátorral nem adunk hozzá szóközöket. Ezért nagyon gyakran találkozhatunk a következőhöz hasonló kijelentésekkel, amelyekben az üres szóközön kívül semmi mást nem tartalmazó karakterláncokat más karakterláncok közé kapcsolunk, vagy a karakterláncok végére vagy elejére (az idézőjel előtt) szóközöket adunk, hogy összefüggő mondatot alkossunk:

```js
var greeting = "Hello, " + firstName + ". I'm" + " " + mood + " to see you.";
```

### Bitwise operátorok

A bitwise-operátorok az operandusokat a számok előjeles 32 bites bináris ábrázolásaként kezelik, kettes komplement formátumban. Az alábbiakban ismertetjük, hogy ez mit jelent, kezdve a bináris kifejezéssel.

A bináris számok 1-ek vagy 0-k sorozata, ahol a számjegy pozíciója határozza meg az adott pozícióban lévő 1-es értékét. Az 1-es számot például így írhatjuk le 32 bites bináris számként:

_00000000000000000000000000000001_

A jobb szélső pozíció értéke 1. Minden ettől a pozíciótól balra lévő pozíció értéke a tőle jobbra lévő szám értékének kétszerese. Tehát a következő bináris szám egyenlő 5-tel:

_00000000000000000000000000000101_

Az előjeles egész számok azt jelentik, hogy mind a negatív, mind a pozitív egész számok ábrázolhatók ebben a formában.

A kettes komplement kifejezés azt jelenti, hogy bármely pozitív bináris szám ellentéte a negatívja (és természetesen fordítva). Tehát ahhoz, hogy a bináris 5-öt bináris -5-re változtassuk, egyszerűen fordítsuk fel az összes bitet:

11111111111111111111111111111101

A bitwise-operátorok a számokat ilyen 32 bites bináris számokká alakítják át, majd a művelet elvégzése után visszaalakítják őket olyan számokká, amelyeket normál számoknak tekintünk.

A bitwise-operátorokat elsőre nehéz megérteni. Nem túl gyakran használják őket a JavaScriptben, de vétek lenne, ha nem foglalkoznánk velük.

|           Operátor          | Használat |                                                               Leírás                                                               |
|:---------------------------:|:---------:|:----------------------------------------------------------------------------------------------------------------------------------:|
|         Bitwise AND         |   a & b   |                       Minden olyan bitpozícióban 1-et ad vissza, ahol a két operandus megfelelő bitjei 1-ek.                       |
|          Bitwise OR         |   a \| b  |           Minden olyan bitpozícióban 1-et ad vissza, amelynek megfelelő bitjei valamelyik vagy mindkét operandusban 1-ek.          |
|         Bitwise XOR         |   a ^ b   | Minden olyan bitpozícióban 1-et ad vissza, ahol az operandusok bármelyikének, de nem mindkét operandusnak a megfelelő bitjei 1-ek. |
|         Bitwise NOT         |     ~a    |                                                  Megfordítja az operandus bitjeit.                                                 |
|          Left shift         |   a << b  |                           Az a bináris ábrázolásban b (<32) bitet tol el balra, jobbról nullákat tol be.                           |
| Signpropagating right shift |   a >> b  |                          Az a bináris ábrázolásban b (<32) bitet tol jobbra, az eltolt bitek elvetésével.                          |
|    Zero-fill right shift    |  a >>> b  |             Az a bináris ábrázolásban b (<32) bitet tol el jobbra, elveti az eltolt biteket, és balról nullákat tol be.            |

### Logikai operátorok

A logikai operátorok egy logikai kifejezést értékelnek ki az igazság vagy a hamisság szempontjából.


| Operator | Meaning |                                                             Description                                                            |
|:--------:|:-------:|:----------------------------------------------------------------------------------------------------------------------------------:|
|    &&    |   And   |               Visszaadja az első operandus értékét, ha az igaz. Ellenkező esetben a második operandus adódik vissza.               |
|   \|\|   |    Or   |               Visszaadja az első operandus értékét, ha az igaz. Ellenkező esetben a második operandus adódik vissza.               |
|     !    |   Not   | Csak egy operandusra van szükség. Fals értéket ad vissza, ha az operandusa igazzá alakítható. Ellenkező esetben false-t ad vissza. |

A VAGY operátorral a változók alapértelmezett értékét is megadhatod. Például a következő kifejezésben a myVar értéke az x értékére lesz beállítva, kivéve, ha x hamis értéket ad (például ha x nem lett definiálva). Ellenkező esetben az érték az alapértelmezett 0 értékre lesz beállítva.

```js
var myVar = x||0;
```

### Különleges operátorok

A JavaScript speciális operátorai különféle szimbólumok és szavak összevisszasága, amelyek más és más fontos funkciókat látnak el.

### Feltételes operátor

A feltételes operátor (más néven ternary operátor) három operandust használ. Kiértékel egy logikai kifejezést, majd visszaad egy értéket annak alapján, hogy a kifejezés igaz vagy hamis. A feltételes operátor az egyetlen operátor, amely három operandusra van szükség. Például:

```js
var isItBiggerThanTen = (value > 10) ? "greater than 10" : "not greater than 10";
```

### Vessző operátor

A vessző operátor két operandus kiértékelését végzi, és a második operandus értékét adja vissza. Leggyakrabban többszörös hozzárendelések vagy más műveletek elvégzésére használják ciklusokon belül. A változók inicializálásának rövidítéseként is szolgálhat. Például:

```js
var a = 10 , b = 0;
```

Mivel a vesszőnek van a legalacsonyabb precedenciája az operátorok közül, az operandusai mindig külön kerülnek kiértékelésre.

### delete operátor

A delete operátor eltávolít egy tulajdonságot egy objektumból vagy egy elemet egy tömbből.

:::warning Fontos!
Amikor a delete operátorral eltávolít egy elemet egy tömbből, a tömb hossza nem változik. Az eltávolított elem értéke meghatározatlan lesz.
:::

```js
var animals = ["dog","cat","bird","octopus"];
console.log (animals[3]); // returns "octopus" 
delete animals[3];
console.log (animals[3]); // returns "undefined"
```

### in operátorban

Az `in` operátor igazat ad vissza, ha a megadott érték létezik egy tömbben vagy objektumban.

```js
var animals = ["dog","cat","bird","octopus"]; 
if (3 in animals) {
  console.log ("it's in there"); 
}
```

Ebben a példában, ha az állatok tömbben van egy 3 indexű elem, akkor a "__benne van__" karakterlánc kiíródik a JavaScript-konzolra.

### instanceof operátor

Az `instanceof` operátor igazat ad vissza, ha a megadott objektum a megadott típusú objektum.

```js
var myString = new String();
if (myString instanceof String) {
  console.log("yup, it's a string!"); 
}
```

### new operátor

A new operátor egy objektum példányát hozza létre. A JavaScript számos beépített objektumtípussal rendelkezik, és saját objektumtípusokat is definiálhatunk. A következő példában a `Date()` egy beépített JavaScript-objektum, míg a `Pet()` és a `Flower()` olyan objektumok, amelyeket egy programozó hozhat létre a programon belüli egyéni célok érdekében.

```js
var today = new Date(); 
var bird = new Pet();
var daisy = new Flower();
```

### this operator

A this operátor az aktuális objektumra utal. Gyakran használják egy objektumon belüli tulajdonságok lekérdezésére.

### typeof operátor

A typeof operátor az operandus típusát tartalmazó karakterláncot adja vissza:

```js
var businessName = "Harry's Watch Repair";
console.log typeof businessName; // returns "string"
```

### void operator

A void operátor hatására az operandusban szereplő kifejezés kiértékelésre kerül anélkül, hogy értéket adna vissza. A void operátor leggyakrabban HTML-dokumentumokban használatos, amikor egy hivatkozásra van szükség, de a hivatkozás létrehozója a hivatkozás alapértelmezett viselkedését JavaScript segítségével felül kívánja írni:

```html
<a href="javascript:void(0);">This is a link, but it won't do anything</a>
```

### Operátorok kombinálása

A hozzárendelési operátorokat kombinálhatod a többi operátorral, hogy egy kifejezés eredményét egy változóhoz hozzárendeld. A következő két példa például ugyanazt az eredményt adja:


```js
a = a + 10;
a += 10;
```

Táblázat felsorolja a hozzárendelési operátorok és más operátorok lehetséges kombinációit.


|                Name               | Shorthand | Standard Operator |
|:---------------------------------:|:---------:|:-----------------:|
|             Assignment            |   x = y   |       x = y       |
|        Addition assignment        |   x += y  |     x = x + y     |
|       Subtraction assignment      |   x = y   |     x = x - y     |
|     Multiplication assign ment    |   x *= y  |     x = x * y     |
|        Division assignment        |   x /= y  |     x = x / y     |
|        Remainder assignment       |   x %= y  |     x = x % y     |
|       Left shift assignment       |  x <<= y  |     x = x << y    |
|       Right shift assignment      |  x >>= y  |     x = x >> y    |
| Unassigned right shift assignment |  x >>>= y |    x = x <<< y    |
|       Bitwise AND assignment      |   x &=y   |     x = x & y     |
|       Bitwise XOR assignment      |   x ^= y  |     x = x ^ y     |
|       Bitwise OR assignment       |  x \|= y  |     x = x \| y    |