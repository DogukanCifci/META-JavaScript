// Python append and pop method


//Method 1

function arrayBuilder(one, two, three) {
    arr = [] ;
    arr.push(one) ;
    arr.push(two) ;
    arr.push(three) ;
    console.log(arr) ;
}

arrayBuilder("Apple", "Banana", "Pie"); 

//Method 2 

function simpleArr(one, two ,three) {
    arr.push(one) ;
    arr.push(two) ;
    arr.push(three) ;
    return arr ; //Disardan cagirirken console.log() kullanmamiz gerekir sonucu görmek icin.
}

var newList = simpleArr("ONE", "TWO", "THREE") ;

console.log(newList) ;//Pythondaki mantik gibi Eger return ile döndürülüyorsa tekrar print ile yazdirmak zorudnayiz.

//Ama fonksiyon icinde print ile cikti aliniyorsa sadece fonksiyon adini yazmamiz yeterli.

// Hem fonksiyon icindek icikti hem de fonksiyonu tanimlarken print icinde yazarsak en osn cikti olarak undefined verir. (Python ile ayni mantikta)


//POP METHOD

var newArr = ["Pine", "Apple", "Pencil"] ;

function myPopFunction(newList1) {
    newList1.pop() ; // Son elemani siler.
    return newList1 ;
}


console.log(myPopFunction(newArr)) ;


