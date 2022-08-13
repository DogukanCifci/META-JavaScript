
var word = "selam" ;

var eslesme = word.match(/s/) ;

console.log(eslesme) ;


//Eger olmayan bir harf icin match kullansaydim null ciktisi verirdi

eslesme = word.match(/f/) ;
console.log(eslesme) ; //null

