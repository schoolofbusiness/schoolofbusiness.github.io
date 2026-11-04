# 5. tananyag

:::tip 🚀
A processzor (feldolgozó egység) a számítógép egyik többfunkciós része, mely adat- és programfeldolgozást, vezérlést, illetve ki- és bemeneti funkciókat is ellát. Mindezek a funkciók egy nagy integráltságú áramköri lapkán helyezkednek el, ezért mikroprocesszornak
szokás nevezni. A mikroprocesszor angol rövidítése a __CPU__ (_Central Processing Unit_) feladataira utal: központi vezérlő egység.
:::

## A processzorok felépítése, jellemzőik

A processzorok két jellemzően eltérő tulajdonságú csoportja alakult ki a fejlődés során: a __RISC__ (_Reduced Instruction Set Computer_ típusú), azaz az egyszerű utasítássokkal dolgozó processzorok, valamint a __CISC__ (_Complete Instruction Set Computer_) típusú processzorok, azaz magyarul az összetett utasításokkal dolgozó egységek. Lássuk a különbségeket:

|                                CISC                               |                                                 RISC                                                 |
|:-----------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------:|
| Egy utasítás végrehajtásához több gépi ciklus (órajel) szükséges. |                       Egy utasítás végrehajtásához egy gépi ciklus is elégséges                      |
|              A memóriát bármely utasítás használhatja             | Két utasítás használhatja csak a memóriát: a Load, vagyis a töltés és a Store, azaz a tárol utasítás |
|       Nem jellemző a pipeline csővezeték típusú feldolgozás       |                           Jellemző a pipeline csővezeték típusú feldolgozás                          |
|               Az utasítások mérete (bitben) változik              |                                Az utasítások mérete (bitben) rögzített                               |
|               Sok és összetett (bonyolult) utasítás               |                                      Kevés és egyszerű utasítás                                      |
|           A fordítóprogramok bonyolultsági szintje magas          |                           A fordítóprogramok bonyolultsági szintje alacsony                          |


A két rendszerből adódó következmények közé tartoznak: - A __CISC__ rendszereket általános feladatokra használják, lassúbbak - A __RISC__ rendszerek célfeladatokat látnak el, gyorsabbak.

A processzorokat egyes jellemzői alapján összehasonlíthatjuk, és egy adott feladatra való alkalmasságukat megítélhetjük. Ezek a jellemzők a processzorban lévő kisebb egységek tulajdonságait adják meg.

A mikroprocesszorok történetének kezdetén az íróvesszőt az _Intel_ cég tartotta a kezében - ha lehet ezzel a lírainak szánt képzavarral folytatni a fejezetet. Ez indokolja, hogy a következőkben az _Intel_ processzorairól esik több szó, de feltétlenül megemlítjük azokat az eredeti processzor gyártókat (angolul original manufacturers), amelyek később léptek be a piacra.

### A CPU-k típusai és típusjelei

Tájékoztatást ad a gyártóról, a termék fejlettségéről. Az utóbbi időben a „_földi halandó_” kategóriába tartozó átlagos tájékozottságú felhasználó már nem tudja könnyen megítélni a __CPU__ jóságát. Csak a két legismertebb processzor gyártó típusjelet elnézve ez könnyen belátható:

### Az Intel fontosabb mikroprocesszorai

| Processzor típus  | Megjelenés éve | Sín szélessége |                                                    Leírás                                                                     |
|:-----------------:|:--------------:|:--------------:|:-----------------------------------------------------------------------------------------------------------------------------:|
|       4004        | 1971 |    4   |                                                      -                                                                                          |
|       8086        | 1978 |   16   |                                  Az Intel első generációs 80x86 processzora                                                                     |
|       80286       | 1982 |   16   | Második generációs 80x86 processzor, új utasításokkal, a védett módú működés, 16 MB memóriaméret támogatása                                     |
|       80386       | 1985 |   32   |                Harmadik generációs 80x86 processzor: 32 bit architektúrával, új üzemmódokkal                                                    |
|       80486       | 1989 |   32   |      Negyedik generációs 80x86 processzor beépített lebegőpontos egységgel (FPU - Floating-point Unit), beépített órajel többszörözővel.        |
|      Pentium      | 1993 |   32   | Ötödik generációs x86 processzor:szuperskalár architektúrával (több utasítás végrehajtása egy időben), MMX technológia, multimédia utasítások   |
|     Pentium II    | 1997 |   32   |                                                        Hatodik generációs x86 processzor                                                        |
|      Celeron      | 1998 |   32   |                                   Alacsony árfekvésű Pentium II, Pentium III and Pentium 4 processzor változat                                  |
|    Pentium III    | 1999 |   32   |                                              Javított és gyorsított Pentium II processzor változat                                              |
|     Pentium 4     | 2000 | 32, 64 |                                                         Új generációs Pentium processzor                                                        |
|        Xeon       | 2001 | 32, 64 |                                    Nagy teljesítményű Pentium 4 processzor változat, elsősorban szerverekbe                                     |
|      Itanium      | 2001 |   64   |                                                   Nagy teljesítményű 64-bites mikroprocesszor                                                   |
|     Pentium M     | 2003 |   32   |                                           Mobil eszközökhöz tervezett Pentium mikroprocesszor változat                                          |
|     Celeron D     | 2004 | 32, 64 |                                   Alacsony árfekvésű Pentium 4 processzor változat asztali számítógépekhez.                                     |
|     Core Solo     | 2006 |   32   |                                                 32-bites egy magos (single-core) mikroprocesszor                                                |
|      Core Duo     | 2006 |   32   |                                                  32-bites két magos(dual-core) mikroprocesszor                                                  |
|       Core 2      | 2006 |   64   |                                                            64-bites mikroprocesszor.                                                            |
| Pentium Dual-Core | 2007 |   64   |                                                   64-bites alacsony árfekvésű mikroprocesszor.                                                  |
| Celeron Dual-Core | 2008 |   64   |                                                   64-bites alacsony árfekvésű mikroprocesszor                                                   |
|        Atom       | 2008 | 32, 64 |                                                Különlegesen alacsony fogyasztású mikroprocesszor                                                |
|      Core i7      | 2008 | 32, 64 |                                                             64-bites mikroprocesszor                                                            |
|      Core i5      | 2009 | 32, 64 |                                                             64-bites mikroprocesszor                                                            |
|      Core i3      | 2010 | 32, 64 |                                                             64-bites mikroprocesszor                                                            |

#### Az AMD fontosabb mikroprocesszorai

| Processzor típusjel | Megjelenés éve | Sín szélesség |                          Leírás                          |
|:-------------------:|:--------------:|:-------------:|:--------------------------------------------------------:|
|        29000        |      1988      |       32      |            32-bit embedded RISC microprocessor           |
|          K5         |      1996      |       32      |                Pentium-osztályú processzor               |
|          K6         |      1997      |       32      |          Pentium/Pentium II- osztályú processzor         |
|         K6-2        |      1998      |       32      |  Pentium II- osztályú processzor, K6 javított változata  |
|        K6-III       |      1999      |       32      | Pentium II- osztályú processzor, K6-2 javított változata |
|          K7         |      1999      |       32      |            Pentium III/IV osztályú processzor            |
|          K8         |      2003      |       64      |            x86 nyolcadik generációs processzor           |
|         K10         |      2007      |       64      |           x86 kilencedik generációs processzor           |


A további eredeti processzorgyártók gyártmánytípusainak egy rövid névsorát mindenképpen érdemes elolvasni: __ARM__, __Cyrix__, __Motorola__, __National__ __Semiconductor__, __NEC__, __Sun__ __Microsystems__, __Texas__ __Instruments__, __VIA__.

### A processzor sínrendszerei és regiszterek méretének összefüggései

A regiszter a processzor belsejében található rendkívül gyors, de kisméretű átmeneti adattárolást lehetővé tevő tároló. Mérete (amit bitben mérünk) befolyásolja, hogy egy-egy műveletnél milyen nagy (hány kettes számrendszerbeli számból álló) számmal tudunk műveletet végezni. Ezt a processzor által használt szóhossznak is nevezzük. Tipikus értékei: __8, 16, 32, 64__ bit. Mivel az adatoknak és utasításoknak valahogy el kell jutni a regiszterekbe, és onnan továbbítani is kell azokat, ún. belső sínrendszert (_értsd: kis méretű „vezetékek kötege”_) kell használni.

Processzor teljesítménye attól is függ, hogy ez a belső sín (más néven adatbusz) hány „vezetékből áll”, azaz egy időben hány bitet tud párhuzamosan továbbítani (a mai síneket tipikusan __>=64__ bitszélesség jellemzi). Hiába tud a processzor nagy hosszúságú számokon nagy gyorsasággal adatokat továbbítani saját belső rendszerében, ha a számítógép központi tárolójában, a memóriában nincs elég elérhető tároló hely a számára. Ezt a jellemzőt a címbusz bitszélességével jellemezzük, s következőt kell érteni rajta:

Ha rekeszeket – pl. postafiókokat a postán – meg akarok különböztetni egymástól, akkor sorszámokat rakok rájuk. Hogy hány rekeszt tudok megkülönböztetni, attól függ, hogy hány számjegyből áll a sorszám. Ha két számjegyet használunk és nincs 0 sorszámú fiók, akkor összesen 99 darab rekeszt tudunk azonosítani (értsd: bérlőknek kiadni és a saját postájukat a megfelelő rekeszbe tenni). A számítógép fő tárolójának (_a memóriának_) a tároló rekeszeit
is sorszám azonosítja, s az adatok elhelyezését befolyásolja, hogy a rekeszek sorszáma hány számjegyből (itt kettes számrendszerbeli számjegyekről beszélünk) áll. Ha kevésből, akkor sokszor kell a főtárba írni, onnan kiolvasni adatot, ami időveszteséget és munkatöbbletet okoz.

Míg a legkorábbi _20 bites_ címbusz csak __1 MB__-nyi memória használatát tett lehetővé, addig a jelenlegi legnagyobb szélességű címbusz akár __16 TB__-nyi memória kezelését is lehetővé teszi. Nézzünk egy történeti áttekintést a kezelhető memóriaméretek növekedésére vonatkozóan:


|                                  Processzorcsalád                                  | Címbusz mérete | Címezhető tárterület MB-ban | Címezhető tárterület GB-ban | Címezhető tárterület TB-ban |
|:----------------------------------------------------------------------------------:|:--------------:|:---------------------------:|:---------------------------:|:---------------------------:|
|                                      8088/8086                                     |     20-bit     |              1              |              —              |              —              |
|                                      286/386SX                                     |     24-bit     |              16             |              —              |              —              |
|                                386DX/486/Pentium/K6                                |     32-bit     |            4,096            |              4              |              —              |
| Pentium Pro, Pentium II, Pentium III, Celeron, Pentium 4, Athlon, Duron, Athlon 64 |     36-bit     |            65,536           |              64             |              —              |
|                                       Opteron                                      |     40-bit     |          1,048,576          |             1024            |              1              |
|                                       Itanium                                      |     44-bit     |          16,777,216         |            16,384           |              16             |


### Az órajel frekvencia

Az órajel-frekvencia lényegének megértéséhez repüljünk vissza az időben, s képzeljük magunkat egy római hadigálya evezője mögé. Ha az evezősök öszsze-vissza húznák a lapátokat, akkor a gálya nem haladna valami gyorsan. Ha valaki ütemesen dobol, vagyis megadja, hogy mikor kell húzni az evezőt, a hajó nagyobb sebességet érhet el. Nem nehéz elképzelni, hogy gyorsabb dobolás (esetünkben egy szűk határon belül) növeli a hajó sebességét.

A processzor órajele a fentiekhez kísértetiesen hasonló módon működik: ütemezi, hogy a processzor mikor végezzen műveletet. Magasabb órajel egységnyi idő alatt több adat feldolgozását jelenti. Az órajel gyakoriságát __Hertz__-ben mérjük, jele __Hz__. 14 __Hz__ tehát azt jelenti, hogy valami (pl. egy húr) másodpercenként 14-et rezeg (vált állapotot). A processzorok és néhány más számítógépes egység órajelét a __Hz__ milliószorosával __MHz__ (_Mega Hertz_) vagy ennek ezerszeresével __GHz__ (_Giga Hertz_) írjuk le. Az órajel gyakorisághoz kapcsolódó további mértékegység a __MIPS__ (_Million Instruction Per Second_), azaz millió utasítás másodpercenként, mely szintén a processzor teljesítményét írja le.

A processzorok és a számítógép többi részének összekapcsolására a processzorfoglalatok szolgálnak. Ezek követve a processzortípusok fejlődését, több, egymástól többé-kevésbé eltérő szabványos csoportba oszthatók. Mivel a helytelen kiválasztásuk, pontosabban ha a foglalathoz nem jó processzort vásárolunk, lehetetlenné teheti a működést, most részletesen foglalkozunk-e terület szabványaival is.

Napjaink processzorainak tipikus órajel frekvenciái:

|       CPU típus     |   CPU sebesség (MHz) | CPU órajel többszörözés |   Alaplap sebesség (MHz) |
|:-------------------:|:--------------------:|:-----------------------:|:------------------------:|
|      Pentium 4      |         1300         |          3.25x          |            400           |
|      Pentium 4      |         1400         |           3.5x          |            400           |
|      Pentium 4      |         1500         |          3.75x          |            400           |
|      Pentium 4      |         1600         |            4x           |            400           |
|   Pentium 4/Celeron |          1700        |           4.25x         |             400          |
|      Pentium 4      |         1800         |           4.5x          |            400           |
|      Pentium 4      |         1900         |          4.75x          |            400           |
|      Pentium 4      |         2000         |            5x           |            400           |
|      Pentium 4      |         2200         |           5.5x          |            400           |
|      Pentium 4      |         2400         |            6x           |            400           |
|      Pentium 4      |         2266         |          4.25x          |            533           |
|      Pentium 4      |         2400         |           4.5x          |            533           |
|      Pentium 4      |         2500         |          6.25X          |            400           |
|      Pentium 4      |         2533         |          4.75x          |            533           |
|      Pentium 4      |         2600         |           6.5x          |            400           |
|      Pentium 4      |         2660         |            5x           |            533           |
|      Pentium 4      |         2800         |          5.25x          |            533           |
|      Pentium 4      |         3060         |          5.75x          |            533           |
|      Pentium 4      |         3200         |            4x           |            800           |
|      Pentium 4      |         3400         |          4.25x          |            800           |
|       Itanium       |          733         |          2.75x          |            266           |
|       Itanium       |          800         |            3x           |            266           |
|      Itanium 2      |         1000         |           2.5x          |            400           |

A táblázatban látható órajel többszörözési érték azt jelenti, hogy a __CPU__ egy órajel alatt több műveletet végez. Mértéke a __CPU__ belső órajele jellemzően a külső adatbusz órajelének egész számú, vagy tört (de meghatározott) számú szorzata. Az órajel többszörözés csillapítja a nagy sebességű processzor és az alacsonyabb frekvencián működő külső eszközök közötti sebességkülönbséget.

### Gyorsító tárak (cache)

A gyorsító tárak jellemzően statikus __RAM__ cellákból építik, mivel az __SRAM__ cellák jellemző tulajdonsága, hogy nem kell frissíteni a tartalmát, hiszen cellái flip-flop (billenő) áramkörökből állnak (_1 bit tárolásához 4 vagy 6 tranzisztort használnak_), melyekben az információt az áramvezetés iránya hordozza. Ez a megoldás rövidebb adatkiolvasási időt eredményez: _15 – 20 ns_.

A cache memória egy hidat képez az operatív tár és a CPU között. Használatát az indokolja, hogy a __CPU__ lényegesen gyorsabb a memóriánál, ami abban nyilvánul meg, hogy a memória nem tudja elég gyorsan szolgáltatni az adatokat a processzor számára – a 80386 DX – 33 MHz típus feletti verzióknál, vagyis ősidők óta. Ezt a sebességkülönbséget a gyors SRAM cellákból kialakított cache küszöböli ki oly módon, hogy a memória tartalmának egy részét – méghozzá azt, amelyet várhatóan a processzor legközelebb kérni fog – beolvassák a cache-be. Innen fogja a processzor megkapni – rövid idő alatt – az adatokat. A rendszer gyorsulása attól függ, hogy milyen hatásfokkal tudjuk megjósolni, azt, hogy a processzornak milyen adatokra lesz szüksége a következő órajel ciklusokban. A találati arány a különféle megoldásoknál elérheti a 94 %-os hatékonyságot. A cache elhelyezkedése kétféle lehet: __look-trough__ (_leválasztó_) cache, mely a processzor és a memória között helyezkedik el, illetve a __look-aside__ (_mellérendelt_) cache.


![1. ábra: Look-aside cache](/assets/images/pc4/1.jpg)


![2. ábra:Look-trough cache](/assets/images/pc4/2.jpg)



Az első megoldásnál, ha az adat nincs a cache-ben akkor az a kérést továbbítja a memóriának (ez hosszabb időbe telik, mint ha a __CPU__ eleve a memóriához fordulna). A leválasztó _cache_ használata akkor előnyös, ha multiprocesszoros, osztott memóriájú rendszert használunk (a cache-ből történő olvasás ideje alatt a memóriát a másik processzor használhatja). A mellérendelt _cache_ megvalósítása olcsóbb az előbbinél, viszont a memóriával párhuzamosan történő működése miatt a __CPU__ akkor is foglalja a memóriát, ha az adatot a _cache_-ből kapja meg. Ezért a mellérendelt _cache_ multiprocesszoros gépeken nem használható.

A többszintű gyorsító tár megoldásoknál a processzorhoz legközelebb, a regiszterekével összemérhető gyorsaságú __Level1 Cache__ (_L1_) áll. Jellemző mérete _8 - 64 KB_ és magára a processzorra integrálják.
A másodlagos __Level2 Cache__ (_L2_) nagyobb és lassabb az elsődleges gyorsító tárnál, tipikus mérete _64 KB - 2MB_, rendszerint az alaplapon vagy a bővítő lapon (_daugterboard_) található.
A harmadik szintű gyorsító tár, a __Level3 Cache__ (_L3_) az alaplapon helyezkedik el a processzor és a főmemória között, feladata a __Level2 cache__ adatokkal történő ellátása a sebességkülönbség kiegyenlítése céljából.


### A processzor csatolófelületek és foglalatok

A processzor foglalat hozza létre a kapcsolatot a mikroprocesszor és az alaplapra integrált áramközök, pl. közvetlenül az __FSB__ (angolul _Front Side Bus_), az előoldali buszrendszer között.
A különféle kialakítások a processzorok fejlődési útja során létrejött megoldások kiszolgálására születtek: a nagyobb feldolgozási teljesítmény több csatlakozó tüskét igényelt, az egyes módosulások nem csak a tűelrendezés változásaiban, hanem akár a processzor felhelyezési orientációjában is változást okozott (pl. _Socket és Slot szabványok esetén_).


| Foglalatazonosító |   Tűszám |   Tűkiosztás |    Voltage |                 Támogatott processzorok               |   Bevezetés dátuma |
|:-----------------:|:--------:|:------------:|:----------:|:-----------------------------------------------------:|:------------------:|
|      Socket 1     |     169  |   17x17 PGA |      5V   |             486 SX/SX2, DX/DX2, DX4OverDrive            |     1989. április  |
|      Socket 2     |     238  |   19x19 PGA |      5V   | 486 SX/SX2, DX/DX2, DX4OverDrive, 486 Pentium OverDrive |     1992. március  |
|      Socket 3     |     237  |   19x19 PGA |   5V/3.3V |  486 SX/SX2, DX/DX2, DX4, 486 Pentium OverDrive         |     1994. február  |
|      Socket 4     |     273  |   21x21 PGA |     5V    |                  Pentium 60/66, OverDrive               |     1993. március  |
|      Socket 5     |     320  |  37x37 SPGA |  3.3/3.5V |                  Pentium 75-133, OverDrive              |     1994. október  |
|      Socket 6     |     235  |  19x19 PGA  |   3.3V    |                  486	DX4, OverDrive	486	Pentium        |     1994. február  |
|      Socket 7     |     321  |   37x37 SPGA |      VRM   | Pentium 75-233+, MMX,OverDrive, AMD K5/K6, CyrixM1/II |     1997. január   |
|      Socket 8     |    387   |    DP-SPGA   |  Auto VRM  |                 Pentium Pro, OverDrive                |   1995. november   |
|      Socket 370   |     370  |   37x37 SPGA |   Auto VRM |            Celeron/Pentium III PPGA/FC-PGA            |    1998. augusztus |
|   Socket PAC418   |    418   | 38x22 S-SPGA |  Auto VRM  |                        Itanium                        |     2001. május    |
|     Socket 423    |    423   |  39x39 SPGA  |  Auto VRM  |                   Pentium 4 FC-PGA2                   |   2000. november   |
|   Socket A (462)  |    462   |  37x37 SPGA  |  Auto VRM  |                AMD Athlon/Duron FC-PGA                |    2000. június    |
|     Socket 478    |    478   |  26x26 mPGA  |  Auto VRM  |                   Pentium 4 FC-PGA2                   |    2001. október   |
|     Socket 603    |    603   |  31x25 mPGA  |  Auto VRM  |                       Xeon (P4)                       |     2001. május    |
|     Socket 754    |    754   |  29x29 mPGA  |  Auto VRM  |                       Athlon 64                       |  2003. szeptember  |
|     Socket 940    |    940   |  31x31 mPGA  |            |                      AMD Opteron                      |    2003. április   |
|       Slot A      |    242   |     Slot     |  Auto VRM  |                    AMD Athlon SECC                    |    1999. június    |
|   Slot 1 (SC242)  |    242   |     Slot     |  Auto VRM  |              Pentium II/III, Celeron SECC             |     1997. május    |
|   Slot 2 (SC330)  |    330   |     Slot     |  Auto VRM  |                Pentium II/III Xeon SECC               |    1998. április   |

A fontosabb rövidítések magyarázata:

PGA (angolul pin grid array), vagyis tömbös lábkiosztású csatlakozófelületek.

- a műanyagból készített változat típusjele a __PPGA__ (_angolul Plastic PGA_)
- a kerámia alapú csatlakozó a __CPGA__ (_angolul Ceramics PGA_)
- a megnövelt csatlakozószámú változat az __SPGA__ (angolul Staggered Pin Grid Array) a __PGA__-oz képest több csatlakozó elhelyezésére nyílik lehetőség (_a megnövekedett feldolgozási terhelés miatt_) ezen a foglalat szabványon belül, a tüskék és foglalatok elrendezése nem szimmetrikus, mint a __PGA__ esetén.
- Az __mPGA__ (angolul _Micro Pin Grid Array_), alacsony profilú, nagy csatlakozósűrűségű foglalat elsősorban hordozható számítógépek és penge kiszolgálók (_angolul blade server_) céljaira.

__VRM__ (angolul _voltage regulator module_) olyan feszültségszabályozó modul, mely lehetővé teszi különböző feszültségszintet igénylő processzorok beépítését az alaplapra.

![3. ábra: Pentium és Pentium Pro processzorok foglalatai](/assets/images/pc4/3.gif)

Érdemes még megemlékeznünk a __ZIF__ (angolul _Zero Insertion Force_), vagyis erőszakmentes beszerelést és kiszerelést lehetővé tevő foglalatokról. Itt a csatlakozási pontok összeillesztés utáni nagy erővel történő összeszorítása zárja a kontaktusokat, működtetése egy karral történik a foglalaton.


## A processzorok felhasználási területei

A mikroprocesszorok felhasználása a személyi számítógépek területén az irodai számítógépek, a munkaállomások és a hordozható számítógépek területére koncentrálódik, illetve a kiszolgáló gépeket is ide számíthatjuk, de ezekről jelen jegyzetben nem esik szó.

### Az irodai számítógépek processzorai

Az irodai számítógépek általános feladatokra alkalmasak: szövegszerkesztés, táblázatkezelés, levelezés, internet használat stb. A munkavégzés során a processzor nincs különösebben igénybe véve, leterheltsége a legtöbb esetben 50% alatt marad. Ezért az általános használatú céljaira gyakran alkalmaznak egy vagy akár két generációval is korábbi processzort (az aktuálishoz képest). Ezt különösen otthoni, vagy kisvállalkozási környezetben tapasztalhatjuk. Az irodai környezetben tehát a processzorok második, vagy harmadik életüket is leélhetik, akár úgy is, hogy a magasabb teljesítményszintű kategóriájú számítógépekből egy idő elteltével irodai gép válik. Ez az életút meghosszabbítás mind gazdasági, mind környezetvédelmi szempontból fontos tervezési tényezőnek számítanak egy irodai környezet számítógép erőforrásainak kialakításakor.

Mit használjunk az irodában? A jegyzet írásakor (2010 július) irodai célra alkalmasak a Pentium 4 processzorok korai változataitól kezdve az asztali gépekbe szánt processzorok. A választást az alkalmazott szoftverek teljesítményigénye határozhatja meg, különösen, ha alkalmazáshoz választunk processzort. Azt is megtehetjük, hogy a meglévő processzorunk teljesítményéhez vadásztunk kevésbé erőforrás igényes, de megfelelő tulajdonságokkal rendelkező alkalmazást.

Az alkalmazható Pentium4 processzorok legfőbb jellemzői:
- 0,13 -0,18 mikronos gyártási technológia
- 42 - 55 millió tranzisztor
- 1,3-3,2 GHz működési frekvencia
- Kompatibilitás a korábbi 32 bites processzorokkal
- 400 - 800 MHZ FSB (angolul Front Side Bus) frekvencia
- És így tovább

### A munkaállomások processzorai

A munkaállomások a speciális feladatok ellátására szolgáló, az irodainál nagyobb teljesítményű számítógépek. Az itt alkalmazott processzoroknak tehát nagyobb teljesítményszinten kell működniük, azt is figyelembe véve, hogy gyakran maximális terhelés mellett használják azokat. Ilyen lehet a kép és video feldolgozás, a különféle mérnöki alkalmazások futtatása, különösen a három dimenziós modellek képzése. Emiatt munkaállomásokban manapság jellemzően többmagos (Dual-Core, Quad-Core, Hexa-Core) processzorokat használunk. Ezeknél az eszközöknél a művelet végrehajtás a processzoron belül több különálló egységben történik az egyes magok (angolul core) önálló L1 cache-sel rendelkeznek és egy busz interfészen keresztül kommunikálnak a közöl L2 cache-sel. A nagyobb terhelés megoszlik MUNKAANYAG az egyes magok között a feladatokat akár hozzá is rendeltethetjük (az operációs rendszer segítségével) az egyes magokhoz, így azok ott önállóan magas prioritással működhetnek. 

A munkaállomások céljaira az Intel a Xeon processzorokat ajánlja, nézzük meg miért:
- 64 bites utasításkészlet
- 64 bites és 32 bites alkalmazások futtatása Windows és Linux rendszerek alatt
- 6 folyamkezelő mag, 12 végrehajtási szállal
- Vitrualizásiós megoldások
- és így tovább



### A hordozható számítógépek processzorai

A hordozható számítógépek processzorainak gyártástechnológiájában a legfontosabb követelmény az asztali gépekével közel azonos teljesítmény mellett az alacsonyabb energiafogyasztás elérése. Mivel a hordozható gépek teljesítmény, s ez által felhasználási területe is igen széles, a netbook gépektől a workstation teljesítményszintű notebookokig terjed.
A mobil processzorok legjellemzőbb tulajdonságai:

- 25- 55 Watt fogyasztás
- 600 MHz - 3,3 GHz működési frekvencia
- 1-4 processzor mag

## Munka a processzorokkal

A processzorokkal kapcsolatos szerelési tevékenységünk a számítógép konfiguráció összeállításánál kezdődik, szerepet kap a processzor cserénél a karbantartásnál és az elektronikus hulladékként történő leadásnál is.
A beszerelés esetén a processzor foglalatot és a processzor tokozást kell figyelembe vennünk. Előzetesen meg kell győződnünk arról, hogy e két összetevő csereszabatos-e egy-mással. Ha igen, akkor megkeressük a processzor alján a referencia tüskét vagy helyet és ennek párját a foglalaton. A beillesztésnek zökkenőmentesnek kell lennie, erőltetni nem szabad, mert a csatlakozó tüskék letörése esetén működésképtelenné is válhat a processzor. Erőszakmentes csatlakozó (angolul _Zero Insertion Force_) estén a processzor tok referencia mélyedéseit kell keresnünk (_egy vagy két bevágás a tok ellentétes oldalain_), majd ezeket a foglalatnak megfelelő pozícióba hozva behelyezzük a processzort. A műveletet a leszorító karok zárásával fejezzük be.

Minden processzor csatlakoztatás előtt (_az erőszakmentest kivéve_) ellenőrizzük le az alaplap megfelelő alátámasztását, nehogy eltörjük az áramköri lapot.

A bezsereléssel kapcsolatba megemlékeznünk a processzorok egyik még nem említett, de rendkívül fontos tulajdonságáról a melegedésről. Miről is van szó? Bizonyára Ön is utazott már zsúfolt autóbuszon, ahol a többi utas hőtermelése és a szellőzés hiánya fullasztó légkört hozott létre. Nos ez a jelenség játszódik le a processzor környezetében is, amikor több millió tranzisztor nagyon kis helyen, nagyon intenzív tevékenységet folytat. A keletkező hőt el kell vezetni, mert különben az elektronikus alkatrészek túlmelegednek, megváltoznak a jellemzőik, ami hibás működéshez vezethet. A legkorábbi processzorok nem igényeltek hűtést, a 80486 típusjelzésű processzortól kezdődően passzív hűtés (_hűtőbordák alkalmazása_), majd az aktív hűtés (_a hűtőbordák levegővel vagy folyadékkal történő hűtése_) jelent meg.

A processzor és a hűtőbordák közötti hőátadás és részben a rögzítés céljára ún. hővezető pasztát (angolul _thermal paste, thermal gel_) használunk. Több változata ismeretes: a folyékony fémötvözet (_rendszerint gallium tatalommal_), a fém alapú (_általában ezüst vagy alumínium összetevőkkel_), a kerámia alapú (_berilium oxid, alumínium nitrid, alumínium oxid, cink oxid és szilikon dioxid összetevőkből áll_).

A pasztát rendszerint fecskendős kiszerelésben vásárolhatjuk meg (_1-2 gramm néhány ezer forint_), így pontosan tudjuk adagolni a megfelelő pozícióba. A használatkor a beszerelt processzor felületére juttatunk kis mennyiségű pasztát, azt egy lapos hajlékony pengével, vagy lappl egyenletesen eloszlatjuk oly módon, hogy az illesztési felület széleinek paszta mentesek legyenek (_az illesztéskor majd ide is préselődik némi anyag_). Ezt követően ellenőrizzük a rögzítendő hűtőborda illesztési irányát, majd ráhelyezzük és a rögzítő karok segítségével fixáljuk a hűtő egységet.

A processzorok környékén végzett karbantartás legfontosabb művelete a hűtőbordák és hűtőventillátorok rendszeres tisztítása, ami csaknem minden esetben kifúvatásos módszerrel történik. Ha több számítógépet kell karbantartanunk, célszerű egy kompresszort használni erre a célra, ha csak egy-két gépről van szó, akkor sűrített levegős palack (_porkifúvó flakon_) is elegendő.


:::warning ⚠️
A kifúvatást minden esetben nyitott helyen, vagy porelszívás alkalmazva végezzük, használjunk porálarcot. Ügyeljünk a kifúvatási nyomás megfelelő megválasztására, annak érdekében hogy a processzor környéki alkatrészek a helyükön maradjanak. Fontos, hogy a kifúvató levegő vagy gáz cseppmentes is legyen, elkerülendő az esetleges zárlatokat.
:::

A processzorok cseréje esetén, amennyiben azt a hűtőrendszer rögzítési módja igényli, mindig használjunk friss hővezető pasztát. A régi maradványait távolítsuk el a felületekről és az így szabaddá vált részekre vigyük fel ismételten a pasztát. A csere előtt győződjünk meg arról, hogy az új processzor a meglévő foglalatba illeszthető-e egyáltalán, illetve arról is, hogy a meglévő hűtőrendszer alkalmas-e az új processzor hűtésére. Ha nem alkalmas, szerezzünk be újat, s rögzítésénél járjunk el a korábbiakban írtak szerint.

A processzorok életútja az elektronikus hulladék gyűjtő és feldolgozó üzemekben fejeződik be, hogy aztán újjászülessenek akár egy fejlettebb processzorként.