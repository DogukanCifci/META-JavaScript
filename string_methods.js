//charAt
selamlama = "Hello" ;
console.log("---------") ;
console.log("charAt kullanarak indisleme yöntemiymis gibi hangi indexte ne var bulabiliriz.")
console.log("selamlama varinin ilk harfi : ", selamlama.charAt(0)) ;


//index or find method in Python here in JS with indexOf() ;

"ho-ho-ho".indexOf("h") ; // 0

var name1 = "Doguk-anD-" ;

name1.indexOf("D") ; // 0

console.log("Last Index of Method ile : ", name1.lastIndexOf("-")) ;
console.log("indexOf methodu ile : ", name1.indexOf("-")) ;
console.log(name1.indexOf("-")) ;

console.log(name1.indexOf("D")) ; // Ilk D harfi nerdeyse onun indexini verir.

//lastIndexOf sondan aramaya baslar ama ilk harfi yine 0. indis olarak kabul eder.
//indexOf bastan aramaya baslar.Yine ayni sekidle ilk harfi 0. indis olarak kabul eder.
//split method 

var word = "ho-ab-ce" ;

var newList = word.split("-") ; //Like in Python

console.log(newList) ;


//toUpperCase toLowerCase ;

var greet = "merhABa" ;

var kücük = greet.toLowerCase() ;
var büyük = greet.toUpperCase() ;
console.log("Normalde ; ", greet) ;
console.log("Hepsi Kücük Harf ile ; ", kücük);
console.log("Hepsi büyük harf ile ; ", büyük) ;

console.log("-------------------")


//typeof :

var test = typeof("Dogukan") ;
console.log(test) ;
var test = typeof(3.14) ;
console.log(test);

var test = typeof(true) ;
console.log(test);

var test = typeof(1 > 3) ;
console.log(test);

var test = typeof([1, 3, 5, 7]) ;
console.log(test) ; //object

var test = typeof({color : "red", price : 13512}) ;
console.log(test) ; //object

var test = typeof(function abc(){ a = 1, b = 2}) ;
console.log(test) ; // function