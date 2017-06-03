---
layout: index
title: Rólunk
---

# Az oldalról

A kezdeményezés azért jött létre, hogy egy nyílt, bárki által könnyen szerkeszthető, javítható jegyzetállományt hozzunk létre az egyetem tantárgyaihoz. Szerintünk akkor válik jóvá egy jegyzet, ha ahhoz bárki javasolhat módosításokat, és azokat könnyen be lehet vezetni. A jelenlegi rendszerben ez nem működik (gondoljunk csak a kézzel írott, beszkennelt vik.wikis jegyzetekre).

Ezen felül az is segít, bár nem szükségszerű, ha a jegyzetek nagyjából egységesek, így könnyen felismerhetőek, és egyszerű bennük eligazodni.

## Sablon

Hogy segítsük az új jegyzetek létrehozását, írtunk egy egyszerű [LaTeX sablont](https://github.com/bme-notes/latex-template) (ez egyben GitHub repository mintaként is szolgál).

Ha egy jelenleg üres tárgyhoz szeretnél jegyzetet feltölteni, ennek a tartalmát másold ki, majd abban kezdd a megírását. A `latex-template.tex` fájl lesz a jegyzet "főoldala", ebben kell majd a címet, szerzőket átírni (érdemes a fájlt a megfelelő tárgy nevére átnevezni).

A jegyzetet fejezetekre tagoljuk, ezeket külön `.tex` fájlba kell írni és a `fejezetek` mappába helyezni, majd megfelelő sorrendben beilleszteni a fő fájlba. Fejezetekre és a beillesztésükre is látsz példát a sablonban.

## Tételek, definíciók, bizonyítások

LateXban lehetőség van saját környezeteket definiálni, a sablonban a fenti hármat valósítottuk meg, ha az aktuális tárgyban is használtak ezek a fogalmak, akkor ajánljuk, hogy ehhez a mi környezetünket használd (így az összes jegyzetben egységesek lesznek a jelölések, könnyű lesz őket felismerni). Ezekre is láthasz példát a sablon fejezeteiben.

## Otthoni fejlesztés

A LateX környezet telepítése aránylag körülményes és sok helyet foglal, nehéz utána feltakarítani, ezért készítettünk egy [docker imaget](https://github.com/bme-notes/docker) is, amellyel könnyen fordítható lokálisan a sablon, telepítve vannak benne a gyakran használt LaTeX kiegészítők. Ennek a használati útmutatója megtalálható a repository leírásában.

## Pull requestek

Alapesetben úgy tudsz egy jegyzethez vagy az oldalhoz módosítási javaslatot beküldeni, hogy forkolod a megfelelő repositorynkat, majd oda commitolod a változtatásaidat, ezek után beküldesz egy pull requestet. Ezt egy erre jogosult ember fogja elbírálni, és ha konstruktívnak tartja a változatást, azt be is mergeli az eredeti verzióba.

A pull requestekről részletesebben [itt](https://help.github.com/articles/about-pull-requests/) olvashatsz.

## Automatikus PDF generálás

A GitHubos rendszerünk szépsége, hogy könnyen lehet hozzá CI rendszert csatolni (jelenleg Travist használunk), mellyel lehetőségünk nyílik arra, hogy minden commit után automatikusan elkészítsük a frissített PDF-et, és az rögtön ki is kerüljön az oldalra, hogy az bárki számára letölthető legyen.
