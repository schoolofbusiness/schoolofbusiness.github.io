# 4. tananyag gyakorló


1. **Számológép**: Készíts egy programot, amely képes két szám összeadására és kivonására. Kérje meg a felhasználót, hogy válassza ki a műveletet, majd adja meg a két számot, és írja ki az eredményt.

```python
operation = input("Válassz műveletet (+ vagy -): ")
num1 = float(input("Első szám: "))
num2 = float(input("Második szám: "))

if operation == '+':
    result = num1 + num2
elif operation == '-':
    result = num1 - num2
else:
    result = "Érvénytelen művelet"

print("Eredmény:", result)
```

2. **Páros vagy páratlan**: Kérj be egy egész számot a felhasználótól, majd állapítsd meg, hogy páros vagy páratlan.

```python
num = int(input("Adj meg egy egész számot: "))

if num % 2 == 0:
    print(num, "páros.")
else:
    print(num, "páratlan.")
```

3. **Legnagyobb szám keresése**: Kérj be három számot a felhasználótól, majd írd ki a legnagyobbat.

```python
num1 = float(input("Első szám: "))
num2 = float(input("Második szám: "))
num3 = float(input("Harmadik szám: "))

max_num = num1

if num2 > max_num:
    max_num = num2
if num3 > max_num:
    max_num = num3

print("A legnagyobb szám:", max_num)
```

4. **Számok összege**: Kérj be egy pozitív egész számot a felhasználótól, majd számold ki az összes pozitív egész számot 1-től a megadott számig.

```python
n = int(input("Adj meg egy pozitív egész számot: "))
sum_of_numbers = 0

if n > 0:
    for i in range(1, n + 1):
        sum_of_numbers += i

print("Az egész számok összege 1-től", n, "ig:", sum_of_numbers)
```

5. **Szöveg inverz**: _for ciklus nélkül_, Kérj be egy szöveget a felhasználótól, majd írd ki a szöveg inverzét (fordított sorrendben).

```python
text = input("Adj meg egy szöveget: ")
reversed_text = text[::-1]
print("A szöveg inverze:", reversed_text)
```

6. **Karakterek számolása**: Kérj be egy szöveget és egy karaktert a felhasználótól, majd számold meg, hány ilyen karakter van a szövegben.

```python
text = input("Adj meg egy szöveget: ")
char = input("Adj meg egy karaktert: ")
count = 0

for c in text:
    if c == char:
        count += 1

print("A(z)", char, "karakter", count, "alkalommal szerepel a szövegben.")
```

7. **Számok szorzata**: Kérj be egy pozitív egész számot a felhasználótól, majd számold ki az összes pozitív egész szám szorzatát 1-től a megadott számig.

```python
n = int(input("Adj meg egy pozitív egész számot: "))
product = 1

if n > 0:
    for i in range(1, n + 1):
        product *= i

print("Az egész számok szorzata 1-től", n, "ig:", product)
```

8. **Hónap nevek**: Kérj be egy egész számot a felhasználótól (1-12 közötti), majd írd ki a hozzá tartozó hónap nevét.

```python
month_num = int(input("Adj meg egy hónap sorszámát (1-12): "))

if 1 <= month_num <= 12:
    months = ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"]
    month_name = months[month_num - 1]
    print("A(z)", month_num, "hónap neve:", month_name)
else:
    print("Hibás bemenet. Kérlek adj meg egy érvényes hónap sorszámot.")
```

9. **Hónap napjainak száma**: Kérj be egy hónap nevét a felhasználótól, majd írd ki, hány napja van az adott hónapnak.

```python
month = input("Adj meg egy hónap nevét: ").capitalize()

if month == "Január" or month == "Március" or month == "Május" or month == "Július" or month == "Augusztus" or month == "Október" or month == "December":
    days = 31
elif month == "Április" or month == "Június" or month == "Szeptember" or month == "November":
    days = 30
elif month == "Február":
    days = "28 vagy 29"
else:
    days = "Érvénytelen hónap"

print(month, "hónapban", days, "nap van.")
```

10. **Szám faktoriálisa**: Kérj be egy pozitív egész számot a felhasználótól, majd számold ki a szám faktoriálisát.

```python
n = int(input("Adj meg egy pozitív egész számot: "))
factorial = 1

if n >= 0:
    for i in range(1, n + 1):
        factorial *= i

print(n, "faktoriálisa:", factorial)
```

11. **Osztók keresése**: Kérj be egy pozitív egész számot a felhasználótól, majd írd ki az összes osztóját.

```python
n = int(input("Adj meg egy pozitív egész számot: "))
divisors = []

if n > 0:
    for i in range(1, n + 1):
        if n % i == 0:
            divisors.append(i)

print(n, "osztói:", divisors)
```

12. **Szöveg fordítása**: __for ciklussal__, Kérj be egy szöveget a felhasználótól, majd írd ki ugyanazt a szöveget fordítva.

```python
text = input("Adj meg egy szöveget: ")
reversed_text = ""

for char in text:
    reversed_text = char + reversed_text

print("A szöveg fordítva:", reversed_text)
```

13. **Karakterek számolása szóban**: Kérj be egy szót és egy karaktert a felhasználótól, majd számold meg, hány alkalommal szerepel a karakter a szóban.

```python
word = input("Adj meg egy szót: ")
char = input("Adj meg egy karaktert: ")
count = 0

for c in word:
    if c == char:
        count += 1

print("A(z)", char, "karakter", count, "alkalommal szerepel a szóban.")
```

14. **Számok szorzatának előjelének ellenőrzése**: Kérj be két egész számot a felhasználótól, majd ellenőrizd, hogy a két szám szorzatának előjele pozitív vagy negatív.

```python
num1 = int(input("Adj meg egy egész számot: "))
num2 = int(input("Adj meg még egy egész számot: "))

if (num1 > 0 and num2 > 0) or (num1 < 0 and num2 < 0):
    sign = "pozitív"
else:
    sign = "negatív"

print("A két szám szorzatának előjele", sign, "azaz a szorzat", sign, "szám.")
```