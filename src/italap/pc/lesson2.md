# 2. tananyag

:::tip 🚀
Az elméleti fogalmak tisztázása és átbeszélése után folytassuk a sokkal izgalmasabb gyakorlati feladattal. Az eddig megismert számítógép alkatrészeket fogjuk összeépíteni egy működő számítógéppé. Nos, kezdjünk is hozzá.
:::

## A számítógép összeszerelése

:::tip Tegyünk szabaddá egy megfelelő asztalt
- Gyűjtsük össze a szereléshez szükséges hardvereket
- Készítsük elő a szereléshez szükséges szerszámokat
- Vegyük elő a hardverek meghajtó programjainak CD lemezeit
::::

:::danger ❗
A számítógép szereléshez kizárólag áramtalanított állapotban szabad elkezdeni, és minden körülmények között be kell tartani az érintésvédelmi szabályokat.
Egy számítógép szétszereléséhez a következő eszközök szükségesek:
:::



![33. ábra. Számítógép szerelés](/assets/images/pc/image-044.jpg)


:::tip Egy számítógép szétszereléséhez a következő eszközök szükségesek:

- Különböző méretű csillag és lapos csavarhúzók
- Ecset vagy sűrített levegő a por eltávolításához
- Hővezető paszta
- Esetlegesen kalapács
- Sok türelem :D
:::

Az utolsó pontot komolyan kell venni. Sokszor találkozhatunk olyan helyzettel számítógép szerelés során, amely nagyon frusztráló lehet. Ilyenkor ne erőltessünk semmit. Inkább tartsunk egy kis pihenőt. Ha egy alkatrészt nem tudunk a helyére illeszteni, akkor semmiképpen se erőltessük, mert rossz esetben valami tönkre mehet, és egy ilyen hiba  komoly anyagi következményekkel járhat. Ha végképp nem tudjuk megoldani a problémát, akkor kérjünk segítséget egy tapasztaltabb ismerősünktől, vagy olvassunk utána az Interneten, valószínűleg már más is találkozott azzal a problémával, amivel mi is.

:::warning A gép összeszerelésének sorrendje nem kötelező, ez csak egy ajánlott lehetőség:
- Csavarozzuk szét a számítógép házat (Vegyük le az oldallemezt). Szedjük ki, ha van a benne hálózati kábel.
- Csavarozzuk be a műanyag vagy réz távtartókat, úgy hogy illeszkedjen az alaplap felfüggesztési pontjaihoz, használhatunk műanyag rögzítő bakokat is.
- Keressük meg az alaplaphoz kapott alumínium takarólemezt (külső csatlakozók helyének ki vannak vágva a helyek) és illesszük a házba (lehet, hogy a régit előtte ki kell pattintani és eltávolítani).
- Helyezzük be az alaplapot és csavarokkal rögzítsük azt. Használjunk elegendő számú csavart a megfelelő stabilitás érdekében. A rögzítéskor átlósan haladjunk sorba.
- Nyissuk ki a rögzítő karral a processzor foglalatát és helyes irányban könnyedén ejtsük bele a processzort. (A behelyezés csak egyféle képen történhet, mivel a lábak kialakítása mást nem tesz lehetővé.) Vigyázni kell nehogy lesarkazzuk a processzort vagy meggörbítsük a lábakat túlzott erőkifejtésünkkel.
- Zárjuk le a rögzítő kart. Majd kenjük be a processzor tetejét hővezető pasztával.
- Helyezzük rá a ventillátort és rögzítsük a patentek segítségével (szükség lehet esetleg csavarhúzóra).
- Csatlakoztassuk a ventilátor tápcsatlakozóját az alaplapra
- Óvakodjuk a statikus feltöltődéstől, ne szereljünk műszálas pulóverben. Mielőtt
megfognánk a memóriákat, "süssük ki magunkat" pl. egy radiátor fémszerelvényén. Szállításkor is célszerű alufóliába csomagolni az ilyen érzékeny alkatrészeket.
- Nyissuk ki a memóriafoglalatokat az oldalukon található fülek segítségével.
- Helyezzük be a megfelelő foglalatokba és a megfelelő irányba a memóriákat. (Több memória párba rendezése esetén olvassuk el az alaplaphoz kapott kézikönyvet.)
- A megfelelő irány eldöntéséhez segít a memóriák alján található bevágás helye, és a memóriák oldalán található fülek száma.
- Most beszerelhetjük és csatlakoztathatjuk a tápegységet. Az alaplaphoz illesztjük a legszélesebb csatlakozót, és ha szükséges további csatlakozókat is.
- Ha nem integrált videó kártyát használunk, akkor rögzítjük ezt is vagy PCI Express vagy AGP foglalat valamelyikébe.
- Ha szükséges extra tápellátás a kártyához, akkor gondoskodunk erről.
- Ha van bármely más PCI kártyánk, akkor ezeket is csatlakoztatjuk, becsavarozzuk, pl.: TV tuner kártya, jó minőségű hangkártya, digitalizáló kártyák
- Rögzítés előtt el kell távolítani a hátlapon használt takarólemezeket
- Következik az optikai meghajtó szerelése a megfelelő fiókokba.
- Jönnek a merevlemezek, és ha esetleg használunk még floppy meghajtót.
- Beállítjuk jumperrel PATA jellegű meghajtók esetén a Master/Slave/CableSelect opciókat.
- Bekábelezzük a meghajtókat SATA vagy PATA szalagkábelekkel (esetleg Floppy kábellel)
- Bekötjük a ház kivezetéseit, kapcsolóit és lámpáit, audiót, USB-t, kivezetjük az extra soros portot (ha van ilyen).
- Tüzetesen átvizsgálunk mindent és felkészülünk az első indításra.
:::

![34. ábra. Számítógép szerelés](/assets/images/pc/image-045.jpg)


## A hardver tesztelése

Nyomjuk meg a számítógép bekapcsoló gombját. Reméljük, hogy felpörög a processzor ventillátora, nem hallunk semmiféle sípolást és sikeresen lefut a POST (Power On Self Test) rutin, vagyis:

A BIOS induláskor végrehajt egy bekapcsolási öntesztet (Power On Self Test). A POST egy diagnosztikai program, mely leellenőrzi a számítógép összes hardver eszközét, hogy jelen vannak-e és megfelelően működnek-e. Csak a teszt hiba nélküli lefutásakor kezdődhet meg a számítógép indítási folyamatának elindítása. Az indulás során a későbbiekben is végrehajthat tesztfolyamatokat, ahogy a rendszerindulási folyamat megkívánja.

A POST nagyon gyorsan hajtódik végre, hibátlan működés esetén ez a felhasználó előtt rejtve marad. Ha hibát észlel valamely tesztelt eszköznél, akkor azt síphangokkal jelzi a felhasználónak. Azért kell sípjeleket adnia, mert ekkor a videó vezérlő még nem indult el. A sípjelek a BIOS gyártójától függenek, a legnagyobb 2 cég: az AMI és az AWARD. Az **AMI BIOS sípkódja**it, és lehetséges javításukat a következő felsorolás tartalmazza:

:::tip Az AMI BIOS sípkódjait, és lehetséges javításukat a következő felsorolás tartalmazza:

- **1 sípszó:** Frissítési hiba. Memóriahibát jelent, melyet csak cserével tudunk kijavítani. Ez a hibajelenség általában a memória, vagy a memóriavezérlő hibáját jelzi. Előbbi esetben a memória cseréjével ez megszüntethető, a vezérlő hibája azonban csak az alaplap cseréjével orvosolható.
- **2 sípszó:** Paritáshiba. Memóriahibát jelent, melyet csak cserével tudunk kijavítani. Elképzelhető, hogy a modul érintkezői piszkosak, és e miatt nem érintkezik. Az is könnyen lehet, hogy az alaplapunk megköveteli a paritásos RAM használatát, mi viszont nem ilyet használunk, vagy a beépített memória csupán álparitásos. Erre az alaplap leírása adhat biztos választ.
- **3 sípszó:** 64K bázis memória hiba. Memóriahibát jelent, melyet csak cserével tudunk kijavítani. Elképzelhető, hogy a modul érintkezői piszkosak, és e miatt nem érintkezik.
- **4 sípszó:** Időzítő nem működik. Az alaplapon lévő időzítő áramkör nem működik megfelelően. Mivel ennek az egységnek a cseréje nem lehetséges, ezért az egész alaplapot ki kell cserélnünk.
- **5 sípszó:** Processzor hiba. A processzor hibáját jelzi. Ki kell cserélnünk a processzort, amennyiben az foglalatban található. Vizsgáljuk meg, hogy megfelelő pozícióban szereltük-e be a processzort. Ha nem, akkor könnyen lehet, hogy a CPU tönkrement.
- **6 sípszó:** A billentyűzet mikrokontrollerének a hibájára utal. Ez szinte biztos javíthatatlan hiba, tehát a megoldás a billentyűzet cseréje.
- **7 sípszó:** Processzor kivétel hiba. Vagy a processzor, vagy az alaplap hibáját jelzi.
- **8 sípszó:** Képernyő memória írás/olvasás hiba. A videokártyán lévő memória hibáját jelzi. Ha a memória olyan, hogy foglalatban van, akkor a RAM cseréjével a hiba megszüntethető. Ha azonban be van forrasztva, akkor ki kell cserélnünk a kártyát. Előfordulhat olyan eset is, mikor bővítve van a kártya memóriája. Ebben az esetben van olyan áramkör, amely foglalatban van, és van olyan, amit a gyártó már beforrasztott. Próbáljuk meg kivenni a foglalatból az összes memóriát nagyon óvatosan, és tegyük a helyére a kártyát. Ha megvan, indítsuk el a számítógépet. Ha a hiba továbbra is fennáll, akkor a beforrasztott áramkörök a hibásak, tehát csak a csere segít.
- **9 sípszó:** ROM ellenőrzés hiba. A BIOS hibáját jelzi. Azonban ehhez pontosan tudni kell az alaplap típusát és gyártási számát, valamint a BIOS verziót és a sorozatszámát. Ekkor tudunk az AMI-tól új áramkört vásárolni.
- **10 sípszó:** CMOS regiszter hozzáférési hiba. Az alaplap hibájára utal. A javítás nem lehetséges, tehát mindenképpen cserére szorul.
- **11 sípszó:** Cache memória rossz. Az alaplapon vagy egyes processzoroknál a processzorban lévő gyorsító tár hibájára utal. Az alaplapi cache általában foglalatban található, amely így kicserélhető.
:::

:::warning Award BIOS POST sípkódok:

- **1 rövid:** A rendszer bootol, minden rendben
- **1 hosszú:** Memóriaproblémák
- **2 rövid:** Könnyebb hiba, jelentés a képernyőn
- **1 hosszú, 2 rövid:** Videokártya hiba
- **1 hosszú, 3 rövid:** Billentyűzetvezérlő hiba
- **folyamatos hang:** Nem található memória vagy videokártya
:::

Amennyiben hiba van, kapcsoljuk ki a gépet teljesen. Igazítsuk meg a kártyákat, hátha kicsúszott valami, vagy nem megfelelően lett rögzítve és kontakthiba lépett fel. A sípjelek alapján vizsgáljuk meg, hogy mi okozhatja a problémát. Indítsuk újra. Ha továbbra sem működik, válasszuk le a működéshez nem elengedhetetlenül szükséges hardvereket és próbáljuk meg így, később ezeket egyenként csatlakoztassuk újra. Ha gyanakodunk valamelyik alkatrészre, akkor próbáljuk meg helyettesíteni ezt egy másikkal vagy szedjük ki ideiglenesen egy másik számítógépből. Remélhetőleg mostanra minden hiba elhárult folytathatjuk a BIOS beállításával és az operációs rendszer telepítésével.

Két féle hardvertesztelést különböztethettünk meg. Az első a hardver működőképességének ellenőrzése. Azaz, hogy egy adott hardver elem megfelelően működik-e. Sokszor találkozunk olyan esettel, amikor látszólag a hardver működőképes, de sokszor rejtés hiba jelenségek lépnek fel, amely veszélyeztetik a munkákat és az adatainkat, ismerjünk meg pár hiba lehetőséget és teszt programot.

Az első ilyen program a **memória hibák** felderítésére szolgál. Érdemes egy memóriatesztelő programot lefutattunk akkor, ha új számítógépet vásároltunk, vagy ha új memóriát vásároltunk. Sajnos, egy memória hiba, egy régen futó számítógép esetén nehezen ismerhető fel. Ha számítógépünk különösebb ok nélkül összeomlik, esetleg újraindul, vagy "kék halált" produkál, akkor okkal gyanakodhatunk memória hibára. Legismertebb ilyen tesztprogram a **memtest86**. Számos Linux terjesztés tartalmazza, de természetesen elérhető Windows rendszereken is egy ingyenes verzió. Segítségével felderíthetővé válnak a hibás memória címek. Ha a program hibás memória modulokat talál, akkor a legcélszerűbb a memóriára vonatkozó garancia érvényesítése.


![35. ábra. A Memtes86 program - futás közben](/assets/images/pc/image-046.png)

A következő teszt program a számítógépről gyűjt össze számunkra minden lényeges információt. Ez az Aida32, amely kiemelkedőnek számít hasonló társai körében.

![36. ábra. Aida32 program - futás közben](/assets/images/pc/image-047.jpg)


Számítógépünk grafikus teljesítményét lemérhetjük a **3DMark** program segítségével. Ez a program olyan animációkat futtat, amelyek erősen megterhelik a videokártyánkat és eközben a program folyamatosan tájékoztat minket a teljesítményről.

## BIOS

A BIOS az angol Basic Input/Output System kifejezés rövidítése, ami magyarul alapvető bemeneti/kimeneti rendszert jelent, és a számítógép szoftveres és hardveres része közötti interfész felület megvalósítására szolgál. Fizikailag az alaplapon lévő BIOS, valamint az egyes bővítőkártyákon található BIOS és ezek eszközmeghajtói alkotják a számítógép rendszer BIOS-át. Ezek közül az alaplap BIOS-a a BIOS legfontosabb része, mert ez tartalmazza az alapvető konfigurációs beállításokat és hajtja végre a diagnosztikai ellenőrzéseket. Az alaplap BIOS-a általában egy flash memóriát tartalmazó chipen található. A BIOS chipjének a kapacitását megabitekben (Mb) mérjük, egy chip általában 1-4 Mb memóriát tartalmaz. Két része van: fix rész, variábilis rész. Minden BIOS hardverfüggő.

![37. ábra. A BIOS karakteres felülete](/assets/images/pc/image-048.png)


- Rendszeridő
- BIOS jelszó beállítása
- Elsődleges Boot forrás beállítása
- Processzor feszültség és frekvencia módosítása
- Integrált hardverek beállítási (engedélyezés/tiltás)


:::danger A BIOS beállításának megváltoztatásának katasztrofális következményei lehetnek. Járjunk el mindig a lehető legnagyobb óvatossággal.
::::

A BIOS további feladatai:

- Hardverek ellenőrzése
- Hardver vezérlőinek betöltése
- Operációs rendszer betöltése
- Rendszerkonfiguráció

A BIOS mellett mindig található egy lítium elem is. Az elem töltésének a hatására, őrzi meg a számítógép kikapcsolt állapotban is az itt beállított paramétereket is. A BIOS-ba a bootolás során léphetünk be, általában az F2 funkció billentyű megnyomásával. (a belépés billentyűje a gyártófüggő).

## Hálózati ismeretek

A hálózatba kötött számítógép együttes teljesítménye sokkal nagyobb, mint külön-külön, de nem csak ezért kötnek hálózatba számítógépeket. A hálózatban lévő számítógépek képesek többek között számítási teljesítményük megnövelésére (pl.: SETI, rákkutatás, kriptológia, stb.), szoftver erőforrásaik megosztására, úgymint fájlmegosztás, hardver erőforrásaik, mint nyomtató, fax és szkenner megosztás, internetezés, fájl cserélők használata, elektronikus levelezés, hálózati játékok és megannyi más funkcióra.

Nyomtató megosztásnál több gép képes ugyanazt a nyomtatót használni. Fájl megosztásnál pedig a gépek felajánlanak bizonyos fájlokat a megosztásba. Ezeket a fájlokat más számítógépekről is elérhetővé válnak. Ez az alapfunkció megtalálható az összes hálózati operációs rendszereknél. További hálózati szolgáltatások az FTP (angolul: File Transfer Protocol) azaz fájl átviteli protokoll, amellyel fájlokat tudunk letölteni egy távoli kiszolgálóról. És persze sokáig folytathatnánk még a sort.

![38. ábra. Hálózati topológiák](/assets/images/pc/image-049.png)


A legáltalánosabban elterjedt kommunikációs technika az Interneten az úgy nevezett **Ethernet protokoll**. Eredetileg rádió amatőrök használták kommunikációra, innen is ered a neve. A rádiós adatátvitelnél fontos volt, hogyha az egyik fél ad, akkor addig a többi résztvevőnek várakoznia kell. Ezt a megfontolást alkalmazzák napjainkban is. A hálózati kártya "belehallgat" a csatornába, és ha éppen nem folyik kommunikáció, akkor elkezdi az adást. Ha egyszerre kezdeményeznének adást, akkor mindkét fél generál magának egy véletlen számot, és ezt visszaszámolva, akinek előbb jár le a szám, az kezdi az adást. Ezt a hálózati versenyhelyzet feloldását arbitrációnak nevezik.
Úgy, mint a hardver elemeknél, itt is elkerülhetetlenné vált a szabványosítás.

### Hálózatok kiterjedtsége

A hálózatok nagyságától függően több csoportosítást alkalmazunk.

![img](/assets/images/pc/image-050.jpg)

**9. ábra. Hálózatok csoportosítása kiterjedés szerint**

- Az első és egyben legnagyobb kiterjedésű csoport a **WAN**. A WAN (angolul: Wide Area Network) jelentése: nagy kiterjedésű hálózat. Ez jelenthet egy egész várost vagy egy egész országot. Távolság a WAN-on belül akár több 100 kilométeres lehet.
- Kisebb kiterjedést jelöl a **MAN** (angolul: Metropolitan Area Network) jelentése, egy városra kiterjedő hálózat. Amelynek mérete néhány 10 kilométer lehetséges.
- Még kisebb kiterjedésű a **LAN** (angolul: Local Area Network) jelentése, helyi hálózat.
Ez egyetemek, főiskolai épületek, cégek, irodaépületek hálózatát jelölheti, kiterjedése néhány kilométeres lehet.
- Még kisebb kiterjedést jelöl a **PAN** (angolul: Personal Area Network) jelentése, személyi hálózat. A maximális távolság néhány 10 méter lehet. Ez olyan eszközöket jelöl, amelyek az ember közvetlen közelében van, például: mobiltelefon, PDA-k, PNA-k, Palmtop, Blackberry, iPhone, Wi-Fi routerek, Access Pointok, egyebek.

### Hálózati eszközök

A legalapvetőbb eszköz az **UTP kábel**. Ezt a kábel fajtát használják a hálózati eszközök vezetékes összekötésére. A kábel maga egy 8 vezetékből álló, árnyékolt és szigetelt réz vezeték. Maximálisan áthidalható távolság 100 méter nagyságrendű. Különböző típusok léteznek, amelyek felhasználásával különböző sebességek érhetőek el.
Nagyon fontos eszköz a kábelek csatlakozása. Szabványos csatlakozó a **8P8C** csatlakozó, amelyet általában **RJ45**-s csatlakozónak ismernek.

![img](/assets/images/pc/image-051.jpg)

**40. ábra. RJ 45 csatlakozók**


### Router

A számítógépes hálózatok forgalma különböző típusú adatcsomagokban zajlik. Ezen csomagok utaznak a feladótól a címzettig, akár több eszközön is keresztül, például az Internet esetében. Útjuk során minden érintett eszköznek ismernie kell, hogy merre továbbítsa a fogadott csomagot, hogy az eljusson a címzettig, és döntéseket kell hoznia amennyiben például több útvonal is ismert. A routerek végzik ezen csomagok megfelelő irányba való továbbítását, és végzik ezen döntéseket. A mai routerek nagy része az IP protokoll-alapú hálózatok forgalmát irányítják, de több más protokoll kezelésére is alkalmasak lehetnek. IP protokoll esetén egymás és a hálózatok azonosítására a harmadik rétegbeli IP-címet alkalmazzák.

![41. ábra. Egy vezeték nélküli kapcsolatra is képes router](/assets/images/pc/image-052.jpg)


Az adatátviteli kapcsoló vagy switch egy aktív számítógépes hálózati eszköz, amely a rá csatlakoztatott eszközök között adatáramlást valósít meg. Többnyire az OSI-modell adatkapcsolati rétegében dolgozik. Magyar jelentése: vált, kapcsol, választ.

![42. ábra. Switchek](/assets/images/pc/image-053.jpg)


A fizikai rétegbeli feladatokat ellátó hubokkal szemben az Ethernet switchek adatkapcsolati rétegben megvalósított funkciókra is támaszkodnak. A MAC címek vizsgálatával képesek közvetlenül a célnak megfelelő portra továbbítani az adott keretet; tekinthetők gyors működésű, többportos hálózati hídnak is. Portok között tehát nem fordul elő ütközés (mindegyikük külön ütközési tartományt alkot), ebből adódóan azok saját sávszélességgel gazdálkodhatnak, nem kell megosztaniuk azt a többiekkel. A broadcast és multicast kereteket természetesen a switchek is floodolják az összes többi portjukra.

### Hub

A hub a számítógépes hálózatok egy hardvereleme, amely fizikailag összefogja a hálózati kapcsolatokat. Másképpen szólva a hub a hálózati szegmensek egy csoportját egy hálózati szegmensbe vonja össze, egyetlen ütközési tartományként láttatja a hálózat számára. Leegyszerűsítve: az egyik csatlakozóján érkező adatokat továbbítja az összes többi csatlakozója felé. Ez passzívan megy végbe, anélkül, hogy ténylegesen változtatna a rajta áthaladó adatforgalmon.

Típusai:

- aktív hub: az állomások összefogásán kívül a jeleket is újragenerálja, erősíti, tehát ebben a formában valójában egy többportos repeater
- passzív hub: csupán fizikai összekötő pontként szolgál, nem módosítja vagy figyeli a rajta keresztülhaladó forgalmat.

A legelterjedtebbek a 8, 16, 24 portos eszközök, de találkozhatunk kisebb, 4 portossal is. A passzív hubok elektromos tápellátást nem igényelnek. Az intelligens hubok aktív hubként üzemelnek, mikroprocesszorral és hibakereső képességekkel rendelkeznek.

![43. ábra Egyszerű hub](/assets/images/pc/image-054.jpg)

