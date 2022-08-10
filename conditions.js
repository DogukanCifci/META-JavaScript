
//With if else condition 

var light = "green" ;

if (light == "green") {
    console.log("Drive")
}

else if (light == "orange") {
    console.log("Get ready !")
}

else if (light == "red") {
    console.log("STOP!")
}

else {
    console.log("The light is not re, green or orange!");
}


// with switch

switch(light){
    case 'green' :
        console.log("Drive.") ;
        break ;
    
    case 'orange' :
        console.log("Get Ready !");
        break ;

    case 'red' :
        console.log("Stop!") ;
        break  ;
    
    default :
        console.log("The light is not green, orange or red..") ; 
        break ;
}



//Example 

var age = 10 ;

if (age >= 65) {
    console.log("conditional statements- if else and switch -case") ;
}

else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary");
}

else if (age < 18) {
    console.log("You get an allowance") ;
}

else {
    console.log("The value of the age variable is not numerical") ; //Sayi "10" olarak girilse bile numeric olarak algilar ve bir üstteki ciktiyi verir.
}


//Example 

var day = "Sunday" ;

switch(day) {
    case 'Monday' :
        console.log("Do something!") ;
        break ;
    case 'Tuesday' :
        console.log("Do something") ;
        break ;
    case 'Wednesday' :
        console.log("Do soemthing!") ;
        break ;
    case 'Thursday' :
        console.log("Do something!") ;
        break ;
    case 'Friday' :
        console.log("Do soemthing") ;
        break ;
    case 'Saturday' :
        console.log('Do something') ;
        break ; 
    case 'Sunday' :
        console.log("Do something") ;
        break ;
    default :
        console.log("There is no such day! ") ;
        break ;
 }

