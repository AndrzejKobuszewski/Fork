var a = 0.3;
var b = 7;
var result = null;
if (a>= b) {
  result = "liczba a jest większa od liczby b";}
  else if (a == b) {
  result = "liczba a jest równa liczbie b";}
else
{result = "liczba b jest większa od liczby a";}
console.log(result);
// Zadanie 1
var a = 12;
var b = 3;
var c = 12;
var pierwszePorownanie = null;
var najwiekszaLiczba = null;
if (a>b) { pierwszePorownanie = a}
 else {if (a==b) {najwiekszaLiczba = a +" i " + b}
  else {pierwszePorownanie = b}
 }
if (pierwszePorownanie < c) { najwiekszaLiczba = c}
 else {if (c == pierwszePorownanie) {najwiekszaLiczba = najwiekszaLiczba + c}
   else {najwiekszaLiczba = pierwszePorownanie}
 }
// jak nie wypisać wartości null na ekranie
console.log("Największa liczba z a = "+a+", b = "+b+" i c = " + c+ " to " + najwiekszaLiczba);
//Zadanie 2
for (var	i=1;	i<=10;	i=i+1)
{console.log(i +". Lubię JavaScript");}
//Zadanie 3. Logicznie mi nie pasuje, że taka pętla się uruchamia : i=1 spełnia warunek kończący i<=10

result =0;
for (var	i=1;	i<=10;	i=i+1){
  result= result + i;
}
console.log("Zadanie 4:" + result)
//Zadanie 4
var n = 15;
var parzysta = null;
for (var	i=1;	i<= n;	i=i+1)
{if (i%2 == 0) {parzysta = " jest liczbą parzystą"}
  else {parzysta = " jest liczbą nieparzystą"}
  console.log(i + parzysta);
}
// Zadanie 5
for (var	i=1;	i<=5;	i=i+1)
{console.log("i= " + i + ", j= " + j);}
for (var	j=1;	j<=3;	j=j+1)
{console.log("i= " + i + ", j= " + j);}
// ZAdanie 6

// Zadanie 7

/*
 Pętla zewnętrzna z licznikiem o zmiennej ```i``` zajmuje się
wierszami, a pętla wewnętrzna z licznikiem o zmiennej ```j``` zajmuje się kolumnami.
Zaczynamy od lewej górnej gwiazdki i przemieszczamy się w prawo będąc w pierwszym wierszu.
Kiedy pętla wewnętrzna dojdzie do ostatniej kolumny, kończy działanie. Wtedy pętla zewnętrzna
zwiększa licznik o 1 (przechodzi do kolejnego wiersza) i tak dalej.
*/

//Zmienna, przechowująca wielkość naszego kwadratu
var size = 5;

//Zmienna przechowująca jedną linię gwiazdek
var lineOfStars = "";

for(var i = 0; i < size; i++) {
    // W każdym kroku muszę zresetować zmienną, ponieważ zaczcynam tworzenie nowej linii
    lineOfStars = "";
    for(var j = 0; j < size; j++) {
        //Do zmiennej lineOfStars dodaje gwiazdkę
        lineOfStars = lineOfStars + "*";
    }
    // Oddzielam kazdą linię, pustym wierszem, ponieważ przeglądarka widząc 5 takich samych
    //wyników zwinie nasz kwadrat z gwiazdek do jednej linijki
    console.log(" ");

    //Wypisuje w konsoli zmienną lineOfStars (jej zawartość - dlatego jest bez cudzysłosów)
    console.log(lineOfStars);
}
//--------------------------------------------------
var size = 5;
var lineOfStars = "";

for(var i = 0; i < size; i++) {
    lineOfStars = "";
    for(var j = 0; j < i+1; j++) {
        lineOfStars = lineOfStars + "*";
    }
    console.log(" ");
    console.log(lineOfStars);}
//Zadanie 8
var size = 5;
var lineOfStars = "";
for(var i = 0; i < size; i++) {
    lineOfStars = "";
    for(var j = 0; j < i+1; j++) {
        lineOfStars = lineOfStars + "*";
    }
    for(var k = i+2; k < size + 1; k++) {
        lineOfStars = lineOfStars + k;
    }
    console.log(" ");
    console.log(lineOfStars);}
for(var i = size; i > 0; i--) {
    lineOfStars = "";
    for(var j = i ; j > 0; j--) {
      lineOfStars = lineOfStars + "*";
        }
    for(var k = i; k < size; k++) {
      lineOfStars = lineOfStars + (k+1);
        }
    console.log(" ");
    console.log(lineOfStars);}
//Zadanie 9
var size = 7;
var wierszTabliczki = "";
for(var i = 1; i < size +1; i++) { wierszTabliczki = ""
    for(var j = 1; j < size + 1; j++) {
      if (i*j>9) { wierszTabliczki = wierszTabliczki +  i + " x " + j + " = " + i*j + "| ";}
      else {wierszTabliczki = wierszTabliczki + i + " x " + j + " = " + i*j + " | ";}
    }
    console.log(wierszTabliczki);}
