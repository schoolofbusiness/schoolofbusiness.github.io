---
category:
  - Adatbázis-tervezés
---

# 2. tananyag

## Az ER-modell szerepét és jelölésrendszere

Az ER-modell (Entity-Relationship model) egy adatmodellezési módszer, amelyet az adatbázisok tervezése során használnak az adatok és azok közötti kapcsolatok reprezentálására. Az ER-modell segít az adatok struktúrájának és szervezettségének megértésében, és lehetővé teszi az adatbázis tervezésének előkészítését. Az ER-modell három fő komponenst tartalmaz: entitásokat, attribútumokat és kapcsolatokat.

### 1. Entitások
   - Az entitások olyan dolgok, objektumok vagy fogalmak, amelyekről információkat szeretnénk tárolni az adatbázisban.
   - Minden entitásnak van egy neve, ami egyediséget biztosít számukra.
   - Az entitásokat általában ellátjuk attribútumokkal, amelyek leírják az entitás tulajdonságait vagy jellemzőit.

### 2. Attribútumok
   - Az attribútumok az entitások tulajdonságait vagy jellemzőit reprezentálják.
   - Például egy "Customer" entitásnak attribútumai lehetnek a neve, címe, telefonszáma, stb.
   - Az attribútumoknak lehet típusa (pl. szöveg, szám, dátum stb.), és lehetnek további tulajdonságaik (pl. egyedi azonosító, kötelező vagy opcionális mező stb.).

### 3. Kapcsolatok
   - A kapcsolatok az entitások közötti kapcsolatokat vagy összekötéseket reprezentálják.
   - Például egy "Order" entitás kapcsolható egy "Customer" entitáshoz, mivel az egy megrendeléshez tartozik egy ügyfél.
   - A kapcsolatoknak lehetnek attribútumaik is, amelyek további információkat tartalmazhatnak a kapcsolatról.

Az ER-modell ábrázolására általában ER-diagramokat használunk, amelyekben a különböző entitásokat négyzetekkel, az attribútumokat ellipszisekkel, a kapcsolatokat vonalakkal és nyilakkal ábrázoljuk. A vonalak és nyilak megmutatják, hogy mely entitások között vannak kapcsolatok, és az attribútumokat az entitásokhoz vagy a kapcsolatokhoz kapcsoljuk.

Az ER-modell segít az adatbázis tervezésében és a kapcsolatok megértésében, ami kulcsfontosságú a hatékony adatbázisok kialakításában és kezelésében. Az ER-modell szerepe adataink struktúrájának és szervezettségének előzetes tervezése, mielőtt azokat az adatbázisrendszerekbe implementálnánk. Ezáltal könnyebben megérthetjük az adatok közötti összefüggéseket és optimalizálhatjuk az adatbázis lekérdezéseket.


## Az ER-modell relációs modellre való átalakításának szabályai

Az ER-modell átalakítása relációs modellre az adatbázis tervezés folyamatának fontos része. Az átalakítás során az ER-diagramban megadott entitásokat, attribútumokat és kapcsolatokat relációkká (táblák) és kapcsolatokká (kulcsok) alakítjuk át. Az átalakítás szabályai segítenek ezt a folyamatot strukturáltan végrehajtani. Az alábbiakban ismertetem és alkalmazom az átalakítás szabályait:

### 1. Entitások átalakítása relációkká

- Minden ER-modellben lévő entitást át kell alakítani egy relációvá (táblává) a relációs adatbázisban.
- Az entitás neve lesz a tábla neve, és az attribútumok nevei lesznek a tábla oszlopainak nevei.

__Példa:__
ER-modell entitás: Customer (attribútumok: CustomerID, FirstName, LastName)
Relációs tábla: Customer (oszlopok: CustomerID, FirstName, LastName)

```er 1. példa
Customer
```

### 2. Kapcsolatok átalakítása relációkká

- Az ER-modellben lévő kapcsolatokat is át kell alakítani relációkká a relációs adatbázisban.
- A kapcsolatoknál az idegen kulcsok (foreign keys) segítenek a kapcsolatok létrehozásában.

__Példa:__
ER-modell kapcsolat: Order (1) - (N) Customer
Relációs tábla: Order (oszlopok: OrderID, CustomerID, OrderDate)
- A CustomerID egy idegen kulcs (foreign key), amely kapcsolatot teremt a Customer táblával.


```er 2. példa
Order ||--o{ Customer : "1..N"
```

### 3. M:N kapcsolatok átalakítása

- Ha az ER-modellben egy M:N kapcsolat van, akkor át kell alakítani egy köztes táblává (kapcsolat táblává), amely tartalmazza az M és N entitások idegen kulcsait.

__Példa:__
ER-modell kapcsolat: Student (M) - (N) Course
Relációs tábla: Enrollment (oszlopok: StudentID, CourseID)
- Az Enrollment tábla tartalmazza a StudentID és CourseID idegen kulcsokat, amelyek a Student és Course táblákkal kapcsolatot teremtenek.

```er 3. példa
Student ||--|{ Course : "M..N"
```
### 4. Többértékű attribútumok átalakítása

- Ha az ER-modellben olyan entitás attribútum szerepel, amely több értéket tartalmazhat (pl. egy több telefon számát tároló attribútum), akkor ezt általában külön relációs táblában kell tárolni, ahol minden érték egy sorban van.

__Példa:__
ER-modell entitás: Employee (attribútum: PhoneNumbers)
Relációs tábla: EmployeePhoneNumbers (oszlopok: EmployeeID, PhoneNumber)

```er 4. példa
Employee ||--o{ PhoneNumber : has
Employee {
int EmployeeID PK
string Name
}
PhoneNumber {
int PhoneNumberID PK
int PhoneNumber
}
```

Az ER-modell átalakítása relációs modellre meghatározza, hogyan lesznek az adatok tárolva a relációs adatbázisban, és hogyan állnak kapcsolatban egymással. Ez a lépés fontos az adatbázis tervezés során, mivel segít megőrizni az adatok integritását és egységességét, valamint hatékonyan lehet lekérdezni az adatokat a későbbi felhasználás során. Az átalakítás szabályai biztosítják, hogy az ER-modell átmenjen a relációs adatbázis modelljébe anélkül, hogy információ veszteség keletkezne vagy az adatok struktúrája összezavarodna.




## A többértékű attribútumok átalakításának lehetőségei

A többértékű attribútumok átalakítása egy adatbázis tervezési folyamat, amely során a relációs adatmodellben található többértékű attribútumokat, például többértékű attribútumokat vagy összetett attribútumokat úgy alakítjuk át, hogy azok a harmadik normálformába (3NF) vagy más magasabb normálformába kerüljenek. A normálformák segítenek az adatok redundanciájának csökkentésében és az adatbázisok integritásának biztosításában. Az alábbiakban bemutatom a többértékű attribútumok átalakításának lehetőségeit és példákat is adok rájuk:

### Attribútum szétválasztása

- Az egy attribútumon belüli több értéket külön relációkban vagy táblákban tároljuk.
   
_Példa:_ 

Vegyük például egy "Felhasználó" táblát, amely tartalmazza a felhasználók nevét és telefonszámát egy "Telefonszámok" attribútumban. Az átalakítás során szétválasztjuk ezt az attribútumot a következőképpen:

"User" tábla: UserID, UserName
"PhoneNumbers" tábla: UserID, PhoneNumber, PhoneNumberType


```er
    User ||--o{ PhoneNumbers : has
    User {
        UserID INT
        UserName VARCHAR
    }
    PhoneNumbers {
        PhoneNumberID INT
        UserID INT
        PhoneNumber VARCHAR
        PhoneNumberType VARCHAR
    }
```


### Összetett attribútum szétválasztása

- Összetett attribútumokat alapvető attribútumokra bontjuk szét.

_Példa:_ 

Tegyük fel, hogy egy "Lakcím" összetett attribútumot tartalmaz egy "Ügyfél" tábla. Az átalakítás során szétválasztjuk az összetett attribúmumot:

"Customer" tábla: CustomerID, Name, Street, City, ZipCode

```er
    Customer {
        CustomerID INT
        Name VARCHAR
        Street VARCHAR
        City VARCHAR
        ZipCode VARCHAR
    }
```

### Reláció bevezetése

- Egy új relációt hozunk létre a többértékű attribútumoknak.

_Példa:_ 

Egy "Könyv" táblánk van, amely tartalmazza az írók neveit többértékű attribútumként. Az átalakítás során egy külön "Írók" táblát hozunk létre:

"Book" tábla: BookID, Title, Authors
"Authors" tábla: AuthorID, Name

Az "Authors" táblában az "AuthorID" lenne az elsődleges kulcs, és az "Authors" és "Book" táblák közötti kapcsolatot egy idegen kulcs biztosítja.

```er
    Book {
        BookID INT
        Title VARCHAR
        AuthorID INT
    }

    Authors {
        AuthorID INT
        Name VARCHAR
    }
```

### Gyenge entitások használata

- Gyenge entitásokat használhatunk olyan többértékű attribútumok kezelésére, amelyek függnek egy másik entitástól.

_Példa:_ 

Egy "Ház" entitás tartalmazza az egyedi házszámokat, de ezek függenek egy "Utca" entitástól. A gyenge entitások használatával kezeljük ezt a kapcsolatot:

"Street" entitás: StreetID, StreetName
"House" gyenge entitás: HouseNumber, StreetID (Az "StreetID" lenne az idegen kulcs az "Street" entitáshoz.)

```er
    Street {
        StreetID INT
        StreetName VARCHAR
    }

    House {
        HouseNumber VARCHAR
        StreetID INT
    }
```

### Ismétlődő csoportok kivonása

- Ismétlődő értékeket tartalmazó attribútumokat kivonhatjuk egy külön relációból, és hivatkozhatunk rájuk a fő entitásban.

_Példa:_ 

Egy "Rendelés" táblánk van, amely tartalmazza a rendelések termékeit egy ismétlődő csoportként. Az átalakítás során egy külön "Rendelési sor" táblát hozunk létre:

"Order" tábla: OrderID, CustomerName, OrderDate
"OrderLine" tábla: OrderLineID, OrderID, ProductName, Quantity
Az "OrderLine" tábla segít kezelni az ismétlődő termékeket az "Order" táblához képest, és minimalizálja az adatok ismétlődését.


```er
    Order {
        OrderID INT
        CustomerName VARCHAR
        OrderDate DATE
    }
    OrderLine {
        OrderLineID INT
        OrderID INT
        ProductName VARCHAR
        Quantity INT
    }
```


Ezek a módszerek segítenek az adatbázisok tervezésében, hogy hatékonyan kezeljék a többértékű attribútumokat, minimalizálják az adatok ismétlődését és biztosítsák az adatintegritást. A megfelelő átalakítási módszer kiválasztása az adott probléma és adatmodell alapján történik.


## N-ágú kapcsolatok


Vegyünk például egy iskolai adatbázist, amelyben tanulók, tantárgyak és tanárok vannak, és azt szeretnénk rögzíteni, hogy melyik tanuló milyen tantárgyat tanul és melyik tanár tanítja azt a tantárgyat. Eredetileg egy N-ágú kapcsolatunk lenne, ami így nézne ki:

- Students
- Subjects
- Teachers
- N-ágú kapcsolat: Students_Subjects

Az N-ágú kapcsolat átalakításához hozzunk létre egy átmeneti táblát, amelyet "Students_Subjects" néven nevezünk el. Ez az átmeneti tábla segít rögzíteni, hogy mely tanuló milyen tantárgyat tanul, és melyik tanár tanítja azt a tantárgyat. Itt vannak a táblák:

1. Students
   - StudentID (Primary Key)
   - StudentName

2. Subjects
   - SubjectID (Primary Key)
   - SubjectName

3. Teachers
   - TeacherID (Primary Key)
   - TeacherName

4. Students_Subjects
   - ID (Primary Key)
   - StudentID (Foreign Key hivatkozva a Students táblára)
   - SubjectID (Foreign Key hivatkozva a Subjects táblára)
   - TeacherID (Foreign Key hivatkozva a Teachers táblára)

Ebben a példában a "Students_Subjects" tábla működik az átmeneti táblaként az N-ágú kapcsolat helyett. Ez az átmeneti tábla lehetővé teszi a tanulók, tantárgyak és tanárok közötti kapcsolatok kezelését, és lehetővé teszi a lekérdezések végrehajtását, például azt, hogy melyik tanuló tanulja melyik tantárgyat, és melyik tanár tanítja azt a tantárgyat.


```er
  Students ||--o{ Students_Subjects : ""
  Students {
    StudentID INT
    StudentName VARCHAR
  }

  Subjects {
    SubjectID INT
    SubjectName VARCHAR
  }

  Teachers {
    TeacherID INT
    TeacherName VARCHAR
  }

  Students_Subjects }o--|| Subjects : ""
  Students_Subjects }o--|| Teachers : ""
  Students_Subjects {
    ID INT
    StudentID INT
    SubjectID INT
    TeacherID INT
  }

```


## A gyenge egyed azonosítása

A "gyenge egyed" kifejezés a relációs adatbázisok területén használt fogalom, amely arra utal, hogy egy adott táblában nincs egyedi azonosító mező vagy kulcs, amely egyedülállóan azonosítaná az egyes rekordokat. Ezzel szemben a "erős egyedek" olyan táblákban találhatók, ahol van egy vagy több olyan mező, amelyek egyedülállóan azonosítják a rekordokat, például egy azonosító szám vagy egyedi azonosító.

A gyenge egyedek azok a táblák, amelyek nem rendelkeznek saját egyedi azonosítóval, és általában más táblákkal vagy relációkkal vannak kapcsolatban. A gyenge egyedek az azonosításukhoz más mezőket használnak, amelyek egy másik táblában található egyedi azonosítóra vagy kulcsra mutatnak.

Például vegyük egy rendelések és tételek adatbázisát. A "Rendelések" táblában lehet egy "rendelés azonosító" mező, amely egyedi azonosítót tartalmaz, így erős egyedekről beszélünk. Azonban a "Tételek" táblában lehet egy "rendelés azonosító" mező is, amely azt mutatja, hogy melyik rendeléshez tartozik az adott tétel. Ez a mező nem egyedi azonosító, mivel több tétel is tartozhat ugyanahhoz a rendeléshez. Tehát a "Tételek" tábla esetében gyenge egyedekről beszélünk, és az azonosításukhoz az "rendelés azonosító" mezőt kell használni.

Gyenge egyedek esetén az azonosításukhoz gyakran több mezőt kell kombinálni, hogy egyedülálló azonosítót képezzenek. Az ilyen mezők kombinációja a gyenge egyed kulcsa vagy azonosítója. Az adatbázis-tervezés során fontos figyelembe venni a gyenge egyedeket és azok azonosítását, hogy biztosítsuk az adatintegritást és az adatbázis szabályainak megfelelő működést.