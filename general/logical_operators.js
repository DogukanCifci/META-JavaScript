console.log(2+2);  //4
console.log(18-7) ; //11

console.log(5==5) ; // true
console.log(8>7) ; //true
console.log(1<0) ; //false 

100 == "100" ; //true --> strign ifadenin int typeindaki degerine bakip true verir
100 === "100" ; //false --> 3 = de iki degiskenin type ini kontrol eder .

1 != 1 ; //false

1 !== "1" ; // true (--> type ina baktigi icin)


var currentTime = 10 ;
console.log(currentTime > 10 && currentTime < 17) ; // -----> false Cünkü ilk kosulu saglamiyor.

console.log(currentTime > 9 && currentTime < 18 ) ; // true

console.log(currentTime > 11 || currentTime < 18) ; // || or anlamina geldigi icin true döndürür. 




1 + "2" // "12" string olarak 12 döndürür.

var overtime = 2 ;
overtime += 2 ;
overtime += 1 ;
overtime += 3 ; 
console.log(overtime) ; // 8 


var longString = "";
longString += "Once";       //+ ile birlestirdgimiz icin her kelimenin basinda bosluk biraktik. Yoksa birlesik yazardi. Pythondaki gibi
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); // "Once upon a time..."


5 > 4 > 3 ; // return false . Cünkü 5>4 --> true -----> true > 3 ---->false . true nun karsiligi cünkü 1 dir 


var timeRemaining = 0 ;
var energy = 10 ;

console.log("Game Over: ", timeRemaining == 0 || energy == 0 ) ; //Game Over : true