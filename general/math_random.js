//console.log(Math.random()) ; ----->  0 ve 0.99 arasinda bir sayi olusturur.

var decimalNumber = Math.random() ;

console.log(decimalNumber) ;

console.log(decimalNumber * 10) ; // Bu sekilde normal sayi üretebiliriz.

var number = decimalNumber * 10 ;

console.log(number) ;

var rounded = Math.ceil(number) ;

console.log(rounded) ;