# 5. tananyag

A következő anyagban a szilícium diódákkal fogunk megismerkedni, megnézzük, milyen tulajdonságokkal rendelkeznek, és mire is használják őket leginkább a gyakorlatban. A dióda a legegyszerűbb félvezető. Mindössze egy P és egy N típusú félvezetőből áll. Két kivezetése van az anód és a katód. Az anód a P rétegre van kapcsolva, a katód pedig az N-re.

## Dióda

![](/assets/images/elektro/6/e1.jpg)

A diódák végén látható világos csík katód  kivezetés azt mutatja meg, hogy milyen irányba kell bekötni az alkatrészt. Ebből következik az egyik legfontosabb tulajdonsága is.

![](/assets/images/elektro/6/e2.jpg)

Az egyik irányba átengedi az áramot, míg a másik irányban, nem szakadásként viselkedik. Ezt a tulajdonságot ragadja meg a dióda nyíl alakú áramköri jele, amin pontosan látszik az áram folyásiránya.

![](/assets/images/elektro/6/e3.jpg)

A diódák esetében az áramiránya az ábécé betűsorrendjével egyezik meg. Az anódtól a katód felé folyik. A diódán akkor folyik áram, ha az anódra a pozitívabb feszültséget kapcsolunk, mint a katódra. 

![](/assets/images/elektro/6/e4.jpg)




### Visszacsapó szelep(nyit)

A diódák működése a visszacsapó szelepekéhez hasonló, így a visszacsapó szelepek szemléletesen mutatják a velük analóg módon működő diódák áramirányát is.

![](/assets/images/elektro/6/e5.jpg)

A visszacsapó szelep nyitásához az áramlás irányából minimális nyomásnak lennie kell, ami leküzdi az áramlás útjában lévő golyó súlyát és az esetleg lezáró rugó ellenállását is. Ez megfelel a diódák nyitóirányú erőfeszítésének.

### Visszacsapó szelep(zár)

Ha az áramlás iránya megfordul, a visszacsapó szelep minden külső beavatkozás nélkül elzárja az áramlás útját.
![](/assets/images/elektro/6/e6.jpg)
Az ideális dióda is pontosan így működik. Természetesen a megfelelő elektromos analógiával. 

### Dióda és a multiméter

![](/assets/images/elektro/6/e7.jpg)

A digitális multiméterünket kapcsoljuk dióda vizsgáló módba. Ezt az üzemmódot általában a dióda vagy jelével ábrázolják.

![](/assets/images/elektro/6/e8.jpg)

A forgókapcsolom. Ezután kapcsoljuk a műszert a dióda végeihez. A piros vezeték csatlakozik a dióda anódjára és a fekete a katódra.
A műszer által kijelzett értékből a dióda nyitóirányú feszültségére lehet következtetni. A kijelzett érték 0,1 - 0,3V közötti, akkor germánium diódával van dolgunk. 0,4 - 0,6V felett, sima szilícium dióda akadt a kezünkbe.

![](/assets/images/elektro/6/e9.jpg)

Ezután a műszer vagy dióda két kivezetését felcseréljük és így mérünk. Ebben az irányban a dióda nem vezet, szakadást mutat a műszer. Ha nem így lenne, akkor bizony a dióda rossz.


### Fordított polaritás védelem

![](/assets/images/elektro/6/e10.jpg)

A diódák az áramok védelmét is el tudják látni, mivel az áram folyásirányát meghatározzák, így egyetlen diódával az áramkört védetté tehetjük a polaritáscsere ellen. 

![](/assets/images/elektro/6/e11.jpg)

Ugyanis, ha fordított irányban kapja az áramot, a dióda egyszerűen lezár, így megakadályozza az áramkör tönkremenetelét.

### Egy utas egyenirányítás

![](/assets/images/elektro/6/e12.jpg)

A diódák működési elvéből következik, hogy ha váltakozó feszültséggel vagy árammal tápláljuk őket, akkor a negatív félhullám nem jut át rajtuk, csak a pozitív félhullám marad meg végül az eredeti jelből.

![](/assets/images/elektro/6/e13.jpg)

Ezt egy utas egyenirányításnak nevezik. Figyeljük meg, hogy az eredeti és az egyenirányított jelfeszültségcsúcsa nem esik egybe. Ez azért van, mert a valóságban nincs ideális dióda. Számolnunk kell mindig valamilyen veszteséggel.

### Két utas egyenirányítás

![](/assets/images/elektro/6/e14.jpg)

Négy dióda segítségével megvalósítható a két utas egyenirányítóáramkör. A szinuszhullám első fél periódusában, amikor a felsővezeték pozitívabb, mint az alsó, ez a két dióda kapcsol be, és engedi, hogy az áram előrefelé folyjon. A másik két dióda kikapcsolva marad, megakadályozva így bármilyen ellentétes irányú áramot. 

![](/assets/images/elektro/6/e15.jpg)

A szinusz hullám második fél periódusában, amikor a felső vezeték feszültsége az alsóhoz képest negatív lesz, a másik két dióda fog vezetni. Az előző kettő pedig, ami korábban vezetett lezár, ezért ahelyett, hogy egyszerűen csak levágnánk a negatív félhullámot.Ezzel a kapcsolással a feje tetejére állítjuk és felhasználjuk azt. A kimeneten 100 Hz egyenfeszültséget kapunk a bemeneti 50 Hz helyett.

#### Két utas egyenirányítás szűrőkondenzátorral

![](/assets/images/elektro/6/e16.jpg)

Természetesen itt is beépíthetünk szűrőkondenzátorokat, hogy egy lapos, sima egyenfeszültséget kapjunk, de a kondenzátorokról majd egy másik anyagban részletesebben is beszélünk. Most térjünk át a dióda karakterisztikájára.

![](/assets/images/elektro/6/e17.jpg)

### Dióda karakterisztikája

![](/assets/images/elektro/6/e18.jpg)

A dióda áramának ábrázolása feszültségének függvényében a dióda karakterisztika, melyben több nevezetes tartományt lehet azonosítani. Mielőtt erre rátérnénk, beszéljük meg, mit értünk nyitóirányú és záróirányú erőfeszítésen. Ha a diódára olyan irányú áramot kapcsolunk, amelyet átenged akkor nyitóirányú erőfeszítésről, ha olyat, amit nem enged át, akkor pedig záróirányú erőfeszítésről beszélünk.
Minden diódának van egy úgynevezett nyitóirányú küszöbfeszültsége, amit ha a külső feszültség elér megindul a diódákban az elektronok áramlása.

![](/assets/images/elektro/6/e19.jpg)

A karakterisztikus görbe felfutó részére illesztett egyenes és a vízszintes tengelyi metszéspontja meghatározza a dióda nyitóirányú küszöbfeszültségét.

![](/assets/images/elektro/6/e21.jpg)

A példa áramkörünkön látható, hogy 0,7V esetén még nem kapcsol be a dióda. A kimeneti feszültség 0V. Egészen 2V-ra kell emelni a bemeneti feszültséget, hogy a LED fénye kigyulladjon, ekkor a dióda éppen csak bekapcsol 0,4V esik a kapcsain. 5V-ra növelve a tápfeszültséget, a dióda teljesen kinyit. A led felragyog és a cél áramköre 4,3V jut.

![](/assets/images/elektro/6/e22.jpg)

A lényeg hogy a szilícium dióda nem fog addig bekapcsolni, amíg nem esik rajta a 0,7V. Ha egyszer már bekapcsolt, nem is fog tovább nőni kapcsai között ez a feszültség.

### Nyitóirányú előfeszítés

![](/assets/images/elektro/6/e20.jpg)

Ez azt jelenti, hogy ha áram folyik keresztül egy diódán, akkor mindig kell számítanunk feszültségesésre a kapcsai között. Ez a feszültségesés függ a hőmérséklettől, az áramtól és a dióda típusától is.

A küszöbfeszültség szilícium félvezető esetén 0,6 - 0,7 V, germánium félvezető esetén pedig 0,2 - 0,3V. Ha tovább növeljük a feszültséget, akkor az ábrán láthatjuk, hogy az áram növekedése kezdetben exponenciálisjellegű, később pedig lineárissá válik. Ebből pedig az következik, hogy a dióda nem lineáris áramköri elem, a rajta átfolyó áram és a rajta eső feszültség nem egyenesen arányos.

![](/assets/images/elektro/6/e23.jpg)

Mivel jelentős, áram a nyitófeszültséget átlépve jelenik meg a diódán, ez azonosítjuk a nyitási tartomány kezdetének is. A lezárási tartományban. A diódán nem folyik jelentősebb áram. Jó közelítéssel ebben az állapotban legtöbbször szakadásnak tekinthető. Fordított polaritású feszültség rákapcsolásakor a letörési tartományban a lavinaeffektus érvényesül, melynek hatására a görbe hirtelen nagy meredeksége letörik. Ezt a meredekváltozást ismét egyenessel közelítve definiálható. A letörési feszültség, vagy más néven a zéner feszültség. A hirtelen kialakult nagy nyitóirányú vezetőképesség nagy áramot, ez pedig jelentős felmelegedést okoz. A félvezetőeszköz védelme érdekében ezt a kialakult jelentős áramot korlátozni kell.
A félvezető diódákat általában üzemszerűen nem is működtetjük ebben a tartományban, kivéve a zéner diódát. 


### Dióda kapcsolások

![](/assets/images/elektro/6/e24.jpg)

A diódák az áramkörök védelme mellett alkalmasak a feszültség csökkentésére és stabilizálására is. Az első esetben azt használjuk ki, hogy a diódák kapcsain 0,6-0,7V feszültség esik, és a nyitó feszültség csak kis mértékben függ a rajta folyó áramtól.

![](/assets/images/elektro/6/e25.jpg)
Most az ábrának megfelelően kössük sorba egymással a három diódát és a terhelő áramkört, multiméterrel pedig egyesével mérjük meg a feszültséget az áramkör egyes pontjain az ábrának megfelelően. A három dióda sorba kötésével. A kezdeti 5V bemenő feszültséget végül 3Vra tudtuk lecsökkenteni. A LED-et a soros áramkorlátozó ellenállással már csak erre a feszültségértékre kell méretezni.

A legegyszerűbb feszültség, stabilizátor kapcsolás az úgynevezett elemi stabilizátor, amely egy előtétellenállásból és egy diódából áll. Kis feszültségek esetén stabilizálásra alkalmas a nyitóirányban előfeszített szilícium dióda vagy diódák soros kapcsolásai is. 

![](/assets/images/elektro/6/e26.jpg)

A nyitóirányú jelleggörbe mutatja, hogy a diódán átfolyó áram változásától nem függ jelentősen a rajta esett feszültség és ezt használjuk ki stabilizálásra. A feszültségstabilizáló áramkörünk nagyon hasonló az előzőhöz, csak itt párhuzamosan kötjük a terhelést a sorba kötött diódákkal és előtétellenállással. A diódák,  stabilizátorok méretezése,gyakorlatilag a soros előtét ellenállás meghatározására korlátozódik.

![](/assets/images/elektro/6/e27.jpg)

Az áramkör azért tekinthető stabilizátornak, mert a bemeneti feszültség 4V változására a kimeneti feszültség csak 0,7V változik meg. Érdemes megjegyezni, hogy a Szilícium diódák nem a legszerencsésebb megoldást biztosítják a feszültség stabilizálására, hiszen a hőfokváltozás hatásai jelentős, elterjedtebb, ezért a szélesebb feszültségtartományban használható zénerdiódási elemi stabilizátor.

![](/assets/images/elektro/6/e28.jpg)

### Hogyan tudjuk eldönteni, hogy egy dióda kibírja majd a rajta átfolyó áramot?

![](/assets/images/elektro/6/e29.jpg)

A diódán eldisszipált hőteljesítményt a diódán átfolyó áram és a rajta eső feszültség szorzata adja. Ha 2A folyik keresztül a diódánkon, aminek nyitóirányú feszültsége 0,7V, akkor egy 1,4W hőteljesítménnyel számolhatunk.

Ha ez nem fogadható el, akkor nagyobb vagy más típusú diódát kell választanunk. A félvezető dióda volt az első, egy PN átmenetet tartalmazó félvezető eszköz. Ma is fontos szerepe van, hiszen a nagy távolságokra is eljuttatható váltakozó feszültség nem alkalmas elektronikus készülékek táplálására. 

![](/assets/images/elektro/6/e30.jpg)

A váltakozó feszültség egyenirányítását diódák segítségével végezzük. Ezenkívül alkalmasak az áramkörök védelmére, impulzusformálásra, szint eltolásra, illetve még számos egyéb, speciális feladattal kialakított dióda típus is létezik.
