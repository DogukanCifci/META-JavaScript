var colors = ["red", "blue", "purple", "pink", "gelb"] ;

console.log(colors[0])
console.log("-----------")

console.log("With for loops : ")
console.log("-----------")

// with for loops 

for (var i = 0 ; i < colors.length ; i++) {
    console.log(colors[i]) ;
}

console.log("-----------")
console.log("With a function and for loops ")
console.log("-----------")



// with function and for loops 

function arrayListColors(arr) {
    for (var i = 0 ; i < arr.length ; i++){
        console.log(i + 1, '-' , arr[i]) ;
    }
}

var colors = ["red", "blue", "purple", "pink", "gelb"] ;
arrayListColors(colors) ;
