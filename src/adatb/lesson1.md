---
category:
  - Adatbázis-tervezés
  - Haladó lekérdezések
---

# 1. tananyag

## Az egymásba ágyazott lekérdezések szintaxisát

Az egymásba ágyazott lekérdezések (más néven al-lekérdezések vagy beágyazott lekérdezések) hasznos technikák a SQL-ben, amelyek lehetővé teszik összetett adatkinyeréseket és -manipulációkat. Ezek a lekérdezések egy lekérdezésen belül tartalmaznak egy vagy több másik lekérdezést. A következőkben bemutatom az egymásba ágyazott lekérdezések szintaxisát lépésről lépésre:

1. **Külső lekérdezés kiválasztása:**
   - Kezdd a lekérdezést a külső lekérdezés megadásával, amely tartalmazni fogja a beágyazott lekérdezést. Ebben a lekérdezésben általában az eredmények végső formáját határozzuk meg.

   ```sql
   SELECT column1, column2
   FROM table1
   WHERE condition;
   ```

2. **Beágyazott lekérdezés hozzáadása:**
   - Az egymásba ágyazott lekérdezést a külső lekérdezés `WHERE` feltételében vagy a `JOIN` műveletben lehet elhelyezni. A beágyazott lekérdezés az adatok szűrésére vagy kiválasztására szolgál, és a külső lekérdezés eredményének része lesz.

   ```sql
   SELECT column1, column2
   FROM table1
   WHERE column3 = (SELECT column4 FROM table2 WHERE condition);
   ```

3. **Beágyazott lekérdezés paramétereinek meghatározása:**
   - A beágyazott lekérdezésben megadhatunk feltételeket vagy értékeket, amelyeket dinamikusan állíthatunk be a külső lekérdezés eredményei alapján.

   ```sql
   SELECT column1, column2
   FROM table1
   WHERE column3 = (SELECT column4 FROM table2 WHERE column5 = 'value');
   ```

4. **Beágyazott lekérdezés eredményének használata:**
   - Az egymásba ágyazott lekérdezés eredményét használhatod például összehasonlításokhoz, aggregálásokhoz vagy az összesített eredmény megjelenítéséhez a külső lekérdezésben.

   ```sql
   SELECT column1, column2
   FROM table1
   WHERE column3 > (SELECT AVG(column4) FROM table2);
   ```

5. **További beágyazott lekérdezések hozzáadása (opcionális):**
   - További beágyazott lekérdezéseket is hozzáadhatsz a külső lekérdezéshez, hogy még összetettebb feltételeket és eredményeket érj el.

   ```sql
   SELECT column1, column2
   FROM table1
   WHERE column3 > (SELECT AVG(column4) FROM table2 WHERE column5 = (SELECT MAX(column6) FROM table3));
   ```

Az egymásba ágyazott lekérdezések segítségével a SQL nyelv rendkívül erőteljes módon használható az adatok összetett lekérdezésére és manipulálására. Fontos azonban ügyelni a teljesítményre, és szükség esetén optimalizálni a lekérdezéseket, mivel az egymásba ágyazott lekérdezések bonyolultsága és mélysége befolyásolhatja a lekérdezés futási idejét.


----------------

Természetesen, készítsünk egy egyszerű példaadatbázist és táblázatot, amelyek segítségével bemutathatjuk az egymásba ágyazott lekérdezések használatát. Nézzük meg a következő példákat:

**Példa: Egy egyszerű adatbázis tanulókkal és értékeléseikkel.**

Táblázatok:

1. **students** - A tanulók adatait tartalmazza.
   - student_id (egyedi azonosító)
   - student_name (tanuló neve)
   - student_age (tanuló kor)
   - course_id (tanuló aktuális tanfolyamának azonosítója)

2. **courses** - A tanfolyamok adatait tartalmazza.
   - course_id (egyedi azonosító)
   - course_name (tanfolyam neve)
   - instructor (tanfolyam oktatója)

3. **grades** - A tanulók értékeléseit tartalmazza.
   - grade_id (egyedi azonosító)
   - student_id (a tanuló egyedi azonosítója)
   - course_id (a tanuló aktuális tanfolyamának azonosítója)
   - grade (tanuló érdemjegye)


**Táblázat: students**

| student_id | student_name   | student_age | course_id |
|------------|----------------|-------------|-----------|
| 1          | John Doe       | 20          | 1         |
| 2          | Jane Smith     | 22          | 2         |
| 3          | Alice Johnson  | 19          | 1         |

**Táblázat: courses**

| course_id | course_name | instructor    |
|-----------|-------------|---------------|
| 1         | Math        | Prof. Johnson |
| 2         | Physics     | Dr. Smith     |

**Táblázat: grades**

| grade_id | student_id | course_id | grade |
|----------|------------|-----------|-------|
| 1        | 1          | 1         | B     |
| 2        | 1          | 2         | A     |
| 3        | 2          | 1         | A     |
| 4        | 3          | 2         | B     |


Most nézzünk meg néhány példát az egymásba ágyazott lekérdezésekkel:

1. **Az összes tanuló neve és életkora, akiknek legalább egy 'Math' nevű tanfolyamuk van:**

   ```sql
   SELECT student_name, student_age
   FROM students
   WHERE student_id IN (SELECT student_id FROM grades WHERE course_id = (SELECT course_id FROM courses WHERE course_name = 'Math'));
   ```

2. **Azoknak a tanulóknak a neve, akiknek a 'Math' nevű tanfolyamra legalább egy 'A' érdemjegyet kaptak:**

   ```sql
   SELECT student_name
   FROM students
   WHERE student_id IN (SELECT student_id FROM grades WHERE course_id = (SELECT course_id FROM courses WHERE course_name = 'Math') AND grade = 'A');
   ```

   Az alábbi SQL lekérdezés eredménye azoknak a hallgatóknak a neveit tartalmazza, akik a **'Math'** kurzuson *('course_name = 'Math')* **'A'** érdemjegyet *('grade = 'A')* kaptak:

   ```txt
   | student_name   |
   |----------------|
   | Jane Smith     |
   ```

   Az eredmény csak Jane Smith nevét tartalmazza, mivel csak ő felel meg a lekérdezés által meghatározott feltételeknek.

3. **Azoknak a tanulóknak a neve és átlagos életkora, akiknek több mint egy tanfolyamuk van:**

   ```sql
   SELECT student_name, AVG(student_age) AS average_age
   FROM students
   WHERE student_id IN (SELECT student_id FROM (SELECT student_id, COUNT(course_id) AS course_count FROM grades GROUP BY student_id) AS course_counts WHERE course_counts.course_count > 1)
   GROUP BY student_name;
   ```


   Az eredményben csak John Doe található meg, mivel ő az egyetlen hallgató, aki több mint egy kurzuson vett részt (a táblázat alapján). Az átlagéletkor is csak az ő életkorát tartalmazza. Az összes többi hallgató vagy egyáltalán nem vesz részt kurzusokon, vagy csak egy kurzuson vett részt, ami nem felel meg a feltételnek, hogy a kurzusok száma több mint 1 legyen.

   ```txt
   | student_name   | average_age |
   |----------------|-------------|
   | John Doe       | 20          |
   ```


Ezek a példák bemutatják, hogyan lehet egymásba ágyazott lekérdezéseket használni egy egyszerű adatbázisban, hogy komplex adatkinyerést végezhess. Azonban érdemes megjegyezni, hogy a valóságban az adatbázisok és a lekérdezések sokkal bonyolultabbak lehetnek, és az optimalizációra is figyelmet kell fordítani a teljesítmény érdekében.

## Feladatok

**Tábla 1: Customers (Ügyfelek) tábla**

| CustomerID | FirstName | LastName | Email              | PhoneNumber |
|------------|-----------|----------|--------------------|-------------|
| 1          | John      | Smith    | john.smith@abc.com | 123-456-789 |
| 2          | Mary      | Johnson  | mary.j@xyz.com     | 987-654-321 |
| 3          | David     | Davis    | david.d@def.com    | 555-555-555 |
| 4          | Sarah     | White    | sarah.w@ghi.com    | 333-333-333 |
| 5          | Michael   | Lee      | michael.l@jkl.com  | 111-111-111 |

**Tábla 2: Orders (Rendelések) tábla**

| OrderID | CustomerID | OrderDate  |
|---------|------------|------------|
| 101     | 1          | 2023-01-15 |
| 102     | 2          | 2023-02-20 |
| 103     | 1          | 2023-03-05 |
| 104     | 3          | 2023-04-10 |
| 105     | 2          | 2023-05-15 |

**Tábla 3: OrderDetails (Rendelés részletek) tábla**

| OrderDetailID | OrderID | ProductID | Quantity |
|---------------|---------|-----------|----------|
| 1             | 101     | 1         | 2        |
| 2             | 102     | 2         | 1        |
| 3             | 102     | 3         | 3        |
| 4             | 103     | 1         | 1        |
| 5             | 104     | 4         | 2        |
| 6             | 105     | 5         | 4        |

**Tábla 4: Products (Termékek) tábla**

| ProductID | ProductName | UnitPrice |
|-----------|-------------|-----------|
| 1         | Laptop      | 800.00    |
| 2         | Mobiltelefon| 400.00    |
| 3         | Tablet      | 250.00    |
| 4         | Monitor     | 300.00    |
| 5         | Egér        | 20.00     |


Nézzük akkor a feladatokat:

**Feladat 1:** Írj egy SQL lekérdezést, amely kiválasztja az ügyfelek nevét és azok rendeléseinek számát.

**Megoldás 1:**
```sql
SELECT c.FirstName, c.LastName, COUNT(o.OrderID) AS NumberOfOrders
FROM Customers c
LEFT JOIN Orders o ON c.CustomerID = o.CustomerID
GROUP BY c.FirstName, c.LastName;
```

**Feladat 2:** Írj egy SQL lekérdezést, amely listázza azokat a termékeket (ProductID, ProductName), amelyekből kevesebb, mint 10 darab van a raktárkészleten.

**Megoldás 2:**
```sql
SELECT p.ProductID, p.ProductName
FROM Products p
JOIN Inventory i ON p.ProductID = i.ProductID
WHERE i.QuantityInStock < 10;
```

**Feladat 3:** Írj egy SQL lekérdezést, amely meghatározza a legtöbb rendelést leadó ügyfél nevét és a rendelések számát.

**Megoldás 3:**
```sql
SELECT c.FirstName, c.LastName, COUNT(o.OrderID) AS OrderCount
FROM Customers c
INNER JOIN Orders o ON c.CustomerID = o.CustomerID
GROUP BY c.FirstName, c.LastName
ORDER BY OrderCount DESC
LIMIT 1;
```

**Feladat 4:** Írj egy SQL lekérdezést, amely kiválasztja azokat a rendeléseket (OrderID), amelyekhez tartozik laptop (ProductID: 1).

**Megoldás 4:**
```sql
SELECT od.OrderID
FROM OrderDetails od
WHERE od.ProductID = 1;
```

**Feladat 5:** Írj egy SQL lekérdezést, amely meghatározza a legdrágább terméket (ProductName) és annak az árát.

**Megoldás 5:**
```sql
SELECT p.ProductName, p.UnitPrice
FROM Products p
WHERE p.UnitPrice = (SELECT MAX(UnitPrice) FROM Products);
```