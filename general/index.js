// This is a single line comment

/* This is a multi line ,
multi line comment */

console.log('Hello World') ; //like print() ---> console.log()

var person = "Johson" ;

console.log("Hello", person) ;

var greeting = "Hello" ;

console.log(greeting, person) ;

//Python print , + gibi özellikler ile ayni. Sadece print yerine console.log yapiyoruz.


var petDog = "Rex" ;
var petCat = "Pepper" ;
console.log(petDog);
console.log(petCat) ;

console.log("My pet dog's name is: ", petDog);
console.log("My pet cat's name is: ", petCat) ;

var catSound = "puurr" ;
var dogSound = "woof" ;

console.log(petDog,"says",dogSound) ;
console.log(petCat,"says",catSound) ; //Burda hala puurr diycek.

catSound = "Meow" ;
console.log(petCat,"now says", catSound); // Degistirdikten sonra artik Meow diycek.