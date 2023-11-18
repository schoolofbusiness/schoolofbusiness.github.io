# 6. tananyag

A soros, a párhuzamos és a vegyes kapcsolásokkal ismerkedünk meg. A tanultakat a gyakorlatban is kipróbáljuk, sorosan és párhuzamosan kötünk LED-eket, az Ohm-törvény segítségével méretezzük az áramkorlátozó ellenállást és begyakoroljuk mindazt, amiről eddig szó esett.


## Soros és párhuzamos kapcsolások

Azt már tudjuk, hogy áram csak zárt áramkörben folyik és a pozitív töltéshordozók áramlását tekintjük elektromos áramnak. 

![](/assets/images/elektro/4/e2.jpg)

Még akkor is ha tudjuk hogy valójában a negatív töltésű elektronok áramolnak a pozitív töltésű lyukak felé. 

![](/assets/images/elektro/4/e3.jpg)

### Rekombináció

Amikor egy elektron kitölt egy lyukat azt rekombinációnak nevezzük. A fizikai magyarázattal szemben a modellben mindig a pozitív töltéshordozók mozdulnak el, ezt technikai áramiránynak nevezzük, mivel a gyakorlatban ezt alkalmazzuk. Az áramkörök rajzaiban a folytonos fekete vonal rövidzárlat, azaz végtelenül kis ellenállást jelent.

![](/assets/images/elektro/4/e4.jpg)

### Rövidzár

Ha két pontot rövidzárral kötünk össze, akkor azonos potenciálú pontokká válnak, vagyis a rövidzáron a feszültség nulla.

![](/assets/images/elektro/4/e5.jpg)

### Szakadás

A megszakított áramkört a szakadás jelképezi. A szakadáson sosem folyik áram.

![](/assets/images/elektro/4/e7.jpg)

Ha egy áramforrás kapcsait rövidre zárjuk akkor végtelen kis ellenállással terheljük meg, mert az fent szeretné tartani a potenciálkülönbséget mi pedig el szeretnénk tüntetni azt. A maximális terhelés rövid időn belül tönkreteszi a generátort ezért ennek elkerülésére egy fogyasztót kell beilleszteni az áramkörbe. A generátor fenti sarkainál töltés felhalmozódás jelenik meg. Amennyiben az ellenálláson keresztül zárjuk az áramkört, akkor pozitív töltéshordozók elindulnak az óramutató járásával megegyezően, létrejön tehát az elektromos áram. 

![](/assets/images/elektro/4/e8.jpg)

Ebből a példából az is jó látszik, hogy mire használhatóak az ellenállások. Az ellenállások legfontosabb szerepe az áram korlátozása. Minél nagyobb ellenállás kapcsolunk a generátorra, annál kisebb áram folyik az áramkörben, melynek nagyságát az Ohm törvény segítségével tudjuk számítani. További kérdéseket vet fel a megismert kétpólusú alkotóelemek különféle összekapcsolása.  Egy összetett áramkör ugyanis az alkotóelemek soros, párhuzamos vagy az ezekből kialakított vegyes kapcsolásokból áll.
De mit is jelentenek ezek a kifejezések?

![](/assets/images/elektro/4/e9.jpg)

### Soros kapcsolás

Ha egy áramkört úgy állítunk össze, hogy nincs benne elágazás, akkor az ellenállásokat sorosan kapcsoltuk az áramforrásra.
Ilyen kapcsolás esetén azt tapasztaljuk, hogy a sorba kapcsolt ellenállások értékei összeadódnak.
A kérdés csak az, hogy miért?


#### Autópálya fizetőkapu 

![](/assets/images/elektro/4/e10.jpg)

Képzeljük el most magunkat egy nagy forgalmú autópályán, ahol fizetőkapukon kell keresztül haladnunk hogy elérjük utazásunk célját.
Ebben a példában a pálya a vezető. A fizetőkapuk pedig az ellenállás, ami lassítja az elektronok - akarom mondani a járművek mozgását.

#### Egy fizetőkapu - egyszerű áramkör

![](/assets/images/elektro/4/e11.jpg)

Amíg csak egy ilyen kapun kell keresztül haladnunk viszonylag nyugodtak vagyunk. A forgalom folyamatos.

#### Sorosan kapcsolt fizetőkapuk

![](/assets/images/elektro/4/e12.jpg)

Más a helyzet akkor ha egymás után a három kapun kell végighaladunk. Ebben az esetben hiába végzett a fizetéssel a hármas kapunál a sárga. a kettes kapunál pedig a kék színű jármű sofőrje. Egészen addig nem tudnak tovább haladni, míg az egyes kapunál be nem fejezi a fizetést a zöld jármű vezetője. A várakozási idők vagyis az ellenállások összeadódnak. 


![](/assets/images/elektro/4/e13.jpg)

A gondolat kísérlet eredményeit fordítsuk át most az elektromosság nyelvére. Soros kapcsolás esetén az ellenállásokból álló hálózat helyettesíthető egyetlen ellenállással, amelyet a kapcsolás eredő ellenállásának nevezünk. Az eredő ellenálláson azonos kapocsfeszültség mellett, ugyanakkora áram folyik keresztül mint a sorba kapcsolt ellenállásokon. Ebből következik hogy az egyes ellenállásokon eső feszültségek az ellenállás értékekkel egyenesen arányosak. 

#### Karácsonyfa égősor

![](/assets/images/elektro/4/e14.jpg)

A soros kapcsolásra jó példa a karácsonyfa égősor vagy fényfüzér. A karácsonyfa izzók üzemi feszültsége általában 3V. Ezért ha közvetlenül az otthoni 220V-os hálózatra kötjük őket, azonnal tönkremennek. Viszont, ha elegendő számú izzót egymáshoz sorosan kötünk, akkor a hálózati feszültség máris megoszlik az egyes izzókon. Könnyedén kiszámíthatjuk hogy mennyi izzóra is lenne szükségünk a biztonságos működéshez.

220V osztva 3V-tal megkapjuk, hogy pontosan 73 darab fogyasztó soros kapcsolásra van szükségünk hogy minden izzóra 3V feszültség jusson. A soros kapcsolás hátránya, hogy ha az egyik fogyasztó karácsonyfaégő hibás nem világít akkor több izzó sem fog kapni áramot. A fényfüzér nem fog világítani. Ilyenkor nincs mit tenni ki kell cserélnünk a hibás égőt egy pótizzóra, ha azonban a pótizzók már hiányoznak csak azonos névleges feszültségű vagy annál 1-2V-al magasabb értékű és a foglalatba pontosan illő új darabbal szabad a cserét végrehajtani.

![](/assets/images/elektro/4/e15.jpg)

Miért fontos ez? Ha csere izzó üzemi feszültsége kisebb mint az izzósor többi elemé, akkor túlmelegedés léphet fel aminek következtében kiéghet. Soha nem szabad például gyors megoldásként egy két foglalattal csökkenteni a füzért, mert ezzel az összes égő veszélyesen túlmelegedhet ami tűzveszélyt okozhat. 

### Párhuzamos kapcsolás

![](/assets/images/elektro/4/e16.jpg)

A másik lehetőség az ellenállások összekapcsolására a párhuzamos kapcsolás. Ilyenkor a feszültségforrás két kivezetésére úgy kapcsolunk ellenállásokat, hogy minden ellenállás egyik csatlakozása a feszültségforrás egyik kivezetéséhez másik csatlakozása a feszültség forrás másik kivezetéséhez kapcsolódik. A kapcsolt ellenállásokra ugyanakkora feszültség jut, mert a vezetékkel összekötött pontok ekvipotenciálisak. Az ábrán látható három izzó vagyis ellenállás párhuzamos kapcsolásakor a kapott új eredő ellenállás nagysága nem egyezik meg az ellenállások összegével. 

#### Párhuzamosan kapcsolt fizetőkapuk

![](/assets/images/elektro/4/e17.jpg)

Hogy megértsük miért van ez így, képzeljük magunkat újra egy nagy forgalmú autópályára ahol fizetőkapuk nem egymás után hanem egymás mellett vannak elhelyezve. A párhuzamosan kapcsolt kapukon egyszerre három gépjármű is keresztül haladhat így az áthaladás sokkal akadálymentesebb mint az előző esetben. A várakozási idők nem adódnak össze az eredő ellenállás tehát lecsökken. 

![](/assets/images/elektro/4/e18.jpg)

A párhuzamosan kapcsolt ellenállások szintén helyettesíthetőek egy eredő ellenállásal, amelyen ugyanakkora kapocsfeszültség esetén ugyanakkora áram folyik mint párhuzamosan kapcsolt ellenállásokon. Párhuzamos kapcsoláskor az eredő ellenállás reciprokát kapjuk meg, ha párhuzamosan kapcsolt ellenállások reciprokait összeadjuk.

#### Replusz művelet

![](/assets/images/elektro/4/e19.jpg)

A mérnöki gyakorlatban a számítás egyszerűsítésére bevezették a replusz műveletet ahol az ellenállások szorzatát osztjuk azok összegével. A műveletben a nagy x a replusz művelet aminek a jelentése, ezeket az ellenállásokat a párhuzamos eredő szabálya szerint kell összevonni.

![](/assets/images/elektro/4/e20.jpg)

Tehát ha párhuzamosan kapcsolunk egy 100 Ohmos és egy 470 Ohmos nagyságú ellenállást akkor a replusz művelet az alábbi lesz.
Mi a helyzet akkor ha három vagy annál több párhuzamosan kapcsolt ellenállás eredőjét szeretnénk kiszámolni?

![](/assets/images/elektro/4/e21.jpg)

Replusz műveletet szigorúan csak két ellenállásra alkalmazhatjuk egyszerre. Ezért páronként kell összevonni az ellenállásokat míg végül eljutunk az eredő ellenállásig. Ha például egy 100, 470 és 300 Ohmos párhuzamosan kapcsolt ellenállás eredőjét keressük, akkor tetszőleges két ellenállást kiválasztva a replusz művelettel összevonhatjuk őket. 

![](/assets/images/elektro/4/e22.jpg)

Majd ezt a műveletet addig ismételjük még csak egyetlen egy ellenállás nem marad az eredő ellenállás.


![](/assets/images/elektro/4/e23.jpg)

A párhuzamosan kapcsolt ellenállásokon eső feszültség azonos ezért a főág áramerőssége amely azonos az eredő ellenálláson átfolyó áramerősséggel egyenlő a mellékágak áram erősségének összegével, mert a töltésmegmaradás törvénye szerint a fő ágból érkező összes töltés a mellékágakban oszlik szét. 


#### Áram olyan mint a víz...


Szokták mondani hogy az áram olyan mint a víz mindig a legkisebb ellenállás felé folyik. A víz analógia nagyon szemléletes, mégis megtudja olykor zavarni az ember gondolkodását. Az előbbi megfogalmazást ugyanis úgy kell értenünk hogy ha töltések előtt több út is adódik - lásd párhuzamos kapcsolás - akkor a töltések mindig minden irámyban haladni fognak. Ahol kisebb az ellenállás ott több ahol pedig nagyobb ott kevesebb. Olyan nem fordulhatelő hogy senki ne válassza a nagyobb ellenállásra terhelt útvolat. De vajon miért?

![](/assets/images/elektro/4/e24.jpg)

Képzeljük el azt, hogy az autóvezetők el akarnak jutni A városból B-be, de az útvonalat egy hatalmas folyó keresztezi. A folyón hídak segítségével lehet áthaladni amíg a hidak le vannak zárva mindenki várakozik. Amint megnyitják őket elindul a forgalom. A gépjárművek elkezdenek áramolni. Az ábrán látható hidak szélessége fogható fel úgy mint ellenállás, mert meghatározza, hogy adott időn belül hány gépjármű tud áthaladni az adott hídon. A szélesebb kisebb ellenállású hídon több még a keskenyebb nagyobb ellenállású hídon kevesebb gépjármű tud keresztül haladni ugyanannyi idő alatt. Azt most már könnyen beláthatjuk, hogy egységnyi idő alatt úgy tud át jutni a folyón a legtöbb jármű ha mind a két hidat egyszerre használják a vezetők.

![](/assets/images/elektro/4/e6.jpg)

Párhuzamos kapcsolása igen jó gyakorlati példa az elosztó. Ahol minden fogyasztónak például számítógép, mosógép, porszívó szüksége van 220V-ra. 


### Vegyes kapcsolás

![](/assets/images/elektro/4/e25.jpg)

Ellenállásokat úgyis kapcsolhatunk az áramkörbe, hogy abban soros és párhuzamos kapcsolás is szerepel ekkor vegyes kapcsolásról beszélünk. Azokban az esetekben amikor egy hálózat felbontható soros és párhuzamos kapcsolásokra, úgy határozzuk meg az eredő ellenállást,  hogy lépésenként egyre egyszerűbb kapcsolásokra a vezetjük vissza az eredeti áramkört.


### Sorba kapcsolt LED-ek

Most következzen a LED-ek soros kapcsolása. Soros kapcsolás esetén az egyik LED anódját a következő LED katódjához kötjük, így sors kapcsolat jön létre.

A kapcsolás összeállításakor ügyeljünk arra, hogy csak azonos típusú LED-eket kapcsoljunk egymáshoz. A nyitó feszültségek az előtét ellenállás szempontjából összeadódnak, vagyis két darab 5 miliméteres piros LED soros kapcsolás esetén 1,8V fog esni az egyik és 1,8V fog esni a másik LED-en. Összesen tehát 3,6V kell számolnunk az ellenállás méretezésekor. Most már ki tudjuk számolni az előtét ellenálláson eső feszültség nagyságát, ha ismerjük a bemenő feszültség nagyságát.
5V - 3,6V = 1,4V. 

![](/assets/images/elektro/4/e26.jpg)

A LED adatlapján azt is megtudjuk, hogy maximum 20 mAh folyhat a LED-en mi azonban biztonsági megfontolásokból a maximális áram felében azaz 10 mAh fogunk számolni. Az Ohm törvény felhasználásával számíthatjuk a szükséges ellenállás nagyságát. A kapott érték 140 Ohm ilyen a szabványos ellenállás sorban nem található, ezért kiválasszuk a hozzá legközelebb eső 150 Ohmos ellenállás értéket. 

![](/assets/images/elektro/4/e27.jpg)

Az áramkör összeállítása után essen néhány szó a hatásfokról is. Soros kapcsoláskor az ellenálláson elvesztett teljesítményt, azaz veszteséget a már ismert P = U * I képlet alapján tudjuk számítani. A veszteség után számítjuk ki az összes befektetett teljesítményt. Majd a hasznos teljesítményt megkapjuk a befektetettből kivonjuk a veszteséget. Végül számítani tudjuk a hatásfokot, azaz el kell osztanunk a hasznos teljesítményt a befektetett teljesítménnyel és láthatjuk 72%-ot kapunk.


### Párhuzamosan kapcsolt LED-ek

A LED-eket párhuzamosan is össze tudjuk kapcsolni. Ilyenkor az egyik LED anódját a másik LED anódjához, katódját pedig a másik LED katódjához kötjük, így párhuzamos kapcsolás jön létre. LED-ek párhuzamos kapcsolásakor is nagyon fontos, hogy csak azonos típusú ledeket kössünk össze.

![](/assets/images/elektro/4/e28.jpg)



Példánkban két darab 5 miliméteresres piros LED párhuzamos kapcsolása esetén a létrejövő csomópontból kétszer 10 mAh áram folyik ki így a befolyó áramnak is 10 mAh + 10 mAh az az 20 mAh-nek kell lennie. A párhuzamosan kapcsolt LED-ek kapcsain azonos feszültség esik. Az előtét ellenállás számítását az előző példához hasonlóan tudjuk elvégezni. Az ellenálláson eső feszültség 5V - 1,8V azaz 3,2V. Az előtét ellenállás nagyságát az Ohm törvény segítsgével tudjuk meghatározni. Ebben a példában 160 Ohm-os értéket határoztunk meg. Ilyen nincsen a szabványos ellenállás sorban, ezért a hozzá legközelebb álló 150 Ohm-os értékű ellenállással kell dolgoznunk.

![](/assets/images/elektro/4/e29.jpg)

Ha most a teljesítménnyel kapcsolatos számításainkat itt is megismételjük akkor azt tapasztaljuk, hogy a hátsfok kisebb értékre adódik.


### Soros vagy párhuzamosan ?

![](/assets/images/elektro/4/e30.jpg)

Felvetődhet a kérdés, hogy a LED-eket sorosan vagy párhuzamosan kapcsoljuk ha az áramot előtét ellenállással korlátozzuk. Látható a számítások alapján, hogy párhuzamos kapcsolás esetén mennyivel rosszabb a hatásfok tehát sokkal több energia megy kárba az ellenálláson. Előtét ellenállásos áramkorlátozás esetén lehetőség szerint minnél több LED-et kapcsoljunk sorosan és csak akkor használjunk párhuzamos kapcsolást ha a bemeneti feszültség már nem teszi lehetővé a LED-ek soros kapcsolását.