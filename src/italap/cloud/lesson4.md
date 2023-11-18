# 4. tananyag

## Virtualizáció a Cloud Computingban

A virtualizáció "valaminek, például egy szervernek, egy asztali számítógépnek, egy tárolóeszköznek, egy operációs rendszernek vagy hálózati erőforrásoknak a virtuális (és nem a tényleges) változatának a létrehozása".

Más szóval a virtualizáció olyan technika, amely lehetővé teszi, hogy egy erőforrás vagy alkalmazás egyetlen fizikai példányát több ügyfél és szervezet között osszák meg. Ezt úgy teszi, hogy egy fizikai tárolóhoz logikai nevet rendel, és igény esetén mutatót biztosít erre a fizikai erőforrásra.

### Mi a koncepció a virtualizáció mögött?

A virtuális gép létrehozását a meglévő operációs rendszer és hardver felett hardveres virtualizációnak nevezzük. A virtuális gép olyan környezetet biztosít, amely logikailag elkülönül a mögöttes hardvertől.

A gépet, amelyen a virtuális gépet létrehozzák, gazdagépnek, a virtuális gépet pedig vendéggépnek nevezik.

#### A virtualizáció típusai

1. __Hardveres virtualizáció.__
2. __Operációs rendszer virtualizáció.__
3. __Szerver virtualizáció.__
4. __Tároló virtualizáció.__

### Hardveres virtualizáció

Amikor a virtuális gépszoftver vagy a virtuális gépkezelő (VMM) közvetlenül a hardveres rendszerre van telepítve, hardveres virtualizációnak nevezzük.

A hypervisor fő feladata a processzor, a memória és más hardveres erőforrások vezérlése és felügyelete.

A hardverrendszer virtualizálása után különböző operációs rendszereket telepíthetünk rá, és különböző alkalmazásokat futtathatunk ezeken az operációs rendszereken.

__Alkalmazás:__
A hardveres virtualizálás elsősorban a szerverplatformok esetében történik, mivel a virtuális gépek vezérlése sokkal egyszerűbb, mint egy fizikai szerver vezérlése.

### Operációs rendszer virtualizáció

Amikor a virtuális gépszoftver vagy a virtuális gépkezelő (VMM) közvetlenül a hardveres rendszer helyett a gazda operációs rendszerre van telepítve, azt operációs rendszer virtualizációnak nevezzük.

__Alkalmazás:__
Az operációs rendszer virtualizálása elsősorban az alkalmazások tesztelésére szolgál különböző operációs rendszerplatformokon.


### Szerver virtualizáció

Amikor a virtuális gépszoftver vagy a virtuális gépkezelő (VMM) közvetlenül a szerver rendszerre van telepítve, szerver virtualizálásnak nevezzük.

__Alkalmazás:__
A szerver virtualizálása azért történik, mert egyetlen fizikai szerver igény szerint és a terhelés kiegyenlítésére több szerverre osztható.


### Tároló virtualizáció

A tároló virtualizálása a fizikai tárolók csoportosítása több hálózati tárolóeszközből, hogy azok egyetlen tárolóeszköznek tűnjenek.

A tároló virtualizáció szoftveralkalmazások segítségével is megvalósítható.

__Alkalmazás:__
A tároló virtualizálása elsősorban biztonsági mentés és helyreállítás céljából történik.



### Hogyan működik a virtualizáció a cloud computingban?

A virtualizáció nagyon fontos szerepet játszik a felhőalapú számítástechnikában, általában a felhőalapú számítástechnikában a felhasználók megosztják a felhőkben lévő adatokat, például az alkalmazásokat stb., de valójában a virtualizáció segítségével a felhasználók megosztják az infrastruktúrát.

A virtualizációs technológia fő felhasználása az, hogy az alkalmazásokat a szabványos verziókkal biztosítsa a felhőfelhasználók számára, tegyük fel, ha az alkalmazás következő verziója megjelenik, akkor a felhőszolgáltatónak a legújabb verziót kell biztosítania a felhőfelhasználók számára, és gyakorlatilag ez lehetséges, mert ez drágább.

Ennek a problémának a leküzdésére alapvetően virtualizációs technológiát használunk, A virtualizáció használatával az összes szevert és a szoftveralkalmazást, amelyre más felhőszolgáltatóknak szükségük van, a harmadik fél emberei tartják fenn, és a felhőszolgáltatóknak havi vagy éves alapon kell fizetniük a pénzt.

![](/assets/images/cloud/23.png)

#### Összegzés

A virtualizáció elsősorban azt jelenti, hogy több operációs rendszert futtatunk egyetlen gépen, de az összes hardveres erőforrást megosztjuk. És ez segít nekünk abban, hogy az informatikai erőforrás-állományt biztosítsuk, hogy megoszthassuk ezeket az informatikai erőforrásokat annak érdekében, hogy előnyöket kapjunk az üzleti életben.

## Adatvirtualizáció

Az adatvirtualizáció az adatok különböző erőforrásokból történő lekérdezése anélkül, hogy ismernénk az adatok típusát és fizikai tárolási helyét. Összegyűjti a heterogén adatokat a különböző erőforrásokból, és lehetővé teszi az adatfelhasználók számára a szervezeten belül, hogy munkakövetelményeiknek megfelelően hozzáférjenek ezekhez az adatokhoz. Ezekhez a heterogén adatokhoz bármilyen alkalmazás, például webes portálok, webes szolgáltatások, e-kereskedelem, szoftver mint szolgáltatás (SaaS) és mobilalkalmazás segítségével hozzá lehet férni.

Az adatvirtualizációt az adatintegráció, az üzleti intelligencia és a felhőalapú számítástechnika területén használhatjuk.

### Az adatvirtualizáció előnyei

- Lehetővé teszi a felhasználók számára, hogy anélkül férjenek hozzá az adatokhoz, hogy aggódnának amiatt, hogy hol található a memóriában.
- Jobb ügyfél-elégedettséget, megtartást és bevételnövekedést kínál.
- Különböző biztonsági mechanizmusokat biztosít, amelyek lehetővé teszik a felhasználók számára, hogy biztonságosan tárolják személyes és szakmai adataikat.
- Az adatreplikáció megszüntetésével csökkenti a költségeket.
- Felhasználóbarát felületet biztosít a testreszabott nézetek kialakításához.
- Különböző egyszerű és gyors telepítési forrásokat biztosít.
- Az adatok valós idejű rendelkezésre bocsátásával növeli az üzleti felhasználók hatékonyságát.
- Olyan feladatok elvégzésére szolgál, mint az adatintegráció, az üzleti integráció, a szolgáltatásorientált architektúra (SOA) adatszolgáltatásai és a vállalati keresés.

### Az adatvirtualizáció hátrányai

- Elérhetőségi problémákat okoz, mivel a rendelkezésre állást harmadik fél szolgáltatók tartják fenn.
- Magas megvalósítási költséget igényelt.
- Elérhetőségi és skálázhatósági problémákat okoz.
- Bár időt takarít meg a virtualizáció megvalósítási szakaszában, de több időt vesz igénybe a megfelelő eredmény előállítása.

### Az adatvirtualizáció felhasználása

----

#### A teljesítmény elemzése

Az adatvirtualizációt a szervezet teljesítményének elemzésére használják az előző évekhez képest.

#### Összefüggő adatok keresése és felfedezése

Az adatvirtualizáció (Data Virtualization) olyan mechanizmust biztosít, amellyel könnyen kereshetők az egymáshoz hasonló és belsőleg összefüggő adatok.

#### Agilis üzleti intelligencia

Ez az adatvirtualizáció egyik leggyakoribb felhasználási módja. Agilis jelentéskészítésben, valós idejű műszerfalakban használják, amelyek időben történő aggregálást igényelnek, elemzik és bemutatják a több forrásból származó releváns adatokat. Mind az egyének, mind a vezetők ezt használják a teljesítmény nyomon követésére, ami segít a napi operatív döntéshozatali folyamatokban, például az értékesítés, a támogatás, a pénzügy, a logisztika, a jogi és a megfelelés terén.

#### Adatkezelés

Az adatvirtualizáció biztonságos, központosított réteget biztosít az egységesített adatok és azok kapcsolatainak kereséséhez, felfedezéséhez és szabályozásához.

### Adatvirtualizációs eszközök

----

#### Red Hat JBoss data virtualization

A Red Hat virtualizáció a legjobb választás a fejlesztők és a mikroszolgáltatásokat és konténereket használók számára. Java nyelven íródott.

#### TIBCO data virtualization

A TIBCO segít a rendszergazdáknak és a felhasználóknak abban, hogy adatvirtualizációs platformot hozzanak létre a több adatforráshoz és adatkészlethez való hozzáféréshez. Beépített transzformációs motort biztosít a nem relációs és strukturálatlan adatforrások kombinálásához.

#### Oracle data service integrator

Ez egy nagyon népszerű és nagy teljesítményű adatintegrátor eszköz, amely elsősorban Oracle termékekkel dolgozik. Lehetővé teszi a szervezetek számára, hogy gyorsan fejlesszenek és kezeljenek adatszolgáltatásokat az adatok egységes nézetéhez való hozzáférés érdekében.

#### SAS Federation Server

A SAS Federation Server különböző technológiákat, például skálázható, többfelhasználós és szabványalapú adathozzáférést biztosít több adatszolgáltatásból származó adatok eléréséhez. Elsősorban az adatok biztosítására összpontosít.

#### Denodo

A Denodo az egyik legjobb adatvirtualizációs eszköz, amely lehetővé teszi a szervezetek számára, hogy minimalizálják a hálózati forgalmi terhelést és javítsák a nagy adathalmazok válaszidejét. Alkalmas mind a kis, mind a nagy szervezetek számára.

### Adatvirtualizációt használó iparágak

#### Kommunikáció és technológia
A kommunikációs és technológiai iparágban az adatvirtualizációt az egy ügyfélre jutó bevétel növelésére, valós idejű ODS létrehozására a marketinghez, az ügyfelek kezelésére, az ügyfélismeret javítására, az ügyfélkezelés optimalizálására stb. használják.

#### Pénzügyek 
A pénzügyek területén az adatvirtualizációt a kereskedelem egyeztetésének javítására, az adatdemokrácia megerősítésére, az adatok összetettségének kezelésére és a fix kockázatú jövedelmek kezelésére használják.

#### Kormányzat
A kormányzati szektorban az adatvirtualizációt a környezet védelmére használják.

#### Egészségügy
Az adatvirtualizáció nagyon fontos szerepet játszik az egészségügy területén. Az egészségügyben az adatvirtualizáció segít a betegellátás javításában, az új termékinnováció ösztönzésében, az M&A szinergiák felgyorsításában és a hatékonyabb kárigényelemzésben.

:::tip Mergers and Acquisitions 🚀
A cégek helyzetének megszilárdítására irányuló tevékenység. Az M&A módszer lényege két vagy több cég egyesülése (merge) vagy egy cég felvásárlása (acquisition). A kifejezés pénzügyi vállalatok olyan részlegét is jelölheti, ahol a cégek felvásárlása illetve összeolvadása folyik.
:::

#### Gyártás
A feldolgozóiparban az adatvirtualizációt a globális ellátási lánc optimalizálására, a gyárak optimalizálására és az IT-eszközök jobb kihasználására használják.


## Hardveres virtualizáció

Korábban "egy az egyhez kapcsolat" volt a fizikai szerverek és az operációs rendszer között. Alacsony kapacitású CPU, memória és hálózati követelmények álltak rendelkezésre. Így ennek a modellnek a használatával megnövekedtek az üzleti költségek. A fizikai hely, a szükséges energia és a hardverigény azt jelentette, hogy a költségek összeadódtak.

A hipervizor kezeli a hardver fizikai erőforrásainak megosztását a vendég operációs rendszerek és a fogadó operációs rendszer között. A fizikai erőforrások a hardverplatformtól függetlenül szabványos formátumokban absztrahált változatokká válnak. Az absztrahált hardver tényleges hardverként jelenik meg. Ezután a virtualizált operációs rendszer úgy tekint ezekre az erőforrásokra, mint fizikai egységekre.

A virtualizáció absztrakciót jelent. A hardver virtualizáció a fizikai hardverréteg absztrahálásával valósul meg egy hipervizor vagy VMM (Virtual Machine Monitor) segítségével.

Amikor a virtuális gépszoftver vagy a virtuális gépkezelő (VMM) vagy a hipervizor szoftver közvetlenül a hardveres rendszerre van telepítve, hardveres virtualizációnak nevezzük.

A hypervisor fő feladata a processzor, a memória és más hardveres erőforrások vezérlése és felügyelete.

A hardverrendszer virtualizálása után különböző operációs rendszereket telepíthetünk rá, és különböző alkalmazásokat futtathatunk ezeken az operációs rendszereken.

### A hardveres virtualizáció használata

----

A hardveres virtualizálást elsősorban a szerverplatformok esetében alkalmazzák, mivel a virtuális gépek vezérlése sokkal egyszerűbb, mint egy fizikai szerveré.

### A hardveres virtualizáció előnyei

----

A hardveres virtualizáció fő előnyei a hatékonyabb erőforrás-kihasználás, az alacsonyabb összköltségek, valamint a megnövekedett üzemidő és az informatikai rugalmasság.

#### Hatékonyabb erőforrás-kihasználás

A fizikai erőforrások megoszthatók a virtuális gépek között. Bár a fel nem használt erőforrásokat ki lehet osztani egy virtuális géphez, és azt más virtuális gépek is használhatják, ha erre igény van.

#### Alacsonyabb összköltségek a szerverkonszolidáció miatt

Mostantól több operációs rendszer is létezhet együtt egyetlen hardverplatformon, így a szerverek száma, a rackhely és az energiafogyasztás jelentősen csökken.

#### Nagyobb üzemidő a fejlett hardvervirtualizációs funkciók miatt

A modern hypervisorok nagymértékben összehangolt műveleteket biztosítanak, amelyek maximalizálják a hardver absztrakcióját, és segítenek a maximális üzemidő biztosításában. Ezek a funkciók segítenek egy futó virtuális gép dinamikusan egyik hosztról a másikra történő áttelepítésében, valamint a virtuális gép futó másolatának egy másik fizikai hoszton történő fenntartásában az elsődleges hoszt meghibásodása esetén.

#### Fokozott informatikai rugalmasság

A hardveres virtualizáció segít a szerver erőforrások gyors, irányított és következetes módon történő telepítésében. Ez azt eredményezi, hogy az IT gyorsan tud alkalmazkodni, és időben biztosítani tudja az üzlet számára a szükséges erőforrásokat.

## Szoftver virtualizáció

Az alkalmazások és a disztribúció kezelése az informatikai részlegek tipikus feladatává válik. A telepítési mechanizmus alkalmazásonként eltérő. Egyes programok bizonyos segédalkalmazásokat vagy keretrendszereket igényelnek, és ezek az alkalmazások konfliktusba kerülhetnek a meglévő alkalmazásokkal.

A szoftver virtualizáció olyan, mint a virtualizáció, de képes absztrahálni a szoftvertelepítési eljárást és virtuális szoftvertelepítéseket létrehozni.

A virtualizált szoftver egy olyan alkalmazás, amely saját, önálló egységként "települ".

A szoftver virtualizációra példa a VMware szoftver, a virtuális doboz stb. A következő oldalakon megnézzük, hogyan lehet linux operációs rendszert és windows operációs rendszert telepíteni VMware alkalmazáson.

### A szoftveres virtualizáció előnyei
----

#### Az ügyfél telepítése egyszerűbbé válik

Egy fájl másolása egy munkaállomásra vagy egy fájl összekapcsolása a hálózaton, akkor könnyen telepíthetünk virtuális szoftvert.

#### Könnyen kezelhető

A frissítések kezelése egyszerűbb feladattá válik. Egy helyen kell frissíteni, és a frissített virtuális alkalmazást az összes kliensre telepíteni.

#### Szoftver migráció

Szoftvervirtualizáció nélkül az egyik szoftverplatformról egy másik platformra való áttérés sok időt vesz igénybe a telepítéshez és hatással van a végfelhasználói rendszerekre. A virtualizált szoftverkörnyezet segítségével a migráció egyszerűbbé válik.

## Szerver virtualizáció

A szervervirtualizálás egy fizikai szerver több virtuális szerverre, úgynevezett virtuális privát szerverekre való felosztása. Minden egyes virtuális privát kiszolgáló önállóan futhat.

A szervervirtualizáció koncepcióját széles körben használják az informatikai infrastruktúrában, hogy a meglévő erőforrások kihasználtságának növelésével minimalizálják a költségeket.

### A szerver virtualizáció típusai

----

#### Hypervisor

A szervervirtualizációban a Hypervisor fontos szerepet játszik. Ez egy réteg az operációs rendszer (OS) és a hardver között. Kétféle hipervizor létezik.

- __Type 1 hypervisor__ (más néven bare metal vagy natív hipervizor)
- __Type 2 hypervisor__ (más néven hosted vagy beágyazott hipervizor)

A hypervisor elsősorban különböző feladatok elvégzésére szolgál, például a fizikai hardveres erőforrások (_CPU_, _RAM_ stb.) kiosztására több kisebb független virtuális gépnek, az úgynevezett "vendégnek" a gazdagépen.

#### Teljes virtualizáció

A teljes virtualizáció hipervizorral kommunikál közvetlenül a CPU-val és a fizikai kiszolgálóval. Ez biztosítja a legjobb elszigetelési és biztonsági mechanizmust a virtuális gépek számára.

A teljes virtualizációban a hipervizor használatának legnagyobb hátránya, hogy a hipervizornak saját feldolgozási igényei vannak, így lelassíthatja az alkalmazás és a kiszolgáló teljesítményét.

A VMWare ESX szerver a legjobb példa a teljes virtualizációra.


#### Para virtualizáció

A paravirtualizáció nagyon hasonló a teljes virtualizációhoz. Ennek a virtualizációnak az az előnye, hogy könnyebben használható, nagyobb a teljesítménye, és nem igényel emulációs overheadet. A Xen elsősorban és az UML használja a Para virtualizációt.

A különbség a teljes és a para virtualizáció között az, hogy a para virtualizációban a hypervisornak nincs szüksége túl nagy feldolgozási teljesítményre az operációs rendszer kezeléséhez.

#### Operációs rendszer virtualizáció

Az operációs rendszer virtualizálását rendszerszintű virtualizációnak is nevezik. Ez egy olyan szerver-virtualizációs technológia, amely egy operációs rendszert több izolált felhasználói térre, úgynevezett virtuális környezetekre oszt. A szervervirtualizálás alkalmazásának legnagyobb előnye, hogy csökkenti a fizikai tárhely használatát, így pénzt takarít meg.

A Linux operációs rendszer virtualizáció és a Windows operációs rendszer virtualizáció az operációs rendszer virtualizációjának típusai.

A FreeVPS, az OpenVZ és a Linux Vserver a rendszerszintű virtualizáció néhány példája.

#### Hardveres virtualizáció

A hardveres virtualizációt az AMD és az Intel mutatta be. Más néven hardveres virtualizáció, AMD virtualizáció és Intel virtualizáció néven is ismert. Célja a processzor teljesítményének növelése. A hardveres virtualizáció használatának előnye, hogy kevesebb hypervisor-feladatot igényel.


#### Kernel szintű virtualizáció

A kernel szintű virtualizáció a kiszolgáló virtualizáció egyik legfontosabb típusa. Ez egy nyílt forráskódú virtualizáció, amely a Linux kernelt használja hypervisorként. A kernelszintű virtualizáció használatának előnye, hogy nem igényel külön adminisztrációs szoftvert, és nagyon kevés overheaddel jár.

A felhasználói módú Linux (UML) és a Kernel-alapú virtuális gép a kernel virtualizáció néhány példája.


### A szerver virtualizáció előnyei
----

A szervervirtualizációnak a következő előnyei vannak

#### Független újraindítás

A szervervirtualizációban minden egyes szerver önállóan újraindítható, és nem befolyásolja a többi virtuális szerver működését.

#### Alacsony költségek

A szervervirtualizáció egyetlen szervert több virtuális privát szerverre oszthat, így csökkenti a hardverkomponensek költségeit.

#### Katasztrófa utáni helyreállítás

A katasztrófa-helyreállítás a szervervirtualizáció egyik legjobb előnye. A szervervirtualizációban az adatok könnyen és gyorsan átkerülhetnek egyik szerverről a másikra, és ezek az adatok bárhonnan tárolhatók és visszakereshetők.

#### Az erőforrások gyorsabb telepítése

A szervervirtualizáció lehetővé teszi, hogy erőforrásainkat egyszerűbben és gyorsabban telepíthessük.

#### Biztonság

Lehetővé teszi a felhasználások számára, hogy érzékeny adataikat az adatközpontokon belül tárolják.

### A szerver virtualizáció hátrányai
----

A szerver virtualizációnak a következő hátrányai vannak:

- A szervervirtualizáció legnagyobb hátránya, hogy amikor a szerver leáll, a szerver által üzemeltetett összes weboldal is leáll.
- Nincs mód a virtualizált környezetek teljesítményének mérésére.
- Hatalmas mennyiségű RAM-felhasználást igényel.
- Nehéz beállítani és karbantartani.
- Egyes alapvető alkalmazások és adatbázisok nem támogatják a virtualizációt.
- Extra hardveres erőforrásokat igényel.

### A szerver virtualizáció alkalmazása
----

A szerver virtualizáció felhasználási területeinek listája az alábbiakban olvasható:

- A szervervirtualizációt a tesztelési és fejlesztési környezetben használják.
- Javítja a szerverek rendelkezésre állását.
- Lehetővé teszi a szervezetek számára az erőforrások hatékony felhasználását.
- Csökkenti a redundanciát további hardverkomponensek vásárlása nélkül.

## Tárolási virtualizáció

Mint tudjuk, a fizikai állomás és a helyileg telepített tárolóeszközök között szoros kapcsolat van. Ez a paradigma azonban drasztikusan megváltozott, szinte már nincs szükség helyi tárolókra. A technológia fejlődésével egyre fejlettebb tárolóeszközök jelennek meg a piacon, amelyek több funkciót biztosítanak, és elavulttá teszik a helyi tárolást.

A tároló virtualizáció a tárolókiszolgálók egyik fő összetevője, funkcionális RAID-szintek és vezérlők formájában. Az eszközzel rendelkező operációs rendszerek és alkalmazások közvetlenül maguk is hozzáférhetnek a lemezekhez írás céljából. A vezérlők a helyi tárolót RAID-csoportokba konfigurálják, és a konfigurációtól függően mutatják be a tárolót az operációs rendszernek. A tároló azonban absztrahált, és a vezérlő határozza meg, hogyan írja az adatokat, vagy hogyan kérje le a kért adatokat az operációs rendszer számára.

A tároló virtualizálása egyre fontosabbá válik különböző más formákban:

Fájlkiszolgálók: Az operációs rendszer távoli helyre írja az adatokat, és nem kell érteni, hogyan kell írni a fizikai adathordozóra.

WAN-gyorsítók: Ahelyett, hogy ugyanazon adatok több példányát küldenék át a WAN-környezeten, a WAN-gyorsítók helyben gyorsítótárba helyezik az adatokat, és az újra lekérdezett blokkokat LAN-sebességgel mutatják be, miközben nem befolyásolják a WAN-teljesítményt.

SAN és NAS: A tárolás az operációs rendszer Ethernet-hálózatán keresztül történik. A NAS a tárolást fájlműveletek formájában mutatja be (mint az NFS). A SAN-technológiák a tárolást blokkszintű tárolóként mutatják be (mint a Fibre Channel). A SAN technológiák csak akkor kapják meg az operációs utasításokat, ha a tároló helyileg csatlakoztatott eszköz lenne.

Tárolási szintek szerinti csoportosítás: A tárolási pool koncepciót ugródeszkaként használva a tárolási szintbe sorolás elemzi a leggyakrabban használt adatokat, és azokat a legnagyobb teljesítményű tárolási poolra helyezi. A legkevésbé használt adatok a leggyengébb teljesítményű tárolómedencébe kerülnek.

Ez a művelet automatikusan, az adatfogyasztó szolgáltatásának megszakítása nélkül történik.

### A tároló virtualizáció előnyei

- Az adatok tárolása az adott géptől távolabbi, kényelmesebb helyeken történik. Egy hoszt meghibásodása esetén az adatok nem feltétlenül kerülnek veszélybe.
- A tárolóeszközök olyan fejlett funkciókat képesek ellátni, mint a replikáció, a reduplikáció és a katasztrófa utáni helyreállítási funkciók.
- A tárolási szint absztrakciójával az informatikai műveletek rugalmasabbá válnak a tárolás biztosításának, particionálásának és védelmének módját illetően.

## OS virtualizáció

Az operációs rendszer virtualizációjának segítségével semmi sincs előre telepítve vagy állandóan betöltve a helyi eszközre, és nincs szükség merevlemezre. Minden a hálózatról fut egyfajta virtuális lemez segítségével. Ez a virtuális lemez tulajdonképpen egy távoli szerveren, SAN-on (Storage Area Network) vagy NAS-on (Non-volatile Attached Storage) tárolt lemezképfájl. Az ügyfél a hálózaton keresztül csatlakozik ehhez a virtuális lemezhez, és a virtuális lemezre telepített operációs rendszerrel bootol.

### Hogyan működik az OS virtualizáció?

Az operációs rendszer virtualizációjának az infrastruktúrában való használatához szükséges komponensek az alábbiakban találhatók:

Az első komponens az operációs rendszer virtualizálási kiszolgálója. Ez a kiszolgáló az OS Virtualization infrastruktúra központi pontja. A kiszolgáló kezeli a virtuális lemezeken lévő információk áramlását az ügyfél számára, és azt is meghatározza, hogy melyik ügyfél melyik virtuális lemezhez csatlakozik (egy adatbázis segítségével tárolja ezeket az információkat). A kiszolgáló a virtuális lemez tárolóját is helyben tárolhatja, vagy a kiszolgáló SAN (Storage Area Network) hálózaton keresztül kapcsolódik a virtuális lemezekhez. A nagy rendelkezésre állású környezetekben több OS virtualizációs szerver is lehet, hogy ne legyen redundancia és terheléselosztás. A kiszolgáló azt is biztosítja, hogy az ügyfél egyedi legyen az infrastruktúrán belül.

Másodszor, van egy ügyfél, amely kapcsolatba lép a kiszolgálóval, hogy csatlakozzon a virtuális lemezhez, és kéri a virtuális lemezen tárolt komponenseket az operációs rendszer futtatásához.

A rendelkezésre álló támogató komponensek a következők: adatbázis a szerver konfigurációjának és beállításainak tárolására, egy streaming szolgáltatás a virtuális lemez tartalmához, egy (opcionális) TFTP szolgáltatás és egy (szintén opcionális) PXE boot szolgáltatás az ügyfélnek az operációs rendszer virtualizációs szerverekhez való csatlakoztatásához.

Mint már említettük, a virtuális lemez egy fizikai lemez képét tartalmazza a rendszerből, amely tükrözi a konfigurációt és a beállításokat azokon a rendszereken, amelyek a virtuális lemezt fogják használni. Amikor a virtuális lemezt létrehozzák, akkor ezt a lemezt hozzá kell rendelni ahhoz az ügyfélhez, amely ezt a lemezt fogja használni az indításhoz. Az ügyfél és a lemez közötti kapcsolat az adminisztrációs eszközön keresztül jön létre, és az adatbázisban kerül elmentésre. Ha az ügyfél rendelkezik a hozzá rendelt lemezzel, a gépet a virtuális lemezzel a következő folyamat segítségével lehet elindítani, ahogy az az alábbi ábrán látható:

![](/assets/images/cloud/24.jpg)

#### Csatlakozás az operációs rendszer virtualizációs kiszolgálójához

Először is indítsuk el a gépet, és hozzuk létre a kapcsolatot az OS Virtualization szerverrel. A legtöbb termék többféle lehetséges módszert kínál a szerverrel való kapcsolódásra. Az egyik legnépszerűbb és leggyakrabban használt módszer a PXE szolgáltatás használata, de a bootstrap is gyakran használatos (a PXE szolgáltatás hátrányai miatt). Bár mindegyik módszer inicializálja a hálózati kártyát (NIC), kap egy (DHCP-alapú) IP-címet és kapcsolatot a szerverrel.

#### A virtuális lemez csatlakoztatása

Amikor létrejön a kapcsolat az ügyfél és a kiszolgáló között, a kiszolgáló megnézi az adatbázisában, hogy ellenőrizze, ismert vagy ismeretlen-e az ügyfél, és melyik virtuális lemezt rendelték hozzá. Ha egynél több virtuális lemez van csatlakoztatva, akkor az ügyfél oldalán megjelenik egy indítási menü. Ha csak egy lemez van hozzárendelve, akkor az a lemez csatlakozik az ügyfélhez, amelyik a 3. lépésben szerepel.

#### Az ügyfélhez csatlakoztatott VDisk

Miután az ügyfél kiválasztotta a kívánt virtuális lemezt, ez a virtuális lemez az OS Virtualization szerveren keresztül csatlakozik . A back-endben az OS Virtualization szerver gondoskodik arról, hogy az ügyfél egyedi legyen (például a számítógép neve és azonosítója) az infrastruktúrán belül.

#### Az operációs rendszer "streaming" az ügyfélhez

Amint a lemez csatlakozik, a kiszolgáló elkezdi a virtuális lemez tartalmának streamelését. A szoftver tudja, hogy mely részek szükségesek az operációs rendszer zökkenőmentes elindításához, így ezeket a részeket streameli először. A rendszerben streamelt információkat valahol tárolni kell (azaz gyorsítótárba kell helyezni). A legtöbb termék többféle lehetőséget kínál ezen információk gyorsítótárazására. Például az ügyfél merevlemezén vagy az operációs rendszer virtualizációs kiszolgálójának lemezén.

#### További streaming

Miután az első rész streamelése megtörtént, akkor az operációs rendszer az elvárásoknak megfelelően elkezd futni. A virtuális lemez további adatai akkor kerülnek streamelésre, ha a felhasználó által meghívott funkció futtatásához vagy elindításához (például egy, a virtuális lemezen elérhető alkalmazás elindításához) szükséges.

## Linux OS virutualizáció

A Vmware Workstation szoftvert az operációs rendszer virtualizálására használják. Bármely operációs rendszer virtuális telepítéséhez telepíteni kell a VMware szoftvert. Mi a VMware Workstation 10-et használjuk.

A linux operációs rendszer telepítése előtt szükség van a linux operációs rendszer __iso__ image fájljára. Lássuk a lépéseket a Linux OS virtuális telepítéséhez.

Hogyan hozzunk létre új virtuális gépet a linux OS számára?


![](/assets/images/cloud/linux/1.png)

1. Kattintsunk az Új virtuális gép létrehozása gombra.

![](/assets/images/cloud/linux/2.png)

2. Az üdvözlő ablakban válasszuk az egyéni beállítást, és kattintsunk a következő gombra.

![](/assets/images/cloud/linux/3.png)

3. A virtuális gép hardverkompatibilitás kiválasztása ablakban kattintsunk a következő gombra.

![](/assets/images/cloud/linux/4.png)

4. A vendég operációs rendszer ablakban válasszuk az iso image fájlt a lemezről vagy bármely meghajtóról. Keressük meg az iso image fájlt, és kattintsunk a következő gombra.

![](/assets/images/cloud/linux/5.png)

5. A telepítési információk ablakban adjuk meg a teljes nevet, a felhasználónevet, a jelszót és a jelszó megerősítését, majd kattintsunk a következő gombra.

![](/assets/images/cloud/linux/6.png)

6. Láthatjuk a megadott információkat.

![](/assets/images/cloud/linux/7.png)

7. A processzorkonfigurációs információk között kiválaszthatjuk a processzorok számát és a processzorok számát magonként. Ha nem akarjuk megváltoztatni az alapértelmezett beállításokat, csak kattintsunk a tovább gombra.

![](/assets/images/cloud/linux/8.png)

8. A virtuális gép memóriája ablakban beállíthatjuk a memóriakorlátot. Kattintsunk a következő gombra.

![](/assets/images/cloud/linux/9.png)

9. A lemezkapacitás megadása ablakban beállíthatjuk a lemez méretét. Kattintsunk a következő gombra.

![](/assets/images/cloud/linux/10.png)

10. A lemezfájl megadása ablakban megadhatjuk a lemezfájlt, majd kattintsunk a következő gombra.

![](/assets/images/cloud/linux/11.png)

11. A virtuális gép létrehozására kész ablakban kattintsunk a Befejezés gombra.

![](/assets/images/cloud/linux/12.png)

![](/assets/images/cloud/linux/13.png)

12. Most már látni fogjuk Vmware képernyő majd ubuntu képernyő.



## Windows virtuálizáció

A Windows OS virtuális telepítéséhez először a VMware-t kell telepítenie. A virtualizációs szoftver telepítése után megjelenik egy ablak az új operációs rendszer telepítésére.

Lássuk a windows OS telepítésének lépéseit a VMware munkaállomáson.

![](/assets/images/cloud/windows/1.png)

1.

![](/assets/images/cloud/windows/2.png)

2.

![](/assets/images/cloud/windows/3.png)

3.

![](/assets/images/cloud/windows/4.png)

4.

![](/assets/images/cloud/windows/5.png)

5.

![](/assets/images/cloud/windows/6.png)

6.

![](/assets/images/cloud/windows/7.png)

7.

![](/assets/images/cloud/windows/8.png)

8.

![](/assets/images/cloud/windows/9.png)

9.

![](/assets/images/cloud/windows/10.png)

10.

![](/assets/images/cloud/windows/11.png)

11.
