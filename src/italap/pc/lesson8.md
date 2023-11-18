# 8. tananyag

:::tip 🚀
Ebben az anyagban az optikai adathordozókkal, háttértárakkal és azok csatlakoztatásával fogunk megismerkedni.
:::

## Az optikai tárolók jellemzői

- Kompakt méretek
- Cserélhetőség
- Olcsó előállítási költség
- Élettartalma évtizedekben mérhető

Az optikai tárolókra nagy tárolási sűrűség jellemző. Másik előnyös tulajdonságuk az élettartam: az optikai tárolók élettartama optimális esetben több évtized. Az optikai adathordozók előállítási költsége alacsony, az árát a lemezen lévő programok, adatok, zeneszámok, filmek stb. piaci értéke határozza meg, ami mellett az előállításuk költsége minimális. Fontos szempont továbbá az optikai adathordozó cserélhetősége: a használaton kívüli lemezt viszonylag kis helyen tárolhatjuk, kompakt mérete miatt könnyen magunkkal vihetjük és másik gépen azonnal használatba vehetjük (__feltéve, ha a gépben van az adathordozó olvasására szolgáló eszköz__).

Az adatok írásához, leolvasásához lézert alkalmaznak. A lemezek felületén sík területek (__land__) és apró bemélyedések (__pit__) találhatók. Ezek váltakozása kódolja a tárolt információt. A lézer a landról jól visszaverődik, a pitekrõl jóval kevesebb fény jut a detektorba.

### Az optikai meghajtók működési elve


A lézert két párhuzamos tükör közötti optikai közeg alkotja, amelyben elektro-, vagy fotolumineszcencia idézhető elő. Az elektro-, ill fotolumineszcencia alatt azt a jelenséget értjük, melynek során az elektromos tér változásai, vagy fény hatására, egyes atomok, molekulák gerjesztődnek, s a gerjesztés hatására a részecskék (__spontán emisszió révén__) fényt bocsátanak ki.

Az alkalmazott optikai közeg anyagi minőségétől függően beszélhetünk folyadék, gáz vagy szilárd-kristályos lézerről.

### A lézer jellemzői

- a lézerfény majdnem teljesen monokromatikus (__egyszínű__): vagyis nagyon szűk spektrumú fényről van szó
- a lézerfény koherens: a fényhullámok azonos fázisban vannak
- a lézerfény vékony, nagymértékben párhuzamos sugár: így nagy az energiasűrűség
- a lézerfény poláros: a hullámok mágneses mezejének iránya állandó

![1. ábra Az optikai meghajtó vázlata](/assets/images/pc7/image-009.jpg)



## Az optikai adathordozók csoportosítása

### CD lemezek

A lemez fő része a polikarbonát réteg, amely több feladatot lát el. Alsó rétege védi a lemezt a mechanikai sérülésektől.

A réteg biztosítja, hogy a lézer akadálytalanul jusson el az adathordozásra alkalmas barázdákhoz, amelyek a polikarbonát réteg felső részén helyezkednek el.

Ezek a barázdák íratlan állapotban a következő réteggel, a fényérzékeny szerves színezékkel vannak lefedve. A barázdák vezetik a lézert, amely a festékrétegbe "égeti" az információkat. Így alakulnak ki az ún. bemélyedések (__pit__) és a mezők (__land__), amelyek meghatározzák, hogy olvasáskor a lézer visszaverődik vagy elnyelődik.

A festékréteget a fényvisszaverő réteg követi, amely legtöbbször nem más, mint egy nagyon vékony arany-, ill. alumíniumréteg.

A lemez legfelső rétege egy védő lakkréteg, amely alkalmas a tartalomra vonatkozó információk felvitelére.

A CD lemezek alapvetően kétféle méretben készülhetnek: 120 mm átmérőjű változatban, vagy a 80mm-es változatban.

Vastagsága kb. 1,1-1,5 mm, tömege 14 és 33 g közötti.

A lemez közepén egy 15 mm átmérőjű furat van, ezután következik a megfogási terület. Tényleges információ a 23 - 58,5 mm közötti sugarú területeken tárolható.

Az információtároló terület három részre tagolódik:

- bevezetés (__lead-in__)
- programterület
- kivezetés (__lead-out__).

A CD-n az információ egy folyamatos spirálvonal mentén tárolódik, a lemez közepétől a széle felé haladva.

### A CD lemezek olvasási technológiái

#### CAV: (__Constant Angular Velocity__)

- A CD olvasásánál a szögsebesség állandó, amely a CD felületén kifelé haladva növekvő adatátviteli sebességet eredményez.

#### CLV: (__Constant Linear Velocity__)

- Állandó lineáris sebesség. Az adatátviteli sebesség állandó, a CD lemez forgási sebessége változik. (__felhasználási terület az Audio-CD lejátszókban__)




#### P-CAV: (__Partial Constant Angular Velocity__)

- Részben állandó szögsebesség. A CLV és a CAV kombinációja. Az adatátviteli sebesség addig növekszik, amíg a meghajtó el nem éri a maximális sebességét (__CAV__), majd lelassul és innentől az átviteli sebesség állandó marad (__CLV__). A P-CAV meghajtók hamarabb érik el a maximális sebességüket, mint a CAV meghajtók, így az átlagos adatátviteli sebességük is nagyobb.

#### Z-CAV: (__Zone Constant Linear Velocity__)

- Annyiban különbözik a P-CAV-tól, hogy a meghajtó CLV módban kezdi az olvasást.

![2. ábra CD-R felépítése](/assets/images/pc7/image-010.jpg)

 
### Az adatok felírására többféle rögzítési technológia használható

- Lyuk technológia: A beégető mechanizmus kb. 10 mW teljesítményű lézersugárral lyukat éget a tükrözőrétegbe, így onnan az olvasó lézerfejbe kevesebb fény verődik vissza.
- Buborék technológia: (__CD-R__): Az írólézer hatására a felvételréteg elpárolog, ezzel buborékot hoz létre a tükröződő műanyag rétegben.
- Mintázatváltás: Az alap réteg felülete alapállapotban szórt fényt ver vissza, melegítés hatására az adott pontban kisimul, és jól tükröz.
- Festékpolimer technológia: A lemeznek két, különböző hullámhosszú fényre érzékeny vegyületű bevonata van. Íráskor az alsó réteget melegítik lézersugárral, ennek térfogata megnő, és felső réteget nyomva dudort képez. Az író lézer kikapcsolásakor az alsó réteg visszanyeri eredeti alakját, a felső rétegben megmarad a dudor. Törléskor a felső réteget melegítik, az megolvad, és a dudorok kisimulnak, így visszaáll az írás előtti állapot.
- Fázisváltós technológia: (__CD-R, CD RW__). Az adathordozó anyaga kétféle állapotú lehet; kristályos állapotban jól tükröző felületet képez, amorf állapotban pedig szétszórja a fényt. Eredeti állapotában a CD-RW lemez felvételi területe polikristályos. Íráskor olvadáspont felé hevítik az anyagot (__amorf állapot__), míg törléskor olvadáspont alatti hőmérsékletig hevítik (__kristályos állapot__). Ezek a lemezek kb. 1 millió alkalommal törölhetők. Ha íráskor nagyobb teljesítményű lézerrel égetik az anyagot, akkor beégnek a lyukak és nem lesz törölhető a lemez (__CD-R__).

CD típusok fizikai tulajdonság alapján:

- CD-ROM (__Read Only Memory__) – csak olvasható
- CD-WO vagy CD-R (__Write Once__) – egyszer írható
- CD-RW – újraírható (__ReWrite__) – újraírható- ezen belül CD – MO

![3. ábra Cd-RW felépítése](/assets/images/pc7/image-011.jpg)


### CD-szabványok

Az első szabványt a Philips és a Sony írta le 1980-ban a "piros könyvben" a zenei CD-k számára. Azóta több szabványt dolgoztak ki, amelyek a kompakt lemezeken tárolt adatok formátumát és a tároló közeg fizikai specifikációját tartalmazzák.

- Vörös Könyv: a zenei CD és a CD mint fizikai formátum leírását tartalmazza.
- Sárga Könyv: az adattárolásra szolgáló CD-ROM, és egy külön kötetben a CD-ROM XA leírását tartalmazza.
- Fehér Könyv: A Video CD és a Super Video CD leírását tartalmazza.
- Kék könyv: A CD Extra leírását tartalmazza.
- Narancs Könyv: a CD-R és a CD-RW leírását tartalmazza.
- Zöld Könyv (__Green Book__): Az interaktív CD-k (__szöveg, grafika, hang, videó__) definíciója (__CD-I__) mára már elavult.
- Két olyan szabvány van, amely nem színes könyvekhez köthető: Photo CD, Műsoros többszakaszos CD (__pre-recorded multisession CD__)


### DVD

A DVD lemez külsőre nagyon hasonlít a CD-lemezhez, azonban a nagyobb adatsűrűségnek köszönhetően tárolási kapacitása, az oldalak és tárolási rétegek számától függően 7-25- szöröse a CD-knél megszokott értékeknek, vagyis a 4,5- 18 GB tartományban van. A DVD lemez kapacitásának ilyen mértékű növelése a hagyományos CD több műszaki jellemzőjének megváltoztatásával lehet elérni.. Az alapvető fizikai különbség a lemezek között, hogy a DVD-lemez mindig két, 0,6 mm vastagságú lemez összeragasztásával készül, és akár mindkét oldalán tárolhat adatokat. A technológiai fejlődésnek köszönhetően a lemez egy- egy oldalán két felvételi réteg alakítható ki. Az oldalak és rétegek számának kombinálásából jött létre a DVD négy alaptípusa.

![4. ábra. A CD és DVD szerkezete](/assets/images/pc7/image-012.jpg)

- __DVD5:__ egyoldalas, egyrétegű, a kapacitása 4,7 Gigabájt. A két 0,6 mm vastag polikarbonát hordozó közül csak az egyiken hoznak létre lyukakat, a másikat üresen hagyják. A másik lemez feladata az 1,2 mm-es vastagság biztosítása. Az egyoldalas lemez bármilyen hagyományos módszerrel címkézhető.
- __DVD-9:__ A kétrétegű egyoldalas lemez kapacitása 8,5 Gigabájt. A DVD9 lemez készítésére kétféle gyártástechnológiát alkalmaznak. A két réteget egy-egy 0,6 mm vastag lemez felületén alakítják ki, majd a lemezeket átlátszó ragasztóval összeragasztják. A második rétegben lyukak helyett kiemelkedéseket gyártanak, hogy ragasztás után lyukaknak látsszanak. Az alsó rétegre 0,05 mikron vastag féligáteresztő tükörréteg kerül, hogy a lézersugár a felső rétegre is tudjon fókuszálni. A féligáteresztő tükör általában alumíniumból készül. A belső réteg olvasásakor látszik a külső réteg is. A megbízhatóbb olvasás érdekében a kétrétegű lemezeknél a lyukak minimális méretét megnövelték. Kétrétegű lemez gyártható úgy is, hogy az egyik hordozóban alakítják ki a két réteget, és a másik hordozó üres. Az egyik hordozót polikarbonátból fröccsöntik, és vékony rétegben féligáteresztő tükröt hoznak létre rajta. A tükörfelületen létrehozott fotopolimer réteg hordozza a második rétegben lévő információs lyukakat. Végül az egészet befedik tükröző felülettel. A két lemezt ezután összeragasztják.
- __DVD-10:__ A kétoldalas lemez 9,4 Gigabájt kapacitású. A gyártása abban tér el a DVD5-lemezétől, hogy mindkét 0,6 mm vastagságú lemezen kialakítanak lyukakat összeragasztás előtt. A második oldal olvasásához a lemezt meg kell fordítani az olvasóban
- __DVD-18:__ Két réteg, két oldal, 17 Gigabájt kapacitás. A két lemezt külön gyártják és összeragasztják. A két rétegtechnika a DVD9-lemez készítési eljárással egyezik meg.

A DVD lemezeknek 120 és 80 mm-es változata létezik. A kétrétegű lemez tulajdonsága, hogy a második réteg mindkét irányban olvasható. A szabványos CD-kötet információja mindig a lemez elején van (__legbelső spirál__). Ez így van az egy- és kétrétegű DVD lemezre is, de a második réteg kívülről befelé is tartalmazhat adatot. Ez olyan alkalmazásoknál előnyös, melyek a lemezre folyamatosan felvett anyagot (__pl. mozifilm__) tartalmaznak, és külső réteg végén azonnal folytatni kell a belső réteg olvasását.

#### Írható DVD-k típusait

Az írható DVD-k közül a két legismertebb formátum a DVD-R és DVD+RW szabványcsoport. A DVD+RW szabványcsoport, amely magában foglalja az egyszer írható DVD+R és az újraírható DVD+RW lemezeket is, ezért van a kis RW logó rajta az egyszer írható DVD+R lemezeken is. Az újabb, technológiailag fejlettebb szabvány, gyorsabb és könnyebb - ezáltal olcsóbb - a gyártása. A DVD-RAM egy harmadik, speciális formátum.

- __DVD-R:__ egyszer írható lemez 4,7 GB kapacitás
- __DVD-R DL:__ egyszer írható 2 rétegű lemez 8,5 GB kapacitás
- __DVD-RW:__ többször írható lemez 4,7 GB kapacitás
- __DVD+R:__ egyszer írható lemez 4,7 GB kapacitás
- __DVD+R DL:__ egyszer írható 2 rétegű lemez 8,5 GB kapacitás
- __DVD+RW:__ többször írható lemez 4,7 GB kapacitás



![5. ábra A DVD+ DL szerkezete](/assets/images/pc7/image-013.jpg)


- DVD-RAM: A DVD-RAM nagy adatmennyiséget és teljesítményt igénylő alkalmazások követelményeit elégíti ki. A DVD-RAM lemezen tárolt adatok ugyanúgy közvetlenül érhetők el, mintha merevlemezen lennének (__például fájlkezelőből lehet másolni, törölni a fájlokat__), és 100 000-szer újraírhatók. Létezik 4,7 és 9,4 GB-s kapacitásban. Írási sebessége 2-3 szoros.

![6. ábra DVD RAM](/assets/images/pc7/image-014.jpg)


Alapvető gyártástechnológiai különbség, hogy a DVD-R lemezek a préselés során nem kapják meg azokat az előformázott információkat, amelyeket a DVD+R esetén a lemezre kerülnek, a DVD-R lemezek gyártása plusz egy fázisból áll, amelynek során ezek médiaazonosító adatok a lemezre kerülnek. Különbözik még az előre rögzített nyomvonal (__sorvezető__) kialakítása is, amely mentén az írás történik, a DVD+RW szabvány pontosabb, ugyanakkor rugalmasabb megoldást alkalmaz. Minden egyes lemeztípushoz (__a gyárilag préselt DVD-ROM korongokhoz, egyszer- és újraírható DVD-R és DVD+R lemezekhez egyaránt__) tartozik egy úgynevezett médiaazonosító jelzés (__BookType bitsetting__). Ez a lemez legelején található digitális azonosító, és ez alapján dönti el az olvasó (__vagy az asztali lejátszó__), hogy milyen olvasási stratégiát kell alkalmaznia az adott korong helyes dekódolásához, stabil olvasásához (__különben csak akadozva, vagy egyáltalán nem tudja majd lejátszani__).


#### CD, DVD írási módok

A lemezek írását az írók bentről kifelé haladva végzi. Ha a fordulatszám állandó maradna a lemez szélén, a kerületi sebesség, és így az írási sebesség is növekedne. Hogy az írási sebesség egyenletes legyes a lemez teljes felületén, ahhoz folyamatosan csökkenteni kell a fordulatszámot. Ezt nevezzük CLV (__Constant Linear Velocity__).

Gyorsabb írásmódok esetén a lemez belső részénél nagyon magas fordulatszámra van szükség a nagy írási sebességhez, mivel a fordulatszám nem növelhető a végtelenségig, ezért általában 6x-os sebességnél nagyobb nem érhető el a lemez elején. Ezért a 8x-os és gyorsabb írási sebesség esetén, az író alacsonyabb sebességgel kezd, majd később gyorsul fel az írás.

Kétféle módon lehet ezt megvalósítani. Az írók egy része a lemezt 3-6 zónára osztja be, és az egymást követő zónák írása egyre gyorsabban történik, de a zónákon belül mindig állandó a sebesség, ez a Z-CLV (__Zoned Constant Linear Velocity__), az írási sebesség lépcsőzetes grafikon szerint emelkedik, és a fordulatszám folyamatos változásával jár.

A másik mód, amikor a fordulatszám állandó, ezért a kezdeti írás sebesség folyamatosan emelkedik egészen a maximális érték eléréséig, ez az úgynevezett CAV (__Constant Angular Velocity__) mód: a fordulatszám állandó marad.

Ha az írási sebesség maximumát az író a lemez külső pereme előtt eléri, akkor onnan már CLV módban megy az írás a lemez végéig, ez a P-CAV (__Partial Costant Angular Velocity__). Az írási mód az írókban gyárilag van rögzítve.

#### Régió kódok:

![7. ábra Régiókód beállítása a Windows-ban](/assets/images/pc7/image-015.jpg)


A DVD-Video elterjedését nagyban segítette az, hogy minden ma gyártott DVD lemez régiókódos. (__Némelyik lemezen a szabad régiókód van beállítva.__) Ennek az az oka, hogy DVD Konzorcium, azért hogy a filmek megjelenési idejét szabályozza, a világot hat gazdasági régióra osztotta.

A különböző régiókóddal gyártott DVD-ket csak a vele azonos kódú lejátszón tudják lejátszani

A régiókód-védelem a számítógépen két szinten van megvalósítva: szoftveresen illetve hardveresen. A szoftveres védelem magában Windows-ban található, az operációs rendszer nem engedi, hogy a DVD meghajtó régiókódját ötnél többször megváltoztassuk. Ugyanez a védelem bizonyos meghajtókban hardveresen is meg van valósítva, illetve bizonyos lejátszók fix régiókóddal rendelkeznek, azaz csak egy fajta lemezt hajlandóak lejátszani.

- __0:__ bárhol játszhatók
- __1:__ Kanada, Amerikai Egyesült Államok és külbirtokai
- __2:__ Európa, Grönland, Dél-afrikai Köztársaság, Japán, Lesotho, Szváziföld, Egyiptom, Közel-Kelet
- __3:__ Délkelet-Ázsia, Dél-Korea, Hongkong, Indonézia, Fülöp-szigetek, Tajvan
- __4:__ Ausztrália, Új-Zéland, Mexikó, Közép- és Dél-Amerika
- __5:__ Oroszország és FÁK (__volt szovjet tagállamok__), Indiai szubkontinens, Mongólia, Észak-Korea, Afrika nem említett részei
- __6:__ Kína
- __7:__ nem használt
- __8:__ nemzetközi területek, például repülőgépek, hajók, olajfúró tornyok, stb.
- A __0-s__ régió valójában nem jelöl ki régiót, csupán azt jelenti, hogy bármely lejátszóban játszhatók.

#### Formátumháború

A BD mögött álló Sony és a HDDVD-t kifejlesztett Toshiba küzdött, hogy saját technológiája legyen a jövő "DVD"-je. Nem volt jelentős különbség a két technológia között, csak a tárolókapacitásban. Egy réteg esetén a BD 25 GB-ot a HDDVD 15 GB tárolt. A nagyfelbontású filmek nézése közben nem látszott eltérés.

A Warner és a további filmstúdiók valamint az egész HD-piac a Blu-ray-t részesítette előnyben. Így 2008 elején a Toshiba leállította a HDDVD fejlesztését és gyártását. A "formátumháborúból" a BD került ki győztesen.

### A Blu-Ray (__BD__) lemez

A kisebb fénynyalábbal pontosabban lehet fókuszálni, lehetővé téve, hogy olyan kis mélyedésekből (__pit__) is kiolvassunk adatokat, amik csak 0,15 mikrométer (__μm; 1 mikron = 10 −6 méter__) hosszúak – ez kevesebb, mint fele a DVD-n található kis mélyedések méretének. Emellett a Blu-ray lecsökkentette a sávok szélességét 0,74 mikronról 0, mikronra. A kisebb mélyedések, a kisebb fénysugár, és a rövidebb sáv-hüvelyk együttesen azt eredményezte, hogy az egyrétegű Blu-ray lemezen több mint 25 GB információt tudunk tárolni, egy dupla rétegű Blu-ray lemezen, pedig mintegy 50 GB-nyi adat tárolható.

A lemezek a digitálisan kódolt videó és audió információt mélyedések-ben tárolja. Ezek a mélyedések (__„pits”__) a lemezen spirálisan helyezkednek el a központból kiindulva a szélek felé. A lézer a mélyedések másik oldalát olvassa, – azaz a kiemelkedéseket, hogy lejátssza a filmet, programokat, vagy egyéb adatokat amikett a lemezen tárolunk. Minél több adatot tárolunk a lemezen, annál kisebb és egymáshoz közelebb lévő mélyedéseknek kell lenniük. Minél kisebb a mélyedés (__és ezáltal a kiemelkedés__), annál pontosabban kell fókuszálni a lézert a biztonságos olvasás eléréséhez.


![8. ábra CD, DVD, BD lézersugarak méretei](/assets/images/pc7/image-016.jpg)

Minden Blu-ray lemez körülbelűl ugyanolyan vastagságú (__1,2 milliméter__), akárcsak a DVD-k. A DVD-n az adat két 0,6 milliméter vastag polikarbonát réteg között helyezkedik el. Amelyik polikarbonát réteg az adat tetején helyezkedik el a kettős törés problémáját idézheti elő, amiben az alsó réteg megtöri a lézer fényét két elkülönült fénynyalábra. Ha a fénynyaláb túl szélesen hasad el, akkor a lemez olvashatatlan lesz. Ha a DVD felszíne nem pontosan sík és ezért nem pontoson merőlegesen esik a fénysugár rá, akkor a lézersugár torz lesz (__disc tilt__), ez szintén olvasási problémához vezethet.

Ezeket a hibákat úgy küszöbölték ki a BD lemezek esetében, hogy az adatot egy 1, milliméter vastag polikarbonát rétegre helyezi. Amiatt, hogy a tetején van elhelyezve az adat, ezáltal a kettős törés és olvashatósági problémák nem lépnek fel.

![9. ábra CD, DVD, BD írás](/assets/images/pc7/image-017.jpg)


Mivel az adat a felszínhez közel helyezkedik el ezért a sérülésektől óvni kell. Egy kemény védőréteggel van ellátva a lemez, ami megvédi a karcolásoktól, az ujjlenyomatoktól, és a szennyeződésektől.

![10-a. ábra DVD, BD lemez felépítése](/assets/images/pc7/image-018.jpg)

Az adatátviteli sebességben is a BD a gyorsabb. A DVD 10 Mbps gyorsaságával szemben a Blu-ray lemez mintegy 36 Mbps sebességgel olvasható.


![10-b. ábra DVD, BD lemez felépítése](/assets/images/pc7/image-019.jpg)

![11. ábra 25GB-os, 2-szeresen írható nyomtatható Blu-ray lemez](/assets/images/pc7/image-020.jpg)

A Blu-ray formátum fejlesztését felügyelő BDA (__Blu-ray Disc Association__) bejelentette, hogy jóváhagyták a BDXL és az IH-BD specifikációit, ennek megfelelően a jövőben akár 128 GB kapacitású lemezek forgalmazása is lehetséges.

A BDXL formátum elsősorban professzionális felhasználásra készült. A szabvány egyszer írható formában 100 vagy 128 GB-os lemezeket tesz lehetővé, míg a többször írható médiumok esetén 100 GB-os a tárhely. A három vagy négy réteget hordozó lemezeknél 25 vagy 33,4 GB lehet a rétegenkénti kapacitás.

Az IH-BD, azaz az Intra-Hybrid Blu-ray Disc egy hibrid konstrukció, ami egy olvasható BD- ROM és egy újraírható BD-RE réteget alkalmaz. Ezek kapacitása egyenként 25 GB lesz, a felhasználó az olvasható réteget nem változtathatja meg.

A BDXL és az IH-BD formátum is új meghajtókat követel a működéshez, azaz a jelenleg kapható írók és olvasók nem kezelik az előbb említett lemezeket. Ettől függetlenül a hamarosan forgalomba kerülő készülékekkel továbbra is használni lehet az eddig megjelent Blu-ray diszkeket, mivel az új specifikációk a technológia kiterjesztésével jöttek létre.

#### Régió kódok:

A BD-ROM lemezek az előd DVD-hez hasonlóan rendelkeznek régió-kódokkal. A különbség csak annyit, hogy az ottani régiók számát lecsökkentették (__8-ról 3-ra__) és némileg átformálták.

- A régió (__narancssárga__): Kelet-Ázsia (__kivéve: Kína fő területe és Mongólia__), Dél-Kelet Ázsia, Észak- Dél és Közép-Amerika.
- B régió (__zöld__): Afrika, Dél-Nyugat Ázsia, Európa (__kivéve Oroszország és Kazahsztán__), Ausztrália és Óceánia.
- C régió: (__lila__): Közép-Ázsia, Kína fő területe és Mongólia, Dél-Ázsia, valamint Közép- Ázsia.

A fentiekben áttekintettük a különböző az optikai adattárolás elveit, különböző típusú adathordozókat. Mint látható elég széles a választék. Folyamatosan fejlődik a technológia, egyre nagyobb tárolókapacitású adathordozók jelennek meg. A legújabb technológiák, fejlesztések nyomon követése folyamatos önképzést igényel.

## Tekintsük át az optikai meghajtók típusait

### CD olvasók, írók

Legelőször megjelentek a CD olvasók 1-2- szeres olvasási sebességgel (__az egyszeres sebesség 150 Kbyte/s értéket jelent__). Ezt követték a CD írók, amik már képesek voltak nemcsak a CD-k olvasására, hanem az írására is.

CD írót meghatározta az írási/újraírási/olvasási sebességei. Ezt szokták jelölni a meghajtókon: 4/14/16. Ez azt jelenti, hogy ez a meghajtó 4x sebességgel képes lemezeket írni, 4x sebességgel képes újraírni, és 16x sebességgel tud olvasni. A megvásárolható lemezeken fel van tüntetve, hogy milyen sebességgel lehet őket írni.

Jellemzően IDE vagy SCSI csatolófelülettel rendelkeztek.

Ma már kereskedelmi forgalomban nem kaphatók.

### DVD írók

A ma kapható korszerű DVD írók az összes kereskedelemben kapható CD, DVD típusok írására, olvasására alkalmasak. A SATA csatolófelület itt is kiszorítja az elavult PATA felületet. Külső DVD írók USB felületen csatlakoznak (__5,25", 2,5", slim kivitelben is kaphatók__).



![12. ábra DVD író elektronikája](/assets/images/pc7/image-022.jpg)



![13. ábra DVD író belső felépítése](/assets/images/pc7/image-023.jpg)


A korszerű DVD írók rendelkeznek az ún. buffer underrun technológiával (__ami megvédi az írási folyamatot a puffer kiürüléséből bekövetkező megszakadástól__). A pufferméret általában 2 MB.

![14. ábra PATA csatolófelületű DVD író](/assets/images/pc7/image-025.jpg)


A csatlakozók megnevezése balról jobbra haladva:

1. Digital out
2. Line out
3. Jumper
4. Adatkábel csatlakozó
5. tápcsatlakozó

A csatolási felületek módjait, tulajdonságait: A mágneses háttértárak tananyagban részletesen kielemeztük.





![15. ábra SATA csatolófeletű DVD író](/assets/images/pc7/image-026.jpg)


![16. Slim kivitelű külső DVD író](/assets/images/pc7/image-027.jpg)


A ma kapható DVD írók tulajdonságai:

| Olvasási sebesség |   Írási sebesség   | Elérési idő | Adatátviteli sebesség | Pufferméret |
|:-----------------:|:------------------:|:-----------:|:---------------------:|:-----------:|
|    CD: 48x max    |  DVD-R: 24x max.   |  CD: 140 ms |      150 MByte/s      |     2 MB    |
|   DVD: 16x max.   |   DVD+R: 24x max.  | DVD: 160 ms |                       |             |
|                   |  DVD-RW: 6x max.   |             |                       |             |
|                   |   DVD+RW: 8x max.  |             |                       |             |
|                   | DVD-R DL: 12x max. |             |                       |             |
|                   |  DVD+R9: 12x max.  |             |                       |             |
|                   |  DVD-RAM: 12x max. |             |                       |             |
|                   |   CD-R: 48x max.   |             |                       |             |
|                   |   CD-RW: 32x max   |             |                       |             |

### Blu-Ray írók

A ma kapható Blu-ray írók a BD lemezeken kívűl szinte az összes CD, DVD típusok írására, olvasására alkalmasak, A SATA csatolófelület itt is kiszorítja az elavult PATA felületet. Külső BD írók USB felületen csatlakoznak.

![17. BD író](/assets/images/pc7/image-028.jpg)


![18. ábra USB 2.0 csatolófelületű, vékony kivitelű BD író](/assets/images/pc7/image-029.jpg)



### Magnetooptikai tárolók

A MO Magneto Optical (__magnetooptikai__) eljárással optikai lemezre rögzítenek adatot. Az MO-lemezeknél használt vékony filmréteg magnetooptikai anyagokat tartalmaz. Ezek az anyagok mágneses állapotuktól függően más polarizációval verik vissza a fényt. Az anyag mágneses állapota magas hőmérsékleten, mágneses mező jelenlétében megváltoztatható. Az MO-lemez írása termomagnetikai (__íráskor a mágnesezettséget kell változtatni, a melegítést nagyteljesítményű lézer végzi__) úton történik, az olvasás optikai úton zajlik.

### Holografikus adattárolás

A technológia azon alapszik, hogy a tárló lemezeket olyan réteggel látják el, amiben az adattárolás 3D-ben történik. A ma használatos DVD-ket a lézersugár csak felszínileg tapogatja, le addig a holografikus módszernél egymást metsző lézersugarak végzik az adattárolást és az olvasást, így több réteget kezelnek egyszerre.




2007- ben a Mempile nevű izraeli cég által kifejlesztett optikai adathordozó, 1 Terabyte adat tárolására képes adathordozót fejlesztett ki, és TeraDiscnek nevezte el. Miután az "egy terát" elérték vörös lézerrel, szeretnének a kék lézerre áttérni, és ott 5 TB-ot belesűríteni egy lemezbe.

## Az optikai háttértár beszerelése a számítógépházba

Ma már nagyon sokféle típusú számítógépházat lehet kapni a kereskedelemben: az egyszerű házaktól, a korszerű csavarmentes szerelésűig. Így a háttértárak beszerelése is jóval leegyszerűsödött. Ezekből mutatunk be párat.

- Az egyszerű házaknál a 4-8 csavar segítségével tudjuk beszerelni a szerelőkeretbe
- Beépítő síneket pattintunk fel a háttértár oldalára, majd betoljuk a szerelőkeretbe (__hasonlóan mint a HDD-knél__)
- Sima feleletű csavarokat hajtunk be a meghajtó csavarmeneteibe, majd becsúsztatjuk a helyére, ami stabil rögzítést eredményez.

![19. ábra Csavarok behajtása](/assets/images/pc7/image-030.jpg)


![20. ábra Becsúsztatva a helyén](/assets/images/pc7/image-031.jpg)


## CD/DVD nyomtatási technológiák

Egyre nagyobb az igény, hogy a felhasználók saját igényüknek megfelelő CD, DVD felületet készítsenek. Tekintsük át az otthon is elérhető megoldásokat.

![21. ábra Lightscribe technológiával "gravírozott+ adathordozó](/assets/images/pc7/image-032.jpg)


- Tintasugaras nyomtatás: A célra alkalmas nyomtatóval tetszőleges ábrákat, képeket nyomtathatunk az arra előkészített CD, DVD, BD lemez felületére.
- Lightscribe: A Lightscribe technológia olyan integrált rendszer, mely speciális bevonatú lemezeket és külön e célra kifejlesztett beégető szoftvert alkalmaz. A "gravírozást" a Lightscribe technológiát kezelni tudó DVD-írókkal végezhetjük el úgy, hogy írás után egyszerűen megfordítjuk a lemezt és a szoftver segítségével kezdjük el az írást. Kontrasztnövelő programok segítségével javíthatunk a minőségen. A lightscribe CD/DVD korongok több alapszínben is kaphatók. A technológia nem teszi lehetővé a színes "gravírozást". A grafika a korong alapszínének árnyalataiból áll elő.
- Labelflash: A LightScribe technológiához hasonló eljárás. A korongok mindkét oldalára (__csak DVD-re__) "gravírozhatunk" vele (__az adatok megírása után az írott rész nem megírt sávjára, valamint a gravírozható felület egészére__).

![22. ábra Labelflash technológiával "gravírozott" DVD](/assets/images/pc7/image-033.jpg)


## Különleges CD-k, DVD-k

- Névjegy formátumú CD, DVD
- Shape CD: egyedi formájú lemezek a megrendelő igényei szerint
- Bakelit CD: mérete, tárolókapacitása mint a hagyományos CD-jé, megjelenése mint a bakelit lemezeké
- Átlátszó CD
- Illatos CD

## Szerelési tudnivalók

Miután beszereltük a gépbe az optikai tárolót ellenőrizzük le még egyszer a kábelek, tápcsatlakozók megfelelő bekötését, és a többi alkatrész (__processzor, hűtőborda, vezérlőkártya stb.__) helyes csatlakoztatását.



