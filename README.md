# calculator
A számológép a négy alap műveletet valósítja meg, pozitív, negatív egész és tört számokon.

Az eredményt 13 számjegyen jeleníti meg. Az ennél hosszabb egészrésszel rendelkező számokat exponenciális alakban, az ennél hosszabb törtrésszel is rendelkező számokat kerekítve jeleníti meg.

Az MS gomb az éppen eredménykén kijelzett számot menti a memóriába, az MR gomb az utoljára a memoriába mentett számot használja fel következő operandusként.

# setup

Aa projekt gyökér mappájában:

$cd fronted

$npm install

Szintén a gyökér mappából:

$docker-compose up --build

A konténerek elékszülése után az alkalmazás a következő címen érhető el: http://localhost/

# A backend tesztek futtatása

$docker exec -it backend npm run test
