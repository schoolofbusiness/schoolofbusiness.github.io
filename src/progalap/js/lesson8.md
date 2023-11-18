# 8. tananyag

## Objektumok létrehozása és használata


Ebben a fejezetben
- Az objektumok megértése
- Tulajdonságok és metódusok használata 
- Objektumok létrehozása
- A pontjelölés használata
- Az objektumokkal való munka


Ebben a fejezetben megmutatjuk, miért érdemes objektumokat használni, hogyan használd őket, és milyen különleges képességekkel rendelkeznek, hogy jobbá tegyék a programjaidat és a programozásodat.

### Az Objektum

Az öt primitív adattípuson kívül a JavaScriptnek van egy objektum nevű adattípusa is. A JavaScript objektumok újrafelhasználható komponensekbe kapszulázzák az adatokat és a funkciókat.

Ahhoz, hogy megértsük, mik az objektumok és hogyan működnek, hasznos, ha a JavaScript-objektumokat fizikai, valós dolgokkal hasonlítjuk össze. Vegyünk például egy gitárt.

Egy gitárnak vannak dolgai, amelyekből áll, és amelyeket csinál. Íme néhány tény a gitárról, amelyet a példánkhoz használunk:

- Hat húrja van.
- Fekete és fehér. 
- Elektromos.
- A teste tömör.

Néhány dolog, amit ez a gitár tud (vagy amit a gitárral lehet csinálni) a következő:

- Húrokat pengetni
- A hangerő növelése 
- Csökkentheti a hangerőt 
- A hangszín beállítása
- Meghúzni a húrokat 
- Meg lazítani a húrokat

Ha ez a gitár egy JavaScript-objektum lenne, nem pedig egy valós objektum, akkor azokat a dolgokat, amelyeket csinál, metódusoknak neveznénk, a gitárt alkotó dolgok pedig, mint például a húrok és a test típusa, a tulajdonságai lennének.

Az objektumok metódusait és tulajdonságait ugyanúgy írjuk le: név-érték párokként, a nevet és az értéket kettősponttal elválasztva. Ha egy tulajdonság értéke egy függvény, akkor azt metódusnak nevezzük.

:::tip Megjegyzés

A valóságban egy objektumon belül minden egy tulajdonság. Egy függvényértékkel rendelkező tulajdonságot csak más néven hívunk: metódusnak.
:::

```js
var guitar = {
    bodyColor: "black",
    scratchPlateColor: "white",
    numberOfStrings: 6,
    brand: "Yamaha",
    bodyType: "solid",
    strum: function() {
        ...
    },
    tune: function() {
        ...
    }
};
```

## Objektumok létrehozása

A JavaScript kétféleképpen hozhat létre objektumokat: 

- Egy objektum literál írásával.
- Az objektum-konstruktor metódus használatával

Hogy melyiket választjuk, az a körülményektől függ. A következő szakaszokban felfedezheted mindkettő előnyeit és hátrányait, valamint azt, hogy mikor melyik előnyösebb a másiknál.
a másikkal szemben.

### Objektumok definiálása objektum literálokkal

Az objektumok létrehozásának objektumliterális módszere a `var` kulcsszó használatával egy szabványos változó definíciójával kezdődik, amelyet az `assignment` operátor követ:

```js
var person = ...
```

Az utasítás jobb oldalán azonban kapcsos zárójelben vesszővel elválasztott név/érték párokat használ:

```js
var person = {
    eyes: 2,
    feet: 2,
    hands: 2,
    eyeColor: "blue"
};
```

Ha nem tudod, hogy az objektum milyen tulajdonságokkal fog rendelkezni, amikor létrehozod, vagy ha a programod megköveteli, hogy később további tulajdonságokat adj hozzá, akkor létrehozhatod az objektumot kevés tulajdonsággal, vagy akár tulajdonságok nélkül is, és később hozzáadhatsz tulajdonságokat:

```js
var person = {};
person.eyes = 2;
person.hair = "brown";
```

Az anyag korábbi példáiban szereplő metódusok többnyire szöveg kimenetére szolgálnak. A `document.write` és a `console.log` is ezt a módszert használja a tulajdonságok ponttal való elválasztására, így ez ismerős lehet. Az objektum neve és a tulajdonság között lévő pont azt jelzi, hogy a tulajdonság az adott objektumhoz tartozik. A pontjelöléssel részletesebben az később foglalkozunk.

Az objektumokkal kapcsolatban egy másik dolog, amit meg kell jegyeznünk, hogy a tömbökhöz hasonlóan az objektumok is tartalmazhatnak több különböző adattípust a tulajdonságok értékeiként.


:::tip Megjegyzés
A JavaScript valódi megértésének nem túl jól őrzött titka, hogy a tömbök és függvények objektumtípusok, és hogy a szám, a karakterlánc és a Boolean primitív adattípusok szintén objektumként használhatók. Ez azt jelenti, hogy az objektumok összes tulajdonságával rendelkeznek, és ugyanúgy lehet hozzájuk tulajdonságokat rendelni, mint az objektumokhoz.
:::

### Objektumok definiálása Object konstruktorral

Az objektum definiálásának második módja az `Object` konstruktor használata. Ez a módszer új objektumként definiálja az objektumot, és feltölti azt tulajdonságokkal. Az `Object` konstruktor használatára egy példában láthatod.


```js
var person = new Object();
person.feet = 2;
person.name = "Sandy";
person.hair = "black";
```

Az objektumok létrehozására használható az `Object` konstruktor módszer, de általában az objektumok létrehozásának rosszabb módjának tekintik. 

Ennek fő okai a következők

- Több tipizálást igényel, mint az objektum literális módszer. 
- Nem működik olyan jól a webböngészőkben.
- Nehezebb olvasni, mint az objektum literális módszert.

## Objektumtulajdonságok lekérdezése és beállítása

Miután létrehozotál egy objektumot és meghatároztad a tulajdonságait, szeretnéd, ha ezeket a tulajdonságokat lekérdezhetné és megváltoztathatná. Az objektum tulajdonságaihoz kétféleképpen férhetünk hozzá: pontjelöléssel vagy szögletes zárójeles jelöléssel.


### Pont jelölés

A pontjelölésben az objektum neve után egy pont (vagy pont), majd a lekérdezni vagy beállítani kívánt tulajdonság neve következik.

A `person` objektumban egy új, `firstName` nevű tulajdonság létrehozásához vagy egy meglévő `firstName` tulajdonság értékének módosításához a következő utasítást kell használni:

```js
person.firstName = "Glenn";
```

Ha a `firstName` tulajdonság még nem létezik, ez az utasítás létrehozza azt.

Ha már létezik, akkor frissíti azt egy új értékkel.

Egy tulajdonság értékének pontjelöléssel történő lekérdezéséhez pontosan ugyanazt a szintaxist használjuk, de az objektum és a tulajdonság nevét (az úgynevezett property accessor) az utasításban más helyre helyezzük. Ha például a `person.firstName` és `person.lastName` értékeit szeretnéd összekapcsolni, és egy új, `fullName` nevű változóhoz rendelni, akkor a következőképpen járna el:

```js
var fullname = person.firstName + person.lastName;
```

Vagy, hogy kiírja a `person.firstName` értékét a html dokumentumba, mint például:

```js
document.write(person.firstName);
```

A pontjelölés általában gyorsabban megírható és könnyebben olvasható módja az objektumtulajdonságok értékeinek beállításának és lekérdezésének.

### Szögletes zárójeles jelölés

A szögletes zárójeles jelölés - jól sejted - szögletes zárójeleket használ az objektum neve után a tulajdonságértékek lekérdezéséhez és beállításához. A tulajdonság értékének szögletes zárójeles jelöléssel történő beállításához tedd a tulajdonság nevét idézőjelbe, szögletes zárójelek közé, így:

```js
person["firstName"] = "Iggy";
```

A szögletes zárójeles jelölésnek van néhány olyan képessége, ami a pontjelölésnek nincs. A legfontosabb, hogy a szögletes zárójeles jelölésen belül használhatsz változókat olyan esetekben, amikor a program írása közben nem tudod a lekérdezni kívánt tulajdonság nevét.
A következő példa pontosan ugyanazt teszi, mint az előző példa, de a szögletes zárójelben lévő változóval, nem pedig szó szerinti karakterlánccal. Ezzel a technikával egyetlen olyan utasítást készíthetsz, amely többféle körülmények között is működhet, például egy ciklusban vagy függvényben:


```js
var personProperty = "firstName";
person[personProperty] = "Iggy";
```

A lenti kód egy egyszerű programot mutat, amely létrehoz egy szék nevű objektumot, majd végigmegy az objektum minden egyes tulajdonságán, és megkéri a felhasználót, hogy adja meg az egyes tulajdonságok értékeit. Miután a felhasználó minden egyes tulajdonsághoz megadta az értéket, meghívja a `writeChairReceipt` függvényt, amely kiírja az egyes tulajdonságokat a felhasználó által megadott értékkel együtt.

```html
<html>
  <head>
    <title>The WatzThis? Chair Configurator</title>
  </head>
  <body>
    <script>
        var myChair = {
            "cushionMaterial": "",
            "numberOfLegs": "",
            "legHeight": ""
        };

        function configureChair() {
            var userValue;
            for (var property in myChair) {
                if (myChair.hasOwnProperty(property)) {
                    userValue = prompt("Enter a value for " + property);
                    myChair[property] = userValue;
                }
            }
        }

        function writeChairReceipt() {
            document.write("<h2> Your chair will have the following configuration: </h2>");
            for (var property in myChair) {
                if (myChair.hasOwnProperty(property)) {
                    document.write(property + ": " + myChair[property] + " < br > ");
                }
            }
        }
        configureChair();
        writeChairReceipt();
    </script>
  </body>
</html>
```


### Tulajdonságok törlése

Az objektumok tulajdonságait a törlés operátor segítségével törölheted. 
A lenti kód mutatja be ennek az operátornak a működését.


```js
var myObject = {
    var1: "the value",
    var2: "another value",
    var3: "yet another"
};
// delete var2 from myObject 
delete myObject.var2;

// try to write the value of var2 
document.write(myObject.var2); // result is an error
```

### Metódusokkal való munka

A metódusok olyan tulajdonságok, amelyek értékeit függvények adják meg. A metódusokat ugyanúgy definiálhatod, mint bármely függvényt. Az egyetlen különbség az, hogy a metódus egy objektum tulajdonságához van rendelve. A kód egy olyan objektum létrehozását mutatja be, amely több tulajdonsággal rendelkezik, amelyek közül az egyik egy metódus.

```js
var sandwich = {
    meat: "",
    cheese: "",
    bread: "",
    condiment: "",

    makeSandwich: function(meat, cheese, bread, condiment) {
        sandwich.meat = meat;
        sandwich.cheese = cheese;
        sandwich.bread = bread;
        sandwich.condiment = condiment;
        var mySandwich = sandwich.bread + ", " + sandwich.meat +
            ", " + sandwich.cheese + ", " + sandwich.condiment;
        return mySandwich;
    }
}
```

A szendvics objektum `makeSandwich` metódusának meghívásához pontjelölést használhatunk, mintha egy tulajdonságot hívnánk meg, de a zárójelekkel és a metódus neve után megadott paraméterekkel, ahogy az alábbiakban láthatod.


```html
 <html>
   <head>
     <title>Make me a sandwich</title>
   </head>
   <body>
     <script>
       var sandwich = {
         meat: "",
         cheese: "",
         bread: "",
         condiment: "",
         makeSandwich: function(meat, cheese, bread, condiment) {
           sandwich.meat = meat;
           sandwich.cheese = cheese;
           sandwich.bread = bread;
           sandwich.condiment = condiment;
           var mySandwich = sandwich.bread + ", " + sandwich.meat + ", " + sandwich.cheese + ", " + sandwich.condiment;
           return mySandwich;
         }
       }

       var sandwichOrder = sandwich.makeSandwich("ham", "cheddar", "wheat", " spicy mustard");
       document.write(sandwichOrder);
     </script>
   </body>
 </html>
```


### This használata
A `this` kulcsszó egy rövidített kifejezés a következő objektumra való hivatkozásra
metódus objektumára való hivatkozás. Például a lenti kódban a szendvics nevű objektum minden példányát this-re cseréltük. Amikor a makeSandwich függvényt a sandwich objektum metódusaként hívjuk meg, a JavaScript megérti, hogy a this a sandwich objektumra utal.


```html
<html>
  <head>
    <title>Make a sandwich</title>
  </head>
  <body>
    <script>
        var sandwich = {
            meat: "",
            cheese: "",
            bread: "",
            condiment: "",
            makeSandwich: function(meat, cheese, bread, condiment) {
                this.meat = meat;
                this.cheese = cheese;
                this.bread = bread;
                this.condiment = condiment;
                var mySandwich = this.bread + ", " + this.meat + ", " + this.cheese + ", " + this.condiment;
                return mySandwich;
            }
        }
        var sandwichOrder = sandwich.makeSandwich("ham", "cheddar", "wheat", " spicy mustard");
        document.write(sandwichOrder);
    </script>
  </body>
</html>
```

A `this` kulcsszó használata a konkrét objektumnév helyett ebben az esetben is pontosan ugyanazt eredményezi.

Ez akkor válik nagyon hasznossá, ha olyan függvényünk van, amely több különböző objektumra is vonatkozhat. Ebben az esetben a `this` kulcsszó a meghívott objektumra fog hivatkozni, ahelyett, hogy egy adott objektumhoz lenne kötve.

A következő szakaszokban a konstruktorfunkciókkal és az örökléssel ismerkedhetünk meg, mindkettőt a szerény `this` utasítás teszi lehetővé.

## Egy objektumorientált út a gazdagsághoz: Öröklés

Amikor objektumokat hozol létre, nem korlátozódsz csak bizonyos objektumok létrehozására, mint például a gitárod, az autód, a macskád vagy a szendvicsed. Az objektumok igazi szépsége az, hogy olyan objektumtípusok létrehozására használhatod őket, amelyekből más objektumok hozhatók létre.

Ha elolvastad az anyag korábbi részeit, minden létrehozott objektumot közvetlenül az Object típusú objektumból konstruált.


```js
var person = new Object();
```

Itt egy új `Object` típusú személy objektum jön létre. Ez az új person objektum tartalmazza az `Object` típus összes alapértelmezett tulajdonságát és metódusát, de új névvel. Ezután a person objektumhoz hozzáadhatod a saját tulajdonságait és metódusait, hogy az konkrétan leírja, hogy mit ért személy alatt.


```js
var person = new Object();
person.eyes = 2;
person.ears = 2;
person.arms = 2;
person.hands = 2;
person.feet = 2;
person.legs = 2;
person.species = "Homo sapien";
```

Tehát most már beállítottad a person objektum néhány speciális tulajdonságát. Képzeljük el, hogy egy új objektumot szeretnénk létrehozni, amely egy bizonyos személy, például Willie Nelson. Egyszerűen létrehozhatsz egy új objektumot `willieNelson` néven, és megadhatod neki ugyanazokat a tulajdonságokat, mint a person objektumnak, plusz azokat a tulajdonságokat, amelyek Willie Nelsont egyedivé teszik.

```js
var willieNelson = new Object();
willieNelson.eyes = 2;
willieNelson.ears = 2;
willieNelson.arms = 2;
willieNelson.hands = 2;
willieNelson.feet = 2;
willieNelson.legs = 2;
willieNelson.species = "Homo sapien";
willieNelson.occupation = "musician";
willieNelson.hometown = "Austin";
willieNelson.hair = "Long";
willieNelson.genre = "country";
```

A `willieNelson` objektum meghatározásának ez a módja azonban pazarló. Rengeteg munkát igényel, és itt semmi sem utal arra, hogy Willie Nelson egy személy lenne. Ő csak történetesen ugyanazokkal a tulajdonságokkal rendelkezik, mint egy személynek.

A megoldás az, hogy létrehozunk egy új objektumtípust `Person` néven, majd a willieNelson objektumot Person típusúvá tesszük.

Vegyük észre, hogy amikor egy objektumtípusról beszélünk, mindig nagybetűvel írjuk az objektumtípus nevét. Ez nem követelmény, de ez egy szinte általános konvenció. Például azt mondjuk, hogy

```js
var person = new Object();
```

vagy

```js
var willieNelson = new Person();
```

### Objektumok konstruálása a konstruktor függvények

Egy új típusú objektum létrehozásához definiáljunk egy új konstruktorfunkciót. A konstruktorfüggvények ugyanúgy jönnek létre, mint bármelyik függvény a JavaScriptben, de a this kulcsszó segítségével tulajdonságokat rendelnek egy új objektumhoz. Az új objektum ezután örökli az objektumtípus tulajdonságait.

Íme egy konstruktorfunkció a Person objektumtípusunkhoz:

```js
function Person(){
    this.eyes = 2;
    this.ears = 2;
    this.arms = 2;
    this.hands = 2;
    this.feet = 2;
    this.legs = 2;
    this.species = "Homo sapien";
}
```

Egy új `Person` típusú objektum létrehozásához most csak annyit kell tenned, hogy a függvényt egy új változóhoz rendeled. Például:

```js
var willieNelson = new Person()
```

A `willieNelson` objektum a `Person` objektumtípus tulajdonságait örökli. Annak ellenére, hogy a `willieNelson` objektumhoz nem hoztunk létre külön tulajdonságokat, a `Person` objektum tartalmazza a `Person` összes tulajdonságát.

```html
<html>
  <head>
    <title>Inheritance demo</title>
  </head>
  <body>
    <script>
      function Person() {
        this.eyes = 2;
        this.ears = 2;
        this.arms = 2;
        this.hands = 2;
        this.feet = 2;
        this.legs = 2;
        this.species = "Homo sapien";
      }
      var willieNelson = new Person();
      alert("Willie Nelson has " + willieNelson.feet + "feet!");
    </script>
  </body>
</html>
```

### Objektumtípus módosítása

Tegyük fel, hogy van a Person objektumtípusunk, amely több objektum prototípusaként szolgál. Egy bizonyos ponton rájössz, hogy a Person, valamint a tőle örökölt összes objektumnak rendelkeznie kellene még néhány tulajdonsággal.

A prototípus objektum módosításához használd a prototípus tulajdonságot, amelyet minden objektum az Object-től örököl.

```js
function Person() {
    this.eyes = 2;
    this.ears = 2;
    this.arms = 2;
    this.hands = 2;
    this.feet = 2;
    this.legs = 2;
    this.species = "Homo sapien";
}
var willieNelson = new Person();
var johnnyCash = new Person();
var patsyCline = new Person();

// Person needs more properties! 
Person.prototype.knees = 2;
Person.prototype.toes = 10;
Person.prototype.elbows = 2;

// Check the values of existing objects for the new properties
document.write(patsyCline.toes); // outputs 10
```

### Objektumok létrehozása az Object.create segítségével

Egy másik módja annak, hogy objektumokat hozzunk létre más objektumokból, az Object.create metódus használata. Ennek a módszernek az az előnye, hogy nem kell konstruktorfüggvényt írni. Egyszerűen csak egy megadott objektum tulajdonságait másold be egy új objektumba. Amikor egy objektum egy másik objektumtól örököl, az objektumot, amelytől örököl, prototípusnak nevezzük.

```js
// create a generic Person 
var Person = {
    eyes: 2,
    arms: 2,
    feet: 2
}
// create the willieNelson object, based on Person 

var willieNelson = Object.create(Person);
// test an inherited property
document.write(willieNelson.feet); // outputs 2
```