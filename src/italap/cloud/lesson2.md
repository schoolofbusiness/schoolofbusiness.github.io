# 2. tananyag

## A felhő típusai

A felhőnek a következő 4 típusa létezik, amelyeket a szervezet igényei szerint telepíthet.

![](/assets/images/cloud/11.png)

- Public Cloud (Nyilvános felhő)
- Private Cloud (Privát felhő)
- Hybrid Cloud (Hibrid felhő)
- Community Cloud (Közösségi felhő)


### Nyilvános felhő

A nyilvános felhő mindenki számára nyitva áll az információk interneten keresztül történő tárolására és elérésére, a használatonkénti fizetés módszerével.

A nyilvános felhőben a számítástechnikai erőforrásokat a felhőszolgáltató (CSP) kezeli és üzemelteti.

Példa: Amazon Elastic Computing Cloud (EC2), IBM SmartCloud Enterprise, Microsoft, Google App Engine, Windows Azure Services Platform.

![](/assets/images/cloud/12.png)

#### A nyilvános felhő előnyei

- A nyilvános felhő alacsonyabb költséggel rendelkezik, mint a privát és a hibrid felhő.
- A nyilvános felhőt a felhőszolgáltató tartja karban, így nem kell aggódnia a karbantartás miatt.
- A nyilvános felhő könnyebben integrálható. Ennélfogva jobb rugalmassági megközelítést kínál a fogyasztók számára.
- A nyilvános felhő helyfüggetlen, mivel szolgáltatásait az interneten keresztül nyújtja.
- A nyilvános felhő a számítási erőforrások iránti igénynek megfelelően nagymértékben skálázható.
- A nagyközönség számára hozzáférhető, így a felhasználók száma nem korlátozott.

#### A nyilvános felhő hátrányai

- A nyilvános felhő kevésbé biztonságos, mivel az erőforrások megosztása nyilvános.
- A teljesítmény a felhőszolgáltatóhoz vezető nagysebességű internetes hálózati kapcsolattól függ.
- Az ügyfél nem rendelkezik az adatok feletti ellenőrzéssel.

### Privát felhő

A privát felhőt belső felhőnek vagy vállalati felhőnek is nevezik. Ezt a szervezetek saját adatközpontjaik belső vagy harmadik fél által történő kiépítésére és kezelésére használják. Olyan opensource eszközökkel telepíthető, mint az Openstack és az Eucalyptus.

![](/assets/images/cloud/13.png)

#### A privát felhő előnyei

- A privát felhő magas szintű biztonságot és adatvédelmet biztosít a felhasználók számára.
- A privát felhő jobb teljesítményt kínál a nagyobb sebesség és a jobb térkapacitás révén.
- Lehetővé teszi az IT-csapat számára, hogy gyorsan kiossza és igény szerint rendelkezésre bocsássa az informatikai erőforrásokat.
- A szervezetnek teljes ellenőrzése van a felhő felett, mivel azt maga a szervezet kezeli. Így a szervezetnek nem kell senkitől sem függenie.
- Olyan szervezetek számára alkalmas, amelyeknek saját használatra külön felhőre van szükségük, és az adatbiztonság az elsődleges prioritás.


#### A privát felhő hátrányai

- A felhőszolgáltatások kezeléséhez és működtetéséhez képzett emberekre van szükség.
- A privát felhő a szervezeten belül elérhető, így a működési terület korlátozott.
- A privát felhő nem alkalmas olyan szervezetek számára, amelyek nagy felhasználói bázissal rendelkeznek, valamint olyan szervezetek számára, amelyek nem rendelkeznek előre kiépített infrastruktúrával, elegendő munkaerővel a felhő fenntartásához és kezeléséhez.


### Hibrid felhő

A hibrid felhő a nyilvános felhő és a privát felhő kombinációja, mondhatjuk:

Hibrid felhő = nyilvános felhő + privát felhő

A hibrid felhő részben biztonságos, mert a nyilvános felhőben futó szolgáltatásokat bárki elérheti, míg a privát felhőben futó szolgáltatásokat csak a szervezet felhasználói érhetik el.

Példa: Google Application Suite (Gmail, Google Apps és Google Drive), Office 365 (MS Office on the Web és One Drive), Amazon Web Services.

![](/assets/images/cloud/14.png)

#### A hibrid felhő előnyei

- A hibrid felhő olyan szervezetek számára alkalmas, amelyek nagyobb biztonságot igényelnek, mint a nyilvános felhő.
- A hibrid felhő segít gyorsabban új termékeket és szolgáltatásokat nyújtani.
- A hibrid felhő kiváló lehetőséget biztosít a kockázat csökkentésére.
- A hibrid felhő a nyilvános felhő miatt rugalmas erőforrásokat, a privát felhő miatt pedig biztonságos erőforrásokat kínál.

#### A hibrid felhő hátrányai

- A hibrid felhőben a biztonsági funkció nem olyan jó, mint a privát felhőben.
- A hibrid felhő kezelése összetett, mert nehéz egynél többféle telepítési modellt kezelni.
- A hibrid felhőben a szolgáltatások megbízhatósága a felhőszolgáltatóktól függ.


### Közösségi felhő

A közösségi felhő lehetővé teszi, hogy a rendszerek és szolgáltatások több szervezet csoportja számára is elérhetőek legyenek, hogy a szervezet és egy adott közösség között megosszák az információkat. A közösség egy vagy több szervezete, egy harmadik fél vagy ezek kombinációja birtokolja, kezeli és üzemelteti.

![](/assets/images/cloud/15.png)

#### A közösségi felhő előnyei

- A közösségi felhő költséghatékony, mivel az egész felhőt több szervezet vagy közösség osztja meg.
- A közösségi felhő olyan szervezetek számára alkalmas, amelyek a nyilvános felhőnél több biztonsági funkcióval rendelkező, együttműködő felhőt szeretnének.
- Jobb biztonságot nyújt, mint a nyilvános felhő.
- Együttműködő és megosztó környezetet biztosít.
- A közösségi felhő lehetővé teszi, hogy a felhő erőforrásait, infrastruktúráját és egyéb képességeit különböző szervezetek között megosszuk.

#### A közösségi felhő hátrányai

- A közösségi felhő nem minden szervezet számára jó választás.
- A biztonsági funkciók nem olyan jók, mint a privát felhőben.
- Nem alkalmas, ha nincs együttműködés.
- A rögzített mennyiségű adattároló és sávszélesség megosztásra kerül a közösségi tagok között.

### Különbség a négy típus között

Az alábbi táblázat a nyilvános felhő, a privát felhő, a hibrid felhő és a közösségi felhő közötti különbséget mutatja be.

| Paraméterek |   Nyilvános felhő   |       Privát felhő      |       Hibrid felhő       |     Közösségi felhő     |
|:---------:|:----------------:|:------------------------:|:------------------------:|:-----------------------:|
|    Host   | Szolgáltató | Nagyvállalat (Third party) | Nagyvállalat (Third party) | Közösség (Third party) |
|   Felhasználók   |  Nagyközönség  |      Kiválasztott felhasználók     |      Kiválasztott felhasználók      |    Közösségi tagok    |
|   Hozzáférés  |     Internet     |       Internet, VPN      |       Internet, VPN      |      Internet, VPN      |
|   Tulajdonos   | Szolgáltató |        Nagyvállalat        |        Nagyvállalat        |        Közösség        |


## Public Cloud (Nyilvános felhő)

A nyilvános felhő olyan megosztott platformot biztosít, amely az internetkapcsolaton keresztül a nagyközönség számára is elérhető. A nyilvános felhő a használatonként fizetős modell szerint működik, és harmadik fél, azaz a felhőszolgáltató kezeli. A nyilvános felhőben ugyanazt a tárhelyet egyszerre több felhasználó használja. A nyilvános felhő tulajdonosa, kezelője és üzemeltetője vállalkozások, egyetemek, kormányzati szervezetek vagy ezek kombinációja. Az Amazon Elastic Compute Cloud (EC2), a Microsoft Azure, az IBM Blue Cloud, a Sun Cloud és a Google Cloud példák a nyilvános felhőre.

![](/assets/images/cloud/12.png)

### A nyilvános felhő előnyei

#### Alacsony költségek

A nyilvános felhő alacsonyabb költséggel jár, mint a privát vagy hibrid felhő, mivel nagyszámú fogyasztóval osztja meg ugyanazokat az erőforrásokat.

#### Helytől független

A nyilvános felhő helyfüggetlen, mivel szolgáltatásait az interneten keresztül kínálja.

#### Időmegtakarítás

A nyilvános felhőben a felhőszolgáltató felelős az adatközpontok kezeléséért és fenntartásáért, amelyekben az adatokat tárolják, így a felhőfelhasználó időt takaríthat meg a kapcsolat létrehozására, az új termékek telepítésére, a termékfrissítések kiadására, a szerverek konfigurálására és összeszerelésére.

#### Gyors és egyszerű beállítás

A szervezetek könnyen vásárolhatnak nyilvános felhőt az interneten, és a felhőszolgáltatón keresztül néhány órán belül távolról telepíthetik és konfigurálhatják azt.

#### Üzleti agilitás

A nyilvános felhő lehetővé teszi a számítógépes erőforrások rugalmas átméretezését a szervezet igényei alapján.

#### Skálázhatóság és megbízhatóság

A nyilvános felhő skálázható (könnyen hozzáadható és eltávolítható) és megbízható (24*7-ben elérhető) szolgáltatásokat kínál a felhasználóknak megfizethető áron.

### A nyilvános felhő hátrányai

#### Alacsony biztonság

A nyilvános felhő kevésbé biztonságos, mivel az erőforrások nyilvánosan megosztottak.

#### Teljesítmény

A nyilvános felhőben a teljesítmény az internetkapcsolat sebességétől függ.

#### Kevésbé testreszabható

A nyilvános felhő kevésbé testreszabható, mint a privát felhő.


## Private Cloud (Privát felhő)

A privát felhőt belső felhőnek vagy vállalati felhőnek is nevezik.
A privát felhő számítástechnikai szolgáltatásokat nyújt egy privát belső hálózatnak (a szervezeten belül) és kiválasztott felhasználóknak a nagyközönség helyett.
A privát felhő magas szintű biztonságot és adatvédelmet biztosít az adatok számára a tűzfalak és a belső tárhely révén. Azt is biztosítja, hogy az operatív és érzékeny adatok ne legyenek hozzáférhetők harmadik fél szolgáltatók számára.
A HP adatközpontok, a Microsoft, az Elastra-privát felhő és az Ubuntu a privát felhő példája.

![](/assets/images/cloud/13.png)


### A privát felhő előnyei


#### Nagyobb ellenőrzés

A privát felhők nagyobb kontrollal rendelkeznek erőforrásaik és hardverük felett, mint a nyilvános felhők, mivel csak kiválasztott felhasználók férnek hozzá.

#### Biztonság és adatvédelem

A biztonság és az adatvédelem a felhőalapú számítástechnika egyik nagy előnye. A privátfelhő javította a biztonsági szintet a nyilvános felhőhöz képest.

#### Jobb teljesítmény

A privát felhő jobb teljesítményt kínál a jobb sebesség és a jobb térkapacitás révén.

### A privát felhő hátrányai

A privát felhőnek a következő előnyei vannak.

#### Magas költségek

A költségek magasabbak, mint a nyilvános felhőnél, mivel a hardveres erőforrások beállítása és fenntartása költséges.

#### Korlátozott működési terület

Mint tudjuk, a privát felhő a szervezeten belül érhető el, így a működési terület korlátozott.

#### Korlátozott skálázhatóság

A privát felhők csak a belső hosztolt erőforrások kapacitásán belül skálázhatók.

#### Képzett emberek

A felhőszolgáltatások kezeléséhez és üzemeltetéséhez képzett emberekre van szükség.

## Hybrid Cloud (Hibrid felhő)

A hibrid felhő a nyilvános és a privát felhők kombinációja. 

Hibrid felhő = nyilvános felhő + privátfelhő

E felhők (nyilvános és privát) kombinálásának fő célja egy egységes, automatizált és jól kezelt számítástechnikai környezet létrehozása. A hibrid felhőben a nem kritikus tevékenységeket a nyilvános felhő, a kritikus tevékenységeket pedig a privátfelhő végzi. A hibrid felhőt elsősorban a pénzügyekben, az egészségügyben és az egyetemeken használják. A legjobb hibrid felhőszolgáltató vállalatok az Amazon, a Microsoft, a Google, a Cisco és a NetApp.

![](/assets/images/cloud/14.png)

### A hibrid felhő előnyei

#### Rugalmas és biztonságos

A nyilvános felhő miatt rugalmas erőforrásokat, a privátfelhő miatt pedig biztonságos erőforrásokat biztosít.

#### Költséghatékony

A hibrid felhő kevesebb költséggel jár, mint a privát felhő. Segít a szervezeteknek, hogy mind az infrastruktúra, mind az alkalmazások támogatásának költségeit megtakarítsák.

#### Költséghatékony

Mind a nyilvános, mind a privát felhő jellemzőit kínálja. A hibrid felhő képes alkalmazkodni az egyes vállalatok hely, memória és rendszer iránti igényeihez.

#### Biztonság

A hibrid felhő biztonságos, mivel a kritikus tevékenységeket a privát felhő végzi.

#### Kockázatkezelés

A hibrid felhő kiváló lehetőséget biztosít a vállalatok számára a kockázatkezelésre.

### A hibrid felhő hátrányai

#### Hálózati problémák

A hibrid felhőben a hálózatépítés összetetté válik a privát és a nyilvános felhő miatt.

#### Az infrastruktúra kompatibilitása

Az infrastruktúra-kompatibilitás a fő kérdés a hibrid felhőben. A kétszintű infrastruktúrával a privát felhő a vállalatot irányítja, a nyilvános felhő pedig nem, így fennáll a lehetőség, hogy különálló stackekben futnak.

#### Megbízhatóság

A szolgáltatások megbízhatósága a felhőszolgáltatóktól függ.

## Community Cloud (Közösségi felhő)

A közösségi felhő olyan felhőinfrastruktúra, amely lehetővé teszi, hogy a rendszerek és szolgáltatások több szervezetből álló csoport számára is elérhetőek legyenek, és így megoszthassák az információkat. Tulajdonosa, kezelője és üzemeltetője a közösség egy vagy több szervezete, egy harmadik fél vagy ezek kombinációja.

### A közösségi felhő előnyei

#### Költséghatékony

A közösségi felhő költséghatékony, mivel a teljes felhő több szervezet vagy közösség között oszlik meg.

#### Rugalmas és skálázható

A közösségi felhő rugalmas és skálázható, mert minden felhasználóval kompatibilis. Lehetővé teszi a felhasználók számára, hogy igényeiknek és követelményeiknek megfelelően módosítsák a dokumentumokat.

#### Biztonság

A közösségi felhő biztonságosabb, mint a nyilvános felhő, de kevésbé biztonságos, mint a privát felhő.

#### Megosztott infrastruktúra

A közösségi felhő lehetővé teszi, hogy a felhő erőforrásait, infrastruktúráját és egyéb képességeit különböző szervezetek között megosszuk.

### A közösségi felhő hátrányai

- A közösségi felhő nem minden szervezet számára jó választás.
- Lassú az adatok elfogadása
- A rögzített mennyiségű adattárolás és sávszélesség megosztásra kerül a közösségi tagok között.
- A közösségi felhő költségesebb, mint a nyilvános felhő.
- A felelősség megosztása a szervezetek között nehézkes.


