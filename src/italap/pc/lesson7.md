# 7. tananyag

:::tip 🚀
A háttértárak nagy mennyiségű adat tárolására alkalmas ki- és bemeneti perifériák. A használaton kívüli programok és adatok tárolása mellett fontos szerepük van az adatarchiválásban.

- Az információtartalmukat a gép kikapcsolása után is megőrzik
- Nagy mennyiségű adat tárolására alkalmasak
- Az íráshoz és olvasáshoz lényegesen több idő szükséges, mint a memóriánál.
:::


## A mágneses háttértárak jellemzői

:::warning Jellemzők
- __Kapacitás__: az adathordozón tárolható adatmennyiséget határozza meg. _Mértékegysége_: byte és többszörösei. Manapság 40 GB - 2 TB között van.
- __Átlagos__ hozzáférési idő: tetszőleges adat eléréséhez mennyi idő szükséges. _Mértékegysége_: millisecundum. Általában 3-12 ms
- __Adatsűrűség__: Az adathordozó egységnyi területén mennyi adat fér el. _Mértékegysége_: Gb/négyzethüvelyk. A technológia fejlődésével folyamatosan növekszik az adatsűrűség. A nagyobb adatsűrűség gyorsabb adatelérést is jelent, az egy- vagy kétlemezes HDD-k általában kevesebbet fogyasztanak, kevésbé melegszenek és halkabbak, mint a négy-öt lemezzel rendelkező háttértárak. A jelenlegi adatsűrűség 350-400 Gbit/ négyzethüvelyk.
- __Fordulatszám__: mértékegysége fordulat/perc (rpm). Nagyban befolyásolja az írási, olvasási sebességet. Fordulatszámuk: 5400, 7200, 10000, 15000 rpm.
- __Cache__ (gyorsító tár): A merevlemez tartalmazza a vezérlő elektronikáján. A merevlemez elektronikája a gyorsító tárba gyűjti a kiírandó adatot, és ha elegendő összegyűlt egyszerre, akkor kiírja a lemezre. Olvasásnál a lemezről többet olvas be, mint amennyire szükség van, arra a statisztikára építve úgyis kérni fogjuk az utána levő adatokat (előreolvasás) A gyorsító tár alkalmazásával a HDD-k elérési ideje lényegesen lecsökkent. Régebben 2 - 4 MB-os, manapság 8, 16, 32 vagy 64 MB-os gyorsító tárat szerelnek a HDD-k re.
- __Csatolási felület__: alapvetően meghatározza a HDD adatátviteli sebességét
:::

A merevlemezek állapota, a használat során folyamatosan romlik. A korszerű HDD-kben S.M.A.R.T technológiát alkalmaznak. Ez a technológia segít abban, hogy a közeledő meghibásodást előre jelzi, mégpedig úgy, hogy a merevlemez állapotáért felelős értékeket folyamatosan figyeli. Ezek az értékek a megfelelő szoftverekkel (pl. HD SENTINEL) kiolvashatóak, és így figyelemmel tudjuk kísérni a merevlemez állapotát. Ha bármelyik paraméter megközelíti a kritikus értéket, azonnali adatmentés szükséges!

### A mágneses jelrögzítés elve

:::tip 🧲
Egy nem mágnesezhető hordozóanyagra mágnesezhető réteget (vas, kobalt, nikkelötvözeteket) visznek fel.
:::

A felületre felvitt mágnesezhető réteg kis részei önállóan mágnesezhetők, az állapotuk kiolvasható.

:::danger Kétféle eljárás létezik:

- __LMR__ (Longitudal Magnetic Recording): a mágnesezendő szemcsék egymás mellett helyezkednek el
- __PMR__ (Perpendicular Magnetic Recording): a mágnesezendő szemcsék egymás alatt helyezkednek el. Ebben az esetben egységnyi felületen nagyobb adatsűrűséget érhetünk el.
:::




![1. ábra A horizontális mágneses adattárolás](/assets/images/pc6/image-009.jpg)


![2. ábra A merőleges adatrögzítés elve](/assets/images/pc6/image-010.jpg)


### A mágneses adattárolás

Az elektromos áram mágneses mezőt hoz létre maga körül, ez a mező mágnesezi be az adathordozó felületének kis részeit. Ez az írás folyamata.

A változó mágneses térben lévő vezetőben áram indukálódik. A bemágnesezett adathordozó mozog az író-olvasó fej alatt, így ennek következtében a fejben áram indukálódik. Az újabb típusú (ún. magnetorezisztív) fejeknél a változó mágneses mező ellenállás-változást idézelő, és az így kialakuló áramváltozásból határozzák meg a felírt adatokat.

A tekercsben folyó áram (a felírandó adatot hordozza) mágneses teret hoz létre, melyet a ferromágneses anyagból készült író-olvasó fej továbbít a légrés felé. A légrésben levő térerősség nagyobb lesz, mint a fejben, így eléri a közelben nagy sebességgel forgó lemezt, és ott az áram irányától függő indukciót hoz létre, ami megmarad az áram megszűnése után is (a tekercs körül kialakuló mágneses tér bemágnesezi a lemezt).

A felírt adat olvasásakor a lemez nagy sebességgel halad el a légrés előtt, és megváltoztatja az indukciót a légrésben, és a fej ferromágneses anyagában is. A tekercsben az indukcióváltozás sebességével arányos feszültség indukálódik. A feszültség iránya függ az indukcióváltozás irányától.

Mivel feszültség (amelyből vissza tudjuk állítani a felírt adatokat) csak akkor indukálódik, ha az indukció megváltozik, ezért az adatokat is indukcióváltozások formájában kell felírni az adathordozóra.

Az adatok felírás előtti átkódolását írásmódnak nevezzük. Mivel az alkalmazott írásmód befolyásolja az adatsűrűséget, ezért többféle írásmód terjedt el a mágneses táraknál.

### A mágneses háttértárolók csoportosítása

:::warning 💾
__Véletlen elérésű__

- FDD (_hajlékonylemez_)
- HDD (_merevlemez_)

__Sorfolytonos elérésű__

- szalagos háttértár (_streamer_)
:::

### A hajlékony lemezes tároló FDD (Floppy Disk Drive) működése

A meghajtó a gépbe fixen van beépítve, az adathordozó lemez cserélhető. A floppylemez mágnesezhető réteggel ellátott műanyag korong, amely egy filcborítású műanyag tokban helyezkedik el. A tok védi a lemezt a külső fizikai behatások ellen. A borításon kialakított nyílások a lemez pozícionálásához, felpörgetéséhez és az adatok írásához-olvasásához szükségesek.

A lemezek több méretben készültek, a legelterjedtebbek a 8, 5,25 és 3,5 collos méretűek voltak.

![3. ábra 3,5" Floppy meghajtó](/assets/images/pc6/image-011.jpg)


:::warning Két változata volt elterjedt:

- _DS DD_: két oldalas, oldalanként 80 sáv, sávonként 9 szektor. Kapacitás: 720 Kbyte
- _DS HD_: két oldalas, oldalanként 80 sáv, sávonként 18 szektor. Kapacitás: 1,44 Mbyte.
:::

![4. ábra Floppy lemez](/assets/images/pc6/image-012.jpg)


Előnye: olcsó, mobil. Hátránya: a kis kapacitás, sérülékeny (fizikai kontaktus van az adathordozó felület és az író olvasó fej között). Később megjelent az A drive, mely nagyobb kapacitást tett lehetővé, előnye volt hogy a floppymeghajtó is tudta olvasni, valamint a ZIP dirve ami külön meghajtót igényelt. Ma már elvétve találkozhatunk vele számítógépes rendszerekben. A kereskedelemben még kaphatóak az USB-s csatolófelületű FDD-k.

### A merevlemezes tárolók HDD (Hard Disk Drive) működése

### A háttértárolók felépítése

:::tip ⚙️/🔌
- _Mechanika_: az adathordozó mozgatását végzi
- _Elektronika_: az írásért, olvasásért, pozícionálásért felelős
:::

![5. ábra Merevlemez](/assets/images/pc6/image-013.jpg)


A mágneses réteg üvegből vagy alumíniumból készült lemezeken helyezkedik el. A lemezek egymás fölött helyezkednek egy közös tengelyen, melyet motor hajt meg. A lemezek közé nyúlnak be az olvasófej karjai, általában minden lemezhez két darab, az egyik alul, a másik felül olvassa az adatokat. A fejek tizedmikronnyi távolságra helyezkednek el a mágneses rétegtől, ezért a réteget a felhordás után simára polírozzák, hogy az író-olvasó fejek ne sérüljenek meg. A fejek központi tengelyre vannak felszerelve, amit egy nagy pontosságú, és sebességű lineáris motor mozgat.

Ezek alkotják a merevlemez mechanikáját, melyet egy zárt házba tesznek. A házon van egy nyomáskiegyenlítő szelep, ezen keresztül szűrt levegő tud beáramlani, ha csökken a nyomás, és itt tud távozni, ha a nyomás megnövekszik (nyomáskülönbség a hőmérsékletváltozás hatására következik be). A szelep egyben porvédő, ezért a finom portól is megvédi a belső mechanikát. A merevlemez házára szerelik kívülről az elektronikát (mely a merevlemez vezérlésére szolgál), és a különböző csatlakozókat.

A merevlemez működése, a mágnesesség elvén alapul. A fej a mágneses tulajdonságokkal rendelkező lemez felett halad el, közben a felületén, a lemez mozgó mágneses mezője elektromosságot generál, és a lemezen található mágneses és nem mágneses területek által keletkező vagy megszűnő elektromosság alakul át a számítógépben is használható adattá. Ez az olvasási művelet esetén történik, íráskor ugyanez az elv, csak akkor a fejre küldött elektromos mező generál mágneses teret, így felmágnesezi a lemez adott pontjait.

![6. ábra Merevlemez felépítése](/assets/images/pc6/image-014.jpg)


A lemezek forgási sebességüket rpm-ben adják meg (Rotation Per Minute, azaz fordulat per perc). Egy winchesterben több lemez is lehet: mindegyikhez két fej tartozik: alul-felül egy. A HDD-beli lemezeket azonos központú, különböző sugarú körök tagolják, ezeket sávoknak (trackeknek) nevezzük. A sávok azonosítása számokkal történik, a legkülső sáv a 0-s sorszámú. Azokat a sávokat melyek egymás alatt helyezkednek el cilindernek nevezzük.

A sávokat tovább lehet bontani ún. szektorokra. Ezeket is sorszámozzák, eggyel kezdődnek. A winchester 3-4 szektort együtt kezel, ezek a __szektorcsoportok__, a clusterek. Ha el akarjuk érni a lemez valamelyik szektorának adatait, először a megfelelő cilinderre kell pozícionálni a fejeket (a winchester seek-el), majd a fej kiválasztásával kijelöli a megfelelő felületet, s ezt követően már csak azt kell megvárni, hogy a kívánt szektor a fej vonalába érjen.

Az összetartozó adatokat célszerű egy cilinderen elhelyezni, hogy ne kelljen ezen adatok olvasása közben a fejet mozgatni. Ez javítja a teljesítményt, és az adatok beolvasásának idejét. A HDD-n levő fájlok egy idő után logikailag töredezetté válnak, az író olvasó fejnek többet kell mozognia és ez lassabb elérési időt okoz. Ezért szükséges meghatározott időnként töredezettség mentesítő (defragmentáló) programot futtatni.


## A HDD-k csoportosítása a csatolási felület alapján

- MFM
- ATA (PATA)
- SATA
- SCSI
- SAS
- FC
- Külső csatlakozó felület

#### MFM (Módosított Frekvencia Moduláció) csatlakozási felület

Az első PC-kben alkalmazott csatolási felület. A teljes vezérlőelektronika egy külső kártyán volt, a merevlemezeken csak a motorokat meghajtó és az illesztő elektronika volt.

#### ATA (PATA) csatlakozási felület

A vezérlőelektronika és a csatlakozók is rá vannak szerelve a merevlemez házának aljára. Ezeket IDE (Integrated Drive Elektronics) merevlemezeknek hívják. Később szabványosították az adatátviteli módot, ilyen típusú merevlemezeket nevezik ATA-s (Advanced Technology Attachment) meghajtóknak.

![7. ábra A merevlemez csatlakozói](/assets/images/pc6/image-015.jpg)


A merevlemez +12, és +5 voltos egyenáramú tápfeszültséget kap a számítógép tápegységétől. A merevlemez indításkori áramfelvétele többszöröse a nyugalminak, ezért ha több HDD-t szerelünk egy gépbe, akkor ügyelni kell a megfelelő teljesítményű tápegység alkalmazására.

#### Az adatátvitel kétféle módszerrel történik

- __PIO (Programmed Input/Output):__ a processzort használja az adatok mozgatására. Adatátvitel közben a processzornak minden egyes bájtot be kell olvasnia egy ,meghatározott I/O portról, majd azt a memóriába kell írnia. Ez jelentősen lefoglalja a processzort. Multitasking operációs rendszereknél (mikor egyszerre több folyamat fut) lelassítja a rendszert.

- __Bus mastering (vagy DMA mód):__ biztosítja a perifériák és a memória közötti közvetlen adatátvitelt. A processzornak az a feladata, hogy felprogramozza az EIDE kontroller DMA (Direct Memory Access) vezérlőjét - azaz megadja, hogy honnan (vagy hova) történik az adatátvitel a memóriában. A DMA vezérlő ezután "elkéri" a rendszerbuszt a processzortól, lehetővé téve az eszköz számára a közvetlen adatátvitelt. Az "elkérés" után ő lesz az, aki a busz feletti vezérléssel rendelkezik, közben a processzor végzi a saját dolgát. A folyamat végén egy megszakítás jelzi a processzor számára, hogy kész az átvitel.

Az technika fejlódése során többféle PIO és többféle DMA mód alakult ki. A PIO módokat felváltották a DMA módok, melyeket a végén UDMA (Ultra-DMA) módnak nevezték: ezek UDMA33, UDMA66, UDMA100 és UDMA133, ahol a szám a másodpercenként Megabyte-okban mért adatmennyiséget jelentette. Ez csak az elektronika átviteli sebessége, a merevlemezről lassabban lehet az adatokat leolvasni. Az UDMA166-tól kezdve a 40 eres kábelt felváltotta a 80 eres, ahol minden adatvezeték között 1-1 földvezeték található.

![8. ábra 40 és 80 eres IDE kábel](/assets/images/pc6/image-016.jpg)


A régebbi alaplapokra két IDE csatlakozót (és az ehhez tartozó két IDE vezérlőt) szereltek. Az egyiket elsődleges (IDE0), a másikat másodlagos (IDE1) IDE vezérlőnek nevezzük. A mai használatos alaplapokra csak egy IDE csatlakozót szerelnek, de több gyártó már csak SATA csatlakozóval szerelt alaplapokat készít.

![9. ábra Alaplapra szerelt IDE csatlakozó](/assets/images/pc6/image-017.jpg)

Mindegyik IDE vezérlőhöz két eszköz csatlakoztatható, vagyis egy átlagos alaplap 4 IDE eszközt vezérelhet. Az egyes vezérlőkhöz két eszközt kapcsolhatunk: az egyiket master-nek, a másikat slave-nek nevezzük. Azt, hogy melyik eszköz a master, és melyik a slave, a csatlakoztatott eszközön található jumper-ekkel különböztetjük meg. Jelölésük: MA (master), SL (slave), CS (cable select: kábel végére csatlakoztatott merevlemez lesz a master, a közepére csatlakoztatott a slave).

A csatlakozó felület hátránya egyrészt a sebesség, másrészt a széles, rövid kábelek miatti szerelhetőség. A kábelek hossza miatt nem tudjuk tetszőleges helyre berakni az eszközöket. Ez több winchester használata esetén problémát vet fel. A kábelek rendezetlensége miatt a ház szellőzése nem lesz megfelelő, ami egy idő után az eszközök károsodásához, adatvesztéshez vezet. További probléma a Master-Slave elrendezés. Ez azt jelenti, hogy egy kábelen egy vagy két eszköz van és egyszerre csak az egyik kommunikálhat. Ezért ha a két eszköz között akarunk adatátvitelt, akkor minimum feleződik a sebesség. Az elérhető elméleti sebesség-maximum: 150 MByte/s.

### SATA csatlakozási felület

A Serial ATA interface. (SATA ). A SATA sebessége 150 MByte/s , míg a SATA2 szabvány már 300MByte/sec maximális sávszélességet definiál.

![10. ábra Alapra szerelt SATA és IDE csatlakozó](/assets/images/pc6/image-018.jpg)


Itt is kétt csatlakozó van, az egyik az adatvezeték, a másik a tápvezeték. Az adatvezeték 7 erű. Ebből 2-2 a két adatvezetéknek, 3 a föld vezeték. A tápvezeték 15 erű, melyből 3 az 5V-os, 3 a 15V-os és 3 a 3.3V-os tápfeszültséget továbbítja (pozitív, negatív és föld), a maradék 6 vezeték a hot-swap (menet közbeni cserelehetőség) - hoz kell (minden feszültség szinthez 2-2).


![11. ábra SATA HDD csatlakoztatása](/assets/images/pc6/image-019.jpg)


_Előnyei_:

- Lecsökkentek a jelszintek. Ez lecsökkenti a kapcsolási időket, ami gyorsabb adatelérést biztosít.
- Nincs master-slave elv, egy kábelen csak 1 db. eszköz van.
- Minden eszköz vezetéke egy központi egységbe fut be, ami már az alaplapi Southbridge-be van beleintegrálva.
- Nincs interferencia a párhuzamos kábelek között.
- Megszűnik a széles 80-eres szalagkábel, helyette vékony kábeleket vannak. Ez megkönnyíti a szerelést, a gép átláthatóságát, valamint a ház szellőzését.
- Hot-swap változat is létezik: Menetközben lehet lehúzni, csatlakoztatni a vincsesztereket, a gépet nem kell leállítani.
- Előállítási költsége alacsonyabb.

A SATA és a SATA2 közötti kompatibilitás fontos, ezért a SATA2-ben van egy visszakapcsoló szekvencia, ami SATA-ba állítja az átvitelt, mikor olyan eszközzel kommunikál. A gyakorlatban néhány régebbi SATA vezérlő nem valósítja meg a megfelelő SATA sebesség-kritériumokat. Az érintett rendszerekben a felhasználónak kell kézzel átállnia SATA2-ről SATA-ra.


Egyre több alaplapra szerelnek SATA3-as csatlakozót. Ez a HDD-k szempontjából nem jelent sebességnövekedést, a megnövekedett sávszélességből az SSD-k fognak profitálni.

Az alapértelmezett üzemmód a SATA-hoz az AHCI (beállítása a BIOS-ban történik), mely elérhetővé teszi a SATA újabb funkcióit, mint amilyen a hot swap és a Native Command Queuing (NCQ).

NCQ: (Native Command Queuing): olyan technológia, mely képessé teszi a merevlemezt, hogy elemezze a processzortól érkező utasításokat, s azokat olyan sorrendben hajtsa végre, hogy a lehető legmagasabb legyen az adatátviteli sebesség, és legkisebb a fejpozícionálási idő.

### SCSI csatoló felület

A SCSI (Small Computer System Interface) olyan szabványegyüttes, melyet számítógépek és perifériák közötti adatátvitelre terveztek. A SCSI szabványok definiálják a parancsokat, protokollokat, az elektromos és optikai csatolófelületek definícióit. Leggyakoribb felhasználási területe a merevlemezek és mágnesszalag-meghajtók, de sok más perifériánál is alkalmazzák (szkenner, nyomtató stb).

A SCSI eszközök az ATA és SATA eszközöknél nagyobb átviteli sebességet tesznek lehetővé, viszont azoknál drágábbak, ezért az otthoni felhasználásnál SCSI eszközöket ritkán alkalmazzák. A SCSI meghajtókat hálózati szerverekben és minőségi gépparkokban használják, ahol fontos a magas adatátviteli sebesség és az adatbiztonság, megbízhatóság.

Az ULTRA 640 SCSI szabvány adatátviteli sebessége: 640 MB/s

![12. ábra SCSI HDD](/assets/images/pc6/image-020.jpg)


Egy SCSI kábelre több SCSI eszköz is felfűzhető, ezt nevezzük SCSI láncnak. A SCSI-nak több verziója létezik. Ezek közül egyesek a kábelre maximum 8, mások 16 eszköz felfűzését teszik lehetővé. A SCSI kábelhez kötött meghajtókat a SCSI vezérlőkártya vezérli, így egy kábelre ténylegesen legfeljebb 7 illetve 15 egyéb eszköz csatlakoztatható. A vezérlő egy bővítőkártya, amit közvetlenül az alaplapba kell csatlakoztatni.

![13. ábra SCSI vezérlőkártya](/assets/images/pc6/image-021.jpg)



A SCSI lánc lehet külső vagy belső, aszerint, hogy a felfűzött eszközök a gépházon kívül, vagy belül helyezkednek el. A lánc maximális hossza a SCSI verziójától függ; egy lánc hossza nem haladhatja meg 1,5–12 métert. A SCSI láncot a lánc végén elhelyezkedő eszköznél le kell zárni, különben a jel a kábelvégről visszapattan, és interferenciát okoz. A SCSI merevlemezek fizikai mérete ugyanakkora, mint az ATA és SATA winchestereké – lemezeinek
átmérője 3,5", percenkénti fordulatszáma: 10000 vagy 15000 rpm.

### SAS (Serial Attached SCSI)

SCSI-t is lassan felváltja a SAS (Serial Attached SCSI), ami a PATA és SATA csatolók viszonyához hasonlóan, egy párhuzamos interfészt vált egy soros interfész, A SAS vezérlők kezelik a SATA HDD-ket is (a SATA vezérlők nem kezelik a SAS HDD-ket).


![14. ábra 8 gigabites FC adapter](/assets/images/pc6/image-022.jpg)

### FC (Fibre Channel)

A Fibre Channel az olyan csatlakoztatási megoldás, amely garantálja az átviteli sebesség folyamatosságát, azaz a gazdagép épp olyan gyorsan kapja az adatokat, ahogyan azt a RAID vezérlők küldik. A Fibre Channel csatlakozó 8 Gb/s maximális adatátvitelre képes. Fibre Channel minden adatsort garantáltan kézbesít. Ez videó alkalmazásoknál vagy IP alapú médiafolyamok kézbesítésénél nagyon fontos, ahol nem engedhető meg, hogy késések, megszakadások legyenek.

Nagyipari, nagy-szerveri környezetekben fordul elő, ott ahol különösen fontos a gyorsaság, és a biztonságos adattovábbítás (pl. banki környezet, tranzakciók lebonyolítása).

#### A merevlemezes beszerelése a számítógépházba

Ma már nagyon sokféle típusú számítógépházat lehet kapni a kereskedelemben: az egyszerű házaktól, a korszerű csavarmentes szerelésűig. Így a HDD-k beszerelése is jóval leegyszerűsödött. Ezekből mutatunk be párat.

:::tip Beszerelési lehetőségek:
- Az egyszerű házaknál a HHD-ket 4 csavar segítségével tudjuk beszerelni a szerelőkeretbe
- Beépítő síneket pattintunk fel a merevlemez oldalára, majd betoljuk a szerelőkeretbe
:::

![15. ábra HDD beépítő kerettel](/assets/images/pc6/image-023.jpg)


![16. HDD-k beépítve](/assets/images/pc6/image-024.jpg)

- A HDD keret egyszerű mozdulattal kivehető, könnyebb szerelhetőség, a keretbe szerelhetünk ventillátort, ami biztosítja a megfelelő hűtést

![17. ábra Kivehető HDD keret](/assets/images/pc6/image-025.jpg)



#### USB csatlakozással rendelkező háttértárak.

Külső merevlemez csatlakoztatása a merevlemez mobilitásának megvalósítási módjai.

Kapható a kereskedelemben készre szerelt (vagyis HDD-vel), vagy üres háttértár, amibe tetszőleges nagyságú winchestert szerelhetünk. Ezek 2,5" és 3,5"-os méretű HDD-k befogadására szolgáló háttértárak. Minkét méretben kapható IDE, és SATA csatlakozó felülettel, habár az IDE egyre jobban kiszorul a kínálatból. Az USB csatlakozó mellé gyakran szerelnek firewire csatlakozót is.

![18. ábra USB 2.0 csatolású 3.5" háttértár PATA HDD befogadással](/assets/images/pc6/image-026.jpg)


![19. ábra USB 2.0 csatolású 2.5" háttértár SATA HDD befogadással](/assets/images/pc6/image-027.jpg)


Ma már a kisebb méretű HDD-k is nagy kapacitással rendelkeznek. Előnyük a méretein kívül, hogy nem kell külön tápegység, a számítógép USB portjáról veszik fel a feszültséget.
Megjelentek a kínálatban az USB3 csatolófelületen kapcsolódó háttértárak. Az USB2-höz képest nagyobb adatátviteli sebességgel rendelkeznek.


![20. ábra USB 3.0 csatolású 2.5" háttértár](/assets/images/pc6/image-028.jpg)


### E-SATA csatlakozással rendelkező háttértárak

Előnye, hogy a SATA sebességét és előnyeit használva a számítógép megbontása és szerelése nélkül köthetünk rá újabb adattárolókat.

Az eSATA csatlakozóján keresztül 5-6-szor gyorsabban olvashatjuk be és, menthetjük adatainkat, mintha USB 2.0-át használnánk. Ha van eSATA a gépben, akkor kihasználhatjuk a nagyobb sebességet, amennyiben táplált a gép csatlakozója (powered eSATA), akkor külön tápellátás sem szükséges.

![21. ábra eSATA csatlakozó](/assets/images/pc6/image-029.jpg)


A legújabb hordozható merevlemezhez tartozó speciális eSATA kábel, adat- és egyben tápcsatlakozásként is funkcionál. Természetesen ez az előny csak tápellátást biztosító eSATA aljzatok esetében érvényesül.

Az eSATA csatlakozó megtalálható az újabb notebook-on is.
Ezekkel a megoldásokkal valósítják meg a merevlemezek mobilitását.

Meg kell még említeni a mobilrack- es megoldást. A mobilrack háza be van építve a számítógépbe, a fiókban található a HDD. A fiók könnyen kihúzható, és átvihető másik gépbe. Hátránya: a fogadó gépben is lennie kell egy mobilrack-nek, notebookok-nál nem alkalmazható.

#### Sorfolytonos elérésű mágneses háttértárak (streamer)

A szalagos meghajtó, egy olyan számítógépes hardvereszköz, mely mágneses technikával, mágnesszalagra (hasonlóan mint a kazettás magnók) rögzíti az adatokat. Az ilyen jellegű adattárolás ma már főleg csak archiválási célokat szolgál, mivel a technológia adatsűrűségének és költségeinek aránya kedvezőbb, mint más adattároló eszközök esetében.

![Mágneses háttértárak](/assets/images/pc6/image-032.png)

A véletlen hozzáférésű háttértárakkal ellentétben itt az egyes összetartozó bitek (optimális esetben) folytonos sorrendben követik egymást, az  adattöredezettség minimalizálása végett. Tároló kapacitásuk 10 MB-tól 10 GB-ig terjedhet. Nagygépes rendszerekben (bank, informatikai cég, társadalombiztosítás, közigazgatás, stb.) napi biztonsági mentésre használják. A szalagos meghajtók többféle interfészen keresztül is csatlakozhatnak a számítógéphez. A legelterjedtebb a SCSI csatolók használata, de létezik üvegszálas, soros, IDE, USB, és FireWire csatolás is.

## RAID rendszerek

RAID rendszerek - Redundant Arrays of Inexpensive Disks

Az olcsó kis kapacitású diszkek közös rendszerbe foglalásával, tömbbe szervezésével nem csak a kapacitás, hanem a teljesítmény is jelentősen növelhető. Az így létrejövő nagy kapacitású diszkrendszer teljesítménye meghaladja az egyetlen nagykapacitású diszk teljesítményét. Ezt a diszkrendszert úgy lehet a számítógéphez csatlakoztatni, mint egy önálló logikai tároló egységet. Az ilyen tároló rendszer MTBF-je (Main Time Between Failure (meghibásodások között eltelt átlagidő) jelentősen lecsökken.

A RAID rendszerek biztosítani tudják a számítógép folyamatos működését lemezmeghibásodás esetén is. Hogy hány merevlemez meghibásodása esetén képes tovább működni a rendszer, azt az alkalmazott RAID módszertől függ.

A drágább rendszerek lehetővé teszik a diszkek meleg cseréjét (hotswap), és az új diszk behelyezése után automatikusan feltöltik a kiesett adatokkal (szinkronizáció). A bonyolultabb rendszerek meleg tartalék lemezekkel rendelkeznek, így a meghibásodott lemezt sem kell azonnal kicserélni, tartalék tápegységgel, és tartalék hűtőventillátorral is rendelkeznek, meghibásodás esetén automatikusan bekapcsolnak a rossz helyett, így biztosítva a folyamatos, hibamentes működést. A meghibásodott tápegység is melegen cserélhető.


Ezeknél a rendszereknél nem kell leállítani a gépet a hardware hiba elhárítása esetén. A legkorszerűbb RAID-es rendszereknél a tömb méretét utólagosan lehet növelni, át lehet a tömböt konvertálni más RAID rendszerbe adatvesztés nélkül. A RAID arra jó, hogy növelni lehessen a diszkes rendszerek teljesítményét, továbbá diszkkiesés esetén azonnal, vagy nagyon gyorsan működőképessé váljék a rendszer.

A RAID vezérlését hardveresen, vagy szoftveresen lehet elvégezni.

:::tip A hardver által vezérelt RAID tulajdonságai:
1. Minden raid vezérlését saját dedikált kontroller (saját memóriával) végez, nem terheli a szerver erőforrásokat és az operációs rendszert.
2. Dedikált ECC (hibajavító) cache memória.
3. Dedikált akku (battery backup) a cache-ben lévő adatok védelmére.
4. Hiba loggolás.
5. HDD ellenőrzés, és esemény figyelmeztetés.

:::tip A gyakorlatban szinte mindenhol hardveres RAID-et alkalmaznak, a szoftveres RAID nem alkalmas komolyabb feladatokra.
Adatmentésre mindig szükség van, hisz az is megtörténhet, hogy valamennyi (vagy legalábbis egynél több) diszk egyszerre hibásodik meg.
:::



![22. ábra Raid vezérlő](/assets/images/pc6/image-030.jpg)


A létrejövő logikai lemez mögött álló technológia láthatatlan az operációs rendszer számára, a RAID ugyanúgy kezeli az olvasási, írási és egyéb lemezkezelési műveleteket. A RAID alapelve: a fizikai lemezek csíkokra (stripes) bontása. Ezek a csíkok minden lemezen egyforma méretűek, mely 512 byte-tól néhány megabyte-ig terjedhet. Az adatok nem folytonosan kerülnek egy-egy lemezre, hanem az egymást követő csíkokra.

A __RAID 0__: Összefűzi a merevlemezeket, a lemezek kapacitása összeadódik, egyetlen nagy lemeznek látszanak. Mindenféle redundancia vagy paritás nélkül csíkozza az adatokat a meghajtókon. Ez nyújtja a legnagyobb adatátviteli sebességet és kapacitást, mind az írási, mind az olvasási műveletek párhuzamosan történnek. Hátránya, hogy nem biztosít hibatűrést, ezért egyetlen fizikai lemez meghibásodása az egész rendszert használhatatlanná teszi.

Az __RAID 1-es__ szint tükrözi (mirror) az adatokat, azaz az adatok duplikálva vannak. Az írás és olvasás párhuzamosan történik, ebből következik, hogy az olvasás jóval gyorsabb az írásnál. Amennyiben az egyik meghajtó meghibásodik, az adatok továbbra is rendelkezésre állnak a másikon, emiatt ez a szint elég jó hibavédelmet biztosít. A védelem ára a kétszeres fizikai lemezszükséglet. A RAID 1 nem használja a csíkozást, azonban igen elterjedt az 1-es és 0-ás szint összekapcsolásával kapott RAID 10-es rendszer. Nem használnak tartalék meghajtókat.

A __RAID 2__ már használja a csíkozást, emellett külön meghajtókat használnak paritás információk tárolására. A gyakorlatban nem használják ezt a RAID szintet.

A __RAID 3-4__ szintén csíkozza a meghajtókat, és egy külön lemezre írja a paritásadatokat. A két szint közti különbség, hogy a 3-asnál kisméretű csíkokat használnak, míg a 4-es nagyméretű blokkokkal dolgozik. Ha az egyik meghajtó meghibásodik, az adatok rekonstruálhatók a paritást tartalmazó lemez segítségével. Mivel a paritás információt íráskor kell generálni, ezért ez a számításigény kihat a rendszer teljesítményére. A RAID 3 és 4 megoldást ott célszerű alkalmazni, ahol sokszor nagy fájlokat, adatokat mozgatnak, és fontos a redundancia. Tartalék meghajtók hiba esetén átvehetik a sérült lemez szerepét.

A __RAID 5__ már nem csak az adatokat, hanem a paritás információkat is csíkozva helyezi el a lemezeken. A paritás sorban a következő meghajtóra kerül íráskor. Az olvasási és írási műveletek párhuzamosan végezhetőek. Szintén írás közben számolja a paritást, de kizáró- vagy (XOR) algoritmust használ, mely kisebb adatmozgatások számára kiváló. Tartalék-meghajtók hiba esetén átvehetik a sérült lemez szerepét.

A __RAID 6__ az 5-ös szint kibővítése: nem csak soronként, hanem oszloponként is kiszámítja a paritást, így kétszeres meghajtó meghibásodás sem jelent problémát a rendszer egészére nézve. A paritáscsíkokat itt is az egyes meghajtók között, egyenletesen elosztva tárolják, de ezek természetesen kétszer annyi helyet foglalnak el, mint a RAID 5 esetében.

## Az adattárolás fejlesztései

![23. ábra HRD](/assets/images/pc6/image-031.jpg)

A DataSlide új alapokra próbálja helyezni a HDD-k felépítését: forgó tányérok helyett adatrögzítő lapot használnának, a rajtuk lévő szektorok négyszög alakúak, így a felületet 100%-osan ki tudnák használni. A HRD (Hard Rectangular Disk) mindegyik szektorhoz saját fejet alkalmaz. Az adatrögzítő lemez (egy piezo-elektromos megoldásnak köszönhetően) a forgó mozgás helyett, oszcilláló mozgást végez az író-olvasó fejeket tartalmazó réteg fölött.

A súrlódás miatt a kettő között gyémántkeménységű anyag található.

Az SSD (Solid State Disk) egy olyan adattároló eszköz, ami félvezetős memóriában őrzi a tárolt adatot, és azt hosszú ideig megőrzi (állandó tár), a környezetéhez emulált merevlemez-csatlakozófelülettel csatlakozik, tehát lényegében egy mozgó alkatrészeket nem tartalmazó merevlemeznek tekinthető.

Ez a technológia nem használ mozgó alkatrészeket, működése a félvezetőkön belüli elektromágneses és kvantummechanikai hatások alapján alapul. A mozgó alkatrészek hiánya miatt kevésbé sérülékeny, mint a hagyományos merevlemez, csendesebb, nincsenek a mechanikából adódó késleltetések, az adathozzáférés egyenletesen és gyors.

Ma már egyre több notebookba építenek be ilyen háttértárakat. A technológia gyors fejlődésével rohamos elterjedése várható, de azért még sokáig nem fogja kiszorítani a merevlemezes tárolókat.

## Szerelési tudnivalók

:::tip 🛠️
Számítógép szereléskor gondoskodni kell a kellő földelésről, ami az emberi test által összegyűjtött sztatikus elektromosságot el tudja vezetni. Erre kiválóan alkalmas az antisztatikus csuklópánt, melynek használata gépszereléskor kötelező. Kerüljük a szintetikus anyagokból készült ruházat használatát!

Miután beszereltük a gépbe a HDD-t ellenőrizzük le még egyszer a kábelek, tápcsatlakozók megfelelő bekötését, és a többi alkatrész (processzor, hűtőborda, vezérlőkártya stb.) helyes csatlakoztatását.
:::

Kapcsoljuk be a gépet, lépjünk be a BIOS-ba és nézzük meg, hogy felismerte-e a HDD-t. Ha több HDD van a gépben állítsuk be az elsődleges HDD-t amire majd az operációs rendszert telepíteni fogjuk.

Állítsuk be a boot sorrendet annak megfelelően, hogy melyik eszközről akarunk telepíteni.

Az operációs rendszer telepítése előtt futtassunk le egy tesztprogramot, amivel leteszteljük a HDD-t. Ha minden rendben van, akkor kezdhetjük telepíteni az operációs rendszert.

A HDD partícionálása még az operációs rendszer telepítése előtt (különböző segédprogramokkal) vagy az operációs rendszer telepítésekor is elvégezhető.


## Néhány szó a biztonságos adattárolásról

Manapság az élet területén mindenhol számítógépeket használunk. Rengeteg adattal dolgozunk, amiket szeretnénk megőrizni, biztonságban tudni. Ezért nagyon fontos az adatok tárolása, mentése.

Nagyon fontos a számítógép megfelelő üzemeltetése, a megfelelő hardvereszközök használata.

Ügyelni kell a gépház megfelelő szellőztetésére, a winchesterek hűtésére. Több winchester esetén célszerű a winchestereket hűtéssel ellátni. Lehet aktív vagy passzív hűtésű. Mindkét esetben ügyelni kell arra, hogy a meleg levegőt eltávolítsuk a házból, és helyette friss levegőt vezessünk be.

Szerver környezetben célszerű a szervereket légkondicionált helyiségben elhelyezni. Célszerű beállítani egy backup szervert adatmentés céljából, lehetőleg egy másik, távolabbi helyiségben.

A felhasználói környezet határozza meg, hogy az adatmentés milyen eszközökkel, milyen gyakorisággal (napi, heti, havi, stb.) történik.

Ha bármilyen adatvesztést vagy hibát észlelünk, ne kísérletezzünk a helyreállítással, azt bízzuk szakemberre.

