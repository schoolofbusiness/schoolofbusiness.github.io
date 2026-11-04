# 6. tananyag

:::tip 🚀
A memória tárolja a CPU által végrehajtandó programokat és a feldolgozásra váró adatokat.
:::

## A memória funkciói

A memória bájt szervezésű, ami azt jelenti, hogy a memóriacellákban minden 8 bitnyi információnak van egy azonosítója, másként fogalmazva a memória egy „rekeszébe”, melynek egyedi sorszáma van, 8 bitnyi információ fér. Az egyes „rekeszek” tartalmát a CPU
az MMU (__memóriavezérlő áramkör Memory Management Unit__) közreműködésével olvassa ki, a „memóriarekesz” azonosítója, címe alapján.

Az adatok kiolvasása következőképpen történik: ha a memóriavezérlő áramkör egy READY jelet küld a processzornak, az azt jelenti, hogy készen áll a következő művelet végrehajtására. A CPU elküldi az elérni kívánt memóriarekesz címét az MMU-nak, mire az kiadja a sorcímet (__„memóriarekesz” mátrix mely sorában található a kérdéses cella__), amit RAS jellel érvényesít. A sor kiválasztása után az MMU továbbítja az oszlopcímet (__„memóriarekesz” mátrix mely oszlopában található a kérdéses cella__), amit CAS jellel érvényesít. Az oszlop és sorcímek alapján kiválasztódik a megfelelő cella (__összesen nyolc__). Megtörtént az adat kiolvasása.

A hétköznapi szóhasználatban a memória és háttértár fogalma gyakran egybemosódik, ezt erősítik az olyan megjegyzések, mint: „lehívom az adatot a memóriából” vagy „az adatot eltároltam a memóriába”. Ezek a kifejezések azt a látszatot keltik, mintha a memória az adataink hosszabb idejű tárolására szolgálna. 

A memória – más néven operatív tár – rövid távú adattárolásra szolgál. Ebből adódóan a benne lévő adatok állandóan változnak, az éppen működő programok futásának és a feldolgozandó adatoknak megfelelően.

## Memóriák fajtái és felhasználásuk

A személyi számítógép korszakának legelején a közvetlenül az alaplapra integrált DIP (__angolul Dual Inline Package__) tokozás volt elterjedt 1 bites sávszélességgel. A 80 ns (__1 ns = 10^-9 másodperc__) sebességű memóriánál 8 chip vagy 16 chip alkotott egy-egy egységet. Felhasználásuk az IBM XT-vel kezdődött.

Az IBM AT számítógépeknél SIPP (__angolul Single Inline Plugging Package__) foglalatokban kaptak helyet a memóriamodulok.
A 80286-os PC-ben jelent meg a SIMM (__angolul Single Inline Memory Module__) foglalatú memória 30 érintkezős változata. A későbbi 72 érintkezős kivitel Pentium PC-ben is használatos volt.

A SIMM modulok 32 bittel illeszkedtek a processzor adatbuszára (__a 72 érintkezős változat 46 bites buszra csatlakozott__). Az alaplapokon lévő foglalatokba az alaplap leírásában foglalt módokon lehet különböző kapacitású modulokat elhelyezni. A leggyakrabban alkalmazott modulok 1, 4, 8, 16, 32, 64, 128 MB kapacitásúak voltak.

A DIMM rövidítéssel jelzett (__Dual Inline Memory Module__), memóriamodulok 64 bites szervezésű típusa, 168 érintkezője volt (__a kártya foglalatában két érintkező sor__). Ezzel a tokozással az EDO/FPM DRAM és a Syncronous DRAM (__SDRAM__) modulokat látták el.

Kapacitásuk tipikusan a 16 MB-tól 1 GB-ig terjedt. A DIMM tokozás 100 csatlakozós változata nyomtatókban volt használatos 16–128 MB közé eső kapacitással. A jelenlegi DDR SDRAM (__lásd később__) technológiát a 184 érintkezős DIMM szabvány látja el.

A hordozható számítógépek speciális igényeit a SODIM szabványú tokozás elégítette ki, melynek 72 érintkezős és 144 érintkezős változata is használatos volt általában 8–256 MB közé eső kapacitással. Az újabb eszközök esetén már a 200 érintkezős változat használatos, mely támogatja a hordozható gépekbe épített 512 MB kapacitású DDR SDRAM-okat is.

A korszerű memóriatokozások közül említést érdemel a 184 érintkezős RIMM szabvány, melyet Intel 820/840 Rambus PC rendszerekben használnak.A 600, 711 és 800 MHz-en működő változat mellett a csökkentett méretű SO RIMM kivitel is megtalálható.

A különféle memóriatokozási megoldásokat a következő oldalon található táblázat foglalja össze.

![1. ábra memória tokozások](/assets/images/pc5/image-009.jpg)


Alapvetően három fajta memóriát használunk a mai személyi számítógépekben:

- ROM (__angolul Read-only memory__), vagyis csak olvasható memória
- DRAM (__angolul dynamic random access memory__), vagyis dinamikus azonos elérési idejű tár
- SRAM (__angolul static random access memory__), vagyis statikus azonos elérési idejű tár

### ROM (__Read-only memory__)

Az írható-olvasható tárolók mellett a csak olvasható tárolóknak is fontos szerepe van a számítógép működésében. A ROM típusú (__Read Only Memory__) csak olvasható tárolók a tápfeszültség megszűnése után is megőrzik tartalmukat, speciális változatai az EPROM (__angolul
Eletrically Programmable ROM - elektromosan programozható ROM__), illetve az EEPROM (__angolul Eletrically Eraseable Programmable ROM - elektromosan törölhető és programozható ROM__), melyek tartalma a használat során speciális eljárással módosítható.


A ROM típusú tárolók alkalmazási területe például a BIOS (__angolul Basic Input Output System__) rutinok tárolása, a POST (__angolul Power On Self Test__) rutin tárolása, system setup program tárolása.

### PROM

A Programmable Read-Only Memory, vagyis a programozható ROM speciális eszközzel egyszer írható tároló.

### EPROM

A törölhető és programozható ROM-ot (__angolul Erasable Programmable Read-Only Memory__), ultribolya fénnyel törölhető memórialapkán valósítják meg. A lapka felületét öntapadó matrica zárja le, melyet ha eltávolítunk, a ROM törölhetővé válik.


![2. ábra Intel D2704 EPROM](/assets/images/pc5/image-010.jpg)


### EAROM

Az elektronikusan változtatható csak olvasható memória (__angolul Electrically Alterable Read-Only Memory__) általában fontos rendszerbeállításokat tartalmaz, főként olyanokat, melyek ritkán változnak. Az alkalmazásból manapság már kiszorította a lítium akkumulátorral táplált CMOS-RAM.

![3. ábra EAROM](/assets/images/pc5/image-011.jpg)

### EEPROM

Az elektronikusan törölhető és programozható ROM (__angolul Electrically Erasable Programmable Read-Only Memory__), a Flash memóriához hasonlóan elektronikusan törölhető és többféle eszközzel írható memória. Élettartama 10.000 és 100.000 írási-olvasási ciklus között van.

![4. ábra mini EPROM](/assets/images/pc5/image-012.jpg)


### DRAM és SRAM

A RAM (__angolul Random Access Memory__), magyarul tetszőleges elérésű tár, vagy véletlen elérési idejű tárnak szokás nevezni. Ez az elnevezés magyarázatra szorul. Az elnevezés abból ered, hogy a memória bármely cellájából azonos idő alatt olvasható ki az adat.
Olvasható és írható tároló.

Cellái – melyek egy bitet tárolnak – fizikailag egy tranzisztorból és egy kondenzátorból állnak. Jellemező tulajdonsága, hogy néhányszor tíz ms (__milliszekundum__) alatt elveszti tartalmát, ezért gyakran frissíteni kell. Ezt el kell végezni az adatok kiolvasását követően is, mivel a kiolvasás művelete törli magát az adatot is (__kisül a kondenzátor__). A frissítési folyamatot az MMU végzi. Az adatokhoz történő hozzáférés kb. 70 ns-onként történik, amihez hozzáadódik a kondenzátorok feltöltési ideje is. Így ténylegesen mintegy 140 ns-onként történik meg egy-egy bájt kiolvasására. Az információt a memóriacellákban lévő kondenzátor feltöltöttségi szintje hordozza.

Az előbbiek az ún. dinamikus RAM cellákra vonatkoznak (__DRAM__), melyek kis előállítási költségükkel és alacsony energiaigényükkel a leggyakrabban használtak operatív tárként.

A DRAM hátrányos tulajdonságait (__frissítés szükségessége, lassú kiolvasás__) a statikus RAM alkalmazásával lehet megszüntetni, mely szintén rendelkezik néhány hátrányos tulajdonsággal: pl. drága és nagy az energiafogyasztása.

Az SRAM cellák jellemző tulajdonsága, hogy nem kell frissíteni a tartalmát, mivel cellái flip-flop (__billenő__) áramkörökből állnak (__1 bit tárolásához 4 vagy 6 tranzisztort használnak__),melyekben az információt az áramvezetés iránya hordozza. Ez a megoldás rövidebb adatkiolvasási időt eredményez: 15–20 ns. Tulajdonságai miatt elsősorban cache memóriaként alkalmazzák.

A cache memória egy hidat képez az operatív tár és a CPU között. Használatát az indokolja, hogy a CPU lényegesen gyorsabb a memóriánál, ami abban nyilvánul meg, hogy a memória nem tudja elég gyorsan szolgáltatni az adatokat a processzor számára – a 80386 DX–
MHz típus feletti (__ha még valaki emlékszik erre a processzorra__) verzióknál. Ezt a sebességkülönbséget a gyors SRAM cellákból kialakított cache küszöböli ki oly módon, hogy a memória tartalmának egy részét – méghozzá azt, amelyet várhatóan a processzor
legközelebb kérni fog – beolvassák a cache-be. Innen fogja a processzor megkapni – rövid idő alatt – az adatokat.

A rendszer gyorsulása attól függ, hogy milyen hatásfokkal tudjuk megjósolni, azt, hogy a processzornak milyen adatokra lesz szüksége a következő órajel ciklusokban. A találati arány a különféle megoldásoknál elérheti a 94%-os hatékonyságot. A cache elhelyezkedése
kétféle lehet: looktrough (__leválasztó__) cache, mely a processzor és a memória között helyezkedik el, illetve a look-aside (__mellérendelt__) cache. Az első megoldásnál, ha az adat nincs a cache-ben, akkor azt a kérést továbbítja a memóriának (__ez hosszabb időbe telik, mintha a CPU eleve a memóriához fordulna__). A leválasztó cache használata akkor előnyös, ha multiprocesszoros, osztott memóriájú rendszert használunk (__a cache-ből történő olvasás ideje alatt a memóriát a másik processzor használhatja__). A mellérendelt cache megvalósítása olcsóbb az előbbinél, viszont a memóriával párhuzamosan történő működése miatt a CPU akkor is foglalja a memóriát, ha az adatot a cache-ből kapja meg. Ezért a mellérendelt cache multiprocesszoros gépeken nem használható.

![5. ábra Look-aside cache](/assets/images/pc5/image-013.jpg)


![6. ábra Look-trough cache](/assets/images/pc5/image-014.jpg)


Az ideiglenes tárolók kiolvasási sebességének gyorsítására több kísérlet történt a korábbi években. Ezek eredményeként jelentek meg a hardverpiacon különböző típusú memóriák. Nézzünk egy rövid történeti áttekintést:

## A közelmúlt memóriaszabványai

Az EDORAM (__angolul Extended Data Out RAM__) a hagyományos DRAM-nál mintegy 10%-kal gyorsabb volt, mások szerint 30-50%-kal gyorsította a memória műveleteket. A gyorsulás azáltal volt elérhető, hogy kiküszöbölték az egymást követő olvasási műveletek közötti
várakozást: az adat hosszabb ideig marad a chip lábain. (__Ahogy a korábbiakban szó volt róla, az adat kiolvasása után frissíteni kell a memória tartalmát, mert a kiolvasás törli az adatot, ezt a frissítési időt küszöböli ki az EDORAM azzal, hogy az adatot tovább „életben tartja”.__) Az EDORAM hatásfokát tovább növelték a Page Mode technikával: az azonos sorban lévő cellák (__page-lap__) kiolvasásakor csak az oszlopcímet kellett megváltoztatni, a sorcím azonos marad. Ez utóbbi megoldást használó memóriatípusokat FPM DRAM-nak (__Fast Page Mode DRAM mód DRAM__) is nevezték. Az EDORAM egy későbbi változata a BEDORAM (__Brust EDORAM__), mely egymás utáni memóriacímekről képes nagyobb adatcsomagot is egyszerre kiolvasni.

### SDRAM

A legnagyobb népszerűségre az SDRAM (__angolul Synchronous DRAM__) tett szert. Működésének lényege az, hogy a memóriát a processzor órajeléhez szinkronizálják, így kiküszöbölhető az időzítés miatti várakozási idő__). A technológiát szokás SDR SDRAM-nak is
nevezni, ahol az SDR a Single Data Rate rövidítése. Ez az elnevezés a dupla adatátbocsátó tulajdonságú DDR SRAM (__lásd a későbbiekben__) technológiával összevetve alakult ki. 
Az 1997–2000 közötti időszakban az SDRAM jelentős fejlődésen ment keresztül, melynek egyik fontos tényezője volt az adatbuszok órajelének növekedése (__ez határozta meg alapvetően a memória ütemezésének maximumát__). A memóriamodulok így PC66, PC100, PC133 jelöléssel kerültek piacra. A megnevezésben szereplő számérték az ütemezési frekvenciát jelenti MHz-ben.

Az SDRAM-ok asztali személyi számítógépekben a korábban tárgyalt 168 csatlakozós DIMM tokozásban, míg hordozható gépekben 144 csatlakozós SODIMM tokozásban voltak elérhetők.

Napjaink személyi számítógépeiben már nem alkalmazzák az eredeti egyszeres adatmennyiségű SDRAM-okat, helyettük DDR2 és DDR3 SDRAM-ok használatosak. Az SDRAM-ok a régebbi gyártású számítógépekben továbbra is jól működnek.

### DDR SDRAM

A DDR SDRAM (__angolul Double Data Rate Synchrones Dynamic Random Access Memory__), vagyis a kétszeres adatátbocsátó képességű szinkronizált dinamikus véletlen elérésű memória az SDRAM újabb változata, kétszeres adat átbocsátóképességű szinkronizált
dinamikus RAM.

A kétszeres átbocsátási képesség hétköznapi nyelven azt jeleni, hogy a 100 MHz-en működő DDR SDRAM egy „200 MHz”-es SDRAM-nak felelne meg.

A Joint Electron Device Engineering Council (__Elektronikus Eszközök Tervezésének Egyesített Tanácsa__) két részben határozta meg az DDR SDRAM-ra vonatkozó sebesség paramétereket: egyrészt a lapkákra, másrészt a memóriamodulokra vonatkozóan. Ezek összefoglalását tartalmazza a két alábbi táblázat:

#### DDR SDRAM memória busz frekvenciák:

| Memória lapka szabvány név  | Memória busz frekvencia |
|-----------------------------|-------------------------|
| DDR-200                     | 100 MHz                 |
| DDR-266                     | 133 MHz                 |
| DDR-333                     | 166 MHz                 |
| DDR-400                     | 200 MHz                 |


#### DDR SDRAM memóriamodulok sávszélessége:

| Memória modul szabványnév | Működésifrekvencia     | Memória lapka szabványnév   | Csatornánként sávszélesség |
|---------------------------|------------------------|-----------------------------|----------------------------|
| PC-1600                   | 100 MHz                | DDR-200                     | 1,600 GB/s                 |
| PC-2100                   | 133 MHz                | DDR-266                     | 2,133 GB/s                 |
| PC-2700                   | 166 MHz                | DDR-333                     | 2,667 GB/s                 |
| PC-3200                   | 200 MHz                | DDR-400                     | 3,200 GB/s                 |

A DDR SDRAM modulok asztali számítógépekhez 184 csatlakozós DIMM tokozásban kerülnek piacra. A 2,5 V-os feszültséggel működő eszközök jelentős energia megtakarítást érnek el a 3,3 V-os SDR SDRAM-okhoz képest.

## A jelen és a közeljövő memóriaszabványai

### DDR2 SDRAM

A gyors technológiaváltás nem kímélte a DDR SDRAM-ot sem, hiszen már megjelent a DDR-2 (__vagy DDR-II__) technológia, mely természetesen nem kompatibilis a DDR-rel. Nézzünk néhány lényegi különbséget a két rendszer között:

#### DDR2 memória busz frekvenciák:

| Memória lapkaszabvány név | Memória buszfrekvencia | Be- és kimeneti frekvencia |
|---------------------------|------------------------|----------------------------|
| DDR2-400                  | 100 MHz                | 200 MHz                    |
| DDR2-533                  | 133 MHz                | 266 MHz                    |
| DDR2-667                  | 166 MHz                | 333 MHz                    |
| DDR2-800                  | 200 MHz                | 400 MHz                    |

#### DDR2 SDRAM memóriamodulok sávszélessége:

| Memória modul szabvány név | Működésifrekvencia | Memória lapka szabvány név | Csatornánkéntsávszélesség |
|---------------------------|--------------------|---------------------------|---------------------------|
| PC2-3200                  | 200 MHz            | DDR2-400                  | 3,200 GB/s                |
| PC2-4200                  | 266 MHz            | DDR2-533                  | 4,267 GB/s                |
| PC2-5300                  | 333 MHz            | DDR2-667                  | 5,333 GB/s                |
| PC2-6400                  | 400 MHz            | DDR2-800                  | 6,400 GB/s                |

A DDR-2 SDRAM modulok asztali számítógépekhez 240 csatlakozós DIMM tokozásban kerülnek piacra. A 1,8 V-os feszültséggel működő eszközök jelentős energia megtakarítást érnek el akár a 2,5 V-os DDR SRDRAM-okhoz, akár a 3,3 V-os SDR SDRAM-okhoz képest.

### DDR3 SDRAM

A sebességnövekedésen kívül a DDR-3 technológia jobb energiatakarékossági jellemzőket mutat elődeihez képest: ilyen az 1,5 V-os tápfeszültség, ami csaknem 40%-os energia megtakarítást eredményez.

#### DDR3 memória busz frekvenciák:

| Memória lapka szabvány név | Memória busz frekvencia | Be- és kimeneti frekvencia |
|----------------------------|-------------------------|----------------------------|
| DDR3-800                   | 100 MHz                 | 400 MHz                    |
| DDR3-1067                  | 133 MHz                 | 533 MHz                    |

#### DDR3 SDRAM memóriamodulok sávszélessége:

| Memória modul szabvány név | Működési frekvencia | Memória lapka szabvány név | Csatornánként sávszélesség |
|----------------------------|---------------------|----------------------------|----------------------------|
| PC3-6400                   | 400 MHz             | DDR3-800                   | 6,40 GB/s                  |
| PC3-8500                   | 533 MHz             | DDR3-1067                  | 8,53 GB/s                  |


Bár az szabványon alapuló eszközök prototípusai már 2005-ben megjelentek, a nagy félvezető gyártók (__Intel, AMD__) csak 2007 – 2008 táján kezdte támogatni a szabványt.

### Direct Rambus DRAM

Csatornaorientált DRAM memória architektúra, amely három fő részből áll: Rambus vezérlő, Rambus csatornák és maga a szűkebb értelemben vett adattároló DRDRAM. Az első alaplapok, melyek támogatták a Rambus technológiát 1999-ben jelentek meg. Ez a PC DRRAM szabványú eszköz 1600 MB/s adatátviteli sebességet ért el 16 bites adatátviteli csatornáján. A nevében szereplő 800 a működési frekvenciára utal (__800 MHz__). A memóriamodulok 184 csatlakozós RIMM tokozásban jelentek meg.

![7. ábra Direct Rambus DRAM](/assets/images/pc5/image-015.jpg)


A memóriatípust támogató újabb alaplapok jelentősen növelték az adatátviteli sebességet: az Intel cég i850 lapkakészletű alaplapja kétcsatornás átviteli támogatással 3200 MB/s-ra emelte az adatátvitelt 32 bites adatbuszt alkalmazva. 2002-ben ez az érték 4200 MB/s-ra (__PC1066 RDDRAM__).

A fentiek ellenére a Direct Rambus DRAM elterjedésének korlátot szabott a magas előállítási költség, valamint az a tény, hogy az ellenlábas technológia (__DDRRAM__) jobb teljesítményű és olcsóbb memóriamodulok gyártását tette lehetővé. Ezek mellet a technológia felhasználási jogáról folyó eljárás sem növelte a gyártók támogatói hajlandóságát.

Mindezek mellet számos eszközben található DRRAM: Nintendo 64 játékeszköz, PlayStation 2 és 3 videojáték eszköz.

Amint látjuk, a memória szabványok fejlődésével csak a fogkefék és mosóporok fejlődése (__lásd TV reklámok__) képes lépést tartani. E folyamatnak (__mely a memóriák esetén tényleges fejlődést jelent__) néhány újabb állomását láthatjuk a következőkben.

### Quad Data Rate SDRAM

A négyszeres adatmennyiségű SDRAM minden órajelre 4 adatszót képes továbbítani. Ellentétben a DDR SDRAM-mal, melyik egy darab kétirányú olvasás-írás csatlakozóval rendelkezik, A QDR memóriánál az írási és olvasási funkciók külön csatornán zajlanak egymással párhuzamosan. Ez a megoldás kétszerezi az elméleti adatátbocsátó képességet, az azonban több vezetéket jelent e memória és a vezérlőáramkör között.

### XDR DRAM

A Rambus nagy teljesítményű RAM csatlakozó szabványa, melynek legfőbb jellemezői:

Tipikus órajelek: 400 MHz (__ténylegesen 3200MHz__), 600 MHz (__ténylegesen 4800MHz__), 800 MHz (__ténylegesen 6400MHz__), 1000 MHz (__ténylegesen 8000MHz__). Az órajelenkénti és sávonkénti 8 bites adatátvitel (__ODR = Octal Data Rate– nyolcszoros datmennyiségű__), 3.2 GBit/s átvitelt eredményez (__tervben van a 4.8, 6.4 és 8 Gbit/s-os átvitel is__).

Ezt a technológiát egyelőre kevés gyártó támogatja, köztük szerepel azonban a Sony cég, mely PlayStation 3 játékvezérlőjébe e szabványnak megfelelő memóriamodulokat tervezett.

![8. ábra XDR DRAM](/assets/images/pc5/image-016.jpg)


### XDR2 DRAM

A Rambus 2007-re tervezte bemutatni legújabb szabványát, melyben a csatlakozónkénti maximális sávszélességet kívánják megcélozni, elsősorban grafikus kártyák és számítógépes hálózati eszközökhöz és HDTV-khez.

## Munka a memóriákkal

Memóriákkal kapcsolatos (__ez alatt most a számítógépünk operatív tárját alkotó dinamikus RAM modulokat fogjuk érteni__) szerelési munkák a beszerelés (__a számítógép konfiguráció összeépítése__), a memória bővítés vagy csere, a rendszeres karbantartás és az életciklus végén a begyűjtés és újrafeldolgozás során jelentkeznek.

A memória modulok beszerelését elsősorban az alaplapi illesztés és a memóriatok közötti kompatibilitás határozza meg. A memóriamodulok beszerzése előtt győződjünk meg arról, hogy a kérdéses alaplap tudja-e fogadni a memóriabankjaiban a kiválasztott típusú memóriákat. Ennek ellenőrzésére az alaplap felhasználói kézikönyvében található kompatibilitási lista ad lehetőséget.


:::tip ✍️
Ügyeljünk arra, hogy szereléskor a számítógép kikapcsolt állapotú legyen és az elektromos csatlakoztatást is szüntessük meg. Kezünkre rögzítsünk antisztatikus csuklópántot.
:::

A csatlakoztatásra általában kettő vagy több slot ad lehetőséget. Az alaplap leírásában megtaláljuk, hogy milyen sorrendben tölthetjük fel a memória bamnkoklat, van-e lehetőség az egyes slot-okba eltérő jellemzőkkel rendelkező memória modulokat behelyezni (__pl. működési frekvencia, méret stb.__).

A behelyezés előtt győződjünk meg arról, hogy az alaplap megfelelő alátámasztással rendelkezik (__részletesen lásd Az alaplap és csatlakoztatása jegyzetben__), mert nem megfelelő rögzítésnél megsérülhetnek az alaplap áramkörei (__túlzott feszítés__). A memóriamodulokat az irányítóvájatoknak megfelelő pozícióba forgatva helyezzük a csatlakozó vájatába, majd az egyik felén lenyomva illesszük működési pozícióba, majd a másik felénél végezzük el a művelete ismét, A rögzítő kapcsok automatikusan, vagy biomechanikusan (__kézzel__) zárhatók és íly módon működési helyzetben rögzíthetjük a memória moduljainkat.

A karbantartások során a portalanítást kivéve nem kell különösebb figyelmet fordítanunk a memória panelekre.

:::tip ✍️
Nem megfelelő hűtés esetén a memória panelen található chip-ek túlmelegedhetnek, melyről kellemetlen égett szag "értesíthet". A memória modulokat kiszerelve optikai letapogatással (__szemrevételezéssel__) győződjünk meg a chip-es épségéről, az elszíneződött, vagy hőtől eldeformált felületű memória modult cseréljük (__szerencsés esetben más meghibásodás nem lesz, de ilyen eset viszonylag kevésszer fordul elő__).
:::

Az operatív memória bővítésekor a beszereléskor ismertetett eljárást kell követnünk. Ha a már beszerelt memóriamodulokkal azonos gyártmány már nem beszerezhető, meg kell vizsgálnunk, hogy a régi és új modulok együttműködnek-e. Erre mg akkor is szükség lehet,
ha a modulok egyébként a paramétereik alapján kompatibiliseknek is tűnnek egymással. A memóriamodulok életútja az elektronikus hulladék gyűjtő és feldolgozó üzemekben fejeződik be, hogy aztán újjászülessenek akár egy fejlettebb memóriamodulként.

## A BIOS

A _BIOS_ fogalmát gyakran összekeverik a _CMOS_-al, s úgy gondolják – tévesen –, hogy a kettő egyet és ugyanazt jelenti. Valójában azonban a _CMOS_ (__angolul Complementary Metal Oxide Semiconductor__), a kiegészítő metál-oxid félvezető egy 64 bájt méretű _RAM_, mely a _BIOS_ működéséhez szükséges beállításokat tartalmazza. Egy apró integrált áramkörben (__más néven IC-ben__) található meg az alaplapon, egy elem társaságában, mely a szükséges áramot generálja. Az újabb _PC_-kben _NiCad_ elemet alkalmaznak e célra, mely folyamatosan újratölti magát, míg a számítógép be van kapcsolva; a régebbiekben azonban egy olyan szabványos példányt használtak, amelyiket ki kellett cserélni, ha elfogyott az energiája. Mindkét esetben egyszerű a _CMOS_ tartalmának törlése, hiszen csak le kell kapcsolni az elemről - ennek főleg akkor van értelme, ha a tartalma, magyarán a _BIOS_ beállításai megrongálódtak, vagy hibásan
lett eleve konfigurálva. Természetesen az újabb alaplapoknál még ennyi dolgunk sincsen, hiszen általában található rajtuk egy jumper, amelyik kifejezetten eme feladat elvégzésére szolgál, néhány pofonegyszerű mozdulat segítségével.

Emlékezzünk meg néhány mondatban arról a tényről, mely a kétezres évek elején csaknem pánikot okozott az informatika területén. Arról van ugyanis szó, hogy az imént említett CMOS tárolóegység tartalmazza azt az is áramkört (__timer__) is, amelyik a rendszeridő és rendszerdátum értékét szolgáltatja. A 2000. év problémája, angol rövidítéssel _Y2K_, abból adódott, hogy a korábbi timerek a dátumok évszámait csak két számjegyen tárolták. Az ezredforduló után ez problémát okozhat néhány program használatakor, ezért az új _PC_-k be már 2000 Ready óraáramköröket, illetve _BIOS_-t építenek. A világvége tehát nem csak a valóságban, hanem a számítógépek területén is (__technikai okokból__) elmaradt.

A BIOS (__angolul Basic Input Output System__) egy szubrutin gyűjtemény, mely tartalmazza a perifériákat kezelő, illetve az egyéb funkciókhoz rendelt programokat. A rendszer _BIOS_-t az alaplapon helyezik el egy ROM vagy _EPROM_ típusú memóriában.

A BIOS nélkülözhetetlenül lényeges a PC működési metódusában. Tulajdonképpen keretet ad ahhoz, hogy a gép képes legyen lefuttatni, kezelni a további programokat. Először is ellátja a POST (__angolul Power On Self Test__) a rendszerindításkori önellenőrzés feladatait, amit minden egyes újraindításkor elvégez, s célja, hogy meggyőződjön a számítógép egészének hibátlanságáról, mintegy megakadályozva, hogy az alkatrészek esetleges hibái csak a munka során bukkanjanak fel és okozzanak gondokat (__jó példa erre a memória: a POST, ha engedjük neki a teljes vizsgálatot, már az elején kiszűri a legapróbb gondot is, míg ha ezt nem tenné, akkor meglehetősen váratlanul érne, amikor az operációs rendszer minden előzetes figyelmeztetés nélkül - elérve a hibás címtartományt - lefagyna__); illetve a speakeren keresztüli hangjelzések révén tájékoztatni képes, hogy valószínűleg hol a probléma, amennyiben már képet se kapnánk a monitoron.

A BIOS tevékenysége azonban eredetileg nem korlátozódott pusztán arra, hogy az indításkor felkutassa a problémákat és megadja az alapvető működési paramétereket. Mindvégig megbújt az operációs rendszer hátterében; tulajdonképpen úgy is megközelíthetnénk a kérdést, hogy az operációs rendszer a BIOS egyszerűsített kezelőfelülete volt. Ez természetesen erős túlzás, hisz maga a Linux/Unix/Windows/ stb. is ugyanolyan elengedhetetlen tartozéka a PC-nek, de semmit sem tett, illetve nem tudott tenni a BIOS nélkül. Amikor ugyanis például leütünk egy billentyűt, a processzor meghív egy megszakítást, hogy kiolvassa azt (__magyarán hogy megtudja, mit is nyomtunk le__); a megszakításokat azonban a BIOS kezelte és rendezte el (__és ez ugyanúgy működött valamennyi másik periféria esetében is__) - a baj ezzel az, hogy a mai operációs rendszerek többsége már megkerüli a BIOS-t. Ezzel a módszerrel a CPU egyébként számos feladatot képes párhuzamosan ellátni, természetesen tekintettel a többi hardveregységre is. 

A BIOS beállításaihoz történő hozzáférés a számítógép bekapcsolásakor kezdeményezhető oly módon, hogy a BIOS-ba lépés kulcsbillentyűjét vagy billentyű kombinációját lenyomjuk a billentyűzeten. A BIOS gyártójától függően ez különböző lehet:

| Számítógép gyártó         | Billentyű kód                      |
|---------------------------|------------------------------------|
| Acer                      | F1, F2, CTRL+ALT+ESC               |
| ARI®                      | CTRL+ALT+ESC, CTRL+ALT+DEL         |
| AST®                      | CTRL+ALT+ESC, CTRL+ALT+DEL         |
| Compaq                    | F10                                |
| CompUSA®                  | DEL                                |
| Cybermax®                 | ESC                                |
| Dell BIOS web site search | links For models not listed below. |
| eMachine®                 | DEL , F2                           |
| HP (__Hewlett-Packard__)  | F1, F2 (__Laptop, ESC__)           |
| IBM                       | F1                                 |
| E-pro Laptop              | F2                                 |
| IBM PS/2                  | CTRL+ALT+INS after CTRL+ALT+DEL    |
| Intel® Tangent            | DEL                                |
| Micron                    | F1, F2, or DEL                     |
| Packard Bell              | F1, F2, Del                        |
| Seanix                    | DEL                                |
| Sony® VAIO                | F2, F3                             |
| Tiger                     | DEL                                |
| Toshiba ESC,              | F1                                 |

Nem csak számítógép gyártók, hanem a BISO gyártói szerint is:

| BIOS beszállítók                             | Billentyű kód |
|----------------------------------------------|---------------|
| ALR Advanced Logic Research, Inc. ® PC / PCI | F2            |
| ALR PC non / PCI                             | CTRL+ALT+ESC  |
| AMD® (__Advanced Micro Devices, Inc.__) BIOS     | F1            |
| AMI (__American Megatrends, Inc.__) BIOS         | DEL           |
| Award™ BIOS                                  | CTRL+ALT+ESC  |
| Award BIOS                                   | DEL           |
| DTK® (__Datatech Enterprises Co.__) BIOS         | ESC           |
| Phoenix™ BIOS                                | CTRL+ALT+ESC  |
| Phoenix BIOS                                 | CTRL+ALT+S    |
| Phoenix BIOS                                 | CTRL+ALT+INS  |


A BIOS-ba történő belépésünkkor megpillantjuk a BIOS SETUP UTILITY menürendszerét, melyet most az American Megatrends Inc. AMIBIOS 8 termékének menüsémáin keresztül vizsgálunk meg (__terjedelmi okokból csak a legfontosabb beállításokat vesszük sorra__).

A bekapcsolást követően az AMIBIOS-ba a Del billentyű lenyomásával kerülhetünk be. Ezt célszerű a bekapcsolást követően többször lenyomni a sikeres belépés érdekében.

![9. ábra Belépés az AMI BIOS-ba](/assets/images/pc5/image-017.jpg)

:::tip ✍️
Ne ijedjünk meg, ha a többszöri Del lenyomás után sípoló hangot hallunk, ha nem furulyakoncerten próbáltunk belépni a BIOS-ba, akkor csak arról van szó, hogy a billentyűzet puffer betelt és várni kell billentyű scan kódjának továbbítására a betöltő rendszer felé!
:::

A sikeres indítást követően a főmenübe (__angolul Main menu__) kerülünk. Itt találjuk a rendszer alapvető jellemzőinek beállítását, valamint a BIOS-ra és a számítógépre vonatkozó főbb információkat is:

1. BIOS verziószáma [csak információ]
2. BIOS készítési dátuma [csak információ]
3. BIOS azonosítja [csak információ]
4. Processzor típusa [csak információ]
5. Processzor sebessége [csak információ]
6. Operatív tár mérete [csak információ]
7. Rendszer idő [beállítható]
8. Rendszer dátum[beállítható]

![10. ábra főmenü](/assets/images/pc5/image-018.jpg)


A menüben történő mozgásra vonatkozó instrukciókat a képernyő jobb oldalán találjuk. A jobbra mutató kurzor mozgató nyíllal a fejlett (__angolul advanced menu__) menübe kerülünk. Amint az a nevéből is kitűnik, itt haladó szintű beállításokat tehetünk:

1. IDE szabványú lemezek beállítása
2. Hajlékonylemezes egységek beállítása
3. Betöltési beállítások
4. Super IO (__az alaplap lapkakészletének egyik fontos komponense__) beállításai
5. Távoli hozzáférés beállításai
6. USB beállítások

Itt végezhetjük el az IDE szabványú lemezek manuális beállítását, illetve ellenőrizhetjük, hogy a megfelelő üzemmódban a megfelelő prioritással került-e be a kérdéses lemez a rendszerbe. Ugyanitt írásvédelmi beállítást, a merevlemezek automatikus észlelésének
időkorlátját és a 80 eres ATAPI kábelre kapcsolódó eszközök esetén automatikus funkció felismerést paraméterezhetünk.

Az egyes lemezek részletes paraméterei a lemez kiválasztást követően adhatók meg a különféle üzemmódok. Az érthetőség kedvéért most emlékezzünk meg röviden két fogalomról: mi a _DMA_ és PIO, ami ebben a részben állítható be?

A _DMA_ (__angolul Direct Memory Access__), magyarul közvetlen memória hozzáférés, egy olyan művelet, melynek során az operatív memória és valamelyik periféria között az adatátvitelt nem a processzor vezérli, hanem egy külön céláramkör, a _DMA_ vezérlő. Használata tehermentesíti a processzort, növeli a feldolgozás sebességét, mivel a processzor a cache-ből akkor is olvashatja az adatokat amikor a _DMA_ vezérlő a memóriában „matat” (__a memóriához alaphelyzetben egyszerre csak egy vezérlő férhet hozzá__). A _DMA_ vezérlő memóriafoglalását „sürgős esetbe” a processzor megszakíthatja. A PC kategóriájú számítógépekben korábban 7 _DMA_ csatorna állt rendelkezésre (__ISA buszra csatlakozó eszközök kezelése__), mely két négycsatornás áramkör egymásba illesztésével valósul meg. 

:::warning A DMA csatornák kiosztása a következőképpen alakul:

- DMA0 - Szabadon felhasználható a 8 bites adapterekhez is.
- DMA1 - Eredetileg az IBM SDLC adapterének fenntartva, hiányában szabadon felhasználható a 8 bites adapterekhez is.
- DMA2 - A floppyvezérlő számára fenntartva.
- DMA3 - Szabadon felhasználható a 8 bites adapterekhez is.
- DMA4 - Ezen keresztül csatlakozik a 2. vezérlő az elsőhöz.
- DMA5 - Szabadon felhasználható a 16 bites adapterekhez.
- DMA6 - Szabadon felhasználható a 16 bites adapterekhez.
- DMA7 - Szabadon felhasználható a 16 bites adapterekhez.
:::

A merevlemezekről történő adatbeolvasáshoz eredetileg nem használtak DMA csatornát. A fejlődés során azonban megjelentek az UDMA rendszerű háttértárak, melyek 33,3 megabájt másodpercenkénti adatátvitelre képesek, mely kétszer gyorsabb a _DMA_-val megvalósított adatcsere sebességéhez képest.

A későbbi PCI rendszereknél a _DMA_-t az ún. bus master üzemmód helyettesítette, melynek vezérlését az alaplapi lapkakészlet déli hidjára (__angolul South Bridge__) integrált PCI vezérlő látta el.

A még újabb rendszereknél, pl. az Inte Xeon lapkakészleteinél a be és kimeneti gyorsító technológia (__angolul I/O Acceleration Technology__) néven jelenik meg ismét a _DMA_.

A PIO (__angolul Programmed Input/Output__), programozott be és kimeneti üzemmód (__Mode 4__) a periféria (__ez esetben a háttértár__) és a memória közötti átvitelt a processzor végzi (__az ATA-3 interfész, elődeitől eltérően már támogatta a PIO és DMA üzemmódokat is.__).

Ez azt jelenti, hogy az adatok átmozgatása jelentősen leköti a processzort (__más feladatra kevesebb idő jut__). A DMA (__vagy bus mastering__) módban a processzornak csak az a feladata, hogy felprogramozza az EIDE kontroller DMA vezérlőjét (__megadja, hogy honnan ,vagy hová történik az átvitel a memóriában__). A DMA vezérlő a rendszerbuszon keresztül biztosítja a közvetlen átvitel lehetőségét. Ekkor a DMA vezérlő kezeli a rendszerbusz, mint bus master. Ebben az üzemmódban a processzor kevésbé van leterhelve (__más folyamatokkal foglalkozhat__). Az adatátvitel végén a DMA vezérlő egy megszakítással adja vissza a bus master jogot a processzornak.

A PCIPnP meüben PCI busz beállításai és az automatikusan működő (__angolul Plug and Play__) eszközök paraméterei módosíthatók. Ez utóbbiak beállításánál találkozunk egy eddig nem tárgyalt fogalommal az IRQ-val.

A megszakítás (__angolul interrupt request, IRQ__) egy jel, mely beérkeztekor a processzor félbehagyja az aktuálisan futó program végrehajtását, (__valamely esemény kezelése igényel ilyen azonnali beavatkozást__). Attól függően, hogy a megszakítás-kérés hardver eszköztől, vagy valamely szoftvertől érkezett, beszélhetünk hardveres és szoftveres megszakításról. Hardver megszakítást küldhet például a nyomtató, amikor kifogyott belőle a papír (__beavatkozás szükséges__), szoftver megszakítást küldhet egy program, amely hibát észlelt a végrehajtásban (__pl. nullával való osztás__).

Ezt a megszakítás-kérést a PIC (__angolul Programmable Interrupt Controller__), a programozható megszakítás vezérlő kezeli (__integrált áramkör, mely a hardver megszakításokhoz__). A „kezelés” a beérkezett jelek sorrendbe állítását és egyes esetekben a megszakítások letiltását jelenti. Ebből adódóan a külső megszakítások lehetnek a processzoron belül letilthatók vagy nem letilthatók, azaz nem maszkolható (__angolul Non Maskable Interrupt__) megszakítások. A letilthatóságra azért van szükség, mert egy időben több megszakítás is történhet, s a rendszer szempontjából legnagyobb prioritású megszakítások végrehajtását nem lenne célszerű újból megszakítani. Általános esetben a megszakítási kérelmek kiszolgálása prioritási szint alapján történik (__ez a sorba állítás fő szempontja__). A kérelmeket kiszolgáló programok (__rutinok__) címei egy táblázatban találhatók, melyből a megszakításnak megfelelő kiválasztható.

15 megszakítási vonal használható, amelyek IRQ 0-tól IRQ 15-ig jelölnek (__remélem észrevette, hogy 0 és 15 között 16 különböző szám található, az „eltűnt” megszakítási vonalat a megvalósításhoz használt két áramkör összekapcsolására használják__).

A megszakítások kiosztásának általában a következők felelnek meg:

IRQ0 - Az időzítő áramkör 0. kimenete eredetileg az idő és a dátum mérésére, az AT-ban ezt átvette a CMOS RAM órája. A 0, kimenet így különböző időmérésre használható. 

:::warning A megszakítás fixen be van kötve, más célra nem vehető igénybe.

- IRQ0 - rendszer időmérő [nem változtatható]
- IRQ1 - billentyűzet [nem változtatható]
- IRQ2 - erre a bemenetre csatlakozik a második megszakítás vezérlő áramkör.
- IRQ3 - a COM2 és COM4 soros portok megszakítása,
- IRQ4 - a COM1 és a COM3 soros portok megszakítása,
- IRQ5 - az LPT2 printer port vagy hangkártya megszakítása,
- IRQ6 - a floppy diszk vezérlő megszakítása,
- IRQ7 - az LPT1 printer port, vagy hangkártya megszakítása,
- IRQ8 - a CMOS RAM óra megszakítása.
- IRQ9 - ide irányították át az elfoglalt IRQ2 megszakítást. - szabadon felhasználható (__SCSI__)
- IRQ10 - szabadon felhasználható (__SCSI, hálózati kártya__),
- IRQ11 - szabadon felhasználható (__SCSI, hálózati kártya__),
- IRQ12 - PS/2 csatlakozós egér,
- IRQ13 - a matematika segédprocesszor vagy integrált lebegőpontos egység megszakítása,
- IRQ14 - a merevlemez vezérlő megszakítása (__elsődleges ATA__).
- IRQ15 - a merevlemez vezérlő megszakítása (__másodlagos ATA__)
:::

:::tip ✍️
Az egyes eszközök működésének alapfeltétele a helyes IRQ beállítás. Ha két eszköz azonos megszakítást használ, annak az lesz az eredménye, hogy egyik sem működik megfelelően. Ilyen esetben mindig ellenőrizzük a megszakítás beállítás értékeit, s ha szükséges
avatkozzunk be.
:::

A Chipset menüben CPU és az alaplapi lapkakészlet két fontos komponensének sz északi és déli híd áramköreinek jellemzőit tudjuk módosítani. Ez a beállítási lehetőség alaplapfüggő, ezért külön nem tárgyaljuk.

![11. ábra Chipset menü](/assets/images/pc5/image-019.png)


Az ACPI menü (__Advanced Configuration and Power Interface__) a fejlett beállítás és energia kezelőfelületen módosíthatjuk az egyes rendszerkomponensek energiafelhasználásra vonatkozó alapbeállításait és állapotait. 
:::warning Az ACPI szabvány a következő komponensek kezelésére vonatkozik:

- A rendszer munka állapota
- A rendszer alvó állapota
- A rendszere szoftveres kikapcsolása (__billentyűzetről ébreszthető__)
- A rendszer hardveres kikapcsolása
:::

Hasonló beállítások vonatkozhatnak az egyes perifériákra, vagy rendszerkomponensekre is.

A Boot menüben a rendszerbetöltés forrásait és sorrendjét módosíthatjuk. Ez különösen fontos lehet a rendszer telepítéskor, amikor is cserélhető tároló médiumot (__pl. DVD, USB drive stb.__) használunk.

![12. ábra Boot menü](/assets/images/pc5/image-020.jpg)


A BIOS biztonsági beállításait a Scurity menüben találjuk. Att állíthatók be azok a jelszavak, melyek a BIOS módosításához, vagy akár a rendszer indításához szükségesek.

:::tip ✍️
Ha beállítást követően ezeket elfelejtjük, akkor az alaplap kézikönyvét előkeresve megtalálhatjuk azt az áramköri lezárási pontot melyet rövidre zárva alaphelyzetre állíthatjuk vissza a rendszerparamétereket, s ez által a jelszavakat is.
:::

![13. ábra Security menü](/assets/images/pc5/image-021.jpg)


A beállításain mentéséről és a kilépésről az Exit menüben dönthetünk.

![14. ábra Exit menü](/assets/images/pc5/image-022.jpg)