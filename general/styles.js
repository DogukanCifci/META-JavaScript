var cubes = "ABCDEFGH" ;

for (var i = 0 ; i < cubes.length ; i++){
    var styles = "font-size:20px ; color : white ; border-radius: 10px; border : 1px solid blue; background : purple;" ;
    console.log("%c" + cubes[i] , styles) ; //%c ile cubes[i] arasinda + --- cubes[i] ile styles arasi , konulacak.
}


// Another example 

var number = "123456789" ;
for (var i = 0 ; i < number.length ; i++) {
    console.log(number[i]);
}