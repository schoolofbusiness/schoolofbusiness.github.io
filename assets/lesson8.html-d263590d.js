import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as n,a as t}from"./app-6f275e76.js";const e={},l=t(`<h1 id="_8-tananyag" tabindex="-1"><a class="header-anchor" href="#_8-tananyag" aria-hidden="true">#</a> 8. tananyag</h1><h2 id="a-css-fuggvenyek" tabindex="-1"><a class="header-anchor" href="#a-css-fuggvenyek" aria-hidden="true">#</a> A CSS függvények</h2><p>A CSS függvények olyan eszközök, amelyek lehetővé teszik a webfejlesztők számára a stílusok és formázások precíz meghatározását. Ezek a függvények segítenek a színválasztásban (<code>rgb()</code>, <code>rgba()</code>, <code>hsl()</code>, <code>hsla()</code>), külső erőforrások beágyazásában (<code>url()</code>), és matematikai műveletek végrehajtásában (<code>calc()</code>) a CSS tulajdonságokban. A függvények alkalmazása lehetővé teszi a kreatív és rugalmas tervezést a weboldalak kialakításában.</p><h3 id="url-fuggveny" tabindex="-1"><a class="header-anchor" href="#url-fuggveny" aria-hidden="true">#</a> <code>url()</code> függvény</h3><p>A <code>url()</code> függvény a webfejlesztők számára egy hatékony eszköz, amellyel külső erőforrásokat, például képeket vagy betűtípusokat lehet beállítani az elemekhez. Egy egyszerű példa a háttérkép beállítására:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;kep.jpg&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Ezzel az egyetlen sorral könnyedén hozzáadhatunk egy háttérképet az oldalhoz. A <code>url()</code> függvény rendkívül hasznos, ha képek vagy más erőforrásokat kell hivatkozni.</p><h3 id="rgb-es-rgba-fuggvenyek" tabindex="-1"><a class="header-anchor" href="#rgb-es-rgba-fuggvenyek" aria-hidden="true">#</a> <code>rgb()</code> és <code>rgba()</code> függvények</h3><p>Az <code>rgb()</code> és <code>rgba()</code> függvények a színek megadására szolgálnak, különösen a háttérszínek vagy szövegszínek beállításakor. Az <code>rgb()</code> függvény három számot vár, amelyek a vörös, zöld és kék színkomponenseket reprezentálják. Például:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* Piros szín */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Az <code>rgba()</code> függvény lehetővé teszi az átlátszóság megadását a színhez, így a különböző átlátszósági szintekkel rendelkező színeket hozhatunk létre. Például:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* Félátlátszó kék */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Ezek a függvények a webfejlesztők számára pontos színválasztást biztosítanak, és lehetővé teszik az oldalak személyre szabását.</p><h3 id="hsl-es-hsla-fuggvenyek" tabindex="-1"><a class="header-anchor" href="#hsl-es-hsla-fuggvenyek" aria-hidden="true">#</a> <code>hsl()</code> és <code>hsla()</code> függvények</h3><p>Az <code>hsl()</code> és <code>hsla()</code> függvények egy másik módját kínálják a szín megadásának. A HSL (Hue, Saturation, Lightness) modell használatával definiálják a színeket. Az <code>hsl()</code> függvény segítségével könnyen meghatározhatók a színárnyalat, telítettség és világosság értékek. Például:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span>120<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* Zöld szín */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Az <code>hsla()</code> függvény ugyanezt teszi, de hozzáad egy negyedik értéket, az átlátszóságot. Például:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">hsla</span><span class="token punctuation">(</span>120<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 50%<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* Félátlátszó zöld */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Az <code>hsl()</code> és <code>hsla()</code> függvények kiválóan alkalmazhatók akkor, amikor a színek átlátszóságát is figyelembe szeretnénk venni.</p><h3 id="calc-fuggveny" tabindex="-1"><a class="header-anchor" href="#calc-fuggveny" aria-hidden="true">#</a> <code>calc()</code> függvény</h3><p>A <code>calc()</code> függvény egy matematikai műveleteket végrehajtó eszköz, amely lehetővé teszi a CSS tulajdonságok dinamikus beállítását. Például:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 20px<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Ezzel a sorral a szélességet ahol a szülőelem szélességéből 20 pixelt vonunk le. Ez hasznos lehet, amikor a stílusokat változókhoz vagy dinamikus tartalmakhoz kell igazítani.</p><p>Összességében a CSS függvények hatalmas előnyt jelentenek a webfejlesztők számára, mivel lehetővé teszik az egyszerű és hatékony stílusdefiníciókat, és rugalmasabbá teszik a tervezési folyamatot. A <code>url()</code>, <code>rgb()</code>, <code>rgba()</code>, <code>hsl()</code>, <code>hsla()</code> és <code>calc()</code> függvények közösen hozzájárulnak a weboldalak megjelenésének és funkcionalitásának javításához.</p><h2 id="css-reset" tabindex="-1"><a class="header-anchor" href="#css-reset" aria-hidden="true">#</a> CSS reset</h2><p>A CSS reset a webfejlesztők által használt technika, amelynek célja a böngészők alapértelmezett stílusai és formázásai által okozott különbségek kiegyenlítése, hogy egységes alapot teremtsen az oldalak tervezése során. A CSS reset segít a böngészők közötti összhang megteremtésében, és lehetővé teszi, hogy a fejlesztők teljes kontrollt szerezzenek az oldal stílusában.</p><h3 id="a-fo-celjai" tabindex="-1"><a class="header-anchor" href="#a-fo-celjai" aria-hidden="true">#</a> A fő céljai</h3><ol><li><p>Alapértelmezett stílusok eltávolítása: A böngészők különböző alapértelmezett stílusokat alkalmaznak az elemekre, például a margókat, a paddinget, a betűtípusokat és méreteket. A CSS reset eltávolítja vagy nullára állítja ezeket az értékeket, így a fejlesztők szinte nulláról indulnak a stílusok beállításakor.</p></li><li><p>Cross-platform összehangolás: A CSS reset célja az, hogy a különböző böngészőkben és platformokon a lehető legközelebbi megjelenést érjük el, így minimalizálva a böngészőfüggő stílusproblémákat.</p></li></ol><h3 id="a-hasznalatanak-modja" tabindex="-1"><a class="header-anchor" href="#a-hasznalatanak-modja" aria-hidden="true">#</a> A használatának módja</h3><ol><li><p>CSS reset fájl beillesztése: A CSS reset rendszerint egy külön CSS fájlban található. Ezt a fájlt a weboldal stíluslapja előtt kell beilleszteni, hogy azokat a böngésző alapértelmezett stílusokat felülírja, amelyeket a fejlesztő kíván eltávolítani vagy felülírni.</p><p>Példa a CSS reset fájl beillesztésére:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>reset.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>A CSS reset alkalmazása: Miután a CSS reset fájlt beillesztettük, az oldalon minden elem az alapértelmezett stílusok nélkül jelenik meg. Ezt követően a webfejlesztőknek saját stílusokat adhatnak hozzá az elemekhez, és azokat a tervezési igényeiknek megfelelően formázhatják.</p></li></ol><p>Fontos megjegyezni, hogy a CSS resetnek saját előnyei és hátrányai vannak. Bár segít az egységes megjelenés kialakításában, néhány stílus tulajdonság visszaállítása szükséges lehet a tervezői preferenciákhoz vagy a tervezési keretrendszerekhez való igazodás érdekében. Továbbá a CSS reset néha feleslegesen bővíti a CSS kódot, és növelheti az oldal betöltési idejét. Ezért érdemes megfontolni a projekt specifikus igényeket, mielőtt egy CSS resetet alkalmaznánk.</p><h2 id="html5-lapszerkezet" tabindex="-1"><a class="header-anchor" href="#html5-lapszerkezet" aria-hidden="true">#</a> HTML5-lapszerkezet</h2><p>Az HTML5 új elemeket vezetett be a weboldalak kialakításához, amelyek a szemantika és az elrendezés jobb megértését és kezelhetőségét segítik elő. Ezek az elemek olyan strukturális elemek, amelyek segítik a böngészőket és keresőmotorokat az oldal tartalmának megértésében, valamint könnyebbé teszik a fejlesztők számára a stílusok és elrendezés kezelését.</p><h3 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> <code>header</code></h3><p>Az <code>header</code> elemet általában a weboldal tetején használják, és benne gyakran megtalálható a weboldal címe, logója és a fő navigációs menü. A <code>header</code> az oldal tetején található és általában globális információkat tartalmaz, amelyek az összes oldalra vonatkoznak.</p><h3 id="nav" tabindex="-1"><a class="header-anchor" href="#nav" aria-hidden="true">#</a> <code>nav</code></h3><p>A <code>nav</code> elem egy olyan tartományt határoz meg, amely kifejezetten a navigációs elemek számára van fenntartva. Itt találhatóak az oldalon belüli linkek, amelyek segítenek a felhasználóknak az oldalon történő navigációban. A <code>nav</code> elem segít a böngészőknek a navigációs tartalom azonosításában, és hozzájárul az oldal struktúrájának kialakításához.</p><h3 id="section" tabindex="-1"><a class="header-anchor" href="#section" aria-hidden="true">#</a> <code>section</code></h3><p>A <code>section</code> elem egy olyan részt definiál az oldalon, amelynek saját tartalmi egysége van. Például egy weboldal tartalmazhat több különböző <code>section</code> elemet, amelyek különféle tartalmi témákat vagy fejezeteket képviselnek. Az <code>section</code> elem segít a weboldal tartalmának logikus csoportosításában.</p><h3 id="article" tabindex="-1"><a class="header-anchor" href="#article" aria-hidden="true">#</a> <code>article</code></h3><p>Az <code>article</code> elem egy olyan tartalmi egységet határoz meg, amely önállóan is értelmes és önmagában is érthető. Ez a tartalmi egység például lehet egy blogbejegyzés, hír cikk vagy egy önálló oldal. Az <code>article</code> elem segít a böngészőknek és keresőmotoroknak a tartalom elkülönítésében és azonosításában.</p><h3 id="aside" tabindex="-1"><a class="header-anchor" href="#aside" aria-hidden="true">#</a> <code>aside</code></h3><p>Az <code>aside</code> elem olyan tartalmi területet jelöl, amely részben kapcsolódik a fő tartalomhoz, de nem elengedhetetlen az alapértelmezett olvasáshoz. Ez lehet például egy oldalsáv, amely tartalmazhat linkeket, reklámokat, vagy további információkat. Az <code>aside</code> segít az oldal tisztaságában és a kiegészítő információk elkülönítésében.</p><h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> <code>footer</code></h3><p>A <code>footer</code> az oldal végén található, és általában tartalmazza az oldal láblécének információit, például a szerző nevét, kapcsolatinformációkat, vagy az oldal frissítési dátumát. A <code>footer</code> elem a weboldal záróelemeként szolgál, és segít az oldal befejezésében és strukturális kiegyensúlyozásában.</p><h3 id="main" tabindex="-1"><a class="header-anchor" href="#main" aria-hidden="true">#</a> <code>main</code></h3><p>Az <code>main</code> elem az oldal fő tartalmi területét jelöli, és csak egy darab <code>main</code> elemnek szabad egy oldalon előfordulni. Az <code>main</code> elem segít a böngészőknek és keresőmotoroknak az oldal fő tartalmának azonosításában. Ebben a tartományban található a legfontosabb és legrelevánsabb információ az oldalon.</p><h3 id="pelda" tabindex="-1"><a class="header-anchor" href="#pelda" aria-hidden="true">#</a> Példa</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hu<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>HTML5 szemantikus elemek példa<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>HTML5 szemantikus elemek példa<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Kezdőlap<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/about<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Rólunk<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/contact<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Kapcsolat<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Bevezetés<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Ez a weboldal a HTML5 szemantikus elemek használatát mutatja be.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
        
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Funkciók<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Bemutatja a header, nav, section, article, aside, footer és main elemeket.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
        
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Cikk címe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Ez a cikk bemutatja az HTML5 szemantikus elemek használatát.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">&gt;</span></span>Kiemelt hírek<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/news1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Fontos hír 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/news2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Fontos hír 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token entity named-entity" title="©">&amp;copy;</span> 2023 Weboldal Neve. Minden jog fenntartva.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Az HTML5 szemantikus elemek nagyban hozzájárulnak a weboldalak megértéséhez és karbantarthatóságához. A böngészők és keresőmotorok hatékonyabban tudják feldolgozni az oldal tartalmát, és a fejlesztőknek segítséget nyújtanak az oldalak strukturális kialakításában.</p>`,50),p=[l];function o(c,i){return s(),n("div",null,p)}const d=a(e,[["render",o],["__file","lesson8.html.vue"]]);export{d as default};
