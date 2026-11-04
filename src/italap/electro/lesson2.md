# 2. tananyag

Az előző alkalommal megismerkedtünk a feszültség, az áramerősség és az ellenállás fogalmával. Most újra átvesszük az eddigieket, csak egy kicsit másképpen, valamint megnézzük azt is, hogy milyen matematika összefüggés rejtőzik meg a háttérben, megismerkedünk, az egyik legjelentősebb törvénnyel, az Ohm-törvénnyel, ami nélkül elég nehéz elboldogulni az elektronika világában.

![](/assets/images/elektro/2/e1.jpg)

## Analógia

Az elektromosság megértése nem is olyan egyszerű feladat mint ahogy elsőre gondolnánk. Ennek az elsődleges oka az, hogy nehéz elképzelnünk, nehéz képet alkotnunk a jelenségről, hogy közelebb kerüljünk az elektromosság megértéséhez célszerű bevezetni egy régi de jól bevált analógiát.

![](/assets/images/elektro/2/e2.jpg)

### A hidraulikus analógia 1.

Az elektromosság hasonlóan működik, mint a víz. Képzeljünk el egy csővezetékből felépített hálózatot, amelyben a folyadékot a gravitáció ellenében egy pumpa mozgatja, keringeti. A vízvezeték cső a benne lévő vízcseppeket továbbítja hasonlóan az elektromos vezetékhez, amely a töltéshordozó elektronokkal az elektromos energiát szállítja. A rendszerben a pumpa az elektromos áramforrás, például az elem vagy az akkumulátor szerepét tölti be. A víz hálózatunkban szerepel még egy szabályozócsap is, amely változtatható ellenállásként képzelhető el. Valamint található még egy vízikerék is, ami pedig egy villanymotornak feleltethető meg legkönnyebben. Ez az elrendezés analóg egy elektromos hálózattal, áramkörrel. A vízvezetékben nyomás van a pumpa miatt, ami a feszültségnek feleltethető meg.

![](/assets/images/elektro/2/e3.jpg)

### Az elektromos feszültség

A víz csak akkor áramlik, ha két pont között a nyomás nullától különböző. Ez nincsen másképpen az elektromosságban sem. Ha nincs feszültség nincs áramlás sem. Ha az áramot folyadékként képzeljük el, akkor a feszültség egy fajta elektromos nyomásnak tekinthető.

![](/assets/images/elektro/2/e4.jpg)

### Az áramforrás

Amikor egy 9 voltos elemről beszélünk, akkor tulajdonképpen azt mondjuk, hogy 9 volt feszültség különbség mérhető az elem két pólusa között. Az elem a legegyszerűbb áramforrás, melyben egy vegyi folyamat játszódik le. Ennek következtében szabad elektronok keletkeznek, ezek egyik irányból a másikba folynak.

![](/assets/images/elektro/2/e5.jpg)

Például képzeljük el az elem belsejét két víztartályként. Az egyik legyen tele, a másik pedig üres. Ha most összekötjük őket egy csővel, akkor a víz addig folyik át rajta az egyik irányba, míg az üres tartályban ugyan annyi víz nem lesz mint korábban a teli tartályban. 

![](/assets/images/elektro/2/e6.jpg)

Tehát a két mennyiség kiegyenlítődik. Ugyan ezt csinálják az elektronok az elem belsejében az egyik szélétől a másik felé haladnak.

![](/assets/images/elektro/2/e7.jpg)

### A hidraulikus analógia 2.

Amikor a csap teljesen el van zárva nem folyik víz a hálózatban ez olyan, mint amikor az elektromos hálózatban a fogyasztó ki van kapcsolva. Amikor kinyitjuk a csapot a nyomás hatására a víz a pumpától áramolni kezd és mozgásba hozza a kereket. 

![](/assets/images/elektro/2/e3.jpg)


#### Az elektromos áram

A csővezetéken adott idő alatt keresztül áramló folyadék mennyisége az áramerősségnek feleltethető meg. Ez a hasonlat segít megérteni, hogy az áramerősség függ a feszültségtől példánkban a pumpa erejétől valamint az ellenállásától vagyis, hogy a csap mennyire van nyitva.

![](/assets/images/elektro/2/e8.jpg)

#### Az elektromos ellenállás

Az analógiánk még az ellenállás keresztmetszettől való függését is segít megérteni. Egyszerűen beláthatjuk, hogy a kis keresztmetszetű cső jobban akadályozza a víz áramlását, mint a nagy. Ha azt akarjuk, hogy a kerék gyorsabban forogjon jobban meg kell nyitnunk a csapot vagy nagyobb átmérőjű csövet kell alkalmaznunk, azaz csökkentenünk kell az ellenállást és növelni a pumpa nyomását vagyis a feszültséget.

![](/assets/images/elektro/2/e9.jpg)

### Hidraulikus analógia összefoglalása

Összefoglalva a fentieket, amikor például egy 9 voltos elemet használunk, képzeljük el az elem feszültségét, mint víznyomást. A vízfolyás elektromos megfelelője az áram erősség. A csap pedig egy változtatható ellenállásnak tekinthető, amellyel az áramnak a folyását akadályozzuk. Ez a három mennyiség egymással szoros kapcsolatban áll a kapcsolatot, pedig az Ohm törvény fogalmazza meg.

![](/assets/images/elektro/2/e10.jpg)

## Ohm törvénye

![](/assets/images/elektro/2/e11.jpg)

Ohm német tudós volt, nevéhez fűződik az elektromosság egyik legjelentősebb törvénye. Az Ohm törvény kimondja, hogy az áramkörben kapcsolt fogyasztó sarkain mérhető feszültség és a feszültség hatására a fogyasztón átfolyó áram erőssége egyenesen arányos, ha a fogyasztó hőmérséklete állandó:

**U = R * I**

Ohm törvényét legkönnyebben a képletpiramis segítségével tudjuk megjegyezni.

![](/assets/images/elektro/2/e12.jpg)

### Összefoglalás

Megismerkedtünk az Ohm törvényével ami kimondja, hogy a feszültség és az áramerősség egymással egyenesen arányos. Tehát hányadosuk állandó, ez az állandó a fogyasztóra jellemző adat és a fogyasztó elektromos ellenállásnak nevezzük. Már nem vagyunk messze attól, hogy valóban megtervezzük és megépítjük első áramkörünket, de addig még pár kisebb elméletet át kell rágnunk.

![](/assets/images/elektro/2/e13.jpg)

## Az elektromos teljesítmény

Feljebb megismerkedtünk egy régi, de jó bevált analógiával, miszerint az elektromosság a vízhez hasonlóan működik. Most pedig az energiaátalakulásokkal és a hozzájuk szorosan kapcsolódó fogalmakkal fogunk megismerkedni.

### A hidraulikus analógia 3.

![](/assets/images/elektro/2/e14.jpg)

Az analógia szerint a feszültség a víznyomásnak, a vízhozam pedig az áramerősségnek feleltethető meg. Az analóg vízvezeték hálózatunkban szerepelt még egy csap is ami az ellenállás szerepét töltötte be. Ebben a rendszerben ha azt akartuk, hogy a kerék gyorsabban forogjon jobban meg kellett nyitnunk a csapot azaz csökkentenünk kellett az ellenállást és növelni a pumpa nyomását, vagyis növelni kellet a feszültséget. A másik dolog amit észre lehet venni azaz, hogy a kerék forgása közben a tengelye kicsit felmelegszik. A tengelynél létrejövő súrlódás, melegedést tehát energia veszteséget okoz. Fontos, hogy megértsük hogy nem az összes energia alakítható át mozgássá, mert egy része nem hasznosul, hanem hő energiává alakul. A továbbiakban az energia átalakulásokkal és hozzájuk szorosan kapcsolódó fogalmakkal fogunk megismerkedni. 


### Elektronok áramlása

Zárt áramkörben az elektromos berendezésekben különféle energia átalakulások játszódnak le.

Az elektromos energia az izzóban: 
- fény, hő energiává.

A villanymotorokban:
- mechanikai energiává.

A hősugárzó fűtőszálában:
- hő energiává alakul át.

![](/assets/images/elektro/2/e15.jpg)
:::tip 🔋
Miközben az elektromos energia más energiává alakul át, az elektromos áram munkát végez.
:::

![](/assets/images/elektro/2/e16.jpg)

Tudjuk, hogy az elektromos tulajdonságú részecskék az elektromos mező hatására áramlanak. Ilyenkor az elektromos mező munkát végez. Az elektromos mezőt munkavégzés szempontjából pedig a feszültség jellemzi. A feszültség, az elektromos munka és a közben áramlott elektromos töltés hányadosaként határozható meg. 

![](/assets/images/elektro/2/e17.jpg)

Ebből következik, hogy az elektromos munka a feszültség és az átáramló töltés szorzataként számítható ki vagyis: **W = U * Q.**



### A fizikai teljesítmény


A munkavégzés közben gyakran a munka nagysága mellett az is fontos kérdés, hogy mennyi idő alatt zajlik le a folyamat. Sokkal jobbnak érezzük például azt a síliftet - felvonót - amelyik ugyanabban a magasságba rövidebb idő alatt húz fel bennünket. Pedig ez sem végez rajtunk több munkát, hiszen végül is ugyan olyan magasról csúszhatunk le. Azt a fizikai mennyiséget amely megadja a munkavégzés sebességét, tehát, hogy egységnyi idő alatt mennyi a végzett munka teljesítménynek pontosabban átlagteljesítménynek nevezzük.

![](/assets/images/elektro/2/e18.jpg)

:::tip Érdekesség

![](/assets/images/elektro/2/e19.jpg)

A közhiedelemmel ellentétben Watt nem találta fel a gőzgépet. Watt találmánya a vízgőz lecsapására szolgáló gőzkondenzátor volt amellyel a gőzgép hatásfokát, gazdaságosságát növelte meg jelentősen.

:::



### Az elektromos teljesítmény



Az elektromos folyamatok egyik fontos jellemzője a teljesítmény, ami az energia átalakulásának sebességét fejezi ki.
Emlékezzünk vissza egy kicsit miközben az elektromos energia más energiává alakul át az elektromos áram munkát végezz. A teljesítmény ennek az átalakulásnak a sebességét fejezi ki. Általánosan tehát igaz, hogy egy fogyasztó elektromos teljesítménye megegyezik a fogyasztóra kapcsolt fezsültség és a rajta átfolyó áramerősség szorzatával.
![](/assets/images/elektro/2/e20.jpg)
Képlet segítségével ezt így fejezhetjük ki: **P = U * I**

Az összefüggés természetesen a mértékegységekre is vonatkozik: **1 watt = 1 volt * 1 amper**
![](/assets/images/elektro/2/e21.jpg)
A víz analógia alapján a teljesítmény egyenlő a víznyomás szorozva a vízhozammal.
A fogyasztók összehasonlítására a teljesítményt használjuk. A 100W izzó azért világít jobban mint a 60W mert benne ugyanannyi idő alatt nagyobb energia változás jön létre.


## Az egyszerű áramkör felépítése és működése

Igaz foglalkoztunk már vele de érdemes még egy kis időt szentelni a témának.
A legegyszerűbb áramkör egy termelőből, egy fogyasztóból és az őket összekötő vezetőből áll.
Az áramkör elemeinek elnevezése egyébként utal a körön belüli energiai viszonyokra is. A termelőt szokás még forrásnak, illetve generátornak is nevezni.
![](/assets/images/elektro/2/e22.jpg)
Teljes terhelésnél a fogyasztó esetünkben a villanykörte névleges teljesítményt add le. Ekkor névleges áram folyik át rajta és a kapcsai között névleges feszültség mérhető. A valóságban viszont a műszaki berendezések által leadott teljesítmény - *mivel a veszteségek nem szüntethetők meg teljesen* - mindig kisebb mint amennyit a berendezés felvett.

### Vezetékek ellenállása

A forrástól a fogyasztóig az elektromos energiát vezetékek segítségével juttatjuk el. A vezetékeknek viszont az ábrának megfelelő összefüggés alapján meghatározható ellenállásuk van.

![](/assets/images/elektro/2/e23.jpg)

Ez az ellenállás érték ugyan kicsi, de a rajta átfolyó áramerőség hatására a vezetékben Pv nagyságú hő teljesítmény keletkezik. Ez jobb esetben csak a generátor hasznos teljesítményét csökkenti, rosszabb esetben komolyabb károkat is okozhat.

![](/assets/images/elektro/2/e24.jpg)

Most térjünk át arra, hogy mi a rövidzár. Ha az áramforrás két kivezetését közvetlenül összekötjük egy rövidzárat hozunk létre. A rövidzár a legnagyobb terhelés az áramforrás számára. A vezetékek túlhevülhetnek és spontán kigyulladhatnak.

![](/assets/images/elektro/2/e25.jpg)

:::danger ⚠️
Nagyon fontos, hogy soha ne zárjunk rövidre áramforrást. 
:::


### Áramsűrűség

A vezetékek melegedésére az áramsűrűség a legjellemzőbb mennyiség, amely az egységnyi keresztmetszeten átfolyó áramerősséget mutatja meg.

Jele: **J**

**J = I / A**

![](/assets/images/elektro/2/e26.jpg)

Az összefüggésben az **A**, vezeték keresztmetszete mm^2-ben, az **I** pedig a rajta keresztül folyó áramerőssége. Ezt azt jelenti, hogy ugyanakkora áramerősség esetén egy vezetékben az áramsűrűsség a kisebb keresztmetszetű részben nagyobb. Tehát a vezetékek legkisebb keresztmetszete határozza meg azt a maximális áramerősséget amit még elvisel. 




### Biztosíték

1. Rövidzár a legnagyobb terhelés az áramforrás számára, a vezetékek túlhevülhetnek és spontán kigyulladhatnak.
2. Fontos, hogy a vezetékek keresztmetszete mindig a terheléshez legyen igazítva - méretezve.
3. A rövidzár esetén egy tervezett könnyítés megszakítja az áramkört, így megvédhetjük az áramkör többi részét a károsodástól.

![](/assets/images/elektro/2/e27.jpg)

A rövidzár káros következményeinek megakadályozására szolgál a biztosíték. Régebben az áram hő hatásán alapuló olvadó biztosítékokat használtak ami a megengedettnél nagyobb áramerősség hatására megolvadt és így megszakította az áramkört. A lakásokban ma már inkább az úgy nevezett automata biztosíték használatos amely az áram mágneses hatásán alapul.

![](/assets/images/elektro/2/e28.jpg)

Egy átlagos lakás esetén 16A méretezett biztosítékot szoktak használni. Ez azt jelenti, hogy mellék áramkörökből legfeljebb 16A áramerősség folyhat össze a főáramkörbe. A hálózati feszültség 220 V. Mivel a teljesítmények is összeadódnak ezért legfeljebb annyi elektromos berendezést használhatunk egyszerre amennyinek az összteljesítménye nem haladja meg a 

**P = 16A * 220V = 3520W** 

értéket. Ha ezt mégis túllépnénk a biztosíték kiold és megszakítja az áramkört.

