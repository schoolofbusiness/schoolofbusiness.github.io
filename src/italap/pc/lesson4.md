# 4. tananyag

:::tip 🚀
A személyi számítógépek megjelenésekor létrejöttek és kéz közelbe kerültek azok az alkatrészek, melyekhez hasonlót a korábbiakban csak megfelelő jogosultságokkal rendelkezők láthattak, gondosan hűtött zárt termekben. Az alaplap (angolul motherboard) fogalma is ekkor került be a közbeszédbe.
:::

## Az alaplap funkciói

Azok az eszközök és alkatrészek, melyeket a számítógép házán belül találunk rendkívüli formagazdagsággal rendelkeznek, összekapcsolásuk, s egyáltalán a számítógép házon belül történő elrendezésük egy fix pontot igényel. Ha nem is pont, de mindenképpen jó alátámasztás egy olyan téglalap alakú lemez, melyre elhelyezhetjük a legkisebb alkatrészeket, aljzatokat alakíthatunk ki a különféle eszközvezérlő hardverek részére egyáltalán egy közös alátámasztási és kapcsolódási helyként szolgál, nagyon hasonlóan egy vasútállomáshoz.


:::warning ⚠️
Leszögezhetjük tehát, hogy az első alapvető és azonosítható funkció az alátámasztás (szerelési és elhelyezési felület az alkatrészeknek), az ebből következő további funkcionalitás pedig az alkatrészek közötti kapcsolat megteremtése.
::: 

A nyomtatott áramköri lap (angolul Printed Circuit Board), melynek anyaga valamilyen jó szigetelő tulajdonságú műanyag (napjainkban üvegszállal erősített epoxigyanta, korábban bakelit, kerámia és más szigetelő anyagok). Az alaplap szempontjából fontos tudnunk, hogy a szigetelő lapok felületére jól vezető fémet juttatnak rendkívül vékony rétegben (kb. 50 mikron vastagságban, ami megfelel a legvékonyabb irodai műanyag tasak az ún. genoterm vastagságának).

A fém filmre fényérzékeny réteg kerül, melyet az áramköri vezetékek rajzát tartalmazó filmen keresztül UV fénnyel megvilágítanak (mint egy diavetítés során). A fényérzékeny rétek azokról a helyekről, ahol fény érte eltűnik. Ezt követően a szabaddá vált vezető felületeket lemaratják az műgyanta felületről, azon megmarad az áramköri pályák rajzolata.

A gyártás folyamata természetesen ennél összetettebb, de az alapelvek szintjén elég megismernünk a eljárást. Az elkészült lapok akár több rétegben is egymásra helyezhetők (akár 48 réteg is kerülhet egymásra), így nagyon komplex áramkörök is kialakíthatók akár három dimenzióban is. A rétegek között furatok segítségével lehet kapcsolatot teremteni, az egyes rétegek felületét szigetelő fóliák választják el egymástól.

Az ily módon összeállított áramköri panelek alkalmasak további egységek (áramkörök, csatlakozók stb.) fogadására, az egyes komponensek közötti kapcsolat megteremtésére. Nézzünk egy vázlatos alaplap diagramot és azonosítsuk be az egyes összetevőket!

![1. ábra Alaplap elrendezése](/assets/images/pc3/1.png)

A számítógép alapvető felépítésénél amely a Processzor - Memória - Segédberendezések hármas tagolását jelenti egy jóval részletesebb ábrát látunk. A Processzor (angolul Central Processing Unit, __CPU__) és a memória csatlakozók között, mellet, vagy éppen távolabb számos további áramkör és csatlakozó látható. Mi ennek az oka?

A személyi számítógépek alaplapjainak fejlődése során az egyes problémák megoldására született technikai fejlesztések jelennek meg a mai alaplap szerkezetbe, Ennek legjelentősebb előmozdító tényezője a sebesség növelés volt. A nagy sebességű alkatrészeket, mint a __CPU__ és a memória egymás közelébe célszerű elhelyezni, a köztük lévő kapcsolat pedig minél nagyobb sávszélességűnek (_egységnyi idő alatt minél több adat átvitele_) kell lennie.

Ezt a működési modellt szolgálja ki az alaplapi lapkakészlet (angolul _chipset_) északi híd (angolul _Noth Bridge_) nevű talán legfontosabb komponense, mely meghatározza, hogy mely processzorok és memória típusok milyen kapacitással és teljesítménnyel építhetők egybe (az előző ábrán a szaggatott vonalon belüli rész).

Erre a korlátozásra lényegében azért van szükség, mert a __CPU__ és a memória közötti gyors kommunikáció összehangolása a két összetevő optimálistól jelentősen eltérő jellemzői esetén (pl. működési frekvencia vagy más néven órajel értékei, adott pillanatban feldolgozható adatméret, vagy szóhosszúság stb.), a komplex rendszer hatékonysága csökkenhet, hiába jók egyébként az összetevők paraméterei külön-külön.

A nagy sebességű kapcsolatok közül az északi híd kiszolgálja még a grafikus kártyák csatlakozóit, melyek __AGP__, vagy __PCI Express__ szabványú bővítő helyeken keresztül kapcsolódnak a belső sínrendszerre.
Szintén a lapkakészlet fontos összetevője a déli híd (angolul South Bridge), melyet I/O vezérlő elosztónak is nevezhetünk, hiszen ide csatlakoznak az alacsonyabb sebességtartományban működő egységek: _IDE_, _SATA USB_, _Ethernet_, a _CMOS_ memória és az alaplapra integrált grafikus vezérlő (_PCI buszon keresztül_),

A déli hídra csatlakozó __LPC__ busz (angolul _Low Pin Count Bus_) lehetőséget nyújt a __Super I/O chip__en keresztül a korábbi periféria szabványokkal és kapcsolódó alkalmazásaikkal való kompatibilitásra, így továbbra is használhatók a következők: a soros és a párhuzamos port, hajlékonylemezes egységek, billentyűzet és egér kezelő áramkörök.

Ugyanerre a buszra csatlakozik a __Flash ROM__ memórián elhelyezkedő BIOS (angolul _Basic Input Output System_), a alapvető be- és kimeneti eszközök kezelőrendszere, mely kapcsolatot teremt a számítógép egyes hardveres egységei (pl. billentyűzet, egér, tárolók stb.) és a szoftverek között (az operációs rendszer közreműködése mellett).

A déli híd és a __Super I/O chip__ által kezelt eszközök kivezetései az alaplap hátoldalán figyelhetők meg például a következő ábrán is látható csoportosításban:

![2. ábra Alaplap kimenetek](/assets/images/pc3/2.png)


Ahol az egyes csatlakozók a következők:
1. párhuzamos csatlakozó (angolul: parallel connector)
2. soros csatlakozó (angolul: serial connector)
3. soros csatlakozó (angolul: serial connector)
4. diagnosztikai fények (angolul: diagnostic lights)
5. PS/2 egér csatlakozó (angolul PS/2 mouse connector)
6. PS/2 billentyűzet csatlakozó (angolul PS/2 keyboard connector)
7. hálózati csatlakozó (angolul network adapter)
8. USB csatlakozó (angolul USB ports)
9. monitor csatlakozó (angolul video connector)
10. hang vonal kimenet csatlakozó (audio line-out connector)
11. hang vonal bemenet csatlakozó (audio line-in connector)
12. hang mikrofon csatlakozó (audio microphone connector)


### RS-232

A távközlésben az RS/232 szabvány a bináris adatok soros átvitelét írja le a terminál eszközök és a kommunikációs eszközök között. Tipikusan ilyen a személyi számítógép soros csatlakozója, melyen keresztül modem, szkenner, nyomtató, egér és még számos eszköz csatlakoztatható a rendszerhez.

![3. ábra RS-232 csatlakozó](/assets/images/pc3/9.jpg)


### VGA csatlakozó

A kijelzők analóg csatlakozása a személyi számítógépekhez a VGA csatolóval történik. Korábban a 9 érintkezős változat is használatos volt egyes monitortípusok esetében, illetve létezett egy VESA DDC (Video Electronics Standards Association Display Data Channel) nevű változat, mely nem terjedt el nagy mértékben. Napjainkra a három sorban 15 érintkezőt tartalmazó csatlakozót alkalmazzuk. A csatlakozó az alaplap hátsó kimeneti paneljén helyezkedik el, amennyiben alaplapra integrált grafikus vezérlőnk van.


A használat során gyakran előfordul (különösen tapasztalatlan felhasználók esetében), hogy
az érintkezők elgörbülnek, esetleg tőből letörnek. Ennek megelőzésére érdemes az a szabály használni, miszerint ami nem megy elsőre ne erőltessük, vagy legalább ellenőrizzük a csatlakozókat a művelet előtt.


![4. ábra VGA csatlakozó](/assets/images/pc3/10.jpg)


### DVI csatlakozó

Szintén megtalálhatjuk az alaplap hátsó kimeneti paneljén a Digital Visual Interface-t. Egy egy olyan ipari szabvány, mely lehetővé teszi nagy felbontású és teljesítmény igényű mozgóképek megjelenítését. Ez magyarul azt jelenti, hogy tömörítés nélküli video adatfolyam valós idejű megjelenítését támogatja HDTV felbontásban (720p, 1080i és 180p).

Az 1999 áprilisában bemutatott 1.0 szabvány ún. TMDS (angolul transmission minimized differential signaling) jeltovábbítást használ. Ez a jelátvitel a három alapszín adatcsatornáját (vörös, zöld, kék) és egy órajel vezérlő csatornát foglal magában. A 165 MHz-en működő rendszer 10 bites TMDS csatornáin 1,65 Gb/s sávszélességgel továbbítja az adatokat, melyek alkalmasak 1920 × 1080 képpontos felbontással megjelenni a 60 Hz-es digitális kijelzőn (pl. egy LCD kijelzőn).

Két változata közül a Single Link DVI 165 MHz, míg a Dual Link DVI támogatja 2 × 165 MHz frekvenciás átvitelt is. Mindkét változatban kék-két fajta csatlakozófelület létezik, melyeket egyszerű rátekintéssel is meg tudunk különböztetni: a Sinle Link csatlakozó 18, míg a Dual link csatlakozó 24 érintkezős (lásd a következő képet).

![5. ábra DVI csatlakozók](/assets/images/pc3/5.png)


### Jack csatlakozó

A Jack csatlakozónak nevezett kapcsolóelem az audio csatlakozók legnépszerűbb formája. Első változata 1878-ban(!) jött létre a kézi kapcsolású telefonösszeköttetések megvalósítására. Ekkor a 1⁄4 inches (6,35 mm) változat alakult ki (mely ma is használatos), majd később a 3,5 mm-es és 2,5 mm-es változatok is megjelentek. Mindhárom méretváltozatban létezik két vezetős mono és három vezetős sztereo változat.
A hangkártyákban jellemzően a 3,5 mm-es változatot használják, míg a 2,5 mm-es a kéziszámtógépekben található. A 6,35 mm-es csatlakozót professzionális hangkezelő rendszerekben alkalmazzák.
Az egyes csatlakozóhelyeket színkód szerint tudjuk használni:

![6. ábra Jack csatlakozó](/assets/images/pc3/6.jpeg)


1. __Lime zöld (angolul Lime Green)__ - Vonal kimenet, elülső hangszóró, fejhallgató (angolul Line-Out, Front Speakers, Headphones)
2. __Rózsaszín (angolul Pink)__ - Mikrofon (angolul Microphone)
3. __Világoskék (angolul Light Blue)__ - Sztereó bemenet (angolul Stereo Line In)
4. __Sötétbarna (angolul Dark brown)__ - Vonal kimenet bal-jobb hangszóró részére (angolul Right-to-left speaker)
5. __Narancs (angolul Orange)__ - Mélynyomó és középső kimenet (angolul Subwoofer and Center out)
6. __Fekete (angolul Black)__ - Hátsó térbeli hangszóró az 5.1 és 7.1 hangrendszereknél (angolul Rear Surround Speakers for 5.1 and 7.1 systems)
7. __Szürke (angolul Gray)__ - Középső térbeli hangszóró 7.1 hangrendszernél (angolul Middle Surround 
Speakers for 7.1 systems)

### HDMI csatlakozó

Több alaplapon megtalálható a HDMI (angolul High-Definition Multimedia Interface) csatlakozó, vagyis a nagyfelbontású multimédia csatolófelület, mely támogatja a nagyfelbontású video és a többcsatornás audio jelek egy vezetéken történő átvitelét.
A 19 érintkezős A típusú csatlakozó mellett a bevezetés stádiumában lévő 29 érintkezős változat is megjelenik. Ez utóbbi további szolgáltatásokat nyújt majd a nagyfelbontású megjelenítésben, pl. támogatja a 1080p felbontást is. A csatlakozó az alaplap hátsó kimeneti paneljén helyezkedik el,az analóg és digitális grafikus kimenetek közelében (lásd a képen).

![7. ábra HDMI csatlakozó](/assets/images/pc3/7.jpg)


### A fontosabb alaplapi buszrendszerekről

Az alaplapon elhelyezkedő fontos alkatrészek közötti kapcsolatot a buszrendszerek biztosítják. Ezeken továbbíthatjuk az adatokat (adatbusz), az egyes címeket (címbusz) és a vezérlő utasításokat (vezérlő busz). A három rendszer teljes elkülönülése ritka, általában egy vagy két vezetékkötegen történik az összes jel továbbítása. A buszrendszerek tekintetében megkülönböztetjük a processzor és memória közötti adatcsatornát – ez a helyi busz (gyártó specifikus, nem szabványosított) – és a perifériák felé történő adattovábbítás csatornáit – ez a periféria busz (szabványokban leírt).

A buszrendszereken az adattovábbítás többféle módszerrel történhet: ilyen megoldás a szinkron átvitel, mely során az adás és a vétel megadott sebességgel történik, meghatározott vezérlőjelek időzítésével. Az adó ilyenkor nem vár választ, a rendszer helyes működésével a kommunikáció garantáltan hibátlan. Az aszinkron átvitel során az adó és a vevő nem jár szinkronban. A kommunikációhoz kapcsolatfelvétel és gyakran a vétel visszaigazolása szükséges (angolul handshake).
A buszrendszereken átvihető adatok mennyisége alapvetően két tényezőtől függ: az átviteli sebességtől és a rendszert ütemező órajel nagyságától. További befolyásoló tényező még az adat és címbuszok bitszélessége, az átviteli protokoll és a buszon elhelyezkedő vezérlők száma.

#### FSB (Front Side Bus)

A processzort a rendszermemóriával összekötő sínrendszer. Az FSB sebességéből állítják elő szorzással a processzor órajelét. Az FSB sebességével kommunikál az alaplapi lapka készlet és a RAM is.

#### BSB (Back Side Bus)

A hátsó oldali busz (az előző ábrán nincs külön jelölve) kapcsolja össze a processzort a cache memóriával, a gyorsító tárral, rendszerint az alaplapon elhelyezkedő L2 cache-sel. Egy önálló tervezési megoldás, hogy a Back Side buszt a Front Side Bus mentén valósítják meg, ezt kettős független buszrendszernek (angolul Dual Independent Bus) nevezzük az Intel cég terminológiája szerint. A BSB óra jelfrekvenciája rendszerint azonos a processzor órajel frekvenciájával, ám a busz sávszélessége lehet nagyobb (256 vagy 512 bit is).

#### PCI Bridge

A Front Side Bus-t és a PCI sínt összekapcsoló kommunikációs hardveregység, amely az alaplapi áramkörkészlet (chipset) része. Lehetővé teszi a PCI sínrendszer "processzorfüggetlen" alkalmazását, és két PCI egységnek a PCI Bridgen keresztüli adatcseréjét.

#### PCI Express busz

A PCI szabvány 1992-es megjelenése óta folyamatosan fejlődik (lásd a következő táblázatot). Napjainkban a PCI Express (PCI-X) szabványváltozat az aktuális, melynek 1.0-ás verzióját a legnagyobb szervergyártók kezdeményezésére, a szélessávú összeköttetést igénylő interfészek (Gigabit Ethernet, üvegszálas összeköttetés, Ultra3SCSI) miatt 1999-ben dolgozták ki. Ennek továbbfejlesztett 2.0-s verzióját 2002 júniusában publikálták. 2007-ben jelent meg a 3.0 szabvány első változat, mely újabb jelentős sebesség növekedést, ugyanakkor nagyobb adatintegritást jelent majd (véglegesítés 2010-re várható).

A PCI Express soros adatátvitelt használ, ami jelentősen magasabb órajel érhető el a PCI buszhoz képest.

Érdekes kérdés, hogy a PCI Express rendszer ténylegesen tekinthető-e buszrendszernek, hiszen az eszközök között lényegében pont-pont kapcsolat alakul ki, a PCIe csatlakozók és lapkakészlet között ún. dedikált (kizárólagosan használt) vonalakon történik az adatátvitel.

![8. ábra PCI-E csatlakozók](/assets/images/pc3/8.jpg)

### (P)ATA / IDE

A fenti címszóval kapcsolatos felmerül a „minek nevezzelek” kérdése. A Western Digital és az Imprius cég által kidolgozott csatolófelület a korai időkben IDE (angolul Integrated Device Electronic), vagyis integrált eszközelektronika néven volt ismert. Később marketing meggondolások alapján a szabvány ATA - (angolul Advanced Technology Attachment), fejlett technológiájú csatoló néven vált ismertté.

A korai időszakban alakult ki az EIDE - Enhanced IDE szabvány mely a merevlemezek kapacitásának korábbi 528 MB-os méretkorlátot 8,4 GB-ig tolta ki. A későbbiek során erre a szabványra is ATA néven hivatkoztak. A Serial ATA szabvány megjelenésekor (lásd később) került a P(arallel) a rövidítés elejére. A cserélhető lemezes rendszereket (CD-ROM, DVD-ROM meghajtók) támogató szabvány változat ATAPI - Advanced Technology Attachment Packet Interface, vagyis ATA csomag illesztő néven ismert.

A tipikusan merevlemezek optikai meghajtók esetén alkalmazott szabvány szerint a az eszköz (pl. merevlemez) vezérlő elektronikát magára az eszközre építik rá, abba integrálják. Az áramellátás ezeknél az eszközöknél a négy érintkezős Molex csatlakozón keresztül történik. A PATA eszközök az alaplapra integrált 40 tűs csatlakozóra kapcsolódnak (lásd az ábrán). A 40 vagy 80 vezetékes szalagkábelen vörös jelzés mutatja a 1 tűhöz történő illesztés helyet. Az alaplapi csatlakozón számozással jelölik a csatlakozótű sorszámát.

![9. ábra PATA/IDE csatlakozók](/assets/images/pc3/11.jpg)

### SATA
A Serial Advanced Technology Attachment, vagyis soros fejlett technológiájú csatoló 2003-
as megjelenésével a vált a korábbi ATA interfész Parallel ATA-vá a megkülönböztethetőségmiatt.

A tárolóeszközök adatátviteli szabványai közül az egyik legújabb is legalább két generációval rendelkezik. Az első SATA/150 néven is ismert változat, amiből adódóan 1,5 Gb/s adatátviteli sebesség volt elérhető.

A soros átvitel és a Low voltage differential signaling (alacsony feszültségű különbözeti jelrendszer) hatására hosszabb adatátviteli kábelek alkalmazhatók, nagyobb a sebesség. A SATA szakított a korábbi megosztott master - slave (mester/szolga) adatbusz hagyományával. A master és slave kábel dedikált (funkcióhoz kötött), s a hozzájuk tartozó sávszélesség is rögzített. A SATA a korábbiakban megismerttől eltérő 15 érintkezős tápcsatlakozóval rendelkezik.

SATA II szabvány maximálisan 300 MB/s adatátviteli sebességet támogat. A szabvány oda-vissza kompatibilis a SATA rendszerrel.

SATA III szabvány maximálisan 600 MB/s adatátviteli sebességet támogat. A szabvány oda-vissza kompatibilis a SATA rendszerrel.

![10. ábra SATA csatlakozók](/assets/images/pc3/12.jpg)


### External SATA

Az eSATA új technológiát vezet be a PC tárolóeszközei közé, mellyel lehetővé válik a külső interfészen (pl. USB vagy FireWire) keresztüli rácsatlakozás. Az akár egy méteres kábellel rácsatlakoztatott külső tár alkalmas adatmentések, vagy hálózatról leválasztott gépek közötti adathordozás funkcióira is. Az új szabványban meghatározzák a kábel, a csatoló felület és a jelátvitel jellemzőit.

![11. ábra SATA csatlakozók](/assets/images/pc3/13.jpg)
