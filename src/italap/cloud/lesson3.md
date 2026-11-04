# 3. tananyag

## Felhőszolgáltatási modellek

A felhőszolgáltatási modelleknek a következő három típusa létezik.

1. Infrastructure as a Service (IaaS)
2. Platform as a Service (PaaS)
3. Software as a Service (SaaS)

![](/assets/images/cloud/16.png)

### Infrastructure as a Service (IaaS)

Az IaaS más néven Hardware as a Service (HaaS). Ez egy interneten keresztül kezelt számítástechnikai infrastruktúra. Az IaaS használatának fő előnye, hogy a felhasználóknak segít elkerülni a fizikai szerverek megvásárlásának és kezelésének költségeit és bonyolultságát.

#### Az IaaS jellemzői

Az IaaS-nek a következő jellemzői vannak:

- Az erőforrások szolgáltatásként állnak rendelkezésre
- A szolgáltatások nagymértékben skálázhatók
- dinamikusak és rugalmasak
- GUI- és API-alapú hozzáférés
- Automatizált adminisztrációs feladatok

__Példa:__ DigitalOcean, Linode, Amazon Web Services (AWS), Microsoft Azure, Google Compute Engine (GCE), Rackspace és Cisco Metacloud.

### Platform as a Service (PaaS)

A PaaS felhőalapú számítástechnikai platformot a programozók számára hozták létre az alkalmazások fejlesztéséhez, teszteléséhez, futtatásához és kezeléséhez.

#### A PaaS jellemzői

A PaaS-nek a következő jellemzői vannak.

- Különböző felhasználók számára ugyanazon a fejlesztőalkalmazáson keresztül érhető el.
- Integrálható webszolgáltatásokkal és adatbázisokkal.
- Virtualizációs technológiára épül, így az erőforrások a szervezet igényei szerint könnyen növelhetők vagy csökkenthetők.
- Több nyelv és keretrendszer támogatása.
- Lehetőséget biztosít az "automatikus skálázásra".

__Példa:__ AWS Elastic Beanstalk, Windows Azure, Heroku, Force.com, Google App Engine, Apache Stratos, Magento Commerce Cloud és OpenShift.


### Software as a Service (SaaS)

A SaaS-t "igény szerinti szoftverként" is ismerik. Ez egy olyan szoftver, amelyben az alkalmazásokat egy felhőszolgáltató hosztolja. A felhasználók ezeket az alkalmazásokat internetkapcsolat és webböngésző segítségével érhetik el.

#### A SaaS jellemzői

A SaaS-nek a következő jellemzői vannak:

- Központi helyről kezelhető
- Távoli kiszolgálón hosztolva
- Interneten keresztül érhető el
- A felhasználók nem felelősek a hardver- és szoftverfrissítésekért. A frissítések automatikusan alkalmazásra kerülnek.
- A szolgáltatásokat felhasználásonként fizetős alapon kell megvásárolni.

__Példa:__ BigCommerce, Google Apps, Salesforce, Dropbox, ZenDesk, Cisco WebEx, ZenDesk, Slack és GoToMeeting.

### Az modellek közötti különbség

Az alábbi táblázat az IaaS, a PaaS és a SaaS közötti különbséget mutatja.

|                                                                          IaaS                                                                          |                                                      Paas                                                     |                                     SaaS                                     |
|:------------------------------------------------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------:|
| Virtuális adatközpontot biztosít az információk tárolására és platformok létrehozására az alkalmazások fejlesztéséhez, teszteléséhez és telepítéséhez. | Virtuális platformokat és eszközöket biztosít az alkalmazások létrehozásához, teszteléséhez és telepítéséhez. | Webes szoftvereket és alkalmazásokat kínál az üzleti feladatok elvégzéséhez. |
|                              Hozzáférést biztosít az erőforrásokhoz, például virtuális gépekhez, virtuális tárolókhoz stb.                             |              Futásidejű környezeteket és telepítési eszközöket biztosít az alkalmazások számára.              |            Szoftvert szolgáltatásként nyújt a végfelhasználóknak.            |
|                                                            Ezt hálózati tervezők használják.                                                           |                                          Ezt a fejlesztők használják.                                         |                         A végfelhasználók használják.                        |
|                                                         Az IaaS csak infrastruktúrát biztosít.                                                         |                                  A PaaS infrastruktúra + platformot biztosít.                                 |                 A SaaS infrastruktúra + platform + szoftver.                 |


## Infrastructure as a Service | IaaS

Az IaaS más néven Hardware as a Service (HaaS). Ez a felhőalapú számítástechnikai platform egyik rétege. Lehetővé teszi az ügyfelek számára, hogy kiszervezzék IT-infrastruktúrájukat, például a szervereket, a hálózatot, a feldolgozást, a tárolást, a virtuális gépeket és más erőforrásokat. Az ügyfelek ezeket az erőforrásokat az interneten keresztül, használatonként fizetős modellben érik el.

A hagyományos tárhelyszolgáltatások esetében az IT-infrastruktúrát meghatározott időre bérelték ki, előre meghatározott hardverkonfigurációval. Az ügyfél a konfigurációért és az időért fizetett, függetlenül a tényleges használattól. Az IaaS felhőalapú számítástechnikai platformréteg segítségével az ügyfelek a változó igényeknek megfelelően dinamikusan méretezhetik a konfigurációt, és csak a ténylegesen igénybe vett szolgáltatásokért számláznak.

Az IaaS felhőalapú számítástechnikai platformréteg kiküszöböli, hogy minden szervezetnek szüksége legyen az IT-infrastruktúra karbantartására.

Az IaaS három modellben érhető el: nyilvános, privát és hibrid felhő. A privát felhő azt jelenti, hogy az infrastruktúra az ügyfél telephelyén található. A nyilvános felhő esetében a felhőalapú számítástechnikai platform szolgáltatójának adatközpontjában található, a hibrid felhő pedig a kettő kombinációja, amelyben az ügyfél a nyilvános felhő vagy a privátfelhő közül a legjobbat választja.

Az IaaS szolgáltató a következő szolgáltatásokat nyújtja:

1. __Számítási feladatok:__ A Computing as a Service magában foglalja a virtuális központi feldolgozóegységeket és a virtuális főmemóriát a VM-ek számára, amelyet a végfelhasználók számára biztosítanak.
2. __Tárolás:__ Az IaaS-szolgáltató háttértárolót biztosít a fájlok tárolásához.
3. __Hálózat:__ A Network as a Service (__NaaS__) hálózati komponenseket, például útválasztókat, kapcsolókat és hidakat (_routers, switches, bridges_) biztosít a VM-ek számára.
4. __Terheléselosztók:__ Terheléselosztási képességet biztosít az infrastrukturális szinten.

![](/assets/images/cloud/17.png)

### Az előnyei

####  Megosztott infrastruktúra

Az IaaS lehetővé teszi, hogy több felhasználó ugyanazt a fizikai infrastruktúrát ossza meg.

#### Webes hozzáférés az erőforrásokhoz

Az IaaS lehetővé teszi az IT-felhasználók számára, hogy az erőforrásokhoz az interneten keresztül férjenek hozzá.

#### Használatonkénti fizetős modell

Az IaaS-szolgáltatók a szolgáltatásokat felhasználásonkénti fizetés alapján nyújtják. A felhasználóknak fizetniük kell azért, amit igénybe vettek.

#### Fókuszálás az alaptevékenységre

Az IaaS-szolgáltatók az IT-infrastruktúra helyett a szervezet alaptevékenységére összpontosítanak.

#### Igény szerinti skálázhatóság

Az igény szerinti skálázhatóság az IaaS egyik legnagyobb előnye. Az IaaS használatával a felhasználóknak nem kell aggódniuk a szoftverek frissítése és a hardverkomponensekkel kapcsolatos problémák elhárítása miatt.

### A hátrányai

#### Biztonság

A biztonság az IaaS egyik legnagyobb problémája. A legtöbb IaaS szolgáltató nem képes 100%-os biztonságot nyújtani.

#### Karbantartás és frissítés

Bár az IaaS szolgáltatók karbantartják a szoftvert, de egyes szervezetek esetében nem frissítik a szoftvert.

#### Interoperabilitási problémák

Nehéz VM-et migrálni egyik IaaS-szolgáltatóról a másikra, így az ügyfelek a vendor lock-inhez kapcsolódó problémával szembesülhetnek.

### Néhány fontos szempont

Az IaaS felhőalapú számítástechnikai platform nem helyettesítheti a hagyományos tárhelyszolgáltatási módszert, de annál többet nyújt, és minden egyes felhasznált erőforrás a használatnak megfelelően kiszámítható.

Az IaaS felhőalapú számítástechnikai platform nem szünteti meg a házon belüli informatikai részleg szükségességét. Szükség lesz rá az IaaS-beállítás felügyeletéhez vagy ellenőrzéséhez. Az informatikai bérkiadások nem feltétlenül csökkennek jelentősen, de más informatikai kiadások csökkenthetők.

Az IaaS felhőalapú számítástechnikai platform szolgáltatójánál bekövetkező meghibásodások leállíthatják vállalkozását. Értékelje az IaaS felhőalapú számítástechnikai platform szolgáltatójának stabilitását és pénzügyeit. Győződjön meg arról, hogy az SLA-k (azaz a szolgáltatási szintre vonatkozó megállapodás) biztonsági mentéseket biztosítanak az adatok, a hardver, a hálózat és az alkalmazások meghibásodásai esetére. A képhordozhatóság és a harmadik féltől származó támogatás plusz pont.

Az IaaS felhőalapú számítástechnikai platformszolgáltató hozzáférhet az Ön érzékeny adataihoz. Vegye fel tehát a kapcsolatot hiteles vállalatokkal vagy szervezetekkel. Tanulmányozza biztonsági irányelveiket és óvintézkedéseiket.

#### Top szolgáltatók, akik IaaS felhőalapú számítástechnikai platformot biztosítanak

![](/assets/images/cloud/18.png)


|     IaaS szolgáltató    |                                   IaaS megvalósítás                                   |                                                                                                            Részletek                                                                                                            |
|:-----------------------:|:-------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|   Amazon Web Services   | Elastic, Elastic Compute Cloud (EC2) MapReduce, Route 53, Virtual Private Cloud, etc. |                                 A felhőalapú számítástechnikai platform úttörője, az Amazon automatikus skálázási, felhőfelügyeleti és terheléselosztási funkciókat kínál portfóliója részeként.                                |
|    Netmagic Solutions   |                                  Netmagic IaaS Cloud                                  |      A Netmagic Mumbaiban, Chennaiban és Bangalore-ban található adatközpontokból, valamint egy virtuális adatközpontból működik az Egyesült Államokban. Jelenleg tervezik a szolgáltatások kiterjesztését Nyugat-Ázsiára.      |
|        Rackspace        |                     Cloud servers, cloud files, cloud sites, etc.                     |                                                       A felhőalapú számítástechnikai platformszolgáltató elsősorban vállalati szintű tárhelyszolgáltatásokra összpontosít.                                                      |
| Reliance Communications |                             Reliance Internet Data Center                             | A RIDC hagyományos hosting- és felhőszolgáltatásokat egyaránt támogat, adatközpontjai Mumbaiban, Bangalore-ban, Hyderabadban és Chennaiban találhatók. A RIDC által kínált felhőszolgáltatások közé tartozik az IaaS és a SaaS. |
|    Sify Technologies    |                                       Sify IaaS                                       |                              A Sify felhőalapú számítástechnikai platformját a HP konvergens infrastruktúrája hajtja. A gyártó a felhőszolgáltatások mindhárom típusát kínálja: IaaS, PaaS és SaaS.                             |
|   Tata Communications   |                                      InstaCompute                                     |                                    Az InstaCompute a Tata Communications IaaS-ajánlata. Az InstaCompute adatközpontok Hyderabadban és Szingapúrban találhatók, és mindkét országban működnek.                                   |


## Platform as a Service | PaaS

A Platform as a Service (PaaS) futási környezetet biztosít. Lehetővé teszi a programozók számára a webes alkalmazások egyszerű létrehozását, tesztelését, futtatását és telepítését. Ezeket az alkalmazásokat egy felhőszolgáltatótól lehet megvásárolni használatonként fizetős alapon, és az internetkapcsolat segítségével lehet hozzáférni hozzájuk. A PaaS esetében a back end skálázhatóságát a felhőszolgáltató kezeli, így a végfelhasználóknak nem kell aggódniuk az infrastruktúra kezelésével kapcsolatban.

A PaaS magában foglalja az infrastruktúrát (szerverek, tárolás és hálózat) és a platformot (middleware, fejlesztőeszközök, adatbázis-kezelő rendszerek, üzleti intelligencia és egyéb) a webalkalmazások életciklusának támogatására.

__Példa:__ Google App Engine, Force.com, Joyent, Azure.

A PaaS-szolgáltatók biztosítják a programozási nyelveket, az alkalmazási keretrendszereket, az adatbázisokat és egyéb eszközöket:

![](/assets/images/cloud/19.png)

#### Programozási nyelvek

A PaaS-szolgáltatók különböző programozási nyelveket biztosítanak a fejlesztők számára az alkalmazások fejlesztéséhez. A PaaS-szolgáltatók által biztosított néhány népszerű programozási nyelv a Java, a PHP, a Ruby, a Perl és a Go.

#### Alkalmazási keretrendszerek

A PaaS-szolgáltatók alkalmazás-keretrendszereket biztosítanak az alkalmazásfejlesztés könnyű megértéséhez. Néhány népszerű, a PaaS-szolgáltatók által biztosított alkalmazás-keretrendszer: Node.js, Drupal, Joomla, WordPress, Spring, Play, Rack és Zend.

#### Adatbázisok

A PaaS-szolgáltatók különböző adatbázisokat, például ClearDB-t, PostgreSQL-t, MongoDB-t és Redis-t biztosítanak az alkalmazásokkal való kommunikációhoz.

#### Egyéb eszközök

A PaaS-szolgáltatók különböző egyéb eszközöket biztosítanak, amelyek az alkalmazások fejlesztéséhez, teszteléséhez és telepítéséhez szükségesek.


### Az előnyei

A PaaS előnyei a következők.

#### Egyszerűsített fejlesztés

A PaaS lehetővé teszi a fejlesztők számára, hogy a fejlesztésre és az innovációra összpontosítsanak anélkül, hogy az infrastruktúra kezelésével foglalkoznának.

#### Alacsonyabb kockázat

Nincs szükség előzetes hardver- és szoftverberuházásra. A fejlesztőknek csak egy számítógépre és internetkapcsolatra van szükségük ahhoz, hogy elkezdhessék az alkalmazások építését.

#### Előre felépített üzleti funkciók

Egyes PaaS-szolgáltatók már meghatározott üzleti funkciókat is biztosítanak, így a felhasználók elkerülhetik, hogy mindent a nulláról kezdjenek el építeni, és így közvetlenül csak a projektekbe kezdhetnek.

#### Azonnali közösség

A PaaS-szolgáltatók gyakran biztosítanak online közösségeket, ahol a fejlesztő ötleteket kaphat, hogy megossza tapasztalatait, és tanácsot kérhet másoktól.

#### Méretezhetőség

A telepített alkalmazások egytől több ezer felhasználóig skálázhatók az alkalmazások módosítása nélkül.

### A hátrányai

#### Forgalmazói kötöttség

Az alkalmazásokat a PaaS-szolgáltató által biztosított platformnak megfelelően kell megírni, így az alkalmazás migrálása egy másik PaaS-szolgáltatóhoz problémát jelentene.

#### Adatvédelem

A vállalati adatok, akár kritikusak lehetnek, akár nem, magánjellegűek lesznek, így ha nem a vállalat falain belül helyezkednek el, akkor kockázatot jelenthet az adatvédelem szempontjából.

#### Integráció a többi rendszeralkalmazással

Előfordulhat, hogy egyes alkalmazások helyi, mások pedig a felhőben vannak. Így megnő a komplexitás esélye, ha a felhőben lévő adatokat a helyi adatokkal együtt akarjuk használni.

### Népszerű szolgáltatók

![](/assets/images/cloud/20.png)

|         Szolgáltatók      |                                              Szolgáltatások                                        |
|:-------------------------:|:--------------------------------------------------------------------------------------------------:|
|  Google App Engine (GAE)  |                  App Identity, URL Fetch, Cloud storage client library, Logservice                 |
|       Salesforce.com      | Faster implementation, Rapid scalability, CRM Services, Sales cloud, Mobile connectivity, Chatter. |
|       Windows Azure       |                                Compute, security, IoT, Data Storage.                               |
|           AppFog          |                                 Justcloud.com, SkyDrive, GoogleDocs                                |
|         Openshift         |                                      RedHat, Microsoft Azure.                                      |
| Cloud Foundry from VMware |                                Data, Messaging, and other services.                                |


## Software as a Service | SaaS

A SaaS-t "On-Demand szoftverként" is ismerik. Ez egy olyan szoftverterjesztési modell, amelyben a szolgáltatásokat egy felhőszolgáltató hosztolja. Ezek a szolgáltatások az interneten keresztül állnak a végfelhasználók rendelkezésére, így a végfelhasználóknak nem kell semmilyen szoftvert telepíteniük az eszközeikre ahhoz, hogy hozzáférjenek a szolgáltatásokhoz.

A SaaS szolgáltatók a következő szolgáltatásokat nyújtják:

- __Üzleti szolgáltatások__ - A SaaS-szolgáltató különböző üzleti szolgáltatásokat nyújt a vállalkozások beindításához. A SaaS üzleti szolgáltatások közé tartozik az ERP (Enterprise Resource Planning), a CRM (Customer Relationship Management), a számlázás és az értékesítés.

- __Dokumentumkezelés__ - A SaaS dokumentumkezelés egy harmadik fél (SaaS szolgáltatók) által kínált szoftveralkalmazás, amely elektronikus dokumentumok létrehozására, kezelésére és nyomon követésére szolgál. Példa: _Slack, Samepage, Box és Zoho Forms_.

- __Közösségi hálózatok__ - Mint tudjuk, a közösségi oldalakat a nagyközönség használja, ezért a közösségi oldalak szolgáltatói SaaS-t használnak a kényelmük érdekében, és a nagyközönség információit kezelik.

- __E-mail szolgáltatások__ - A felhasználók kiszámíthatatlan számának és az e-mail szolgáltatásokra nehezedő terhelésnek a kezelésére sok e-mail szolgáltató kínálja szolgáltatásait SaaS használatával.

![](/assets/images/cloud/21.png)

### Az előnyei

#### A SaaS könnyen megvásárolható

A SaaS árazás havi vagy éves díjfizetésen alapuló előfizetés, így lehetővé teszi a szervezetek számára, hogy alacsony költséggel férjenek hozzá az üzleti funkciókhoz, ami kevesebb, mint a licencelt alkalmazásoké.

A hagyományos szoftverekkel ellentétben, amelyeket licenc alapú, előzetes költséggel (és gyakran opcionális folyamatos támogatási díjjal) értékesítenek, a SaaS-szolgáltatók általában előfizetési díjjal, leggyakrabban havi vagy éves díjjal árazzák az alkalmazásokat.

#### One to many

A SaaS-szolgáltatásokat one to many modellként kínálják, ami azt jelenti, hogy az alkalmazás egyetlen példányát több felhasználó osztja meg.

#### Kevesebb hardver szükséges a SaaS-hez

A szoftvert távolról hosztolják, így a szervezeteknek nem kell további hardverbe beruházniuk.

#### Alacsony karbantartási igény a SaaS esetében

A szolgáltatásként nyújtott szoftver megszünteti a szervezetek számára a telepítés, a beállítás és a napi karbantartás szükségességét. A SaaS kezdeti beállítási költségei jellemzően alacsonyabbak, mint a vállalati szoftvereké. A SaaS-szolgáltatók bizonyos használati paraméterek, például az alkalmazást használó felhasználók száma alapján árazzák alkalmazásaikat. Így a SaaS könnyen nyomon követhető és automatikus frissítéseket végez.

#### Nincs szükség speciális szoftver- vagy hardverververziókra

Minden felhasználó a szoftver azonos verziójával rendelkezik, és jellemzően a webböngészőn keresztül fér hozzá. A SaaS csökkenti az IT-támogatási költségeket azáltal, hogy a hardver- és szoftverkarbantartást és -támogatást kiszervezi az IaaS-szolgáltatóhoz.

#### Többeszközös támogatás

A SaaS-szolgáltatások bármilyen eszközről, például asztali számítógépekről, laptopokról, táblagépekről, telefonokról és vékony kliensekről elérhetők.

#### API-integráció

A SaaS-szolgáltatások szabványos API-kon keresztül könnyen integrálhatók más szoftverekkel vagy szolgáltatásokkal.

#### Nincs ügyféloldali telepítés

A SaaS-szolgáltatások közvetlenül a szolgáltatótól érhetők el az internetkapcsolat segítségével, így nem igényel semmilyen szoftver telepítését.

### A hátrányai

#### Biztonság

Valójában az adatokat a felhőben tárolják, ezért a biztonság egyes felhasználók számára problémát jelenthet. A felhőalapú számítástechnika azonban nem biztonságosabb, mint a házon belüli telepítés.

#### Késleltetési probléma

Mivel az adatokat és az alkalmazásokat a felhőben tárolják a végfelhasználótól változó távolságban, előfordulhat, hogy az alkalmazással való interakció során nagyobb késleltetés lép fel a helyi telepítéshez képest. Ezért a SaaS-modell nem alkalmas olyan alkalmazásokhoz, amelyek igénybevételi válaszideje ezredmásodpercekben mérhető.

#### Teljes függőség az internettől

Internetkapcsolat nélkül a legtöbb SaaS-alkalmazás nem használható.

#### Nehéz a SaaS-szolgáltatók közötti váltás

A SaaS-szolgáltatók közötti váltás a nagyon nagy adatfájlok interneten keresztüli átvitelének, majd átalakításának és egy másik SaaS-be való importálásának nehéz és lassú feladatával is jár.

### Népszerű szolgáltatók

![](/assets/images/cloud/22.png)

|        rovider       |                                                    Services                                                   |
|:--------------------:|:-------------------------------------------------------------------------------------------------------------:|
|    Salseforce.com    |                                            On-demand CRM solutions                                            |
| Microsoft Office 365 |                                              Online office suite                                              |
|      Google Apps     |                                    Gmail, Google Calendar, Docs, and sites                                    |
|       NetSuite       | ERP, accounting, order management, CRM, Professionals Services Automation (PSA), and e-commerce applications. |
|      GoToMeeting     |                                 Online meeting and video-conferencing software                                |
|   Constant Contact   |                              E-mail marketing, online survey, and event marketing                             |
|      Oracle CRM      |                                                CRM applications                                               |
|     Workday, Inc     |                          Human capital management, payroll, and financial management.                         |