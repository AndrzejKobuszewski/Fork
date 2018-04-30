var zad1 = [1,3,4];
console.log("Zadanie 1 :" + zad1[0] +", "+ zad1[1] +", "+ zad1[2]);
//Zadanie 1
var owoce = ["aronia", "jabłko", "truskawka", "cytryna", "mango"];
var lengthOwoce = 0;
console.log( "Zadanie 2 :" + owoce[0] +", ostatni " + owoce[owoce.length - 1]);

//Zadanie 2
var tablica = [2,4,5,3,5,7,32,34,6,10];
var sum =0;
for (i=0; i< tablica.length; i++) {
  sum= sum + tablica[i];}
console.log("ZAdanie3: " + sum)
//Zadanie 3
var tablica = [2,4,5,3,5,7,32,34,6,10];
var sum =0;
for (i=0; i< tablica.length; i++) {
  if (tablica[i]%2==0) {sum = sum + tablica[i]}}
console.log("Zadane 4 : "+ sum)
//Zadanie 4
var tablica = [2,4,5,3,5,7,32,34,6,10];
var max =0;
for (i=0; i< tablica.length; i++) {
  if (tablica[i]>max) {max = tablica[i]}
}
console.log("Zadane 5 : "+max)
//Zadanie 5
var tablica = [2,4,5,3,5,7,32,34,6,10];
var firstIndex =0;
for (i=0; i< tablica.length; i++) {
 for (j=i+1; j < tablica.length; j ++)
  {
  if (tablica[i] == tablica[j]) {
    firstIndex = tablica[i]}
    else {}

  }}
console.log("ZAdanie 6: "+ firstIndex);
//ZAdanie 6
var tablica = [2,4,5,3,5,7,32,34,6,10];
for (i = tablica.length-1; i > (-1) ; i--) {
  console.log("Zadanie 7 " + tablica[i])}

//Zadanie 7
